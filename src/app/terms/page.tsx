import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Qrewzi Terms of Service. Beta terms and general use covering data, subscriptions, and school-district compliance.",
  alternates: { canonical: "https://qrewzi.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <h1>Terms of Service</h1>
        <p style={{ marginTop: 24, fontSize: 15, color: "var(--slate)" }}>
          Last updated: placeholder — replace with formal terms before public launch.
        </p>
        <div style={{ marginTop: 32, display: "grid", gap: 20, color: "var(--navy)", fontSize: 16, lineHeight: 1.7 }}>
          <p>
            By using Qrewzi you agree to use it in a classroom setting for
            educational purposes, in compliance with your school's acceptable-use
            policy and applicable K–12 privacy law.
          </p>
          <p>
            Beta access is provided free during the beta period. Beta
            participation grants us permission to use anonymized session
            metrics to improve the product. We won't identify you or your
            students in any external communication without explicit consent.
          </p>
          <p>
            Full commercial terms will be published before beta ends. Existing
            beta teachers get 60 days' notice of any change.
          </p>
        </div>
      </div>
    </section>
  );
}
