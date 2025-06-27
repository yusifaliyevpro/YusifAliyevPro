import { getShortLink } from "@/src/data-access/short-link/get";
import { notFound, redirect } from "next/navigation";

export default async function ShortLink({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const shortlink = await getShortLink(slug);
  if (!shortlink) notFound();
  redirect(shortlink.link);
}
