import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/social-emotional-learning",
  title: "SEL activities and calm brain breaks for the classroom",
  description:
    "Social-emotional learning inside the game: a Nature Walk in a real forest or garden, role play on seven SEL skills, calming puzzle breaks and a guided Cross-Body Breath — and the teacher sees how the class is feeling.",
  socialTitle: "Brain breaks and SEL that fit inside the lesson",
  socialDescription:
    "Imagine being there, one slow breath, then tap how you feel. Role play on seven skills, calming puzzles, guided breathing — nothing typed, nothing marked.",
  keywords: [
    "social emotional learning activities", "SEL activities for the classroom", "SEL games", "classroom brain break",
    "mindfulness activity for kids", "feelings check-in activity", "emotion check-in classroom", "calm down strategies for kids",
    "self-regulation activities", "SEL role play scenarios", "guided breathing for students", "Christian SEL activities",
  ],
});

// What a teacher can put in a game — each one a task type, in the words the
// players' screens use (student-app NatureWalkTask, SelRolePlayTask,
// PuzzlePiecesTask, BodyBreakTask's cross-body routine).
const BREAKS = [
  {
    emoji: "🌿",
    name: "Nature Walk",
    body: "A real photograph of a forest path, a garden or a lake fills the screen. A few lines ask the team to imagine they're really there — the cool air, the sounds, the light — then one slow breath together. Then they tap how they're feeling, an intention for the day, and what helps when a feeling gets big. Nothing to type, nothing right or wrong.",
  },
  {
    emoji: "🤝",
    name: "Role Play: Social-Emotional",
    body: "Teams act out an everyday school moment to practise one skill — self-regulation, recognizing challenges, perseverance, relationships, self-awareness, self-confidence, or critical and creative thinking. Pause points stop the scene: what could they say next, how might someone feel, what's a better choice? A short talk closes it.",
  },
  {
    emoji: "🧩",
    name: "Puzzle Pieces",
    body: "A calm breather between harder tasks: the team rebuilds a nature photograph, several hands dragging pieces at once, and the finished picture shows an encouraging line, a positive-thinking line or a Bible verse.",
  },
  {
    emoji: "🧘",
    name: "Cross-Body Breath",
    body: "A guided calming stretch, a picture for each pose: legs crossed, wrists crossed, hands clasped to the chest, three slow breaths — then the other way for three more, with a ring that counts them.",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Who sees what the students tap in a Nature Walk?",
    a: "Only you. The class's feelings show on your Host page as they come in, and in the report after — never on the projector and never on another team's device. The summary written for parents and the class chat says a walk happened, not what anyone felt.",
  },
  {
    q: "Are the feelings marked or graded?",
    a: "No. A walk scores on taking part, never on which feeling a student taps, and it is left out of the grade. There are no wrong answers and nothing to type.",
  },
  {
    q: "What do the Nature Walk's three waves ask?",
    a: "First, ten feelings — half comfortable, half not — and a teammate can tap the same one, so a feeling can be shared. Then an intention: today I need to forgive someone, be kind to someone, be helpful to someone, say thank you to someone or show interest in someone. Then what helps when a feeling gets big: three slow breaths, asking for help, a break, counting to ten, talking to someone you trust, a stretch, a drink of water.",
  },
  {
    q: "Does the role play ask students about their own lives?",
    a: "No. The scenes are everyday school moments, and the questions are about the characters — what they could say, how they might feel, a better choice. Nothing asks a student to share something personal, and topics for a counsellor are kept out.",
  },
  {
    q: "Does it fit a Christian school?",
    a: "Yes. In a Bible or Christian Education class the role play can close with a verse that speaks to the skill, and Puzzle Pieces can reveal a Bible verse (King James Version, word for word).",
  },
  {
    q: "How do I add one to a game?",
    a: "The generator puts breathers between harder tasks on its own, or you can add any of them to a set yourself — a Nature Walk needs nothing but the scene you pick. A Nature Walk takes about two minutes.",
  },
];

export default function SocialEmotionalLearningPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">Social-emotional learning</div>
          <h1 style={{ marginTop: 12 }}>A breath between<br />the hard parts.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            Calm breaks and social-emotional practice that sit inside the game, between the lesson&apos;s
            tasks — a walk in a real forest, role play on the skills that matter, a puzzle, a breath.
            Students tap and talk rather than type, and you see how the class is feeling.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <Link href="/features#tasks" className="btn btn-secondary">Every task type →</Link>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
            On phones, tablets and Chromebooks. Players join with a room code — no accounts.
          </p>
        </div>
      </section>

      {/* ============================ THE BREAKS ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>In the game</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Four ways to slow the room down.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {BREAKS.map((b) => (
              <div key={b.name} className="card">
                <h3 style={{ fontSize: 18 }}><span aria-hidden="true">{b.emoji}</span> {b.name}</h3>
                <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15, lineHeight: 1.55 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Why it works</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Short, safe, and part of the lesson.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <Point emoji="⏱️" title="Two minutes, not a period" body="A breather sits between two harder tasks, so the class comes back to the lesson settled rather than losing the lesson to it." />
            <Point emoji="👆" title="Nothing to type" body="Every step is a tap, so a quiet student and a struggling writer take part the same as everyone else." />
            <Point emoji="🔒" title="Feelings stay with you" body="What students tap goes to your screen and your report — not the projector, not other teams, not the parent summary." />
            <Point emoji="🌳" title="A real place to imagine" body="Openly licensed photographs of real forests, gardens and lakes, credited on the screen — somewhere a student can picture standing." />
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="Social-emotional learning, answered" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Put a breath in the next game.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Make an account — your first three months of everything are free, no card needed. See every
            task type on the <Link href="/features" style={{ color: "var(--butter)" }}>features</Link> page.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <Link href="/features" className="btn btn-ghost" style={{ color: "var(--cream)" }}>Every feature</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Point({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div style={{ padding: 20, borderRadius: 16, background: "var(--cream-shade)", border: "2px solid var(--navy)" }}>
      <div style={{ fontSize: 26 }} aria-hidden="true">{emoji}</div>
      <h4 style={{ fontSize: 17, marginTop: 8 }}>{title}</h4>
      <p style={{ marginTop: 6, fontSize: 14.5, color: "var(--slate)", lineHeight: 1.5 }}>{body}</p>
    </div>
  );
}
