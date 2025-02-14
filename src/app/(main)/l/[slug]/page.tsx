import { redirectToLink } from "@/src/lib/prisma/actions";
import { Metadata } from "next";
import Loading from "../../loading";
import { notFound } from "next/navigation";

export default async function ShortLink({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const response = await redirectToLink(slug);
  if (!response.success) notFound();
  return <Loading />;
}

export const metadata: Metadata = {
  title: "Short Link",
  description: "Click to go the Link",
  robots: { index: false, follow: false },
  openGraph: {
    images: [
      {
        url: "/Profile.png",
        width: 1080,
        height: 1080,
        alt: "Yusif Aliyev Picture",
      },
    ],
  },
};
