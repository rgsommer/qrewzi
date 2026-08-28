import Link from "next/link";
import Wordmark from "./components/Wordmark";

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(48px, 6vw, 96px)" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <div className="eyebrow">Now in beta</div>
            <h1 style={{ marginTop: 12 }}>
              The classroom<br />becomes the game.
            </h1>
            <p style={{ marginTop: 20, fontSize: 19, color: "var(--slate)", maxWidth: "56ch" }}>
              Qrewzi turns any lesson into a live team scavenger hunt. Describe a
              topic, we build a room-wide game across 30+ interactive task types,
              your class plays on any device. Ready in minutes.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/beta" className="btn btn-primary">
                Join the beta →
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary">
                See how it works
              </Link>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, color: "var(--slate)" }}>
              A full year free for beta teachers · No credit card · Works on phones, Chromebooks, tablets
            </p>
          </div>
          <HeroArt />
        </div>
      </section>

      {/* ============================ WHAT'S IN IT FOR YOU ============================ */}
      <section className="section-tight">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>What&rsquo;s in it for you</div>
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
              body="More engagement with zero new hardware — any phone, Chromebook, or tablet works. Standards-aligned reports on every session, and it's free for your teachers for a full year."
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
            <Feat title="30+ task types" body="Beyond MCQ — sorts, mind maps, sequences, motion missions, speech recognition, script plays, role-play decks, and more." />
            <Feat title="GameMaster mode" body="Projector dashboard for the teacher — live leaderboard, station heat map, celebration confetti, kill-switch controls." />
            <Feat title="Secret superpowers" body="1 in 4 teams gets a rare hidden power on join. Wild Card, Torchlight, Jump Higher, Truth Seeker — kids trade rumors about who has what." />
            <Feat title="Any device" body="Phones, Chromebooks, tablets. Hidden-QR laptop mode. Rooms mix devices seamlessly." />
            <Feat title="Real reports" body="Session finishes with a parent-ready recap: Bloom's coverage, per-student grades, standards alignment, Class Chat Blurb." />
            <Feat title="Standards-aligned" body="Ontario curriculum today, extensible to other jurisdictions. Report page cites the standards each task covered." />
          </div>
        </div>
      </section>

      {/* ============================ BETA CTA ============================ */}
      <section className="section" style={{ background: "var(--butter)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 700 }}>
          <div className="eyebrow" style={{ color: "var(--navy)" }}>A full year, on us</div>
          <h2 style={{ marginTop: 12 }}>One year of Qrewzi, free.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--navy)" }}>
            Beta teachers get the complete product free for a <strong>full year</strong>.
            The only ask: run a game with your class <strong>at least once a month</strong> and
            send us your honest feedback. That&rsquo;s the whole deal — plus direct access to
            us and a spot on the &ldquo;Original Qrew&rdquo; wall.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link href="/beta" className="btn btn-primary">Join the beta</Link>
            <Link href="/how-it-works" className="btn btn-ghost">Read the walkthrough</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Local components ---------- */

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

function Feat({ title, body }: { title: string; body: string }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: 18 }}>{title}</h3>
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

/* Hero art — the wordmark blown up on a warm cream tile with the mark's shape echoed. */
function HeroArt() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, var(--cream-shade) 0%, var(--cream) 100%)",
        border: "2px solid var(--navy)",
        borderRadius: 24,
        padding: 40,
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big background finder pattern, decorative */}
      <svg
        viewBox="0 0 200 200"
        style={{ position: "absolute", inset: -20, width: "110%", opacity: 0.06 }}
        aria-hidden="true"
      >
        <rect x="0" y="0" width="200" height="200" rx="44" fill="var(--navy)" />
        <rect x="30" y="30" width="140" height="140" rx="30" fill="var(--cream)" />
        <rect x="65" y="65" width="70" height="70" rx="16" fill="var(--navy)" />
      </svg>
      <div style={{ position: "relative", textAlign: "center" }}>
        <Wordmark height={80} />
        <div style={{ marginTop: 20, fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--slate)" }}>
          Room 112 · 8 stations · live
        </div>
      </div>
    </div>
  );
}
