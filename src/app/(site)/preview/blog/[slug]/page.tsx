import { getBlogPostPreview } from "@/lib/utils";
import { notFound } from "next/navigation";

import { BlogPostPageUI } from "../../../blog/[slug]/page";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = await getBlogPostPreview(slug);
  if (typeof blogPost === "string" || !blogPost) notFound();
  return <BlogPostPageUI blog={blogPost} />;
}
