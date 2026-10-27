import type { Metadata, Viewport } from "next";
import { Unbounded, Nunito } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Qrewzi — the classroom becomes the game | Live team games for K-12",
    template: "%s · Qrewzi",
  },
  description:
    "Qrewzi (say crew-zee) turns a one-line lesson into a live, room-wide team game: QR stations, any device, a projector scoreboard and your report at the bell. Three months free.",
  keywords: [
    "classroom escape room", "AI escape room generator", "Breakout EDU alternative",
    "classroom trivia night", "Bible trivia game", "house points game", "team building classroom game",
    "classroom games", "Kahoot alternative", "Blooket alternative", "live classroom activities",
    "classroom game modes", "1v1 classroom quiz game", "mystery box classroom game",
    "youth group games", "church youth group activities", "small group prayer activity",
    "team-based learning", "station rotation", "QR code learning", "multi-room scavenger hunt",
    "interactive lessons", "K-12 game engine", "GameMaster dashboard",
    "educational games", "teacher game platform", "phone ban classroom activities",
    "Chromebook classroom games", "Ontario curriculum",
  ],
  metadataBase: new URL("https://qrewzi.com"),
  // No canonical here: it would be inherited by every page that does not
  // set its own. Each page names itself (seo.ts pageMetadata; the home page
  // in page.tsx).
  authors: [{ name: "Qrewzi" }],
  creator: "Qrewzi",
  publisher: "Qrewzi",
  category: "Education",
  applicationName: "Qrewzi",
  openGraph: {
    title: "Qrewzi — the classroom becomes the game",
    description:
      "Live, room-wide team games from a one-line lesson. Three game modes, 65+ task types, any device, projector scoreboard, report at the bell. Your first three months free.",
    url: "https://qrewzi.com",
    siteName: "Qrewzi",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qrewzi — the classroom becomes the game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qrewzi — the classroom becomes the game",
    description:
      "Live, room-wide team games from a one-line lesson. Three game modes, 65+ task types, any device, projector scoreboard, report at the bell. Your first three months free.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

// Next 14 takes the theme colour from the viewport export, not metadata.
export const viewport: Viewport = {
  themeColor: "#FF4D5B",
};

// Structured data: who we are and what the product is, including the app
// store listings. Rendered once in the root layout so every page carries it.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://qrewzi.com/#org",
      name: "Qrewzi",
      url: "https://qrewzi.com",
      logo: "https://qrewzi.com/apple-touch-icon.svg",
      email: "hello@qrewzi.com",
      address: { "@type": "PostalAddress", addressLocality: "Hamilton", addressRegion: "ON", addressCountry: "CA" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://qrewzi.com/#app",
      name: "Qrewzi",
      alternateName: "Qrewzi (crew-zee)",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web, Android, iOS",
      url: "https://qrewzi.com",
      description:
        "Turns a one-line lesson into a live, room-wide team game for classrooms, trivia nights and youth groups. Teams move between QR stations on any device, played as Troopers, Raiders or Duels; the projector keeps score; the teacher's grades and a parent-ready report arrive at the bell.",
      publisher: { "@id": "https://qrewzi.com/#org" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD", description: "First three months free, no card needed" },
      installUrl: [
        "https://play.google.com/store/apps/details?id=net.curriculate.student",
        "https://apps.apple.com/app/id6788738826",
      ],
      audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
      featureList: [
        "Three game modes: Troopers (station to station), Raiders (mystery boxes) and Duels (1-on-1 rounds)",
        "Builder add-on: every task adds a layer to the team's build, with a Master Builder award",
        "Face-offs: surprise team head-to-heads for bonus points",
        "Groups named for the lesson, or your school's houses, with a house showdown",
        "Trivia nights from nine checked question banks, or on your own topic",
        "Classroom escape rooms and quests generated from any lesson",
        "Prayer Rounds: small-group prayer times for churches and youth groups",
        "Multi-room hunts, or on-screen only with no walking",
        "65+ task types beyond multiple choice",
        "GameMaster projector dashboard with a live leaderboard",
        "Phones, tablets and Chromebooks in one room",
        "A report after every session with grades for the teacher, Bloom's coverage and a note to parents",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://qrewzi.com/#site",
      url: "https://qrewzi.com",
      name: "Qrewzi",
      publisher: { "@id": "https://qrewzi.com/#org" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
