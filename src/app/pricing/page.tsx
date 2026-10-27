import Link from "next/link";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  path: "/pricing",
  title: "Pricing — three months free, then a plan that fits",
  description:
    "Your first three months of Qrewzi free — every task type, game mode and trivia night. No card needed. Then the Free plan or a paid one; district pricing on request.",
  socialDescription: "Your first three months free, no card needed. District pricing on request.",
  keywords: ["free classroom game app", "Kahoot alternative free", "free trial classroom game", "trivia night software", "school district pricing"],
});

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

        {/* The trivia-night limits by plan, as the server enforces them
            (shared/trivia/limits.js and the custom-topic route in the
            Curriculate repo). */}
        <div className="card" style={{ marginTop: 56, textAlign: "left" }}>
          <h2 style={{ fontSize: 24 }}>Trivia nights by plan</h2>
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
              <PlanRow plan="Pro" minutes="90 minutes" devices="Any number" own="Yes" />
            </tbody>
          </table>
          <p style={{ marginTop: 14, fontSize: 14, color: "var(--slate)" }}>
            Every plan draws from all nine question banks. <Link href="/trivia-night">How a trivia night runs →</Link>
          </p>
        </div>
      </div>
    </section>
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
