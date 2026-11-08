import { pageMetadata } from "../seo";
import GuidePage from "../components/GuidePage";

export const metadata = pageMetadata({
  path: "/goosechase-alternative",
  title: "A Goosechase alternative for schools",
  description:
    "A Goosechase alternative for teachers: a scavenger hunt at QR stations or outdoors, every challenge from your lesson, most answers marked as they come in.",
  socialTitle: "A Goosechase alternative built for one classroom",
  socialDescription: "Stations in your room, challenges from your lesson, answers marked as they come in, and a report at the bell.",
  keywords: [
    "Goosechase alternative", "Goosechase alternative for schools", "Goosechase for education alternative", "apps like Goosechase",
    "scavenger hunt app for teachers", "classroom scavenger hunt app", "Scavify alternative",
  ],
});

export default function GoosechaseAlternativePage() {
  return (
    <GuidePage
      eyebrow="Goosechase alternative"
      title="A scavenger hunt for one classroom and one lesson."
      answer={[
        "Goosechase is a well-known scavenger hunt platform: teams complete missions — photos, videos, written answers, location check-ins — and an organiser reviews what they send in. It suits hunts that range across a campus, a town or an event.",
        "Qrewzi takes a different approach, built for teachers. The hunt happens at QR stations in your room, every challenge is written from your lesson, and most answers are marked the moment they are given — so the scoreboard is live and there is no pile of submissions to review afterwards.",
      ]}
      stepsTitle="What a lesson looks like in Qrewzi."
      steps={[
        { emoji: "✍️", name: "Describe the lesson", body: "A line, or your terms list. Qrewzi writes a challenge for every station, in many kinds of task, at your grade." },
        { emoji: "🖨️", name: "Post the stations", body: "Print the QR station cards once and tape them round the room — they work for every game." },
        { emoji: "🏃", name: "Teams hunt the room", body: "Each team is sent to a station no other team is at, scans it, and gets that station's challenge." },
        { emoji: "📺", name: "Scores as they happen", body: "Most tasks are marked as they're answered; written answers are read and scored by AI. The projector keeps the room's score." },
        { emoji: "📨", name: "Report at the bell", body: "What each team got right and where it struggled, ready when the class ends." },
      ]}
      pointsTitle="Made for the classroom."
      points={[
        { emoji: "🎯", title: "Content first", body: "Every station is about what you're teaching — a sort, a sequence, a quiz, a photo, a debate — not a generic mission." },
        { emoji: "✅", title: "Marked for you", body: "No reviewing photos after class: objective tasks are checked instantly, and written answers are scored against your lesson." },
        { emoji: "🏫", title: "One room is enough", body: "Stations on your walls, or on-screen only at the desks. No campus map, no GPS, no permission slips." },
        { emoji: "🌳", title: "Or take it outside", body: "ImagineIt is a photo hunt in the schoolyard: nature finds and prompts from your lesson, no codes to post, and it plays on out of Wi-Fi range." },
        { emoji: "🔁", title: "One lesson, many games", body: "The same lesson can run as a station hunt, a mystery-box quest, an escape room or a trivia night." },
      ]}
      compare={{
        them: "Goosechase",
        rows: [
          { label: "Best for", them: "Hunts across a campus, a town or an event, for schools, workplaces and other groups.", us: "A lesson in one classroom, K–12 — also youth groups and teams at work." },
          { label: "Where it's played", them: "Wherever the missions send teams.", us: "At QR stations in your room, on-screen only at the desks, or outside in an ImagineIt photo hunt." },
          { label: "The challenges", them: "Missions you write, with help from its AI mission generator.", us: "Written from your lesson or terms list, in dozens of kinds of task, at your grade." },
          { label: "Marking", them: "An organiser reviews what teams submit.", us: "Most tasks marked instantly; written answers scored by AI; a report at the bell." },
          { label: "Devices", them: "The app or a browser.", us: "Any phone, tablet or Chromebook, in the app or a browser, with a room code — one per team is enough." },
        ],
        note: "If your hunt ranges across a town or a whole event, Goosechase is a good fit. If it's a lesson — in your classroom or out in the schoolyard — that's what Qrewzi is built for.",
      }}
      faqTitle="Switching to Qrewzi, answered"
      faq={[
        { q: "Can I bring my own questions?", a: "Yes. Paste your questions or terms and Qrewzi builds the stations from them, or edit any task it writes." },
        { q: "Do students need accounts?", a: "No. Students join with a room code in the Qrewzi app or any browser. One device per team is enough." },
        { q: "Can it do photo missions?", a: "Yes — photo, make-and-snap and photo-journal tasks are among the kinds of task, and ImagineIt is a whole hunt of them: nature finds and imagination prompts from your lesson, a photo wall on the projector and a class vote." },
        { q: "Does it work outside the classroom?", a: "Yes, in the schoolyard: station cards on fence posts with Outdoor mode, or an ImagineIt photo hunt with nothing to post. Both keep playing when a team is out of Wi-Fi range. For hunts across a town or a large event, a mission-based app may suit you better." },
        { q: "How much does it cost?", a: "Your first three months are free, with everything included and no card needed. After that, carry on with the Free plan or choose a paid plan." },
      ]}
      related={[
        { href: "/classroom-scavenger-hunt", label: "Classroom scavenger hunt app" },
        { href: "/kahoot-alternative", label: "Kahoot alternative for teams" },
        { href: "/game-modes", label: "Game modes" },
        { href: "/imagineit", label: "ImagineIt outdoor photo hunt" },
      ]}
    />
  );
}
