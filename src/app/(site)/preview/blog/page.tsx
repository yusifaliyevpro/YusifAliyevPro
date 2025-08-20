import { BlogPostsPageUI } from "../../blog/page";
import { notFound } from "next/navigation";
import { BlogPostsQuery } from "@/data-access/blog/get";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
export { metadata } from "@/src/app/(site)/blog/page";

export default async function Page() {
  const { isEnabled } = await draftMode();
  const blogPosts = await client.fetch(
    BlogPostsQuery,
    {},
    isEnabled ? { perspective: "drafts", stega: true } : { next: { revalidate: 3600 } },
  );

  if (!blogPosts) notFound();

  return <BlogPostsPageUI blogPosts={blogPosts} />;
}
