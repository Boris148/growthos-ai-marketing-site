# GrowthOS AI — Marketing Site

The public marketing site for **GrowthOS AI** — AI growth infrastructure for service businesses.

Live: <https://boris148.github.io/growthos-ai-marketing-site/> (also configured to deploy to Cloudflare Pages when the `growthos.ai` domain is pointed there).

---

## Stack

Static HTML, hand-crafted CSS, vanilla JavaScript. No build step, no framework, no dependencies.

- `index.html` — the page
- `assets/css/style.css` — all styles (dark navy + gold, premium aesthetic)
- `assets/js/main.js` — scroll-triggered reveals, FAQ accordion, nav state, smooth scroll
- `assets/img/` — logos, headshots, campaign creatives
- ElevenLabs ConvAI widget embedded for the AI voice assistant (bottom-right)

See `STACK.md` for the rationale.

---

## Local development

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

That's it. No `npm install`, no compile, no watcher.

---

## Deploy

### GitHub Pages (current)

Pages serves the repo root on the `main` branch.

```bash
# enable Pages (one-time, already done)
gh api repos/Boris148/growthos-ai-marketing-site/pages \
  -X POST -F source.branch=main -F source.path=/
```

`.nojekyll` is present so GitHub Pages serves the files as-is without running Jekyll.

### Cloudflare Pages (for the real `growthos.ai` domain)

`wrangler.toml` is included. To deploy:

```bash
npx wrangler pages deploy . --project-name growthos-ai
```

Then point `growthos.ai` at the Pages project in the Cloudflare dashboard.

---

## TODO before launch

- **ElevenLabs agent ID** — in `index.html`, replace `agent-id="REPLACE_ME"` with the live agent ID.
- **Calendly link** — `https://growthos.ai/call` is a placeholder. Swap to the real booking URL.
- **Domain** — point `growthos.ai` at GitHub Pages (CNAME) or Cloudflare Pages once SSL is provisioned.

---

## Notes

- No pricing anywhere — by design. The strategy call is the qualifier.
- Every CTA points to `https://growthos.ai/call`.
- Daniel Lee is not mentioned anywhere (removed at his request).
- Co-founders: AJ Jordan + Jeremy Garcia.
