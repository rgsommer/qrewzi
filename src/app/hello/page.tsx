"use client";

// www.qrewzi.com/hello?t=… — the one page an outreach email links to
// (backend services/outreach). Made for the person it was sent to: their name
// and their organisation at the top, what Qrewzi is in one picture and three
// points, and one thing to do — the live demo, no sign-up. A second, quieter
// way to talk to Richard for 15 minutes.
//
// Once the game made from their own subject is ready (the second email's
// "I made one from Grade 7 History for you to try" links here with &s=1), the
// page leads with it: one big button that plays it on the phone or laptop in
// hand, no sign-up (play.qrewzi.com's demo, in a room of their own). The rest
// of the page follows as before.
//
// Their name comes from GET api.curriculate.net/outreach/hello?t=, and the
// page tells the server it was seen (POST /outreach/hello/seen) only after a
// few seconds on a visible screen: school link scanners fetch the page but do
// not run it, so the count is people, not robots.

import { useEffect, useState } from "react";

const API = "https://api.curriculate.net";

type Sample = { title?: string; subject?: string; grade?: string; unit?: string; tasks?: number; playUrl?: string };
type Hello = { firstName?: string; organisation?: string; demoUrl?: string; talkUrl?: string; fromName?: string; sample?: Sample };

export default function HelloPage() {
  const [token, setToken] = useState("");
  const [hello, setHello] = useState<Hello>({});

  useEffect(() => {
    const t = (new URLSearchParams(window.location.search).get("t") || "").replace(/[^a-z0-9]/gi, "").slice(0, 40);
    setToken(t);
    if (!t) return;
    fetch(`${API}/outreach/hello?t=${encodeURIComponent(t)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (j && j.ok) setHello(j); })
      .catch(() => {});
    let timer: ReturnType<typeof setTimeout> | null = null;
    const seen = () => {
      if (document.visibilityState !== "visible" || timer) return;
      timer = setTimeout(() => {
        fetch(`${API}/outreach/hello/seen`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ t }), keepalive: true }).catch(() => {});
      }, 4000);
    };
    seen();
    document.addEventListener("visibilitychange", seen);
    return () => { document.removeEventListener("visibilitychange", seen); if (timer) clearTimeout(timer); };
  }, []);

  const demoHref = hello.demoUrl || `https://set.qrewzi.com/demo?utm_source=outreach&utm_medium=email&utm_campaign=${encodeURIComponent(token || "page")}`;
  const talkHref = hello.talkUrl || "mailto:hello@qrewzi.com?subject=Qrewzi%20%E2%80%94%2015%20minutes";
  const first = hello.firstName?.trim();
  const org = hello.organisation?.trim();
  // Only an address on Qrewzi's own player is a button here.
  const sample = hello.sample && /^https:\/\/play\.qrewzi\.com\//.test(hello.sample.playUrl || "") ? hello.sample : null;
  const made = sample ? [sample.grade ? `Grade ${sample.grade}` : "", sample.subject].filter(Boolean).join(" ") : "";

  return (
    <>
      {sample ? (
        <section className="section" style={{ paddingTop: "clamp(40px, 6vw, 88px)", paddingBottom: 0 }}>
          <div className="container" style={{ maxWidth: 1080 }}>
            <div className="card" style={{ padding: "clamp(24px, 4vw, 44px)", borderWidth: 3 }}>
              <div className="eyebrow">Made for you</div>
              <h1 style={{ marginTop: 12 }}>
                {first ? <>{first}, here&rsquo;s a game made from {made || "your subject"}.</> : <>Here&rsquo;s a game made from {made || "your subject"}.</>}
              </h1>
              {sample.unit ? (
                <p style={{ marginTop: 14, fontSize: 20, color: "var(--slate)", maxWidth: "52ch", lineHeight: 1.5 }}>
                  {sample.unit} — {sample.tasks ? `${sample.tasks} short tasks` : "short tasks"} of different kinds, marked as you answer, the way a class plays them. On this phone or laptop, in a couple of minutes.
                </p>
              ) : null}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
                <a href={sample.playUrl} className="btn btn-primary" style={{ fontSize: 20 }}>
                  Play it — no sign-up →
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <section className="section" style={{ paddingTop: "clamp(40px, 6vw, 88px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="hello-grid">
            <div>
              <div className="eyebrow">{org ? `For ${org}` : "For schools"}</div>
              {sample ? (
                // The game leads the page; this is the page's second heading.
                <h2 style={{ marginTop: 12 }}>And here&rsquo;s Qrewzi in one&nbsp;minute.</h2>
              ) : (
                <h1 style={{ marginTop: 12 }}>
                  {first ? <>Hi {first},<br />here&rsquo;s Qrewzi in one&nbsp;minute.</> : <>Here&rsquo;s Qrewzi in one&nbsp;minute.</>}
                </h1>
              )}
              <p style={{ marginTop: 20, fontSize: 20, color: "var(--slate)", maxWidth: "46ch", lineHeight: 1.5 }}>
                A teacher types one line about the lesson. Qrewzi turns it into a team game the whole class plays — a
                scavenger hunt around the room, an escape room or a trivia round — on any phone, tablet or Chromebook.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
                <a href={demoHref} className="btn btn-primary" style={{ fontSize: 18 }}>
                  Try the live demo — no sign-up →
                </a>
                <a href={talkHref} className="btn btn-secondary">
                  Talk to Richard for 15 minutes
                </a>
              </div>
              <p style={{ marginTop: 14, fontSize: 14, color: "var(--slate)" }}>
                The demo opens the projector&rsquo;s view in your browser. Join it from your phone and you&rsquo;re playing in under a minute.
              </p>
            </div>
            <div
              style={{
                background: "var(--navy)",
                border: "2px solid var(--navy)",
                borderRadius: 24,
                aspectRatio: "1 / 1",
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
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="hello-points">
            {[
              {
                title: "Made from your lesson in a minute",
                body: "Type a line about the lesson or paste your terms list. Qrewzi writes a challenge for every station, at your grade, in dozens of kinds of task.",
              },
              {
                title: "Every student takes a turn",
                body: "One device per team is enough. Roles rotate, most tasks are marked as they're answered, and the report at the bell gives each student their own grade.",
              },
              {
                title: "Works where your school is",
                body: "A room code, no student accounts, nothing to install. It keeps playing when the Wi-Fi drops, and it goes outside too.",
              },
            ].map((p) => (
              <div key={p.title} className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, margin: 0 }}>{p.title}</h3>
                <p style={{ marginTop: 10, color: "var(--slate)", lineHeight: 1.55 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="card" style={{ padding: "28px 28px 24px" }}>
            <div className="eyebrow">What it costs</div>
            <p style={{ marginTop: 10, fontSize: 18, lineHeight: 1.55 }}>
              Teachers get the first three months free, with no card. After that there&rsquo;s a Free plan or a paid plan —
              and {org ? `for ${org}` : "for a whole school or district"}, pricing on request.
            </p>
          </div>
          <div style={{ marginTop: 28, padding: "0 4px" }}>
            <div className="eyebrow">Why I built it</div>
            <p style={{ marginTop: 10, fontSize: 18, lineHeight: 1.6 }}>
              I&rsquo;m Richard Sommer. After more than 25 years in education in Ontario and abroad, including school
              leadership, I went back into the classroom — and built Qrewzi for my own students.
            </p>
            <p style={{ marginTop: 6, fontSize: 18 }}>— Richard</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28, justifyContent: "center" }}>
            <a href={demoHref} className="btn btn-primary" style={{ fontSize: 18 }}>
              Try the live demo — no sign-up →
            </a>
            <a href={talkHref} className="btn btn-ghost">
              Or talk for 15 minutes
            </a>
          </div>
          {token ? (
            <p style={{ marginTop: 40, fontSize: 13, color: "var(--slate)", textAlign: "center" }}>
              Rather not hear from me? <a href={`/unsubscribe?t=${encodeURIComponent(token)}`}>Unsubscribe</a>.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
