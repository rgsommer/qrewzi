// The comparison on /compare: what each tool's own public pages say it does,
// checked in November 2026. Every claim about another tool carries the page
// it came from (SOURCES); where nothing was found the cell says so, and "no"
// for another tool means "not found on its pages", never "it can't".
// Qrewzi's own cells follow the main repo's CLAUDE.md and this site's pages.
//
// No scores, stars or rankings: this compares design features, not learning
// results, which nobody can measure from the outside.

export const CHECKED = "November 2026";

export type ToolId = "qrewzi" | "kahoot" | "blooket" | "gimkit" | "wayground" | "quizlet";
export type Mark = "yes" | "partly" | "no";
export type Cell = { mark: Mark; text: string; src?: string[] };
export type Row = { id: string; label: string; why: string; cells: Record<ToolId, Cell> };
export type Group = { id: string; title: string; criterion: string; rows: Row[] };

export const TOOLS: { id: ToolId; name: string; aka?: string }[] = [
  { id: "qrewzi", name: "Qrewzi" },
  { id: "kahoot", name: "Kahoot" },
  { id: "blooket", name: "Blooket" },
  { id: "gimkit", name: "Gimkit" },
  { id: "wayground", name: "Wayground", aka: "formerly Quizizz" },
  { id: "quizlet", name: "Quizlet" },
];

export const OTHERS = TOOLS.filter((t) => t.id !== "qrewzi");

// ---------------------------------------------------------------- sources
// Numbered on the page in this order.
export const SOURCES: { id: string; tool: ToolId; title: string; url: string }[] = [
  // Kahoot
  { id: "k-host", tool: "kahoot", title: "How to host a live kahoot", url: "https://support.kahoot.com/hc/en-us/articles/360039422694" },
  { id: "k-assign", tool: "kahoot", title: "How to assign a kahoot", url: "https://support.kahoot.com/hc/en-us/articles/360039411334" },
  { id: "k-points", tool: "kahoot", title: "How points work", url: "https://support.kahoot.com/hc/en-us/articles/115002303908" },
  { id: "k-accuracy", tool: "kahoot", title: "Accuracy experience", url: "https://support.kahoot.com/hc/en-us/articles/39818967108627" },
  { id: "k-plans", tool: "kahoot", title: "Kahoot! plans for schools", url: "https://kahoot.com/schools/plans/" },
  { id: "k-types", tool: "kahoot", title: "Kahoot! question types", url: "https://support.kahoot.com/hc/en-us/articles/115002308428" },
  { id: "k-open", tool: "kahoot", title: "Open-ended questions", url: "https://support.kahoot.com/hc/en-us/articles/26630693428883" },
  { id: "k-missed", tool: "kahoot", title: "Correct missed questions (app)", url: "https://support.kahoot.com/hc/en-us/articles/360021489253" },
  { id: "k-study", tool: "kahoot", title: "Self-study modes", url: "https://support.kahoot.com/hc/en-us/articles/31566898896029" },
  { id: "k-app-study", tool: "kahoot", title: "Self-study modes in the Kahoot! app", url: "https://support.kahoot.com/hc/en-us/articles/360021489353" },
  { id: "k-ai-formats", tool: "kahoot", title: "AI formats: practice test", url: "https://support.kahoot.com/hc/en-us/articles/34251401475101" },
  { id: "k-read", tool: "kahoot", title: "Read aloud", url: "https://support.kahoot.com/hc/en-us/articles/1500009756542" },
  { id: "k-access", tool: "kahoot", title: "Accessibility", url: "https://support.kahoot.com/hc/en-us/articles/115004537447" },
  { id: "k-reports", tool: "kahoot", title: "Kahoot! reports", url: "https://support.kahoot.com/hc/en-us/articles/360035063054" },
  { id: "k-team", tool: "kahoot", title: "Team experience", url: "https://support.kahoot.com/hc/en-us/articles/4408679135891" },
  { id: "k-unplugged", tool: "kahoot", title: "Unplugged experience", url: "https://support.kahoot.com/hc/en-us/articles/38672366832669" },
  { id: "k-experiences", tool: "kahoot", title: "Kahoot! experiences (game modes)", url: "https://support.kahoot.com/hc/en-us/articles/35636870654867" },
  { id: "k-settings", tool: "kahoot", title: "Live game settings", url: "https://support.kahoot.com/hc/en-us/articles/115016055107" },
  { id: "k-random", tool: "kahoot", title: "Randomizing questions", url: "https://support.kahoot.com/hc/en-us/articles/27877912748051" },
  { id: "k-ai", tool: "kahoot", title: "AI question generator", url: "https://support.kahoot.com/hc/en-us/articles/40988856361747" },
  { id: "k-join", tool: "kahoot", title: "How to join a kahoot", url: "https://support.kahoot.com/hc/en-us/articles/360039890713" },
  // Blooket
  { id: "b-modes", tool: "blooket", title: "Blooket game mode previews", url: "https://help.blooket.com/hc/en-us/articles/31616660563479-Blooket-Game-Mode-Previews" },
  { id: "b-host", tool: "blooket", title: "How to host a Blooket game", url: "https://help.blooket.com/hc/en-us/articles/15984215236503-How-to-Host-a-Blooket-Game" },
  { id: "b-homework", tool: "blooket", title: "How to assign homework", url: "https://help.blooket.com/hc/en-us/articles/16179771027863-How-to-Assign-Homework-in-Blooket" },
  { id: "b-classic", tool: "blooket", title: "Game overview: Classic", url: "https://help.blooket.com/hc/en-us/articles/42154906814999-Game-Overview-Classic" },
  { id: "b-types", tool: "blooket", title: "Question types explained", url: "https://help.blooket.com/hc/en-us/articles/36295087097751-Question-Types-Explained" },
  { id: "b-reports", tool: "blooket", title: "How to read Blooket reports", url: "https://help.blooket.com/hc/en-us/articles/16180020488727-How-to-Read-Blooket-Reports" },
  { id: "b-study", tool: "blooket", title: "Game overview: Study", url: "https://help.blooket.com/hc/en-us/articles/31650448252439-Game-Overview-Study" },
  { id: "b-tts", tool: "blooket", title: "Automatic audio (text-to-speech)", url: "https://help.blooket.com/hc/en-us/articles/16182356890647-How-to-Enable-Automatic-Audio-Text-to-Speech-in-Blooket" },
  { id: "b-teams", tool: "blooket", title: "Managing teams in team game modes", url: "https://help.blooket.com/hc/en-us/articles/16178822877847-How-to-Manage-Teams-in-Team-Game-Modes" },
  { id: "b-ai", tool: "blooket", title: "AI-generated question sets with Khanmigo", url: "https://help.blooket.com/hc/en-us/articles/28660875749527-AI-Generated-Question-Sets-with-Khanmigo" },
  { id: "b-accounts", tool: "blooket", title: "Do students need a Blooket account?", url: "https://help.blooket.com/hc/en-us/articles/17350775717911-Do-students-need-a-Blooket-account-to-play" },
  { id: "b-plans", tool: "blooket", title: "Blooket plans", url: "https://dashboard.blooket.com/upgrade" },
  // Gimkit
  { id: "g-home", tool: "gimkit", title: "Gimkit home page", url: "https://www.gimkit.com/" },
  { id: "g-repeat", tool: "gimkit", title: "Smart Repetition", url: "https://help.gimkit.com/en/article/smart-repetition-ordsp8/" },
  { id: "g-assign", tool: "gimkit", title: "Assignments explained", url: "https://help.gimkit.com/en/article/assignments-explained-1dgudm/" },
  { id: "g-options", tool: "gimkit", title: "Game options explained", url: "https://help.gimkit.com/en/article/game-options-explained-16312ua/" },
  { id: "g-kit", tool: "gimkit", title: "Create a kit from scratch", url: "https://help.gimkit.com/en/article/create-a-kit-from-scratch-ig828l/" },
  { id: "g-text", tool: "gimkit", title: "Text input questions", url: "https://help.gimkit.com/en/article/text-input-questions-1o82fom/" },
  { id: "g-practice", tool: "gimkit", title: "Practice mode", url: "https://help.gimkit.com/en/article/practice-mode-1vyyl7l/" },
  { id: "g-read", tool: "gimkit", title: "Enable Read to Me", url: "https://help.gimkit.com/en/article/enable-read-to-me-1gb7blg/" },
  { id: "g-reports", tool: "gimkit", title: "Game reports", url: "https://help.gimkit.com/en/article/game-reports-szolh5/" },
  { id: "g-pro", tool: "gimkit", title: "Gimkit Pro FAQ", url: "https://help.gimkit.com/en/article/gimkit-pro-faq-14h6d62/" },
  { id: "g-creative", tool: "gimkit", title: "Gimkit Creative FAQ", url: "https://help.gimkit.com/en/article/gimkit-creative-faq-plw9la/" },
  { id: "g-accounts", tool: "gimkit", title: "Account FAQ", url: "https://help.gimkit.com/en/article/account-faq-jjz7b2/" },
  { id: "g-draw", tool: "gimkit", title: "Draw That (Gimkit blog, archived)", url: "https://web.archive.org/web/20250406020652/https://blog.gimkit.com/blog/draw-that" },
  { id: "g-tno", tool: "gimkit", title: "Trust No One (Gimkit blog, archived)", url: "https://web.archive.org/web/20250403102937/https://blog.gimkit.com/blog/trust-no-one" },
  // Wayground (formerly Quizizz)
  { id: "w-rename", tool: "wayground", title: "Quizizz is now Wayground", url: "https://help.wayground.com/support/solutions/articles/158000403867-quizizz-is-now-wayground-what-s-changing-and-what-s-not" },
  { id: "w-live", tool: "wayground", title: "Live session modes", url: "https://help.wayground.com/support/solutions/articles/158000404918-live-session-modes-on-wayground" },
  { id: "w-async", tool: "wayground", title: "Homework session modes", url: "https://help.wayground.com/support/solutions/articles/158000404919-async-homework-session-modes-on-wayground" },
  { id: "w-timer", tool: "wayground", title: "Grade questions using timer", url: "https://help.wayground.com/support/solutions/articles/158000404053-grade-questions-using-timer" },
  { id: "w-settings", tool: "wayground", title: "Session settings", url: "https://help.wayground.com/support/solutions/articles/158000404930-navigate-session-settings" },
  { id: "w-types", tool: "wayground", title: "Question types explained", url: "https://help.wayground.com/support/solutions/articles/158000411419-question-types-explained" },
  { id: "w-explain", tool: "wayground", title: "Answer explanations", url: "https://help.wayground.com/support/solutions/articles/158000405014-answer-explanations" },
  { id: "w-ai-explain", tool: "wayground", title: "AI answer explanations for incorrect answers", url: "https://help.wayground.com/support/solutions/articles/158000404934-ai-powered-answer-explanations-for-incorrect-answers" },
  { id: "w-open", tool: "wayground", title: "Question type: open-ended", url: "https://help.wayground.com/support/solutions/articles/158000437795-question-type-open-ended" },
  { id: "w-peak", tool: "wayground", title: "Mastery Peak mode", url: "https://help.wayground.com/support/solutions/articles/158000404926-host-an-assessment-quiz-in-mastery-peak-mode" },
  { id: "w-rotating", tool: "wayground", title: "Rotating question sets", url: "https://help.wayground.com/support/solutions/articles/158000404932-rotating-question-sets" },
  { id: "w-flashcards", tool: "wayground", title: "Wayground flashcards", url: "https://wayground.com/home/en/flashcards" },
  { id: "w-access", tool: "wayground", title: "Accommodations available on Wayground", url: "https://help.wayground.com/support/solutions/articles/158000404955-accommodations-available-on-wayground" },
  { id: "w-review", tool: "wayground", title: "Review & Submit in Test and Testing modes", url: "https://help.wayground.com/support/solutions/articles/158000404935-enable-review-submit-in-test-and-testing-modes" },
  { id: "w-common", tool: "wayground", title: "Common Assessments", url: "https://wayground.com/home/common-assessment" },
  { id: "w-reports", tool: "wayground", title: "Reports on Wayground", url: "https://help.wayground.com/support/solutions/articles/158000404058-reports-on-wayground" },
  { id: "w-board", tool: "wayground", title: "Board Battle", url: "https://help.wayground.com/support/solutions/articles/158000480078-board-battle-a-device-free-team-game-in-playground" },
  { id: "w-playground", tool: "wayground", title: "Playground live classroom games", url: "https://help.wayground.com/support/solutions/articles/158000451315-about-playground-live-classroom-games-on-wayground" },
  { id: "w-powerups", tool: "wayground", title: "Power-ups and their types", url: "https://help.wayground.com/support/solutions/articles/158000404941-power-ups-their-types" },
  { id: "w-paper", tool: "wayground", title: "Paper Mode", url: "https://help.wayground.com/support/solutions/articles/158000404923-a-quick-guide-to-paper-mode" },
  { id: "w-ai", tool: "wayground", title: "Wayground AI: generate assessments", url: "https://help.wayground.com/support/solutions/articles/158000405091-wayground-ai-generate-assessments-from-prompts-documents-videos-more" },
  { id: "w-what", tool: "wayground", title: "What is Wayground?", url: "https://help.wayground.com/support/solutions/articles/158000403991-what-is-wayground-" },
  { id: "w-join", tool: "wayground", title: "Joining without signing in", url: "https://help.wayground.com/support/solutions/articles/158000404021-add-wayground-as-a-trusted-app-in-google-workspace-for-education" },
  { id: "w-plans", tool: "wayground", title: "Wayground plans", url: "https://wayground.com/home/plans" },
  // Quizlet
  { id: "q-study", tool: "quizlet", title: "Studying on Quizlet", url: "https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet" },
  { id: "q-live", tool: "quizlet", title: "Classic Quizlet Live in teams mode", url: "https://help.quizlet.com/hc/en-us/articles/360030985431-Starting-a-game-of-Classic-Quizlet-Live-in-teams-mode" },
  { id: "q-live-diagram", tool: "quizlet", title: "Quizlet Live teams mode with diagram sets", url: "https://help.quizlet.com/hc/en-us/articles/360030640352-Playing-Classic-Quizlet-Live-in-teams-mode-with-diagram-sets" },
  { id: "q-learn", tool: "quizlet", title: "Studying with Learn", url: "https://help.quizlet.com/hc/en-us/articles/360030986971-Studying-with-Learn" },
  { id: "q-grading", tool: "quizlet", title: "Using grading options", url: "https://help.quizlet.com/hc/en-us/articles/360048313652-Using-grading-options-US" },
  { id: "q-spaced", tool: "quizlet", title: "Studying with Spaced Repetition", url: "https://help.quizlet.com/hc/en-us/articles/48324742264077-Studying-with-Spaced-Repetition" },
  { id: "q-test", tool: "quizlet", title: "Studying with Test", url: "https://help.quizlet.com/hc/en-us/articles/360030642972-Studying-with-Test" },
  { id: "q-practice", tool: "quizlet", title: "Studying with Practice Tests", url: "https://help.quizlet.com/hc/en-us/articles/25946589648013-Studying-with-Practice-Tests" },
  { id: "q-progress", tool: "quizlet", title: "Using Class Progress", url: "https://help.quizlet.com/hc/en-us/articles/360030512432-Using-Class-Progress" },
  { id: "q-assign", tool: "quizlet", title: "Using Assignments", url: "https://help.quizlet.com/hc/en-us/articles/39836814088845-Using-Assignments" },
  { id: "q-audio", tool: "quizlet", title: "Troubleshooting audio playback (text-to-speech)", url: "https://help.quizlet.com/hc/en-us/articles/360030514232-Troubleshooting-audio-playback" },
  { id: "q-ai", tool: "quizlet", title: "Creating study sets with Smart Assist", url: "https://help.quizlet.com/hc/en-us/articles/39606772122509-Creating-study-sets-with-Smart-Assist" },
  { id: "q-free", tool: "quizlet", title: "Free student access to Learn and Test", url: "https://help.quizlet.com/hc/en-us/articles/34270983035149-Free-student-access-to-Learn-and-Test-modes" },
];

// ---------------------------------------------------------------- the tools in brief
export const BRIEFS: { id: ToolId; plays: string; needs: string; plans: string; src?: string[] }[] = [
  {
    id: "qrewzi",
    plays: "Teams move between QR stations around the room, or play at their desks, each at its own pace. The same set gives practice tests for home, a quiz and a unit test.",
    needs: "One device per team, or one each: phone, tablet or Chromebook, in the app or a browser. No accounts; a name and a four-digit PIN for study and tests.",
    plans: "Three months of everything free, then the Free plan, Plus (study codes) or Pro (quiz and test codes).",
  },
  {
    id: "kahoot",
    plays: "Live, with the question on the projector and everyone answering at once, or assigned for students to do at their own pace.",
    needs: "A device each, or one per team in Team mode, or none in Unplugged. No account to join.",
    plans: "A free plan (Go) and paid plans from Bronze to One; several question types and game experiences are on paid plans.",
    src: ["k-host", "k-assign", "k-team", "k-unplugged", "k-join", "k-plans"],
  },
  {
    id: "blooket",
    plays: "Game modes hosted live from a shared screen, played solo, or set as homework, depending on the mode.",
    needs: "A device each. No student account for live games or homework.",
    plans: "A free plan for up to 60 players; Plus adds more players, some game modes and fuller reports.",
    src: ["b-modes", "b-host", "b-accounts", "b-plans"],
  },
  {
    id: "gimkit",
    plays: "Live games in which each student answers at their own pace and earns in-game cash; assignments for homework.",
    needs: "A device each. Student accounts are optional.",
    plans: "A free plan with a few game modes at a time; Pro for assignments, every mode, images and audio.",
    src: ["g-home", "g-assign", "g-accounts", "g-pro"],
  },
  {
    id: "wayground",
    plays: "Quizzes, lessons and assessments, live (teacher-paced or student-paced) or as homework. Quizizz took the name Wayground in 2025.",
    needs: "A device each, except in Paper Mode and Board Battle. No account to join; one for some features.",
    plans: "A free plan; Super and School & District plans add question types, accommodations and AI grading options.",
    src: ["w-rename", "w-live", "w-async", "w-what", "w-paper", "w-board", "w-join", "w-plans"],
  },
  {
    id: "quizlet",
    plays: "Sets of terms and definitions studied in several ways (Flashcards, Learn, Test, games), with Quizlet Live for the classroom, in teams or as individuals.",
    needs: "A device each for Quizlet Live. Students in a teacher's class who are signed in get Learn and Test free.",
    plans: "A free plan with limited Learn and Test; Quizlet Plus and Plus for teachers for the rest.",
    src: ["q-study", "q-live", "q-free"],
  },
];

// ---------------------------------------------------------------- the comparison
const y = (text: string, src?: string[]): Cell => ({ mark: "yes", text, src });
const p = (text: string, src?: string[]): Cell => ({ mark: "partly", text, src });
const n = (text: string, src?: string[]): Cell => ({ mark: "no", text, src });

export const GROUPS: Group[] = [
  {
    id: "pedagogy",
    title: "Pedagogical design",
    criterion: "Is the way students learn built into how it plays?",
    rows: [
      {
        id: "recall",
        label: "Recall, not just recognition",
        why: "Writing an answer from memory is harder than picking it from a list, and with feedback it is remembered longer.",
        cells: {
          qrewzi: y("Typed blanks, short answers, working and an essay, as well as matching and multiple choice."),
          kahoot: p("Most question types have students choose or arrange answers. Type answer (up to 20 characters) is on the Gold and One plans.", ["k-types", "k-plans"]),
          blooket: y("Typing Answer questions, checked as an exact match or as containing the key words, as well as multiple choice.", ["b-types"]),
          gimkit: y("Text Input questions, where the student types the answer, as well as multiple choice.", ["g-text"]),
          wayground: y("Fill-in-the-blank and open-ended questions on every plan.", ["w-types"]),
          quizlet: y("Written questions in Learn, among the question types a student can choose.", ["q-learn"]),
        },
      },
      {
        id: "mixed",
        label: "Mixed practice",
        why: "Practice that mixes topics and kinds of problem, rather than one kind at a time, holds up better on a later test.",
        cells: {
          qrewzi: y("A practice test mixes the whole unit: matching, multiple choice, true or false, fill in the blanks and short answers."),
          kahoot: p("Question order can be shuffled in live games, not in assigned kahoots.", ["k-settings", "k-random"]),
          blooket: y("The host can shuffle the question order.", ["b-host"]),
          gimkit: y("After every question has been asked once, questions come back in a weighted random draw.", ["g-repeat"]),
          wayground: y("Questions and answer options can be shuffled for each student.", ["w-settings"]),
          quizlet: y("Learn can shuffle the terms.", ["q-learn"]),
        },
      },
      {
        id: "explain",
        label: "Students explain their thinking",
        why: "Putting an idea into their own words, or arguing it with someone, is where students do the most thinking.",
        cells: {
          qrewzi: y("Short answers that ask why and how, an essay, teach-back and debate tasks, and a group task to end a test."),
          kahoot: p("Open-ended and Brainstorm questions collect answers but score no points, and are not open to students under 16.", ["k-open"]),
          blooket: n("Not found: questions are multiple choice or a typed answer.", ["b-types"]),
          gimkit: n("Not found."),
          wayground: y("Open-ended questions on every plan; audio and video answers on paid plans.", ["w-types", "w-open"]),
          quizlet: p("Written answers give a term or definition; AI Practice Tests can include written questions.", ["q-grading", "q-practice"]),
        },
      },
      {
        id: "talk",
        label: "Collaboration and talk",
        why: "Working an answer out together is the most demanding kind of engagement, and the one most tied to learning.",
        cells: {
          qrewzi: y("A team shares one device and agrees each answer while the turn passes round; a test can end with a group task."),
          kahoot: y("Team mode: a team can huddle round one device, with time to talk before answering.", ["k-team"]),
          blooket: p("Team modes add up each player's score; each plays on their own device.", ["b-teams"]),
          gimkit: p("Team modes, and Trust No One, where students meet to discuss what they saw.", ["g-options", "g-tno"]),
          wayground: y("Team mode pools scores; in Board Battle the whole team talks each question through, with no devices.", ["w-live", "w-board"]),
          quizlet: y("In Quizlet Live's teams mode, players work together to match each term.", ["q-live", "q-live-diagram"]),
        },
      },
      {
        id: "pace",
        label: "Room to think",
        why: "When speed decides the score, the quickest students win and the slower thinkers learn to guess.",
        cells: {
          qrewzi: p("Teams work at their own pace and right answers score, but some tasks are races (buzzer clues, flashcard races, duels) and finishing order earns a bonus."),
          kahoot: y("Faster answers score more in a standard live game; Accuracy mode, on every plan, scores right answers only, and assignments can turn the timer off.", ["k-points", "k-accuracy"]),
          blooket: p("Many modes reward speed (in Classic, faster right answers earn more); some do not. A setting to turn it off: not found.", ["b-classic", "b-modes"]),
          gimkit: y("Each student answers at their own pace and earns cash for each right answer. Draw That's speed bonus can be turned off.", ["g-home", "g-draw"]),
          wayground: y("With the timer on, faster right answers earn up to 400 more; with it off, a right answer scores the same however long it took.", ["w-timer", "w-settings"]),
          quizlet: p("Match is a race against the clock and Blast rewards the first to answer. How Quizlet Live is won: not described on its help pages.", ["q-study"]),
        },
      },
    ],
  },
  {
    id: "impact",
    title: "Learning impact",
    criterion: "What happens after a student answers?",
    rows: [
      {
        id: "why",
        label: "Feedback that says why",
        why: "An explanation helps students use what they learned on new questions more than being told the right answer.",
        cells: {
          qrewzi: y("After each part of a practice test, every question shows the answer and a one-line reason; written answers get comments on what was written."),
          kahoot: p("No explanation field found; a teacher can add a slide between questions to explain an answer.", ["k-types"]),
          blooket: n("Right or wrong, and the correct answer if the host turns that on. An explanation: not found.", ["b-host", "b-study"]),
          gimkit: n("Right or wrong, and a review of the correct answer. An explanation: not found.", ["g-practice", "g-read"]),
          wayground: y("A teacher-written explanation appears after each answer; AI explanations of wrong answers are in beta.", ["w-explain", "w-ai-explain"]),
          quizlet: p("Expert Solutions explain textbook questions step by step. An explanation on a set's own cards: not found.", ["q-study"]),
        },
      },
      {
        id: "marked",
        label: "Written answers marked, with comments",
        why: "Sentence-length answers are where understanding shows, and they are only worth asking for if they are marked.",
        cells: {
          qrewzi: y("Short answers, essays and group tasks are marked by AI against the unit, with comments; you review them and can change any mark."),
          kahoot: n("Open-ended answers score no points; Type answer is checked against up to four accepted answers.", ["k-open", "k-types"]),
          blooket: n("Typed answers are checked as an exact match or as containing the key words. Marking of longer answers: not found.", ["b-types"]),
          gimkit: n("Not found.", ["g-text"]),
          wayground: y("Open-ended answers scored by AI against a rubric, with feedback, or marked by hand; some rubric options are on paid plans.", ["w-open"]),
          quizlet: p("In Learn, typed answers can be accepted by meaning, with synonyms and rephrasing. Longer written answers: not found.", ["q-grading"]),
        },
      },
      {
        id: "again",
        label: "Mistakes come back",
        why: "Meeting a missed question again, after the answer, is what turns a mistake into learning.",
        cells: {
          qrewzi: y("A team that finishes early redoes its weakest tasks in a fresh version; in partner study a missed question comes back; a short answer met again shows last time's answer and feedback."),
          kahoot: y("After a game, the app's Correct missed questions replays the ones a player got wrong.", ["k-missed"]),
          blooket: y("Mastery ordering shows wrongly answered questions more often.", ["b-host"]),
          gimkit: y("Smart Repetition brings back the questions each student missed more often, in every game.", ["g-repeat"]),
          wayground: y("Redemption questions at the end of a session; Mastery Peak brings a missed question back after a while.", ["w-settings", "w-peak"]),
          quizlet: y("Spaced Repetition brings a forgotten card back within minutes; Learn can have students retype answers they missed.", ["q-spaced", "q-learn"]),
        },
      },
    ],
  },
  {
    id: "study",
    title: "Study effectiveness",
    criterion: "Does it help students study on their own?",
    rows: [
      {
        id: "home",
        label: "Self-paced study at home",
        why: "Most practice happens away from the classroom, at the student's own pace.",
        cells: {
          qrewzi: y("A study code opens practice tests as often as they like, alone or with a partner, on any device; an unfinished one carries on for 14 days. Study codes are on Plus."),
          kahoot: y("Assigned kahoots on every plan; Flashcards and Learn in the app.", ["k-assign", "k-plans"]),
          blooket: y("Homework, solo play and a flashcard-style Study mode.", ["b-homework", "b-study"]),
          gimkit: p("Assignments are on Pro; a free practice link has the questions only, with no scoring or reports.", ["g-assign"]),
          wayground: y("Homework in Practice, Accuracy and Testing modes, and flashcards.", ["w-async", "w-flashcards"]),
          quizlet: y("Flashcards, Learn, Test and games; a teacher can assign any of them with start and end dates.", ["q-study", "q-assign"]),
        },
      },
      {
        id: "spaced",
        label: "Review spaced over days",
        why: "Practice spread over days is remembered far longer than the same practice in one sitting.",
        cells: {
          qrewzi: n("No review schedule. Each practice test draws the questions a student has met least, so the whole bank comes round before any question comes round a third time."),
          kahoot: p("Learn mode is described as spaced repetition; how it schedules reviews is not documented.", ["k-study"]),
          blooket: n("Not found."),
          gimkit: n("Missed questions come back within a game; spacing over days: not found.", ["g-repeat"]),
          wayground: y("Flashcards with built-in spaced repetition; Mastery Peak spaces missed questions within a session.", ["w-flashcards", "w-peak"]),
          quizlet: y("Spaced Repetition brings each card back in minutes, about a day, or four or more days, by how well it was remembered.", ["q-spaced"]),
        },
      },
    ],
  },
  {
    id: "test-prep",
    title: "Test-prep suitability",
    criterion: "Does it get students ready for the real test, and run it?",
    rows: [
      {
        id: "shape",
        label: "Practice in the test's own shape",
        why: "Practising with the same kinds of question as the test means a better score reflects what was learned.",
        cells: {
          qrewzi: y("Practice tests have the unit test's parts and kinds of question, drawn fresh each time from questions kept apart from the test's own."),
          kahoot: p("The app's Test mode hides answers until the end, and the AI can write a practice test; both on Gold and One.", ["k-app-study", "k-ai-formats", "k-plans"]),
          blooket: n("Not found."),
          gimkit: n("Not found."),
          wayground: y("A quiz can be practised, then sat in Testing mode; Common Assessments, a School and District add-on, follow state test formats.", ["w-async", "w-common"]),
          quizlet: y("Test, and AI Practice Tests that 'simulate a real exam' with a time limit; full use on Plus.", ["q-test", "q-practice"]),
        },
      },
      {
        id: "test",
        label: "A real quiz or test mode",
        why: "One attempt, a time limit and a quiet screen let the teacher see what each student knows on their own.",
        cells: {
          qrewzi: y("One attempt, fifty minutes, no marks until the end; leaving the screen pauses the test until you unlock it. Quiz and test codes are on Pro."),
          kahoot: p("Assignments with a deadline and question timers; the app's Test mode is for a student's own practice.", ["k-assign", "k-app-study"]),
          blooket: n("Not found: every mode is a game.", ["b-modes"]),
          gimkit: n("Not found: every mode is a game.", ["g-options"]),
          wayground: y("Test and Testing modes, distraction-free, with review before submitting on some plans; timers per question (a whole-test time limit: not found).", ["w-live", "w-async", "w-review"]),
          quizlet: n("Not found. Quizlet's help centre says it 'isn't intended to be an assessment tool'.", ["q-progress"]),
        },
      },
      {
        id: "access",
        label: "Accommodations",
        why: "Read-aloud, extra time and fewer choices let a student show what they know rather than how fast they read.",
        cells: {
          qrewzi: p("A student marked IEP drags words into the blanks, gets a bank of jot notes and half the word target. No read-aloud or per-student extra time."),
          kahoot: p("Read-aloud in the app for everyone; question timers up to four minutes, or no limit in Accuracy mode; a higher-contrast option.", ["k-read", "k-access", "k-accuracy"]),
          blooket: p("Questions and answers read aloud, turned on by the student.", ["b-tts"]),
          gimkit: p("Read to Me reads questions and answers aloud in live games.", ["g-read"]),
          wayground: y("Extra time, read-aloud, fewer answer choices, AI hints, speech-to-text, translation and more; four of them on the free plan.", ["w-access", "w-plans"]),
          quizlet: p("Text-to-speech in Flashcards, Learn and Test (not in Match or Quizlet Live).", ["q-audio"]),
        },
      },
      {
        id: "reports",
        label: "Reports for the teacher",
        why: "A teacher needs to see who knows what, question by question.",
        cells: {
          qrewzi: y("A report after every game with each student's grade; test results by email with an Edsby import file, every mark open to change."),
          kahoot: y("Per player and per question, with the hardest questions; fuller reports on paid plans.", ["k-reports", "k-plans"]),
          blooket: y("Accuracy and a leaderboard on the free plan; per-question and per-student detail on Plus.", ["b-reports"]),
          gimkit: y("Student, class and question views for games and assignments.", ["g-reports"]),
          wayground: y("Per-student and per-question accuracy, with response times.", ["w-reports"]),
          quizlet: y("Assignment results by student and by term; Class Progress on Plus for teachers.", ["q-assign", "q-progress"]),
        },
      },
    ],
  },
  {
    id: "engagement",
    title: "Engagement",
    criterion: "Does it keep the whole class in it?",
    rows: [
      {
        id: "game",
        label: "Game mechanics",
        why: "Points, surprises and a shared scoreboard keep students playing long enough to practise.",
        cells: {
          qrewzi: y("A live scoreboard, castles built task by task, Qrew the fox, a face-off between the two halves of the room, trophies that change hands, FlipOut cards."),
          kahoot: y("Points and a ranking after each question; game experiences such as Team, Tallest Tower and Submarine Squad, some on paid plans.", ["k-points", "k-experiences"]),
          blooket: y("Game modes with worlds of their own, such as Gold Quest, Tower Defense and Racing; some on Plus.", ["b-modes"]),
          gimkit: y("Cash for right answers, spent in a shop; 2D game modes.", ["g-home", "g-read", "g-pro"]),
          wayground: y("Power-ups, themes, leaderboards, Mastery Peak's climb and Playground games.", ["w-powerups", "w-peak", "w-playground"]),
          quizlet: y("Games: Match, Blast, Blocks and Quizlet Live.", ["q-study"]),
        },
      },
      {
        id: "move",
        label: "Movement",
        why: "Lessons that get students up add physical activity and, in the research, a modest gain in learning.",
        cells: {
          qrewzi: y("Teams walk to QR stations around the room, the gym or the schoolyard; some tasks have them act, mime or move. Or play at the desks."),
          kahoot: p("Unplugged needs no student devices, and students can move to parts of the room for each answer.", ["k-unplugged"]),
          blooket: n("Not found."),
          gimkit: n("Not found."),
          wayground: n("Not found. In Paper Mode students hold up printed answer cards.", ["w-paper"]),
          quizlet: p("Quizlet Live's teams mode asks players to sit with their teammates.", ["q-live"]),
        },
      },
    ],
  },
  {
    id: "freshness",
    title: "Freshness and variety",
    criterion: "Is it different each time it's played?",
    rows: [
      {
        id: "fresh",
        label: "New questions each time",
        why: "A set replayed as it was can be passed by remembering the answers rather than knowing them.",
        cells: {
          qrewzi: y("Practice tests and practice quizzes are drawn fresh from the unit's bank, questions a student has met least first. A live game plays its set's tasks, with different surprises each time."),
          kahoot: p("The same questions each time; their order can be shuffled in live games. Drawing from a larger pool: not found.", ["k-settings", "k-random"]),
          blooket: p("The same set, in order, shuffled or by mastery. Drawing from a larger pool: not found.", ["b-host"]),
          gimkit: p("The same kit, repeating in a weighted random draw.", ["g-repeat"]),
          wayground: y("Rotating question sets give a different subset on each attempt (paid plans); questions can be shuffled.", ["w-rotating", "w-settings"]),
          quizlet: p("Terms can be shuffled; Test asks the number and kinds of question the student chooses.", ["q-learn", "q-test"]),
        },
      },
      {
        id: "kinds",
        label: "Kinds of activity",
        why: "Different kinds of task make students use the same idea in different ways.",
        cells: {
          qrewzi: y("85+ task types: sorting, ordering, matching, timelines, drawing, photos, acting, debates, puzzles and quizzes."),
          kahoot: y("13 question types plus slides; several on paid plans.", ["k-types", "k-plans"]),
          blooket: p("Two question types: multiple choice and typed answer.", ["b-types"]),
          gimkit: p("Multiple choice and typed answers, and drawing in Draw That.", ["g-kit", "g-text", "g-draw"]),
          wayground: y("20+ question types, including drawing, matching, graphing and audio response; many on paid plans.", ["w-types"]),
          quizlet: p("Term-and-definition cards, studied through different question types in Learn and Test; diagram sets on Plus.", ["q-study", "q-learn"]),
        },
      },
      {
        id: "modes",
        label: "Ways to play",
        why: "A different game on the same content brings students back to it.",
        cells: {
          qrewzi: y("Station games, a mystery-box grid, one-on-one duels, a whole game of face-offs, Solo Arena, escape rooms, trivia nights, outdoor photo hunts and Think-Pair-Share."),
          kahoot: y("16 game experiences, from Classic and Team to Unplugged; some on paid plans.", ["k-experiences"]),
          blooket: y("About 20 game modes, plus seasonal ones; five on Plus.", ["b-modes"]),
          gimkit: y("10+ modes, about three of them free at any time and the rest on Pro for a full class; teachers can build their own in Gimkit Creative.", ["g-home", "g-pro", "g-creative"]),
          wayground: y("Classic, Team, Mastery Peak, Test and Paper modes, and Playground games.", ["w-live", "w-playground"]),
          quizlet: y("Eight ways to study, including Learn, Test, Match, Blast and Quizlet Live.", ["q-study"]),
        },
      },
      {
        id: "ai",
        label: "Written for you by AI",
        why: "Fresh material takes time to write; AI can draft it, and a teacher still checks it.",
        cells: {
          qrewzi: y("Describe the lesson and Qrewzi writes the tasks; study and test questions are fact-checked, and any it doubts wait for you."),
          kahoot: y("AI question generator from a topic, PDF or web page, on paid plans.", ["k-ai", "k-plans"]),
          blooket: p("Through Khan Academy's Khanmigo Blooket Generator, outside Blooket.", ["b-ai"]),
          gimkit: n("Not found on its help pages."),
          wayground: y("Generates quizzes from a prompt, a document, a web page, a video or photos of a worksheet.", ["w-ai"]),
          quizlet: y("Smart Assist turns notes, a file or a topic into flashcards; AI Practice Tests and Study Guides.", ["q-ai", "q-study"]),
        },
      },
    ],
  },
];

// ---------------------------------------------------------------- when another tool fits better
export const BETTER: { id: ToolId; body: string; src?: string[] }[] = [
  { id: "kahoot", body: "For a quick check of the whole class at once, from their seats, with the question on the projector, Kahoot is hard to beat. Its Unplugged experience runs with no student devices at all.", src: ["k-host", "k-unplugged"] },
  { id: "blooket", body: "For students who will happily replay a set at home for the game itself, Blooket has around twenty game worlds, homework with no student accounts, and a free plan for up to 60 players.", src: ["b-modes", "b-accounts", "b-plans"] },
  { id: "gimkit", body: "For drilling a set until it sticks, Gimkit brings back each student's missed questions in every game, with nothing to set up, while each student plays at their own pace.", src: ["g-repeat", "g-home"] },
  { id: "wayground", body: "For formal assessment with accommodations (extra time, read-aloud, fewer answer choices, translation) and question types that follow state tests, Wayground offers far more than Qrewzi does.", src: ["w-access", "w-common"] },
  { id: "quizlet", body: "For a student memorizing terms on their own over weeks, Quizlet's Spaced Repetition schedules each card's next review by how well it was remembered. Qrewzi has no review schedule.", src: ["q-spaced"] },
];

// ---------------------------------------------------------------- the research
export type Finding = { title: string; body: string; cites: string[] };
export const FINDINGS: Finding[] = [
  {
    title: "Recalling beats re-reading",
    body: "Students who practised recalling a passage remembered much more of it a week later than students who read it again. A meta-analysis of practice testing found the same across many studies. Writing an answer out helps most when feedback follows.",
    cites: ["roediger2006", "adesope2017", "kang2007"],
  },
  {
    title: "Spacing",
    body: "Practice spread out over time is remembered longer than the same practice in one sitting, and the best gap between sessions grows with how long the material must be remembered.",
    cites: ["cepeda2006", "cepeda2008"],
  },
  {
    title: "Mixing it up",
    body: "Students who practised mixed kinds of maths problem did better on a test a week later than students who practised one kind at a time.",
    cites: ["rohrer2007"],
  },
  {
    title: "Feedback that explains",
    body: "Feedback is one of the strongest influences on learning, for better or worse depending on its kind. Explaining why an answer is right helped students answer new questions more than being told the right answer.",
    cites: ["hattie2007", "shute2008", "butler2013"],
  },
  {
    title: "Talking it through",
    body: "Students learn more as they move from listening, to doing, to producing their own explanations, to building them with others. Cooperative learning rests on more than a thousand studies.",
    cites: ["chi2014", "johnson2009"],
  },
  {
    title: "Moving",
    body: "In a meta-analysis of 42 studies, physically active lessons raised activity a great deal and improved educational outcomes, most clearly in the lesson itself, with no clear effect on cognition; many of the studies had a high risk of bias.",
    cites: ["norris2020"],
  },
];

export const CITATIONS: Record<string, { short: string; full: string; doi: string }> = {
  roediger2006: { short: "Roediger & Karpicke, 2006", full: "Roediger, H. L., III, & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.", doi: "10.1111/j.1467-9280.2006.01693.x" },
  adesope2017: { short: "Adesope, Trevisan & Sundararajan, 2017", full: "Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. Review of Educational Research, 87(3), 659–701.", doi: "10.3102/0034654316689306" },
  kang2007: { short: "Kang, McDermott & Roediger, 2007", full: "Kang, S. H. K., McDermott, K. B., & Roediger, H. L., III (2007). Test format and corrective feedback modify the effect of testing on long-term retention. European Journal of Cognitive Psychology, 19(4–5), 528–558.", doi: "10.1080/09541440601056620" },
  cepeda2006: { short: "Cepeda et al., 2006", full: "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354–380.", doi: "10.1037/0033-2909.132.3.354" },
  cepeda2008: { short: "Cepeda et al., 2008", full: "Cepeda, N. J., Vul, E., Rohrer, D., Wixted, J. T., & Pashler, H. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. Psychological Science, 19(11), 1095–1102.", doi: "10.1111/j.1467-9280.2008.02209.x" },
  rohrer2007: { short: "Rohrer & Taylor, 2007", full: "Rohrer, D., & Taylor, K. (2007). The shuffling of mathematics problems improves learning. Instructional Science, 35(6), 481–498.", doi: "10.1007/s11251-007-9015-8" },
  hattie2007: { short: "Hattie & Timperley, 2007", full: "Hattie, J., & Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81–112.", doi: "10.3102/003465430298487" },
  shute2008: { short: "Shute, 2008", full: "Shute, V. J. (2008). Focus on formative feedback. Review of Educational Research, 78(1), 153–189.", doi: "10.3102/0034654307313795" },
  butler2013: { short: "Butler, Godbole & Marsh, 2013", full: "Butler, A. C., Godbole, N., & Marsh, E. J. (2013). Explanation feedback is better than correct answer feedback for promoting transfer of learning. Journal of Educational Psychology, 105(2), 290–298.", doi: "10.1037/a0031026" },
  chi2014: { short: "Chi & Wylie, 2014", full: "Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. Educational Psychologist, 49(4), 219–243.", doi: "10.1080/00461520.2014.965823" },
  johnson2009: { short: "Johnson & Johnson, 2009", full: "Johnson, D. W., & Johnson, R. T. (2009). An educational psychology success story: Social interdependence theory and cooperative learning. Educational Researcher, 38(5), 365–379.", doi: "10.3102/0013189X09339057" },
  norris2020: { short: "Norris et al., 2020", full: "Norris, E., van Steen, T., Direito, A., & Stamatakis, E. (2020). Physically active lessons in schools and their impact on physical activity, educational, health and cognition outcomes: A systematic review and meta-analysis. British Journal of Sports Medicine, 54(14), 826–838.", doi: "10.1136/bjsports-2018-100502" },
  dunlosky2013: { short: "Dunlosky et al., 2013", full: "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques: Promising directions from cognitive and educational psychology. Psychological Science in the Public Interest, 14(1), 4–58.", doi: "10.1177/1529100612453266" },
};
