import type { MetadataRoute } from "next";

// Next.js sitemap.xml convention — served at /sitemap.xml.
// One entry per public marketing route. Pricing priority slightly bumped
// because that's the conversion page.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.qrewzi.com";
  // Bump this when page content changes; a fresh date on every build tells
  // crawlers nothing.
  const now = new Date("2026-11-08");
  const p = (path: string, priority: number, changeFrequency: "daily" | "weekly" | "monthly") => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    p("/",              1.0, "weekly"),
    p("/escape-rooms",  0.95, "weekly"),
    // The pages that answer a teacher's question in so many words.
    p("/classroom-scavenger-hunt", 0.95, "monthly"),
    p("/qr-code-scavenger-hunt", 0.9, "monthly"),
    p("/ai-scavenger-hunt-generator", 0.9, "monthly"),
    p("/review-games", 0.9, "monthly"),
    p("/goosechase-alternative", 0.85, "monthly"),
    p("/kahoot-alternative", 0.85, "monthly"),
    p("/game-modes",    0.9, "monthly"),
    p("/trivia-night",  0.9, "monthly"),
    p("/imagineit",     0.9, "monthly"),
    p("/think-pair-share", 0.9, "monthly"),
    p("/social-emotional-learning", 0.9, "monthly"),
    p("/youth-groups",  0.85, "monthly"),
    p("/prayer",        0.85, "monthly"),
    p("/teams",         0.85, "monthly"),
    p("/features",      0.8, "monthly"),
    p("/how-it-works",  0.8, "monthly"),
    p("/pricing",       0.7, "monthly"),
    p("/free",          0.6, "monthly"),
    p("/about",         0.5, "monthly"),
    p("/support",       0.4, "monthly"),
    p("/privacy",       0.3, "monthly"),
    p("/delete-data",   0.2, "monthly"),
    p("/terms",         0.3, "monthly"),
  ];
}
