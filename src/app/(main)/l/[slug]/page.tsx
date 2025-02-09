import { getLinkSlugs } from "@/src/lib/prisma/actions";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Loading from "../../loading";

export default async function ShortLink({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const link = await getLinkSlugs(slug);
  if (link) permanentRedirect(link.link);
  else notFound();

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
