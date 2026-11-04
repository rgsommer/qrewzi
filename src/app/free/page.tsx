"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// qrewzi.com/free — the one page to send a teacher: what Qrewzi is, a way to
// try it before signing up, and the offer with the code attached. It began
// as the landing page for the business card ("for the teacher who got the
// card"), and the card still points here; it is written now for any teacher
// it is sent to. It reads the code from ?code=XXX if present (a QR version of
// a card), QREWFREE otherwise. The sign-up link carries the code
// (set.qrewzi.com/signup?promo=), which keeps it with the account for
// checkout to honour: every new account starts with three months of Pro
// (backend routes/auth.js grantSignupTrial), and the code takes the first
// paid month off (routes/stripe.js, the QREWFREE bridge).

const DEFAULT_CODE = "QREWFREE";
// The demo game a teacher plays on their own phone: the school one, straight
// in (the player app's ?demo= skips "Who will be playing?").
const DEMO_GAME_URL = "https://play.qrewzi.com/?demo=school";
// The host's side: a live demo room on the projector, which a phone can join.
const HOST_DEMO_URL = "https://set.qrewzi.com/demo";

export default function FreePage() {
  const [code, setCode] = useState(DEFAULT_CODE);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const c = q.get("code");
    if (c) setCode(c.toUpperCase().slice(0, 32));
  }, []);

  const signupHref = `https://set.qrewzi.com/signup?promo=${encodeURIComponent(code)}`;

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section
        className="section"
        style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}
      >
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          <div className="eyebrow">For teachers · 3 months free</div>
          <h1 style={{ marginTop: 12 }}>
            Your next lesson,<br />as a team game.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 20,
              color: "var(--slate)",
              maxWidth: "52ch",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            Describe what you&rsquo;re teaching. Qrewzi builds a game the whole
            room plays in teams — scanning stations, racing, sorting, acting it
            out — on phones, tablets or Chromebooks. You run it from the
            projector, and the report lands in your inbox.
          </p>

          {/* Code pill — the code on the card, or the one in the link */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              marginTop: 32,
              padding: "14px 22px",
              borderRadius: 999,
              background: "var(--navy)",
              color: "var(--cream)",
              border: "2px solid var(--navy)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--butter)",
              }}
            >
              Your code
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.08em",
                padding: "4px 14px",
                borderRadius: 999,
                background: "var(--butter)",
                color: "var(--navy)",
              }}
            >
              {code}
            </span>
          </div>

          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href={signupHref} className="btn btn-primary">
              Start free with {code} →
            </Link>
            <a href={DEMO_GAME_URL} target="_blank" rel="noopener" className="btn btn-secondary">
              Try a demo game first
            </a>
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: "var(--slate)" }}>
            No credit card · Students don&rsquo;t need accounts · Any device
          </p>
        </div>
      </section>

      {/* ============================ THE OFFER ============================ */}
      <section
        className="section-tight"
        style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}
      >
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>The offer</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>
            Months to try it properly.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 18,
            }}
          >
            <Line
              emoji="🎁"
              title="Three months of Pro, free"
              body="Every task type, game mode and trivia night, for as many devices as your class has. No card."
            />
            <Line
              emoji="🎟️"
              title={`Then ${code} takes a month off`}
              body="Carry on with a paid plan and your first paid month is free too. One per account."
            />
            <Line
              emoji="🙂"
              title="Or stay on Free"
              body="Choose no plan and the account carries on, on the Free plan: 30-minute games for up to 12 devices."
            />
          </div>
          <p style={{ marginTop: 24, textAlign: "center", fontSize: 15, color: "var(--slate)" }}>
            All we ask: after your first game, tell us what you&rsquo;d change.{" "}
            <Link href="/pricing" style={{ color: "var(--navy)", fontWeight: 700 }}>See the plans</Link>
          </p>
        </div>
      </section>

      {/* ============================ HOW A LESSON RUNS ============================ */}
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>How a lesson runs</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>
            Describe it. Play it. Gather round.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <Step n={1} title="Describe it" body="Type a sentence or paste your notes. Qrewzi writes the tasks, and a sentence becomes a 45-minute game." />
            <Step n={2} title="Play it" body="Teams join with the room code on any device and move between coloured stations. The projector keeps the leaderboard live." />
            <Step n={3} title="Gather round" body="Everyone comes back to the screen to see the winners revealed. Each team's work and a parent-ready recap are emailed to you." />
          </div>
        </div>
      </section>

      {/* ============================ TRY IT FIRST ============================ */}
      <section
        className="section-tight"
        style={{ background: "var(--cream-shade)", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}
      >
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>Try it first</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>
            See it before you sign up.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            <TryCard
              emoji="📱"
              title="Play a demo game"
              body="Five minutes on your own phone, no account. You'll see exactly what your students see."
              href={DEMO_GAME_URL}
              cta="Play the demo →"
            />
            <TryCard
              emoji="🖥️"
              title="Open the host's screen"
              body="The projector view of a live demo room. Join it from your phone and watch your team appear."
              href={HOST_DEMO_URL}
              cta="Open the host demo →"
            />
          </div>
        </div>
      </section>

      {/* ============================ WHAT'S INSIDE ============================ */}
      <section className="section-tight">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>What's inside</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>
            A room-wide team game, in minutes.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            <Feat title="Zero prep" body="A sentence becomes a 45-minute game." />
            <Feat title="85+ task types" body="Sort, mind-map, speech, movement." />
            <Feat title="GameMaster projector" body="Live leaderboard, heat map, celebrations." />
            <Feat title="Grades + reports" body="Parent-ready recap when the bell rings." />
            <Feat title="Any device" body="Phones, Chromebooks, tablets together." />
            <Feat title="Three game modes" body="Troopers, Raiders or Duels — same set." />
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--butter)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
          <h2>Ready when you are.</h2>
          <p style={{ marginTop: 14, fontSize: 17, color: "var(--navy)" }}>
            Sign-up takes a minute, and {code} is already attached.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href={signupHref} className="btn btn-primary">
              Start free with {code} →
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary">
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Line({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 16,
        background: "var(--cream-shade)",
        border: "2px solid var(--navy)",
      }}
    >
      <div style={{ fontSize: 24 }} aria-hidden="true">{emoji}</div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 16,
          marginTop: 8,
          color: "var(--navy)",
        }}
      >
        {title}
      </div>
      <p style={{ marginTop: 6, fontSize: 15, color: "var(--slate)" }}>{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="card">
      <div style={{ fontSize: 13, fontWeight: 900, color: "var(--coral)", letterSpacing: "0.12em" }}>STEP {n}</div>
      <h3 style={{ fontSize: 18, marginTop: 6 }}>{title}</h3>
      <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{body}</p>
    </div>
  );
}

function TryCard({ emoji, title, body, href, cta }: { emoji: string; title: string; body: string; href: string; cta: string }) {
  return (
    <div className="card" style={{ background: "#fff", display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: 28 }} aria-hidden="true">{emoji}</div>
      <h3 style={{ fontSize: 18, marginTop: 8 }}>{title}</h3>
      <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15, flex: 1 }}>{body}</p>
      <a href={href} target="_blank" rel="noopener" className="btn btn-secondary" style={{ marginTop: 16, alignSelf: "flex-start" }}>
        {cta}
      </a>
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
