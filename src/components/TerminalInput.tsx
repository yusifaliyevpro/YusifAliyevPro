"use client";
import { cn } from "@/lib/cn";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

type TerminalInputProps = {
  title: JSX.Element | string;
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
      <p className={cn({ "sr-only": isEntered || !isPreviousEntered })}>
        {title}
      </p>
      <div
        className={cn(
          "flex flex-row items-center gap-x-3 text-base lg:text-lg",
          {
            "sr-only": !isPreviousEntered || isEntered,
          },
        )}
      >
        <FaArrowRightLong className="text-lg text-green-600" />
        <span className="text-blue-500">$</span>{" "}
        <span className="text-nowrap text-slate-500">{placeholder}</span>
        {!isBoolean ? (
          <Input
            type="text"
            value={value as string}
            placeholder={inputPlaceholder}
            maxLength={150}
            ref={ref}
            isDisabled={isEntered}
            autoFocus
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setIsEntered(true);
              }
            }}
            onValueChange={setValue}
            classNames={{
              inputWrapper:
                "bg-transparent hover:bg-transparent shadow-none group-data-[focus=true]:bg-transparent group-data-[hover=true]:bg-transparent",
              input:
                "font-mono  after:bg-black text-base font-bold placeholder:text-slate-400",
            }}
          />
        ) : (
          <div className="flex flex-row gap-x-3">
            <Button
              onClick={() => setIsEntered(true)}
              color="warning"
              className="font-bold"
              radius="sm"
            >
              Xeyr
            </Button>
            <Button
              onClick={() => {
                setIsEntered(true);
                setValue(true);
              }}
              radius="sm"
              color="primary"
              className="font-bold"
            >
              Bəli
            </Button>
          </div>
        )}
      </div>
      <p
        className={cn(
          "flex flex-row items-center justify-start gap-x-2 text-wrap text-green-600",
          {
            "sr-only": !isEntered,
          },
        )}
      >
        <SiTicktick className="w-6 text-lg" />
        {name}: {typeof value === "string" ? value : value ? "Bəli" : "Xeyr"}
      </p>
    </>
  );
}
