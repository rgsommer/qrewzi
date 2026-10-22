import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom escape rooms — 6 teams, one classroom, 45 minutes",
  description:
    "Turn any lesson into a themed, parallel-team escape room — generated in 90 seconds, played by up to six teams at once in the same classroom. Keys, locks, cipher fragments, a brass-plate vault. Curriculum content IS the puzzle. Zero prep.",
  alternates: { canonical: "https://qrewzi.com/escape-rooms" },
  keywords: [
    "classroom escape room",
    "AI escape room generator",
    "Breakout EDU alternative",
    "digital escape room",
    "educational escape room",
    "parallel escape rooms",
    "themed classroom game",
    "Halloween escape room classroom",
    "Reformation Day classroom activity",
  ],
  openGraph: {
    title: "Six teams. One classroom. Six different escape rooms. 45 minutes.",
    description:
      "Type the lesson, type the theme, click Generate. 90 seconds later every team is in their own themed escape room, built around your curriculum. Nobody else does this.",
    url: "https://qrewzi.com/escape-rooms",
  },
  twitter: {
    title: "Six teams. One classroom. Six different escape rooms.",
    description:
      "AI-generated classroom escape rooms built around any lesson, themed any way (Halloween, Treasure Island, Space Station). Six parallel teams. 90-second setup.",
  },
};

export default function EscapeRoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
