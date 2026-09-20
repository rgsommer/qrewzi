import React from "react";

/* App store links. Both point at the Qrewzi student app; the Play package id and
   Apple ID are pinned to the existing store listings — do not change. */
export const PLAY_URL = "https://play.google.com/store/apps/details?id=net.curriculate.student";
export const APP_STORE_URL = "https://apps.apple.com/app/id6788738826";

export default function StoreBadges({ compact = false }: { compact?: boolean }) {
  const badge: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: compact ? "6px 12px" : "8px 14px",
    borderRadius: 10,
    background: "var(--navy)",
    color: "var(--cream)",
    fontFamily: "var(--font-body)",
    fontWeight: 900,
    fontSize: compact ? 12 : 13,
    lineHeight: 1.1,
    textDecoration: "none",
  };
  return (
    <div style={{ marginTop: compact ? 0 : 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
      <a href={PLAY_URL} style={badge} rel="noopener" target="_blank">
        <span aria-hidden="true">▶</span>
        <span>Google Play</span>
      </a>
      <a href={APP_STORE_URL} style={badge} rel="noopener" target="_blank">
        <span aria-hidden="true"></span>
        <span>App Store</span>
      </a>
    </div>
  );
}
