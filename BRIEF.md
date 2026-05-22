# GrowthOS AI — Marketing Site Build Brief

## Mission
Build a **top-tier enterprise-grade marketing website** for GrowthOS AI from scratch. The current preview at `Boris148/growthos-website-preview` was rejected as "trash" — start fresh.

The client (Jeremy Garcia) wants Hormozi-style prestige, premium polish, the same modern AI-agency vibe as **https://opisai.com/**. Most clients will be paying top dollar; the site must reflect that.

## Critical Requirements
- **NO PRICING on the site** — pricing is intentional friction, handled on strategy calls
- **CTA everywhere = "Book a Strategy Call"** (use `https://growthos.ai/call` as placeholder for Calendly; mark as TODO if not live)
- **ElevenLabs voice agent / chat widget** in the bottom-right, mirroring the integration on https://myroadie.co/ (visit it to see)
- **Transitions + good UX/UI** — scroll-triggered animations, smooth hover states, no jank
- **Easy on the eyes** — generous whitespace, not crammed
- **NOT redundant** — every section earns its place
- **All services explained** but skimmable for executives

## Aesthetic Reference (study these first via WebFetch)
1. **https://opisai.com/** — primary visual reference. Note: dark backgrounds with subtle gradients, large confident headlines, refined typography, motion that feels expensive not gimmicky.
2. **https://myroadie.co/** — for the ElevenLabs voice widget pattern (bottom-right floating button that opens a voice conversation)
3. **https://crowdsync.ai/** — for intent-data explainer language and CrowdSync framing
4. **https://audiencelab.io/** — for the "Super Pixel" technology, identity resolution, and intent data services
5. **https://socialelitemarketinggroup.com/** — Jeremy's other agency, for tone and proven service descriptions

## Brand
- **Name:** GrowthOS AI
- **Tagline:** "AI Growth Infrastructure for Service Businesses"
- **Domain (just purchased):** growthos.ai (Jeremy bought today on Namecheap)
- **Co-Founders:** AJ Jordan + Jeremy Garcia (Daniel Lee was removed at his request — do NOT mention Daniel anywhere)
- **Palette (current — feel free to evolve toward darker/more premium):**
  - Navy: `#0a1a36` / `#11254d`
  - Gold: `#c79a36` / `#b8860b`
  - Cream: `#faf7f0` / `#efe9da`
  - Ink: `#15233d`
  - Muted: `#4a5970`
- **Type:** Plus Jakarta Sans (currently). Consider also Inter, Geist, or Söhne for a more enterprise feel.
- **Logo:** `reference-assets/growthos-ai-logo.png` (navy hexagon-G with gold bars)

**Looking at opisai.com — strongly consider going DARKER.** Cream backgrounds may feel too SMB; deep navy/black with gold accents and crisp white type will feel more enterprise. Use your judgment.

## Services to Feature (do NOT skip any)
For each service, write a confident headline + 2-3 sentence explainer + concrete proof or mechanism.

### 1. AI Voice Caller (the HERO product)
- Sub-60-second speed-to-lead, 24/7
- ElevenLabs Conversational AI — natural human-sounding voice
- Trained on each client's offer, objections, and brand voice
- Outbound: calls every new lead within 60 seconds of opt-in
- Inbound: handles customer support, qualifies, transfers hot leads
- Books directly onto rep calendars, with escalation logic for complex calls
- **Why it matters:** Research shows contact rates drop 80%+ after 5 minutes of cold time. We close that gap permanently.

### 2. Intent Data + The Super Pixel (massive differentiator)
- Powered by AudienceLab.io strategic partnership (Jeremy is partnered — do not name "AudienceLab" publicly, frame as "our proprietary data stack")
- **The Super Pixel:** identity-resolution pixel that captures anonymous site visitors — names, emails, phone, business addresses
- **Intent audiences:** target high-intent buyers across Meta, Google, TikTok using behavioral + purchase-intent signals
- **Outcome:** we don't just run ads to cold lookalikes; we run ads to people actively researching your category right now
- This is *the* thing other agencies cannot do — most don't even know it exists

### 3. AI Lead Generation + Database Reactivation
- AI-generated ad creatives + copy across Meta / Google / TikTok
- Paid campaigns managed by operators with $12M+ in spend behind them (use this stat)
- UGC creative production included (talking-head actors via Arcads + HeyGen, AI scene-based video via Veo + Higgsfield)
- Database reactivation — SMS + email sequences that resurrect dead leads, old form-fills, no-shows. Free revenue, week one.

### 4. CRM Build + Integration
- Full GoHighLevel deployment (or integrates with client's existing CRM)
- Pipeline stages, automation, lead routing, smart tagging
- TCPA / DNC compliance built in
- KPI dashboards — cost per lead, show rate, close rate, attribution

### 5. Custom AI Agents (powered by OpenClaw)
- Autonomous AI bots that run *inside* the client's business
- Email triage, social media, content production, ops, support
- The same tech GrowthOS AI's founders use to run their own companies
- Custom-built per client engagement

### 6. Strategic Oversight
- Weekly KPI reports + monthly QBRs
- Real account owners (founders are on the calls — no pods of juniors)
- 40+ combined years across the founding team
- $450M+ in client sales volume managed

## Receipts / Social Proof (use these stats)
- $450M+ Client Sales Volume
- $12M+ Ad Spend Managed
- 50+ Industries Served
- 40+ Combined Years
- $1.6M generated for a Pool Contractor (84 consults)
- $1K cost-per-case for a Personal Injury law firm
- 77X peak ROAS for a music festival client
- $5 cost-per-lead for a GLP-1 telehealth client

## Pages / Sections (minimum)
1. **Hero** — confident headline, sub-tagline, primary CTA, looping background (subtle animation or AI-generated b-roll)
2. **Stats bar** — the $450M / $12M / 50+ / 40+ row
3. **The Problem** — leads go cold in 5 minutes, your call center is expensive, etc.
4. **The 6 Services** — each with its own card or dedicated section. Voice Caller and Super Pixel get the most prominent treatment.
5. **Receipts / Results** — case-study tiles
6. **About / Founders** — AJ Jordan + Jeremy Garcia. (Photos in `reference-assets/aj-jordan-headshot.jpg` and `reference-assets/jeremy-silhouette.jpg`)
7. **FAQ** — handle the top 5 objections: timeline, AI vs humans, integration with existing CRM, what data we use, what we won't do
8. **Final CTA** — "Book a Strategy Call" — full-bleed band with prominent button

## Tech Stack — YOUR CHOICE
Recommended: **Astro + Tailwind CSS + Framer Motion-style transitions (or Motion One for vanilla)**. Astro is fast, ships zero JS by default, deploys to Cloudflare Pages or GitHub Pages effortlessly.

Alternative: **Next.js 15 + Tailwind + shadcn/ui** if you want React component composition.

If you want to ship maximum quality in minimum time, plain HTML + Tailwind via CDN + Alpine.js for interactions is also valid. Don't over-engineer — site is marketing, not an app.

Decide and document your choice in `STACK.md`.

## ElevenLabs Widget
- Bottom-right floating button → opens a voice conversation with the GrowthOS AI agent
- Mirror the implementation on https://myroadie.co/ (visit it, inspect the widget script)
- ElevenLabs convo agent ID will be added by Jeremy post-deploy — leave `data-agent-id="REPLACE_ME"` and a TODO comment

## Deployment
1. Create a new **PUBLIC** GitHub repo: `Boris148/growthos-ai-marketing-site`
2. Push all code
3. Enable GitHub Pages → main branch / docs folder (or whatever your build outputs)
4. Confirm the GitHub Pages URL works (https://boris148.github.io/growthos-ai-marketing-site/ or similar)
5. Also add a `wrangler.toml` or Cloudflare Pages config so Jeremy can swap to Cloudflare Pages later for the real domain

## Reference Materials in This Directory
- `reference-pitch-deck-v15.pdf` — latest GrowthOS AI pitch deck (15 slides) — read it for tone, messaging, services
- `reference-one-pager.html` — current one-pager (good for service descriptions, palette)
- `reference-assets/` — all logos, headshots, campaign screenshots from existing materials

## Out of Scope (do not do)
- Pricing pages or pricing CTAs anywhere
- Login / member-area / dashboard
- Blog (will be added later)
- E-commerce
- Generic-looking AI agency tropes (no "Empowering businesses with AI" slop)
- Stock-photo people
- Excessive emoji
- Buzzwords without substance (no "synergies", no "transform", no "leverage")

## Completion Criteria
1. Site is built and viewable locally (`npm run dev` or equivalent works)
2. Public GitHub repo `Boris148/growthos-ai-marketing-site` exists with all code
3. GitHub Pages is live at a public URL
4. README explains: stack choice, how to dev locally, how to deploy
5. Final commit summarizes what you built
6. **When done, run this command to notify:** `openclaw system event --text "GrowthOS AI site v1 complete — REPO: <url> LIVE: <pages url>" --mode now`

## When in Doubt
- Pick the more premium, more confident, more reductive option
- "If Apple made an AI agency site, what would it look like?" → that's the bar
- Show, don't tell. Prove with stats and proof, not adjectives.

## Authorization
You are authorized to:
- Install npm packages
- Create the new public GitHub repo via `gh repo create Boris148/growthos-ai-marketing-site --public --source=. --remote=origin --push`
- Enable GitHub Pages via `gh api repos/Boris148/growthos-ai-marketing-site/pages -X POST -F source.branch=main -F source.path=/`
- WebFetch any of the reference URLs
- Commit + push freely

Now build. Ship quality.
