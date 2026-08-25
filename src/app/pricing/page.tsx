import Link from "next/link";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
        <div className="eyebrow">Beta pricing</div>
        <h1 style={{ marginTop: 12 }}>Free for teachers during beta.</h1>
        <p style={{ marginTop: 20, fontSize: 18, color: "var(--slate)" }}>
          Every teacher in the Qrewzi beta gets the full product free
          through the end of the school year. When we open general availability
          we'll publish the tiers here — beta teachers are grandfathered in.
        </p>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Link href="/beta" className="btn btn-primary">Join the beta</Link>
          <a href="mailto:hello@qrewzi.com" className="btn btn-secondary">Ask about districts</a>
        </div>
      </div>
    </section>
  );
}
