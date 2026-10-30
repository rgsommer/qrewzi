import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/trivia-night",
  title: "Trivia night — Bible, history, Christmas and more",
  description:
    "Run a trivia night with nothing to write. Nine checked question banks — Bible, history, the 1950s, Christmas, Easter and more — dealt into rounds of six games.",
  socialTitle: "A whole trivia night. Nothing to write.",
  socialDescription:
    "Nine checked question banks, rounds of buzzer clues, flashcard races, hangman and tic-tac-toe, and a projector scoreboard. For classrooms, youth groups and church nights.",
  keywords: [
    "trivia night", "classroom trivia night", "Bible trivia game", "youth group trivia night", "church trivia night",
    "Christmas trivia for kids", "Easter trivia", "Thanksgiving trivia", "history trivia game", "school fun night games",
    "trivia night questions", "team trivia game on phones",
  ],
});

// The banks behind a trivia night (shared/trivia/catalog.js in the
// Curriculate repo) — the same labels and blurbs the host's panel shows.
const BANKS = [
  { emoji: "📖", label: "Bible", blurb: "People, stories and books of the Bible, each answer with its reference" },
  { emoji: "🎲", label: "General knowledge", blurb: "Animals, science, geography, sport, food and more" },
  { emoji: "🏛️", label: "History", blurb: "Ancient worlds to the twentieth century, Canada included" },
  { emoji: "🏰", label: "The Middle Ages", blurb: "Knights, castles, Vikings, monks and kings, about 500 to 1500" },
  { emoji: "🎸", label: "The 1950s", blurb: "Rock and roll, diners, hula hoops and the start of the space race" },
  { emoji: "📱", label: "Modern times", blurb: "The 1990s to the 2010s: gadgets, games, films, sport and firsts" },
  { emoji: "🎄", label: "Christmas", blurb: "The birth of Jesus, the prophecies, Advent, carols and Christian traditions" },
  { emoji: "✝️", label: "Easter", blurb: "Holy Week, the cross, the empty tomb and what the resurrection means" },
  { emoji: "🍂", label: "Thanksgiving", blurb: "Giving thanks to God: harvest, the Psalms, and Thanksgiving in Canada" },
];

const ROUNDS = [
  { emoji: "🧠", name: "Quick-fire round", body: "A pack of multiple-choice questions every team can start on straight away." },
  { emoji: "⚡", name: "Buzzer round", body: "Jeopardy-style clues on the screen. Answer them fast." },
  { emoji: "✅", name: "True or false", body: "Fast calls on statements from the round's category." },
  { emoji: "🏁", name: "Flashcard race", body: "Buzz in first to answer, card after card." },
  { emoji: "🔤", name: "Hangman duel", body: "Solve the mystery word letter by letter, taking turns." },
  { emoji: "⭕", name: "True-false tic-tac-toe", body: "Place true and false statements on the grid for three in a row." },
];

const FAQ: FaqItem[] = [
  {
    q: "Do I have to write any questions?",
    a: "No. A trivia night is dealt from a question bank that was written and checked in advance, so it's ready as soon as you pick a topic and a length.",
  },
  {
    q: "How long is a trivia night?",
    a: "You choose 30, 45, 60 or 90 minutes. The Free plan runs nights of up to 30 minutes for up to 12 devices; Plus runs them up to an hour for up to 40; Pro runs the longest nights, for any number of devices.",
  },
  {
    q: "What happens when a team finishes early?",
    a: "It keeps playing. The finishing places go in the order teams get through the night, and a team that's through is dealt more rounds from the same bank — new questions — for as long as the night runs, until you end it or its end time comes.",
  },
  {
    q: "If we play the same topic twice, will the questions repeat?",
    a: "A second night on the same topic draws questions you haven't had before, until the bank runs out.",
  },
  {
    q: "Can I make a trivia night on my own topic?",
    a: "Yes, on the Pro plan. Type a topic of a few words — “Greenland history” — and Qrewzi plans the categories, writes the questions and checks every answer, then deals a night from them. It takes a minute or two.",
  },
  {
    q: "Who are the questions written for?",
    a: "Mostly ages 11 and up — school fun nights, youth groups and church nights — and adults play too. Mostly easy and medium, with a few harder ones, and every bank is family-friendly.",
  },
  {
    q: "Can I leave out the extras between rounds?",
    a: "Yes. Untick the extras and the night is rounds of questions with one stretch break halfway.",
  },
];

export default function TriviaNightPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">Trivia nights</div>
          <h1 style={{ marginTop: 12 }}>A whole trivia night.<br />Nothing to write.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            Pick a topic and a length. Qrewzi deals the night from a checked question bank — one
            category a round, each round one of six games, with mystery clues, a Mad Dash and
            stretch breaks in between. A team that gets through it early keeps getting new rounds until
            you call time. Teams play on phones and tablets; the projector keeps score.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <a href="https://set.qrewzi.com/teacher/ai-tasksets?mode=trivia" className="btn btn-secondary">
              Start a trivia night →
            </a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
            For classrooms, school fun nights, youth groups and church nights. Players join with a room code — no accounts.
          </p>
        </div>
      </section>

      {/* ============================ THE BANKS ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Nine topics</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 12 }}>Hundreds of checked questions in every bank.</h2>
          <p style={{ textAlign: "center", color: "var(--slate)", marginBottom: 36, maxWidth: "62ch", marginLeft: "auto", marginRight: "auto" }}>
            Each bank is split into categories — &ldquo;Moses and the Exodus&rdquo;, &ldquo;Vikings&rdquo;,
            &ldquo;Space and the planets&rdquo; — and every answer has been checked. Run the same topic
            again and you get questions you haven&rsquo;t had.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {BANKS.map((b) => (
              <div key={b.label} className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: 18 }}><span aria-hidden="true">{b.emoji}</span> {b.label}</h3>
                <p style={{ marginTop: 6, color: "var(--slate)", fontSize: 14.5 }}>{b.blurb}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24, textAlign: "center", color: "var(--navy)", fontWeight: 700 }}>
            On the Pro plan, type a topic of your own and get a night written and checked for it in a minute or two.
          </p>
        </div>
      </section>

      {/* ============================ HOW A NIGHT RUNS ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>How a night runs</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Six games, round after round.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {ROUNDS.map((r) => (
              <div key={r.name} className="card">
                <h3 style={{ fontSize: 18 }}><span aria-hidden="true">{r.emoji}</span> {r.name}</h3>
                <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{r.body}</p>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 56, textAlign: "center" }}>And between the rounds</h3>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <Extra emoji="🔮" title="Mystery clues" body="Clue cards turn up through the night. The teams that remember them crack the challenge at the end." />
            <Extra emoji="🏃" title="Mad Dash" body="One runner at a time scans the stations in order. Fastest team wins." />
            <Extra emoji="🙌" title="Stretch breaks & motion missions" body="Themed to the topic — march round the walls of Jericho, follow the star, run to the empty tomb." />
            <Extra emoji="⚔️" title="Face-offs" body="On by default: now and then two teams go head-to-head for bonus points." />
          </div>
        </div>
      </section>

      {/* ============================ GROUPS ============================ */}
      <section className="section-tight" style={{ background: "var(--butter)" }}>
        <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "var(--navy)" }}>Groups &amp; houses</div>
          <h2 style={{ marginTop: 12 }}>Small teams, big sides.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--navy)", lineHeight: 1.6 }}>
            Each phone is a team of a few players, and every team also plays for a bigger side — groups
            named to suit the night, or your own houses, joined by code. Standings go by the average per
            team, so a bigger side isn&rsquo;t ahead for being bigger, and a house showdown settles it:
            one question on every device at once.
          </p>
          <p style={{ marginTop: 16 }}>
            <Link href="/game-modes" style={{ fontWeight: 900 }}>More about game modes, face-offs and showdowns →</Link>
          </p>
        </div>
      </section>

      <Faq items={FAQ} title="Trivia nights, answered" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Pick a topic. Press Start.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Make an account — your first three months of everything are free, no card needed.
            Running a youth night? See <Link href="/youth-groups" style={{ color: "var(--butter)" }}>Qrewzi for youth groups</Link>.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <Link href="/pricing" className="btn btn-ghost" style={{ color: "var(--cream)" }}>See pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Extra({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div style={{ padding: 20, borderRadius: 16, background: "var(--cream-shade)", border: "2px solid var(--navy)" }}>
      <div style={{ fontSize: 26 }} aria-hidden="true">{emoji}</div>
      <h4 style={{ fontSize: 17, marginTop: 8 }}>{title}</h4>
      <p style={{ marginTop: 6, fontSize: 14.5, color: "var(--slate)", lineHeight: 1.5 }}>{body}</p>
    </div>
  );
}
