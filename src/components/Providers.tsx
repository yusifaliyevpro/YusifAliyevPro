"use client";

import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider toastOffset={100} />

      <MotionConfig>
        {" "}
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </MotionConfig>
    </HeroUIProvider>
  );
}
