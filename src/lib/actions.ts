"use server";

import { revalidateTag } from "next/cache";
import { isInDevelopment } from "./constants";
import { draftMode } from "next/headers";
import prisma from "./prisma";
import { PostEmailTemplate } from "@/components/Email/PostEmailTemplate";
import { Resend } from "resend";
import { getBlog } from "./utils";
import { WelcomeEmailTemplate } from "../components/Email/WelcomeEmailTemplate";
import { z } from "zod";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(slug: string) {
  try {
    const { title, description, poster } = await getBlog(slug);
    const { data: list } = await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE_KEY,
    });
    const to = list.data.filter((contact) => !contact.unsubscribed).map((contact) => contact.email);
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
const subscriberSchema = z.object({
  firstName: z.string().trim().min(3, { message: "Adınız minimum 3 hərfdən ibarət olmalıdır" }),
  lastName: z.string().trim().min(3, { message: "Soyadınız minimum 3 hərfdən ibarət olmalıdır" }),
  email: z.string().email({ message: "Emaili düzgün daxil edin!" }),
});

export type subscribeState = {
  success: boolean;
  errors?: { firstName?: string[]; lastName?: string[]; email?: string[] };
};
export async function subscribe(cState: subscribeState, formData: FormData): Promise<subscribeState> {
  try {
    const subscriberFormData = Object.fromEntries(formData);
    const validation = subscriberSchema.safeParse(subscriberFormData);
    if (!validation.success) {
      const formFieldErrors = validation.error.flatten().fieldErrors;
      return { success: false, errors: formFieldErrors };
    }

    const { firstName, lastName, email } = validation.data;
    const contact = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_KEY,
    });
    if (contact.error) console.log(contact.error);
    const welcomeEmail = await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      to: email,
      subject: "Abunə olduğunuz üçün Təşəkkürlər!",
      text: `Bülletenə abunə olduğunuz üçün Təşəkkürlər!\n\nPaylaşdığım postlar və yeni layihələr haqqda xəbərdar olmaq üçün
            tez-tez emailinizi yoxlamağı unutmayın!`,
      react: WelcomeEmailTemplate({ firstName, lastName }),
      headers: {
        "List-Unsubscribe": "<https://yusifaliyevpro.com/unsubscribe>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });
    if (welcomeEmail.error) console.log(welcomeEmail.error);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, errors: { email: ["Server error occurred"] } };
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
