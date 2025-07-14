import "./globals.css";
import { Providers } from "../components/Providers";
import { cn } from "../lib/cn";
import { jua, poppins, source_sans_3 } from "../lib/fonts";
import type { Metadata } from "next";
import { sharedMetadata } from "@/lib/shared-metadata";

export const metadata: Metadata = {
  title: {
    default: sharedMetadata.creator,
    template: `${sharedMetadata.creator} | %s`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body
        className={cn(
          "min-h-svh scroll-smooth bg-white font-poppins font-semibold",
          poppins.variable,
          jua.variable,
          source_sans_3.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
