import { groq } from "next-sanity";
import { client } from "./../sanity/lib/client";
import { isInDevelopment } from "./constants";
import type {
  BLOG_QUERYResult,
  BLOGS_QUERYResult,
  PROJECTS_QUERYResult,
  SLUGS_QUERYResult,
} from "../../sanity.types";

export async function getProjects() {
  const PROJECTS_QUERY = groq`*[_type=='projects']|order(_createdAt desc){name, "image": image.asset->url, description, link, repo}`;
  const data = await client.fetch<PROJECTS_QUERYResult>(
    PROJECTS_QUERY,
    {},
    { next: { revalidate: 3600 } },
  );
  return data;
}

export async function getBlogs({ isEnabled }: { isEnabled: boolean }) {
  const BLOGS_QUERY = groq`*[_type=='blogs' && (isPublished || ${isEnabled} || ${isInDevelopment})]|order(publishedAt desc){title, _createdAt, "poster": poster.asset->url, publishedAt, "slug": slug.current, description}`;
  const data = await client.fetch<BLOGS_QUERYResult>(
    BLOGS_QUERY,
    {},
    { next: { revalidate: 3600, tags: ["blogs"] } },
  );
  return data;
}

export async function getSlugs() {
  const SLUGS_QUERY = groq`*[_type=='blogs' && isPublished]|order(publishedAt desc)
      {"slug": slug.current, publishedAt}`;
  const data = await client.fetch<SLUGS_QUERYResult>(
    SLUGS_QUERY,
    {},
    { next: { revalidate: isInDevelopment ? 10 : 3600 } },
  );
  return data;
}

export async function getBlog({
  params: { blog },
}: {
  params: { blog: string };
}) {
  const BLOG_QUERY = groq`*[_type=='blogs' && slug.current=='${blog}']{title, "plainText": title + pt::text(text) + description, "poster": poster.asset->url, publishedAt, isPublished, text, "slug": slug.current,_createdAt, description}[0]`;
  const data = await client.fetch<BLOG_QUERYResult>(
    BLOG_QUERY,
    {},
    { next: { revalidate: 3600, tags: ["blog"] } },
  );
  return data;
}
