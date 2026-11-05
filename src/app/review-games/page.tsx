import { pageMetadata } from "../seo";
import GuidePage from "../components/GuidePage";

export const metadata = pageMetadata({
  path: "/review-games",
  title: "Review games that get students moving — test review for any unit",
  description:
    "A test review game that gets students out of their seats: paste your unit's terms and Qrewzi turns them into a room-wide team game at QR stations, with a different kind of review task at each and a live scoreboard.",
  socialTitle: "Test review that gets the whole room moving",
  socialDescription: "Paste your unit's terms. Teams move between stations, each with a different kind of review task, while the projector keeps score.",
  keywords: [
    "review games", "test review games", "unit test review game", "review games that get students moving", "active review games",
    "around the room review activity", "review game for middle school", "review game for high school", "study game for students",
  ],
});

export default function ReviewGamesPage() {
  return (
    <GuidePage
      eyebrow="Review games"
      title="Test review that gets everyone moving."
      answer={[
        "The best test review gets students out of their seats and talking about the content. Teachers have long done it with task cards round the room, four corners or a walking quiz. Qrewzi runs that kind of review for you: paste your unit's terms and it builds a room-wide team game, with a different kind of review task at each QR station.",
        "Teams move from station to station, sorting, matching, ordering, explaining and answering, while the projector shows who's ahead. Afterwards, students can practise the same set on their own.",
      ]}
      stepsTitle="A review lesson in five minutes."
      steps={[
        { emoji: "📋", name: "Paste the terms", body: "Your unit's terms list or study guide — or a line about what the test covers." },
        { emoji: "🔀", name: "Get a mix of tasks", body: "Qrewzi writes review tasks that go over the content: matching terms to meanings, sorting, sequencing, true or false, short answers, puzzles." },
        { emoji: "🏃", name: "Teams move", body: "Teams scan their way round the stations — one device per team — and each station is a new kind of challenge." },
        { emoji: "📺", name: "Live scoreboard", body: "Scores update as teams answer, so the last station matters as much as the first." },
        { emoji: "📨", name: "See the gaps", body: "Your report shows which terms each team got right and which they missed — the ones to go over before the test." },
      ]}
      pointsTitle="Why moving review sticks."
      points={[
        { emoji: "🗣️", title: "Students explain it to each other", body: "Working as a team means talking the answer through, which is where the learning happens." },
        { emoji: "🎲", title: "Variety, not drill", body: "A sort, a sequence and a quick debate test a term three different ways — better than the same question format twenty times." },
        { emoji: "🚶", title: "Movement keeps attention", body: "Walking to the next station resets attention, the way an around-the-room activity does — without the printing and marking." },
        { emoji: "🏠", title: "Keep studying at home", body: "Share a link and students can practise the same set on their own before the test." },
      ]}
      faqTitle="Review games, answered"
      faq={[
        { q: "Is it just multiple choice?", a: "No. Review sets mix matching, sorting, sequencing, true or false, short answers, fill in the blanks, puzzles and more, all built on your unit's terms." },
        { q: "Does it work for math?", a: "Yes. Math review uses tasks that suit math — matching, ordering, true or false, quick questions — and leaves out ones that don't, like interviewing a character." },
        { q: "How long does a review game take?", a: "Twenty to forty-five minutes, depending on how many stations and tasks you choose." },
        { q: "Can students review on their own?", a: "Yes. Share a link to the set and students can practise it alone, at school or at home." },
        { q: "Is it free?", a: "Your first three months are free, with everything included and no card needed. After that, carry on with the Free plan or choose a paid plan." },
      ]}
      related={[
        { href: "/classroom-scavenger-hunt", label: "Classroom scavenger hunt app" },
        { href: "/kahoot-alternative", label: "Kahoot alternative for teams" },
        { href: "/trivia-night", label: "Trivia nights" },
      ]}
    />
  );
}
