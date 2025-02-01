import { BASE_URL } from "@/lib/constants";
import { getBlogs } from "@/lib/utils";
import type { MetadataRoute, Route } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs({ isEnabled: false });

  const blogSitemapEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: blog._updatedAt,
    images: [blog.poster],
  }));

  const routes: Route[] = [`/`, `/blog`, `/contact`];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    images: [`${BASE_URL}/Profile.png`],
  }));

  return [...staticRoutes, ...blogSitemapEntries];
}
