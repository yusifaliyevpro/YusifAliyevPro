"use server";

import { revalidateTag } from "next/cache";
import { isInDevelopment } from "./constants";
import { draftMode } from "next/headers";
import prisma from "./prisma";
import { PostEmailTemplate } from "@/components/Email/PostEmailTemplate";
import { Resend } from "resend";
import { getBlog } from "./utils";
import { WelcomeEmailTemplate } from "../components/Email/WelcomeEmailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(slug: string) {
  try {
    const { title, description, poster } = await getBlog(slug);
    const { data: list } = await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE_KEY,
    });
    const to = list.data
      .filter((contact) => !contact.unsubscribed)
      .map((contact) => contact.email);
    const { data, error } = await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      to,
      subject: title,
      text: `Yeni Bloq Post\n\n${title}\n\n${description}\n\nDaha çox oxu`,
      react: PostEmailTemplate({ title, description, poster, slug }),
      headers: {
        "List-Unsubscribe": "<https://yusifaliyevpro.com/unsubscribe>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });
    if (error) console.log(error);
    console.log("Sent Succesfully!");
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function subscribe(
  firstName: string,
  lastName: string,
  email: string,
) {
  try {
    const { data, error } = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_KEY,
    });

    if (error) console.log(error);
    const welcomeEmail = await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      to: email,
      subject: "Abunə olduğunuz üçün Təşəkkürlər!",
      text: `Bülletenə abunə olduğunuz üçün Təşəkkürlər!\n\nPaylaşdığım postlar və yeni layihələr haqqda xəbərdar olmaq üçün
            tez-tez emailinizi yoxlamağı unutmayın!`,
      react: WelcomeEmailTemplate({
        firstName: firstName,
        lastName: lastName,
      }),
      headers: {
        "List-Unsubscribe": "<https://yusifaliyevpro.com/unsubscribe>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });
    if (welcomeEmail.error) console.log(welcomeEmail.error);
    console.log("Subscribed Succesfully!");
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function getContact(id: string) {
  try {
    const { data, error } = await resend.contacts.get({
      id,
      audienceId: process.env.RESEND_AUDIENCE_KEY,
    });

    if (error) {
      console.log(error);
      throw new Error("Error happened while getting contact");
    }
    return { contact: data };
  } catch (error) {
    return { contactError: error };
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
