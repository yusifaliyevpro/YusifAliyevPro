"use server";

import { revalidateTag } from "next/cache";
import { isInDevelopment } from "./constants";
import { draftMode } from "next/headers";

export async function updateBlogs() {
  const { isEnabled } = draftMode();
  if (isInDevelopment || isEnabled) revalidateTag("blogs");
}

export async function updateSpecificBlog() {
  const { isEnabled } = draftMode();
  if (isInDevelopment || isEnabled) revalidateTag("blog");
}
