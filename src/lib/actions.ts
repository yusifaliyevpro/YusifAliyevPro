"use server";

import { revalidateTag } from "next/cache";
import { isInDevelopment } from "./constants";
import { draftMode } from "next/headers";
import prisma from "./prisma";
import { EmailTemplate } from "../components/EmailTemplate";
import { Resend } from "resend";
import { getBlog } from "./utils";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(slug: string) {
  try {
    const blog = await getBlog(slug);
    const { data, error } = await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      to: ["yusifaliyevpro@gmail.com"],
      subject: `New Post - ${blog.title}`,
      react: EmailTemplate({
        title: blog.title,
        description: blog.description,
        poster: blog.poster,
        slug: blog.slug,
      }),
    });
    if (error) console.log(error);
    console.log("Sent Succesfully!");
    return { data };
  } catch (error) {
    return { error };
  }
}

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
