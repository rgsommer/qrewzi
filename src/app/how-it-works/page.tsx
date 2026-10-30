import Link from "next/link";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  path: "/how-it-works",
  title: "How it works — a lesson to a live game in 5 minutes",
  description:
    "Describe a lesson, print the QR stations, pick Troopers, Raiders or Duels, share a room code and run the projector dashboard. Your report arrives at the bell.",
  socialTitle: "How Qrewzi turns a lesson into a game",
  socialDescription: "Describe, print, pick a mode, share, run, report. Five minutes of prep, one class period, no marking pile.",
  keywords: ["how to run a classroom game", "QR code stations", "station rotation activity", "no-prep lesson", "team quiz game", "classroom game modes"],
});

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
            body="One line — 'water cycle for grade 5,' 'Macbeth Act 3,' 'Grade 8 slope-intercept form.' Qrewzi builds a set from a mix of its 85+ task types — sorts, sequences, mind maps, motion missions, speech, role-play — tuned to the topic and grade. Or skip the typing: a Quick Start preset, or a trivia night dealt from a checked question bank."
          />
          <Step
            n={2}
            title="Print the QR stations"
            body="One click prints eight colour-coded stations. Duplex-aware layout, hidden-QR mode for laptops, blank fallback if a station's QR gets scuffed. Tape them around the room — or around several rooms for a multi-room hunt. Want everyone at their desks? Choose on-screen only and skip the printing."
          />
          <Step
            n={3}
            title="Pick a mode"
            body="Troopers: teams go station to station, through the set in order. Raiders: teams pick which mystery box to raid next. Duels: every player on their own device, paired 1-on-1, and with someone new after every duel. Add Builder to Troopers or Raiders and every task adds a layer to the team's build."
            link={{ href: "/game-modes", label: "Compare the game modes" }}
          />
          <Step
            n={4}
            title="Share the room code"
            body="Players open play.qrewzi.com or the free app, type the room code and name their team. No accounts. A class can be up and playing in under a minute, even on a set of shared Chromebooks."
          />
          <Step
            n={5}
            title="Run the room"
            body="The projector shows the GameMaster dashboard — live leaderboard, station heat map, team streaks, celebrations. You referee. Face-offs, a house showdown and the pause button are one click away, and Catch Qrew turns up on its own."
          />
          <Step
            n={6}
            title="Send the report"
            body="When the game ends, your report arrives: grades for each student, Bloom's taxonomy coverage, the standards the session touched, a note to parents and a class-chat blurb you can paste into your parent portal in ten seconds."
          />
        </div>

        <div style={{ marginTop: 64, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="https://set.qrewzi.com/quickstart" className="btn btn-primary">Launch a ready-made game →</a>
          <Link href="/features" className="btn btn-secondary">Every feature</Link>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body, link }: { n: number; title: string; body: string; link?: { href: string; label: string } }) {
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
        {link && (
          <p style={{ marginTop: 10, fontWeight: 900 }}>
            <Link href={link.href}>{link.label} →</Link>
          </p>
        )}
      </div>
    </div>
  );
}
