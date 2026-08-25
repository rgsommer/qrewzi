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
    "Qrewzi turns any lesson into a live team scavenger hunt. Teachers describe a topic, Qrewzi builds a room-wide game across 30+ interactive task types, students play on their phones or Chromebooks.",
  metadataBase: new URL("https://qrewzi.com"),
  openGraph: {
    title: "Qrewzi — the classroom becomes the game",
    description:
      "AI-generated live classroom games. 30+ interactive task types. Kids play on their phones, teachers run the room.",
    url: "https://qrewzi.com",
    siteName: "Qrewzi",
    type: "website",
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
