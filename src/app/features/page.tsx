import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "30+ interactive task types, GameMaster projector dashboard, secret team superpowers, mixed-device sessions, class rosters, standards-aligned parent reports.",
  alternates: { canonical: "https://qrewzi.com/features" },
  openGraph: {
    title: "Every feature Qrewzi ships with",
    description:
      "The full box: 30+ task types, GameMaster mode, secret superpowers, Device Mode support, class rosters, parent-ready reports.",
    url: "https://qrewzi.com/features",
  },
  twitter: {
    title: "Every feature Qrewzi ships with",
    description:
      "The full box: 30+ task types, GameMaster mode, secret superpowers, Device Mode support, class rosters, parent-ready reports.",
  },
};

const FEATURES = [
  { name: "30+ task types", body: "Multiple choice, sort, sequence, mind map, matching, cloze, brain blitz, flashcards race, motion mission, speech recognition, script play, role-play deck, hangman duel, and more." },
  { name: "GameMaster mode", body: "Projector dashboard the teacher runs. Live leaderboard, station heat map, streak banners, celebration layer, session-complete finale." },
  { name: "Secret superpowers", body: "1-in-4 teams get a hidden power on join: Wild Card, Torchlight, Jump Higher, Truth Seeker, Second Chance, X-Ray. Kids trade rumors." },
  { name: "Device Mode Support", body: "Phones-only, laptop-only, or mixed. Hidden-QR laptop mode when webcams handle the scanning. One room, mixed devices." },
  { name: "Quick Start presets", body: "Pre-tuned task sets you can launch in one click — great for substitutes, filler days, or that spare 20-minute slot." },
  { name: "Class rosters", body: "Upload once. AI matches student names from work samples. Feeds into per-student progress + Edsby CSV export." },
  { name: "Parent-ready reports", body: "Every session generates a shareable PDF: Bloom's coverage, per-student grades, curriculum alignment, Class Chat Blurb." },
  { name: "Standards-aligned", body: "Ontario curriculum today, extensible to other jurisdictions. Report page cites the standards each task covered." },
  { name: "Diagnose & Fix", body: "Three-pass repair on any task set — deterministic sanitize → validate → AI repair. Bad tasks get fixed, not shipped." },
];

export default function FeaturesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">The full box</div>
        <h1 style={{ marginTop: 12, marginBottom: 40 }}>Everything Qrewzi ships with.</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {FEATURES.map((f) => (
            <div key={f.name} className="card">
              <h3 style={{ fontSize: 19 }}>{f.name}</h3>
              <p style={{ marginTop: 10, color: "var(--slate)", fontSize: 15 }}>{f.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, textAlign: "center" }}>
          <a href="https://set.qrewzi.com/quickstart" className="btn btn-primary">Launch a ready-made game →</a>
        </div>
      </div>
    </section>
  );
}
