import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KofeAlWidget from "@/components/KofeAlWidget";
import { Toaster } from "react-hot-toast";
import { jua, poppins, source_sans_3 } from "@/lib/fonts";
import { BASE_URL } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/cn";

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
    notranslate: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Yusif Aliyev",
  publisher: "Yusif Aliyev",
  applicationName: "YusifAliyevPro",
  generator: "Next.js",
  authors: [{ name: "Yusif Aliyev", url: "https://yusifaliyevpro.com" }],
  keywords: [
    "Yusif Aliyev",
    "yusifaliyevpro",
    "Full-Stack Developer",
    "Developer",
    "Web Developer",
    "NextJS Developer",
  ],
  other: {
    "google-site-verification": "19T4aaaA0mlU3qd0sFEl3z8e_Y_Zb_am5Cfkr5wxRWM",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh scroll-smooth bg-white font-poppins font-semibold",
          poppins.variable,
          jua.variable,
          source_sans_3.variable,
          "dark:bg-foreground dark:text-slate-200",
        )}
      >
        <Providers attribute="class" defaultTheme="light">
          <Header />
          {children}
          <KofeAlWidget
            username="yusifaliyevpro"
            isActiveOnMobile
            isHoverable
          />
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
        <Toaster
          toastOptions={{
            className: "",
          }}
          position="bottom-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
