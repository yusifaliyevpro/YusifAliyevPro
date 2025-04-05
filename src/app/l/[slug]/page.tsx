import { redirectToLink } from "@/src/lib/prisma/actions";
import { notFound } from "next/navigation";

export default async function ShortLink({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const response = await redirectToLink(slug);
  if (!response.success) notFound();
}
