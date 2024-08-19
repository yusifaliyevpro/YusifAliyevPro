import { BASE_URL } from "@/lib/constants";
import { getSlugs } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blog = await getSlugs();

  const blogSitemapEntries: MetadataRoute.Sitemap = blog.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: blog.publishedAt,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [`/`, `/blog`, `/about`].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...staticRoutes, ...blogSitemapEntries];
}
