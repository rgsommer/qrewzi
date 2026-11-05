import Link from "next/link";
import Faq, { type FaqItem } from "./Faq";

// One shape for the pages that answer a teacher's question in so many words
// ("what's a good classroom scavenger hunt app?", "a Goosechase alternative
// for schools?"): the answer first, in plain sentences an assistant can quote,
// then how it runs, why it works, a comparison where there is one, the
// questions (as FAQPage data, through Faq), and where to go next.

export type GuideStep = { emoji: string; name: string; body: string };
export type GuidePoint = { emoji: string; title: string; body: string };
export type GuideCompare = { them: string; rows: { label: string; them: string; us: string }[]; note?: string };
export type GuideLink = { href: string; label: string };

export default function GuidePage({
  eyebrow,
  title,
  answer,
  primary = { href: "https://set.qrewzi.com/signup", label: "Join for free" },
  secondary = { href: "https://set.qrewzi.com/demo", label: "Try the live demo →" },
  stepsTitle,
  steps,
  pointsTitle,
  points,
  compare,
  faqTitle,
  faq,
  related,
}: {
  eyebrow: string;
  title: string;
  /** The answer to the page's question, in two or three plain paragraphs. */
  answer: string[];
  primary?: GuideLink;
  secondary?: GuideLink;
  stepsTitle: string;
  steps: GuideStep[];
  pointsTitle: string;
  points: GuidePoint[];
  compare?: GuideCompare;
  faqTitle: string;
  faq: FaqItem[];
  related: GuideLink[];
}) {
  return (
    <>
      {/* ============================ THE ANSWER ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">{eyebrow}</div>
          <h1 style={{ marginTop: 12 }}>{title}</h1>
          {answer.map((p, i) => (
            <p key={i} style={{ marginTop: i ? 14 : 24, fontSize: i ? 17 : 20, color: "var(--slate)", lineHeight: 1.55, maxWidth: "62ch", marginLeft: "auto", marginRight: "auto" }}>
              {p}
            </p>
          ))}
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={primary.href} className="btn btn-primary">{primary.label}</a>
            <a href={secondary.href} className="btn btn-secondary">{secondary.label}</a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
            On phones, tablets and Chromebooks. Students join with a room code — no accounts, nothing to install.
          </p>
        </div>
      </section>

      {/* ============================ HOW IT RUNS ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>How it runs</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>{stepsTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {steps.map((s, i) => (
              <div key={s.name} className="card">
                <div style={{ fontSize: 13, fontWeight: 900, color: "var(--coral)", letterSpacing: "0.12em" }}>STEP {i + 1}</div>
                <h3 style={{ fontSize: 18, marginTop: 6 }}><span aria-hidden="true">{s.emoji}</span> {s.name}</h3>
                <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHY ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Why it works</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>{pointsTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {points.map((p) => (
              <div key={p.title} style={{ padding: 20, borderRadius: 16, background: "var(--cream-shade)", border: "2px solid var(--navy)" }}>
                <div style={{ fontSize: 26 }} aria-hidden="true">{p.emoji}</div>
                <h3 style={{ fontSize: 17, marginTop: 8 }}>{p.title}</h3>
                <p style={{ marginTop: 6, fontSize: 14.5, color: "var(--slate)", lineHeight: 1.5 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ COMPARED ============================ */}
      {compare && (
        <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
          <div className="container" style={{ maxWidth: 920 }}>
            <div className="eyebrow" style={{ textAlign: "center" }}>Side by side</div>
            <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 28 }}>{compare.them} and Qrewzi</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, minWidth: 560 }}>
                <thead>
                  <tr>
                    <th style={th} />
                    <th style={th}>{compare.them}</th>
                    <th style={{ ...th, color: "var(--coral)" }}>Qrewzi</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.rows.map((r) => (
                    <tr key={r.label}>
                      <td style={{ ...td, fontWeight: 800, color: "var(--navy)", width: "22%" }}>{r.label}</td>
                      <td style={td}>{r.them}</td>
                      <td style={td}>{r.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {compare.note && <p style={{ marginTop: 16, fontSize: 14, color: "var(--slate)", textAlign: "center", lineHeight: 1.55 }}>{compare.note}</p>}
          </div>
        </section>
      )}

      <Faq items={faq} title={faqTitle} />

      {/* ============================ NEXT ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 760 }}>
          <h2 style={{ color: "var(--cream)" }}>Describe the lesson. Press Start.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Your first three months of everything are free, no card needed. After that, carry on with the
            Free plan or choose a paid one.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <Link href="/how-it-works" className="btn btn-ghost" style={{ color: "var(--cream)" }}>How it works</Link>
          </div>
          <p style={{ marginTop: 24, fontSize: 15, color: "var(--cream)", opacity: 0.85 }}>
            {related.map((l, i) => (
              <span key={l.href}>
                {i ? " · " : "See also: "}
                <Link href={l.href} style={{ color: "var(--butter)" }}>{l.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}

const th = { textAlign: "left" as const, padding: "10px 12px", borderBottom: "2px solid var(--navy)", fontSize: 14, letterSpacing: "0.04em" };
const td = { padding: "12px", borderBottom: "1px solid rgba(15,23,42,0.12)", verticalAlign: "top" as const, color: "var(--slate)", lineHeight: 1.5 };
