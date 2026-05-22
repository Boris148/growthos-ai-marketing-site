# Stack

**Static HTML + hand-crafted CSS + vanilla JS.** No build step. No framework. No dependencies.

## Why
This is a marketing one-pager, not an application. Every dependency is a tax on load time, deployability, and future-Jeremy's ability to edit. Hand-crafted CSS gives total control over the premium polish the brief demands. Tailwind utility classes would still need a build pipeline to avoid the dev-only CDN warning. Astro / Next.js would add minutes of build time for content that doesn't change.

The brief explicitly green-lights this approach: *"If you want to ship maximum quality in minimum time, plain HTML + Tailwind via CDN + Alpine.js for interactions is also valid. Don't over-engineer — site is marketing, not an app."*

## Choices
- **Typography:** Inter (Google Fonts, preconnect + display=swap). Tabular numerals for stats. -0.02em letter-spacing on display headlines for refinement.
- **Animations:** Native CSS keyframes + Intersection Observer for scroll reveals. No animation libraries.
- **Voice widget:** ElevenLabs ConvAI Embed (`@elevenlabs/convai-widget-embed` from unpkg). `agent-id="REPLACE_ME"` — Jeremy swaps in real ID post-deploy.
- **Images:** Original assets from `reference-assets/` copied into `assets/img/`.

## Hosting
- **GitHub Pages** — root of `main` branch (`.nojekyll` disables Jekyll). No build step needed.
- **Cloudflare Pages** — same source root works; `wrangler.toml` included so Jeremy can swap when the real domain (`growthos.ai`) is pointed at Cloudflare.

## Local dev
```
python3 -m http.server 8000
# open http://localhost:8000
```
That's it. No `npm install`, no compile.
