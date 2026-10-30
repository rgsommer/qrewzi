import Link from "next/link";
import { pageMetadata } from "../seo";
import { GAME_MODES, BUILDER } from "../components/gameModes";

export const metadata = pageMetadata({
  path: "/features",
  title: "Features — game modes, trivia nights, escape rooms",
  description:
    "Every Qrewzi feature: Troopers, Raiders and Duels, Builder, face-offs, houses, trivia nights, escape rooms, Think-Pair-Share, quests, Prayer Rounds, multi-room and outdoor hunts, 65+ task types.",
  socialTitle: "Every feature Qrewzi ships with",
  socialDescription:
    "Three game modes, Builder, face-offs, houses, trivia nights, escape rooms, Think-Pair-Share, quests, Prayer Rounds, multi-room hunts and 65+ task types. Your first three months free.",
  keywords: [
    "classroom game features", "classroom game modes", "classroom trivia night", "Bible trivia game for kids",
    "house points game", "school houses competition", "team building classroom game", "classroom escape room",
    "classroom quest game", "multi-room scavenger hunt", "outdoor scavenger hunt", "schoolyard scavenger hunt", "think pair share game", "GameMaster dashboard", "projector leaderboard",
    "team superpowers", "mixed device classroom",
  ],
});

// The mode cards' copy; their names, emoji and one-liners come from gameModes.ts.
const MODE_BODY: Record<string, string> = {
  troopers: "The main game. Teams go station to station through the set in order, scanning each station's QR code to open its task.",
  raiders: "Teams raid a grid of mystery boxes, picking their next one. Every box hides a task; some challenge another team head-to-head.",
  duels: "Every player on their own device, paired 1-on-1, and with someone new the moment a duel ends. The first right answer wins the points; a no-show loses by default.",
};

type Feature = { name: string; body: string; href?: string; cta?: string };
type Group = { id: string; eyebrow: string; title: string; items: Feature[] };

const GROUPS: Group[] = [
  {
    id: "modes",
    eyebrow: "Ways to play",
    title: "Three game modes, and Builder on top.",
    items: [
      ...GAME_MODES.map((m) => ({ name: `${m.emoji} ${m.name}`, body: MODE_BODY[m.id], href: `/game-modes#${m.id}`, cta: `How ${m.name} plays` })),
      { name: `${BUILDER.emoji} ${BUILDER.name}`, body: "An add-on to Troopers and Raiders. Every task adds a layer to the team's castle, rocket or ark — gold, stone, brick, wood or straw, by how well it went. Tap a weak layer to rebuild it; the mightiest build holds Master Builder.", href: "/game-modes#builder", cta: "How Builder works" },
    ],
  },
  {
    id: "games",
    eyebrow: "Kinds of game",
    title: "One engine, a lot of different nights.",
    items: [
      { name: "✅ Lesson review", body: "Describe the lesson in a line and Qrewzi builds a station game on what they've learned, from a mix of task types tuned to the topic and grade." },
      { name: "📚 Introduce a chapter", body: "A first meeting with new words, in five phases: guess what they mean, sort them, meet them in context, show them in a drawing, a mime or speech, then tie them together." },
      { name: "🔐 Escape rooms", body: "Any lesson, any theme, generated in 90 seconds. Six teams play their own themed room in the same classroom — keys, locks, cipher fragments, a brass-plate vault. The theme pre-fills with the season.", href: "/escape-rooms", cta: "Classroom escape rooms" },
      { name: "💭 Think-Pair-Share", body: "List your topics and Qrewzi writes a question a round. Each round teams pair up at a station: one shares an idea, the other writes down what it heard — then passes it on, from memory, to the next pair. Scored on how much of each idea arrives.", href: "/think-pair-share", cta: "How Think-Pair-Share plays" },
      { name: "🗺️ Quests", body: "A story mission. Teams earn coins with their answers, buy the resources the mission needs — at prices that climb as the clock runs — trade scarce ones with other teams, and launch the mission." },
      { name: "🏆 Trivia nights", body: "Nine checked question banks — Bible, general knowledge, history, the Middle Ages, the 1950s, modern times, Christmas, Easter, Thanksgiving — dealt into rounds of buzzer clues, flashcard races, hangman and tic-tac-toe. Nothing to write; on Pro, your own topic too.", href: "/trivia-night", cta: "How a trivia night runs" },
      { name: "🙏 Prayer Rounds", body: "Paste your prayer points in any form. Small groups pray through them round by round, mixed afresh each round, with two Scripture promises on every card.", href: "/youth-groups#prayer-rounds", cta: "Prayer Rounds" },
      { name: "🎉 Fun nights, parties & events", body: "Youth group and camp nights, birthday parties, team building at a conference or a training day: quick, active, guessable games on a light theme — never a test.", href: "/youth-groups#fun-nights", cta: "For youth groups" },
    ],
  },
  {
    id: "moments",
    eyebrow: "Mid-game moments",
    title: "Surprises that keep every team in it.",
    items: [
      { name: "⚔️ Face-offs", body: "Switch them on and now and then the game pits two teams head-to-head in a quick challenge; the winner earns bonus points. Or start one yourself with Instant face-off." },
      { name: "👥 Groups, houses & showdowns", body: "The room splits into groups named for the lesson — 🔥 Flames vs 🕊️ Doves for Pentecost, ⚛️ Atoms vs 🧪 Beakers for chemistry — or your school's own houses, joined by code. Standings go by the average per team, so a bigger side isn't ahead for being bigger, and a house showdown puts one question on every device at once." },
      { name: "🦊 Catch Qrew", body: "Qrew the fox pops up on the players' screens for a few seconds, a handful of times a game; the first team to tap it scores. A team busy drawing, miming or moving isn't pulled away to chase it." },
      { name: "🌪️ Defend the village", body: "In Builder, a tornado, a dragon, a flood or a meteor shower heads for the builds. Every device gets the same quick question; if enough of the room gets it right, the shield holds and every team earns a bonus." },
      { name: "✨ Secret superpowers", body: "1 in 4 teams gets a hidden power on join: Wild Card, Torchlight, Jump Higher, Truth Seeker, Second Chance, X-Ray. Kids trade rumours about who has what." },
    ],
  },
  {
    id: "room",
    eyebrow: "Running the room",
    title: "Your room, your rules.",
    items: [
      { name: "📺 GameMaster mode", body: "The projector dashboard you run: live leaderboard, station heat map, streak banners, celebrations and a session-complete finale." },
      { name: "🏫 Multi-room hunts", body: "Spread the game across the gym, the library and the hall: a set of station cards for each room, teams shared out across them, and a scan in the wrong room says where to go." },
      { name: "🪧 Tape the cards up once", body: "The station cards on your walls aren't tied to any one game. Any teacher can run any set on them, any day — and two classes can play on the same cards at the same time, because each phone's scan counts only in its own game. Print a set for each room and leave it up." },
      { name: "🌳 Take it outside", body: "The station cards work outdoors too: zip-tie or tape them to stakes, fence posts or playground equipment and the schoolyard becomes the hunt. A matte laminate or a sheet protector keeps them dry and scannable — gloss catches the sun. On a bright day turn screens to full brightness and play from the shade where you can: most tablets are hard to read in direct sun." },
      { name: "🖥️ On-screen only", body: "No scanning, no walking. Tasks that need students out of their seats are left out for that session, and everything else runs at the desk." },
      { name: "💻 Any device", body: "Phones, tablets and Chromebooks in one room. Hidden-QR laptop mode when webcams do the scanning." },
      { name: "🔊 Sound your way", body: "Sound on the projector and every device, on the projector only, or off — and every screen has its own mute." },
      { name: "⚡ Quick Start presets", body: "Ready-made sets you can launch in one click — for a substitute, a filler day or a spare twenty minutes." },
      { name: "👀 Preview on a phone or tablet", body: "Step through any set exactly as a student's device shows it, task by task — no session, nothing to scan." },
      { name: "🕹️ Arcade & Galaxy skins", body: "Student screens in a neon Arcade sunset over a rolling grid, or a Galaxy of drifting stars and a ringed planet." },
    ],
  },
  {
    id: "tasks",
    eyebrow: "On the players' screens",
    title: "65+ task types, well past multiple choice.",
    items: [
      { name: "🧩 65+ task types", body: "Multiple choice, sort, sequence, timeline, mind map, matching, cloze, buzzer clues, flashcard races, motion missions, speech recognition, script plays, role-play decks, hangman, Connect Four, live debates, drawing and miming, and more." },
      { name: "✅ Answers marked in place", body: "The reveal lands on the player's own answers: boxes turn green or red, typed answers get a see-through correction, a sequence slides into order. And a timeline task looks like a timeline." },
      { name: "📱 Turn the phone sideways", body: "In landscape, tasks use the width — options two across, statements in columns, the timeline across the screen — and the extra strips fold away." },
      { name: "🛠️ Fix a set in one click", body: "Diagnose & Fix checks every task in a set and repairs the ones that wouldn't play, before they reach the room." },
    ],
  },
  {
    id: "after",
    eyebrow: "After the game",
    title: "The marking is done when the bell goes.",
    items: [
      { name: "📄 Your report", body: "Every game ends with a report for you: grades for each student, Bloom's taxonomy coverage, the curriculum standards the session touched, a note to parents and a class-chat blurb ready to paste." },
      { name: "📋 Class rosters", body: "Upload a class roster, match each player's name to it after a game, and get a gradebook CSV ready to import into Edsby." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">The full box</div>
        <h1 style={{ marginTop: 12 }}>Everything Qrewzi ships with.</h1>
        <p style={{ marginTop: 18, fontSize: 18, color: "var(--slate)", maxWidth: "64ch" }}>
          A live, room-wide team game — for a lesson, a trivia night, an escape room or a youth night —
          with the projector keeping score and a report waiting for you at the end.
        </p>
        <nav aria-label="Feature sections" style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {GROUPS.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="pill" style={{ fontSize: 12, padding: "7px 12px" }}>{g.eyebrow}</a>
          ))}
        </nav>

        {GROUPS.map((g) => (
          <div key={g.id} id={g.id} style={{ marginTop: 64, scrollMarginTop: 90 }}>
            <div className="eyebrow">{g.eyebrow}</div>
            <h2 style={{ marginTop: 10, marginBottom: 24 }}>{g.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              {g.items.map((f) => (
                <div key={f.name} className="card">
                  <h3 style={{ fontSize: 19 }}>{f.name}</h3>
                  <p style={{ marginTop: 10, color: "var(--slate)", fontSize: 15 }}>{f.body}</p>
                  {f.href && (
                    <p style={{ marginTop: 12, fontSize: 14, fontWeight: 900 }}>
                      <Link href={f.href}>{f.cta || "Read more"} →</Link>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 64, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="https://set.qrewzi.com/quickstart" className="btn btn-primary">Launch a ready-made game →</a>
          <Link href="/how-it-works" className="btn btn-secondary">See how it works</Link>
        </div>
      </div>
    </section>
  );
}
