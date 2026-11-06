"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

// A link to set.qrewzi.com that carries an agent's referral code from this
// page's own address (qrewzi.com/pricing?ref=SEHRAJ-8NBK4Z) on to sign-up
// or checkout, where it is kept with the account and applied when the
// teacher pays. The page is static, so the code is added in the browser;
// without one the link is exactly as written.
const REF = /^[A-Z0-9][A-Z0-9-]{2,39}$/;

export default function RefLink({
  href,
  className,
  style,
  children,
  "data-plan": dataPlan,
}: {
  href: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "data-plan"?: string;
}) {
  const [to, setTo] = useState(href);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const code = String(q.get("ref") || q.get("referral") || "").trim().toUpperCase();
    if (!REF.test(code)) return;
    const u = new URL(href);
    u.searchParams.set("ref", code);
    setTo(u.toString());
  }, [href]);
  return (
    <a href={to} className={className} style={style} data-plan={dataPlan}>
      {children}
    </a>
  );
}
