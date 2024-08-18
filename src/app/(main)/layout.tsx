import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "../../components/Footer";
import KofeAlWidget from "@/components/KofeAlWidget";
import { Toaster } from "react-hot-toast";
import { jua, poppins, source_sans_3 } from "@/lib/fonts";
import { BASE_URL } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yusif Aliyev",
    template: "Yusif Aliyev | %s",
  },
  description:
    "Mənim şəxsi websaytıma xoş gəlmişsiniz. Bu websaytda mən özüm haqqımda vacib detalları, blog postlarımı paylaşıram. Mənim kim olduğum haqqında daha çox məlumat almaq istəyirsənsə bütün səhifələrə bir baxış atmağını tövsiyə edərdim.",
  openGraph: {
    type: "website",
    siteName: "Yusif Aliyev",
    locale: "az_AZ",
    url: BASE_URL,
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },
  creator: "Yusif Aliyev",
  publisher: "Yusif Aliyev",
  applicationName: "YusifAliyevPro",
  generator: "Next.js",
  authors: [{ name: "Yusif Aliyev", url: "https://yusifaliyevpro.com" }],
  keywords: ["Yusif Aliyev", "yusifaliyevpro"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="az">
      <body
        className={`${poppins.className} ${poppins.variable} ${jua.variable} ${source_sans_3.variable} min-h-[100svh] scroll-smooth bg-white font-semibold dark:bg-foreground dark:text-slate-200`}
      >
        <Providers>
          <Toaster
            toastOptions={{
              className: "",
            }}
            position="bottom-right"
            reverseOrder={false}
          />
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
      </body>
    </html>
  );
}
