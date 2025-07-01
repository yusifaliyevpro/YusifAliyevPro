import { client } from "@/sanity/lib/client";
import type { BlogPostQueryResult, BlogPostsQueryResult } from "@/sanity/types";
import { defineQuery } from "next-sanity";

export async function getBlogPosts() {
  const BlogPostsQuery = defineQuery(`*[_type=='blogs' && isPublished]|order(publishedAt desc)
  {title,  _createdAt, _updatedAt, "poster": poster.asset->url,
  "posterMetadata": { "lqip": (poster.asset->metadata).lqip, "dimensions": (poster.asset->metadata).dimensions }, 
  publishedAt, "slug": slug.current, description}`);

  const data = await client.fetch<BlogPostsQueryResult>(BlogPostsQuery, {}, { next: { revalidate: 3600 } });
  return data;
}

export async function getBlogPost(slug: string) {
  const BlogPostQuery =
    defineQuery(`*[_type=='blogs' && slug.current==$slug && isPublished]{title, "plainText": title + pt::text(text) + description, 
  "poster": poster.asset->url, "posterLqip": (poster.asset->metadata).lqip, publishedAt, isPublished, 
  "gallery": gallery[]{ "image": asset->url, "lqip": asset->metadata.lqip }, tags, _updatedAt, "text": text[] 
  {..., ...select( _type == "image" => { "image": asset->url, "lqip": (asset->metadata).lqip } ) },
   "slug": slug.current,_createdAt, description}[0]`);

  const data = await client.fetch<BlogPostQueryResult>(
    BlogPostQuery,
    { slug },
    { next: { revalidate: 3600 } },
  );
  return data;
}
