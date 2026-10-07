import type { Metadata } from "next";

// /free is a client component (it builds the sign-up link client-side so the
// browser-specific UTM tags carry through), so metadata lives in a layout.
export const metadata: Metadata = {
  title: "First month free — the Qrewzi offer",
  description:
    "Teachers who got the Qrewzi card: redeem your QREWFREE code. The first month of Qrewzi is on us — try with your class and tell us what you'd change.",
  alternates: { canonical: "https://qrewzi.com/free" },
  keywords: ["qrewzi promo code", "free classroom game trial", "qrewfree"],
  openGraph: {
    title: "First month free — QREWFREE",
    description:
      "Redeem your QREWFREE code. First month of Qrewzi free. Try with your class, tell us what you'd change.",
    url: "https://qrewzi.com/free",
  },
  twitter: {
    title: "First month free — QREWFREE",
    description:
      "Redeem your QREWFREE code. First month of Qrewzi free. Try with your class, tell us what you'd change.",
  },
};

export default function FreeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
