import Link from "next/link";
import StoreBadges from "./components/StoreBadges";

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
            <div className="eyebrow">Now in beta · A full year, free</div>
            <h1 style={{ marginTop: 12 }}>
              The classroom<br />becomes the game.
            </h1>
            <div style={{ marginTop: 10, fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--coral)" }}>
              Qrewzi · say &ldquo;crew-zee&rdquo;
            </div>
            <p style={{ marginTop: 20, fontSize: 20, color: "var(--slate)", maxWidth: "56ch", lineHeight: 1.5 }}>
              Describe a lesson. AI builds a room-wide team game your class
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
              <Link href="/beta" className="btn btn-primary">
                Get a year free →
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary">
                See how it works
              </Link>
            </div>
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
