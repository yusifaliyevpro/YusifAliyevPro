import { z } from "zod";

export const SubscriberSchema = z.object({
  email: z.string().email("Emaili düzgün daxil edin!"),
  fullName: z
    .string()
    .trim()
    .regex(
      /^(?:\S{3,}\s+){1}\S{3,}$/,
      "Tam Ad iki hissədən ibarət olmalı və hər hissə minimum 3 hərfdən ibarət olmalıdır!",
    ),
});

export type SubscriberFormData = z.infer<typeof SubscriberSchema>;
