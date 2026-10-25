
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — three months free, then a plan that fits",
  description:
    "Make a Qrewzi account and your first three months of everything are free — every task type, GameMaster mode, trivia nights and reports. No card needed. Then keep the Free plan or choose a paid one; district pricing on request.",
  alternates: { canonical: "https://qrewzi.com/pricing" },
  keywords: ["free classroom game app", "Kahoot alternative free", "free trial classroom game", "school district pricing"],
  openGraph: {
    title: "Pricing — three months free, then a plan that fits",
    description:
      "Your first three months free, no card needed. District pricing on request.",
    url: "https://qrewzi.com/pricing",
  },
  twitter: {
    title: "Pricing — three months free, then a plan that fits",
    description:
      "Your first three months free, no card needed. District pricing on request.",
  },
};

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
        <div className="eyebrow">Pricing</div>
        <h1 style={{ marginTop: 12 }}>Three months free.</h1>
        <p style={{ marginTop: 20, fontSize: 18, color: "var(--slate)" }}>
          For a limited time, a new account gets the complete Qrewzi product free for its first{" "}
          <strong>three months</strong> — every task type, GameMaster mode, trivia nights and
          parent-ready reports. No card needed.
        </p>
        <p style={{ marginTop: 16, fontSize: 16, color: "var(--slate)" }}>
          After that, carry on with the Free plan, or choose a paid plan from inside the app when
          you want longer trivia nights, bigger rooms and your own trivia topics.
        </p>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
          <a href="mailto:hello@qrewzi.com" className="btn btn-secondary">Ask about districts</a>
        </div>
      </div>
    </section>
  );
}
