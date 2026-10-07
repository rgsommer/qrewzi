"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "sent" | "error";

const GRADE_BANDS = ["K-2", "3-5", "6-8", "9-12", "Mixed / Other"];
const INTENTS = [
  "Try with my class next week",
  "Try in the next month",
  "Just exploring",
  "Sharing with a colleague",
];

export default function BetaPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [gradeBand, setGradeBand] = useState("");
  const [subject, setSubject] = useState("");
  const [intent, setIntent] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [ref, setRef] = useState("");
  const [promoCode, setPromoCode] = useState("");

  // Pre-fill from the link: /beta?subject=Integers&grade=6-8 lets a "steal this
  // game" post land the teacher on a form that already knows what to send them.
  // ?promo=QREWFREE carries the code a teacher got on the business card so the
  // signup is tagged with it and the free-month fulfilment can find them later.
  // UTM tags ride along as `ref` so the sign-up can be traced to the post.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const subj = q.get("subject");
    const grade = q.get("grade");
    const promo = q.get("promo");
    if (subj) setSubject(subj);
    if (grade && GRADE_BANDS.includes(grade)) setGradeBand(grade);
    if (promo) setPromoCode(promo.toUpperCase().slice(0, 32));
    const utm = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
      .map((k) => (q.get(k) ? `${k}=${q.get(k)}` : ""))
      .filter(Boolean)
      .join("&");
    if (utm) setRef(utm);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, school, gradeBand, subject, intent, source: "qrewzi", ref, promoCode }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || `Signup failed (${res.status})`);
      }
      setStatus("sent");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Signup failed";
      setError(msg);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section className="section">
        <div className="container" style={{ maxWidth: 640, textAlign: "center" }}>
          <div className="pill">You're in the Qrew</div>
          <h1 style={{ marginTop: 20 }}>Welcome aboard.</h1>
          <p style={{ marginTop: 20, fontSize: 18, color: "var(--slate)" }}>
            Your welcome email with the beta setup link and the free student app is on its way.
            If it doesn't arrive within a minute, drop us a note at{" "}
            <a href="mailto:hello@qrewzi.com">hello@qrewzi.com</a>.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/" className="btn btn-secondary">← Back to home</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="eyebrow">Beta program</div>
        <h1 style={{ marginTop: 12 }}>One year of Qrewzi, free.</h1>
        <p style={{ marginTop: 16, fontSize: 18, color: "var(--slate)", maxWidth: "56ch" }}>
          You get the complete product free for a full year. In return, we ask two
          simple things — and you also get direct access to us and a spot on the
          &ldquo;Original Qrew&rdquo; wall. Four quick fields; your setup link is in your
          inbox within a minute.
        </p>

        <div
          style={{
            marginTop: 28,
            padding: "20px 22px",
            borderRadius: 14,
            background: "var(--butter)",
            border: "2px solid var(--navy)",
          }}
        >
          <div className="eyebrow" style={{ color: "var(--navy)" }}>The deal</div>
          <ul style={{ marginTop: 12, marginBottom: 0, paddingLeft: 20, color: "var(--navy)", fontSize: 16, lineHeight: 1.7 }}>
            <li><strong>You get:</strong> the full Qrewzi product, free for one year.</li>
            <li><strong>You do:</strong> run a game with your class at least once a month.</li>
            <li><strong>You share:</strong> quick, honest feedback so we can make it better.</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} style={{ marginTop: 40, display: "grid", gap: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name" name="name" required
                value={name} onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">School email</label>
              <input
                id="email" name="email" type="email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="school">School or district <Optional /></label>
            <input
              id="school" name="school"
              value={school} onChange={(e) => setSchool(e.target.value)}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="field">
              <label htmlFor="grade">Grade band</label>
              <select id="grade" name="gradeBand" required value={gradeBand} onChange={(e) => setGradeBand(e.target.value)}>
                <option value="">Choose one…</option>
                {GRADE_BANDS.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="subject">Main subject</label>
              <input
                id="subject" name="subject" required placeholder="Science, History, PE…"
                value={subject} onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="intent">What are you hoping to try? <Optional /></label>
            <select id="intent" name="intent" value={intent} onChange={(e) => setIntent(e.target.value)}>
              <option value="">Choose one…</option>
              {INTENTS.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          {promoCode && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 10,
                background: "var(--butter)",
                border: "2px solid var(--navy)",
                fontSize: 14,
                color: "var(--navy)",
                fontWeight: 700,
              }}
            >
              <span aria-hidden="true" style={{ fontSize: 16 }}>🎁</span>
              <span>
                Promo code <strong style={{ letterSpacing: "0.08em" }}>{promoCode}</strong> applied —
                your first month on Qrewzi is on us.
              </span>
            </div>
          )}

          {error && (
            <div style={{ background: "#FEE2E2", color: "#7F1D1D", padding: 12, borderRadius: 10, fontSize: 14 }}>
              {error}
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Join the beta →"}
            </button>
            <div style={{ fontSize: 13, color: "var(--slate)" }}>
              Setup link by email within a minute. A human follows up the next school day.
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Optional() {
  return (
    <span style={{ fontWeight: 400, fontSize: 12, color: "var(--slate)", marginLeft: 6 }}>
      optional
    </span>
  );
}
