"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MotionConfig } from "framer-motion";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <MotionConfig>{children}</MotionConfig>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
