"use server";

import { PostEmailTemplate } from "@/components/Email/PostEmailTemplate";
import { Resend } from "resend";
import { getBlogPost } from "../utils";
import { WelcomeEmailTemplate } from "@/src/components/Email/WelcomeEmailTemplate";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

type TsendEmail = { success: boolean; message: string };
export async function sendEmail(_: TsendEmail, slug: string): Promise<TsendEmail> {
  try {
    const blog = await getBlogPost(slug);
    if (!blog) return { success: false, message: "Couldn't find the blog!" };
    const { title, description, poster } = blog;
    const { data: list } = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_KEY });
    const to = list.data.filter((contact) => !contact.unsubscribed).map((contact) => contact.email);
    const result = await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      to: ["yusifaliyevpro@gmail.com"],
      subject: title,
      text: `Yeni Bloq Post\n\n${title}\n\n${description}\n\nDaha çox oxu`,
      react: PostEmailTemplate({ title, description, poster, slug }),
      headers: {
        "List-Unsubscribe": "<https://yusifaliyevpro.com/unsubscribe>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });
    if (result.error) return { success: false, message: "An error occured while sending email" };
    return { success: true, message: `Email sent successfully to ${to.length} people` };
  } catch (error) {
    console.log(error);
    return { success: false, message: "An error occured while sending email" };
  }
}
const subscriberSchema = z.object({
  firstName: z.string().trim().min(3, { message: "Adınız minimum 3 hərfdən ibarət olmalıdır" }),
  lastName: z.string().trim().min(3, { message: "Soyadınız minimum 3 hərfdən ibarət olmalıdır" }),
  email: z.string().email({ message: "Emaili düzgün daxil edin!" }),
});

export type TsubscribeState = {
  success: boolean;
  errors?: { firstName?: string[]; lastName?: string[]; email?: string[] };
};
export async function subscribe(cState: TsubscribeState, formData: FormData): Promise<TsubscribeState> {
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
