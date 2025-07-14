import { getDraftBlogPost } from "@/data-access/blog/draft/get";
import { notFound } from "next/navigation";
import { BlogPostPageUI } from "../../../blog/[slug]/page";
import { auth } from "@/lib/auth";
import { AdminSignIn } from "@/components/AdminSignIn";

export { generateMetadata } from "@/src/app/(site)/blog/[slug]/page";

export default async function DraftBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await auth();
  if (!session) return <AdminSignIn />;
  const blogPost = await getDraftBlogPost(slug);
  if (blogPost.error || !blogPost.data) notFound();
  return <BlogPostPageUI blogPost={blogPost.data} />;
}
