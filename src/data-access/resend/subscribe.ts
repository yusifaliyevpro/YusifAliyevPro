"use server";

import WelcomeEmail from "@/emails/WelcomeEmail";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { SubscriberSchema, type SubscriberFormData } from "@/lib/email/subscribe.validation";

const resend = new Resend(process.env.RESEND_API_KEY);

type AddSubscriberActionState = {
  success: boolean;
  data: Partial<SubscriberFormData>;
  errors?: Partial<Record<keyof SubscriberFormData, string>>;
};

export async function addSubscriber(
  _: AddSubscriberActionState,
  formData: FormData,
): Promise<AddSubscriberActionState> {
  const subscriberFormData = Object.fromEntries(formData);
  const result = SubscriberSchema.safeParse(subscriberFormData);

  if (!result.success) {
    const errors: AddSubscriberActionState["errors"] = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof SubscriberFormData;
      errors[field] = issue.message;
    }

    return { success: false, data: subscriberFormData, errors };
  }

  const { email, fullName } = result.data;
  const [firstName, lastName] = fullName.split(" ").filter(Boolean);

  await resend.contacts.create({
    audienceId: process.env.RESEND_AUDIENCE_KEY,
    email,
    firstName,
    lastName,
    unsubscribed: false,
  });

  const text = await render(WelcomeEmail({ firstName, lastName }), { plainText: true });

  await resend.emails.send({
    from: "Yusif Aliyev <subscription@blog.yusifaliyevpro.com>",
    react: WelcomeEmail({ firstName, lastName }),
    subject: "Thank you for subscribing!",
    text,
    to: email,
  });
  return { success: true, data: {} };
}
