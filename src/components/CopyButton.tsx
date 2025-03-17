"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

export default function CopyButton({ text }: { text: string }) {
  const [mouseLeaved, setMouseLeaved] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const handle = () => {
    copy(text);
    setMouseLeaved(false);
    setIsOpen(true);
  };
  return (
    <div className="transition-all delay-150 duration-300">
      <Tooltip color="primary" content="Copied" isOpen={isOpen}>
        <Button
          isIconOnly
          variant="light"
          onPress={handle}
          onMouseLeave={() => {
            setMouseLeaved(true);
            setIsOpen(false);
          }}
        >
          {mouseLeaved ? <IoCopyOutline className="text-2xl" /> : <TiTick className="text-2xl" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </Tooltip>
    </div>
  );
}
