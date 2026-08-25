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
    default: "Qrewzi — the classroom becomes the game",
    template: "%s · Qrewzi",
  },
  description:
    "Qrewzi turns any lesson into a live team scavenger hunt. Describe a topic and Qrewzi builds a room-wide game across 30+ interactive task types — kids play on any device, teachers run the GameMaster dashboard on the projector.",
  keywords: [
    "classroom games", "live classroom activities", "team-based learning",
    "scavenger hunt lessons", "QR code learning", "interactive lessons",
    "K-12 game engine", "GameMaster dashboard", "educational games",
    "teacher game platform",
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
      "AI-generated live classroom games. 30+ interactive task types. Kids play on any device, teachers run the GameMaster dashboard on the projector.",
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
      "AI-generated live classroom games. 30+ interactive task types. Kids play on any device, teachers run the GameMaster dashboard on the projector.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
