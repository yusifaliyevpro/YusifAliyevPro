import { client } from "../../sanity/lib/client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { isInDevelopment } from "./constants";

export async function getProjects() {
  const query = `*[_type=='projects']|order(_createdAt desc){name, "image": image.asset->url, description, link, repo}`;
  const data = await client.fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 3600 } },
  );
  return data;
}

export async function getBlogs({ isEnabled }) {
  const query = `*[_type=='blogs' && (isPublished || ${isEnabled})]|order(publishedAt desc){title, _createdAt, "poster": poster.asset->url, publishedAt, "slug": slug.current, description}`;
  const data = await client.fetch(
    query,
    isEnabled
      ? { cache: "no-store" }
      : ({ cache: "force-cache" },
        { next: { revalidate: isInDevelopment ? 10 : 3600 } }),
  );
  return data;
}

export async function getSlugs() {
  const query = `*[_type=='blogs']|order(publishedAt desc)
      {"slug": slug.current}`;
  const data = await client.fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: isInDevelopment ? 10 : 3600 } },
  );
  return data;
}

export async function getBlog({ params, isEnabled }) {
  const query = `*[_type=='blogs' && slug.current=='${params.blog}']{title, "plainText": title + pt::text(text) + description, "poster": poster.asset->url, publishedAt, isPublished, text, "slug": slug.current,_createdAt, description}[0]`;
  const data = await client.fetch(
    query,
    isEnabled
      ? { cache: "no-store" }
      : ({ cache: "force-cache" },
        { next: { revalidate: isInDevelopment ? 10 : 3600 } }),
  );
  return data;
}
