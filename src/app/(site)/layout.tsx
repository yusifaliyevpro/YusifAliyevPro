import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KofeAlWidget from "@/components/KofeAlWidget";
import { BASE_URL } from "@/lib/constants";
import {
  keywords,
  creator,
  publisher,
  applicationName,
  robots,
  authors,
  generator,
  countryName,
  locale,
  description,
} from "@/src/lib/shared-metadata";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: creator,
    template: "Yusif Aliyev | %s",
  },
  description,
  openGraph: {
    type: "website",
    siteName: creator,
    locale,
    countryName,
  },
  robots,
  creator,
  publisher,
  applicationName,
  generator,
  authors,
  keywords,
  verification: { google: "19T4aaaA0mlU3qd0sFEl3z8e_Y_Zb_am5Cfkr5wxRWM" },
};
