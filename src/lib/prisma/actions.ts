"use server";
import { Prisma } from "@prisma/client";
import prisma from "./prisma";

export async function createContact(data: Prisma.ContactCreateInput) {
  try {
    return { data: await prisma.contact.create({ data }) };
  } catch (error) {
    return { error };
  }
}

export async function getAllContacts() {
  return await prisma.contact.findMany();
}

export async function getLinkSlugs(slug: string) {
  return await prisma.shortenLink.findUnique({ where: { slug } });
}
