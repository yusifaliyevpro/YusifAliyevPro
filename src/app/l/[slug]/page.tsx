import type { Metadata } from "next";

import { redirectToLink } from "@/src/lib/prisma/actions";
import { notFound } from "next/navigation";

export default async function ShortLink({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const response = await redirectToLink(slug);
  if (!response.success) notFound();
}

export const metadata: Metadata = {
  description: "Click to go to Link",
  openGraph: {
    images: [
      {
        alt: "Yusif Aliyev Picture",
        height: 1080,
        url: "/Profile.png",
        width: 1080,
      },
    ],
  },
  robots: { follow: false, index: false },
  title: "Short Link",
};
