"use client";
import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Motion } from "./Motion";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  first?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Reveal({
  children,
  first,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <Motion
        type={as}
        variants={{
          hidden: { opacity: 0, y: first ? 60 : 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        className={cn(className, { "py-2": !first })}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {children}
      </Motion>
      <Motion
        variants={{
          hidden: { left: 0, opacity: first ? 0 : 1 },
          visible: { left: "100%", opacity: 1 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 top-0 z-[200] rounded-sm bg-blue-500"
      />
    </div>
  );
}
