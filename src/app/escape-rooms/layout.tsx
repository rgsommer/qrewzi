import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  path: "/escape-rooms",
  title: "Classroom escape rooms — 6 teams, one room, 45 min",
  description:
    "Turn any lesson into a themed escape room in 90 seconds, played by up to six teams at once in one classroom. Keys, locks, cipher fragments, a vault.",
  socialTitle: "Six teams. One classroom. Six different escape rooms.",
  socialDescription:
    "Type the lesson, type the theme, click Generate. 90 seconds later every team is in its own themed escape room, built around your curriculum.",
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
});

export default function EscapeRoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
