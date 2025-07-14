import { z } from "zod";

export const SubscriberSchema = z.object({
  email: z.email("Please enter a valid email!"),
  fullName: z
    .string()
    .trim()
    .regex(
      /^(?:\S{3,}\s+){1}\S{3,}$/,
      "Full name must consist of two parts and each part must be at least 3 letters!",
    ),
});

export type SubscriberFormData = z.infer<typeof SubscriberSchema>;
