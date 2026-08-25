import Link from "next/link";
import Wordmark from "./Wordmark";

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--navy)", color: "var(--cream)", marginTop: 40 }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          padding: "64px 0 40px",
          alignItems: "start",
        }}
      >
        <div>
          <Wordmark height={40} markFill="var(--coral)" wordFill="var(--cream)" markHole="var(--navy)" />
          <p style={{ marginTop: 16, color: "var(--slate-soft)", maxWidth: 360, fontSize: 15 }}>
            The classroom game engine. Live, team-based, AI-generated lessons that get kids up
            on their feet. Made for K–12.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            fontSize: 14,
          }}
        >
          <FooterCol title="Product">
            <FLink href="/how-it-works">How it works</FLink>
            <FLink href="/features">Features</FLink>
            <FLink href="/pricing">Pricing</FLink>
            <FLink href="/beta">Join the beta</FLink>
          </FooterCol>
          <FooterCol title="Company">
            <FLink href="/about">About</FLink>
            <FLink href="mailto:hello@qrewzi.com">Contact</FLink>
          </FooterCol>
          <FooterCol title="Legal">
            <FLink href="/privacy">Privacy</FLink>
            <FLink href="/terms">Terms</FLink>
          </FooterCol>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(254, 249, 240, 0.12)",
          padding: "20px 0",
          fontSize: 13,
          color: "var(--slate-soft)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} Qrewzi · Hamilton, ON</div>
          <div>Grading? See our sister product <a href="https://curriculate.net/grading" style={{ color: "var(--butter)" }}>Pulse Grading</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12, color: "var(--butter)" }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{children}</div>
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const style: React.CSSProperties = { color: "var(--cream)", fontWeight: 700 };
  return external ? (
    <a href={href} style={style}>{children}</a>
  ) : (
    <Link href={href} style={style}>{children}</Link>
  );
}
