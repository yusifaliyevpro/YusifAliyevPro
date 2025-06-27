"use server";

import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function createContact(data: Prisma.ContactCreateInput) {
  return await prisma.contact.create({ data });
}

export async function updateIsCaledInfo(id: string, isCalled: boolean) {
  await prisma.contact.update({ data: { isCalled: !isCalled }, where: { id } });
  return true;
}

export async function deleteContact(id: string) {
  await prisma.contact.delete({ where: { id } });
  return true;
}
