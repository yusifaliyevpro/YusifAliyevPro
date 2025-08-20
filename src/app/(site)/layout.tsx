import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/lib/env";
import KofeAlWidget from "@/components/KofeAlWidget";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { sharedMetadata, sharedOpenGraph } from "@/lib/shared-metadata";

export const metadata: Metadata = {
  ...sharedMetadata,
  openGraph: sharedOpenGraph,
  verification: { google: "19T4aaaA0mlU3qd0sFEl3z8e_Y_Zb_am5Cfkr5wxRWM" },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      {children}
      <KofeAlWidget isActiveOnMobile isHoverable username="yusifaliyevpro" />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
