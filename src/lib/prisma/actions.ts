"use server";

import type { Contact, Prisma } from "@/generated/prisma/client";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function createContact(
  data: Prisma.ContactCreateInput,
): Promise<{ contact: Contact; error?: never } | { contact?: never; error?: Error }> {
  try {
    const contact = await prisma.contact.create({ data });
    return { contact };
  } catch (error: unknown) {
    console.log(error);
    return { error: new Error("An error occured while executing createContact action") };
  }
}

export async function getAllContacts() {
  return await prisma.contact.findMany({ orderBy: { isCalled: "asc" } });
}

export async function updateIsCaledInfo(id: string, isCalled: boolean) {
  await prisma.contact.update({ data: { isCalled: !isCalled }, where: { id } });
  return true;
}

export async function deleteContact(id: string) {
  await prisma.contact.delete({ where: { id } });
  return true;
}

export async function redirectToLink(slug: string) {
  const shortenLink = await prisma.shortenLink.findUnique({ where: { slug } });
  if (!shortenLink) return { success: false };
  redirect(shortenLink?.link);
}
