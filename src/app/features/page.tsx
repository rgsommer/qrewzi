import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — trivia nights, team builds, houses, 30+ task types",
  description:
    "Everything in Qrewzi: classroom trivia nights from checked question banks (Bible, history, Christmas, Easter and more), groups and school houses with a house showdown, builder mode where every answer adds to a team's castle, classroom escape rooms, 30+ task types, the GameMaster projector dashboard, and any device in one room.",
  alternates: { canonical: "https://qrewzi.com/features" },
  keywords: [
    "classroom trivia night", "Bible trivia game for kids", "Christmas trivia classroom", "house points game",
    "school houses competition", "team building classroom game", "classroom escape room", "classroom game features",
    "GameMaster dashboard", "projector leaderboard", "team superpowers", "mixed device classroom", "Ontario curriculum",
  ],
  openGraph: {
    title: "Every feature Qrewzi ships with",
    description:
      "Trivia nights, groups and houses, builder mode, escape rooms, 30+ task types, a projector scoreboard, any device in one room. Free for a year in beta.",
    url: "https://qrewzi.com/features",
  },
  twitter: {
    title: "Every feature Qrewzi ships with",
    description:
      "Trivia nights, groups and houses, builder mode, escape rooms, 30+ task types, a projector scoreboard, any device in one room. Free for a year in beta.",
  },
};

const FEATURES = [
  { name: "🏆 Trivia nights (NEW)", body: "A whole trivia night, nothing to write. Pick a topic and a length; questions come from checked banks — Bible, history, the Middle Ages, the 1950s, Christmas, Easter, Thanksgiving and more — with mystery clues, a Mad Dash and duels between rounds. Or type your own topic and get a night in a minute or two." },
  { name: "👥 Groups & houses (NEW)", body: "The room splits into groups named for the lesson — 🔥 Flames vs 🕊️ Doves for Pentecost, ⚛️ Atoms vs 🧪 Beakers for chemistry — or your school's own houses, joined by code. Every point counts for the group, and a house showdown settles it. Latecomers slot in and catch up." },
  { name: "🏗️ Builder mode (NEW)", body: "Each team builds a castle, a rocket, Noah's Ark… and every task adds a layer: gold, stone, brick, wood or straw, by how well it went. Tap a cracked part to redo that task and rebuild it stronger. The projector shows every build." },
  { name: "✅ Answers marked in place (NEW)", body: "The reveal lands on the student's own answers: boxes turn green or red, typed answers get a see-through correction, a sequence slides into order. And a timeline task finally looks like a timeline." },
  { name: "📱 Turn the phone sideways (NEW)", body: "In landscape, tasks use the width — options two across, statements in columns, the timeline across the screen — and the extra strips fold away." },
  { name: "🕹️ Arcade & Galaxy skins (NEW)", body: "Two new looks for student screens: a neon Arcade sunset over a rolling grid, and a Galaxy of drifting stars and a ringed planet." },
  { name: "👀 Preview on a phone or tablet (NEW)", body: "Step through any set exactly as a student's device shows it, task by task — no session, nothing to scan." },
  { name: "🔐 Classroom escape rooms", body: "Any lesson, any theme, generated in 90 sec. Six teams play their own themed room in the same classroom — keys, locks, cipher fragments, a brass-plate vault. The theme pre-fills with today's season (Halloween, Reformation Day, Nativity, Easter). See qrewzi.com/escape-rooms." },
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
