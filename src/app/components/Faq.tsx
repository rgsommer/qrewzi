import JsonLd from "./JsonLd";

export type FaqItem = { q: string; a: string };

// A page's questions, shown on the page and given to search engines as
// FAQPage data from the same list, so the two can never say different things.
export default function Faq({ items, title = "Questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="section-tight">
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="eyebrow" style={{ textAlign: "center" }}>FAQ</div>
        <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>{title}</h2>
        <div style={{ display: "grid", gap: 14 }}>
          {items.map((f) => (
            <div key={f.q} className="card" style={{ padding: 22 }}>
              <h3 style={{ fontSize: 18 }}>{f.q}</h3>
              <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15.5, lineHeight: 1.6 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}
