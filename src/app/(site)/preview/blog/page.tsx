import { getDraftBlogPosts } from "@/data-access/blog/draft/get";
import { BlogRefreshButton } from "@/components/Refresh";

import { BlogPostsMetadata, BlogPostsPageUI } from "../../blog/page";
import { AdminSignIn } from "@/components/AdminSignIn";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function DraftBlogPostsPreview() {
  const session = await auth();
  if (!session) return <AdminSignIn />;
  const blogPosts = await getDraftBlogPosts();
  if (blogPosts.error || !blogPosts.data) notFound();

  return (
    <>
      <BlogPostsPageUI blogPosts={blogPosts.data} />
      <BlogRefreshButton />
    </>
  );
}

export const metadata = BlogPostsMetadata;
