import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { pageMetadata } from "../seo";
import RefLink from "./RefLink";

export const metadata = pageMetadata({
  path: "/pricing",
  title: "Pricing — three months free, then Free, Plus or Pro",
  description:
    "Every new Qrewzi account gets three months of everything, free, no card. Then the Free plan, Plus at $6.99 CAD a month, Pro at $12.99, or a school plan.",
  socialDescription: "Three months of everything, free, no card. Then Free, Plus at $6.99 or Pro at $12.99 CAD a month, or a yearly school plan.",
  keywords: [
    "free classroom game app", "Kahoot alternative free", "free trial classroom game", "trivia night software",
    "classroom game pricing", "school plan classroom games", "school district pricing",
  ],
});

// Sign-up and checkout both live on set.qrewzi.com: "Choose Plus" opens
// /upgrade there, which asks a new teacher to make an account first and comes
// back. An agent's ?ref= on this page rides along (RefLink).
const SET = "https://set.qrewzi.com";
const upgrade = (plan: string) => `${SET}/upgrade?plan=${plan}`;

// What each plan includes is what the server unlocks for it, and nothing
// else (Curriculate repo: shared/trivia/limits.js for trivia nights;
// hasTierAtLeast(…, "PLUS") for class lists in backend/index.js and
// routes/classRoster.js; routes/reports.js for the Edsby CSV;
// email/transcriptEmailer.js for the per-student pages and the trend;
// routes/tasksets.js for custom trivia topics).
const FREE = [
  "Live games: every task type and game mode",
  "ImagineIt outdoor photo hunts",
  "A report by email after every session",
  "Trivia nights up to 30 minutes, 12 devices",
];
const PLUS = [
  "Class lists and groups, with student and parent emails",
  "A one-page report for each student",
  "Edsby CSV matched to your class list",
  "Trivia nights up to 1 hour, 40 devices",
];
const PRO = [
  "Each student's progress trend in your reports",
  "Trivia nights on your own topic",
  "Trivia nights up to 2 hours, any number of devices",
];

export default function PricingPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 760 }}>
          <div className="eyebrow">Pricing</div>
          <h1 style={{ marginTop: 12 }}>Three months free.</h1>
          <p style={{ marginTop: 20, fontSize: 18, color: "var(--slate)" }}>
            Every new account gets all of Qrewzi — everything in Pro — free for its first{" "}
            <strong>three months</strong>. No card needed.
          </p>
          <p style={{ marginTop: 12, fontSize: 16, color: "var(--slate)" }}>
            After that the account carries on with the Free plan, or with the plan you choose. Choose one during
            your free months and the first payment waits until they end.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <RefLink href={`${SET}/signup`} className="btn btn-primary" data-plan="FREE">Start free</RefLink>
            <a href="mailto:hello@qrewzi.com" className="btn btn-secondary">Ask about districts</a>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "clamp(48px, 6vw, 88px)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
              alignItems: "stretch",
            }}
          >
            <Tier
              name="Free"
              price="$0"
              per="for as long as you like"
              items={FREE}
              cta={<RefLink href={`${SET}/signup`} className="btn btn-secondary" style={ctaStyle} data-plan="FREE">Start free</RefLink>}
            />
            <Tier
              name="Plus"
              price="$6.99"
              per="CAD / month"
              lead="Everything in Free, and:"
              items={PLUS}
              cta={<RefLink href={upgrade("TEACHER_PLUS")} className="btn btn-primary" style={ctaStyle} data-plan="TEACHER_PLUS">Choose Plus</RefLink>}
            />
            <Tier
              name="Pro"
              price="$12.99"
              per="CAD / month"
              lead="Everything in Plus, and:"
              items={PRO}
              accent
              cta={<RefLink href={upgrade("TEACHER_PRO")} className="btn btn-primary" style={ctaStyle} data-plan="TEACHER_PRO">Choose Pro</RefLink>}
            />
            <SchoolTier />
          </div>
          <p style={{ marginTop: 18, fontSize: 14, color: "var(--slate)", textAlign: "center" }}>
            Prices in Canadian dollars. Change or cancel from My Plan in the app.
          </p>
        </div>
      </section>

      {/* The trivia-night limits by plan, as the server enforces them
          (shared/trivia/limits.js and the custom-topic route in the
          Curriculate repo). */}
      <section style={{ paddingBottom: "clamp(64px, 8vw, 120px)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card">
            <h2 style={{ fontSize: 24 }}>Trivia nights by plan</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ marginTop: 16, width: "100%", borderCollapse: "collapse", fontSize: 15, color: "var(--navy)" }}>
                <thead>
                  <tr style={{ textAlign: "left", borderBottom: "2px solid var(--navy)" }}>
                    <th scope="col" style={{ padding: "8px 6px" }}>Plan</th>
                    <th scope="col" style={{ padding: "8px 6px" }}>Longest night</th>
                    <th scope="col" style={{ padding: "8px 6px" }}>Devices</th>
                    <th scope="col" style={{ padding: "8px 6px" }}>Your own topic</th>
                  </tr>
                </thead>
                <tbody>
                  <PlanRow plan="Free" minutes="30 minutes" devices="Up to 12" own="—" />
                  <PlanRow plan="Plus" minutes="1 hour" devices="Up to 40" own="—" />
                  <PlanRow plan="Pro" minutes="2 hours" devices="Any number" own="Yes" />
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 14, fontSize: 14, color: "var(--slate)" }}>
              Every plan draws from all nine question banks. <Link href="/trivia-night">How a trivia night runs →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const ctaStyle: CSSProperties = { width: "100%", justifyContent: "center" };

function Tier({
  name,
  price,
  per,
  lead,
  items,
  cta,
  accent,
}: {
  name: string;
  price: string;
  per: string;
  lead?: string;
  items: string[];
  cta: ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className="card"
      data-tier={name}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 24,
        borderColor: accent ? "var(--coral)" : "var(--navy)",
        boxShadow: accent ? "0 10px 30px rgba(255, 77, 91, 0.16)" : undefined,
      }}
    >
      <h2 style={{ fontSize: 22 }}>{name}</h2>
      <div style={{ marginTop: 10, display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "var(--navy)" }}>{price}</span>
        <span style={{ fontSize: 14, color: "var(--slate)", fontWeight: 700 }}>{per}</span>
      </div>
      {lead && <p style={{ marginTop: 14, fontSize: 14, fontWeight: 800, color: "var(--navy)" }}>{lead}</p>}
      <Ticks items={items} style={{ marginTop: lead ? 8 : 14 }} />
      <div style={{ marginTop: "auto", paddingTop: 20 }}>{cta}</div>
    </div>
  );
}

// Schools: the same features as Plus or Pro, on one invoice a year.
function SchoolTier() {
  return (
    <div className="card" data-tier="Schools" style={{ display: "flex", flexDirection: "column", padding: 24, background: "var(--cream)" }}>
      <h2 style={{ fontSize: 22 }}>Schools</h2>
      <p style={{ marginTop: 10, fontSize: 14, color: "var(--slate)" }}>Plus or Pro, paid once a year.</p>
      <SchoolOption name="School Plus" price="$399" note="Everything in Plus" plan="SCHOOL_PLUS" />
      <SchoolOption name="School Pro" price="$599" note="Everything in Pro" plan="SCHOOL_PRO" />
      <p style={{ marginTop: "auto", paddingTop: 16, fontSize: 14, color: "var(--slate)" }}>
        Several teachers, or a district? <a href="mailto:hello@qrewzi.com" style={{ fontWeight: 800 }}>Ask about districts</a>
      </p>
    </div>
  );
}

function SchoolOption({ name, price, note, plan }: { name: string; price: string; note: string; plan: string }) {
  return (
    <div style={{ marginTop: 14, padding: 14, borderRadius: 14, background: "#fff", border: "2px solid var(--navy)" }}>
      <div style={{ fontWeight: 900, color: "var(--navy)" }}>{name}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 2 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--navy)" }}>{price}</span>
        <span style={{ fontSize: 13, color: "var(--slate)", fontWeight: 700 }}>CAD / year</span>
      </div>
      <div style={{ fontSize: 14, color: "var(--slate)", marginTop: 2 }}>{note}</div>
      <RefLink href={upgrade(plan)} className="btn btn-secondary" style={{ ...ctaStyle, marginTop: 10, padding: "10px 12px", fontSize: 14, textAlign: "center" }} data-plan={plan}>
        Choose {name}
      </RefLink>
    </div>
  );
}

function Ticks({ items, style }: { items: string[]; style?: CSSProperties }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15, color: "var(--navy)", ...style }}>
      {items.map((t) => (
        <li key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          <span aria-hidden="true" style={{ color: "var(--coral)", fontWeight: 900 }}>✓</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanRow({ plan, minutes, devices, own }: { plan: string; minutes: string; devices: string; own: string }) {
  return (
    <tr style={{ borderBottom: "1px solid var(--cream-shade)" }}>
      <th scope="row" style={{ padding: "8px 6px", textAlign: "left" }}>{plan}</th>
      <td style={{ padding: "8px 6px" }}>{minutes}</td>
      <td style={{ padding: "8px 6px" }}>{devices}</td>
      <td style={{ padding: "8px 6px" }}>{own}</td>
    </tr>
  );
}
