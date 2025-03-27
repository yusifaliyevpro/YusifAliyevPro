"use server";
import { AdminNotificationEmail } from "@/src/components/Email/NotificationEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function notifyAdmin({ description, name }: { description: string; name: string }) {
  const { data, error } = await resend.emails.send({
    from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
    react: AdminNotificationEmail({ description, name }),
    subject: `New Contact - ${name}`,
    to: ["yusifaliyevpro@gmail.com"],
  });

  if (error) console.log(error);
  else return data;
}
