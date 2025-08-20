import { notFound } from "next/navigation";
import { BlogPostPageUI } from "../../../blog/[slug]/page";
import { sharedMetadata, sharedOpenGraph } from "@/lib/shared-metadata";
import type { Metadata } from "next";
import { BlogPostQuery } from "@/data-access/blog/get";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }: PageProps<"/preview/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const blogPost = await client.fetch(
    BlogPostQuery,
    { slug },
    isEnabled ? { perspective: "drafts", stega: false } : { next: { revalidate: 3600 } },
  );
  if (!blogPost) notFound();
  return {
    ...sharedMetadata,
    title: blogPost.title,
    alternates: { canonical: `/blog/${blogPost.slug}` },
    description: blogPost.description.slice(0, 152).concat("..."),
    openGraph: {
      ...sharedOpenGraph,
      images: [{ alt: blogPost.title + " Poster", height: 630, url: blogPost.poster as string, width: 1200 }],
      modifiedTime: blogPost._updatedAt,
      publishedTime: blogPost.publishedAt,
      tags: blogPost.tags,
      type: "article",
      url: `/blog/${blogPost.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps<"/preview/blog/[slug]">) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const data = await client.fetch(
    BlogPostQuery,
    { slug },
    isEnabled ? { perspective: "drafts", stega: true } : { next: { revalidate: 3600 } },
  );
  if (!data) notFound();
  return <BlogPostPageUI blogPost={data} />;
}
