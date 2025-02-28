"use server";

import { isInDevelopment } from "./constants";
import { revalidateTag } from "next/cache";
import { draftMode } from "next/headers";

export async function updateBlog() {
  const { isEnabled } = await draftMode();
  if (isInDevelopment || isEnabled) {
    revalidateTag("blogs");
    revalidateTag("blog");
  }
}
