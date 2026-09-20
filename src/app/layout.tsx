import type { Metadata } from "next";
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
    "Qrewzi (say crew-zee) turns a one-line lesson into a live, room-wide team game. Kids move between QR stations on any device, the projector keeps score, and grades plus a parent-ready report arrive at the bell. Free for a full year for beta teachers.",
  keywords: [
    "classroom games", "Kahoot alternative", "live classroom activities",
    "team-based learning", "station rotation", "QR code learning",
    "interactive lessons", "K-12 game engine", "GameMaster dashboard",
    "educational games", "teacher game platform", "phone ban classroom activities",
    "Chromebook classroom games", "Ontario curriculum",
  ],
  metadataBase: new URL("https://qrewzi.com"),
  alternates: {
    canonical: "https://qrewzi.com",
  },
  authors: [{ name: "Qrewzi" }],
  creator: "Qrewzi",
  publisher: "Qrewzi",
  category: "Education",
  applicationName: "Qrewzi",
  openGraph: {
    title: "Qrewzi — the classroom becomes the game",
    description:
      "Live, room-wide team games from a one-line lesson. 30+ task types, any device, projector scoreboard, report at the bell. Free for a full year for beta teachers.",
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
      "Live, room-wide team games from a one-line lesson. 30+ task types, any device, projector scoreboard, report at the bell. Free for a full year for beta teachers.",
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
        "Turns a one-line lesson into a live, room-wide classroom team game. Kids move between QR stations on any device; the projector keeps score; grades and a parent-ready report arrive at the bell.",
      publisher: { "@id": "https://qrewzi.com/#org" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD", description: "Free for a full year for beta teachers" },
      installUrl: [
        "https://play.google.com/store/apps/details?id=net.curriculate.student",
        "https://apps.apple.com/app/id6788738826",
      ],
      audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
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
