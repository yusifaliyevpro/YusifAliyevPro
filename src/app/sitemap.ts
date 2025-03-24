import { BASE_URL } from "@/lib/constants";
import { getBlogPosts, getProjects } from "@/lib/utils";
import type { MetadataRoute, Route } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();
  const projects = await getProjects();
  const projectPosters = projects.map((project) => project.image);
  const blogPosters = blogPosts.map((blog) => blog.poster);

  const blogPostsRoutes: MetadataRoute.Sitemap = blogPosts.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: blog._updatedAt,
    images: [blog.poster],
    changeFrequency: "weekly",
  }));

  const routes: Route[] = [`/`, `/blog`, `/contact`];
  const staticImages = [
    [`${BASE_URL}/Linkedin-Profile.png`, `${BASE_URL}/Linkedin-Rounded.png`, ...projectPosters],
    [...blogPosters],
    [],
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route, i) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    images: [`${BASE_URL}/Profile.png`, ...staticImages[i]],
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...blogPostsRoutes];
}
