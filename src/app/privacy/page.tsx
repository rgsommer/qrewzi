import Link from "next/link";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  path: "/privacy",
  title: "Privacy — no student accounts, no trackers",
  description:
    "How Qrewzi handles student and teacher data. Built for K-12: students join with a room code and no account, no third-party trackers, no ad identifiers, reports go only to the teacher.",
  socialTitle: "Qrewzi — Privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <h1>Privacy</h1>
        <p style={{ marginTop: 24, fontSize: 15, color: "var(--slate)" }}>
          Last updated: October 31, 2026
        </p>
        <div style={{ marginTop: 32, display: "grid", gap: 20, color: "var(--navy)", fontSize: 16, lineHeight: 1.7 }}>
          <p>
            Qrewzi is designed for K–12 classrooms. Students join teacher-hosted
            sessions with a room code — no student accounts, no advertising, no
            third-party trackers. Teacher accounts store only the data
            required to run sessions and generate reports.
          </p>
          <p>
            <b>What we collect from students:</b> team and member names, task
            answers, and camera, microphone or motion data for the task types that
            use them (only while that task is active). Optionally, an email address,
            if a student asks for their results and streak by email. The app keeps
            a random code on the device so a tablet can rejoin its team after a
            reload. When a student sends a bug report from the app, it carries the
            device type, the screen they were on, recent errors and the approximate
            city the report came from (worked out from the network, never GPS). No
            precise location, no ad identifiers, no third-party tracking.
          </p>
          <p>
            <b>What we collect from teachers:</b> name, school email, school
            or district name, and gameplay analytics for the classes you run.
            Payment info is processed by Stripe; we never see
            card numbers.
          </p>
          <p>
            <b>Who else handles it:</b> we never sell data or use it for advertising.
            A few service providers process it on our behalf and for no other
            purpose — hosting and storage, sending email, and AI scoring of written
            answers.
          </p>
          <p>
            <b>Retention and deletion:</b> we keep session data for as long as the
            teacher wants to view historical reports. Anyone can ask for their data to
            be deleted, and we delete it within 30 days — see{" "}
            <Link href="/delete-data">how to delete your data</Link> for the steps and
            what is kept.
          </p>
          <p>
            <b>Contact:</b> privacy questions to{" "}
            <a href="mailto:privacy@qrewzi.com">privacy@qrewzi.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
