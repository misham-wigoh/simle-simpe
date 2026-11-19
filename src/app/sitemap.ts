import type { MetadataRoute } from "next";
import { pages } from "@/lib/site-content";

const BASE = "https://www.simplesmileendo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  /* Static top-level pages */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/patient-info`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  /* Dynamic sub-pages from site-content.ts */
  const dynamicPages: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.kind === "blog" ? ("weekly" as const) : ("monthly" as const),
    priority: p.kind === "category" ? 0.8 : 0.6,
  }));

  return [...staticPages, ...dynamicPages];
}
