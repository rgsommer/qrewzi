import Link from "next/link";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Qrewzi — a small team in Hamilton, Ontario",
  description:
    "Qrewzi (say crew-zee) is a live team game engine for classrooms, trivia nights and youth groups, made by a small team in Hamilton, Ontario.",
  socialTitle: "About Qrewzi — built by a teacher, for teachers",
  socialDescription: "A live team game engine from a small team in Hamilton, Ontario. Made for K-12, and for youth nights too.",
});

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="eyebrow">About</div>
        <h1 style={{ marginTop: 12 }}>Made for teachers who move.</h1>

        <div style={{ marginTop: 32, display: "grid", gap: 24, fontSize: 17, color: "var(--slate)", lineHeight: 1.7 }}>
          <p>
            Qrewzi is a live classroom game engine. Teachers describe a
            lesson, we build a room-wide team scavenger hunt across 85+
            interactive task types, and kids play on any device. The whole
            thing runs in a class period.
          </p>
          <p>
            A class can play it three ways — <Link href="/game-modes">Troopers, Raiders or Duels</Link> —
            and the same engine runs <Link href="/trivia-night">trivia nights</Link>,{" "}
            <Link href="/escape-rooms">escape rooms</Link>, and{" "}
            <Link href="/youth-groups">youth nights and prayer times</Link> for churches and youth groups.
          </p>
          <p>
            The name is a mash-up of <b>QR</b> (the scan mechanic — kids run
            around the room scanning stations) and <b>crew</b> (kids play in
            teams). The mascot's name is <b>Qrew</b>. 🦊
          </p>
          <p>
            We're a small team in Hamilton, Ontario. If Qrewzi is a good fit
            for your class or district, we want to hear from you directly.
          </p>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
          <a href="mailto:hello@qrewzi.com" className="btn btn-secondary">Email us</a>
        </div>
      </div>
    </section>
  );
}
