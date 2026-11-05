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
        disallow: ["/api/", "/practice-dashboard"],
      },
      // The AI assistants' crawlers, by name: a teacher who asks one which
      // classroom game to use should get an answer that can name Qrewzi.
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "PerplexityBot", "Google-Extended", "Applebot-Extended"],
        allow: "/",
        disallow: ["/api/", "/practice-dashboard"],
      },
    ],
    sitemap: "https://www.qrewzi.com/sitemap.xml",
    host: "https://www.qrewzi.com",
  };
}
