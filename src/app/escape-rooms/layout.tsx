import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  path: "/escape-rooms",
  title: "Classroom escape rooms — 6 teams, one room, 45 min",
  description:
    "Turn any lesson into a themed escape room in 90 seconds, or launch one of six ready-made rooms — history, science, Bible, math, English, geography. Up to six teams at once in one classroom, chests in view on every device, hints when they're stuck.",
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
    "ready-made escape room for the classroom",
    "history escape room",
    "science escape room",
    "Bible escape room for kids",
    "math escape room grade 5",
    "Romeo and Juliet escape room",
    "geography escape room",
    "escape room with hints",
  ],
});

export default function EscapeRoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
