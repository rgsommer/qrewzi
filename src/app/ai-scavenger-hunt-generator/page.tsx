import { pageMetadata } from "../seo";
import GuidePage from "../components/GuidePage";

export const metadata = pageMetadata({
  path: "/ai-scavenger-hunt-generator",
  title: "AI scavenger hunt generator for teachers",
  description:
    "Type one line about your lesson, or paste your terms list, and Qrewzi's AI writes a whole classroom scavenger hunt: a challenge for every station, at your grade, with the answers checked. Print the cards and play.",
  socialTitle: "An AI scavenger hunt generator for teachers",
  socialDescription: "One line about your lesson becomes a room-wide scavenger hunt — every station written, every answer checked, ready to play.",
  keywords: [
    "AI scavenger hunt generator", "scavenger hunt generator for teachers", "AI scavenger hunt", "scavenger hunt maker",
    "AI classroom game generator", "AI lesson game generator", "scavenger hunt clue generator", "AI teacher tools games",
  ],
});

export default function AiScavengerHuntGeneratorPage() {
  return (
    <GuidePage
      eyebrow="AI scavenger hunt generator"
      title="One line about your lesson. A whole scavenger hunt."
      answer={[
        "Qrewzi is an AI scavenger hunt generator built for the classroom. Type a line about your lesson — or paste the terms your class is learning — choose the grade, and it writes a challenge for every station in many kinds of task, with an answer key for each.",
        "Then it runs the hunt: print the QR station cards, share the room code, and teams scan their way round the room while the projector keeps score. A chatbot can write you clues; Qrewzi also makes the stations, sends the teams, marks the answers and sends you the report.",
      ]}
      stepsTitle="From a sentence to a running game."
      steps={[
        { emoji: "✍️", name: "Describe it", body: "\"Grade 8 settlements and natural hazards\", \"times tables to 12\", or paste your unit's terms list." },
        { emoji: "🎛️", name: "Choose the shape", body: "Pick the grade and how long you have, and a mode — station hunt, mystery-box quest, escape room or trivia." },
        { emoji: "🔍", name: "Look it over", body: "Every task can be read, edited or remade before you play. Each one is checked for a working answer before it reaches students." },
        { emoji: "🖨️", name: "Print once", body: "The QR station cards are the same for every game — print them once and keep them on the wall." },
        { emoji: "🚀", name: "Play", body: "Share the room code. Teams join on any device and the hunt starts." },
      ]}
      pointsTitle="More than a list of clues."
      points={[
        { emoji: "🎯", title: "Built from your curriculum", body: "Questions, clues and missions use your lesson's words and ideas, at the grade you choose." },
        { emoji: "🔀", title: "Dozens of kinds of task", body: "Quizzes, true or false, sorting, ordering, matching, photo missions, acting out, puzzles — a different one at each station." },
        { emoji: "✅", title: "Answers that work", body: "Tasks are checked before they're served, most are marked instantly, and written answers are scored by AI." },
        { emoji: "♻️", title: "Use it again", body: "Save the set, run it with another class, share it with a colleague, or play the same lesson as an escape room." },
      ]}
      faqTitle="The AI generator, answered"
      faq={[
        { q: "Can I just use ChatGPT to make a scavenger hunt?", a: "A chatbot can write clues, but you still have to make the codes, print them, send teams round, keep score and mark the answers. Qrewzi does all of that for you." },
        { q: "How accurate are the questions?", a: "Each task is checked for a working answer key before it is served, and you can read, edit or remake any task before you play." },
        { q: "Which subjects does it work for?", a: "Any subject and any grade, K–12 — math, science, geography, history, languages, religious education and more." },
        { q: "How long does it take?", a: "About five minutes from describing the lesson to a room code on the projector, the first time. After that the station cards are already on the wall." },
        { q: "Is it free?", a: "Your first three months are free, with everything included and no card needed. After that, carry on with the Free plan or choose a paid plan." },
      ]}
      related={[
        { href: "/classroom-scavenger-hunt", label: "Classroom scavenger hunt app" },
        { href: "/escape-rooms", label: "AI escape rooms" },
        { href: "/trivia-night", label: "Trivia nights" },
      ]}
    />
  );
}
