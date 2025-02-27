import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KofeAlWidget from "@/components/KofeAlWidget";
import { BASE_URL } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <KofeAlWidget username="yusifaliyevpro" isActiveOnMobile isHoverable />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yusif Aliyev",
    template: "Yusif Aliyev | %s",
  },
  description:
    "Şəxsi Websaytıma xoş gəlmişsiniz. Mənim kim olduğum haqqında daha çox məlumat almaq istəyirsənsə bütün səhifələrə bir baxış atmağını tövsiyə edirəm",
  openGraph: {
    type: "website",
    siteName: "Yusif Aliyev",
    locale: "az_AZ",
    countryName: "Azerbaijan",
    url: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Yusif Aliyev",
  publisher: "Vercel Hosting",
  applicationName: "YusifAliyevPro",
  generator: "Next.js",
  authors: [{ name: "Yusif Aliyev", url: BASE_URL }],
  keywords: [
    "Yusif Aliyev",
    "yusifaliyevpro",
    "Yusif Aliyev Pro",
    "Full-Stack Developer",
    "Developer",
    "Web Developer",
    "NextJS Developer",
    "Azerbaijan",
    "Blogger",
  ],
  verification: {
    google: "19T4aaaA0mlU3qd0sFEl3z8e_Y_Zb_am5Cfkr5wxRWM",
  },
};
