"use server";

import { revalidateTag } from "next/cache";
import { isInDevelopment } from "./constants";
import { draftMode } from "next/headers";
import prisma from "./prisma";

export async function updateBlogs() {
  const { isEnabled } = draftMode();
  if (isInDevelopment || isEnabled) revalidateTag("blogs");
}

export async function updateSpecificBlog() {
  const { isEnabled } = draftMode();
  if (isInDevelopment || isEnabled) revalidateTag("blog");
}

export async function addNewContactWithMe(
  fullName: string,
  email: string,
  phone: string,
  hasWhatsApp: boolean,
  description: string,
) {
  try {
    const newContactMe = await prisma.contact.create({
      data: { fullName, email, phone, hasWhatsApp, description },
    });
    return { newContactMe };
  } catch (error) {
    return { error };
  }
}
