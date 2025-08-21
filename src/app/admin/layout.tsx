import "../globals.css";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/cn";
import { poppins } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Console",
  robots: { follow: false, index: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={cn("font-poppins min-h-svh scroll-smooth bg-white font-semibold", poppins.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
