import { BlogPostsPageUI } from "../../blog/page";
import { AdminSignIn } from "@/components/AdminSignIn";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { BlogPostsQuery } from "@/data-access/blog/get";

export { metadata } from "@/src/app/(site)/blog/page";

export default async function DraftBlogPostsPage() {
  const session = await auth();
  if (!session) return <AdminSignIn />;
  const { data: blogPosts } = await sanityFetch({ query: BlogPostsQuery, perspective: "previewDrafts" });

  if (!blogPosts) notFound();

  return (
    <>
      <BlogPostsPageUI blogPosts={blogPosts} />
      <SanityLive />
    </>
  );
}
