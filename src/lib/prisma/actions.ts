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
  } catch (error) {
    console.log(error);
    if (error instanceof Error) return { error };
    return { error: new Error("An error occured while executing createContact action") };
  }
}

export async function getAllContacts() {
  try {
    const contacts = await prisma.contact.findMany();
    return contacts.sort((a, b) => Number(a.isCalled) - Number(b.isCalled));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateIsCaledInfo(id: string, isCalled: boolean) {
  try {
    await prisma.contact.update({ data: { isCalled: !isCalled }, where: { id } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function deleteContact(id: string) {
  try {
    await prisma.contact.delete({ where: { id } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function redirectToLink(slug: string) {
  const shortenLink = await prisma.shortenLink.findUnique({ where: { slug } });
  if (!shortenLink) return { success: false };
  redirect(shortenLink?.link);
}
