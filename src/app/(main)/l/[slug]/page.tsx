import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";

export default async function ShortLink({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Links = await prisma.shortenLink.findMany({ where: { slug } });
  // if (Links.length !== 0) {
  //   const link = Links[0].link;
  //   redirect(link);
  // } else {
  //   notFound();
  // }
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center">
      <div className="relative animate-spinner-linear-spin text-8xl font-bold text-blue-600">
        <AiOutlineLoading />
      </div>
    </div>
  );
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
