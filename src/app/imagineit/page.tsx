import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";

export const metadata = pageMetadata({
  path: "/imagineit",
  title: "ImagineIt — an outdoor photo scavenger hunt",
  description:
    "An outdoor photo scavenger hunt from your lesson: nature finds, imagination prompts, no QR codes. It plays on when Wi-Fi drops and ends in a class vote.",
  socialTitle: "ImagineIt: take the lesson outside",
  socialDescription:
    "Nature finds and imagination prompts from your lesson, one photo each. No QR codes, plays on out of Wi-Fi range, and ends with a slideshow and a class vote.",
  keywords: [
    "outdoor scavenger hunt", "outdoor photo scavenger hunt", "nature scavenger hunt for kids",
    "photo scavenger hunt app", "schoolyard scavenger hunt", "outdoor classroom game",
    "offline classroom game", "outdoor learning activity", "outdoor education game",
    "nature walk activity for students",
  ],
});

// How a hunt runs, in the order the teacher app and the players' screens run
// it (Curriculate repo: shared/imagineIt.js, teacher-app ImagineItBuilder.jsx,
// ImagineItLivePanel.jsx and ImagineItWall.jsx, student-app components/
// imagineit/, the offline layer in student-app/src/offline/).
const STEPS = [
  { emoji: "🪄", name: "Make the hunt", body: "Start from one of your sets or type a topic. Part 1 is nature finds — bark up close, an acorn, a cloud with a shape. Part 2 is imagination prompts written from your lesson. Edit, reorder or add your own before you save." },
  { emoji: "📲", name: "Join, then head out", body: "Teams join with the room code before they leave the room. There are no QR codes to post: each team gets the prompts in its own order, so the class spreads out instead of crowding one tree." },
  { emoji: "📸", name: "One photo a prompt", body: "The camera passes round the team, a prompt each. A quick, friendly look at every photo says what it saw, and a creative take earns a bonus. A retake is always allowed." },
  { emoji: "🖼️", name: "The wall fills up", body: "The projector shows the latest photos as they come in, each with its prompt and its team. You see every one first, and can hide any of them from the screen." },
  { emoji: "🗳️", name: "Slideshow and vote", body: "Back inside, a slideshow of the whole hunt, then a class vote on every device for the best Imagine-it photo. The winning team takes the bonus." },
];

const FAQ: FaqItem[] = [
  {
    q: "Do I need to print QR codes or station cards?",
    a: "No. An ImagineIt hunt has no stations to scan. Teams join with the room code and the prompts come to their device, each team in its own order.",
  },
  {
    q: "What if there's no Wi-Fi outside?",
    a: "Teams join on the school's Wi-Fi before they go out, and the whole hunt is saved on the device then. Out of range, the hunt plays on and the photos wait on the device; they send when it's back in range. Your screen shows when each team last synced, and photos that arrive after the game ends are added to your report.",
  },
  {
    q: "What do the imagination prompts ask for?",
    a: "Something from the lesson to find, frame or act out — \"Find a bridge you could cross into New France\", \"Freeze-frame a treaty being signed\". They're written from your set's own terms and people, and checked against safety rules: no weapons, no contact between students, no strangers or leaving the grounds, no climbing or water, nothing that harms a plant or an animal. You see every prompt before you save.",
  },
  {
    q: "Does it change with the seasons?",
    a: "Yes. The nature finds are dealt fresh each time from a list that follows the year: insects, webs and flowers from spring to fall, frost and snow in the winter months.",
  },
  {
    q: "Who sees the photos?",
    a: "You see each one as it arrives, on your Host page, and can hide any photo. A hidden photo never reaches the projector wall, the slideshow or the vote. The photos are in your report and its email.",
  },
  {
    q: "Is it marked?",
    a: "No. A photo counts for taking part, not for a mark. Teams earn points for the prompts they photograph and a bonus for a creative take, and the class vote adds one more for the winner.",
  },
  {
    q: "Which devices work?",
    a: "Any phone or tablet with a camera, in the Qrewzi app or a browser — one per team is enough. A photo can also be uploaded instead of taken.",
  },
  {
    q: "Can I run the same hunt again?",
    a: "Yes. A hunt is saved like any set, so it launches again from Task Sets. Regenerate it for a fresh deal of nature finds and prompts, keeping the ones you wrote yourself, or make a new hunt from any set you have.",
  },
];

export default function ImagineItPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="eyebrow">ImagineIt · the outdoor photo hunt</div>
          <h1 style={{ marginTop: 12 }}>Take the lesson outside.<br />Bring back photos.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            An outdoor scavenger hunt in two parts. First, nature finds — a close-up of bark, three kinds
            of leaves, a cloud with a shape. Then imagination prompts written from your lesson: find a
            bridge you could cross into New France, freeze-frame a treaty being signed. One photo a
            prompt, no QR codes, and it plays on when the Wi-Fi drops.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <a href="https://set.qrewzi.com/imagineit" className="btn btn-secondary">Make an ImagineIt hunt →</a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
            On any phone or tablet with a camera. Players join with a room code — no accounts.
          </p>
        </div>
      </section>

      {/* ============================ HOW A HUNT RUNS ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>How a hunt runs</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Find it, imagine it, snap it — then vote.</h2>
          {/* Five steps fit across a desktop row at this width (no step left alone on a second row). */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
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

      {/* ============================ WHY ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Why it works</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 36 }}>Outside on purpose, and still about the lesson.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <Point emoji="🌿" title="Looking closely" body="Nature finds ask for the close-up and the second look — roots above the ground, a pattern in a leaf, the oldest thing in sight." />
            <Point emoji="✨" title="Imagination with a point" body="An Imagine-it prompt makes the class picture the lesson in the place they're standing, and choose how to show it." />
            <Point emoji="🤳" title="Everyone holds the camera" body="The device moves round the team a prompt at a time, so the same student isn't taking every photo." />
            <Point emoji="📶" title="Patchy Wi-Fi is fine" body="The hunt is saved on the device when the team joins. Out at the far end of the field, it keeps going and catches up when it's back in range." />
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="ImagineIt, answered" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Pick a set. Head outside.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Make an account — your first three months of everything are free, no card needed. For a
            QR-station hunt in the schoolyard instead, see{" "}
            <Link href="/features#room" style={{ color: "var(--butter)" }}>Take it outside</Link>.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <Link href="/features" className="btn btn-ghost" style={{ color: "var(--cream)" }}>Every feature</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Point({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div style={{ padding: 20, borderRadius: 16, background: "var(--cream-shade)", border: "2px solid var(--navy)" }}>
      <div style={{ fontSize: 26 }} aria-hidden="true">{emoji}</div>
      <h4 style={{ fontSize: 17, marginTop: 8 }}>{title}</h4>
      <p style={{ marginTop: 6, fontSize: 14.5, color: "var(--slate)", lineHeight: 1.5 }}>{body}</p>
    </div>
  );
}
