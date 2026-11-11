import { redirect } from "next/navigation";

// qrewzi.com/study — the address in every Study & Test invitation (the codes
// come from each set's card on set.qrewzi.com). The player itself now lives in
// the student app (curriculate repo, student-app/src/study/StudyPlayer.jsx), so
// practice runs on Qrewzi's own task screens; this forwards there, code and all.
// A class's tablet locked to play.qrewzi.com reaches it from the join screen.
const PLAYER = (process.env.NEXT_PUBLIC_STUDY_PLAYER || "https://play.qrewzi.com").replace(/\/$/, "");

export default function StudyPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(searchParams || {})) {
    if (k === "from") continue; // the old framed page's marker; the player is the app now
    for (const one of Array.isArray(v) ? v : v != null ? [v] : []) q.append(k, one);
  }
  const qs = q.toString();
  redirect(`${PLAYER}/study${qs ? `?${qs}` : ""}`);
}
