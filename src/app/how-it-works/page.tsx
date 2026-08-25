import Link from "next/link";

export const metadata = { title: "How it works" };

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="eyebrow">Teacher walkthrough</div>
        <h1 style={{ marginTop: 12 }}>Five minutes from idea to running game.</h1>

        <div style={{ marginTop: 48, display: "grid", gap: 40 }}>
          <Step
            n={1}
            title="Describe the lesson"
            body="One line — 'water cycle for grade 5,' 'Macbeth Act 3,' 'Grade 8 slope-intercept form.' Qrewzi generates a task set: a mix of MCQ, sort, sequence, mind-map, motion, speech, and role-play tasks tuned to the topic and grade level."
          />
          <Step
            n={2}
            title="Print the QR stations"
            body="One click prints eight color-coded stations. Duplex-aware layout, hidden-QR mode for laptops, blank fallback if a station's QR gets scuffed. Tape them around the room."
          />
          <Step
            n={3}
            title="Share the room code"
            body="Kids open Qrewzi on their phone, type the room code, name their team. No accounts. Kids can be up and playing in under a minute even on a class set of shared Chromebooks."
          />
          <Step
            n={4}
            title="Run the room"
            body="The projector shows the GameMaster dashboard — live leaderboard, station heat map, team streaks, celebrations. You referee. Kill-switch, superpower reveals, mid-session pauses all one click away."
          />
          <Step
            n={5}
            title="Send the report"
            body="Session ends, Qrewzi generates the parent-ready recap: per-student grades, Bloom's taxonomy coverage, curriculum alignment, a Class Chat Blurb you can paste into your dojo/parent-portal note in ten seconds."
          />
        </div>

        <div style={{ marginTop: 64, textAlign: "center" }}>
          <Link href="/beta" className="btn btn-primary">Try it with your class →</Link>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, alignItems: "start" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 48,
          color: "var(--coral)",
          lineHeight: 1,
        }}
      >
        0{n}
      </div>
      <div>
        <h2 style={{ fontSize: 28 }}>{title}</h2>
        <p style={{ marginTop: 12, color: "var(--slate)", fontSize: 16.5 }}>{body}</p>
      </div>
    </div>
  );
}
