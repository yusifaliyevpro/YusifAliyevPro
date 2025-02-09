"use server";

import { revalidateTag } from "next/cache";
import { isInDevelopment } from "./constants";
import { draftMode } from "next/headers";

export async function updateBlog() {
  const { isEnabled } = await draftMode();
  if (isInDevelopment || isEnabled) {
    revalidateTag("blogs");
    revalidateTag("blog");
  }
}
