import Link from "next/link";
import Wordmark from "./Wordmark";

export default function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--cream-shade)",
        background: "var(--cream)",
        position: "sticky",
        top: 0,
        zIndex: 30,
        backdropFilter: "saturate(1.4) blur(6px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "14px 0",
        }}
      >
        <Link href="/" aria-label="Qrewzi home" style={{ display: "flex", alignItems: "center" }}>
          <Wordmark height={36} />
        </Link>
        <nav
          style={{ display: "flex", alignItems: "center", gap: 20, fontWeight: 700, fontSize: 15 }}
        >
          <Link href="/how-it-works" style={{ color: "var(--navy)" }}>How it works</Link>
          <Link href="/features" style={{ color: "var(--navy)" }}>Features</Link>
          <Link href="/pricing" style={{ color: "var(--navy)" }}>Pricing</Link>
          <Link href="/beta" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 14 }}>
            Join the beta
          </Link>
        </nav>
      </div>
    </header>
  );
}
