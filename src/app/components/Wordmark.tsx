// Qrewzi wordmark — Mark A (rounded QR finder + Q tail) + Unbounded "rewzi".
// Colors driven by props so the same component works on cream, navy, or hero grounds.

type Props = {
  height?: number;
  markFill?: string;     // color of the mark (Q) — default coral
  wordFill?: string;     // color of the "rewzi" — default navy
  markHole?: string;     // gap color inside the finder pattern — must match ground
  className?: string;
};

export default function Wordmark({
  height = 44,
  markFill = "var(--coral)",
  wordFill = "var(--navy)",
  markHole = "var(--cream)",
  className,
}: Props) {
  // viewBox 480×120 — 4:1 aspect ratio.
  return (
    <svg
      viewBox="0 0 480 120"
      width={height * 4}
      height={height}
      className={className}
      role="img"
      aria-label="Qrewzi"
    >
      <defs>
        <clipPath id="wm-outer">
          <rect x="0" y="10" width="100" height="100" rx="24" />
        </clipPath>
      </defs>

      {/* Mark — rounded QR finder */}
      <g>
        <rect x="0" y="10" width="100" height="100" rx="24" fill={markFill} />
        <rect x="16" y="26" width="68" height="68" rx="14" fill={markHole} />
        <rect x="32" y="42" width="36" height="36" rx="8" fill={markFill} />
      </g>
      {/* Q tail — clipped inside the square, extending diagonally past corner */}
      <g clipPath="url(#wm-outer)">
        <line
          x1="82" y1="92" x2="126" y2="136"
          stroke={markFill} strokeWidth="14" strokeLinecap="round"
        />
      </g>
      <line
        x1="100" y1="110" x2="120" y2="130"
        stroke={markFill} strokeWidth="14" strokeLinecap="round"
      />

      {/* Wordmark letters */}
      <text
        x="122" y="92"
        fontFamily="var(--font-display), 'Unbounded', ui-sans-serif, system-ui, sans-serif"
        fontWeight="800"
        fontSize="88"
        letterSpacing="-2"
        fill={wordFill}
      >
        rewzi
      </text>
    </svg>
  );
}
