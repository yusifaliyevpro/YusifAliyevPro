import { client } from "../../sanity/lib/client";
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

export async function getBlogs() {
  const query = `*[_type=='blogs' && isPublished]|order(publishedAt desc){title, _createdAt, "poster": poster.asset->url, publishedAt, "slug": slug.current, description}`;
  const data = await client.fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 3600, tags: ["blogs"] } },
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

export async function getBlog({ params }) {
  const query = `*[_type=='blogs' && slug.current=='${params.blog}']{title, "plainText": title + pt::text(text) + description, "poster": poster.asset->url, publishedAt, isPublished, text, "slug": slug.current,_createdAt, description}[0]`;
  const data = await client.fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 3600, tags: ["blog"] } },
  );
  return data;
}
