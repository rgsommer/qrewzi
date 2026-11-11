"use client";

// qrewzi.com/study — Study & Test mode (curriculate repo, docs/test-mode-design.md).
//
// A student arrives from the invitation their teacher pasted into the class
// post: ?code=K7Q-MXR. A study code opens practice tests in the shape of the
// real test, with feedback after every part and a class leaderboard of
// personal bests; a test code opens the test itself — one attempt, 50 minutes,
// nothing shown back until the end, then a summary and a provisional grade.
//
// The browser never has an answer key: every part is marked by the server
// (api.curriculate.net/study). Pasting into answers is off, and leaving the
// screen is reported — a practice test that left does not count toward the
// best, and a test records it for the teacher. The page covers the site's own
// menu, so there is nowhere to wander off to mid-test.

import { useCallback, useEffect, useRef, useState } from "react";

const API = (process.env.NEXT_PUBLIC_STUDY_API || "https://api.curriculate.net").replace(/\/$/, "") + "/study";

type Name = { id: string; name: string };
type ClassList = { id: string; className: string; names: Name[] };
type Join = { ok: boolean; kind: "study" | "quiz" | "test"; unit: string; className?: string; signIn: "names" | "codes" | "typed"; classes?: ClassList[]; names?: Name[]; notStarted?: boolean; minutes?: number; error?: string };
type Result = { id: string; question?: string; marks: number; outOf: number; your?: string; correct?: string; why?: string; unmarked?: boolean; criteria?: { criterion: string; met: string }[] };
type Section = {
  index: number; kind: "match" | "mc" | "tf" | "cloze" | "short" | "essay" | "collab"; title: string; how: string; outOf: number; handedIn: boolean;
  terms?: { id: string; text: string }[]; choices?: { letter: string; text: string }[];
  questions?: { id: string; text: string; rubric?: string[]; options?: string[] }[];
  results?: Result[]; marks?: number; sectionOutOf?: number; unmarked?: number;
};
type Attempt = { id: string; kind: "study" | "quiz" | "test"; counted: boolean; locked?: boolean; finished: boolean; marks?: number; outOf?: number; percent?: number; minutes?: number; startedAt?: string; summary?: string; note?: string; sections: Section[] };
type Me = { unit: string; name: string; best: number | null; tests: number; last: number | null; openAttempt: string | null; board: { rank: number; id: string; name: string; best: number; tests: number }[]; me: string };
type Answers = Record<string, string | boolean>;
type Group = { id: string; status: "forming" | "writing" | "handedIn"; prompt: string; rubric: string[]; members: string[]; scribe: boolean; scribeName: string; text: string; waitedMs: number; stillWorking: number; canGoSolo: boolean; marks?: number; feedback?: string };

const normCode = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
const showCode = (s: string) => { const c = normCode(s); return c.length === 6 ? `${c.slice(0, 3)}-${c.slice(3)}` : c; };
const store = {
  get(k: string) { try { return JSON.parse(sessionStorage.getItem(k) || "null"); } catch { return null; } },
  set(k: string, v: unknown) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode: fine */ } },
  del(k: string) { try { sessionStorage.removeItem(k); } catch { /* fine */ } },
};

/** A random key this browser keeps, so a quiz or test sat by two names on one device can be flagged for the teacher. */
function deviceKey(): string {
  try {
    let k = localStorage.getItem("qz:study:device") || "";
    if (!/^[A-Za-z0-9-]{8,64}$/.test(k)) {
      k = `d-${Math.random().toString(36).slice(2, 12)}${Date.now().toString(36)}`;
      localStorage.setItem("qz:study:device", k);
    }
    return k;
  } catch {
    return "";
  }
}

async function call<T>(path: string, opts: { method?: string; body?: unknown; token?: string } = {}): Promise<T> {
  const res = await fetch(API + path, {
    method: opts.method || "GET",
    headers: { "Content-Type": "application/json", ...(opts.token ? { Authorization: `Bearer ${opts.token}` } : {}) },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) throw Object.assign(new Error(data.error || `Something went wrong (${res.status}).`), { status: res.status });
  return data as T;
}

export default function StudyPage() {
  const [code, setCode] = useState("");
  const [typed, setTyped] = useState("");
  const [join, setJoin] = useState<Join | null>(null);
  const [auth, setAuth] = useState<{ token: string; name: string } | null>(null);
  const [me, setMe] = useState<Me | null>(null);
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const openCode = useCallback(async (raw: string) => {
    const c = normCode(raw);
    if (c.length !== 6) { setError("A code has six letters and numbers, like K7Q-MXR."); return; }
    setBusy(true); setError("");
    try {
      const j = await call<Join>(`/join/${c}`);
      setCode(c); setJoin(j);
      const saved = store.get(`qz:study:${c}`);
      if (saved?.token) setAuth(saved);
      const u = new URL(window.location.href);
      u.searchParams.set("code", showCode(c));
      window.history.replaceState(null, "", u.toString());
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }, []);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("code");
    if (q) { setTyped(showCode(q)); openCode(q); }
  }, [openCode]);

  const signedIn = (a: { token: string; name: string }) => { setAuth(a); store.set(`qz:study:${code}`, a); };
  const signOut = () => { store.del(`qz:study:${code}`); setAuth(null); setMe(null); setAttempt(null); };

  const loadMe = useCallback(async () => {
    if (!auth || !join || join.kind !== "study") return;
    try { setMe(await call<Me>(`/s/${code}/me`, { token: auth.token })); }
    catch (e) { if ((e as { status?: number }).status === 401) signOut(); else setError((e as Error).message); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, join, code]);
  useEffect(() => { loadMe(); }, [loadMe]);

  const start = async (fresh = false) => {
    if (!auth) return;
    setBusy(true); setError("");
    try { setAttempt((await call<{ attempt: Attempt }>(`/s/${code}/attempts`, { method: "POST", token: auth.token, body: { fresh, device: deviceKey() } })).attempt); }
    catch (e) {
      // A sign-in the server no longer knows (kept in this tab from before): sign in again.
      if ((e as { status?: number }).status === 401) { signOut(); setError("Please sign in again."); }
      else setError((e as Error).message);
    } finally { setBusy(false); }
  };

  return (
    <div style={S.cover} onCopy={(e) => e.preventDefault()} onCut={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}>
      <div style={S.page}>
        <header style={S.top}>
          <strong style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>Qrewzi</strong>
          {join && <span style={S.tag}>{join.kind === "test" ? "📝 Test" : join.kind === "quiz" ? "✏️ Quiz" : "📚 Study"} · {join.unit}</span>}
          {auth && !attempt && <button style={S.link} onClick={signOut}>Not {auth.name}? Sign out</button>}
        </header>
        {error && <p role="alert" style={S.alert}>{error}</p>}

        {!join && (
          <section style={S.card}>
            <h1 style={S.h1}>Enter your code</h1>
            <p>Your teacher&rsquo;s post has a study code or a test code.</p>
            <form onSubmit={(e) => { e.preventDefault(); openCode(typed); }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <input value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="K7Q-MXR" aria-label="Code" autoCapitalize="characters" autoComplete="off" style={{ ...S.input, fontSize: 24, letterSpacing: 3, width: 200, textTransform: "uppercase" }} />
              <button style={S.primary} disabled={busy}>Go</button>
            </form>
          </section>
        )}

        {join && !auth && <SignIn join={join} code={code} onIn={signedIn} />}

        {join && auth && !attempt && join.kind === "study" && <StudyHome me={me} busy={busy} onStart={start} />}
        {join && auth && !attempt && join.kind !== "study" && <TestIntro join={join} name={auth.name} busy={busy} onStart={() => start(false)} />}

        {attempt && auth && (
          <Sitting attempt={attempt} token={auth.token} setAttempt={setAttempt}
            onDone={() => { setAttempt(null); loadMe(); }} onAgain={() => start(true)} />
        )}
      </div>
    </div>
  );
}

function SignIn({ join, code, onIn }: { join: Join; code: string; onIn: (a: { token: string; name: string }) => void }) {
  const [klass, setKlass] = useState<ClassList | null>(join.classes?.length === 1 ? join.classes[0] : null);
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  // A name is claimed with a 4-digit PIN: made the first time, asked for after.
  const [pinStep, setPinStep] = useState<null | { mode: "set" | "enter"; name: string; path: string; body: Record<string, unknown> }>(null);
  const pick = async (path: string, body: Record<string, unknown>) => {
    setBusy(true); setError("");
    try {
      const r = await call<{ token?: string; name: string; needPin?: "set" | "enter" }>(path, { method: "POST", body });
      if (r.needPin) { setPinStep({ mode: r.needPin, name: r.name, path, body }); return; }
      if (r.token) onIn({ token: r.token, name: r.name });
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  };
  if (pinStep) {
    return <PinStep step={pinStep} busy={busy} error={error} onBack={() => { setPinStep(null); setError(""); }}
      onPin={(pin) => pick(pinStep.path, { ...pinStep.body, pin })} onMismatch={() => setError("The two PINs aren't the same. Try again.")} />;
  }
  if (join.signIn === "typed") {
    return (
      <section style={S.card}>
        <h1 style={S.h1}>Who are you?</h1>
        <p>Type your first name and the first letter of your last name.</p>
        {error && <p role="alert" style={S.alert}>{error}</p>}
        <form onSubmit={(e) => { e.preventDefault(); pick(`/join/${code}/typed`, { name: login }); }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Ana S." aria-label="Your name" autoComplete="off" style={{ ...S.input, fontSize: 22, width: 240 }} />
          <button style={S.primary} disabled={busy}>Go</button>
        </form>
        <p style={S.small}>Type it the same way each time, so your practice stays together.</p>
      </section>
    );
  }
  if (join.signIn === "codes") {
    return (
      <section style={S.card}>
        <h1 style={S.h1}>Sign in</h1>
        <p>Type the login code on your slip.</p>
        {error && <p role="alert" style={S.alert}>{error}</p>}
        <form onSubmit={(e) => { e.preventDefault(); pick(`/join/${code}/code`, { loginCode: login }); }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Your login code" aria-label="Login code" autoCapitalize="characters" autoComplete="off" style={{ ...S.input, fontSize: 22, letterSpacing: 2, width: 220, textTransform: "uppercase" }} />
          <button style={S.primary} disabled={busy}>Sign in</button>
        </form>
      </section>
    );
  }
  const classes = join.classes || [];
  return (
    <section style={S.card}>
      {!klass ? (
        <>
          <h1 style={S.h1}>Which class are you in?</h1>
          {!classes.length && <p>Your teacher hasn&rsquo;t added a class list yet. Ask them to.</p>}
          <div style={S.grid}>{classes.map((c) => <button key={c.id} style={S.choice} onClick={() => setKlass(c)}>{c.className}</button>)}</div>
        </>
      ) : (
        <>
          <h1 style={S.h1}>Which one is you?</h1>
          {classes.length > 1 && <button style={S.link} onClick={() => setKlass(null)}>← {klass.className}</button>}
          {error && <p role="alert" style={S.alert}>{error}</p>}
          <div style={S.grid}>{klass.names.map((n) => <button key={n.id} style={S.choice} disabled={busy} onClick={() => pick(`/join/${code}/name`, { id: n.id })}>{n.name}</button>)}</div>
          <p style={S.small}>Only pick your own name — your practice and your results are yours.</p>
        </>
      )}
    </section>
  );
}

function PinStep({ step, busy, error, onBack, onPin, onMismatch }: {
  step: { mode: "set" | "enter"; name: string }; busy: boolean; error: string;
  onBack: () => void; onPin: (pin: string) => void; onMismatch: () => void;
}) {
  const [pin, setPin] = useState("");
  const [again, setAgain] = useState("");
  const digits = (v: string) => v.replace(/\D/g, "").slice(0, 4);
  const box = { ...S.input, fontSize: 28, letterSpacing: 10, width: 150, textAlign: "center" as const };
  const go = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length !== 4) return;
    if (step.mode === "set" && pin !== again) { onMismatch(); setAgain(""); return; }
    onPin(pin);
  };
  return (
    <section style={S.card}>
      <button style={S.link} onClick={onBack}>← Not {step.name}?</button>
      {step.mode === "set" ? (
        <>
          <h1 style={S.h1}>Make your PIN, {step.name}</h1>
          <p>Pick 4 numbers only you know. You&rsquo;ll type them every time you sign in, so nobody else can use your name.</p>
        </>
      ) : (
        <>
          <h1 style={S.h1}>Your PIN, {step.name}</h1>
          <p>Type the 4 numbers you made the first time.</p>
        </>
      )}
      {error && <p role="alert" style={S.alert}>{error}</p>}
      <form onSubmit={go} style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input value={pin} onChange={(e) => setPin(digits(e.target.value))} type="password" inputMode="numeric" autoComplete="off" aria-label="PIN" placeholder="••••" style={box} autoFocus />
        {step.mode === "set" && <input value={again} onChange={(e) => setAgain(digits(e.target.value))} type="password" inputMode="numeric" autoComplete="off" aria-label="PIN again" placeholder="again" style={box} />}
        <button style={S.primary} disabled={busy || pin.length !== 4 || (step.mode === "set" && again.length !== 4)}>{step.mode === "set" ? "Save my PIN" : "Sign in"}</button>
      </form>
      {step.mode === "enter" && <p style={S.small}>Forgot it, or this isn&rsquo;t your PIN? Ask your teacher to reset it.</p>}
    </section>
  );
}

function StudyHome({ me, busy, onStart }: { me: Me | null; busy: boolean; onStart: (fresh?: boolean) => void }) {
  if (!me) return <section style={S.card}><p>Loading…</p></section>;
  return (
    <>
      <section style={S.card}>
        <h1 style={S.h1}>Hi {me.name}</h1>
        <p>Each practice test is in the shape of the real one, with feedback after every part. Your best goes on the class board.</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", margin: "12px 0" }}>
          <Stat label="Your best" value={me.best == null ? "—" : `${me.best}%`} />
          <Stat label="Last time" value={me.last == null ? "—" : `${me.last}%`} />
          <Stat label="Practice tests" value={String(me.tests)} />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {me.openAttempt && <button style={S.primary} disabled={busy} onClick={() => onStart(false)}>Carry on where I was</button>}
          <button style={me.openAttempt ? S.button : S.primary} disabled={busy} onClick={() => onStart(!!me.openAttempt)}>{me.openAttempt ? "Start a new one" : "Start a practice test"}</button>
        </div>
        <p style={S.small}>Stay on this screen and type your own answers. If you switch to another tab or app, that practice test won&rsquo;t count toward your best.</p>
      </section>
      <Board me={me} />
    </>
  );
}

function Board({ me }: { me: Me }) {
  if (!me.board.length) return <section style={S.card}><h2 style={S.h2}>Class board</h2><p>No one has finished a practice test yet. Be the first.</p></section>;
  const mine = me.board.find((b) => b.id === me.me);
  const top = me.board.slice(0, 10);
  return (
    <section style={S.card}>
      <h2 style={S.h2}>Class board — best scores</h2>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {top.map((b) => (
          <li key={b.id} style={{ display: "flex", gap: 12, padding: "6px 8px", borderRadius: 8, background: b.id === me.me ? "var(--butter)" : "transparent" }}>
            <span style={{ width: 28, fontWeight: 700 }}>{b.rank}</span><span style={{ flex: 1 }}>{b.name}</span><strong>{b.best}%</strong>
          </li>
        ))}
      </ol>
      {mine && mine.rank > 10 && <p style={S.small}>You&rsquo;re {mine.rank} of {me.board.length} with {mine.best}%.</p>}
    </section>
  );
}

function TestIntro({ join, name, busy, onStart }: { join: Join; name: string; busy: boolean; onStart: () => void }) {
  return (
    <section style={S.card}>
      <h1 style={S.h1}>{join.unit}</h1>
      <p>Hi {name} — you have <strong>{join.minutes || 50} minutes</strong> and one attempt for this {join.kind}.</p>
      <ul style={{ lineHeight: 1.6 }}>
        <li>Close every other tab and app now. Once you start, stay on this screen — leaving it is recorded and your teacher sees it.</li>
        <li>Type your own answers. Pasting is turned off.</li>
        <li>Each part is saved when you hand it in. You can&rsquo;t go back to a part once it&rsquo;s handed in.</li>
        {join.kind === "test" && <li>The last part may be a group task: you&rsquo;ll be put with one or two classmates who reach it, and you write one answer together.</li>}
        <li>At the end you&rsquo;ll see a summary and a provisional grade. Your teacher reviews all your answers and decides your actual grade.</li>
      </ul>
      <button style={S.primary} disabled={busy} onClick={onStart}>Start the {join.kind}</button>
    </section>
  );
}

function Sitting({ attempt, token, setAttempt, onDone, onAgain }: { attempt: Attempt; token: string; setAttempt: (a: Attempt) => void; onDone: () => void; onAgain: () => void }) {
  const test = attempt.kind === "test" || attempt.kind === "quiz"; // a quiz runs as a test does
  const current = attempt.sections.find((s) => !s.handedIn);
  const [viewing, setViewing] = useState<number | null>(null); // a handed-in part's feedback (study)
  const [answers, setAnswers] = useState<Answers>(() => (current ? store.get(`qz:ans:${attempt.id}:${current.index}`) || {} : {}));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [left, setLeft] = useState(!attempt.counted);
  // A test pauses when the student leaves the screen, until the teacher unlocks it.
  const [locked, setLocked] = useState(!!attempt.locked);
  const awayAt = useRef<number | null>(null);

  // Leaving the screen: reported when they come back, with how long they were away.
  useEffect(() => {
    if (attempt.finished) return undefined;
    const onVis = () => {
      if (document.visibilityState === "hidden") { awayAt.current = Date.now(); return; }
      if (awayAt.current == null) return;
      const ms = Date.now() - awayAt.current;
      awayAt.current = null;
      setLeft(true);
      if (test) setLocked(true);
      call(`/attempts/${attempt.id}/left`, { method: "POST", token, body: { ms } }).catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [attempt.id, attempt.finished, token, test]);

  // Paused: look every few seconds for the teacher's unlock.
  useEffect(() => {
    if (!locked) return undefined;
    const t = setInterval(async () => {
      try {
        const r = await call<{ attempt: Attempt }>(`/attempts/${attempt.id}`, { token });
        if (!r.attempt.locked) { setLocked(false); setAttempt(r.attempt); }
      } catch { /* keep waiting */ }
    }, 4000);
    return () => clearInterval(t);
  }, [locked, attempt.id, token, setAttempt]);

  useEffect(() => { if (current) store.set(`qz:ans:${attempt.id}:${current.index}`, answers); }, [answers, attempt.id, current]);

  const handIn = useCallback(async (auto = false) => {
    if (!current) return;
    const asked = (current.terms || current.questions || []).length;
    const said = Object.values(answers).filter((v) => v !== "" && v != null).length;
    if (!auto && said < asked && !window.confirm(`You've answered ${said} of ${asked}. Hand this part in anyway?`)) return;
    setBusy(true); setError("");
    try {
      const r = await call<{ attempt: Attempt }>(`/attempts/${attempt.id}/sections/${current.index}`, { method: "POST", token, body: { answers } });
      store.del(`qz:ans:${attempt.id}:${current.index}`);
      setAnswers({});
      setAttempt(r.attempt);
      if (!test) setViewing(current.index);
      window.scrollTo(0, 0);
    } catch (e) {
      if ((e as { status?: number }).status === 423) setLocked(true);
      else setError((e as Error).message);
    } finally { setBusy(false); }
  }, [answers, attempt.id, current, setAttempt, test, token]);

  // The test's 50 minutes, from when it started; at the end the part on screen is handed in as it stands.
  const deadline = test && attempt.startedAt ? new Date(attempt.startedAt).getTime() + (attempt.minutes || 50) * 60000 : null;
  const [now, setNow] = useState(Date.now());
  useEffect(() => { if (!deadline || attempt.finished) return undefined; const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, [deadline, attempt.finished]);
  const remaining = deadline ? Math.max(0, deadline - now) : null;
  const timeUp = remaining === 0 && !attempt.finished;
  // (The group part hands itself in — GroupPart.)
  useEffect(() => { if (timeUp && current && current.kind !== "collab" && !busy && !locked) handIn(true); }, [timeUp, current, busy, handIn, locked]);

  if (viewing != null) {
    const s = attempt.sections[viewing];
    return <Feedback section={s} attempt={attempt} onNext={() => setViewing(null)} />;
  }
  if (attempt.finished) return <Finished attempt={attempt} onDone={onDone} onAgain={onAgain} />;
  if (!current) return null;
  if (test && locked) {
    return (
      <section style={S.card}>
        <h1 style={S.h1}>⏸ Your test is paused</h1>
        <p>You left the test screen, so your test is paused. Put your hand up and ask your teacher to unlock it — your answers are kept.</p>
        <p style={S.small}>Waiting for your teacher… this page carries on by itself once you&rsquo;re unlocked.</p>
        {remaining != null && <p style={S.small}>Time left on the test: {Math.floor(remaining / 60000)} min</p>}
      </section>
    );
  }

  if (current.kind === "collab") {
    return <GroupPart attempt={attempt} section={current} token={token} remaining={remaining} left={left}
      onLocked={() => setLocked(true)} onFinished={(a) => { setAttempt(a); window.scrollTo(0, 0); }} />;
  }

  return (
    <section style={S.card}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap", alignItems: "baseline" }}>
        <h1 style={S.h1}>Part {current.index + 1} of {attempt.sections.length}: {current.title}</h1>
        {remaining != null && <span style={{ ...S.tag, background: remaining < 5 * 60000 ? "var(--coral)" : "var(--navy)", color: "#fff" }}>⏱ {Math.floor(remaining / 60000)}:{String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0")}</span>}
      </div>
      <p>{current.how}</p>
      {left && <p style={S.warn}>{test ? "You left the test screen. That is recorded, and your teacher will see it." : "You left the screen, so this practice test won't count toward your best. You can still finish it."}</p>}
      {error && <p role="alert" style={S.alert}>{error}</p>}
      <Questions section={current} answers={answers} setAnswers={setAnswers} />
      <button style={{ ...S.primary, marginTop: 16 }} disabled={busy} onClick={() => handIn(false)}>{busy ? "Marking…" : `Hand in part ${current.index + 1}`}</button>
    </section>
  );
}

/**
 * The test's group task: two or three classmates who reached it, one answer.
 * The first to arrive types; the others watch it grow and talk it over in the
 * room. Any of them hands it in, and every member's test gets its mark.
 */
function GroupPart({ attempt, section, token, remaining, left, onLocked, onFinished }: {
  attempt: Attempt; section: Section; token: string; remaining: number | null; left: boolean;
  onLocked: () => void; onFinished: (a: Attempt) => void;
}) {
  const [group, setGroup] = useState<Group | null>(null);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const sent = useRef("");
  const typedOnce = useRef(false);
  // The parent re-renders every second for the clock and passes fresh callbacks
  // each time: held on refs, so the polling below is not torn down and the
  // group re-joined once a second.
  const onFinishedRef = useRef(onFinished);
  const onLockedRef = useRef(onLocked);
  onFinishedRef.current = onFinished;
  onLockedRef.current = onLocked;

  const fail = useCallback((e: unknown) => {
    if ((e as { status?: number }).status === 423) onLockedRef.current();
    else setError((e as Error).message);
  }, []);

  // Join (or rejoin) the group, then look again every few seconds.
  useEffect(() => {
    let stop = false;
    const look = async (first: boolean) => {
      try {
        const r = first
          ? await call<{ group: Group }>(`/attempts/${attempt.id}/group`, { method: "POST", token })
          : await call<{ group: Group; finished?: boolean }>(`/attempts/${attempt.id}/group`, { token });
        if (stop) return;
        setGroup(r.group);
        if (!typedOnce.current && r.group.text) { setText(r.group.text); sent.current = r.group.text; typedOnce.current = true; }
        if (r.group.status === "handedIn") {
          const a = await call<{ attempt: Attempt }>(`/attempts/${attempt.id}`, { token });
          if (!stop) onFinishedRef.current(a.attempt);
        }
      } catch (e) { if (!stop) fail(e); }
    };
    look(true);
    const t = setInterval(() => look(false), 2500);
    return () => { stop = true; clearInterval(t); };
  }, [attempt.id, token, fail]);

  // The one typing: their words go up as they type, a moment after they pause.
  useEffect(() => {
    if (!group?.scribe || group.status !== "writing" || text === sent.current) return undefined;
    const t = setTimeout(() => {
      sent.current = text;
      call(`/attempts/${attempt.id}/group/text`, { method: "POST", token, body: { text } }).catch(fail);
    }, 1200);
    return () => clearTimeout(t);
  }, [text, group?.scribe, group?.status, attempt.id, token, fail]);

  const handIn = useCallback(async (auto = false) => {
    if (!auto && !window.confirm("Hand in your group's answer? It's handed in for everyone in your group.")) return;
    setBusy(true); setError("");
    try {
      const r = await call<{ attempt: Attempt }>(`/attempts/${attempt.id}/group/handin`, { method: "POST", token, body: group?.scribe ? { text } : {} });
      onFinishedRef.current(r.attempt);
    } catch (e) { fail(e); } finally { setBusy(false); }
  }, [attempt.id, token, group?.scribe, text, fail]);

  // When the test's time runs out, the answer as it stands goes in.
  useEffect(() => { if (remaining === 0 && group?.status === "writing" && !busy) handIn(true); }, [remaining, group?.status, busy, handIn]);

  const goSolo = async () => {
    try { setGroup((await call<{ group: Group }>(`/attempts/${attempt.id}/group/solo`, { method: "POST", token })).group); } catch (e) { fail(e); }
  };

  const clock = remaining != null && <span style={{ ...S.tag, background: remaining < 5 * 60000 ? "var(--coral)" : "var(--navy)", color: "#fff" }}>⏱ {Math.floor(remaining / 60000)}:{String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0")}</span>;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return (
    <section style={S.card}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap", alignItems: "baseline" }}>
        <h1 style={S.h1}>Part {section.index + 1} of {attempt.sections.length}: Group task</h1>
        {clock}
      </div>
      {left && <p style={S.warn}>You left the test screen. That is recorded, and your teacher will see it.</p>}
      {error && <p role="alert" style={S.alert}>{error}</p>}
      {!group && <p>Finding your group…</p>}
      {group?.status === "forming" && (
        <>
          <p style={{ fontSize: 18 }}>Waiting for {group.members.length === 1 ? "a classmate" : "one more classmate"} to reach this part…</p>
          <p>In your group so far: <strong>{group.members.join(", ")}</strong></p>
          {group.members.length === 1 && group.stillWorking > 0 && <p style={S.small}>{group.stillWorking} classmate{group.stillWorking === 1 ? " is" : "s are"} still working on earlier parts.</p>}
          {group.members.length === 2 && <p style={S.small}>You&rsquo;ll start in a moment — a third classmate can still join.</p>}
          {group.canGoSolo && <button style={S.button} onClick={goSolo}>Do it on my own</button>}
        </>
      )}
      {group && group.status !== "forming" && (
        <>
          <p style={{ fontWeight: 700, fontSize: 18 }}>{group.prompt}</p>
          {group.rubric.length > 0 && <div style={S.small}>Your group is marked on: {group.rubric.join(" · ")}</div>}
          <p style={{ marginTop: 10 }}>Your group: <strong>{group.members.join(", ")}</strong>{group.members.length > 1 ? " — talk it over together." : ""}</p>
          {group.scribe ? (
            <>
              <p style={S.small}>{group.members.length > 1 ? "You're typing for your group. Write what you decide together." : "Write your answer."} About 150 words.</p>
              <textarea value={text} onChange={(e) => setText(e.target.value)} {...noPaste} rows={10} spellCheck={false} style={{ ...S.input, width: "100%" }} />
              <div style={S.small}>{words} words</div>
            </>
          ) : (
            <>
              <p style={S.small}><strong>{group.scribeName}</strong> is typing for your group. Help decide what to write — it appears here as it&rsquo;s typed.</p>
              <div style={{ ...S.input, minHeight: 160, whiteSpace: "pre-wrap", background: "var(--cream)" }}>{group.text || <span style={S.small}>Nothing yet.</span>}</div>
            </>
          )}
          <button style={{ ...S.primary, marginTop: 12 }} disabled={busy || group.status !== "writing"} onClick={() => handIn(false)}>{busy ? "Marking…" : "Hand in our answer"}</button>
        </>
      )}
    </section>
  );
}

const noPaste = { onPaste: (e: React.ClipboardEvent) => e.preventDefault(), onDrop: (e: React.DragEvent) => e.preventDefault() };

function Questions({ section, answers, setAnswers }: { section: Section; answers: Answers; setAnswers: (f: (a: Answers) => Answers) => void }) {
  const put = (id: string, v: string | boolean) => setAnswers((a) => ({ ...a, [id]: v }));
  if (section.kind === "match") {
    return (
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
          {section.terms?.map((t) => (
            <li key={t.id} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <select value={String(answers[t.id] || "")} onChange={(e) => put(t.id, e.target.value)} aria-label={`Letter for ${t.text}`} style={{ ...S.input, width: 72, flex: "0 0 auto" }}>
                <option value="">—</option>
                {section.choices?.map((c) => <option key={c.letter} value={c.letter}>{c.letter}</option>)}
              </select>
              <span>{t.text}</span>
            </li>
          ))}
        </ol>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
          {section.choices?.map((c) => {
            const usedLetter = Object.values(answers).includes(c.letter);
            return <li key={c.letter} style={usedLetter ? { color: "var(--slate-soft)", textDecoration: "line-through" } : undefined}><strong>{c.letter}.</strong> {c.text}</li>;
          })}
        </ul>
      </div>
    );
  }
  return (
    <ol style={{ paddingLeft: 20, display: "grid", gap: 18, margin: 0 }}>
      {section.questions?.map((q) => (
        <li key={q.id}>
          {section.kind === "mc" && (
            <div>
              <div style={{ marginBottom: 6 }}>{q.text}</div>
              <div style={{ display: "grid", gap: 6 }}>
                {q.options?.map((o, k) => (
                  <button key={k} type="button" onClick={() => put(q.id, String(k))}
                    style={{ ...S.button, textAlign: "left", fontWeight: 600, ...(String(answers[q.id]) === String(k) ? S.on : {}) }}>
                    {"ABCD"[k]}. {o}
                  </button>
                ))}
              </div>
            </div>
          )}
          {section.kind === "tf" && (
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
              <span style={{ flex: "1 1 280px" }}>{q.text}</span>
              <span style={{ display: "flex", gap: 6 }}>
                {[true, false].map((v) => <button key={String(v)} type="button" onClick={() => put(q.id, v)} style={{ ...S.button, ...(answers[q.id] === v ? S.on : {}) }}>{v ? "True" : "False"}</button>)}
              </span>
            </div>
          )}
          {section.kind === "cloze" && (() => {
            const [a, b] = q.text.split("_____");
            return (
              <span style={{ lineHeight: 2.2 }}>{a}
                <input value={String(answers[q.id] || "")} onChange={(e) => put(q.id, e.target.value)} {...noPaste} autoComplete="off" spellCheck={false} aria-label="Fill in the blank" style={{ ...S.input, width: 200, display: "inline-block", margin: "0 4px" }} />
                {b}</span>
            );
          })()}
          {section.kind === "short" && (
            <>
              <div style={{ marginBottom: 6 }}>{q.text}</div>
              <textarea value={String(answers[q.id] || "")} onChange={(e) => put(q.id, e.target.value)} {...noPaste} rows={3} spellCheck={false} style={{ ...S.input, width: "100%" }} />
            </>
          )}
          {section.kind === "essay" && (
            <>
              <div style={{ marginBottom: 6, fontWeight: 600 }}>{q.text}</div>
              {q.rubric?.length ? <div style={S.small}>You&rsquo;re marked on: {q.rubric.join(" · ")}</div> : null}
              <textarea value={String(answers[q.id] || "")} onChange={(e) => put(q.id, e.target.value)} {...noPaste} rows={12} spellCheck={false} style={{ ...S.input, width: "100%", marginTop: 6 }} />
              <div style={S.small}>{String(answers[q.id] || "").trim().split(/\s+/).filter(Boolean).length} words — aim for about 250</div>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

function Feedback({ section, attempt, onNext }: { section: Section; attempt: Attempt; onNext: () => void }) {
  const last = attempt.finished;
  return (
    <section style={S.card}>
      <h1 style={S.h1}>{section.title}: {section.marks} / {section.sectionOutOf}</h1>
      {!!section.unmarked && <p style={S.small}>{section.unmarked} answer{section.unmarked === 1 ? "" : "s"} couldn&rsquo;t be marked just now, so {section.unmarked === 1 ? "it isn't" : "they aren't"} counted.</p>}
      <ol style={{ paddingLeft: 20, display: "grid", gap: 12 }}>
        {section.results?.map((r) => {
          const mark = r.unmarked ? "…" : r.marks === r.outOf ? "✓" : r.marks > 0 ? "½" : "✗";
          const colour = r.unmarked ? "var(--slate)" : r.marks === r.outOf ? "#15803d" : r.marks > 0 ? "#b45309" : "var(--coral-deep)";
          return (
            <li key={r.id}>
              <div><strong style={{ color: colour }}>{mark}</strong> {r.question}{r.outOf > 1 && !r.unmarked ? <span style={S.small}> ({r.marks}/{r.outOf})</span> : null}</div>
              {section.kind !== "essay" && r.marks < r.outOf && !r.unmarked && (
                <div style={S.small}>You said: {r.your || "—"} · Answer: {r.correct}</div>
              )}
              {r.why && <div style={S.small}>{r.why}</div>}
            </li>
          );
        })}
      </ol>
      <button style={S.primary} onClick={onNext}>{last ? "See how you did" : "Next part"}</button>
    </section>
  );
}

function Finished({ attempt, onDone, onAgain }: { attempt: Attempt; onDone: () => void; onAgain: () => void }) {
  if (attempt.kind === "test" || attempt.kind === "quiz") {
    return (
      <section style={S.card}>
        <h1 style={S.h1}>{attempt.kind === "quiz" ? "Quiz" : "Test"} handed in</h1>
        <p style={{ fontSize: 28, margin: "8px 0" }}>Provisional grade: <strong>{attempt.percent}%</strong></p>
        {attempt.summary && <p style={{ fontSize: 18, lineHeight: 1.5 }}>{attempt.summary}</p>}
        <p style={S.warn}>{attempt.note}</p>
        <p style={S.small}>You can close this page now.</p>
      </section>
    );
  }
  return (
    <section style={S.card}>
      <h1 style={S.h1}>{attempt.percent}%</h1>
      <p>{attempt.marks} of {attempt.outOf} marks.{attempt.counted ? "" : " You left the screen during this one, so it doesn't count toward your best."}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button style={S.primary} onClick={onAgain}>Practise again</button>
        <button style={S.button} onClick={onDone}>Back to the class board</button>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div><div style={S.small}>{label}</div><div style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-display)" }}>{value}</div></div>;
}

const S: Record<string, React.CSSProperties> = {
  cover: { position: "fixed", inset: 0, zIndex: 1000, overflowY: "auto", background: "var(--cream)", color: "var(--navy)", fontFamily: "var(--font-body)", userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none" },
  page: { maxWidth: 860, margin: "0 auto", padding: "16px 16px 64px" },
  top: { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 16 },
  tag: { padding: "4px 10px", borderRadius: 999, background: "var(--cream-shade)", fontSize: 14 },
  card: { background: "#fff", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 1px 3px rgba(11,31,58,0.08)" },
  h1: { fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 8px" },
  h2: { fontFamily: "var(--font-display)", fontSize: 18, margin: "0 0 8px" },
  input: { padding: "10px 12px", borderRadius: 10, border: "1.5px solid var(--slate-soft)", font: "inherit", fontSize: 17, background: "#fff", color: "var(--navy)", userSelect: "text", WebkitUserSelect: "text" },
  primary: { padding: "12px 20px", borderRadius: 12, border: "none", background: "var(--coral)", color: "#fff", fontWeight: 800, fontSize: 17, cursor: "pointer" },
  button: { padding: "10px 16px", borderRadius: 12, border: "1.5px solid var(--slate-soft)", background: "#fff", color: "var(--navy)", fontWeight: 700, fontSize: 16, cursor: "pointer" },
  on: { background: "var(--navy)", color: "#fff", borderColor: "var(--navy)" },
  choice: { padding: "14px 12px", borderRadius: 12, border: "1.5px solid var(--slate-soft)", background: "#fff", color: "var(--navy)", fontWeight: 700, fontSize: 17, cursor: "pointer", textAlign: "left" },
  grid: { display: "grid", gap: 8, gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", marginTop: 8 },
  link: { background: "none", border: "none", color: "var(--slate)", textDecoration: "underline", cursor: "pointer", font: "inherit", padding: 0, marginLeft: "auto" },
  small: { fontSize: 14, color: "var(--slate)", marginTop: 4 },
  alert: { background: "#fee2e2", color: "#991b1b", padding: "10px 12px", borderRadius: 10 },
  warn: { background: "#fef3c7", color: "#92400e", padding: "10px 12px", borderRadius: 10 },
};

