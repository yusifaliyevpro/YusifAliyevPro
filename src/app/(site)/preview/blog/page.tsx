import { getBlogPostsPreview } from "@/lib/utils";
import { BlogRefreshButton } from "@/src/components/Refresh";

import { BlogPostsMetadata, BlogPostsPageUI } from "../../blog/page";

export default async function BlogPostsPreviewPage() {
  const blogPosts = await getBlogPostsPreview();
  return (
    typeof blogPosts !== "string" && (
      <>
        <BlogPostsPageUI blogPosts={blogPosts} />
        <BlogRefreshButton />
      </>
    )
  );
}

export const metadata = BlogPostsMetadata;
