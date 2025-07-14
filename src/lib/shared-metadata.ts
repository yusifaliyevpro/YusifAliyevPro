import type { Metadata } from "next";
import { BASE_URL } from "./constants";

export const profileOGImage = { alt: "Yusif Aliyev Logo", height: 500, url: "/Profile.png", width: 500 };

export const sharedMetadata = {
  metadataBase: new URL(BASE_URL),
  description:
    "Welcome to my personal website. If you want to learn more about who I am, I recommend taking a look at all the pages.",
  creator: "Yusif Aliyev",
  publisher: "Vercel Hosting",
  generator: "Next.js",
  applicationName: "Yusif Aliyev",
  authors: [{ name: "Yusif Aliyev", url: BASE_URL }],
  robots: { follow: true, googleBot: { follow: true, index: true }, index: true },
  keywords: [
    "Yusif Aliyev",
    "Yusif Aliyev Pro",
    "yusifaliyevpro",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "JavaScript Developer",
    "TailwindCSS",
    "Personal Website",
    "Portfolio",
    "Azerbaijan",
    "Blogger",
    "Tech Enthusiast",
    "Open Source",
    "UI/UX",
    "Vercel",
    "Programming",
    "Coding",
    "Modern Web",
    "Developer Blog",
  ],
} as const satisfies Omit<Metadata, "openGraph">;

export const sharedOpenGraph = {
  locale: "az_AZ",
  countryName: "Azerbaijan",
  siteName: "Yusif Aliyev",
} as const satisfies Metadata["openGraph"];
