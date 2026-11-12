import Link from "next/link";
import { pageMetadata } from "../seo";
import type { ReactNode } from "react";
import { GAME_MODES, BUILDER } from "../components/gameModes";
import GoldJarArt from "../components/GoldJarArt";

export const metadata = pageMetadata({
  path: "/features",
  title: "Features — game modes, outdoor hunts, study & test",
  description:
    "Every Qrewzi feature: game modes, trivia nights, escape rooms, ImagineIt outdoor hunts, play that carries on when Wi-Fi drops, study and test codes with a pot of gold for good answers, own grades.",
  socialTitle: "Every feature Qrewzi ships with",
  socialDescription:
    "Game modes, trivia nights, escape rooms, ImagineIt outdoor photo hunts, games that play on when the Wi-Fi drops, study practice with buddies, a study code and a test code for every set — with a jar of gold that good answers fill — and 85+ task types.",
  keywords: [
    "classroom game features", "classroom game modes", "classroom trivia night", "Bible trivia game for kids",
    "house points game", "school houses competition", "team building classroom game", "classroom escape room",
    "classroom quest game", "test review game", "study challenge for students", "tapping game for the classroom", "multi-room scavenger hunt", "outdoor scavenger hunt", "schoolyard scavenger hunt", "think pair share game", "GameMaster dashboard", "projector leaderboard",
    "team superpowers", "mixed device classroom",
    "social emotional learning activities", "SEL games for the classroom", "classroom brain break", "mindfulness activity for kids",
    "I see I think I wonder", "visible thinking routine", "historical figures interview activity", "sentence building activity",
    "auto-assign student groups", "classroom group generator",
    "outdoor photo scavenger hunt", "offline classroom game", "study buddy app", "trivia practice",
    "team grading", "each student's own grade", "debate game for students", "Connect Four review game",
    "practice tests for students", "online unit test", "study code and test code", "test that pauses when students leave the screen",
    "gamified practice tests", "reward coins for good answers", "classroom reward system", "motivate students to study", "riddles and brain teasers for students",
  ],
});

// The mode cards' copy; their names, emoji and one-liners come from gameModes.ts.
const MODE_BODY: Record<string, string> = {
  troopers: "The main game. Teams go station to station through the set in order, scanning each station's QR code to open its task.",
  raiders: "Teams raid a grid of mystery boxes, picking their next one. Every box hides a task; some challenge another team head-to-head.",
  duels: "Every player on their own device, paired 1-on-1, and with someone new the moment a duel ends. The first right answer wins the points; a no-show loses by default.",
};

// `id` makes a card a link target (/features#offline), for the home page's spotlight and elsewhere.
type Feature = { id?: string; name: string; body: string; href?: string; cta?: string; art?: ReactNode };
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
      { name: "✅ Lesson review", body: "Describe the lesson in a line and Qrewzi builds a station game on what they've learned — tasks that go over the content (questions, matching, sorting, ordering, flashcard races), tuned to the topic and grade, with an interview only when the unit has people in it." },
      { name: "📚 Introduce a chapter", body: "A first meeting with new words, in five phases: guess what they mean, sort them, meet them in context, show them in a drawing, a mime or speech, then tie them together." },
      { name: "🔐 Escape rooms", body: "Any lesson, any theme, generated in 90 seconds — or one of six ready-made rooms, from a Confederation dispatch box to a locked-down cell lab. Five chests stay in view on every device as teams open them, each team can call for a hint, and the projector shows every team's chests.", href: "/escape-rooms", cta: "Classroom escape rooms" },
      { name: "💭 Think-Pair-Share", body: "List your topics and Qrewzi writes a question a round. Each round teams pair up at a station: one shares an idea, the other writes down what it heard — then passes it on, from memory, to the next pair. Scored on how much of each idea arrives.", href: "/think-pair-share", cta: "How Think-Pair-Share plays" },
      { id: "imagineit", name: "🌳 ImagineIt outdoor hunts", body: "An outdoor photo scavenger hunt from a set or a topic: nature finds first — bark up close, a cloud with a shape — then imagination prompts written from the lesson. No QR codes: each team gets the prompts in its own order and passes the camera round. The projector shows a photo wall, then a slideshow and a class vote.", href: "/imagineit", cta: "How ImagineIt runs" },
      { id: "debate-match", name: "🎤 Debate Match", body: "Two teams argue a motion from the lesson in eight timed turns — introduction, opening, rebuttal and closing for each side — each spoken by a speaker the team names. Every turn is judged on the argument and the delivery, and on answering what the other side actually said. A team without a partner debates the AI." },
      { name: "🗺️ Quests", body: "A story mission the whole room plays at once. Teams earn coins with quick questions, buy the supplies the mission needs — each one dearer for everyone after every sale — and sell their spares to the teams that need them by showing a code. Every supply has its own picture, so the kit shows at a glance what's still missing." },
      { name: "🏆 Trivia nights", body: "Nine checked question banks — Bible, general knowledge, history, the Middle Ages, the 1950s, modern times, Christmas, Easter, Thanksgiving — dealt into rounds of buzzer clues, flashcard races, hangman and tic-tac-toe. Nothing to write; on Pro, your own topic too.", href: "/trivia-night", cta: "How a trivia night runs" },
      { name: "🙏 Prayer Rounds", body: "Paste your prayer points in any form. Small groups pray through them round by round, mixed afresh each round, with two Scripture promises on every card.", href: "/prayer", cta: "Prayer Rounds" },
      { name: "🎉 Fun nights & parties", body: "Youth group and camp nights and birthday parties: quick, active, guessable games on a light theme — never a test.", href: "/youth-groups#fun-nights", cta: "For youth groups" },
      { name: "💼 Team days at work", body: "Icebreakers, onboarding, quarterly kickoffs, offsites and staff parties. Pick your industry and the occasion, add your own words, and the players' screens speak to adults.", href: "/teams", cta: "Qrewzi for Teams" },
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
      { name: "🌳 Take it outside", body: "The station cards work outdoors too: zip-tie or tape them to stakes, fence posts or playground equipment and the schoolyard becomes the hunt. A matte laminate or a sheet protector keeps them dry and scannable — gloss catches the sun. Switch on Outdoor mode, and play from the shade where you can." },
      { name: "☀️ Outdoor mode", body: "One switch puts every device in the room on high-contrast screens for a hunt in the sun: a black page, a white card, black type a size larger, nothing faded or see-through. Each device saves the whole route and its pictures before the team goes out, and your screen shows when each team last synced. Tablets running Fully Kiosk turn their own brightness up to full, and back down after." },
      { id: "offline", name: "📶 Plays on when the Wi-Fi drops", body: "Every device keeps its team's next tasks. If the connection drops, the team plays on: stations still scan, answers wait on the device — \"📴 Offline — 2 answers waiting\" — and send in order when it's back. The few tasks that need the room live, like a team-vs-team match or a debate, wait until then, and say so." },
      { name: "👥 Groups from your class list", body: "Pick the class, untick anyone who's away, choose a group size and tap Auto-assign. The groups get names of their own, each tablet taps its group instead of typing a team, and the first name in each group comes up for the tablet. Move a student or reshuffle any time." },
      { name: "🎁 Release Bonuses", body: "The finishing and fastest-dash bonuses stay sealed when the game ends, until you release them with the whole class watching — then they pour in one team at a time, first place first, and the places can still change." },
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
    title: "85+ task types, well past multiple choice.",
    items: [
      { name: "🧩 85+ task types", body: "Multiple choice, sort, sequence, timeline, mind map, matching, cloze, buzzer clues, flashcard races, TapDance, motion missions, speech recognition, script plays, role-play decks, hangman, Connect Four, live debates, drawing and miming, and more." },
      { id: "connect-four", name: "🔴 True/False Connect Four", body: "Two teams, one board. On your turn, pick the true (or the false) statement: right, and you drop a piece in the column you choose; wrong, and the turn passes. Four in a row wins, and a full board goes to the team with more right answers. A team with no one to play takes on the computer, which blocks and goes for the win." },
      { name: "🎯 Games with the lesson in them", body: "Hole in One: answer questions for coins, build the course, then pull back and putt. Treasure Runner stops for a question from the set every few orbs. Brain Blitz offers multiple choice once the typed guesses run out, and Draw It has a coach that looks at the drawing and says what it sees. Mind Mapper fits a Chromebook's short screen." },
      { name: "💃 TapDance", body: "The screen splits into a square for each player, everyone round the tablet. A card lands in someone's square — tap the mascot, tap a true statement, tap a false one and lose a point. For math and science the rounds ask for what's always, sometimes or never true." },
      { name: "🔍 Wonder and curiosity", body: "Mysterious Images sharpen from coloured blocks in five steps — guess early for a bonus. Curious Artifacts put a real museum object in their hands to zoom into: I see, I think, I wonder, then the reveal. Fake Texts let them eavesdrop on two people from history. People Meet and Enemies Meet put two historical figures side by side to answer the team's questions in character." },
      { name: "🌿 Wellbeing breaks", body: "A Nature Walk in a real forest, garden or lake: imagine being there, one slow breath, then tap a feeling, an intention for the day and what helps when a feeling gets big — no typing, and you see how the class is feeling. Puzzle Pieces rebuild a nature photo around a line from the lesson — a key term, a principle, or a verse — and the Cross-Body Breath is a guided calming stretch.", href: "/social-emotional-learning", cta: "SEL & brain breaks" },
      { name: "🤝 Social-emotional role play", body: "Teams act out an everyday school moment to practise one of seven skills — self-regulation, recognizing challenges, perseverance, relationships, self-awareness, self-confidence, critical and creative thinking — with pause points and a short talk at the end, always about the characters, never the students' own lives." },
      { name: "✍️ Write Me and Magic Question", body: "Write Me builds a topic sentence from word tiles, then the supporting sentences, then the paragraph in order — capitals and full stops appear only where a tile lands. Magic Question gives two opposing views: find the good in both, then everyone drags their name under the one they'd choose." },
      { name: "📄 Paper tasks", body: "Some thinking belongs on paper. A Printed task comes with a clean sheet to print — a drawing box, answer lines, a brainstorm web — you're reminded to print before the game, and teams hand in a photo of the finished page." },
      { name: "✏️ Write on the screen", body: "Typed answers can be handwritten instead, with a finger or a stylus, on a lined pad that turns the writing into text — or on paper, photographed. Handwriting earns a bonus." },
      { name: "✅ Answers marked in place", body: "The reveal lands on the player's own answers: boxes turn green or red, typed answers get a see-through correction, a sequence slides into order. And a timeline task looks like a timeline." },
      { name: "📱 Turn the phone sideways", body: "In landscape, tasks use the width — options two across, statements in columns, the timeline across the screen — and the extra strips fold away." },
      { name: "🛠️ Fix a set in one click", body: "Diagnose & Fix checks every task in a set and repairs the ones that wouldn't play, before they reach the room." },
    ],
  },
  {
    id: "practice",
    eyebrow: "Practice at home",
    title: "Study for the test, alone or with a buddy.",
    items: [
      { id: "study-practice", name: "📚 Study practice", body: "Students practise for a test on their own at play.qrewzi.com/practice: they pick the subject and play a set made from your latest unit's terms — every kind of task, on a phone, a tablet or a computer — with points for each task and for telling you what would make one better. Run it as a study challenge, where points follow right answers, with standings and the family joining in." },
      { name: "✍️ Written answers marked", body: "Teach It, open-text and short answers are marked in practice too, by meaning: an answer in other words, or another name for the same thing, counts. The result stays on screen until they move on." },
      { name: "📖 A words sheet on every task", body: "The unit's words and what they mean, A to Z, a tap away on any task — for the words not learned yet. It never points at the answer on the screen." },
      { id: "study-buddies", name: "👥 Study Buddies", body: "Two students pair up with a buddy code — made to be said out loud, never their sign-in code — and both have to accept. Each sees the other's buddy card: what they studied today and the words they're working on. Send a cheer, study the same task together live, duel for the first right answer, or play a buddy's tasks to beat their score." },
      { id: "trivia-rounds", name: "🎉 Trivia rounds", body: "Ten quick games from any of the nine trivia-night banks — quick-fire questions, buzzer clues, true or false, flashcard races, tic-tac-toe — dealt fresh every round, for a student playing on their own.", href: "/trivia-night", cta: "Trivia nights" },
      { name: "🔑 A nickname, not an email", body: "Students sign in to practice with a nickname and a player code, with no school email or real name. A phone, laptop or Chromebook of their own remembers them; a shared class tablet can be set to remember nobody." },
    ],
  },
  {
    id: "study-and-test",
    eyebrow: "Study & Test",
    title: "The unit's practice tests, and the test itself.",
    items: [
      { name: "🔑 Three codes on every set", body: "Each set's card has a 📚 Study, a ✏️ Quiz and a 📝 Test code, with how many students have used each. Press one and an invitation is copied for your class post. The questions are written from the set and fact-checked; one the checker doubted waits for you.", href: "/study-and-test", cta: "How Study & Test works" },
      { name: "📚 Practice tests", body: "The study code opens practice tests in the shape of the real one — matching, multiple choice, true or false, fill in the blanks, short answers — with feedback after every part, as often as they like. Their best goes on a class board, but only from a practice test where they stayed on the screen." },
      { id: "pot-of-gold", art: <GoldJarArt />, name: "🪙 A pot of gold for every set", body: "Each set has a glass jar for every student, and practice fills it. A right answer drops in a coin; the written ones pay for quality — up to 4 for a short answer that explains why, 4 for working where every line checks out, 8 for the essay, and 1 more for beating last time's. The jar keeps every coin, so practising the set again fills it further. Students spend their gold on a joke for 15, a riddle for 25 or a brain teaser for 40 — and a practice test stops earning the moment they leave the screen." },
      { name: "👥 Study with a partner", body: "Up to two classmates on the same code — asked with a tap, even mid-practice — or someone from home with a code the student gives them. Quick rounds on everyone's own screen, a race to fill in the blanks, and fill-and-compare, side by side; a practice partner fills any empty seat. It counts as practice in your report, never toward the class board." },
      { name: "📝 The test, one attempt", body: "Fifty minutes on their own devices, one attempt, no marks shown until the end. The code works for an hour from the first sign-in; make another for a make-up or a second class. A quiz is the short version: the unit's terms, twenty minutes." },
      { name: "⏸ Leave the screen, and it pauses", body: "Copying and pasting are off, and the browser never holds an answer key. A student who leaves the test screen is paused until you press Unlock on the Live page, which shows who is on which part and who left, and for how long." },
      { name: "🤝 A group task to finish", body: "The test can end with a group task for two or three classmates who reach it: one types while they decide together, and each gets the group's mark, which you can change for any one of them." },
      { name: "🧑‍🏫 Marked for you, decided by you", body: "Every answer is marked on the server; written ones by AI against the unit, and one that couldn't be marked is left out, never counted wrong. Students get a short summary and a provisional grade; you review every answer, change any mark, and download an Edsby import file." },
      { name: "📨 Reports that come to you", body: "The test's results come by email when its hour is up, with the Edsby file. The practice report — each student's best and how much they practised — comes once, when you make the quiz or test code." },
      { name: "🔐 Names, PINs, nothing kept", body: "Students type their first name and last initial and make a four-digit PIN — or type a short name code like maple42 — so nobody can sign in as a classmate. A shared tablet keeps nothing between students." },
    ],
  },
  {
    id: "after",
    eyebrow: "After the game",
    title: "The marking is done when the bell goes.",
    items: [
      { name: "📄 Your report", body: "Every game ends with a report for you: grades for each student, Bloom's taxonomy coverage, the curriculum standards the session touched, a note to parents and a class-chat blurb ready to paste." },
      { id: "own-grades", name: "👤 Each student's own grade", body: "On a shared tablet the tasks are dealt round the team evenly, and each answer records whose turn it was. Each student's grade blends their own turns with the team's — 70/30 unless you change it — and a filler answer like keyboard mash is flagged for you. Click a student in the report to see their turns. Students see feedback, never the grade." },
      { name: "📸 ImagineIt photos in the report", body: "An ImagineIt hunt's photos come with its report, email and PDF — and photos that arrive after the game, from a team that was out of range, are added to it." },
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
                <div key={f.name} id={f.id} className="card" style={f.id ? { scrollMarginTop: 90 } : undefined}>
                  {f.art}
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
