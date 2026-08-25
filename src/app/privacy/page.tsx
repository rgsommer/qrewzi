export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <h1>Privacy</h1>
        <p style={{ marginTop: 24, fontSize: 15, color: "var(--slate)" }}>
          Last updated: placeholder — replace before public launch.
        </p>
        <div style={{ marginTop: 32, display: "grid", gap: 20, color: "var(--navy)", fontSize: 16, lineHeight: 1.7 }}>
          <p>
            Qrewzi is designed for K–12 classrooms. Students join teacher-hosted
            sessions with a room code — no student accounts, no advertising, no
            third-party trackers. Teacher accounts store only the data
            required to run sessions and generate reports.
          </p>
          <p>
            <b>What we collect from students:</b> team + member name, task
            answers, and optional camera/microphone/motion data for specific
            task types (only while that task is active). No location, no ad
            identifiers, no third-party sharing.
          </p>
          <p>
            <b>What we collect from teachers:</b> name, school email, school
            or district name, and gameplay analytics for the classes you run.
            Payment info (once out of beta) is processed by Stripe; we never see
            card numbers.
          </p>
          <p>
            <b>Retention:</b> we keep session data for as long as the teacher
            wants to view historical reports. Delete-my-account is a one-click
            action once out of beta.
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
