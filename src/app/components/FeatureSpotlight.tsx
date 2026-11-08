"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

// The home page's feature spotlight: a row of three cards, a different three
// each visit, from the nine below. Every card is in the server-rendered HTML
// (search engines see all nine); the visit only decides which three are in
// view first. The server and the first client render both start at card 1,
// so hydration matches; after mount the page scrolls the row to the visit's
// three, which is a scroll, not a layout shift. Nothing moves on its own:
// swipe on a phone, the arrows or the arrow keys elsewhere.
//
// Which three: localStorage holds the page the next visit gets (0, 1, 2, then
// round again); sessionStorage keeps this visit's page, so coming back to the
// home page in the same tab doesn't reshuffle it. Storage that is blocked
// leaves the first three. A first visit gets page 0, the strongest three:
// ImagineIt, each student's own grade, escape rooms.
//
// The pictures are real screens from test games (made-up names, no faces),
// cropped to 4:3 WebP in public/spotlight; three cards are drawn in HTML.

type Spot = {
  id: string;
  tag: string;
  title: string;
  hook: string;
  href: string;
  cta: string;
  img?: { src: string; alt: string };
  art?: ReactNode;
};

const SPOTS: Spot[] = [
  // Page 0 — a first visit's three.
  {
    id: "imagineit",
    tag: "Outdoors",
    title: "ImagineIt",
    hook: "An outdoor photo hunt from your lesson: nature finds and imagination prompts, no QR codes.",
    href: "/imagineit",
    cta: "See ImagineIt",
    img: { src: "/spotlight/imagineit.webp", alt: "A team's phone in ImagineIt: nature find 1 of 6, a smooth stone, and a Take a photo button" },
  },
  {
    id: "own-grades",
    tag: "For the teacher",
    title: "Each student's own grade",
    hook: "In team play, each student is graded on the turns they held the device, blended with the team's.",
    href: "/features#own-grades",
    cta: "How grades work",
    art: <GradesArt />,
  },
  {
    id: "escape-rooms",
    tag: "Escape rooms",
    title: "An escape room for every team",
    hook: "Any lesson and any theme in about 90 seconds: six teams, six rooms, one classroom.",
    href: "/escape-rooms",
    cta: "Classroom escape rooms",
    img: { src: "/spotlight/escape-rooms.webp", alt: "An escape room lock on a tablet: the code is the word that means a formal agreement between nations" },
  },
  // Page 1.
  {
    id: "study-buddies",
    tag: "Practice at home",
    title: "Study Buddies",
    hook: "Pair up with a buddy code to study together live, duel, or beat a buddy's score.",
    href: "/features#study-buddies",
    cta: "About Study Buddies",
    img: { src: "/spotlight/study-buddies.webp", alt: "A buddy card: today's tasks, the words they're working on, and Study together, Duel and Beat my score" },
  },
  {
    id: "offline",
    tag: "Patchy Wi-Fi",
    title: "Plays on when the Wi-Fi drops",
    hook: "Answers wait on the device and send when it's back. Outdoor mode saves the whole route first.",
    href: "/features#offline",
    cta: "How it keeps going",
    art: <OfflineArt />,
  },
  {
    id: "connect-four",
    tag: "Team vs team",
    title: "True/False Connect Four",
    hook: "Two teams, one board: pick the true statement to drop a piece. No team free? The computer plays.",
    href: "/features#connect-four",
    cta: "How it plays",
    img: { src: "/spotlight/connect-four.webp", alt: "Connect Four between two teams: pick the true statement, then a board with blue and red pieces" },
  },
  // Page 2.
  {
    id: "debate-match",
    tag: "Speaking",
    title: "Debate Match",
    hook: "Two teams argue a motion in eight timed turns, each judged on the argument and the delivery.",
    href: "/features#debate-match",
    cta: "About Debate Match",
    img: { src: "/spotlight/debate-match.webp", alt: "A debate on a phone: the motion, the team's side, and the speaker's turn clock" },
  },
  {
    id: "trivia-rounds",
    tag: "Practice at home",
    title: "Trivia rounds",
    hook: "Ten quick games from any of nine checked trivia banks, to play alone between trivia nights.",
    href: "/features#trivia-rounds",
    cta: "About trivia rounds",
    img: { src: "/spotlight/trivia-rounds.webp", alt: "The trivia topics: Bible, general knowledge, history, the Middle Ages, the 1950s, modern times, Christmas, Easter and Thanksgiving" },
  },
  {
    id: "practice",
    tag: "Practice at home",
    title: "Practice that marks what they write",
    hook: "Teach It, short and open answers are marked, with a 📖 Words sheet for words not learned yet.",
    href: "/features#practice",
    cta: "Study practice",
    art: <PracticeArt />,
  },
];

const PER_PAGE = 3;
const PAGES = Math.ceil(SPOTS.length / PER_PAGE);
const NEXT_KEY = "qrewzi:spotlight:next";
const NOW_KEY = "qrewzi:spotlight:now";

/** This visit's page: the one already chosen in this tab, else the next in turn. */
function pageForVisit(): number {
  try {
    const now = window.sessionStorage.getItem(NOW_KEY);
    if (now != null && /^\d+$/.test(now)) return Number(now) % PAGES;
    const next = Number(window.localStorage.getItem(NEXT_KEY)) || 0;
    const page = ((next % PAGES) + PAGES) % PAGES;
    window.localStorage.setItem(NEXT_KEY, String((page + 1) % PAGES));
    window.sessionStorage.setItem(NOW_KEY, String(page));
    return page;
  } catch {
    return 0;
  }
}

const reducedMotion = () => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

export default function FeatureSpotlight() {
  const track = useRef<HTMLDivElement>(null);
  const [view, setView] = useState({ first: 0, perView: PER_PAGE });

  // Card i's place in the row, and how many fit across.
  const measure = useCallback(() => {
    const t = track.current;
    const cards = t ? (Array.from(t.children) as HTMLElement[]) : [];
    if (!t || cards.length < 2) return { step: 1, perView: 1, index: 0, origin: 0 };
    const origin = cards[0].offsetLeft;
    const step = cards[1].offsetLeft - origin || 1;
    const perView = Math.max(1, Math.round((t.clientWidth + 1) / step));
    const index = Math.round(t.scrollLeft / step);
    return { step, perView, index, origin };
  }, []);

  const go = useCallback((i: number, smooth: boolean) => {
    const t = track.current;
    if (!t) return;
    const { perView } = measure();
    const last = Math.max(0, SPOTS.length - perView);
    const target = Math.min(Math.max(0, i), last);
    const card = t.children[target] as HTMLElement | undefined;
    if (!card) return;
    const origin = (t.children[0] as HTMLElement).offsetLeft;
    t.scrollTo({ left: card.offsetLeft - origin, behavior: smooth && !reducedMotion() ? "smooth" : "instant" });
  }, [measure]);

  const step = useCallback((dir: 1 | -1, by: "page" | "card") => {
    const { index, perView } = measure();
    const last = Math.max(0, SPOTS.length - perView);
    const move = by === "page" ? perView : 1;
    let target = index + dir * move;
    // The row goes round: past the end is the start, before the start is the end.
    if (dir > 0 && index >= last) target = 0;
    else if (dir < 0 && index <= 0) target = last;
    go(target, true);
  }, [go, measure]);

  // After mount: this visit's three.
  useEffect(() => {
    go(pageForVisit() * PER_PAGE, false);
  }, [go]);

  // The "4–6 of 9" line follows the row, however it was moved.
  useEffect(() => {
    const t = track.current;
    if (!t) return undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { index, perView } = measure();
        setView((v) => (v.first === index && v.perView === perView ? v : { first: index, perView }));
      });
    };
    update();
    t.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      t.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [measure]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1, "card"); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1, "card"); }
    else if (e.key === "Home") { e.preventDefault(); go(0, true); }
    else if (e.key === "End") { e.preventDefault(); go(SPOTS.length - 1, true); }
  };

  const shownTo = Math.min(SPOTS.length, view.first + view.perView);
  const showing = view.perView > 1 ? `${view.first + 1}–${shownTo} of ${SPOTS.length}` : `${view.first + 1} of ${SPOTS.length}`;

  return (
    <section className="section-tight spot" aria-labelledby="spotlight-heading" style={{ paddingTop: 8 }}>
      <div className="container">
        <div className="spot-head">
          <div>
            <div className="eyebrow">Spotlight</div>
            <h2 id="spotlight-heading" style={{ marginTop: 10 }}>Three to try.</h2>
          </div>
          <div className="spot-controls">
            <span className="spot-count" aria-live="polite">{showing}</span>
            <button type="button" className="spot-arrow" aria-controls="spotlight-track" aria-label="Previous features" onClick={() => step(-1, "page")}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="spot-arrow" aria-controls="spotlight-track" aria-label="Next features" onClick={() => step(1, "page")}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div
          id="spotlight-track"
          ref={track}
          className="spot-track"
          role="region"
          aria-roledescription="carousel"
          aria-label="Feature spotlight — swipe, or use the arrow keys"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {SPOTS.map((s, i) => (
            <article key={s.id} className="spot-card" role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${SPOTS.length}: ${s.title}`}>
              <div className="spot-visual">
                {s.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.img.src} alt={s.img.alt} width={720} height={540} loading="lazy" decoding="async" />
                ) : (
                  s.art
                )}
              </div>
              <div className="spot-body">
                <div className="spot-tag">{s.tag}</div>
                <h3 className="spot-title">
                  <Link href={s.href} className="spot-link">{s.title}</Link>
                </h3>
                <p className="spot-hook">{s.hook}</p>
                <span className="spot-cta" aria-hidden="true">{s.cta} →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- The three cards drawn in HTML ---------- */

// The teacher's report: each player's own turns, the team's, the grade.
// (The numbers are the test game's; students never see any of this.)
function GradesArt() {
  const rows = [
    { name: "Ava", own: "93%", team: "85%", grade: "A", bg: "#DCFCE7", fg: "#15803D" },
    { name: "Cy", own: "90%", team: "85%", grade: "B", bg: "#FEE2E2", fg: "#B91C1C" },
    { name: "Ben", own: "73%", team: "85%", grade: "C", bg: "#FEF3C7", fg: "#92400E" },
  ];
  return (
    <div className="art art-grades" role="img" aria-label="A teacher's report: Ava, Cy and Ben, each with their own turns, the team's score and a grade">
      <div className="art-sheet">
        <div className="art-sheet-head">
          <span>Student grades</span>
          <span className="art-lock">🔒 Teacher only</span>
        </div>
        <div className="art-grid art-grid-head">
          <span>Student</span><span>Own turns</span><span>Team</span><span>Grade</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className="art-grid">
            <span style={{ fontWeight: 900 }}>{r.name}</span>
            <span>{r.own}</span>
            <span style={{ color: "var(--slate)" }}>{r.team}</span>
            <span><b className="art-letter" style={{ background: r.bg, color: r.fg }}>{r.grade}</b></span>
          </div>
        ))}
        <div className="art-foot">Own turns 70% · team 30%</div>
      </div>
    </div>
  );
}

// The team's device out of range, then the teacher's card.
function OfflineArt() {
  return (
    <div className="art art-offline" role="img" aria-label="A team's device showing Offline, two answers waiting, and the teacher's card showing the team outside, last synced four minutes ago">
      <div className="art-pill art-pill-dark">📴 Offline — 2 answers waiting</div>
      <div className="art-team">
        <div style={{ fontWeight: 900, color: "var(--navy)" }}>Owls <span style={{ color: "var(--slate)", fontWeight: 700 }}>(Fay, Gus)</span></div>
        <div className="art-pill art-pill-green">🌳 Outside — last synced 4 min ago</div>
      </div>
      <div className="art-pill art-pill-light">✓ Back in range — answers sent</div>
    </div>
  );
}

// A written answer in practice, marked, with the word sheet beside it.
function PracticeArt() {
  return (
    <div className="art art-practice" role="img" aria-label="A practice answer in a student's own words, marked right, with the Words button">
      <div className="art-sheet" style={{ gap: 10 }}>
        <div className="art-sheet-head">
          <span>✍️ Teach It</span>
          <span className="art-words">📖 Words</span>
        </div>
        <div className="art-quote">&ldquo;A treaty is a formal agreement between countries.&rdquo;</div>
        <div className="art-marked">✅ Right — that explains <b>treaty</b>.</div>
      </div>
    </div>
  );
}
