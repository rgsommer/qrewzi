import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/youth-groups",
  title: "Youth group games, Bible trivia and Prayer Rounds",
  description:
    "Qrewzi for churches, youth groups and camps: fun nights with teams roaming the building, Bible trivia with nothing to write, and Prayer Rounds for small groups.",
  socialTitle: "Youth night games and Prayer Rounds",
  socialDescription:
    "Fun nights with teams roaming the building, Bible trivia with nothing to write, and Prayer Rounds: small groups praying through your points, round by round.",
  keywords: [
    "youth group games", "church youth group activities", "youth night games", "Bible trivia night",
    "church game night", "small group prayer activity", "prayer stations", "camp games on phones",
    "Christian school activities", "scavenger hunt for youth group",
  ],
});

const FAQ: FaqItem[] = [
  {
    q: "Do the young people need accounts?",
    a: "No. They join with your room code at play.qrewzi.com or in the free app, with a team name and the names of the players on it.",
  },
  {
    q: "Can teams roam the whole building?",
    a: "Yes. Turn on a multi-room hunt and print a set of station cards for each room — the gym, the hall, the kitchen. Teams are shared out across the rooms, and a scan in the wrong room tells them where to go.",
  },
  {
    q: "What do I need to run Prayer Rounds?",
    a: "Your points, in any form, and a phone. Prayer Rounds shapes them into cards, you print your room's join sheets once, and you host from your phone. People join with the code and the server forms the groups each round.",
  },
  {
    q: "Does Prayer Rounds make things up?",
    a: "Your own points lead, in your own words. What it adds grows out of them — it doesn't invent people, numbers or events you didn't name — and the Scripture promises are quoted from the NKJV.",
  },
  {
    q: "Is Bible trivia only for churches?",
    a: "No — it's one of nine trivia banks anyone can pick. Christmas, Easter and Thanksgiving are there too, and every bank is family-friendly.",
  },
];

export default function YouthGroupsPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">Churches · youth groups · camps · clubs</div>
          <h1 style={{ marginTop: 12 }}>Youth night,<br />on everyone&rsquo;s feet.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            The game that runs a classroom runs a youth night: teams on their phones, QR stations
            around the building, the score on the big screen. Three things are built for it — fun
            nights, Bible trivia and Prayer Rounds.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <a href="https://set.qrewzi.com/demo" target="_blank" rel="noopener" className="btn btn-secondary">Try it live →</a>
          </div>
        </div>
      </section>

      {/* ============================ FUN NIGHTS ============================ */}
      <section id="fun-nights" className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)", scrollMarginTop: 70 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow">🙌 Fun nights</div>
          <h2 style={{ marginTop: 12 }}>Mostly fun. A light theme.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--slate)", lineHeight: 1.6, maxWidth: "70ch" }}>
            Type the night&rsquo;s theme and a word list — the topic&rsquo;s words plus anything fun: names,
            places, inside jokes — and Qrewzi builds games that are quick, active and guessable, never a
            test. Teams can roam across several rooms — or, with on-screen only, play it all from their seats.
          </p>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Mini title="Guess and bluff" body="Buzzer clues, fake-outs, guess-who, what-am-I and riddles." />
            <Mini title="Draw and act" body="Speed drawing, draw-or-mime, role-play cards and spot-the-difference." />
            <Mini title="Get moving" body="Motion missions, stretch breaks, photo challenges and make-and-snap." />
            <Mini title="Race and play" body="Flashcard races, hangman duels and true-false tic-tac-toe." />
          </div>
          <p style={{ marginTop: 20, fontSize: 15, color: "var(--slate)" }}>
            Play it as <Link href="/game-modes">Troopers or Raiders</Link>, with Builder on top if you like, and the
            room splits into groups — or your own houses — for a showdown.
          </p>
        </div>
      </section>

      {/* ============================ BIBLE TRIVIA ============================ */}
      <section id="bible-trivia" className="section-tight" style={{ scrollMarginTop: 70 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow">📖 Bible trivia</div>
          <h2 style={{ marginTop: 12 }}>A Bible trivia night with nothing to write.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--slate)", lineHeight: 1.6, maxWidth: "70ch" }}>
            Hundreds of checked questions on the people, stories and books of the Bible — creation to
            Acts, the parables, the prophets, the women of the Bible — each written with its reference.
            Pick a length and the night is dealt in rounds of buzzer clues, flashcard races, hangman and
            tic-tac-toe, with themed breaks between them: march round the walls of Jericho, cross the
            Red Sea. Christmas, Easter and Thanksgiving banks are there for the seasons.
          </p>
          <p style={{ marginTop: 16 }}>
            <Link href="/trivia-night" style={{ fontWeight: 900 }}>How a trivia night runs →</Link>
          </p>
        </div>
      </section>

      {/* ============================ PRAYER ROUNDS ============================ */}
      <section id="prayer-rounds" className="section-tight" style={{ background: "var(--butter)", scrollMarginTop: 70 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow" style={{ color: "var(--navy)" }}>🙏 Prayer Rounds</div>
          <h2 style={{ marginTop: 12 }}>A prayer time that moves the whole room.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--navy)", lineHeight: 1.6, maxWidth: "70ch" }}>
            Paste whatever you have — a running order, a list of prayer points, a theme and a few lines.
            Prayer Rounds shapes it into an opening, up to seven rounds of small-group cards, and a
            closing. Each group&rsquo;s card carries a few points and two Scripture promises.
          </p>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            <Mini title="Everyone together" body="Each round the groups are formed afresh — the fewest repeat pairings — and each is sent to a station with its card and some of the room's own requests." />
            <Mini title="One Amen per group" body="A group says Amen when it's done. The round ends when every group has, or when the time is up; then everyone gathers for the closing." />
            <Mini title="For adults, teens or children" body="Adults pray in their own words from the points. For teens and children each group also gets short sentence prayers to read aloud in turn." />
            <Mini title="Your code, your sheets" body="You get a prayer room code of your own. Print the join sheets once; the next prayer time needs no new ones. Host it from your phone." />
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/prayer" className="btn btn-primary">Open Prayer Rounds →</a>
            <a href="https://set.qrewzi.com/signup" className="btn btn-secondary">Make an account</a>
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="For youth leaders" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Run your next youth night on Qrewzi.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Your first three months of everything are free, no card needed.
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

function Mini({ title, body }: { title: string; body: string }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <h3 style={{ fontSize: 17 }}>{title}</h3>
      <p style={{ marginTop: 6, color: "var(--slate)", fontSize: 14.5, lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}
