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
        {/* The site is the brand; the game and the teacher's screens live at
            play. and set. — so a student who typed qrewzi.com, or a teacher
            who did, is one tap from where they meant to go. On a phone the
            reading links fold away and those two stay. */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 18, fontWeight: 700, fontSize: 15 }}
        >
          <Link href="/how-it-works" className="hide-sm" style={{ color: "var(--navy)" }}>How it works</Link>
          <Link href="/features" className="hide-sm" style={{ color: "var(--navy)" }}>Features</Link>
          <Link href="/pricing" className="hide-sm" style={{ color: "var(--navy)" }}>Pricing</Link>
          <a href="https://set.qrewzi.com/" style={{ color: "var(--navy)" }}>Sign in</a>
          <a href="https://play.qrewzi.com/" className="btn btn-secondary" style={{ padding: "8px 16px", fontSize: 14 }}>
            🎮 Join a game
          </a>
          {/* An account of your own, straight away — teachers, youth leaders, churches. */}
          <a href="https://set.qrewzi.com/signup" className="btn btn-primary hide-sm" style={{ padding: "10px 18px", fontSize: 14 }}>
            Sign up free
          </a>
        </nav>
      </div>
    </header>
  );
}
