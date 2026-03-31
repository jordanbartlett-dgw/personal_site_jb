import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/beehiiv";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs();

  const blogPosts = slugs.map((slug) => ({
    url: `https://jordanbartlett.co/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  return [
    {
      url: "https://jordanbartlett.co",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://jordanbartlett.co/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://jordanbartlett.co/connect",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    ...blogPosts,
  ];
}
