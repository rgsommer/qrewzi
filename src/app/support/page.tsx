import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/support",
  title: "Help and support",
  description:
    "How to join a Qrewzi game, what to do when a room code doesn't work, the app or the browser, and how to reach us at hello@qrewzi.com.",
  socialTitle: "Qrewzi help and support",
  socialDescription: "Joining a game, room codes, the app or the browser — and how to reach a person.",
  keywords: ["Qrewzi help", "Qrewzi support", "join a Qrewzi game", "Qrewzi room code"],
});

// The page the App Store and Google Play list as the app's support address:
// what a student or a teacher asks first, and a person to write to.
const STUDENTS: FaqItem[] = [
  {
    q: "How do I join a game?",
    a: "Your teacher shows a room code on the board. Open the Qrewzi app — or go to play.qrewzi.com in any browser — and either scan the code on the board or type it in. Name your team, add who's on it, and press Join Room.",
  },
  {
    q: "My room code doesn't work.",
    a: "A room is open only while your teacher is running the game, so check the code with them — it is letters and numbers, and it changes from game to game. If the game has already ended, your teacher can start a new one.",
  },
  {
    q: "I don't have a code. Can I still try it?",
    a: "Yes — tap \"Try a demo game\" on the join screen. A short game starts on its own, with no teacher and no account.",
  },
  {
    q: "The app or the browser — which should I use?",
    a: "They are the same game. The app is quicker to open and fills the whole screen; the browser needs nothing installed, so it suits Chromebooks and school devices that can't add apps.",
  },
  {
    q: "Do I need an account?",
    a: "No. Students never make an account. If you want your results and your streak emailed to you, you can add an email on the join screen — that's optional.",
  },
];

const TEACHERS: FaqItem[] = [
  {
    q: "How do I make a game for my class?",
    a: "Sign up at set.qrewzi.com, type a line about your lesson — \"water cycle for grade 5\" — and Qrewzi builds the game. Your first three months are free.",
  },
  {
    q: "Something went wrong in class. How do I report it?",
    a: "Email hello@qrewzi.com with the room code and roughly when it happened, and we can look at that game. Students can also send feedback from the 💬 button in the app; it reaches us with the details of their device.",
  },
  {
    q: "How is student data handled?",
    a: "Students play without accounts, and there are no ads and no tracking in the app. Our privacy policy says what is kept and for how long; to have anything deleted, email us.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          <div className="eyebrow">Support</div>
          <h1 style={{ marginTop: 12 }}>How can we help?</h1>
          <p style={{ marginTop: 20, fontSize: 19, color: "var(--slate)", lineHeight: 1.5 }}>
            Write to us at{" "}
            <a href="mailto:hello@qrewzi.com" style={{ color: "var(--coral)", fontWeight: 700 }}>hello@qrewzi.com</a>{" "}
            — a person reads every message. The answers to the questions we hear most are below.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:hello@qrewzi.com" className="btn btn-primary">Email us</a>
            <a href="https://play.qrewzi.com" className="btn btn-secondary">Join a game</a>
          </div>
        </div>
      </section>

      {/* One list: the FAQ carries Google's FAQPage data, and a page has one. */}
      <Faq items={[...STUDENTS, ...TEACHERS]} title="Students and teachers ask" />

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <p style={{ fontSize: 16, color: "var(--slate)", lineHeight: 1.6 }}>
            More about how a game runs on{" "}
            <Link href="/how-it-works" style={{ color: "var(--coral)", fontWeight: 700 }}>How it works</Link>, and what we
            keep in our <Link href="/privacy" style={{ color: "var(--coral)", fontWeight: 700 }}>privacy policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
