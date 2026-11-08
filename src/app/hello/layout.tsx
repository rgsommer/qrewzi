import type { Metadata } from "next";

// /hello is the page an outreach email links to, made for its reader: it is
// not for search engines, and it is a client component, so its metadata
// lives here.
export const metadata: Metadata = {
  title: "Qrewzi in one minute",
  description: "A lesson becomes a team game the whole class plays, on any phone, tablet or Chromebook. Try the live demo, no sign-up.",
  robots: { index: false, follow: false },
};

export default function HelloLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
