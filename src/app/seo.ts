import type { Metadata } from "next";

// Per-page metadata in one shape. Next merges a page's metadata with the
// layout's one key deep: a page that sets `openGraph` replaces the layout's
// whole `openGraph` object, image and site name included, and the same for
// `twitter`. So every page builds both in full here, and a shared link shows
// the card image whichever page it points at.

export const SITE_URL = "https://qrewzi.com";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Qrewzi — the classroom becomes the game",
};

type PageMeta = {
  /** The route, e.g. "/features" ("/" for the home page). */
  path: string;
  /** The <title>; the layout's template adds " · Qrewzi". */
  title: string;
  description: string;
  /** Shorter or punchier wording for share cards, if wanted. */
  socialTitle?: string;
  socialDescription?: string;
  keywords?: string[];
};

export function pageMetadata({ path, title, description, socialTitle, socialDescription, keywords }: PageMeta): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogTitle = socialTitle || title;
  const ogDescription = socialDescription || description;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Qrewzi",
      locale: "en_CA",
      url,
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE.url],
    },
  };
}
