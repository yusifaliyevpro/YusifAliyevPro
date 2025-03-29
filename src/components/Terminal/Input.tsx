"use client";

import { cn } from "@/lib/cn";
import { Input as HeroInput } from "@heroui/input";
import { type ReactNode, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";

type TerminalInputProps = {
  inputPlaceholder?: string;
  isEntered: boolean;
  isPreviousEntered: boolean;
  name: string;
  placeholder: string;
  setIsEntered: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title: ReactNode | string;
  value: string | boolean;
};

export function Input({
  inputPlaceholder,
  isEntered,
  isPreviousEntered,
  name,
  placeholder,
  setIsEntered,
  setValue,
  title,
  value,
}: TerminalInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isPreviousEntered && ref.current) {
      ref.current.focus();
    }
  }, [isPreviousEntered]);

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsEntered(true);
    }
  };

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
        <HeroInput
          ref={ref}
          autoFocus
          enterKeyHint="enter"
          isDisabled={isEntered}
          maxLength={150}
          placeholder={inputPlaceholder}
          type="text"
          value={String(value)}
          classNames={{
            input: "font-mono text-base font-bold placeholder:text-slate-400 after:bg-black",
            inputWrapper:
              "bg-transparent shadow-none hover:bg-transparent group-data-[focus=true]:bg-transparent group-data-[hover=true]:bg-transparent",
          }}
          onKeyDown={handleEnterDown}
          onValueChange={setValue}
        />
      </div>
      <p
        className={cn("flex flex-row items-center justify-start gap-x-2 text-wrap text-green-600", {
          "sr-only": !isEntered,
        })}
      >
        <SiTicktick className="w-6 text-lg" />
        {name}: {value}
      </p>
    </>
  );
}
