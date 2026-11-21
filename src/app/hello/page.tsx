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
// `page` (2026-11-21): "youth" for a youth leader (backend rules.js audienceFor "youth"), "party"
// for a party planner, a venue or a community events coordinator (role "party") — whose emails are
// about an escape room for their group's night, and whose page points at the ready-made murder
// mysteries (`partyRoomsUrl`, qrewzi.com/murder-mystery-party).
type Hello = { firstName?: string; organisation?: string; demoUrl?: string; talkUrl?: string; fromName?: string; sample?: Sample; audience?: "school" | "workplace" | "youth"; page?: "youth" | "party"; partyRoomsUrl?: string };

// The page a workplace reader lands on must not undo the email that sent
// them. Their email is written with a host, a group and a session (backend
// rules.js audienceFor, WORKPLACE_FACTS); arriving at "a teacher types one
// line about the lesson" tells them, in the first sentence, that this is for
// somebody else. Same product, same claims, the right nouns — the setting is
// the host's and the players' screens follow it (shared/audience.js).
const COPY = {
  school: {
    eyebrow: "For schools",
    intro: "A teacher types one line about the lesson. Qrewzi turns it into a team game the whole class plays — a scavenger hunt around the room, an escape room or a trivia round — on any phone, tablet or Chromebook. From the same set, students study for the test, alone or with a partner, and you give the quiz and the test.",
    demoNote: "The demo opens the projector\u2019s view in your browser. Join it from your phone \u2014 or, with no phone to hand, in another tab \u2014 and you\u2019re playing in under a minute. At the end you see what the teacher sees: every team\u2019s answers, marked.",
    videoAlt: "A class rotating between Qrewzi stations while the projector keeps score",
    points: [
      { title: "Made from your lesson in a minute", body: "Type a line about the lesson or paste your terms list. Qrewzi writes a challenge for every station, at your grade, in dozens of kinds of task." },
      { title: "Every student takes a turn", body: "One device per team is enough. Roles rotate, most tasks are marked as they\u2019re answered, and the report at the bell gives each student their own grade." },
      { title: "Works where your school is", body: "A room code, no student accounts, nothing to install. It keeps playing when the Wi-Fi drops, and it goes outside too." },
    ],
  },
  workplace: {
    eyebrow: "For teams",
    intro: "You type one line about the topic \u2014 the new policy, the product, the safety briefing. Qrewzi turns it into a team game the room plays together \u2014 a scavenger hunt around the venue, an escape room or a trivia round \u2014 on the phones people already have.",
    demoNote: "The demo opens the host\u2019s view in your browser. Join it from your phone \u2014 or, with no phone to hand, in another tab \u2014 and you\u2019re playing in under a minute. At the end you see what the host sees: every team\u2019s answers, marked.",
    videoAlt: "Teams rotating between Qrewzi stations while the main screen keeps score",
    points: [
      { title: "Made from your material in a minute", body: "Type a line about the topic or paste your terms list. Qrewzi writes a challenge for every station, in dozens of kinds of task." },
      { title: "Everyone takes a turn", body: "One device per team is enough. Roles rotate, most tasks are marked as they\u2019re answered, and you get a report at the end." },
      { title: "Works where your people are", body: "A room code, no accounts, nothing to install. It keeps playing when the Wi-Fi drops, and it goes outside for an offsite." },
    ],
  },
  // A youth leader: their youth night, never a lesson or a test.
  youth: {
    eyebrow: "For youth nights",
    intro: "You type one line about the night — a Bible story, a theme, the series you’re in. Qrewzi turns it into a team game the group plays together — an escape room they solve together, a scavenger hunt around the building or a Bible trivia night — on the phones they already have.",
    demoNote: "The demo opens in your browser. Join it from your phone — or, with no phone to hand, in another tab — and you’re playing in under a minute. At the end you see what the leader sees: every team’s answers, marked.",
    videoAlt: "Teams rotating between Qrewzi stations while the main screen keeps score",
    points: [
      { title: "An escape room they solve together", body: "One case for the whole group, each on their own phone: they share the evidence they find and open the locks together. Print 8 station cards and tape them up around the building." },
      { title: "Bible trivia and Prayer Rounds", body: "A Bible trivia night ready to play, with nothing to write, and Prayer Rounds: small-group prayer cards, round by round, for a prayer time that moves the room." },
      { title: "Works where your group is", body: "A room code, no accounts, nothing to install. It keeps playing when the Wi-Fi drops — at camp, on a retreat, outdoors." },
    ],
    price: "Your first three months are free, with no card. After that there’s a Free plan or a paid plan.",
  },
  // A party planner, a venue, a church's or community centre's events coordinator.
  party: {
    eyebrow: "For parties and group nights",
    intro: "Pick a ready-made murder mystery, or type one line about the theme. Qrewzi turns it into a game the guests play together — an escape room the whole group solves, a hunt around the venue or a trivia round — on the phones they already have.",
    demoNote: "The demo opens in your browser. Join it from your phone — or, with no phone to hand, in another tab — and you’re playing in under a minute. At the end you see what the host sees: every team’s answers, marked.",
    videoAlt: "Teams rotating between Qrewzi stations while the main screen keeps score",
    points: [
      { title: "One case, everyone on it", body: "Each guest on their own phone, sharing the evidence they find and opening the locks together, then naming the murderer — about 45–50 minutes." },
      { title: "Print 8 cards, and that’s the set-up", body: "Tape the station cards up around the room or the house, put the room code on the TV, and the guests join with no app and no accounts." },
      { title: "Any theme", body: "Two murder mysteries are ready made for adults, and Qrewzi can make an escape room on any other theme." },
    ],
    price: "Your first three months are free, with no card. After that there’s a Free plan or a paid plan.",
  },
} as const;

const PARTY_ROOMS_PAGE = "https://www.qrewzi.com/murder-mystery-party";

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
  const kind = hello.page === "youth" || hello.page === "party" ? hello.page : hello.audience === "workplace" ? "workplace" : "school";
  const copy = COPY[kind];
  const price = "price" in copy ? copy.price : "";
  // Only Qrewzi's own page is a link here.
  const partyRooms = (kind === "youth" || kind === "party") ? (hello.partyRoomsUrl && hello.partyRoomsUrl.startsWith(PARTY_ROOMS_PAGE) ? hello.partyRoomsUrl : PARTY_ROOMS_PAGE) : "";
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
              <div className="eyebrow">{org ? `For ${org}` : copy.eyebrow}</div>
              {sample ? (
                // The game leads the page; this is the page's second heading.
                <h2 style={{ marginTop: 12 }}>And here&rsquo;s Qrewzi in one&nbsp;minute.</h2>
              ) : (
                <h1 style={{ marginTop: 12 }}>
                  {first ? <>Hi {first},<br />here&rsquo;s Qrewzi in one&nbsp;minute.</> : <>Here&rsquo;s Qrewzi in one&nbsp;minute.</>}
                </h1>
              )}
              <p style={{ marginTop: 20, fontSize: 20, color: "var(--slate)", maxWidth: "46ch", lineHeight: 1.5 }}>
                {copy.intro}
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
                {copy.demoNote}
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
                aria-label={copy.videoAlt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="hello-points">
            {copy.points.map((p) => (
              <div key={p.title} className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, margin: 0 }}>{p.title}</h3>
                <p style={{ marginTop: 10, color: "var(--slate)", lineHeight: 1.55 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {partyRooms ? (
        <section className="section-tight">
          <div className="container" style={{ maxWidth: 1080 }}>
            <div className="card" style={{ padding: "clamp(22px, 3vw, 32px)", borderWidth: 3 }}>
              <div className="eyebrow">Ready to play</div>
              <h2 style={{ marginTop: 10, fontSize: "clamp(24px, 3vw, 32px)" }}>Two murder mysteries for a group night</h2>
              <p style={{ marginTop: 12, fontSize: 18, color: "var(--slate)", lineHeight: 1.55, maxWidth: "62ch" }}>
                <strong>Murder on the Alpine Star</strong> (a night train, 1937) and <strong>Murder at Quillhurst Hall</strong> (a
                country house, 1924): one case the whole group solves together, each on their own phone, in about
                45&ndash;50 minutes. Print 8 cards and tape them up first. Written for adults.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
                <a href={partyRooms} className="btn btn-secondary">How a murder-mystery night runs →</a>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="card" style={{ padding: "28px 28px 24px" }}>
            <div className="eyebrow">What it costs</div>
            <p style={{ marginTop: 10, fontSize: 18, lineHeight: 1.55 }}>
              {price || (
                <>
                  Teachers get the first three months free, with no card. After that there&rsquo;s a Free plan or a paid plan —
                  and {org ? `for ${org}` : "for a whole school or district"}, pricing on request.
                </>
              )}
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
