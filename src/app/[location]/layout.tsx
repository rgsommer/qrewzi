import type { Metadata } from "next";

// qrewzi.com/<room>/scan and /<room>/<colour> are the addresses printed on
// station cards — one per room and colour, without end. They are a landing
// for a phone camera, not pages to search for, so they stay out of the index
// (links on them are still followed).
export const metadata: Metadata = {
  title: { absolute: "You scanned a Qrewzi station card" },
  description: "This code marks a station in a Qrewzi classroom game. Open the player and enter your room code to play.",
  robots: { index: false, follow: true },
};

export default function StationCardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
