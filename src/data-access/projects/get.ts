import { client } from "@/sanity/lib/client";
import type { ProjectsQueryResult } from "@/sanity/types";
import { defineQuery } from "next-sanity";

export async function getProjects() {
  const ProjectsQuery = defineQuery(`
    *[_type == 'projects'] 
      | order(_createdAt desc) {
        name,
        "image": image.asset->url,
        "imageMetadata": {
          "lqip": image.asset->metadata.lqip,
          "dimensions": image.asset->metadata.dimensions
        },
        description,
        link,
        repo
      }
  `);

  const data = await client.fetch<ProjectsQueryResult>(ProjectsQuery, {}, { next: { revalidate: 3600 } });
  return data;
}
