"use client";
// How much of practice has been tested on each kind of device
// (GET /api/conference/practice-coverage): of the task types practice serves
// there, how many a player has completed on that device since the type's
// last fix. Tells the owner whether another Study Challenge is needed, and
// on which devices.
import { useEffect, useState } from "react";

const DEVICES = [
  { key: "phone", label: "Phone", icon: "📱" },
  { key: "tablet", label: "Tablet", icon: "📲" },
  { key: "computer", label: "Computer", icon: "💻" },
];
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const tone = (p) => (p >= 90 ? "#16a34a" : p >= 50 ? "#d97706" : "#dc2626");

export default function CoverageTab({ api, apiKey, refreshTick = 0 }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [at, setAt] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!apiKey) return undefined;
    let live = true;
    const load = async () => {
      try {
        const r = await fetch(`${api}/api/conference/practice-coverage?key=${encodeURIComponent(apiKey)}`, { cache: "no-store" });
        const j = await r.json().catch(() => null);
        if (!live) return;
        if (!r.ok || !j?.ok) { setError(j?.error || `Could not load coverage (${r.status})`); return; }
        setData(j); setError(""); setAt(new Date());
      } catch (e) {
        if (live) setError(String(e?.message || e));
      }
    };
    load();
    const id = setInterval(load, 60000);
    return () => { live = false; clearInterval(id); };
  }, [api, apiKey, refreshTick]);

  if (error && !data) return <div style={s.empty}>{error}</div>;
  if (!data) return <div style={s.empty}>Loading coverage…</div>;

  const all = { tested: data.overall.tested, served: data.overall.pairs };
  const card = (title, icon, tested, served, sub) => {
    const p = pct(tested, served);
    return (
      <div style={s.card} key={title}>
        <div style={s.cardTitle}>{icon} {title}</div>
        <div style={{ ...s.big, color: tone(p) }}>{p}%</div>
        <div style={s.frac}>{tested} of {served} tested</div>
        <div style={s.bar}><div style={{ ...s.fill, width: `${p}%`, background: tone(p) }} /></div>
        {sub ? <div style={s.sub}>{sub}</div> : null}
      </div>
    );
  };
  const untestedEverywhere = data.types.filter((t) => DEVICES.every((d) => t[d.key] === null || t[d.key] === 0));
  const rows = showAll ? data.types : data.types.filter((t) => DEVICES.some((d) => t[d.key] === 0));

  return (
    <div style={{ marginTop: 16 }}>
      <div style={s.cards}>
        {DEVICES.map((d) => card(d.label, d.icon, data.devices[d.key].tested, data.devices[d.key].served))}
        {card("All devices", "🧩", all.tested, all.served, `${data.overall.everyDevice} of ${data.soloTypes} types tested on every device`)}
      </div>
      <p style={s.note}>
        <b>Tested</b> means a player completed it on that kind of device since the task type was last fixed. A fix sends it back to untested.
        Practice serves {data.soloTypes} of the {data.poolTypes} task types to someone alone; the other {data.notServed.length} need a group.
        {at ? ` Updated ${at.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.` : ""}
      </p>

      <div style={s.tableHead}>
        <h3 style={s.h3}>{showAll ? `Every task type (${data.types.length})` : `Still to test (${rows.length} types)`}</h3>
        <button type="button" onClick={() => setShowAll((v) => !v)} style={s.toggle}>
          {showAll ? "Show only what still needs testing" : "Show every type"}
        </button>
      </div>
      {untestedEverywhere.length ? (
        <p style={s.note}>Not tested on any device yet: {untestedEverywhere.map((t) => t.label).join(", ")}.</p>
      ) : null}
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Task type</th>
              {DEVICES.map((d) => <th key={d.key} style={{ ...s.th, textAlign: "center" }}>{d.icon} {d.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((t, i) => (
              <tr key={t.type} style={{ background: i % 2 ? "#fafafa" : "#fff" }}>
                <td style={s.td}>
                  <div style={{ fontWeight: 700 }}>{t.label}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>{t.type} · v{t.version}</div>
                </td>
                {DEVICES.map((d) => {
                  const n = t[d.key];
                  const before = data.devices[d.key].untested.find((u) => u.type === t.type)?.testedBeforeFix;
                  return (
                    <td key={d.key} style={{ ...s.td, textAlign: "center" }}>
                      {n === null ? <span style={{ color: "#cbd5e1" }} title="Not served on this device">—</span>
                        : n > 0 ? <span style={{ color: "#16a34a", fontWeight: 700 }} title={`${n} player${n === 1 ? "" : "s"}`}>✓ {n}</span>
                          : <span style={{ color: "#dc2626", fontWeight: 700 }} title={before ? "Tested before its last fix — needs testing again" : "Not tested yet"}>{before ? "retest" : "✗"}</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={s.note}>✓ n = players who completed it there · ✗ not tested yet · retest = tested before its last fix · — not served on that device</p>
    </div>
  );
}

const s = {
  empty: { padding: 40, textAlign: "center", color: "#94a3b8" },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 },
  card: { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "16px 18px" },
  cardTitle: { fontSize: 13, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.4 },
  big: { fontSize: 34, fontWeight: 800, lineHeight: 1.1, marginTop: 6 },
  frac: { fontSize: 13, color: "#475569", marginTop: 2 },
  bar: { height: 8, background: "#f1f5f9", borderRadius: 99, marginTop: 10, overflow: "hidden" },
  fill: { height: "100%", borderRadius: 99 },
  sub: { fontSize: 12, color: "#64748b", marginTop: 8 },
  note: { fontSize: 12, color: "#64748b", lineHeight: 1.5, margin: "12px 0" },
  tableHead: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginTop: 18 },
  h3: { fontSize: 16, fontWeight: 800, color: "#1e293b", margin: 0 },
  toggle: { border: "none", background: "none", padding: 0, color: "#2563eb", fontSize: 13, fontWeight: 700, cursor: "pointer" },
  tableWrap: { overflowX: "auto", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, marginTop: 8 },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
  th: { textAlign: "left", padding: "10px 14px", fontSize: 11, color: "#64748b", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", whiteSpace: "nowrap" },
  td: { padding: "8px 14px", borderBottom: "1px solid #f1f5f9", color: "#1e293b" },
};
