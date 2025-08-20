"use client";

import type { ReactNode } from "react";

import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import { MotionConfig } from "motion/react";
import { useRouter } from "next/navigation";
import type { Route } from "next";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  const routerPush = (path: string, routerOptions: undefined) => router.push(path as Route, routerOptions);
  return (
    <HeroUIProvider navigate={routerPush}>
      <ToastProvider toastOffset={100} />
      <MotionConfig>{children}</MotionConfig>
    </HeroUIProvider>
  );
}
