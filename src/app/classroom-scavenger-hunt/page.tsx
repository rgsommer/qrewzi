import { pageMetadata } from "../seo";
import GuidePage from "../components/GuidePage";

export const metadata = pageMetadata({
  path: "/classroom-scavenger-hunt",
  title: "Classroom scavenger hunt app — from your lesson to a room-wide hunt",
  description:
    "Qrewzi is a classroom scavenger hunt app for K–12: describe your lesson and it writes the stations; teams scan QR codes around the room on any device, and the projector keeps score. First three months free.",
  socialTitle: "A classroom scavenger hunt, built from your lesson",
  socialDescription: "Describe the lesson, post the QR stations, and teams hunt the room for it — with a live scoreboard and a report at the bell.",
  keywords: [
    "classroom scavenger hunt", "classroom scavenger hunt app", "scavenger hunt app for teachers", "scavenger hunt for students",
    "educational scavenger hunt", "school scavenger hunt", "classroom scavenger hunt ideas", "scavenger hunt game for the classroom",
    "QR scavenger hunt", "station rotation game",
  ],
});

export default function ClassroomScavengerHuntPage() {
  return (
    <GuidePage
      eyebrow="Classroom scavenger hunt"
      title="A scavenger hunt made from your lesson."
      answer={[
        "Qrewzi is a classroom scavenger hunt app for K–12 teachers. You describe the lesson in a line, or paste your terms list, and Qrewzi writes a challenge for every station. Teams scan the QR cards posted around your room to get each one on a phone, tablet or Chromebook, and the projector shows a live scoreboard.",
        "Every challenge is about what you are teaching — not \"find something red\" — and there are dozens of kinds: quizzes, sorting, putting things in order, matching, photo missions, acting it out. When the bell goes, your report is waiting.",
      ]}
      stepsTitle="From a lesson to a hunt in about five minutes."
      steps={[
        { emoji: "✍️", name: "Describe the lesson", body: "One line is enough — \"Grade 6 fractions\" or \"the water cycle\" — or paste the terms your class is learning. Qrewzi writes the stations at your grade." },
        { emoji: "🖨️", name: "Post the station cards", body: "Print the QR station cards and tape them around the room. They are the same for every game, so you print them once." },
        { emoji: "📱", name: "Teams join with a code", body: "Students open the app or a browser, type the room code and pick their team. One device per team is enough." },
        { emoji: "🏃", name: "Hunt the room", body: "Teams go station to station in order (Troopers), or choose which mystery box to raid next (Raiders). Each scan brings up that station's challenge." },
        { emoji: "📺", name: "Keep score out loud", body: "The projector shows every team's score as it changes. Most challenges are marked the moment they are answered." },
        { emoji: "📨", name: "Read the report", body: "A report of what each team got right, and where they struggled, reaches you at the bell." },
      ]}
      pointsTitle="A hunt that teaches, and runs itself."
      points={[
        { emoji: "🎯", title: "It's your curriculum", body: "The clues, questions and missions come from the lesson you describe or the terms you paste — and you can edit any of them." },
        { emoji: "🔀", title: "More than a quiz on the wall", body: "Teams sort, sequence, match, photograph, act out and argue — a different kind of task at each station keeps the room moving." },
        { emoji: "🧑‍🤝‍🧑", title: "Everyone in the team has a job", body: "One student holds the device, the others coach — the roles move round so the same student doesn't do all the work." },
        { emoji: "🪑", title: "No room to roam? Play on screen", body: "Switch to on-screen only and the same game plays at the desks, with no scanning and no walking." },
      ]}
      faqTitle="Classroom scavenger hunts, answered"
      faq={[
        { q: "What grades is it for?", a: "K–12. Qrewzi writes the tasks at the grade you choose, and the same game also works for youth groups and for teams at work." },
        { q: "How long does it take to set up?", a: "About five minutes: describe the lesson, print the station cards (once — they work for every game), and share the room code." },
        { q: "Do students need their own phones?", a: "No. One device per team is enough — a school tablet, a Chromebook or a phone. Students join from the app or any browser, with no accounts." },
        { q: "Can I use my own questions?", a: "Yes. Paste your terms or questions and Qrewzi builds the stations from them, or edit any task it writes." },
        { q: "What if my room is too small to walk around?", a: "Choose on-screen only: the same game plays at the desks, with no scanning and no walking." },
        { q: "How much does it cost?", a: "Your first three months are free, with everything included and no card needed. After that, carry on with the Free plan or choose a paid plan." },
      ]}
      related={[
        { href: "/qr-code-scavenger-hunt", label: "How to run a QR code scavenger hunt" },
        { href: "/ai-scavenger-hunt-generator", label: "AI scavenger hunt generator" },
        { href: "/game-modes", label: "Game modes" },
        { href: "/escape-rooms", label: "Escape rooms" },
      ]}
    />
  );
}
