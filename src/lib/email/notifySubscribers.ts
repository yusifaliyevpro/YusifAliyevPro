"use server";

import { BlogPostEmail } from "@/src/components/Email/BlogPostEmail";
import { render } from "@react-email/render";
import { Resend } from "resend";

import { getBlogPost } from "../utils";

const resend = new Resend(process.env.RESEND_API_KEY);
type TsendEmail = { message: string; success: boolean };

export async function notifySubscribers(_: TsendEmail, slug: string): Promise<TsendEmail> {
  const blog = await getBlogPost(slug);
  if (!blog) return { message: "Couldn't find the blog!", success: false };
  const { description, poster, title } = blog;

  const text = await render(BlogPostEmail({ description, poster, slug, title }), { plainText: true });

  const broadcast = await resend.broadcasts.create({
    audienceId: process.env.RESEND_AUDIENCE_KEY,
    from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
    name: `${title} Email`,
    react: BlogPostEmail({ description, poster, slug, title }),
    subject: title,
    text,
  });
  if (!broadcast.data) return { message: "An error occured while creating broadcast", success: false };

  // await resend.broadcasts.send(broadcast.data.id);
  return { message: `Broadcast created successfully`, success: true };
}
