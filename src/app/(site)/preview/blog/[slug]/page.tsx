import { notFound } from "next/navigation";
import { BlogPostPageUI } from "../../../blog/[slug]/page";
import { auth } from "@/lib/auth";
import { AdminSignIn } from "@/components/AdminSignIn";
import { sharedMetadata, sharedOpenGraph } from "@/lib/shared-metadata";
import type { Metadata } from "next";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { BlogPostQuery } from "@/data-access/blog/get";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const session = await auth();
  if (!session) return {};
  const { data: blogPost } = await sanityFetch({
    query: BlogPostQuery,
    params: { slug },
    perspective: "previewDrafts",
    stega: false,
  });
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

export default async function DraftBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const session = await auth();
  if (!session) return <AdminSignIn />;
  const { data } = await sanityFetch({
    query: BlogPostQuery,
    params: { slug },
    perspective: "previewDrafts",
  });
  if (!data) notFound();
  return (
    <>
      <BlogPostPageUI blogPost={data} />;
      <SanityLive />
    </>
  );
}
