"use client";

import { cn } from "@/lib/cn";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { ReactNode, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

type TerminalInputProps = {
  title: ReactNode | string;
  placeholder: string;
  value: string | boolean;
  setValue: React.Dispatch<React.SetStateAction<string | boolean>>;
  isPreviousEntered: boolean;
  isEntered: boolean;
  setIsEntered: React.Dispatch<React.SetStateAction<boolean>>;
  inputPlaceholder?: string;
  isBoolean?: boolean;
  name: string;
};

export default function TerminalInput({
  title,
  name,
  placeholder,
  value,
  setValue,
  isPreviousEntered,
  isEntered,
  setIsEntered,
  inputPlaceholder,
  isBoolean,
}: TerminalInputProps) {
  const ref = useRef(null);
  useEffect(() => {
    if (isPreviousEntered && ref.current) {
      ref.current.focus();
    }
  }, [isPreviousEntered]);

  return (
    <>
      <p className={cn({ "sr-only": isEntered || !isPreviousEntered })}>{title}</p>
      <div
        className={cn("flex flex-row items-center gap-x-3 text-base lg:text-lg", {
          "sr-only": !isPreviousEntered || isEntered,
        })}
      >
        <FaArrowRightLong className="text-lg text-green-600" />
        <span className="text-blue-500">$</span> <span className="text-nowrap text-slate-500">{placeholder}</span>
        {!isBoolean ? (
          <Input
            ref={ref}
            autoFocus
            classNames={{
              inputWrapper:
                "bg-transparent shadow-none hover:bg-transparent group-data-[focus=true]:bg-transparent group-data-[hover=true]:bg-transparent",
              input: "font-mono text-base font-bold placeholder:text-slate-400 after:bg-black",
            }}
            enterKeyHint="enter"
            isDisabled={isEntered}
            maxLength={150}
            placeholder={inputPlaceholder}
            type="text"
            value={value as string}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setIsEntered(true);
              }
            }}
            onValueChange={setValue}
          />
        ) : (
          <div className="flex flex-row gap-x-3">
            <Button className="font-bold" color="warning" radius="sm" onPress={() => setIsEntered(true)}>
              Xeyr
            </Button>
            <Button
              className="font-bold"
              color="primary"
              radius="sm"
              onPress={() => {
                setIsEntered(true);
                setValue(true);
              }}
            >
              Bəli
            </Button>
          </div>
        )}
      </div>
      <p
        className={cn("flex flex-row items-center justify-start gap-x-2 text-wrap text-green-600", {
          "sr-only": !isEntered,
        })}
      >
        <SiTicktick className="w-6 text-lg" />
        {name}: {typeof value === "string" ? value : value ? "Bəli" : "Xeyr"}
      </p>
    </>
  );
}
