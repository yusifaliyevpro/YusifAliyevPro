"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MotionConfig } from "framer-motion";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist";

export function Providers({
  children,
  ...props
}: {
  children: ReactNode;
} & ThemeProviderProps) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...props}>
        <MotionConfig>{children}</MotionConfig>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
