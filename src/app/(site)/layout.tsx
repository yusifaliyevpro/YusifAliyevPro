import "../globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/lib/env";
import KofeAlWidget from "@/components/KofeAlWidget";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { sharedMetadata, sharedOpenGraph } from "@/lib/shared-metadata";
import { jua, poppins, source_sans_3 } from "@/lib/fonts";
import { Providers } from "@/components/Providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  ...sharedMetadata,
  openGraph: sharedOpenGraph,
  verification: { google: "19T4aaaA0mlU3qd0sFEl3z8e_Y_Zb_am5Cfkr5wxRWM" },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-poppins min-h-svh scroll-smooth bg-white font-semibold",
          poppins.variable,
          jua.variable,
          source_sans_3.variable,
        )}
      >
        <Providers>
          <Header />
          {children}
          <KofeAlWidget isActiveOnMobile isHoverable username="yusifaliyevpro" />
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
