import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="eyebrow">About</div>
        <h1 style={{ marginTop: 12 }}>Made for teachers who move.</h1>

        <div style={{ marginTop: 32, display: "grid", gap: 24, fontSize: 17, color: "var(--slate)", lineHeight: 1.7 }}>
          <p>
            Qrewzi started as the classroom game half of{" "}
            <a href="https://curriculate.net">Curriculate</a>. The other half — Pulse Grading —
            saves teachers hours on marking. This half turns a lesson into
            a room-wide team game kids actually want to play.
          </p>
          <p>
            The name is a mash-up of <b>QR</b> (the scan mechanic — kids run
            around the room scanning stations) and <b>crew</b> (kids play in
            teams). The mascot's name is <b>Qrew</b>. 🦊
          </p>
          <p>
            We're a small team in Hamilton, Ontario. If Qrewzi is a
            good fit for your class or district, we want to hear from you
            directly.
          </p>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/beta" className="btn btn-primary">Join the beta</Link>
          <a href="mailto:hello@qrewzi.com" className="btn btn-secondary">Email us</a>
        </div>
      </div>
    </section>
  );
}
