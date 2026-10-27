import Link from "next/link";
import type { Metadata } from "next";
import StoreBadges from "./components/StoreBadges";
import { GAME_MODES, BUILDER } from "./components/gameModes";
import { SITE_URL } from "./seo";

// The home page keeps the layout's title, description and share card; it
// only names itself as the canonical address (the layout no longer does, so
// a page without its own canonical never claims to be the home page).
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(48px, 6vw, 96px)" }}>
        <div
          className="container stack-sm"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <div className="eyebrow">Limited time · 3 months free</div>
            <h1 style={{ marginTop: 12 }}>
              The classroom<br />becomes the game.
            </h1>
            <div style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--coral)" }}>
              Qrewzi · say &ldquo;crew-zee&rdquo;
            </div>
            <p style={{ marginTop: 20, fontSize: 20, color: "var(--slate)", maxWidth: "56ch", lineHeight: 1.5 }}>
              Describe a lesson. Qrewzi builds a room-wide team game your class
              begs to play. Grades and a parent-ready report land in your
              inbox before the bell rings.
            </p>

            {/* WIIFM pills — the three big wins, above the fold */}
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Win icon="🕐" label="Zero prep" />
              <Win icon="🎮" label="Kids beg to play" />
              <Win icon="✅" label="Marking done" />
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {/* Primary CTA: a teacher lands on this page and in ONE click
                  is projecting a live Qrewzi room with code QREWDEMO. The
                  backend self-provisions the demo on host:join; students
                  join at play.qrewzi.com from any device. "Join for free"
                  stays secondary — that's for teachers already sold. */}
              <a
                href="https://set.qrewzi.com/demo"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Try it live now →
              </a>
              <a href="https://set.qrewzi.com/signup" className="btn btn-secondary">
                Join for free
              </a>
              <Link href="/how-it-works" className="btn btn-ghost">
                See how it works
              </Link>
            </div>
            {/* A student who typed qrewzi.com with a code in hand: straight
                into their game (play.qrewzi.com fills in ?room=). */}
            <form action="https://play.qrewzi.com/" method="get" className="join-code">
              <label htmlFor="room">🎮 Got a room code?</label>
              <input id="room" name="room" placeholder="Type it here" maxLength={12} autoComplete="off" autoCapitalize="characters" spellCheck={false} required />
              <button type="submit" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 14 }}>Join →</button>
            </form>
            <p style={{ marginTop: 20, fontSize: 13, color: "var(--slate)" }}>
              No credit card · Any device (phones, Chromebooks, tablets) · Ready in 5 minutes
            </p>
            <p style={{ marginTop: 6, fontSize: 13, color: "var(--slate)" }}>
              Students join from any browser — nothing to install. Prefer an app? It&rsquo;s free:
            </p>
            <StoreBadges />
          </div>
          <HeroArt />
        </div>
      </section>

      {/* ============================ WHAT'S IN IT FOR YOU ============================ */}
      <section className="section-tight">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>The payoff</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 40 }}>
            Everyone in the room wins.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <Audience
              who="For teachers"
              body="Five minutes of prep and the class runs itself. Kids beg to play, you referee from the projector — and every game ends with real grades, standards coverage, and a parent-ready report. No marking pile."
            />
            <Audience
              who="For students"
              body="It doesn't feel like school. Team up, race between stations, chase a secret superpower, and watch your name climb the live leaderboard."
            />
            <Audience
              who="For your school"
              body="More engagement with zero new hardware — any phone, Chromebook, or tablet works. A report on every session, and your teachers' first three months are free."
            />
          </div>
        </div>
      </section>

      {/* ============================ HOW IT WORKS TEASER ============================ */}
      <section
        className="section"
        style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}
      >
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Three steps</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 56 }}>
            From "what should we play?" to a running game in five minutes.
          </h2>
          <div
            className="stack-sm"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            <Step
              n={1}
              title="Describe the lesson"
              body="One line — 'water cycle for grade 5' or 'Macbeth Act 3.' Qrewzi generates a mix of task types tuned to that topic and grade level."
            />
            <Step
              n={2}
              title="Print QR stations, hand out codes"
              body="Kids scan a station, land on a task type: multiple choice, sort, mind map, motion mission. Teams jockey for the lead."
            />
            <Step
              n={3}
              title="Run the room"
              body="Projector shows the live GameMaster dashboard: leaderboard, station heat map, teacher-only reveals. You referee, kids play."
            />
          </div>
        </div>
      </section>

      {/* ============================ GAME MODES ============================ */}
      <section className="section-tight">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Game modes</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 12 }}>
            Three ways to play.
          </h2>
          <p style={{ textAlign: "center", color: "var(--slate)", marginBottom: 36, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            Pick one before you press Start. The projector and every device show its name, so your class learns them.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {GAME_MODES.map((m) => (
              <Feat key={m.id} title={`${m.emoji} ${m.name}`} body={m.blurb} href={`/game-modes#${m.id}`} />
            ))}
            <Feat title={`${BUILDER.emoji} + ${BUILDER.name}`} body={BUILDER.blurb} href="/game-modes#builder" />
          </div>
          <p style={{ marginTop: 24, textAlign: "center" }}>
            <Link href="/game-modes" style={{ fontWeight: 900 }}>Compare the game modes →</Link>
          </p>
        </div>
      </section>

      {/* ============================ FEATURES STRIP ============================ */}
      <section className="section-tight">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>What's in the box</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 40 }}>
            More than a quiz app.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            <Feat title="🏆 Trivia nights" body="A whole trivia night from a checked question bank — Bible, history, the 1950s, Christmas, Easter and more — with mystery clues, a Mad Dash and stretch breaks between the rounds. On Pro, your own topic, written and checked in a minute or two." href="/trivia-night" />
            <Feat title="💭 Think-Pair-Share" body="Pairs of teams meet at a station: one shares an idea, the other writes down what it heard — then passes it on, from memory, to the next pair. Points for how much of each idea arrives." href="/think-pair-share" />
            <Feat title="👥 Groups & houses" body="The room splits into groups named for the lesson — Flames vs Doves for Pentecost — or your school's own houses. Every point counts for the group; a house showdown settles it." />
            <Feat title="⚔️ Face-offs & surprises" body="Two teams pulled into a surprise head-to-head for bonus points, Qrew the fox popping up to be caught, and a village to defend when a dragon heads for the builds." href="/game-modes" />
            <Feat title="🔐 Classroom escape rooms" body="Six teams, one classroom, six themed escape rooms. Any lesson, any theme, 90-sec setup. Keys, locks, cipher fragments, a brass-plate vault. Pre-fills with the season." href="/escape-rooms" />
            <Feat title="🙏 Youth nights & Prayer Rounds" body="Fun nights for youth groups and camps, Bible trivia, and Prayer Rounds: small groups praying through your points, round by round." href="/youth-groups" />
            <Feat title="🧩 65+ task types" body="Beyond multiple choice — sorts, mind maps, sequences, motion missions, speech recognition, script plays, role-play decks, live debates, and more." href="/features" />
            <Feat title="📺 GameMaster mode" body="Projector dashboard for the teacher — live leaderboard, station heat map, celebration confetti, kill-switch controls." />
            <Feat title="🏫 One room, several, or none" body="Stations around one classroom, a hunt across the gym, the library and the hall, or on-screen only — no scanning, no walking." />
            <Feat title="💻 Any device" body="Phones, Chromebooks, tablets. Hidden-QR laptop mode. Rooms mix devices seamlessly." />
            <Feat title="📄 Real reports" body="Every session ends with your report: grades for each student, Bloom's coverage, the standards it touched, a note to parents and a class-chat blurb." />
          </div>
        </div>
      </section>

      {/* ============================ JOIN CTA ============================ */}
      <section className="section" style={{ background: "var(--butter)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 700 }}>
          <div className="eyebrow" style={{ color: "var(--navy)" }}>Limited time</div>
          <h2 style={{ marginTop: 12 }}>Three months of Qrewzi, free.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--navy)" }}>
            Make an account and the complete product is yours, free, for your first{" "}
            <strong>three months</strong> — every task type and game mode, trivia nights and
            parent-ready reports. No card needed. After that, carry on with the Free plan or
            choose the plan that fits.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <Link href="/how-it-works" className="btn btn-ghost">Read the walkthrough</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Local components ---------- */

function Win({ icon, label }: { icon: string; label: string }) {
  // Small pill that answers "what's in it for me?" at a glance, before
  // the CTAs. Kept intentionally spare — one glyph, one benefit.
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px",
        borderRadius: 999,
        background: "#fff",
        border: "2px solid var(--navy)",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 900,
        color: "var(--navy)",
        lineHeight: 1,
      }}
    >
      <span aria-hidden="true" style={{ fontSize: 16 }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40, height: 40,
          borderRadius: "50%",
          background: "var(--coral)",
          color: "var(--cream)",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 18,
        }}
      >
        {n}
      </div>
      <h3 style={{ marginTop: 16 }}>{title}</h3>
      <p style={{ marginTop: 10, color: "var(--slate)" }}>{body}</p>
    </div>
  );
}

function Feat({ title, body, href }: { title: string; body: string; href?: string }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: 18 }}>{href ? <Link href={href} style={{ color: "inherit" }}>{title}</Link> : title}</h3>
      <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{body}</p>
    </div>
  );
}

function Audience({ who, body }: { who: string; body: string }) {
  return (
    <div className="card">
      <div className="eyebrow" style={{ color: "var(--coral)" }}>{who}</div>
      <p style={{ marginTop: 12, color: "var(--slate)", fontSize: 16, lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

/* Hero art — the station-rotation loop, muted and looping, in the brand tile. */
function HeroArt() {
  return (
    <div
      style={{
        background: "var(--navy)",
        border: "2px solid var(--navy)",
        borderRadius: 24,
        aspectRatio: "1 / 1",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        src="/videos/station-rotation-single-room.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="A class rotating between Qrewzi stations while the projector keeps score"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div
        style={{
          position: "absolute",
          left: 16,
          bottom: 16,
          padding: "8px 12px",
          borderRadius: 999,
          background: "rgba(254, 249, 240, 0.92)",
          fontFamily: "var(--font-display)",
          fontSize: 12,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--navy)",
        }}
      >
        Room 112 · 8 stations · live
      </div>
    </div>
  );
}
