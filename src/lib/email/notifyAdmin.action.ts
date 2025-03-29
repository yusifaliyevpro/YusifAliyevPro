"use server";
import AdminNotificationEmail from "@/emails/AdminNotificationEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function notifyAdmin({ description, name }: { description: string; name: string }) {
  const { data, error } = await resend.emails.send({
    from: "Admin Console <admin@blog.yusifaliyevpro.com>",
    react: AdminNotificationEmail({ description, name }),
    subject: `New Contact - ${name}`,
    to: ["yusifaliyevpro@gmail.com"],
  });

  if (error) console.log(error);
  else return data;
}
