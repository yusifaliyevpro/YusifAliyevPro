"use server";

import { revalidateTag } from "next/cache";
import { draftMode } from "next/headers";

import { isInDevelopment } from "./constants";

export async function updateBlog() {
  const { isEnabled } = await draftMode();
  if (isInDevelopment || isEnabled) {
    revalidateTag("blogs");
    revalidateTag("blog");
  }
}
