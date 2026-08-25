import type { MetadataRoute } from "next";

// Next.js robots.txt convention — served at /robots.txt.
// Open the marketing surface to crawlers; block obvious no-index paths
// (API routes have nothing indexable anyway, but be explicit).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://qrewzi.com/sitemap.xml",
    host: "https://qrewzi.com",
  };
}
