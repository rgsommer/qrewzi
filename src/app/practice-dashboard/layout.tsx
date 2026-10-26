import type { Metadata } from "next";

// The owner's view of practice activity — not for search engines.
export const metadata: Metadata = {
  title: "Practice Dashboard — Qrewzi",
  robots: { index: false, follow: false },
};

export default function PracticeDashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
