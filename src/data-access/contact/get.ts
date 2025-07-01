// No need to be server action
import type { Contact } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { AdminEmail } from "@/lib/constants";
import { prisma } from "@/src/lib/prisma";

export type GetContacts = Promise<
  { error: string; contacts?: undefined } | { contacts: Contact[]; error?: undefined }
>;
export async function getContacts(): GetContacts {
  const session = await auth();
  if (!session || session.user?.email !== AdminEmail)
    return { error: "You are not authorized to see Contacts!" };
  const contacts = await prisma.contact.findMany({ orderBy: { isCalled: "asc" } });
  return { contacts };
}
