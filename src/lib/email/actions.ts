"use server";

import { getBlogPost } from "../utils";
import { PostEmailTemplate } from "@/src/components/Email/BlogPostEmail";
import { NotificationEmailTemplate } from "@/src/components/Email/NotificationEmail";
import { WelcomeEmailTemplate } from "@/src/components/Email/WelcomeEmail";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

type TsendEmail = { success: boolean; message: string };

export async function notifySubscribers(_: TsendEmail, slug: string): Promise<TsendEmail> {
  try {
    const blog = await getBlogPost(slug);
    if (!blog) return { success: false, message: "Couldn't find the blog!" };
    const { title, description, poster } = blog;
    const { data: list } = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_KEY });
    const to = list.data.filter((contact) => !contact.unsubscribed).map((contact) => contact.email);
    const result = await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      to,
      subject: title,
      text: `Yeni Bloq Post\n\n${title}\n\n${description}\n\nDaha çox oxu`,
      react: PostEmailTemplate({ title, description, poster, slug }),
    });
    if (result.error) return { success: false, message: "An error occured while sending email" };
    return { success: true, message: `Email sent successfully to ${to.length} people` };
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occured while sending email" };
  }
}
const subscriberSchema = z.object({
  fullName: z
    .string()
    .trim()
    .refine((name) => name.split(" ").filter(Boolean).length >= 2, {
      message: "Tam Ad iki hissədən ibarət olmalıdır!",
    })
    .refine(
      (name) =>
        name
          .split(" ")
          .filter(Boolean)
          .every((part) => part.length >= 3),
      {
        message: "Ad və soyad ayrılıqda minimum 3 hərfdən ibarət olmalıdır!",
      },
    ),
  email: z.string().email({ message: "Emaili düzgün daxil edin!" }),
});

export type TsubscribeState = { success: boolean; errors?: { fullName?: string[]; email?: string[] } };

export async function subscribe(_: TsubscribeState, formData: FormData): Promise<TsubscribeState> {
  try {
    const subscriberFormData = Object.fromEntries(formData);
    const validation = subscriberSchema.safeParse(subscriberFormData);
    if (!validation.success) {
      const formFieldErrors = validation.error.flatten().fieldErrors;
      return { success: false, errors: formFieldErrors };
    }

    const { fullName, email } = validation.data;
    const fullNames = fullName.split(" ").filter(Boolean);
    const firstName = fullNames[0];
    const lastName = fullNames[1];
    await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_KEY,
    });
    await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      to: email,
      subject: "Abunə olduğunuz üçün Təşəkkürlər!",
      text: `Bülletenə abunə olduğunuz üçün Təşəkkürlər!\n\nPaylaşdığım postlar və yeni layihələr haqqda xəbərdar olmaq üçün
            tez-tez emailinizi yoxlamağı unutmayın!`,
      react: WelcomeEmailTemplate({ firstName, lastName }),
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, errors: { email: ["Server error occurred"] } };
  }
}

export async function getResendContact(id: string) {
  try {
    const { data, error } = await resend.contacts.get({
      id,
      audienceId: process.env.RESEND_AUDIENCE_KEY,
    });

    if (error) throw new Error("Error happened while getting contact");

    return { contact: data };
  } catch (error) {
    return { contactError: error };
  }
}

export async function notifyAdmin({ name, description }: { name: string; description: string }) {
  try {
    return await resend.emails.send({
      from: "Yusif Aliyev <admin@blog.yusifaliyevpro.com>",
      to: ["yusifaliyevpro@gmail.com"],
      subject: `New Contact - ${name}`,
      text: `Yeni Kontakt\n\n${name}\n\n${description}\n\nAdmin Console`,
      react: NotificationEmailTemplate({ name, description }),
    });
  } catch (error) {
    console.log(error);
  }
}
