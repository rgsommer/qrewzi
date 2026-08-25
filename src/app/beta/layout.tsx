import type { Metadata } from "next";

// /beta is a client component (uses form state), so it can't export
// `metadata` directly. This layout wraps it and provides the metadata
// Next.js needs for that route.
export const metadata: Metadata = {
  title: "Join the beta",
  description:
    "Bring Qrewzi to your class this week. Beta teachers get everything free, direct access to us for feedback, and their name on the Original Qrew wall.",
  alternates: { canonical: "https://qrewzi.com/beta" },
  openGraph: {
    title: "Join the Qrewzi beta",
    description:
      "Free for beta teachers. Two-minute signup. Bring it to your class this week.",
    url: "https://qrewzi.com/beta",
  },
  twitter: {
    title: "Join the Qrewzi beta",
    description:
      "Free for beta teachers. Two-minute signup. Bring it to your class this week.",
  },
};

export default function BetaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
