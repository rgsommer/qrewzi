"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// The landing page the business card points at (qrewzi.com/free). It reads
// the code from ?code=XXX if present (teacher scanned a QR version of the
// card), defaults to QREWFREE otherwise. CTA passes the code through to
// /beta as ?promo=, where the signup form picks it up and tags the record.

const DEFAULT_CODE = "QREWFREE";

export default function FreePage() {
  const [code, setCode] = useState(DEFAULT_CODE);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const c = q.get("code");
    if (c) setCode(c.toUpperCase().slice(0, 32));
  }, []);

  const signupHref = `/beta?promo=${encodeURIComponent(code)}`;

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section
        className="section"
        style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}
      >
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          <div className="eyebrow">For the teacher who got the card</div>
          <h1 style={{ marginTop: 12 }}>
            First month<br />on us.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 20,
              color: "var(--slate)",
              maxWidth: "48ch",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            Run a Qrewzi session with your class this week — free for the first month.
            All we ask is you tell us what you&rsquo;d change.
          </p>

          {/* Code pill — the thing on the card */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              marginTop: 36,
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
              Redeem my month →
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary">
              See how it works
            </Link>
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: "var(--slate)" }}>
            Setup link by email within a minute. No credit card. Any device.
          </p>
        </div>
      </section>

      {/* ============================ THE DEAL ============================ */}
      <section
        className="section-tight"
        style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}
      >
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>The deal</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>
            Short and fair.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            <Line emoji="🎁" title="You get" body="The full Qrewzi product, free for 30 days." />
            <Line emoji="🎲" title="You do" body="Run one game with your class. Any topic. Any grade." />
            <Line emoji="💬" title="You share" body="A few sentences on what worked, what didn't." />
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
            <Feat title="30+ task types" body="Sort, mind-map, speech, movement." />
            <Feat title="GameMaster projector" body="Live leaderboard, heat map, celebrations." />
            <Feat title="Grades + reports" body="Parent-ready recap when the bell rings." />
            <Feat title="Any device" body="Phones, Chromebooks, tablets together." />
            <Feat title="Standards-aligned" body="Ontario today, more jurisdictions soon." />
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--butter)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
          <h2>Ready to try it?</h2>
          <p style={{ marginTop: 14, fontSize: 17, color: "var(--navy)" }}>
            Four quick fields. Your code is already attached.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link href={signupHref} className="btn btn-primary">
              Redeem my month →
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

function Feat({ title, body }: { title: string; body: string }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: 18 }}>{title}</h3>
      <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{body}</p>
    </div>
  );
}
