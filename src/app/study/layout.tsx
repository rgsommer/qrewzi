import type { Metadata } from "next";

// qrewzi.com/study — where students practise for a test and sit it (Study &
// Test mode; the codes come from each set's card on set.qrewzi.com). A page for
// a class, not for search engines; a client component, so its metadata is here.
export const metadata: Metadata = {
  title: "Qrewzi — study and test",
  description: "Practise for your test, or sit it, with the code your teacher gave you.",
  robots: { index: false, follow: false },
};

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
