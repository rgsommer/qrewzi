import { pageMetadata } from "../seo";
import GuidePage from "../components/GuidePage";

export const metadata = pageMetadata({
  path: "/qr-code-scavenger-hunt",
  title: "How to run a QR code scavenger hunt in class",
  description:
    "Two ways to run a QR code scavenger hunt for students: by hand with a free QR generator and printed clues, or with Qrewzi, which writes the stations from your lesson, sends teams round the room and keeps score.",
  socialTitle: "How to run a QR code scavenger hunt in class",
  socialDescription: "By hand with a free QR generator, or in five minutes with Qrewzi — stations from your lesson, teams sent round the room, scored live.",
  keywords: [
    "QR code scavenger hunt", "QR code scavenger hunt for students", "how to make a QR code scavenger hunt", "QR code hunt classroom",
    "QR code activities for the classroom", "QR code scavenger hunt template", "QR code stations", "QR code review game",
  ],
});

export default function QrCodeScavengerHuntPage() {
  return (
    <GuidePage
      eyebrow="QR code scavenger hunt"
      title="How to run a QR code scavenger hunt in class."
      answer={[
        "A QR code scavenger hunt puts a code at each station around the room. Students scan it with a phone or tablet to reveal a clue or question, answer it, and move on to the next. You can make one by hand — write the clues, turn each into a QR code with a free generator, print and tape them up — but then you also have to keep score, check answers and stop every team crowding the same station.",
        "Qrewzi does those parts for you. It writes a challenge for every station from your lesson, sends each team to its own next station so the room spreads out, marks most answers as they come in, and shows the scores on the projector.",
      ]}
      stepsTitle="The hunt, start to finish."
      steps={[
        { emoji: "🧭", name: "Choose the stations", body: "Six to ten stations suits most rooms — enough that teams aren't queueing, few enough to post in a few minutes." },
        { emoji: "✍️", name: "Write the challenges", body: "By hand, one clue or question per station. With Qrewzi, describe the lesson or paste your terms, and it writes them — with a different kind of task at each." },
        { emoji: "🖨️", name: "Print and post", body: "By hand, one code per clue, made with any free QR generator. With Qrewzi, the station cards are the same for every game, so you print them once." },
        { emoji: "📱", name: "Students scan", body: "With the phone's camera for a hand-made hunt, or in the Qrewzi app or any browser after typing the room code." },
        { emoji: "🏁", name: "Score and wrap up", body: "By hand, collect answer sheets. With Qrewzi, the projector shows live scores and your report arrives at the bell." },
      ]}
      pointsTitle="What makes a QR hunt work."
      points={[
        { emoji: "🔁", title: "Spread the teams out", body: "Start each team at a different station. Qrewzi does this for you, sending every team to its own next station." },
        { emoji: "🧠", title: "Make every station about the lesson", body: "A question at a station beats a clue that only points to the next one — the walking is the fun, the content is the point." },
        { emoji: "🎲", title: "Mix the kinds of task", body: "A sort here, a photo there, a quick debate at the window — variety keeps teams moving and talking." },
        { emoji: "⏱️", title: "Keep it short and scored", body: "Twenty to forty minutes is plenty. A live scoreboard keeps the energy up until the last station." },
      ]}
      faqTitle="QR code scavenger hunts, answered"
      faq={[
        { q: "What do students scan the codes with?", a: "For a hand-made hunt, the camera app on a phone or tablet. With Qrewzi, the Qrewzi app or any browser — students join with the room code, no accounts." },
        { q: "How many QR stations should I use?", a: "Six to ten works for most classrooms. More stations than teams means nobody waits." },
        { q: "How do I stop every team going to the same station?", a: "Give each team a different starting station and a set order. Qrewzi sends each team to its own next station, so this happens on its own." },
        { q: "Can I reuse the station cards?", a: "With Qrewzi, yes — the same cards work for every game, and the challenge behind each one changes with the lesson." },
        { q: "Is there a free way to try it?", a: "Yes. Your first three months of Qrewzi are free, with no card needed, and there's a live demo you can open without signing up." },
      ]}
      related={[
        { href: "/classroom-scavenger-hunt", label: "Classroom scavenger hunt app" },
        { href: "/review-games", label: "Review games that get students moving" },
        { href: "/how-it-works", label: "How Qrewzi works" },
      ]}
    />
  );
}
