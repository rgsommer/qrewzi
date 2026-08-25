// Small Qrewzi mark for use anywhere the wordmark is too much (favicon-scale UI, chips, etc).
// No Q tail — vanishes at tiny sizes anyway.

type Props = { size?: number; fill?: string; hole?: string; className?: string };

export default function Mark({
  size = 32,
  fill = "var(--coral)",
  hole = "var(--cream)",
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 32 32" width={size} height={size} className={className}
      role="img" aria-label="Qrewzi mark"
    >
      <rect x="2" y="2" width="28" height="28" rx="6" fill={fill} />
      <rect x="6" y="6" width="20" height="20" rx="4" fill={hole} />
      <rect x="11" y="11" width="10" height="10" rx="2" fill={fill} />
    </svg>
  );
}
