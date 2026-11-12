// The pot of gold, drawn for the site (the student app's own jar is curriculate
// student-app/src/study/GoldJar.jsx; the rules are backend/services/study/jar.js).
// Three marked answers on the right — a matching answer, an excellent short
// answer, an essay — each poof a coin out of its chip that arcs over and drops into
// the jar, which gives a little clink and a "+N" as it lands. Pure CSS (globals.css,
// .gold-art), so it costs no script, and with reduced motion it is a still picture.

const BODY = "M24 16 L24 26 C24 34 10 36 10 46 L10 116 C10 126 16 130 26 130 L74 130 C84 130 90 126 90 116 L90 46 C90 36 76 34 76 26 L76 16";
const INSIDE = "M26.6 18 L26.6 26.5 C26.6 35.5 12.6 37.5 12.6 46.5 L12.6 116 C12.6 124 17.5 127.4 26 127.4 L74 127.4 C82.5 127.4 87.4 124 87.4 116 L87.4 46.5 C87.4 37.5 73.4 35.5 73.4 26.5 L73.4 18 Z";
const LEVEL = 72; // a jar a little over half full

const jitter = (k: number, salt: number) => { const x = Math.sin(k * 12.9898 + salt * 78.233) * 43758.5453; return x - Math.floor(x); };

function pile() {
  const out: { x: number; y: number; tilt: number }[] = [];
  for (let row = 0; row * 5.2 < 127 - LEVEL + 4; row++) {
    const y = 125 - row * 5.2;
    for (let k = 0, x = 14 + (row % 2 ? 6.5 : 0); x < 88; k++, x += 13) {
      const mound = LEVEL - 3.5 * (1 - ((x - 50) / 42) ** 2);
      if (y < mound) continue;
      out.push({ x: x + (jitter(row * 9 + k, 1) - 0.5) * 4, y, tilt: (jitter(row * 9 + k, 2) - 0.5) * 30 });
    }
  }
  return out;
}

function Coin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" style={{ display: "block" }}>
      <circle cx="10" cy="10" r="9" fill="#e9a908" />
      <circle cx="10" cy="10" r="7.4" fill="#ffd447" stroke="#c98a00" strokeWidth="0.8" />
      <path d="M7 6.5 Q10 4.8 13 6.5" stroke="#fff6c9" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <text x="10" y="13.6" textAnchor="middle" fontSize="9" fontWeight="900" fill="#a86f00" fontFamily="system-ui, sans-serif">Q</text>
    </svg>
  );
}

// Where the coins come from (the chip's coin, in the art's own pixels) and where they go:
// the jar's mouth. The art is laid out from its left edge, so these hold at any card width.
const MOUTH = { x: 40, y: 82 };
const CHIPS = [
  { label: "✓ Matching", coins: 1, y: 20 },
  { label: "✍️ Short answer", coins: 4, y: 47 },
  { label: "📝 Essay", coins: 8, y: 74 },
];
const CHIP_X = 96;

export default function GoldJarArt() {
  return (
    <div className="gold-art" role="img" aria-label="A glass jar of gold coins. Coins poof out of three marked answers — a right matching answer, an excellent short answer and an essay — and drop into the jar.">
      <div className="gold-jar">
        <svg viewBox="0 0 100 140" aria-hidden="true">
          <defs>
            <clipPath id="goldArtInside"><path d={INSIDE} /></clipPath>
            <linearGradient id="goldArtEdge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f2b705" /><stop offset="1" stopColor="#a86f00" /></linearGradient>
            <linearGradient id="goldArtFace" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff0a0" /><stop offset="0.55" stopColor="#ffd030" /><stop offset="1" stopColor="#e3a400" /></linearGradient>
            <linearGradient id="goldArtGlass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#dff3ff" stopOpacity="0.6" /><stop offset="0.5" stopColor="#ffffff" stopOpacity="0.2" /><stop offset="1" stopColor="#cfe8f7" stopOpacity="0.55" /></linearGradient>
          </defs>
          <ellipse cx="50" cy="133" rx="38" ry="4.5" fill="#0b1f3a" opacity="0.12" />
          <path d={`${BODY} Z`} fill="url(#goldArtGlass)" />
          <g clipPath="url(#goldArtInside)">
            <path d={`M0 131 L0 ${LEVEL + 2} Q50 ${LEVEL - 5} 100 ${LEVEL + 2} L100 131 Z`} fill="#d99a06" />
            {pile().map((c, k) => (
              <g key={k} transform={`translate(${c.x.toFixed(1)} ${c.y.toFixed(1)}) rotate(${c.tilt.toFixed(0)})`}>
                <ellipse rx="7.2" ry="3.3" fill="url(#goldArtEdge)" />
                <ellipse rx="6.4" ry="2.5" cy="-0.5" fill="url(#goldArtFace)" />
                <ellipse rx="2.6" ry="0.7" cx="-1.6" cy="-1.3" fill="#fff6c9" opacity="0.8" />
              </g>
            ))}
          </g>
          <path d={BODY} fill="none" stroke="#7fb3d5" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M17 52 C15 70 15 92 17 112" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.75" />
          <path d="M82 60 C83 72 83 84 82 94" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
          <ellipse cx="50" cy="16" rx="27.5" ry="5" fill="#0b1f3a" fillOpacity="0.06" stroke="#7fb3d5" strokeWidth="3" />
          <ellipse cx="44" cy="13.6" rx="12" ry="1.3" fill="#ffffff" opacity="0.7" />
        </svg>
        <div className="gold-count"><Coin size={14} />73</div>
      </div>
      {CHIPS.map((c, k) => (
        <div key={c.label} className="gold-chip" style={{ left: CHIP_X, top: c.y - 12, animationDelay: `${k * 2}s` }}>
          <span>{c.label}</span>
          <b>+{c.coins}</b>
          <Coin size={14} />
        </div>
      ))}
      {CHIPS.map((c, k) => (
        <div key={`fly-${c.label}`} className="gold-fly" style={{ left: CHIP_X + 4, top: c.y - 11, ["--dx" as string]: `${MOUTH.x - (CHIP_X + 15)}px`, ["--dy" as string]: `${MOUTH.y - c.y}px`, animationDelay: `${k * 2}s` }}>
          <div className="gold-drop" style={{ animationDelay: `${k * 2}s` }}>
            <span className="gold-puff" style={{ animationDelay: `${k * 2}s` }} />
            <div className="gold-coin" style={{ animationDelay: `${k * 2}s` }}><Coin size={22} /></div>
          </div>
        </div>
      ))}
      {CHIPS.map((c, k) => (
        <span key={`plus-${c.label}`} className="gold-plus" style={{ animationDelay: `${k * 2}s` }}>+{c.coins}</span>
      ))}
      <div className="gold-shop"><span>🧩 Riddle · 25</span><Coin size={12} /></div>
    </div>
  );
}
