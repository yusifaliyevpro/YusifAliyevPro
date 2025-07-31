import { client } from "@/sanity/lib/client";
import type { BlogPostQueryResult, BlogPostsQueryResult } from "@/sanity/types";
import { defineQuery } from "next-sanity";

export const BlogPostsQuery = defineQuery(`
  *[_type == 'blogs'] 
    | order(publishedAt desc) {
      title,
      _createdAt,
      _updatedAt,
      "poster": poster.asset->url,
      "posterMetadata": {
        "lqip": poster.asset->metadata.lqip,
        "dimensions": poster.asset->metadata.dimensions
      },
      publishedAt,
      "slug": slug.current,
      description
    }
`);

export async function getBlogPosts() {
  const data = await client.fetch<BlogPostsQueryResult>(BlogPostsQuery, {}, { next: { revalidate: 3600 } });
  return data;
}

export const BlogPostQuery = defineQuery(`
  *[_type == 'blogs' && slug.current == $slug][0] {
    _id,
    _type,
    title,
    "plainText": title + pt::text(text) + description,
    "poster": poster.asset->url,
    "posterLqip": poster.asset->metadata.lqip,
    publishedAt,
    "gallery": gallery[] {
      "image": asset->url,
      "lqip": asset->metadata.lqip
    },
    tags,
    _updatedAt,
    "text": text[] {
      ...,
      ...select(
        _type == "image" => {
          "image": asset->url,
          "lqip": asset->metadata.lqip
        }
      )
    },
    "slug": slug.current,
    _createdAt,
    description
  }
`);

export async function getBlogPost(slug: string) {
  const data = await client.fetch<BlogPostQueryResult>(
    BlogPostQuery,
    { slug },
    { next: { revalidate: 3600 } },
  );
  return data;
}
