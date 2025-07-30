import { z } from "zod";

const EnvSchema = z.object({
  NEXT_PUBLIC_SANITY_DATASET: z.string().trim().min(3),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().trim().min(3),
  DATABASE_URL: z.string().trim().min(3),
  RESEND_API_KEY: z.string().trim().min(3),
  RESEND_AUDIENCE_KEY: z.string().trim().min(3),
  AUTH_SECRET: z.string().trim().min(3),
  AUTH_GITHUB_ID: z.string().trim().min(3),
  AUTH_GITHUB_SECRET: z.string().trim().min(3),
  ADMIN_EMAIL: z.string().trim().min(3),
  AUTH_TRUST_HOST: z.literal("true"),
  NEXT_PUBLIC_SANITY_API_READ_TOKEN: z.string().trim().min(3),
});

type EnvSchemaType = z.infer<typeof EnvSchema>;

const parsedEnv = EnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log(z.treeifyError(parsedEnv.error));
  throw new Error("An error happened because of Environment Variables from @/lib/env.ts");
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvSchemaType {}
  }
}
