import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

// www.qrewzi.com/murder-mystery-party — the two ready-made murder mysteries for
// a party or a family gathering (owner, 2026-11-21: "youth leaders and people
// who would plan a group party (or even a family gathering) should be told
// about the Escape Room option"). Families hear about it here, never by email:
// the outreach writes only to people at organisations (backend
// services/outreach/rules.js privatePersonReason). A youth leader's and a party
// planner's outreach page links here.
//
// The rooms are the Curriculate repo's shared/escapeRooms/alpineStar.js and
// manorMurder.js, listed by shared/partyRooms.js; every account can add them
// from Party Games. Nothing on this page gives a case away: the place, the
// year and the death everyone is told about at the start — no evidence, no
// suspects, no answers.

export const metadata = pageMetadata({
  path: "/murder-mystery-party",
  title: "Murder-mystery party game — 6 friends, 6 phones, one case",
  description:
    "Two ready-made murder mysteries for a party or a family gathering: everyone on their own phone, one case solved together, about 45 minutes. Print 8 cards, tape them up around the house, and name the murderer.",
  socialTitle: "6 friends. 6 phones. One case.",
  socialDescription:
    "A murder-mystery party on everyone's phone: print 8 cards, tape them up around the house, and solve one case together in about 45 minutes.",
  keywords: [
    "murder mystery party game", "murder mystery party on phones", "murder mystery game for adults", "printable murder mystery party",
    "escape room party at home", "family gathering game", "dinner party mystery game", "1920s murder mystery party",
    "train murder mystery game", "group night game", "youth leaders' night game", "escape room on phones",
  ],
});

const ROOMS = [
  {
    icon: "🚂",
    title: "Murder on the Alpine Star",
    setting: "The night express from Paris to Milan, February 1937",
    premise:
      "A London newspaper owner is found dead in his sleeping compartment as the train comes out of the Simplon Tunnel, and six passengers had a reason. The police have held the train at the frontier until dawn.",
    note: "The plainer of the two — a good first case.",
  },
  {
    icon: "🕯️",
    title: "Murder at Quillhurst Hall",
    setting: "An English country house, midsummer 1924",
    premise:
      "Sir Rupert Halloway dies at his study desk after the midsummer dinner, and six people under his roof had a reason. The Inspector has sealed the house until dawn.",
    note: "The harder of the two — for a group that likes a puzzle.",
  },
];

const STEPS = [
  {
    title: "Add the case to your account",
    body: "Join for free, open 🎉 Party Games and press Add to my sets on the mystery you want. A new account for friends and family, or for a church or youth group, has both already, in Starter sets.",
  },
  {
    title: "Print 8 cards and tape them up",
    body: "Each case has 8 stations — the rooms of the house, the cars of the train. Print the station cards and tape them up around the house before anyone arrives.",
  },
  {
    title: "Qrewzers → Everyone together → walking to stations",
    body: "On the Live page choose 🪖 Qrewzers, then 🏠 Everyone together under Who plays together?, then walking to stations. Put the room code on the TV.",
  },
  {
    title: "Everyone joins on their own phone",
    body: "Guests join with the room code at play.qrewzi.com — no app, no accounts. They form groups of up to three at the first card they scan, and every group works the same case.",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "How many people can play?",
    a: "It is written for about six — two groups of three working one case. A bigger party still plays one case together: groups of up to three form at the stations, and everything any group finds is in everyone's satchel.",
  },
  {
    q: "How long does it take?",
    a: "About 45 to 50 minutes: 8 stations to search, five locks to open, then the murderer to name.",
  },
  {
    q: "Do the guests need an app or an account?",
    a: "No. They join with your room code at play.qrewzi.com in any phone's browser, or in the free Qrewzi app.",
  },
  {
    q: "What happens if two groups go to the same station?",
    a: "Qrewzi deals each group a station nobody has solved yet. If a station is solved while a group is on it, they're told, and can move on to a new one or look at the evidence anyway.",
  },
  {
    q: "Is it for children?",
    a: "These two are written for adults: each is a death, off stage, in the 1920s or the 1930s, and a case to reason through. For a younger group, make an escape room of your own on any theme — a birthday, a Bible story, a holiday.",
  },
  {
    q: "What does it cost?",
    a: "Your first three months of everything are free, no card needed. After that there's a Free plan or paid plans.",
  },
];

export default function MurderMysteryPartyPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">Parties · family gatherings · group nights</div>
          <h1 style={{ marginTop: 12 }}>A murder-mystery party,<br />on everyone&rsquo;s phone.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            Six friends, six phones, one case, about 45 minutes. Print 8 cards and tape them up around the house;
            everyone searches for the evidence, opens the locks together and names the murderer.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <a href="https://play.qrewzi.com/?demo=family" target="_blank" rel="noopener" className="btn btn-secondary">Try a demo game →</a>
          </div>
        </div>
      </section>

      {/* ============================ AT A GLANCE ============================ */}
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            <Stat big="6" small="friends — or more" />
            <Stat big="6" small="phones, one each" />
            <Stat big="1" small="case, solved together" />
            <Stat big="~45" small="minutes" />
            <Stat big="8" small="cards to print" />
          </div>
        </div>
      </section>

      {/* ============================ THE TWO CASES ============================ */}
      <section id="cases" className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)", scrollMarginTop: 70 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow">🔎 Ready-made, for adults</div>
          <h2 style={{ marginTop: 12 }}>Two cases, ready to play.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--slate)", lineHeight: 1.6, maxWidth: "70ch" }}>
            Each has eight stations to search, five locks to open and one name to give at the end. Nothing here
            gives a case away — not the evidence, not the suspects, not the answer.
          </p>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {ROOMS.map((r) => (
              <div key={r.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 34, lineHeight: 1 }} aria-hidden="true">{r.icon}</div>
                <h3 style={{ marginTop: 12, fontSize: 22 }}>{r.title}</h3>
                <div style={{ marginTop: 6, fontWeight: 900, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--coral)" }}>{r.setting}</div>
                <p style={{ marginTop: 12, color: "var(--slate)", fontSize: 15.5, lineHeight: 1.6 }}>{r.premise}</p>
                <p style={{ marginTop: 10, fontSize: 14.5, fontWeight: 700 }}>{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ ONE CASE TOGETHER ============================ */}
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow">🏠 Everyone together</div>
          <h2 style={{ marginTop: 12 }}>One case. Nobody solves it alone.</h2>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Mini title="Shared evidence" body="Everything any group finds goes in everyone's satchel, and the whole party hears when a station is solved or a lock opens." />
            <Mini title="Locks you open together" body="The locks open with the evidence, so what one group finds is what the next lock needs — and what's inside a lock is everyone's." />
            <Mini title="No station done twice" body="Qrewzi deals each group a station nobody has solved yet, and the case board shows what is still missing and where it comes from." />
            <Mini title="The accusation" body="When the locks are open, the party names the murderer. One wrong name gives nothing away." />
          </div>
        </div>
      </section>

      {/* ============================ SET-UP ============================ */}
      <section id="setup" className="section-tight" style={{ background: "var(--butter)", scrollMarginTop: 70 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow" style={{ color: "var(--navy)" }}>🧾 Setting it up</div>
          <h2 style={{ marginTop: 12 }}>Four steps before the guests arrive.</h2>
          <ol style={{ marginTop: 24, display: "grid", gap: 14, padding: 0, listStyle: "none" }}>
            {STEPS.map((s, i) => (
              <li key={s.title} className="card" style={{ padding: 22, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ flex: "0 0 auto", width: 40, height: 40, borderRadius: 999, background: "var(--navy)", color: "var(--cream)", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 18 }}>{i + 1}</div>
                <div>
                  <h3 style={{ fontSize: 18 }}>{s.title}</h3>
                  <p style={{ marginTop: 6, color: "var(--slate)", fontSize: 15.5, lineHeight: 1.6 }}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/teacher/ai-tasksets?mode=party" className="btn btn-primary">Open Party Games →</a>
            <a href="https://set.qrewzi.com/signup" className="btn btn-secondary">Join for free</a>
          </div>
        </div>
      </section>

      {/* ============================ YOUR OWN ============================ */}
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow">✨ Any theme</div>
          <h2 style={{ marginTop: 12 }}>Or make your own.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--slate)", lineHeight: 1.6, maxWidth: "70ch" }}>
            Qrewzi can make an escape room on any theme — a birthday, a Bible story for a youth night, a holiday. Type
            the topic and the theme, and the stations, the evidence and the locks are written for you.
          </p>
          <p style={{ marginTop: 16 }}>
            <Link href="/escape-rooms" style={{ fontWeight: 900 }}>How Qrewzi escape rooms work →</Link>
            <span style={{ margin: "0 10px", color: "var(--slate)" }}>·</span>
            <Link href="/youth-groups" style={{ fontWeight: 900 }}>For youth groups →</Link>
          </p>
        </div>
      </section>

      <Faq items={FAQ} title="Before the party" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Host your murder-mystery night on Qrewzi.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Your first three months of everything are free, no card needed.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <a href="https://play.qrewzi.com/?demo=family" target="_blank" rel="noopener" className="btn btn-ghost" style={{ color: "var(--cream)" }}>Try a demo game</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ big, small }: { big: string; small: string }) {
  return (
    <div className="card" style={{ padding: "18px 16px", textAlign: "center" }}>
      <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1, color: "var(--navy)" }}>{big}</div>
      <div style={{ marginTop: 6, fontSize: 14, color: "var(--slate)", fontWeight: 700 }}>{small}</div>
    </div>
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
