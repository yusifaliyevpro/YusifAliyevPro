"use server";

import prisma from "./prisma";
import { Contact, Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

export async function createContact(data: Prisma.ContactCreateInput): Promise<{ contact: Contact; error: Error | null }> {
  try {
    const contact = await prisma.contact.create({ data });
    return { contact, error: null };
  } catch (error) {
    if (error instanceof Error) return { contact: null, error };
  }
}

export async function getAllContacts() {
  const contacts = await prisma.contact.findMany();
  return contacts.sort((a, b) => Number(a.isCalled) - Number(b.isCalled));
}

export async function setIsCalled(id: string, isCalled: boolean) {
  try {
    await prisma.contact.update({ where: { id }, data: { isCalled: !isCalled } });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function redirectToLink(slug: string) {
  let link = "";
  try {
    const shortenLink = await prisma.shortenLink.findUnique({ where: { slug } });
    if (shortenLink) link = shortenLink.link;
    else throw new Error("Short Link not found");
  } catch (error) {
    console.log(error);
    return { success: false };
  }
  redirect(link);
}
