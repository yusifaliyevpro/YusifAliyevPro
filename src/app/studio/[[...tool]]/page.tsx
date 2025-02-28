/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
import config from "../../../../sanity.config";
import { BASE_URL } from "@/src/lib/constants";
import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import { metadata as studioMetadata } from "next-sanity/studio";

export const dynamic = "force-static";

export { viewport } from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yusif Aliyev",
    template: "Yusif Aliyev | %s",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  creator: "Yusif Aliyev",
  publisher: "Vercel Hosting",
  applicationName: "YusifAliyevPro",
  generator: "Next.js",
  authors: [{ name: "Yusif Aliyev", url: BASE_URL }],
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
