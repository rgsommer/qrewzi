import Link from "next/link";
import { Fragment } from "react";
import { pageMetadata } from "../seo";
import Faq from "../components/Faq";
import {
  BETTER, BRIEFS, CHECKED, CITATIONS, FINDINGS, GROUPS, OTHERS, SOURCES, TOOLS,
  type Cell, type Mark, type ToolId,
} from "./data";

// /compare — Qrewzi beside Kahoot, Blooket, Gimkit, Wayground (formerly
// Quizizz) and Quizlet, on design features the learning research ties to
// learning. The claims and their sources are in data.ts; this file lays them
// out. The tool picker is radio buttons and CSS (:has), so every claim is in
// the HTML whether or not script runs; globals.css, "/compare".

export const metadata = pageMetadata({
  path: "/compare",
  title: "How Qrewzi compares with Kahoot, Blooket, Gimkit, Quizizz and Quizlet",
  description:
    "Qrewzi beside Kahoot, Blooket, Gimkit, Wayground (formerly Quizizz) and Quizlet, on the design features learning research ties to learning: recall, spacing, feedback that explains, talk and movement — and test prep, engagement and variety. Every claim from each tool's own pages, with its source.",
  socialTitle: "Qrewzi, Kahoot, Blooket, Gimkit, Wayground and Quizlet, side by side",
  socialDescription:
    "Twenty design features — recall, spacing, feedback that explains, test prep, movement, variety — from each tool's own pages, with sources.",
  keywords: [
    "Kahoot alternative", "Blooket alternative", "Gimkit alternative", "Quizizz alternative", "Wayground alternative", "Quizlet alternative",
    "Kahoot vs Blooket", "Kahoot vs Quizlet", "Gimkit vs Blooket", "Quizizz vs Kahoot", "classroom quiz games compared",
    "retrieval practice game", "spaced repetition for students", "test prep for students", "practice tests for students",
    "classroom game where students move", "team based classroom game",
  ],
});

const NUM = new Map(SOURCES.map((s, i) => [s.id, i + 1]));
const NAME = Object.fromEntries(TOOLS.map((t) => [t.id, t.name])) as Record<ToolId, string>;
const SYMBOL: Record<Mark, string> = { yes: "✓", partly: "◐", no: "—" };

function Refs({ ids }: { ids?: string[] }) {
  if (!ids?.length) return null;
  return (
    <sup className="cmp-refs">
      {[...ids].sort((a, b) => (NUM.get(a) ?? 0) - (NUM.get(b) ?? 0)).map((id, i) => {
        const n = NUM.get(id);
        return (
          <Fragment key={id}>
            {i ? "," : ""}
            <a href={`#src-${id}`} aria-label={`Source ${n}`}>{n}</a>
          </Fragment>
        );
      })}
    </sup>
  );
}

function MarkBadge({ mark, tool }: { mark: Mark; tool: ToolId }) {
  const said = mark === "yes" ? "Yes." : mark === "partly" ? "Partly." : tool === "qrewzi" ? "No." : "Not found.";
  return (
    <>
      <span className={`cmp-mark cmp-${mark}`} aria-hidden="true">{SYMBOL[mark]}</span>
      <span className="sr-only">{said} </span>
    </>
  );
}

function CellBody({ cell, tool }: { cell: Cell; tool: ToolId }) {
  return (
    <>
      <span className="cmp-tool" aria-hidden="true">{NAME[tool]}</span>
      <MarkBadge mark={cell.mark} tool={tool} />
      <span className="cmp-text">
        {cell.text}
        <Refs ids={cell.src} />
      </span>
    </>
  );
}

const FAQ = [
  {
    q: "Which of these is best for learning?",
    a: "This page doesn't say, and couldn't honestly. How much students learn depends on how a tool is used, and nobody can measure another company's results from the outside. What can be compared is design: whether a tool has students recall rather than recognise, explain their thinking, meet their mistakes again and space their practice. That is what the table sets out.",
  },
  {
    q: "Is Quizizz the same as Wayground?",
    a: "Yes. Quizizz took the name Wayground in 2025; the product carries on under the new name.",
  },
  {
    q: "Has Qrewzi been shown to improve learning?",
    a: "Not in a study of its own. Its design follows well-established findings — recalling rather than re-reading, spacing, feedback that explains, talking it through and moving — which are set out on this page with their sources.",
  },
  {
    q: "Why are some of Qrewzi's own cells marked partly or no?",
    a: "Because that is what's true. Qrewzi has no read-aloud and no review schedule over days, and some of its tasks are races. Where another tool does something Qrewzi doesn't, the table says so.",
  },
  {
    q: "Can I use Qrewzi alongside these tools?",
    a: "Yes. Nothing about Qrewzi stops you running a quick Kahoot from the seats or setting Quizlet flashcards. A Qrewzi set can start from a list of terms you paste in.",
  },
  {
    q: "How current is this?",
    a: `Checked in ${CHECKED} against each tool's own help centre, product and pricing pages. Plans and features change; if something here is out of date, write to hello@qrewzi.com and we'll check it and correct it.`,
  },
];

export default function ComparePage() {
  return (
    <>
      {/* ============================ THE ANSWER ============================ */}
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="container" style={{ maxWidth: 920, textAlign: "center" }}>
          <div className="eyebrow">Compare</div>
          <h1 className="cmp-h1" style={{ marginTop: 12 }}>
            How Qrewzi compares with Kahoot, Blooket, Gimkit, Wayground and Quizlet.
          </h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--slate)", lineHeight: 1.55, maxWidth: "62ch", marginLeft: "auto", marginRight: "auto" }}>
            They are all good tools, built for different jobs. Kahoot, Blooket, Gimkit and Wayground (formerly Quizizz) turn
            a set of questions into a game for the class; Quizlet is built around studying a set of terms. Qrewzi is built for
            teams working through a lesson together — moving between stations, writing and explaining as well as choosing —
            and for the practice tests, quiz and unit test that come after.
          </p>
          <p style={{ marginTop: 14, fontSize: 17, color: "var(--slate)", lineHeight: 1.55, maxWidth: "62ch", marginLeft: "auto", marginRight: "auto" }}>
            Below, each is set beside the others on the design features that learning research ties to how well students
            learn and remember, and on what a teacher needs for test prep, engagement and variety.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#side-by-side" className="btn btn-primary">See the comparison</a>
            <a href="https://set.qrewzi.com/demo" className="btn btn-secondary">Try the live demo →</a>
          </div>
        </div>
      </section>

      {/* ============================ HOW WE COMPARED ============================ */}
      <section style={{ paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <div className="card cmp-method">
            <h2 style={{ fontSize: 20 }}>How we compared</h2>
            <p>
              This compares design features — what each tool lets teachers and students do — not learning results, which
              can&rsquo;t be measured from the outside, so there are no scores or rankings. Everything about the other tools
              comes from their own help centres, product and pricing pages, checked in {CHECKED}, and each claim is numbered
              to <a href="#sources">its source</a>. Where a feature is on a paid plan, we say so where their pages do.
            </p>
            <ul className="cmp-legend" aria-label="Key">
              <li><span className="cmp-mark cmp-yes" aria-hidden="true">✓</span> It does</li>
              <li><span className="cmp-mark cmp-partly" aria-hidden="true">◐</span> Partly: in some modes, or on some plans</li>
              <li><span className="cmp-mark cmp-no" aria-hidden="true">—</span> Not found on its pages (for Qrewzi: it doesn&rsquo;t)</li>
            </ul>
            <p style={{ fontSize: 14 }}>
              Plans and features change. If something here is out of date, write to{" "}
              <a href="mailto:hello@qrewzi.com">hello@qrewzi.com</a> and we&rsquo;ll correct it.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ SIDE BY SIDE ============================ */}
      <section id="side-by-side" className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)", scrollMarginTop: 70 }}>
        <div className="container cmp-wide">
          <div className="eyebrow" style={{ textAlign: "center" }}>Side by side</div>
          <h2 style={{ textAlign: "center", marginTop: 12 }}>Twenty design features, six tools.</h2>
          <p style={{ textAlign: "center", marginTop: 12, color: "var(--slate)", maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            Grouped by what a teacher asks of a tool: how it teaches, what happens after an answer, studying, test prep,
            engagement and variety.
          </p>

          <div className="cmp">
            <p className="cmp-pick-hint">Pick a tool to read what it does, with its sources.</p>
            <div className="cmp-pick" role="radiogroup" aria-labelledby="cmp-pick-label">
              <span id="cmp-pick-label" className="cmp-pick-label">Compare Qrewzi with</span>
              <div className="cmp-pick-row">
                <input type="radio" name="cmp-with" id="cmp-all" value="all" defaultChecked className="sr-only cmp-radio" />
                <label htmlFor="cmp-all">All five</label>
                {OTHERS.map((t) => (
                  <Fragment key={t.id}>
                    <input type="radio" name="cmp-with" id={`cmp-${t.id}`} value={t.id} className="sr-only cmp-radio" />
                    <label htmlFor={`cmp-${t.id}`}>{t.name}</label>
                  </Fragment>
                ))}
              </div>
            </div>

            {GROUPS.map((g) => (
              <div key={g.id} id={g.id} className="cmp-group">
                <h3 id={`${g.id}-title`} className="cmp-group-title">{g.title}</h3>
                <p className="cmp-group-q">{g.criterion}</p>
                <table className="cmp-table" role="table" aria-labelledby={`${g.id}-title`}>
                  <thead role="rowgroup">
                    <tr role="row">
                      <th scope="col" role="columnheader" className="cmp-feature">Design feature</th>
                      {TOOLS.map((t) => (
                        <th key={t.id} scope="col" role="columnheader" className={`t-${t.id}`}>
                          {t.name}
                          {t.aka && <span className="cmp-aka">{t.aka}</span>}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody role="rowgroup">
                    {g.rows.map((r) => (
                      <tr key={r.id} role="row">
                        <th scope="row" role="rowheader" className="cmp-feature">
                          <span className="cmp-label">{r.label}</span>
                          <span className="cmp-why">{r.why}</span>
                        </th>
                        {TOOLS.map((t) => (
                          <td key={t.id} role="cell" className={`t-${t.id}`}>
                            <CellBody cell={r.cells[t.id]} tool={t.id} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ IN BRIEF ============================ */}
      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>The six in brief</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>How each one plays, and what it needs.</h2>
          <div className="cmp-cards">
            {BRIEFS.map((b) => (
              <div key={b.id} className="card cmp-brief">
                <h3 style={{ fontSize: 20 }}>
                  {NAME[b.id]}
                  {b.id === "wayground" && <span className="cmp-aka" style={{ display: "inline", marginLeft: 8 }}>formerly Quizizz</span>}
                </h3>
                <dl>
                  <dt>How it plays</dt>
                  <dd>{b.plays}</dd>
                  <dt>Students need</dt>
                  <dd>{b.needs}</dd>
                  <dt>Plans</dt>
                  <dd>{b.plans}<Refs ids={b.src} /></dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ WHEN ANOTHER FITS ============================ */}
      <section className="section-tight" style={{ background: "#fff", borderTop: "2px solid var(--navy)", borderBottom: "2px solid var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ textAlign: "center" }}>Fair&rsquo;s fair</div>
          <h2 style={{ textAlign: "center", marginTop: 12, marginBottom: 32 }}>When another tool is the better choice.</h2>
          <div className="cmp-cards">
            {BETTER.map((b) => (
              <div key={b.id} style={{ padding: 22, borderRadius: 16, background: "var(--cream)", border: "2px solid var(--navy)" }}>
                <h3 style={{ fontSize: 18 }}>{NAME[b.id]}</h3>
                <p style={{ marginTop: 8, fontSize: 15, color: "var(--slate)", lineHeight: 1.55 }}>
                  {b.body}
                  <Refs ids={b.src} />
                </p>
              </div>
            ))}
            <div style={{ padding: 22, borderRadius: 16, background: "var(--butter)", border: "2px solid var(--navy)" }}>
              <h3 style={{ fontSize: 18 }}>And when it&rsquo;s Qrewzi</h3>
              <p style={{ marginTop: 8, fontSize: 15, color: "var(--navy)", lineHeight: 1.55 }}>
                When you want teams working a lesson out together and moving round the room, written answers marked with
                comments, or practice tests, a quiz and the unit test made from the same set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ THE RESEARCH ============================ */}
      <section id="research" className="section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>The research behind the criteria</div>
          <h2 style={{ textAlign: "center", marginTop: 12 }}>What the research says.</h2>
          <p style={{ marginTop: 16, color: "var(--slate)", fontSize: 17, lineHeight: 1.6, maxWidth: "66ch", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            These are among the most replicated findings in the learning sciences. A review of ten study techniques rated
            practice testing and spaced practice the most useful, and re-reading and highlighting among the least
            <span className="cmp-cite"> ({CITATIONS.dunlosky2013.short})</span>.
          </p>
          <div className="cmp-cards" style={{ marginTop: 32 }}>
            {FINDINGS.map((f) => (
              <div key={f.title} style={{ padding: 20, borderRadius: 16, background: "var(--cream-shade)", border: "2px solid var(--navy)" }}>
                <h3 style={{ fontSize: 17 }}>{f.title}</h3>
                <p style={{ marginTop: 6, fontSize: 14.5, color: "var(--slate)", lineHeight: 1.55 }}>
                  {f.body}
                  <span className="cmp-cite"> ({f.cites.map((c) => CITATIONS[c].short).join("; ")})</span>
                </p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: 16, color: "var(--navy)", lineHeight: 1.6, textAlign: "center", maxWidth: "62ch", marginLeft: "auto", marginRight: "auto", fontWeight: 700 }}>
            No study has tested Qrewzi itself. Its design follows these findings — as, in different ways, do the other
            tools on this page.
          </p>
          <h3 style={{ fontSize: 18, marginTop: 40 }}>References</h3>
          <ul className="cmp-biblio">
            {Object.entries(CITATIONS)
              .sort((a, b) => a[1].full.localeCompare(b[1].full))
              .map(([id, c]) => (
                <li key={id}>
                  {c.full}{" "}
                  <a href={`https://doi.org/${c.doi}`} rel="noopener" target="_blank">https://doi.org/{c.doi}</a>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <Faq items={FAQ} title="Comparing classroom tools, answered" />

      {/* ============================ SOURCES ============================ */}
      <section id="sources" className="section-tight" style={{ scrollMarginTop: 70 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: 24 }}>Sources</h2>
          <p style={{ marginTop: 8, fontSize: 14, color: "var(--slate)" }}>
            Each tool&rsquo;s own pages, checked in {CHECKED}. Qrewzi&rsquo;s cells describe what Qrewzi does; see{" "}
            <Link href="/features">every feature</Link> and <Link href="/study-and-test">Study &amp; Test</Link>.
          </p>
          <div className="cmp-sources">
            {OTHERS.map((t) => (
              <div key={t.id}>
                <h3 style={{ fontSize: 16, marginTop: 20 }}>{t.name}</h3>
                <ol>
                  {SOURCES.filter((s) => s.tool === t.id).map((s) => (
                    <li key={s.id} id={`src-${s.id}`} value={NUM.get(s.id)}>
                      {s.title}.{" "}
                      <a href={s.url} rel="noopener nofollow" target="_blank">{s.url.replace(/^https:\/\//, "")}</a>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: "var(--slate)", lineHeight: 1.6 }}>
            Kahoot!, Blooket, Gimkit, Wayground, Quizizz and Quizlet are trademarks of their respective owners. Qrewzi is not
            affiliated with, endorsed by or sponsored by any of them; their names are used here only to identify their
            products.
          </p>
        </div>
      </section>

      {/* ============================ NEXT ============================ */}
      <section className="section" style={{ background: "var(--navy)", color: "var(--cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 760 }}>
          <h2 style={{ color: "var(--cream)" }}>Describe the lesson. Press Start.</h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--cream)", opacity: 0.9 }}>
            Your first three months of everything are free, no card needed. After that, carry on with the Free plan or
            choose a paid one.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href="https://set.qrewzi.com/signup" className="btn btn-primary">Join for free</a>
            <Link href="/how-it-works" className="btn btn-ghost" style={{ color: "var(--cream)" }}>How it works</Link>
          </div>
          <p style={{ marginTop: 24, fontSize: 15, color: "var(--cream)", opacity: 0.85 }}>
            See also: <Link href="/kahoot-alternative" style={{ color: "var(--butter)" }}>Kahoot alternative for teams</Link>
            {" · "}<Link href="/study-and-test" style={{ color: "var(--butter)" }}>Practice tests and unit tests</Link>
            {" · "}<Link href="/review-games" style={{ color: "var(--butter)" }}>Review games that get students moving</Link>
          </p>
        </div>
      </section>
    </>
  );
}
