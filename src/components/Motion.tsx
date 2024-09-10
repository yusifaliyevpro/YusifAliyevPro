"use client";

import { motion } from "framer-motion";
import type { ComponentProps, HtmlHTMLAttributes, ReactNode } from "react";
import type { MotionProps } from "framer-motion";

type CustomMotionProps<Tag extends keyof JSX.IntrinsicElements> = MotionProps &
  ComponentProps<Tag> & {
    type?: Tag | "div";
    children?: ReactNode;
    className?: string | null;
  };

export const Motion = <Tag extends keyof JSX.IntrinsicElements>({
  type,
  children,
  className,
  ...props
}: CustomMotionProps<Tag>) => {
  const Component = type ? (motion as any)[type] : motion.div;
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
