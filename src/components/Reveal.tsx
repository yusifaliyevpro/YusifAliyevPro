"use client";

import { cn } from "@/lib/cn";
import { useAnimation, useInView } from "motion/react";
import { m } from "motion/react";
import React, { useEffect, useRef, type ElementType } from "react";
import type { ReactNode } from "react";

type RevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  first?: boolean;
  className?: string;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export default function Reveal<T extends ElementType = "div">({ children, first, className, as, ...props }: RevealProps<T>) {
  const Tag = as || "div";
  const ref = useRef<null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <Tag ref={ref} className={cn("relative w-fit overflow-hidden", { "py-2": !first })} {...props}>
      <m.span
        animate={mainControls}
        className={className}
        initial="hidden"
        transition={{ duration: 0.3, delay: 0.3 }}
        variants={{ hidden: { opacity: 0, y: first ? 60 : 0 }, visible: { opacity: 1, y: 0 } }}
      >
        {children}
      </m.span>
      <m.span
        animate={slideControls}
        className="absolute bottom-0 left-0 right-0 top-0 z-[200] rounded-sm bg-blue-500"
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={{
          hidden: { left: 0, opacity: first ? 0 : 1 },
          visible: { left: "100%", opacity: 1 },
        }}
      />
    </Tag>
  );
}
