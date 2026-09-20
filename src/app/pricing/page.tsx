import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — free for a full year for beta teachers",
  description:
    "Qrewzi is free for a full year for beta teachers: every task type, GameMaster mode and reports. The only ask is one game a month and honest feedback. Beta teachers are grandfathered into launch pricing; district pricing on request.",
  alternates: { canonical: "https://qrewzi.com/pricing" },
  keywords: ["free classroom game app", "Kahoot alternative free", "teacher beta program", "school district pricing"],
  openGraph: {
    title: "Pricing — a full year free for beta teachers",
    description:
      "Free for a full year in beta, grandfathered at launch. District pricing on request.",
    url: "https://qrewzi.com/pricing",
  },
  twitter: {
    title: "Pricing — a full year free for beta teachers",
    description:
      "Free for a full year in beta, grandfathered at launch. District pricing on request.",
  },
};

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
        <div className="eyebrow">Pricing</div>
        <h1 style={{ marginTop: 12 }}>Free for a full year.</h1>
        <p style={{ marginTop: 20, fontSize: 18, color: "var(--slate)" }}>
          Every beta teacher gets the complete Qrewzi product free for a{" "}
          <strong>full year</strong> — every task type, GameMaster mode, and
          parent-ready reports, all of it. The only ask: run a game with your
          class at least once a month and send us honest feedback.
        </p>
        <p style={{ marginTop: 16, fontSize: 16, color: "var(--slate)" }}>
          When we open general availability we&rsquo;ll publish the tiers here —
          and beta teachers are grandfathered into the best price. You test it
          while it&rsquo;s free; we earn the paid version later.
        </p>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link href="/beta" className="btn btn-primary">Join the beta</Link>
          <a href="mailto:hello@qrewzi.com" className="btn btn-secondary">Ask about districts</a>
        </div>
      </div>
    </section>
  );
}
