import type { MetadataRoute, Route } from "next";

import { BASE_URL } from "@/lib/constants";
import { getBlogPosts } from "@/data-access/blog/get";
import { getProjects } from "@/data-access/projects/get";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();
  const projects = await getProjects();
  const projectPosters = projects.map((project) => project.image).filter((p) => p !== null);
  const blogPosters = blogPosts.map((blog) => blog.poster).filter((p) => p !== null);

  const blogPostsRoutes: MetadataRoute.Sitemap = blogPosts.map((blog) => ({
    changeFrequency: "weekly",
    images: [blog.poster as string],
    lastModified: blog._updatedAt,
    url: `${BASE_URL}/blog/${blog.slug}`,
  }));

  const routes: Route[] = [`/`, `/blog`, `/contact`];
  const staticImages = [
    [`${BASE_URL}/Linkedin-Profile.png`, `${BASE_URL}/Linkedin-Rounded.png`, ...projectPosters],
    [...blogPosters],
    [],
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route, i) => ({
    changeFrequency: "monthly",
    images: [`${BASE_URL}/Profile.png`, ...staticImages[i]],
    lastModified: new Date().toISOString(),
    url: `${BASE_URL}${route}`,
  }));

  return [...staticRoutes, ...blogPostsRoutes];
}
