import { pageMetadata } from "../seo";
import GuidePage from "../components/GuidePage";

export const metadata = pageMetadata({
  path: "/kahoot-alternative",
  title: "A Kahoot alternative where students play in teams — and move",
  description:
    "Looking for a Kahoot alternative for team play? In Qrewzi, teams share a device, move between QR stations and work through many kinds of task together — sorting, ordering, photos, debates — while the projector keeps score.",
  socialTitle: "A Kahoot alternative for team play",
  socialDescription: "Teams share a device, move between stations and work through many kinds of task together, with a live scoreboard.",
  keywords: [
    "Kahoot alternative", "Kahoot alternative for teams", "games like Kahoot", "Blooket alternative", "Gimkit alternative",
    "team based classroom game", "collaborative classroom game", "classroom game where students move",
  ],
});

export default function KahootAlternativePage() {
  return (
    <GuidePage
      eyebrow="Kahoot alternative"
      title="When you want teams, not a race to the buzzer."
      answer={[
        "Kahoot is great for a fast quiz: the question goes up on the projector, everyone answers from their seat, and quick right answers score most. It also has a team mode.",
        "Qrewzi is for the lessons where you want students working together. A team shares one device, moves between QR stations around the room, and works through a different kind of task at each — sorting, putting things in order, matching, photographing, acting out, debating — at its own pace, while the projector keeps everyone's score.",
      ]}
      stepsTitle="How a team game runs."
      steps={[
        { emoji: "✍️", name: "Describe the lesson", body: "Or paste your terms. Qrewzi writes the tasks at your grade." },
        { emoji: "🧑‍🤝‍🧑", name: "Make teams", body: "Students join a team with the room code. One device per team — or play solo, one each." },
        { emoji: "🏃", name: "Move between stations", body: "Each team is sent to its own station, scans it and gets the task there." },
        { emoji: "🤝", name: "Work it out together", body: "One student holds the device, the others coach — and the roles move round." },
        { emoji: "📺", name: "Scores on the projector", body: "Every team's score, live, until the last task." },
      ]}
      pointsTitle="What changes with teams."
      points={[
        { emoji: "🗣️", title: "Everyone talks", body: "A team has to agree on its answer, so students explain their thinking instead of racing to tap." },
        { emoji: "🐢", title: "No one left behind by speed", body: "Teams work at their own pace at their own station — being quickest isn't the only way to score." },
        { emoji: "🔀", title: "Many kinds of task", body: "Dozens of kinds, from quizzes to photo missions and debates, not one question format." },
        { emoji: "📱", title: "Fewer devices", body: "One device per team is enough, so it works in classes without one each." },
      ]}
      compare={{
        them: "Kahoot",
        rows: [
          { label: "How it plays", them: "Everyone answers the same question at the same time, from their seat.", us: "Teams work at different stations, at their own pace, around the room — or at the desks." },
          { label: "Scoring", them: "Right answers score, and quicker ones score more.", us: "Right answers score; teamwork, written answers and finished tasks count too." },
          { label: "Kinds of task", them: "Quiz-style questions.", us: "Dozens of kinds: quizzes, sorting, ordering, matching, photos, acting out, debates, puzzles." },
          { label: "Devices", them: "Usually one per student, or teams in team mode.", us: "One per team, or one each." },
        ],
        note: "For a quick check of the whole class at once, Kahoot is hard to beat. For a lesson where teams work together and move, that's what Qrewzi is for.",
      }}
      faqTitle="Kahoot alternatives, answered"
      faq={[
        { q: "Can I still run a whole-class quiz?", a: "Yes — a trivia night plays the whole room at once, and in Duels every player plays on their own, one-on-one. Most Qrewzi games, though, are built around teams." },
        { q: "Do students need their own devices?", a: "No. One device per team is enough — a phone, tablet or Chromebook, in the app or a browser, with no accounts." },
        { q: "Is it a Blooket or Gimkit alternative too?", a: "If you want teams moving and working together rather than individual play, yes — the same lesson can also run as an escape room or a trivia night." },
        { q: "How much does it cost?", a: "Your first three months are free, with everything included and no card needed. After that, carry on with the Free plan or choose a paid plan." },
      ]}
      related={[
        { href: "/goosechase-alternative", label: "Goosechase alternative" },
        { href: "/review-games", label: "Review games that get students moving" },
        { href: "/game-modes", label: "Game modes" },
      ]}
    />
  );
}
