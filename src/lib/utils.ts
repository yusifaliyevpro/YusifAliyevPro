import type {
  BLOG_POST_PREVIEW_QUERYResult,
  BLOG_POST_QUERYResult,
  BLOG_POSTS_PREVIEW_QUERYResult,
  BLOGS_POSTS_QUERYResult,
  PROJECTS_QUERYResult,
} from "@/sanity/types";

import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { draftMode } from "next/headers";

import { isInDevelopment } from "./constants";

export async function getProjects() {
  const PROJECTS_QUERY =
    defineQuery(`*[_type=='projects']|order(_createdAt desc){name,  "image": image.asset->url,    
  "imageMetadata": { "lqip": (image.asset->metadata).lqip, "dimensions": (image.asset->metadata).dimensions }, description, link, repo}`);
  const data = await client.fetch<PROJECTS_QUERYResult>(PROJECTS_QUERY, {}, { next: { revalidate: 3600 } });
  return data;
}

export async function getBlogPosts() {
  const BLOGS_POSTS_QUERY = defineQuery(`*[_type=='blogs' && isPublished]|order(publishedAt desc)
  {title,  _createdAt, _updatedAt, "poster": poster.asset->url,
  "posterMetadata": { "lqip": (poster.asset->metadata).lqip, "dimensions": (poster.asset->metadata).dimensions }, 
  publishedAt, "slug": slug.current, description}`);

  const data = await client.fetch<BLOGS_POSTS_QUERYResult>(
    BLOGS_POSTS_QUERY,
    {},
    { next: { revalidate: 3600 } },
  );
  return data;
}

export async function getBlogPost(slug: string) {
  const BLOG_POST_QUERY =
    defineQuery(`*[_type=='blogs' && slug.current==$slug && isPublished]{title, "plainText": title + pt::text(text) + description, 
  "poster": poster.asset->url, "posterLqip": (poster.asset->metadata).lqip, publishedAt, isPublished, 
  "gallery": gallery[]{ "image": asset->url, "lqip": asset->metadata.lqip }, tags, _updatedAt, "text": text[] 
  {..., ...select( _type == "image" => { "image": asset->url, "lqip": (asset->metadata).lqip } ) },
   "slug": slug.current,_createdAt, description}[0]`);
  const data = await client.fetch<BLOG_POST_QUERYResult>(
    BLOG_POST_QUERY,
    { slug },
    { next: { revalidate: 3600 } },
  );
  return data;
}

export async function getBlogPostsPreview() {
  const { isEnabled } = await draftMode();
  if (isEnabled || isInDevelopment) {
    const BLOG_POSTS_PREVIEW_QUERY = defineQuery(`*[_type=='blogs' && isPublished]|order(publishedAt desc)
  {title,  _createdAt, _updatedAt, "poster": poster.asset->url,
  "posterMetadata": { "lqip": (poster.asset->metadata).lqip, "dimensions": (poster.asset->metadata).dimensions }, 
  publishedAt, "slug": slug.current, description}`);

    const data = await client.fetch<BLOG_POSTS_PREVIEW_QUERYResult>(BLOG_POSTS_PREVIEW_QUERY, {});
    return data;
  } else return "You are not allowed to run getBlogPostsPreview() function";
}

export async function getBlogPostPreview(slug: string) {
  const { isEnabled } = await draftMode();
  if (isEnabled || isInDevelopment) {
    const BLOG_POST_PREVIEW_QUERY =
      defineQuery(`*[_type=='blogs' && slug.current==$slug]{title, "plainText": title + pt::text(text) + description, 
    "poster": poster.asset->url, "posterLqip": (poster.asset->metadata).lqip, publishedAt, isPublished, 
    "gallery": gallery[]{ "image": asset->url, "lqip": asset->metadata.lqip }, tags, _updatedAt, "text": text[] 
    {..., ...select( _type == "image" => { "image": asset->url, "lqip": (asset->metadata).lqip } ) },
    "slug": slug.current,_createdAt, description}[0]`);
    const data = await client.fetch<BLOG_POST_PREVIEW_QUERYResult>(BLOG_POST_PREVIEW_QUERY, { slug });
    return data;
  } else return "You are not allowed to run getBlogPostPreview() function";
}
