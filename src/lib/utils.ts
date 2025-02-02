import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { isInDevelopment } from "./constants";
import type {
  BLOG_QUERYResult,
  BLOGS_QUERYResult,
  PROJECTS_QUERYResult,
} from "@/sanity.types";

export async function getProjects() {
  const PROJECTS_QUERY = groq`*[_type=='projects']|order(_createdAt desc){name,  "image": image.asset->url,    
  "imageMetadata": { "lqip": (image.asset->metadata).lqip, "dimensions": (image.asset->metadata).dimensions }, 
  description, link, repo}`;
  const data = await client.fetch<PROJECTS_QUERYResult>(
    PROJECTS_QUERY,
    {},
    { next: { revalidate: 3600 }, cache: "force-cache" },
  );
  return data;
}

export async function getBlogs({ isEnabled }: { isEnabled: boolean }) {
  const BLOGS_QUERY = groq`*[_type=='blogs' && (isPublished || $isInDevelopment || $isEnabled)]|order(publishedAt desc)
  {title,  _createdAt, _updatedAt, "poster": poster.asset->url,
  "posterMetadata": { "lqip": (poster.asset->metadata).lqip, "dimensions": (poster.asset->metadata).dimensions }, 
  publishedAt, "slug": slug.current, description}`;

  const data = await client.fetch<BLOGS_QUERYResult>(
    BLOGS_QUERY,
    { isInDevelopment, isEnabled },
    { next: { revalidate: 3600, tags: ["blogs"] }, cache: "force-cache" },
  );
  return data;
}

export async function getBlog(slug: string) {
  const BLOG_QUERY = groq`*[_type=='blogs' && slug.current==$slug]{title, "plainText": title + pt::text(text) + description, 
  "poster": poster.asset->url, "posterLqip": (poster.asset->metadata).lqip, publishedAt, isPublished, 
  "gallery": gallery[]{ "image": asset->url, "lqip": asset->metadata.lqip }, tags, _updatedAt, "text": text[] 
  {..., ...select( _type == "image" => { "image": asset->url, "lqip": (asset->metadata).lqip } ) },
   "slug": slug.current,_createdAt, description}[0]`;
  const data = await client.fetch<BLOG_QUERYResult>(
    BLOG_QUERY,
    { slug },
    { next: { revalidate: 3600, tags: ["blog"] }, cache: "force-cache" },
  );
  return data;
}
