"use server";

import { WelcomeEmailTemplate } from "@/src/components/Email/WelcomeEmail";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const SubscriberSchema = z.object({
  email: z.string().email("Emaili düzgün daxil edin!"),
  fullName: z
    .string()
    .trim()
    .regex(/^(?:\S{3,}\s+){1}\S{3,}$/, "Tam Ad iki hissədən ibarət olmalı və hər hissə minimum 3 hərfdən ibarət olmalıdır!"),
});

export type TState = { errors?: { email?: string[]; fullName?: string[] }; success: boolean };
export async function subscribe(_: TState, formData: FormData): Promise<TState> {
  try {
    const subscriberFormData = Object.fromEntries(formData);
    const parsedSubscriber = SubscriberSchema.safeParse(subscriberFormData);
    if (!parsedSubscriber.success) {
      const formFieldErrors = parsedSubscriber.error.flatten().fieldErrors;
      return { errors: formFieldErrors, success: false };
    }

    const { email, fullName } = parsedSubscriber.data;
    const [firstName, lastName] = fullName.split(" ").filter(Boolean);

    await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_KEY,
      email,
      firstName,
      lastName,
      unsubscribed: false,
    });

    const text = await render(WelcomeEmailTemplate({ firstName, lastName }), {
      plainText: true,
    });
    await resend.emails.send({
      from: "Yusif Aliyev <updates@blog.yusifaliyevpro.com>",
      react: WelcomeEmailTemplate({ firstName, lastName }),
      subject: "Abunə olduğunuz üçün Təşəkkürlər!",
      text,
      to: email,
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { errors: { email: ["Server error occurred"] }, success: false };
  }
}
