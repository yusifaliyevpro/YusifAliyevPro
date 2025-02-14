"use server";
import { Prisma } from "@prisma/client";
import prisma from "./prisma";
import { redirect } from "next/navigation";

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
