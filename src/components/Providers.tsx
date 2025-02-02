"use client";

import { HeroUIProvider } from "@heroui/react";
import { MotionConfig } from "motion/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
export function Providers({
  children,
}: {
  children: ReactNode;
} & any) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <MotionConfig>{children}</MotionConfig>
    </HeroUIProvider>
  );
}
