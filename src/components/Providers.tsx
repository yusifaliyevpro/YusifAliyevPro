"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MotionConfig } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <MotionConfig>{children}</MotionConfig>
    </NextUIProvider>
  );
}
