import { getShortLink } from "@/src/data-access/short-link/get";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

export const metadata: Metadata = { title: "Redirecting...", robots: { index: false, follow: false } };

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const shortlink = await getShortLink(slug);
  if (!shortlink) notFound();
  redirect(shortlink.link);
}
