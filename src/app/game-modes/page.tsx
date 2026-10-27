import Link from "next/link";
import { pageMetadata } from "../seo";
import Faq, { type FaqItem } from "../components/Faq";
import { GAME_MODES, BUILDER } from "../components/gameModes";

export const metadata = pageMetadata({
  path: "/game-modes",
  title: "Game modes — Troopers, Raiders and Duels",
  description:
    "Three ways to play a Qrewzi set: Troopers (station to station), Raiders (pick your next mystery box) and Duels (every player 1-on-1, someone new after every duel).",
  socialTitle: "Troopers, Raiders, Duels — three ways to play one set",
  socialDescription:
    "Teams station to station, teams raiding mystery boxes, or every player 1-on-1 with someone new after every duel. Pick the mode before you press Start.",
  keywords: [
    "classroom game modes", "1v1 classroom quiz game", "mystery box classroom game", "station rotation game",
    "team quiz game", "classroom duel game", "classroom building game", "Kahoot alternative", "Blooket alternative",
  ],
});

/* How each mode plays, as the server runs it (backend/socket/*.js in the
   Curriculate repo): Troopers is the default route, Raiders the Mystery
   Box route (mysteryBoxEngine.js), Duels the 1-on-1 rounds (duelRounds.js). */
const DETAIL: Record<string, { lead: string; steps: string[]; bestFor: string; extra?: string }> = {
  troopers: {
    lead: "The main game, and the place to start.",
    steps: [
      "A team of a few players shares one phone, tablet or Chromebook and names itself when it joins.",
      "The device sends the team to a coloured station. They scan its QR code and the task opens.",
      "Done, and they're sent on to the next — through the whole set in order.",
      "The projector keeps the live leaderboard and shows where every team is.",
    ],
    bestFor: "A lesson review, a whole class period, a class's first game.",
    extra: "Builder can be added.",
  },
  raiders: {
    lead: "Teams choose their own route.",
    steps: [
      "Each team gets a grid of mystery boxes, in its own shuffled layout. Every box hides a task.",
      "Stars on a box hint at what it's worth. Open one, play its task, come back and pick the next.",
      "Some are VS boxes that challenge another team head-to-head — worth the most to a team that takes them on early.",
      "One clock runs for the whole room.",
    ],
    bestFor: "A class that knows the game and likes choosing; review where the order doesn't matter.",
    extra: "Builder can be added.",
  },
  duels: {
    lead: "Everyone plays, one on one.",
    steps: [
      "Every device is one player, so each player needs a device of their own.",
      "Every player is paired with someone they've met least, and the pair is sent to a station.",
      "When both have scanned, they race through the same few questions, new to both. The first right answer takes the points; a wrong answer locks only that player out of that question.",
      "The moment a duel ends, its players are paired again with whoever is free — nobody waits for the rest of the room. An opponent who isn't at the station a minute after the invite loses that duel by default. You set the questions per duel, and can re-pair everyone at any time.",
    ],
    bestFor: "A room where everyone has a device, and a set with plenty of questions.",
    extra:
      "The questions come from the set itself: multiple choice and true/false as they are, and flashcards, matching pairs, buzzer clues, what-am-I's and short answers turned into a choice of four.",
  },
};

const FAQ: FaqItem[] = [
  {
    q: "Which mode should we start with?",
    a: "Troopers. It's the main game — teams go through the set in order — so it's the simplest to run the first time. Raiders suits a class that knows the game and likes choosing its route; Duels suits a room where everyone has a device of their own.",
  },
  {
    q: "Does every player need their own device?",
    a: "For Troopers and Raiders, no: a team of a few players shares one phone, tablet or Chromebook. For Duels, yes — every device is one player.",
  },
  {
    q: "Can any set be played as Duels?",
    a: "Any set with at least 9 questions a duel can use. Escape rooms, quests, prayer times, chapter introductions, and party, event and fun-night sets aren't offered as Duels, and the live page says why when a set can't be duelled.",
  },
  {
    q: "What happens with an odd number of players in Duels?",
    a: "Three play one duel together. A player whose opponent isn't at the station a minute after the invite wins that duel by default, and anyone who joins part-way through is paired as soon as someone is free.",
  },
  {
    q: "Do duel points and bonuses count toward grades?",
    a: "No. Duel points, face-off and house-showdown bonuses, Catch Qrew and the Master Builder award go on the leaderboard. The grades in your report come from the tasks themselves.",
  },
  {
    q: "Can I add Builder to Duels?",
    a: "No — Builder is an add-on to Troopers and Raiders, where a team works through tasks together and its build grows with them.",
  },
];

export default function GameModesPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
          <div className="eyebrow">Game modes</div>
          <h1 style={{ marginTop: 12 }}>Three ways to play.<br />One set of questions.</h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.5, maxWidth: "58ch", marginLeft: "auto", marginRight: "auto" }}>
            A Qrewzi set can be played more than one way. Pick the mode on the live page
            before you press Start — the projector and every device show its name, so a class
            learns them: <em>&ldquo;we&rsquo;re playing Raiders today.&rdquo;</em>
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {GAME_MODES.map((m) => (
              <a key={m.id} href={`#${m.id}`} className="pill" style={{ fontSize: 13, padding: "8px 14px" }}>
                <span aria-hidden="true">{m.emoji}</span> {m.name}
              </a>
            ))}
            <a href="#builder" className="pill" style={{ fontSize: 13, padding: "8px 14px", background: "var(--cream-shade)" }}>
              <span aria-hidden="true">{BUILDER.emoji}</span> + {BUILDER.name}
            </a>
          </div>
        </div>
      </section>

      {/* ============================ THE MODES ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container" style={{ display: "grid", gap: 24 }}>
          {GAME_MODES.map((m) => {
            const d = DETAIL[m.id];
            return (
              <article key={m.id} id={m.id} className="card" style={{ scrollMarginTop: 90 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
                  <span aria-hidden="true" style={{ fontSize: 40, lineHeight: 1 }}>{m.emoji}</span>
                  <h2 style={{ fontSize: "clamp(26px, 3vw, 34px)" }}>{m.name}</h2>
                  <span style={{ color: "var(--coral)", fontWeight: 900 }}>{d.lead}</span>
                </div>
                <p style={{ marginTop: 10, fontSize: 18, fontWeight: 700, color: "var(--navy)" }}>{m.blurb}</p>
                <ol style={{ marginTop: 14, paddingLeft: 22, color: "var(--slate)", fontSize: 16, lineHeight: 1.6, display: "grid", gap: 6 }}>
                  {d.steps.map((s) => <li key={s}>{s}</li>)}
                </ol>
                {d.extra && <p style={{ marginTop: 12, color: "var(--slate)", fontSize: 15 }}>{d.extra}</p>}
                <p style={{ marginTop: 12, fontSize: 15, color: "var(--navy)" }}>
                  <strong>Best for:</strong> {d.bestFor}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============================ BUILDER ============================ */}
      <section id="builder" className="section-tight" style={{ background: "var(--butter)", scrollMarginTop: 70 }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="eyebrow" style={{ color: "var(--navy)", textAlign: "center" }}>The add-on</div>
          <h2 style={{ textAlign: "center", marginTop: 12 }}>
            <span aria-hidden="true">{BUILDER.emoji}</span> Builder: every answer adds a layer.
          </h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--navy)", textAlign: "center", maxWidth: "62ch", marginLeft: "auto", marginRight: "auto" }}>
            Switch Builder on for Troopers or Raiders and each team builds something as it plays.
          </p>
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <Card title="Pick a build" body="A house, castle, rocket, Noah's Ark, ship, lighthouse, bridge, church or treehouse — the team's choice, until the first block goes on." />
            <Card title="Build it in gold" body="Every finished task adds the next layer, in a material that says how it went: gold, stone, brick, wood or straw." />
            <Card title="Shore up the weak spots" body="Tap a weak layer to play that task again. The better material stays, and the team carries on where it was." />
            <Card title="Master Builder" body="The mightiest build holds the Master Builder award and its points — until another build beats it. The projector shows every team's build." />
            <Card title="Defend the village" body="Now and then a tornado, a dragon, a flood or a meteor shower heads for the builds. Every device gets the same quick question; if enough of the room gets it right, the shield holds and every team earns a bonus. If not, nothing is lost." />
          </div>
        </div>
      </section>

      {/* ============================ IN ANY MODE ============================ */}
      <section className="section-tight">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Mid-game surprises</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>Moments that wake the room up.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            <Card title="⚔️ Face-offs" body="Switch face-offs on and now and then the game pits two teams head-to-head in a quick challenge; the winner earns bonus points. Or start one yourself with Instant face-off." />
            <Card title="🏠 House showdown" body="The room plays in groups, or in your school's houses. Fire a showdown and one question goes to every device at once; the house with the biggest share right earns every one of its teams a bonus." />
            <Card title="🦊 Catch Qrew" body="Qrew the fox pops up on the players' screens for a few seconds, and the first team to tap it scores. A team busy drawing, miming or moving isn't pulled away to chase it." />
          </div>
          <p style={{ marginTop: 28, textAlign: "center", color: "var(--slate)" }}>
            See <Link href="/features">every feature</Link>, or how a{" "}
            <Link href="/trivia-night">trivia night</Link> and an <Link href="/escape-rooms">escape room</Link> play.
          </p>
        </div>
      </section>

      <Faq items={FAQ} title="Game modes, answered" />

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Try a mode on your own class.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Open the live demo and scan in with your phone, or make an account — your first three months are free.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/demo" target="_blank" rel="noopener" className="btn btn-primary">Try it live →</a>
            <a href="https://set.qrewzi.com/signup" className="btn btn-ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>
              Join for free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: 18 }}>{title}</h3>
      <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{body}</p>
    </div>
  );
}
