import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KofeAlWidget from "@/components/KofeAlWidget";
import "@/lib/env";
import { BASE_URL } from "@/lib/constants";
import {
  applicationName,
  authors,
  countryName,
  creator,
  description,
  generator,
  keywords,
  locale,
  publisher,
  robots,
} from "@/src/lib/shared-metadata";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactNode } from "react";

export default async function RootLayout({ children }: { children: ReactNode }) {
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
  applicationName,
  authors,
  creator,
  description,
  generator,
  keywords,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    countryName,
    locale,
    siteName: creator,
    type: "website",
  },
  publisher,
  robots,
  title: {
    default: creator,
    template: "Yusif Aliyev | %s",
  },
  verification: { google: "19T4aaaA0mlU3qd0sFEl3z8e_Y_Zb_am5Cfkr5wxRWM" },
};
