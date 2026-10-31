import Link from "next/link";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  path: "/delete-data",
  title: "Delete your Qrewzi data",
  description:
    "How to ask for your Qrewzi data to be deleted — students and teachers — what is deleted, what is kept, and how long it takes.",
  socialTitle: "Delete your Qrewzi data",
});

// The page Google Play links as the app's "Delete data URL": it must name the
// app, put the steps first, and say what is deleted, what is kept and for how
// long. The owner's terms (2026-10-31): deleted within 30 days; kept are
// teacher billing records for as long as tax law requires, and totals that
// name no one.
const H = { fontSize: 22, marginTop: 8 } as const;
const P = { color: "var(--navy)", fontSize: 16, lineHeight: 1.7 } as const;

export default function DeleteDataPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <div className="eyebrow">Your data</div>
        <h1 style={{ marginTop: 12 }}>Delete your Qrewzi data</h1>
        <p style={{ ...P, marginTop: 20 }}>
          This is for the <b>Qrewzi</b> app and website (Qrewzi: Classroom Team Games), made by
          Applicable Software Inc. — listed as Curriculate on Google Play. Anyone who has played or
          hosted a game can ask for their data to be deleted.
        </p>

        <div style={{ marginTop: 28, padding: 24, borderRadius: 16, background: "var(--cream-shade)", border: "2px solid var(--navy)" }}>
          <h2 style={H}>How to ask</h2>
          <ol style={{ ...P, marginTop: 12, paddingLeft: 22, display: "grid", gap: 8 }}>
            <li>
              Email <a href="mailto:hello@qrewzi.com?subject=Delete%20my%20data" style={{ color: "var(--coral)", fontWeight: 700 }}>hello@qrewzi.com</a>{" "}
              with the subject <b>“Delete my data”</b>.
            </li>
            <li>
              Tell us whose data it is so we can find it:
              <ul style={{ paddingLeft: 20, marginTop: 6 }}>
                <li><b>A teacher or host:</b> the email address of your Qrewzi account.</li>
                <li>
                  <b>A student:</b> the email you gave for your results, if you gave one; otherwise
                  your name as you typed it, your team&apos;s name, and your teacher&apos;s name or
                  school. A parent or guardian can ask on a student&apos;s behalf.
                </li>
              </ul>
            </li>
            <li>We reply to confirm, and delete the data <b>within 30 days</b> of your request.</li>
          </ol>
        </div>

        <h2 style={{ ...H, marginTop: 36 }}>What is deleted</h2>
        <ul style={{ ...P, marginTop: 10, paddingLeft: 22, display: "grid", gap: 6 }}>
          <li><b>Students:</b> your name and team name in game reports, your answers, drawings, photos and recordings, the email and streak kept for your results, and any bug reports you sent.</li>
          <li><b>Teachers and hosts:</b> your account, your task sets, the reports of the games you ran, and your class lists.</li>
        </ul>

        <h2 style={{ ...H, marginTop: 28 }}>What is kept</h2>
        <ul style={{ ...P, marginTop: 10, paddingLeft: 22, display: "grid", gap: 6 }}>
          <li>
            <b>Billing records for paid teacher accounts</b> — invoices and payment records, held by
            our payment processor Stripe — for as long as tax law requires (in Canada, generally six years).
          </li>
          <li>
            <b>Totals that name no one</b>, such as how many games were played in a month. They cannot
            be traced back to you.
          </li>
        </ul>
        <p style={{ ...P, marginTop: 12 }}>
          Nothing else that names you is kept. Copies in our encrypted database backups are never
          restored into use and are removed as those backups expire.
        </p>

        <p style={{ ...P, marginTop: 28, color: "var(--slate)" }}>
          More about what we collect and why is in our <Link href="/privacy" style={{ color: "var(--coral)", fontWeight: 700 }}>privacy policy</Link>.
          Questions: <a href="mailto:hello@qrewzi.com" style={{ color: "var(--coral)", fontWeight: 700 }}>hello@qrewzi.com</a>.
        </p>
      </div>
    </section>
  );
}
