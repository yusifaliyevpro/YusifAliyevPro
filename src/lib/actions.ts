"use server";

import { revalidateTag } from "next/cache";
import { isInDevelopment } from "./constants";
import { draftMode } from "next/headers";
import prisma from "./prisma";

export async function updateBlogs() {
  const { isEnabled } = await draftMode();
  if (isInDevelopment || isEnabled) revalidateTag("blogs");
}

export async function updateSpecificBlog() {
  const { isEnabled } = await draftMode();
  if (isInDevelopment || isEnabled) revalidateTag("blog");
}

export async function newContactInfo(
  fullName: string,
  email: string,
  phone: string,
  hasWhatsApp: boolean,
  description: string,
) {
  try {
    const newContactInfo = await prisma.contact.create({
      data: { fullName, email, phone, hasWhatsApp, description },
    });
    return { newContactMe: newContactInfo };
  } catch (error) {
    return { error };
  }
}

export async function getAllContacts() {
  const contacts = await prisma.contact.findMany();
  return contacts;
}

export async function getLinkSlugs(slug: string) {
  const slugs = await prisma.shortenLink.findMany({ where: { slug } });
  return slugs;
}
