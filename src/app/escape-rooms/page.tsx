import Link from "next/link";

/**
 * /escape-rooms — the Qrewzi escape-room feature page.
 *
 * The point: nobody else can run six themed escape rooms, one per team,
 * in the same physical classroom, in 45 minutes. Breakout EDU is one
 * $150 kit per team; printable kits are generic and shipped frozen. Our
 * escape rooms are AI-generated from any lesson, in any theme the
 * teacher types, in 90 seconds. The copy below sells that gap.
 *
 * Primary CTA is the live demo (set.qrewzi.com/demo — Treasure Island
 * right now, no login needed). Secondary CTA is the free sign-up.
 */
export default function EscapeRoomsPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section
        className="section"
        style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}
      >
        <div className="container" style={{ maxWidth: 920, textAlign: "center" }}>
          <div className="eyebrow">Escape rooms</div>
          <h1 style={{ marginTop: 12 }}>
            Six teams. One classroom.<br />
            Six different escape rooms.<br />
            Forty-five minutes.
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 20,
              color: "var(--slate)",
              lineHeight: 1.5,
              maxWidth: "60ch",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Type the lesson. Type the theme — <strong>Halloween</strong>,{" "}
            <strong>Treasure Island</strong>, <strong>Reformation Day</strong>, anything.
            Click <strong>Generate</strong>. Ninety seconds later every team in
            your room is in their own themed escape room, built around your
            curriculum. The projector keeps score. The HUD lives on their
            devices. The vault opens when all three cipher digits are theirs.
          </p>

          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://set.qrewzi.com/demo?mode=escape"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Try the live demo now →
            </a>
            <a href="https://set.qrewzi.com/signup" className="btn btn-secondary">
              Join for free
            </a>
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: "var(--slate)" }}>
            No sign-up. The demo opens the GameMaster projector with a room code and QR. Students scan to join.
          </p>
        </div>
      </section>

      {/* ============================ THE PROBLEM ============================ */}
      <section
        className="section-tight"
        style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}
      >
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>Why this is a thing</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 40 }}>
            Classroom escape rooms used to mean choosing one of three bad options.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            <Problem
              who="Buy a kit"
              body="$150+ per physical Breakout EDU box, fixed puzzles, one team at a time. 24 kids = six kits = $900+ of plastic locks you store in a cupboard."
            />
            <Problem
              who="Print a kit"
              body="Generic Lock-Paper-Scissors templates. Puzzles are riddles, not curriculum. You spend an evening adapting it to the topic you actually teach."
            />
            <Problem
              who="Build it yourself"
              body="Google Slides, Forms, lots of conditional logic, and three weekends you don't have. The one teacher who nails it gets Instagram-famous. Nobody else can copy it."
            />
          </div>

          <p
            style={{
              marginTop: 36,
              fontSize: 18,
              color: "var(--navy)",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            With Qrewzi, every lesson can be an escape room, in any theme, and six teams can play in parallel on their own devices. 90 seconds of teacher time. Zero printing.
          </p>
        </div>
      </section>

      {/* ============================ HOW IT WORKS ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Three steps</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 48 }}>
            From "what should we play?" to a running room.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
            }}
          >
            <Step
              n={1}
              title="Describe the lesson"
              body="One line — 'fractions for grade 4' or 'Civil War for grade 7'. Add key vocabulary if you have it."
            />
            <Step
              n={2}
              title="Pick the theme"
              body="Tick the 🔐 Make this an escape room box. The field pre-fills with the season (Halloween in late Oct, Christmas in Dec, Easter around Resurrection Sunday). Change it to anything."
            />
            <Step
              n={3}
              title="Run the room"
              body="Projector shows the room code + QR. Six teams scan in. Each team's HUD shows their keys, fragments, locks. The vault opens when they synthesize the cipher digits."
            />
          </div>
        </div>
      </section>

      {/* ============================ ANATOMY OF A ROOM ============================ */}
      <section
        className="section-tight"
        style={{ background: "var(--butter)" }}
      >
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="eyebrow" style={{ textAlign: "center", color: "var(--navy)" }}>Anatomy of a room</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>
            Keys → Locks → Fragments → The Vault.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            <Piece
              glyph="🗝"
              name="Keys"
              body="Earned by completing curriculum tasks. One task might grant a 'Shepherd's Staff' or a 'Monk's Ink Pot'. Keys are the proof of learning."
            />
            <Piece
              glyph="🔒"
              name="Locks"
              body="Gated by the keys they need. Each lock has a themed narrative (the Printing Press Plates, the Scriptorium Scroll) and a curriculum hint, not a party-trick riddle."
            />
            <Piece
              glyph="🧩"
              name="Fragments"
              body="Revealed when a lock opens — single cipher digits etched on brass tiles or carved into cliffs. Teams accumulate them in position order."
            />
            <Piece
              glyph="📜"
              name="The Vault"
              body="The final synthesis lock. Enter the digits in order. First team home wins. 'He Is Risen' / 'The Castle Church Door' / 'From Your Valentine'."
            />
          </div>

          <div
            style={{
              marginTop: 32,
              padding: 24,
              borderRadius: 16,
              background: "#fff",
              border: "2px solid var(--navy)",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--coral)", marginBottom: 8 }}>Example — grade 4 Fractions, Halloween theme</div>
            <div style={{ fontSize: 15, color: "var(--navy)", lineHeight: 1.65 }}>
              <strong>Lock 1 — &quot;The Witch&apos;s Fraction Cauldron&quot;</strong>: &quot;Put the spell steps in the correct order to turn an improper fraction potion into a simplified mixed number before the candles go dark.&quot; Earn the <em>Spiderweb Cipher Tile</em> (digit 4).<br />
              <strong>Lock 2 — &quot;The Haunted Fraction Hall&quot;</strong>: &quot;By candlelight, decide if each ghostly fraction clue is true or false.&quot; Earn the <em>Pumpkin Lantern Cipher</em> (digit 2).<br />
              <strong>Lock 3 — &quot;The Spiderweb Vault&quot;</strong>: Enter the digits in order to open the vault. 4-2-7.
            </div>
          </div>
        </div>
      </section>

      {/* ============================ WHY QREWZI ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>What makes it work</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 40 }}>
            The five things nobody else packages together.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            <Diff
              title="Parallel teams, same room"
              body="Six teams of four each in their own escape room, in the same classroom, on their own devices. No $900 of plastic kits. No rotation."
            />
            <Diff
              title="Curriculum is the puzzle"
              body="The hint on Luther's padlock is 'simplify 12/16', not a cryptogram. Teachers can count the time toward learning, not toward puzzle-solving."
            />
            <Diff
              title="Any theme, any lesson"
              body="Type Halloween, Treasure Island, Mars Colony, Reformation Day. Lock titles, keys, fragment narratives and task prompts all read as the same fiction."
            />
            <Diff
              title="Seasonally pre-filled"
              body="Open the generator the week of a holiday and the theme is already there — Reformation Day in late October, Nativity in December, Resurrection in spring."
            />
            <Diff
              title="Reports anyway"
              body="The escape room runs on the same gradebook pipeline as any Qrewzi game. The session ends → parent-ready recap, Bloom's coverage, per-student grades."
            />
            <Diff
              title="Zero prep"
              body="90 seconds in the generator. No printing, no cutting, no laminating, no plastic locks arriving by post."
            />
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
          <h2 style={{ color: "var(--cream)" }}>Open the demo. Scan the QR with your phone.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            No sign-up. Treasure Island is live right now. You&apos;ll see the exact UX a classroom sees — projector + HUD + the vault at the end.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://set.qrewzi.com/demo?mode=escape"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Try the live demo →
            </a>
            <a href="https://set.qrewzi.com/signup" className="btn btn-ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>
              Join for free
            </a>
          </div>
          <p style={{ marginTop: 28, fontSize: 15, color: "var(--cream)", opacity: 0.85 }}>
            Not an escape-room day? The same lesson plays as{" "}
            <Link href="/game-modes" style={{ color: "var(--butter)" }}>Troopers, Raiders or Duels</Link>, or try a{" "}
            <Link href="/trivia-night" style={{ color: "var(--butter)" }}>trivia night</Link>.{" "}
            <Link href="/features" style={{ color: "var(--butter)" }}>Every feature →</Link>
          </p>
        </div>
      </section>
    </>
  );
}

/* ---------- local components ---------- */

function Problem({ who, body }: { who: string; body: string }) {
  return (
    <div className="card">
      <div className="eyebrow" style={{ color: "var(--coral)" }}>{who}</div>
      <p style={{ marginTop: 12, color: "var(--slate)", fontSize: 15, lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "var(--coral)",
          color: "var(--cream)",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 18,
        }}
      >
        {n}
      </div>
      <h3 style={{ marginTop: 16 }}>{title}</h3>
      <p style={{ marginTop: 10, color: "var(--slate)" }}>{body}</p>
    </div>
  );
}

function Piece({ glyph, name, body }: { glyph: string; name: string; body: string }) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 16,
        background: "var(--cream-shade)",
        border: "2px solid var(--navy)",
      }}
    >
      <div style={{ fontSize: 28 }} aria-hidden="true">{glyph}</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, marginTop: 8, color: "var(--navy)" }}>
        {name}
      </div>
      <p style={{ marginTop: 8, fontSize: 14, color: "var(--slate)", lineHeight: 1.5 }}>{body}</p>
    </div>
  );
}

function Diff({ title, body }: { title: string; body: string }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: 18 }}>{title}</h3>
      <p style={{ marginTop: 8, color: "var(--slate)", fontSize: 15 }}>{body}</p>
    </div>
  );
}
