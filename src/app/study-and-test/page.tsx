import { pageMetadata } from "../seo";
import GuidePage from "../components/GuidePage";

// Study & Test (curriculate repo, docs/test-mode-design.md): a set's study,
// quiz and test codes. Every claim here is what is built — the shape of the
// test (backend/services/study/bank.js TEST_COUNT, attempt.js MARKS), the
// times (invitations.js), the pause on leaving the screen, the server-side
// marking. The students' own page is /study, which stays out of search.

export const metadata = pageMetadata({
  path: "/study-and-test",
  title: "Study & Test — practice tests and a unit test from the same set",
  description:
    "Every Qrewzi set has a study code, a quiz code and a test code. Students take practice tests shaped like the real one, then sit the test once, on their own devices or the class's tablets — leaving the screen pauses it, answers are marked on the server, and you decide the grade.",
  socialTitle: "The unit's practice tests, and the test itself",
  socialDescription:
    "A study code for practice tests with feedback and a class board of personal bests; a test code for one attempt, paused if they leave the screen, marked for you to review.",
  keywords: [
    "online unit test for students", "practice test for students", "practice tests from a unit", "study code for students",
    "test students take on their own devices", "test that pauses when students leave the screen", "online quiz for the classroom",
    "auto-marked short answers", "AI marking for teachers", "provisional grade teacher review", "Edsby import",
    "class leaderboard personal best", "test review practice", "group task on a test", "shared tablet test sign-in",
  ],
});

export default function StudyAndTestPage() {
  return (
    <GuidePage
      eyebrow="Study & Test"
      title="The unit's practice tests, and the test itself."
      answer={[
        "Every Qrewzi set has a study code, a quiz code and a test code on its card. Press one and an invitation is copied for your class post. Qrewzi writes the questions from the set — matching, multiple choice, true or false, fill in the blanks, short answers, a synthesis essay and a group task — checks them, and keeps the test's own questions apart from the ones students practise on.",
        "With the study code, students take practice tests in the shape of the real one, with feedback after every part and a class board of personal bests. With the test code, each student gets one attempt, on their own device or a class tablet: leaving the screen pauses the test until you unlock it, and every answer is marked on the server. They finish with a short summary and a provisional grade; you review every answer and decide the real one.",
      ]}
      stepsTitle="From the set's card to the gradebook."
      steps={[
        { emoji: "📋", name: "Press a code on the card", body: "Study, Quiz or Test. The invitation is copied — the code, the link, how to sign in and the rules — ready to paste into your class post." },
        { emoji: "👁", name: "Preview the test", body: "See every question with its answer before you give the code out. Strike any, or move one between the test and practice. A question the fact checker doubted waits for you." },
        { emoji: "📚", name: "Students practise", body: "As often as they like, in the test's shape, with feedback after every part. Their best goes on the class board — but only from a practice test where they stayed on the screen." },
        { emoji: "📝", name: "Test day", body: "The test code works for an hour from the first student's sign-in: fifty minutes, one attempt, no marks shown until the end. Leaving the screen pauses a student's test until you press Unlock on the Live page." },
        { emoji: "📊", name: "Review and export", body: "The results come by email when the hour is up, with an Edsby import file. Change any mark on the review page and the totals follow; then send yourself the final report." },
      ]}
      pointsTitle="Why it's built this way."
      points={[
        { emoji: "🎯", title: "Practice in the shape of the test", body: "The same parts and kinds of question, drawn fresh each time — so a better score means they've learned more, not that they remember the answers." },
        { emoji: "🔒", title: "Nothing to copy, nothing to find", body: "Copying and pasting are off, and the browser never holds an answer key. Leaving the screen pauses a test; in practice it just doesn't count toward their best." },
        { emoji: "🧑‍🏫", title: "The grade is yours", body: "Written answers are marked against the unit, and one that couldn't be marked is left out of the total, never counted wrong. The provisional grade is where you start: change any mark." },
        { emoji: "🤝", title: "It can end together", body: "The test's last part can be a group task for two or three classmates who reach it: one types, they decide together, and each gets the group's mark — which you can change for any one of them." },
        { emoji: "📱", title: "Made for shared tablets", body: "Students type their name and a four-digit PIN — no email, no account — and a shared tablet keeps nothing, so the next student signs in fresh." },
      ]}
      faqTitle="Study & Test, answered"
      faq={[
        { q: "What's on the test?", a: "Ten each of matching, multiple choice, true or false and fill in the blanks (a mark each), ten short answers (two marks each), a short synthesis essay that weighs the unit through the student's own worldview, and a group task. A quiz is the short version: matching and multiple choice (or true or false) on the unit's terms, in twenty minutes." },
        { q: "Can students cheat by switching tabs?", a: "Leaving the screen pauses the test until you unlock it, it's recorded with how long they were away, and copying and pasting are off. Qrewzi can't see a second device on the desk, so the room still matters." },
        { q: "Who marks the written answers?", a: "Matching, multiple choice and true or false are marked exactly. Fill-in-the-blank near misses, short answers, the essay and the group task are marked by AI against the unit. Anything it couldn't mark is shown to you and left out of the total, and you can change any mark." },
        { q: "Do students need accounts?", a: "No. The first time, a student types their first name and last initial and makes a four-digit PIN. With your class list uploaded they also get a short name code, like maple42, for when two students share a name — you can look any student's up on the Live and Results pages." },
        { q: "What about absent students, or a second class?", a: "Make a new test code from the same card. Each code has its own hour, so a make-up or another class gets one of its own." },
        { q: "Does it work with Edsby?", a: "Yes. Each code's results download as an Edsby import file, and the emailed report carries the same file." },
        { q: "Which plan is it on?", a: "Study codes come with Plus, and quiz and test codes with Pro. Every new account gets everything in Pro free for its first three months, no card needed." },
      ]}
      related={[
        { href: "/review-games", label: "Review games that get students moving" },
        { href: "/features#study-and-test", label: "Every feature" },
        { href: "/how-it-works", label: "How Qrewzi works" },
      ]}
    />
  );
}
