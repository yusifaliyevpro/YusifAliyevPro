"use client";

import { cn } from "@/lib/cn";
import { Button } from "@heroui/button";
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
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  title: ReactNode | string;
  value: string | boolean;
};

export function BooleanInput({
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
      </div>
      <p
        className={cn("flex flex-row items-center justify-start gap-x-2 text-wrap text-green-600", {
          "sr-only": !isEntered,
        })}
      >
        <SiTicktick className="w-6 text-lg" />
        {name}: {value ? "Bəli" : "Xeyr"}
      </p>
    </>
  );
}
