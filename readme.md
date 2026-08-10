# Color Baby House — Design System

> **Color Baby House** — a private kindergarten / daycare in Tashkent for children **aged 1–7**. The brand mark is a ring of hand-painted brush strokes — fuchsia, yellow, cyan and blue — with a girl and a boy holding a yellow balloon, cupped in a pair of pink hands. Bright, playful, reassuring.

This design system turns that single brand mark and its voice into a complete, reusable toolkit — colours, type, components and a marketing-website UI kit — so any agent or designer can produce on-brand material instantly.

---

## 1. Brand context

- **Name:** Color Baby House (частный детский сад, Ташкент). Sub-brand line: **by Color Baby House**.
- **What it is:** a full-day private kindergarten for ages **1–7**, positioned as caring, developmental and safe.
- **Offer (from the operator's own words):**
  - 5-разовое питание (5 meals a day)
  - Забота о детях + ежедневный отчёт в Telegram-группе (daily photo/report to parents)
  - Развивающие занятия: актёрское мастерство, английский язык, танцы, шахматы, логопед-дефектолог, развивающие игры, массаж (курс), гимнастика, робототехника.
- **Audience:** parents of toddlers & preschoolers (the buyer) and the children themselves (the experience). Messaging must reassure the parent (safety, care, development) while feeling joyful to the child.
- **Language:** Russian (primary).

### Sources provided
- `assets/logo-cbh-mark.svg` — the brand mark as vector (ring of brush strokes + two children with a balloon + cupped hands). Used in the header, on service pages and as the favicon source.
- `uploads/ofont.ru_Riffic (2).ttf` → copied to `fonts/Riffic.ttf` (the display face used in the wordmark). **Latin-only — no Cyrillic glyphs** (see Typography note below).
- No codebase, Figma or live product was supplied. The website UI kit here is an original, on-brand build grounded entirely in these foundations (not a recreation of an existing site).

---

## 2. Content fundamentals — how Color Baby House writes

**Voice:** a warm, smiling host welcoming you to a home. Caring and human, never corporate or clinical.

- **Person & address:** speaks as **«мы»** (we, the garden) to **«вы / вас»** — polite second person. Warm but respectful of the parent. Example: *«Мы рады поприветствовать вас в нашем садике»*.
- **Tone:** reassuring + cheerful. Short, plain sentences. Concrete promises (ages, meals, daily reports) rather than abstract marketing claims.
- **Casing:** sentence case everywhere in prose. The wordmark **COLOR BABY HOUSE** is the only all-caps lockup. Avoid SHOUTING in body copy.
- **Punctuation & warmth:** gentle exclamation marks are welcome (*«Добро пожаловать!»*). Em-dashes and simple bulleted lists for the programme.
- **Emoji:** **yes, sparingly** — the operator naturally writes with ✨ and 😊 in parent-facing channels (Telegram, social). Use 1 warm emoji to close a friendly line; never stack them in formal web headings. Brand-appropriate set: ✨ 😊 ☀️ 🎨 🧩 💛.
- **Numbers as trust signals:** lead with the facts parents care about — «от 1 до 7 лет», «5-разовое питание», «ежедневный отчёт».
- **What to avoid:** jargon, pressure/scarcity tactics, cold institutional phrasing ("учреждение осуществляет…"). Keep it human.

**Sample lines (reuse / adapt):**
- Hero: *«Детство в ярких красках»* / *«Садик, где детям хочется остаться»*
- Sub: *«Развивающий садик для малышей от 1 до 7 лет»*
- Reassurance: *«Забота, тёплая атмосфера и ежедневный отчёт в Telegram»*
- CTA: *«Записаться на экскурсию»*, *«Узнать о местах»*

---

## 3. Visual foundations

The whole system radiates from one idea: **a ring of children's brush strokes.** Four brand hues, soft rounded shapes, lots of light airy space, gentle shadows.

### Colour
- **The four brand hues, straight off the logo:** fuchsia **#EE4A9B**, cyan **#22BFD1**, blue **#1F6FBE / #10559B**, yellow **#FBD130**. Everything else is derived from these.
- **Signature gradient:** `--gradient-sun` (fuchsia → magenta → blue → cyan, 135°) for the wordmark, hero accents and key CTAs. Yellow is deliberately absent from it — on white it drops to ~1.4:1 contrast and the text stops reading. Yellow lives in `--gradient-rainbow`, which is decoration only, never text.
- **Primary interactive colour:** **fuchsia `--color-primary` (#EE4A9B)** — buttons, links, active states.
- **Support:** **cyan** (`--color-secondary`) and **blue** (`--color-accent`) — the same pair as the two main arcs of the ring; **yellow** (`--color-sun`) is the "spark".
- **Legacy token names:** `--purple-*` now holds the logo blue, `--orange-*` a warm gold, `--mint-*` a teal. The names stayed so nothing breaks; the values are on-brand. Prefer `--brand-pink / --brand-cyan / --brand-blue / --brand-yellow` in new work.
- **Neutrals are COOL and light:** page background **`--cream` (#FFF9FC)** — white with a breath of pink; sunken surfaces are cyan-tinted (`--sand-50`); text is a deep logo blue **`--ink-900` (#1D2B4C)** — never pure black.
- **Imagery vibe:** bright, warm, naturally-lit photos of children playing/learning. Sunny, saturated, joyful — no cold or moody grading, no black & white.

### Type
- **Display — Rubik (700/800):** chunky, friendly, rounded-corner sans for headings & the wordmark voice. Full Cyrillic.
- **Body — Nunito (400/600/700):** humanist rounded sans, very readable, warm. Full Cyrillic.
- **Accent — Riffic:** the bold rounded face from the logo, **Latin only** — reserve for the *"by Color Baby House"* lockup and decorative Latin flourishes. **Never set Russian in Riffic** (no glyphs).
- Headlines are tight (`--tracking-tight`), large and bold; body is generous (`--leading-relaxed`). Overlines/eyebrows are uppercase Nunito-extrabold with wide tracking.

### Shape, depth & motion
- **Corners:** everything is generously rounded — cards `--radius-lg/xl` (28–40px), buttons are **pills** (`--radius-pill`), avatars/icon chips are circles. Almost nothing has a sharp 90° corner.
- **Cards:** white surface, large radius, **soft warm shadow** (`--shadow-md`), optional 1px `--border` hairline. No harsh outlines. Hero/feature cards may use a pastel tint fill (`--pink-50`, `--orange-50`, `--sky-50`) or a colour glow (`--shadow-pink`).
- **Shadows:** two families — neutral soft drops (`--shadow-xs…xl`, blue-tinted, low opacity) and **coloured glows** under primary CTAs / playful tiles (`--shadow-pink/orange/yellow/purple`). No inner shadows; depth is light and floaty.
- **Backgrounds:** mostly flat `--cream` or white with breathing room. Decorative touches: a soft radial glow behind the hero, pastel blobs, the ring mark as a watermark. Avoid heavy full-bleed gradients on every section.
- **Borders:** thin warm hairlines only; the brand prefers *fill + shadow* over outlines.
- **Transparency / blur:** light use — a translucent white sticky header with subtle backdrop-blur; pastel colour washes at low opacity. Not a glassmorphism-heavy system.
- **Motion:** gentle and playful. Default `--ease-out` for entrances; `--ease-bounce` (slight overshoot) for delightful moments (button press pop, badge appear). Durations 140–360ms. Fades + small rises + scale pops. No long or aggressive animation.
- **Hover:** buttons darken one step (`--color-primary-hover`) and lift (raise shadow); cards lift `translateY(-4px)` with a stronger shadow.
- **Press:** scale down slightly (`scale(0.97)`) and settle the shadow — a tactile "squish".
- **Focus:** soft pink ring `--ring` (4px, 28% pink). Always visible, never removed.

---

## 4. Iconography

There is **no proprietary icon set** in the supplied brand. Recommendation, applied across this system:

- **Set:** **Lucide** (https://lucide.dev) via CDN — open-source, consistent 2px stroke with **round line-caps & joins**, which matches the brand's soft rounded geometry. *(Substitution — flagged: no original icon font/SVG existed in the brand assets. Swap if the operator has a preferred set.)*
- **Style rules:** line icons at 2–2.25px stroke, rounded caps; size 20/24/32. Tint with brand colours (`--color-primary`, category colours) or `--ink-700`. For playful feature tiles, place a line icon inside a **soft circular colour chip** (pastel fill + matching solid icon).
- **Emoji** are an *accepted, light* accent in marketing copy (see Content Fundamentals) — not a substitute for UI icons.
- **Programme icons** map to Lucide glyphs, e.g. English → `languages`, dance → `music`, chess → `crown`/`castle`, acting → `drama`/`venetian-mask`, robotics → `bot`, speech → `mic`, games → `puzzle`, gymnastics → `activity`, meals → `utensils`, reports → `send` (Telegram).
- **The ring-and-children mark** is the one bespoke "icon"; use `assets/logo-cbh-mark.svg` rather than redrawing it.

Usage: `<script src="https://unpkg.com/lucide@latest"></script>` then `<i data-lucide="heart"></i>` + `lucide.createIcons()`.

---

## 5. Index / manifest

```
styles.css                     ← global entry (consumers link THIS)
tokens/
  fonts.css                    @font-face: Rubik, Nunito, Riffic (self-hosted)
  colors.css                   colour scales + semantic aliases + gradients
  typography.css               families, scale, weights, roles
  spacing.css                  spacing, radii, shadows, motion, z-index
  base.css                     element defaults + .cs-* helpers
fonts/                         self-hosted .woff2 (Rubik, Nunito) + Riffic.ttf
assets/                        logo-cbh-mark.svg (brand mark, vector)
guidelines/                    foundation specimen cards (Design System tab)
components/core/               reusable React primitives (Button, Card, Badge, …)
ui_kits/website/               marketing-site UI kit (home, programmes, about, enrol)
SKILL.md                       Agent-Skill manifest
readme.md                      this file
```

**Components:** see `components/core/` — Button, IconButton, Badge, Tag, Card, FeatureCard, Input, Avatar, SectionHeading (each with `.jsx` + `.d.ts` + `.prompt.md`).
**UI kit:** `ui_kits/website/` — full marketing site with several homepage directions.

*Compiler note:* `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated automatically — do not edit. Namespace for cards: `window.DesignSystem_52b7c1`.

---

## ⚠️ Caveat for the user
The logo's display face **Riffic has no Cyrillic glyphs**, so Russian headings use **Rubik** (the closest chunky-rounded Cyrillic match) — see the Type cards. If you have a Cyrillic display font that matches the wordmark exactly, send it and I'll swap it in.
