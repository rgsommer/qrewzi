"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PLAY_URL, APP_STORE_URL } from "./StoreBadges";

// Where a station card's code lands when it is scanned OUTSIDE the player.
//
// A card encodes https://qrewzi.com/<room>/scan?t=<token> (or the older
// /<room>/<colour>). Inside the QRewzi player the scanner reads that text
// and never navigates; a passer-by's phone camera opens it as a web address
// and used to get a 404. This page says what the code is, promotes QRewzi,
// and hands the same address on to the player, where a room code can be
// entered.

const PLAYER = "https://play.qrewzi.com";
const TAGLINE = "Adventure-Powered Learning";

const COLOURS = new Set(["red", "blue", "green", "yellow", "purple", "orange", "teal", "pink", "lime", "navy", "brown", "gray"]);

function titleCase(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}

export default function ScanLanding() {
  const [room, setRoom] = useState("");
  const [colour, setColour] = useState("");
  const [playerHref, setPlayerHref] = useState(PLAYER);

  useEffect(() => {
    try {
      const segs = window.location.pathname
        .split("/")
        .filter(Boolean)
        .map((x) => { try { return decodeURIComponent(x); } catch { return x; } });
      // /<room>/scan?t=…  or  /<room>/<colour>
      const last = (segs[segs.length - 1] || "").toLowerCase();
      setRoom(segs.length >= 2 ? segs[segs.length - 2] : segs[0] || "");
      setColour(COLOURS.has(last) ? last : "");
      setPlayerHref(PLAYER + window.location.pathname + window.location.search);
    } catch {
      /* server render or odd URL — the defaults still work */
    }
  }, []);

  const station = colour ? `the ${titleCase(colour)} station` : "a station";
  const where = room ? ` in ${room}` : "";

  return (
    <>
      <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          {/* Qrew, the fox — the face of the game, so a passer-by meets the
              character the players know. Downsized copy of the mascot art
              the apps use (frontend/public/images/mascot/promo). */}
          <img
            src="/qrew.png"
            alt="Qrew, the QRewzi fox"
            width={220}
            height={220}
            style={{ width: "min(220px, 55vw)", height: "auto", margin: "0 auto", display: "block" }}
          />
          <div className="eyebrow" style={{ marginTop: 12 }}>You scanned a QRewzi station card</div>
          <h1 style={{ marginTop: 12 }}>QRewzi</h1>
          <p style={{ marginTop: 6, fontSize: 22, fontWeight: 700, color: "var(--slate)" }}>{TAGLINE}</p>
          <p style={{ marginTop: 20, fontSize: 18, color: "var(--slate)", lineHeight: 1.5 }}>
            Hi, I&apos;m Qrew. This code marks {station}{where} in a classroom game. Teams scan it
            inside the QRewzi player to arrive at their next task. If you are playing, open the
            player and enter the room code your teacher put on the board.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={playerHref} className="btn btn-primary" data-testid="join-game">
              Join the game
            </a>
            <Link href="/how-it-works" className="btn btn-secondary">
              See how it works
            </Link>
          </div>
          <p style={{ marginTop: 18, fontSize: 14, color: "var(--slate)" }}>
            Playing on a phone?{" "}
            <a href={APP_STORE_URL}>App Store</a> · <a href={PLAY_URL}>Google Play</a> · or just{" "}
            <a href={PLAYER}>play.qrewzi.com</a> in a browser.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 820, textAlign: "center" }}>
          <div className="eyebrow">For teachers</div>
          <h2 style={{ marginTop: 10 }}>The classroom becomes the game.</h2>
          <p style={{ marginTop: 14, fontSize: 17, color: "var(--slate)", lineHeight: 1.5 }}>
            Describe a lesson and QRewzi builds a set of stations — questions, games, debates,
            drawing, movement — that teams play around the room, scanning cards like this one
            to move from task to task. Scores land on the projector as they happen; a report
            lands with you at the end.
          </p>
          <div style={{ marginTop: 22, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free" className="btn btn-primary">Start free</Link>
            <Link href="/escape-rooms" className="btn btn-ghost">Escape rooms</Link>
          </div>
        </div>
      </section>
    </>
  );
}
