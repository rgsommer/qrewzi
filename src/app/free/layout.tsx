import { pageMetadata } from "../seo";

// /free is a client component (it builds the sign-up link client-side so the
// browser-specific UTM tags carry through), so metadata lives in a layout.
// It is the page sent to any teacher, the business card's included.
export const metadata = pageMetadata({
  path: "/free",
  title: "For teachers: 3 months free, plus QREWFREE",
  description:
    "Turn your next lesson into a team game your class plays on any device. Try a demo game with no account, then start with three months of Qrewzi free, and your first paid month free with the code QREWFREE.",
  socialTitle: "Your next lesson, as a team game — 3 months free",
  socialDescription: "Try a demo game on your phone, then start free. Three months of Qrewzi, and a month more with QREWFREE.",
  keywords: ["qrewzi promo code", "free classroom game trial", "qrewfree", "classroom team game", "free for teachers"],
});

export default function FreeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
