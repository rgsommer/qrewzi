import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/think-pair-share",
  title: "Think-Pair-Share game — share an idea, pass it on",
  description:
    "A Think-Pair-Share activity that runs itself. List your topics; each round teams pair up at a station, one shares an idea, the other writes it down — then passes it on to the next pair, from memory.",
  socialTitle: "Think-Pair-Share, with every idea passed on",
  socialDescription:
    "Pairs meet at QR stations, share an idea and write down what they heard — then pass it on, from memory. Scored on how much of each idea arrives two teams later.",
  keywords: [
    "think pair share", "think-pair-share activity", "think pair share game", "think pair share online",
    "classroom discussion game", "active listening activity", "paraphrasing activity for students",
    "cooperative learning activity", "student discussion strategy", "speaking and listening activity",
    "discussion game on phones", "think pair share template",
  ],
});

// How a round runs — the order backend/socket/tpsRounds.js plays it in, in
// the words the players' screens use (student-app components/tps/TpsRounds.jsx).
const STEPS = [
  { emoji: "🧭", name: "Meet", body: "Every team is paired with one it hasn't met yet and sent to a station. Both scan the card there, and the round's question comes up on both screens." },
  { emoji: "🎤", name: "Think, then share", body: "Qrewzi names who speaks for each team — a different member every round. They write their idea in a sentence, then say it out loud." },
  { emoji: "✍️", name: "Listen and write it down", body: "The other team writes down what it heard, as close to the speaker's words as it can, and taps Done. Then the roles swap." },
  { emoji: "🔁", name: "Pass it on", body: "Next round, new pairs. Before a new idea, the speaker passes on the one their team was told last round — from memory. Their screen says whose idea it was, never the words." },
  { emoji: "🎯", name: "Scored for meaning", body: "Qrewzi reads what the next team wrote down against what the first team said. The closer the meaning, the more points — most to the team that remembered it, the rest to the team that wrote it down." },
];

const FAQ: FaqItem[] = [
  {
    q: "What do I need to set it up?",
    a: "A list of topics, one a line, and the station cards on your walls. Choose how many rounds (three to eight) and how long each one runs, and Qrewzi writes one open question a round — a cause, a comparison, a prediction, a trade-off — in plain words for your grade.",
  },
  {
    q: "How are the ideas scored?",
    a: "By meaning, not by wording. Three things earn points: sharing an idea of your own, writing down well what the other team said, and an idea that arrives intact after being passed on. An idea that keeps its main point and its key detail scores high even in other words.",
  },
  {
    q: "Can a student just read the idea off the screen when passing it on?",
    a: "No. The screen says only whose idea it was. The words stay in the team's heads — that's the point of the game — and they appear on the projector only once the round is over.",
  },
  {
    q: "Does it work with solos and with teams?",
    a: "Both. Each device is one side of a pair, whether one student holds it or three do. In a team, the speaker changes every round, so everyone takes a turn.",
  },
  {
    q: "What if there's an odd number of teams, or a team doesn't turn up?",
    a: "With an odd number, one pair becomes a three: each team speaks to one and listens to the other. A team that hasn't reached its station within a minute isn't waited for — the other side starts without it, and it's paired again next round.",
  },
  {
    q: "Can I give a round more time, or end it early?",
    a: "Yes. A round ends by itself as soon as every pair has tapped Done, or when its clock runs out. From the Host page you can add a minute, change the length of a round, or move everyone on to the next pairing.",
  },
];

export default function ThinkPairSharePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">Think-Pair-Share</div>
          <h1 style={{ marginTop: 12 }}>Share an idea.<br />Pass it on.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            List your topics and Qrewzi writes one open question a round. Each round every team meets a
            new team at a station: one shares an idea, the other writes down what it heard — and next
            round passes it on, from memory. Points for listening well, and for an idea that arrives
            intact two teams later.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <a href="https://set.qrewzi.com/teacher/ai-tasksets?mode=tps" className="btn btn-secondary">
              Make a Think-Pair-Share →
            </a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
            On phones, tablets and Chromebooks. Players join with a room code — no accounts.
          </p>
        </div>
      </section>

      {/* ============================ HOW A ROUND RUNS ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>How a round runs</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Meet, share, listen — then pass it on.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {STEPS.map((s, i) => (
              <div key={s.name} className="card">
                <div style={{ fontSize: 13, fontWeight: 900, color: "var(--coral)", letterSpacing: "0.12em" }}>STEP {i + 1}</div>
                <h3 style={{ fontSize: 18, marginTop: 6 }}><span aria-hidden="true">{s.emoji}</span> {s.name}</h3>
                <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Why it works</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Everyone speaks. Everyone has to listen.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <Point emoji="🗣️" title="Every student takes a turn" body="Qrewzi picks the speaker, and the turn moves round the team every round — so the same voice doesn't carry every pair." />
            <Point emoji="👂" title="Listening counts" body="What a team writes down is scored against what was said, so a pair can't just wait for its turn to talk." />
            <Point emoji="🔁" title="Paraphrase from memory" body="Passing an idea on means holding it, then putting it in your own words for someone new — the part of Think-Pair-Share that usually gets skipped." />
            <Point emoji="📺" title="The room sees the chain" body="The projector shows the round's question and clock, then each idea's journey — who said it, who carried it, and how much of it arrived." />
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="Think-Pair-Share, answered" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>List the topics. Press Start.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Make an account — your first three months of everything are free, no card needed. See the
            other ways to play on the <Link href="/game-modes" style={{ color: "var(--butter)" }}>game modes</Link> page.
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
