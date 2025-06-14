import { z } from "zod";

const EnvSchema = z
  .object({
    DATABASE_URL: z.string().trim().min(3),
    NEXT_PUBLIC_PREVIEW_URL: z.string().trim().min(3).url(),
    NEXT_PUBLIC_SANITY_DATASET: z.string().trim().min(3),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().trim().min(3),
    RESEND_API_KEY: z.string().trim().min(3),
    RESEND_AUDIENCE_KEY: z.string().trim().min(3),
  })
  .required();

type EnvSchemaType = z.infer<typeof EnvSchema>;

const parsedEnv = EnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log(parsedEnv.error.flatten().fieldErrors);
  throw new Error("An error happened because of Environment Variables from @/lib/env.ts");
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvSchemaType {}
  }
}
