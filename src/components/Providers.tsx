"use client";

import type { ReactNode } from "react";

import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import { MotionConfig } from "motion/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider toastOffset={100} />
      <MotionConfig>{children}</MotionConfig>
    </HeroUIProvider>
  );
}
