"use server";

import { PostEmailTemplate } from "@/src/components/Email/BlogPostEmail";
import { render } from "@react-email/render";
import { Resend } from "resend";

import { getBlogPost } from "../utils";

const resend = new Resend(process.env.RESEND_API_KEY);
type TsendEmail = { message: string; success: boolean };

export async function notifySubscribers(_: TsendEmail, slug: string): Promise<TsendEmail> {
  try {
    const blog = await getBlogPost(slug);
    if (!blog) return { message: "Couldn't find the blog!", success: false };
    const { description, poster, title } = blog;
    const { data: list } = await resend.contacts.list({ audienceId: process.env.RESEND_AUDIENCE_KEY });
    if (!list) return { message: "Couldn't find any audience", success: false };
    const to = list.data.filter((contact) => !contact.unsubscribed).map((contact) => contact.email);
    const text = await render(PostEmailTemplate({ description, poster, slug, title }), {
      plainText: true,
    });
    const result = await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      react: PostEmailTemplate({ description, poster, slug, title }),
      subject: title,
      text,
      to,
    });
    if (result.error) return { message: "An error occured while sending email", success: false };
    return { message: `Email sent successfully to ${to.length} people`, success: true };
  } catch (error) {
    console.log(error);
    return { message: "An error occured while sending email", success: false };
  }
}
