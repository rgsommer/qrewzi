import { NextResponse } from "next/server";

// POST /api/beta
//
// Proxy the beta signup into the shared Curriculate backend at
// https://curriculate.net/api/beta so we don't duplicate the DB/Resend
// wiring in this repo. The upstream is a Next.js API route on the main
// frontend and already handles rate limiting, Mongo persistence, internal
// notification, and the welcome auto-reply.
//
// Set QREWZI_BETA_UPSTREAM to point elsewhere in staging / preview.

const UPSTREAM =
  process.env.QREWZI_BETA_UPSTREAM || "https://curriculate.net/api/beta";

export async function POST(request: Request) {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const upstream = await fetch(UPSTREAM, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-source": "qrewzi-web",
      },
      body: JSON.stringify(body),
    });

    // Pass upstream body + status through verbatim so the client sees the same
    // error shape the shared endpoint always returns.
    const text = await upstream.text();
    let parsed: unknown;
    try {
      parsed = text ? JSON.parse(text) : {};
    } catch {
      parsed = { raw: text };
    }
    return NextResponse.json(parsed, { status: upstream.status });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Upstream fetch failed";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}
