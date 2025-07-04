import { auth } from "@/lib/auth";
import { AdminEmail } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import type { DraftBlogPostQueryResult, DraftBlogPostsQueryResult } from "@/sanity/types";
import { defineQuery } from "next-sanity";

export async function getDraftBlogPosts() {
  const session = await auth();
  if (!session || session.user?.email !== AdminEmail)
    return { error: "You are not allowed to run getBlogPostsPreview()" };

  const DraftBlogPostsQuery = defineQuery(`
    *[_type == 'blogs' && !isPublished] 
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

  const data = await client.fetch<DraftBlogPostsQueryResult>(DraftBlogPostsQuery, {});
  return { data };
}

export async function getDraftBlogPost(slug: string) {
  const session = await auth();
  if (!session || session.user?.email !== AdminEmail)
    return { error: "You are not allowed to run getBlogPostPreview()" };

  const DraftBlogPostQuery = defineQuery(`
    *[_type == 'blogs' && slug.current == $slug][0] {
      title,
      "plainText": title + pt::text(text) + description,
      "poster": poster.asset->url,
      "posterLqip": poster.asset->metadata.lqip,
      publishedAt,
      isPublished,
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

  const data = await client.fetch<DraftBlogPostQueryResult>(DraftBlogPostQuery, { slug });
  return { data };
}
