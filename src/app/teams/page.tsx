import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/teams",
  title: "Team-building games for work — Qrewzi for Teams",
  description:
    "Team building your people will actually play: teams on their phones, QR stations around the office, the score on the big screen. For offsites, onboarding, kickoffs and staff parties.",
  socialTitle: "Team building they'll actually play",
  socialDescription:
    "Teams on their phones, stations around the office, the score on the big screen. Pick your industry and the occasion — Qrewzi builds the games.",
  keywords: [
    "team building games", "team building activities for work", "office team building games", "corporate team building",
    "onboarding games for new employees", "icebreaker games for work", "staff meeting icebreakers", "offsite activities",
    "quarterly kickoff ideas", "holiday party trivia", "office scavenger hunt", "training day games",
  ],
});

// A work account starts with "Who will be playing?" set to a team at work,
// which is what makes every player's screen speak to adults; the builder
// then opens in Event mode.
const SIGNUP_URL = "https://set.qrewzi.com/signup?audience=workplace";
const BUILD_URL = `https://set.qrewzi.com/signup?audience=workplace&next=${encodeURIComponent("/teacher/ai-tasksets?mode=event")}`;
const DEMO_URL = "https://play.qrewzi.com/?demo=work";

// The builder's Event mode (AiTasksetGenerator.jsx: EVENT_TYPE_THEMES and
// EVENT_INDUSTRY_THEMES in the Curriculate repo) — the same occasions and
// industries the host picks from.
const OCCASIONS = [
  { emoji: "🧊", title: "Icebreakers", body: "A first meeting, a new team, a room of people who've only met on calls. Quick games that get names and faces together." },
  { emoji: "🚀", title: "New-hire onboarding", body: "The values, who does what, where things are — learned in teams with people they haven't met yet, not read alone." },
  { emoji: "📈", title: "Quarterly kickoffs", body: "The goals, the roadmap and last quarter's wins, played through before anyone opens the slides." },
  { emoji: "🏗️", title: "Team building & offsites", body: "Teams roam the venue scanning stations: puzzles, sorting, a photo challenge, a Mad Dash to finish." },
  { emoji: "📝", title: "Training & conference recaps", body: "The day after the training or the conference, a short game on what was covered shows what landed." },
  { emoji: "🎄", title: "Staff parties", body: "A trivia night with nothing to write — nine checked question banks — or a year-in-review game of your own." },
];

const STEPS = [
  { n: "1", title: "Make the game", body: "Choose Event, pick your industry and the occasion, and add your own words — product names, team in-jokes, the handbook's key terms. Or pick a trivia bank." },
  { n: "2", title: "Put up the stations", body: "Print the QR cards and tape them around the office, or play on-screen only and nobody leaves their seat." },
  { n: "3", title: "Teams join with the code", body: "A few people to a phone or tablet, at play.qrewzi.com or in the free app. No accounts, nothing to install." },
  { n: "4", title: "The screen keeps score", body: "Standings, face-offs and the finish on the big screen. You run it from your laptop or your phone." },
];

const FAQ: FaqItem[] = [
  {
    q: "Do people need an account or an app?",
    a: "No. They join with your room code at play.qrewzi.com, or in the free Qrewzi app if they'd rather. A team types its name and the names of the people on it, and that's all.",
  },
  {
    q: "Will the screens talk to us like students?",
    a: "No. Set “Who will be playing?” to a team at work — at sign-up, or later in your profile — and every phone in your games says players, teams and host. Nobody is told to ask their teacher.",
  },
  {
    q: "Can we use our own material?",
    a: "Yes. Event mode takes your industry and the occasion, and you add your own words: product names, the values, the terms from a training session. Paste a page of notes and Qrewzi pulls the key terms out of it for you to check. You see every task before you play and can change any of them.",
  },
  {
    q: "How many people can play?",
    a: "Each phone or tablet is a team of a few people. The Free plan runs games of up to 30 minutes for up to 12 devices; Plus runs them up to an hour for up to 40; Pro runs 90-minute games for any number of devices.",
  },
  {
    q: "Can we play department against department?",
    a: "Yes. Set your departments up as houses: every team plays for one, standings go by the average per team so a bigger department isn't ahead for being bigger, and a house showdown settles it with one question on every device at once.",
  },
  {
    q: "Can remote colleagues play?",
    a: "Yes. Turn on on-screen only and nobody needs to scan a station — every task comes to their screen. Share the scoreboard on your call.",
  },
  {
    q: "Is anyone graded?",
    a: "No. Points are for the game. Afterwards you get a report in your inbox on who took part and how the teams did — it goes to you, not to anyone's manager.",
  },
  {
    q: "What does it cost?",
    a: "Your first three months of everything are free, with no card needed. After that, carry on with the Free plan or choose a paid plan from inside the app.",
  },
];

export default function TeamsPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">Qrewzi for Teams · offices · offsites · onboarding</div>
          <h1 style={{ marginTop: 12 }}>Team building<br />they&rsquo;ll actually play.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            Teams on their phones, QR stations around the office, the score on the big screen. Pick
            your industry and the occasion — an icebreaker, a kickoff, a new starter&rsquo;s first
            week — add your own words, and Qrewzi builds the games.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={SIGNUP_URL} className="btn btn-primary">Start free</a>
            <a href={DEMO_URL} target="_blank" rel="noopener" className="btn btn-secondary">Play a work game →</a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
            No accounts for players, nothing to install. Three months of everything free, no card needed.
          </p>
        </div>
      </section>

      {/* ============================ OCCASIONS ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>What it&rsquo;s for</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 12 }}>The occasions you already have.</h2>
          <p style={{ textAlign: "center", color: "var(--slate)", marginBottom: 36, maxWidth: "62ch", marginLeft: "auto", marginRight: "auto" }}>
            Event mode knows the vocabulary of tech, finance, healthcare, marketing, sales, HR, legal and
            product teams, and keeps it professional — energising, never childish.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {OCCASIONS.map((o) => (
              <div key={o.title} className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: 18 }}><span aria-hidden="true">{o.emoji}</span> {o.title}</h3>
                <p style={{ marginTop: 6, color: "var(--slate)", fontSize: 14.5, lineHeight: 1.55 }}>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ HOW IT RUNS ============================ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1040 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>How it runs</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Ready before the coffee&rsquo;s cold.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ padding: 20, borderRadius: 16, background: "var(--cream-shade)", border: "2px solid var(--navy)" }}>
                <div style={{ width: 34, height: 34, borderRadius: 999, background: "var(--coral)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900 }}>{s.n}</div>
                <h3 style={{ fontSize: 17, marginTop: 10 }}>{s.title}</h3>
                <p style={{ marginTop: 6, fontSize: 14.5, color: "var(--slate)", lineHeight: 1.5 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FOR ADULTS ============================ */}
      <section className="section-tight" style={{ background: "var(--butter)" }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow" style={{ color: "var(--navy)" }}>💼 Set to Work</div>
          <h2 style={{ marginTop: 12 }}>Every phone speaks to adults.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--navy)", lineHeight: 1.6, maxWidth: "70ch" }}>
            Qrewzi started in classrooms. Tell it your games are for a team at work and the players&rsquo;
            screens change with it: players, teams and a host — no students, no teacher, no homework.
          </p>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}>
            <Mini title="Players and a host" body="The join screen, the waiting screen and the finish all talk to grown-ups." />
            <Mini title="Nobody signs in" body="No accounts, no emails collected from players, no app to install." />
            <Mini title="Nothing graded" body="Points are for the game. The report is yours: who took part and how the teams did." />
            <Mini title="Mixed on purpose" body="Teams of a few to a phone, departments as houses, face-offs between teams that never talk." />
          </div>
        </div>
      </section>

      {/* ============================ TRY IT ============================ */}
      <section className="section-tight" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "var(--butter)" }}>Try it</div>
          <h2 style={{ marginTop: 12, color: "var(--cream)" }}>Play a work game on your phone, now.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9, lineHeight: 1.6 }}>
            A short game for a team at work starts on its own — office trivia, a fact-or-fiction round,
            what makes a good team. No account, and it takes about five minutes.
          </p>
          <div style={{ marginTop: 24 }}>
            <a href={DEMO_URL} target="_blank" rel="noopener" className="btn btn-primary">Play the work demo →</a>
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="For teams at work" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Run your next team day on Qrewzi.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Your first three months of everything are free, no card needed. Questions about a larger
            rollout? Write to <a href="mailto:hello@qrewzi.com" style={{ color: "var(--butter)" }}>hello@qrewzi.com</a>.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href={BUILD_URL} className="btn btn-primary">Make your first game</a>
            <Link href="/trivia-night" className="btn btn-ghost" style={{ color: "var(--cream)" }}>Trivia nights</Link>
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
