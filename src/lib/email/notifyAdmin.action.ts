"use server";
import { NotificationEmailTemplate } from "@/src/components/Email/NotificationEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function notifyAdmin({ description, name }: { description: string; name: string }) {
  try {
    return await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      react: NotificationEmailTemplate({ description, name }),
      subject: `New Contact - ${name}`,
      text: `Yeni Kontakt\n\n${name}\n\n${description}\n\nAdmin Console`,
      to: ["yusifaliyevpro@gmail.com"],
    });
  } catch (error) {
    console.log(error);
  }
}
