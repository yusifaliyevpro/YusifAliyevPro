// No need to be server action
import { prisma } from "@/src/lib/prisma";

export async function getContacts() {
  return await prisma.contact.findMany({ orderBy: { isCalled: "asc" } });
}
