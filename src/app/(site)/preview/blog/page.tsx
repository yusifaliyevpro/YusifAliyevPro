import { getDraftBlogPosts } from "@/data-access/blog/draft/get";
import { BlogRefreshButton } from "@/components/Refresh";
import { BlogPostsPageUI } from "../../blog/page";
import { AdminSignIn } from "@/components/AdminSignIn";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

export { metadata } from "@/src/app/(site)/blog/page";

export default async function DraftBlogPostsPage() {
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
