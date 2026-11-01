import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/prayer",
  title: "Prayer Rounds — small-group prayer for churches and youth groups",
  description:
    "Prayer Rounds turns your prayer points into a prayer time for the whole room: everyone joins on their own phone, small groups pray at coloured signs round by round, and it ends with a closing prayer together.",
  socialTitle: "Prayer Rounds: pray together, in small groups",
  socialDescription:
    "Paste your prayer points. Everyone joins on their own phone; each round sends people in twos and threes to coloured signs, with a card of things to pray for and two Scripture promises.",
  keywords: [
    "small group prayer activity", "prayer stations", "prayer night ideas", "church prayer meeting ideas",
    "youth group prayer activity", "prayer walk stations", "guided prayer for groups", "prayer time for kids",
    "corporate prayer", "prayer meeting app", "Christian school chapel prayer",
  ],
});

// How a prayer time runs — the order backend/socket/prayerRounds.js plays it
// in, in the words the phones use (teacher-app PrayerHost.jsx, student-app
// TaskRunner.jsx).
const STEPS = [
  { emoji: "📱", name: "Gather", body: "Everyone joins on their own phone — they scan your code or type it in. Their phones show the opening while you welcome the room. Nobody moves yet." },
  { emoji: "📝", name: "Take the room's requests", body: "Ask what people would like prayed for and type them into your phone. They're shared out among the groups, a few to each card." },
  { emoji: "🟦", name: "Into small groups", body: "Each round the phones send people in twos and threes to coloured signs around the room. Each group's card has a title, a few points to pray for, some of the room's requests and two Scripture promises." },
  { emoji: "🙏", name: "One Amen per group", body: "Tap a point when it's prayed for, and the whole group sees the tick. One Amen from any phone and the group is done. The round ends when every group has said Amen, or when its time is up." },
  { emoji: "🔄", name: "Move on together", body: "New groups each round, with the fewest repeat pairings — so people pray with someone new and meet things to pray for they haven't seen yet." },
  { emoji: "🤝", name: "Close together", body: "After the last round everyone gathers for the closing prayer. Its card lists every request, and any point no group got to." },
];

// The sample prayer time: opened as an invitation, looked through, and led
// once from a phone with no account (backend routes/prayerCode.js
// GET /api/prayer/sample, teacher-app auth/prayerInvite.js).
const SAMPLE_URL = "https://set.qrewzi.com/prayer?sample";
const BUILD_URL = "https://set.qrewzi.com/prayer";

const FAQ: FaqItem[] = [
  {
    q: "Can I try it before making an account?",
    a: "Yes. Open the sample prayer time on this page and look through every round, then lead it from your phone with a few people, with no account at all. The room code it gives you works for twelve hours.",
  },
  {
    q: "Do people need an app or an account?",
    a: "No. They scan the code on your sheet or your phone, or type it in at play.qrewzi.com. It works in any phone browser, or in the free Qrewzi app if they already have it.",
  },
  {
    q: "Do I need a projector?",
    a: "No. You host from your phone. It shows the join code and starts each round, and the phones keep the time: a timer bar on every phone, and a soft chime as the round runs out.",
  },
  {
    q: "What do I give it?",
    a: "Whatever you have: a running order, a list of prayer points, or a theme and a few lines. Your own points lead, in your own words. What it adds grows out of them — it doesn't invent people, numbers or events you didn't name — and the Scripture promises are quoted from the NKJV.",
  },
  {
    q: "Can children and teens use it?",
    a: "Yes. Choose adults, teens or children. Adults pray in their own words from the points. For teens and children, each group's card also carries four short sentence prayers to read aloud in turn.",
  },
  {
    q: "How big are the groups, and how long is a round?",
    a: "Groups are two or three by default, and you can change the smallest group. A round is five minutes unless you change it. You can also give an end time instead, and the rounds share it out, keeping time for the closing.",
  },
  {
    q: "What about someone who can't move around easily?",
    a: "Their group can tick “We'll stay at this spot”, and the other groups come to them.",
  },
  {
    q: "What happens afterwards?",
    a: "When you end the prayer time, everyone's phone thanks them and a prayer report comes to your email: what the room prayed for, the requests, who was there, and a blessing.",
  },
  {
    q: "Can I share a prayer time with another leader?",
    a: "Yes. Send them the invitation link from your prayer set. They see the whole prayer time, round by round, before they're asked for anything. They can lead it once from their phone without an account, or make a free account and change the topics to fit their people.",
  },
  {
    q: "What does it cost?",
    a: "Make an account and your first three months of everything are free, with no card needed. The people praying never pay or sign up for anything.",
  },
];

export default function PrayerPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">🙏 Prayer Rounds · churches · youth groups · Christian schools</div>
          <h1 style={{ marginTop: 12 }}>Pray together,<br />in small groups.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            The phones get people into twos and threes and put God&rsquo;s Word in front of them.
            Someone who would never pray aloud in a big room often will in a group of three. Paste your
            prayer points, and Prayer Rounds turns them into an opening, up to seven rounds of
            small-group cards, and a closing prayer together.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={SAMPLE_URL} className="btn btn-primary">See a sample prayer time →</a>
            <a href={BUILD_URL} className="btn btn-secondary">Make your own</a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
            Everyone joins on their own phone — no app and no account for them. You host from yours.
          </p>
        </div>
      </section>

      {/* ============================ HOW IT RUNS ============================ */}
      <section id="how-it-runs" className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)", scrollMarginTop: 70 }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>How a prayer time runs</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Gather, pray in groups, move on together.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {STEPS.map((s, i) => (
              <div key={s.name} className="card">
                <div style={{ fontSize: 13, fontWeight: 900, color: "var(--coral)", letterSpacing: "0.12em" }}>STEP {i + 1}</div>
                <h3 style={{ fontSize: 18, marginTop: 6 }}><span aria-hidden="true">{s.emoji}</span> {s.name}</h3>
                <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ A CARD ============================ */}
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 980, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "center" }}>
          <div>
            <div className="eyebrow">What a group sees</div>
            <h2 style={{ marginTop: 12 }}>A card to pray through.</h2>
            <p style={{ marginTop: 16, fontSize: 17, color: "var(--slate)", lineHeight: 1.6 }}>
              Each group gets its own share of the round under a short title, so two groups at different
              signs aren&rsquo;t praying through the same list, and two Scripture promises to pray back to God.
            </p>
            <p style={{ marginTop: 12, fontSize: 17, color: "var(--slate)", lineHeight: 1.6 }}>
              Nobody has to lead the group. The card says what to pray for, the tick shows what&rsquo;s been
              prayed for, and an Amen says you&rsquo;re done.
            </p>
          </div>
          <SampleCard />
        </div>
      </section>

      {/* ============================ TRY THE SAMPLE ============================ */}
      <section className="section-tight" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "var(--butter)" }}>Try it</div>
          <h2 style={{ marginTop: 12, color: "var(--cream)" }}>Lead the sample, with no account.</h2>
          <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.6, opacity: 0.92 }}>
            <b>Pray Together</b> is a prayer time for any church or small group: praise and thanks, our
            church, homes and families, people who are struggling, where we live, and the wider world.
            Open it to see every round, then lead it from your phone with your small group, your family or
            a few friends. There&rsquo;s nothing to sign up for or install, for you or for them.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={SAMPLE_URL} className="btn btn-primary">See the sample prayer time →</a>
          </div>
          <p style={{ marginTop: 14, fontSize: 14, opacity: 0.8 }}>
            Its room code works for twelve hours. Give your email when you start it if you&rsquo;d like the prayer report afterwards.
          </p>
        </div>
      </section>

      {/* ============================ SETTING UP ============================ */}
      <section className="section-tight" style={{ background: "var(--butter)" }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow" style={{ color: "var(--navy)" }}>Setting it up</div>
          <h2 style={{ marginTop: 12 }}>About ten minutes, the first time.</h2>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            <Mini title="Paste your points" body="Say who's praying and what for, in any form. Prayer Rounds writes the cards and finds the Scripture promises. Read them through, and change anything." />
            <Mini title="Your own prayer room code" body="You get a code of your own, with your church's or group's name on the join screen. It's the same code every time." />
            <Mini title="Print the sheets once" body="A join sheet for the room, a leader sheet with a code that opens your host page, and eight colour signs to put up. The next prayer time needs no new ones." />
            <Mini title="Host it from your phone" body="Start, take the requests, send everyone to their first group, and end. Everything else moves by itself." />
          </div>
        </div>
      </section>

      {/* ============================ SHARING ============================ */}
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="eyebrow">Sharing</div>
          <h2 style={{ marginTop: 12 }}>Hand a prayer time to another leader.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--slate)", lineHeight: 1.6 }}>
            Wrote one for your church and want a youth pastor or a small-group leader to use it? Send them
            the invitation link from your prayer set. They see the whole prayer time first, round by round.
            Then they can lead it once from their phone, as it is, without making an account, or make a free
            account and change the topics to fit their people. Their prayer report goes to them, not to you.
          </p>
        </div>
      </section>

      <Faq items={FAQ} title="Prayer Rounds, answered" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Bring your prayer points. We&rsquo;ll do the shuffling.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Try the sample first, or make an account and write your own: your first three months of
            everything are free, with no card needed. Questions? <a href="mailto:hello@qrewzi.com" style={{ color: "var(--butter)" }}>hello@qrewzi.com</a>.
            For fun nights and Bible trivia too, see <Link href="/youth-groups" style={{ color: "var(--butter)" }}>youth groups</Link>.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href={SAMPLE_URL} className="btn btn-primary">See a sample prayer time →</a>
            <a href={BUILD_URL} className="btn btn-ghost" style={{ color: "var(--cream)" }}>Make your own</a>
          </div>
        </div>
      </section>
    </>
  );
}

// What a group sees in a round — the shape of the card on the phones.
function SampleCard() {
  return (
    <div className="card" style={{ padding: 22, background: "#f8fbff", borderColor: "#93c5fd", maxWidth: 440, justifySelf: "center", width: "100%" }}>
      <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1d4ed8" }}>
        Round 2 · Blue sign
      </div>
      <h3 style={{ fontSize: 22, marginTop: 6 }}>Our families</h3>
      <ul style={{ margin: "10px 0 0", paddingLeft: 20, display: "grid", gap: 6, fontSize: 15.5, color: "var(--navy)" }}>
        <li>Thank God for the people He has put in our homes</li>
        <li>A family going through a hard time right now</li>
        <li>Patience and kindness at home this week</li>
      </ul>
      <div style={{ marginTop: 12, fontSize: 14, fontWeight: 900, color: "#5b4a7a" }}>A request from the room</div>
      <div style={{ marginTop: 4, fontSize: 15.5, color: "var(--navy)" }}>Grandma Ruth&rsquo;s surgery on Tuesday</div>
      <p style={{ marginTop: 12, fontSize: 15, fontStyle: "italic", color: "#334155", borderLeft: "3px solid #93c5fd", paddingLeft: 10, lineHeight: 1.5 }}>
        &ldquo;The LORD is near to all who call upon Him, to all who call upon Him in truth.&rdquo;
        <span style={{ fontStyle: "normal", color: "var(--slate)" }}> — Psalm 145:18</span>
      </p>
      <div style={{ marginTop: 14, textAlign: "center", padding: "12px 0", borderRadius: 12, background: "var(--navy)", color: "var(--cream)", fontWeight: 900 }}>
        Amen
      </div>
    </div>
  );
}

function Mini({ title, body }: { title: string; body: string }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <h3 style={{ fontSize: 17 }}>{title}</h3>
      <p style={{ marginTop: 6, color: "var(--slate)", fontSize: 14.5, lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}
