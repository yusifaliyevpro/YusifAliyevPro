// No need to be server action
import { prisma } from "@/src/lib/prisma";

export async function getShortLink(slug: string) {
  return await prisma.shortenLink.findUnique({ where: { slug } });
}
