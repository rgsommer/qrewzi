# qrewzi-web

Marketing + beta signup for **Qrewzi**. Deploys separately from the
Curriculate frontend to `qrewzi.com`.

## Why a separate site

Qrewzi is the games-only rebrand extracted from `curriculate.net`.
Keeping the marketing surfaces separate:

- Zero risk of collateral damage to Pulse Grading's SEO / branding
- Independent Vercel project + deploy cadence
- Clean host-based split (`curriculate.net` = Curriculate/Pulse, `qrewzi.com` = Qrewzi)

Backend + student-app + teacher-app remain **shared** across both brands
in the sibling Curriculate monorepo. Those surfaces detect their runtime
host (curriculate.net vs qrewzi.com) and render the correct brand at
request time; this repo is only the qrewzi.com marketing surface.

## Run

```bash
cd qrewzi-web
npm install
npm run dev            # → http://localhost:3100
npm run build && npm start
```

Port 3100 to avoid colliding with the main frontend at 3000.

## Environment

| Var                     | Purpose                                              | Default                              |
|-------------------------|------------------------------------------------------|--------------------------------------|
| `QREWZI_BETA_UPSTREAM`  | Where `/api/beta` proxies signups                    | `https://curriculate.net/api/beta`   |

## Structure

- `src/app/page.tsx` — homepage
- `src/app/{how-it-works,features,pricing,about,privacy,terms}/page.tsx`
- `src/app/{game-modes,trivia-night,youth-groups,escape-rooms}/page.tsx` — landing pages for the modes and audiences
- `src/app/seo.ts` — `pageMetadata()`: every page's title, description, canonical and full Open Graph / Twitter card (a page's `openGraph` replaces the layout's, image included, so each builds its own)
- `src/app/components/Faq.tsx` — a page's questions, rendered and emitted as FAQPage JSON-LD from one list
- `src/app/components/gameModes.ts` — Troopers / Raiders / Duels / Builder names and one-liners, matching the app's `shared/gameModes.js`
- `src/app/components/{Wordmark,Mark,SiteHeader,SiteFooter}.tsx`
- `/beta` redirects to `set.qrewzi.com/signup` (`next.config.mjs`)
- `src/app/globals.css` — brand tokens (coral / navy / butter / cream / slate)
- `public/favicon.svg` — Qrewzi mark

## Deploy

Point a new Vercel project at this subdirectory:

- Root: `qrewzi-web/`
- Build: `npm run build`
- Output: default (Next.js)
- Custom domains: `qrewzi.com`, `www.qrewzi.com`, and (optional) `qrewzi.ca`

DNS: CNAME `www.qrewzi.com` → `cname.vercel-dns.com`, apex A/ALIAS per
Vercel's docs.

## Brand assets

Master SVGs live in `../Marketing&Instructions/qrewzi-brand/`; PNG exports
at every needed size are in `../Marketing&Instructions/qrewzi-brand/png/`.
Update those, not the inline copies in `components/`.
