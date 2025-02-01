"use client";

import { HeroUIProvider } from "@heroui/react";
import { MotionConfig } from "motion/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({
  children,
  ...props
}: {
  children: ReactNode;
} & any) {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...props}>
        <MotionConfig>{children}</MotionConfig>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
