import type { Metadata } from "next";

// /beta is a client component (uses form state), so it can't export
// `metadata` directly. This layout wraps it and provides the metadata
// Next.js needs for that route.
export const metadata: Metadata = {
  title: "Join the beta — a full year of Qrewzi, free",
  description:
    "Get a full year of Qrewzi free. Four quick fields, your setup link by email within a minute, and a game running in your room this week. The only ask: play once a month and tell us what broke.",
  alternates: { canonical: "https://qrewzi.com/beta" },
  keywords: ["free classroom game", "teacher beta", "Kahoot alternative", "classroom team game free trial"],
  openGraph: {
    title: "Join the Qrewzi beta — a full year, free",
    description:
      "Four fields, setup link within a minute, a game in your room this week. Free for a full year.",
    url: "https://qrewzi.com/beta",
  },
  twitter: {
    title: "Join the Qrewzi beta — a full year, free",
    description:
      "Four fields, setup link within a minute, a game in your room this week. Free for a full year.",
  },
};

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
