import type { MetadataRoute } from "next";

// Next.js sitemap.xml convention — served at /sitemap.xml.
// One entry per public marketing route. Beta priority slightly bumped
// because that's the conversion page.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://qrewzi.com";
  const now = new Date();
  const p = (path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly") => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    p("/",              1.0, "weekly"),
    p("/beta",          0.9, "weekly"),
    p("/features",      0.8, "monthly"),
    p("/how-it-works",  0.8, "monthly"),
    p("/pricing",       0.7, "monthly"),
    p("/about",         0.5, "monthly"),
    p("/privacy",       0.3, "monthly"),
    p("/terms",         0.3, "monthly"),
  ];
}
