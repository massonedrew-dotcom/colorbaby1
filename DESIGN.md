---
version: 1.0
name: color-baby-house-design
description: A warm, bright kindergarten brand for children aged 1–7 in Tashkent, built on one asset — a ring of hand-painted brush strokes in fuchsia, cyan, blue and yellow, cupping two children with a balloon. The system is cool-white, not beige: the page sits on #FFF9FC (white with a breath of pink), text is a deep logo blue #1D2B4C, and every colour on screen traces back to the mark. Fuchsia #EE4A9B is the single interactive voltage — buttons, links, active states. Corners are generously rounded to the point of being a signature (cards 28–40px, buttons full pills, chips circles); depth is soft, warm, blue-tinted shadow plus coloured glows under CTAs, never outlines. Type is chunky-rounded Rubik for display over humanist Nunito for body, both full Cyrillic; the Latin-only Riffic face is reserved for the "by Color Baby House" lockup. Motion is gentle and short (140–360ms) with a slight bounce overshoot for delight — never long, never aggressive. The audience is the parent, so joy is always subordinate to reassurance.

colors:
  primary: "#EE4A9B"
  primary-hover: "#D62E83"
  primary-press: "#AF2069"
  primary-fill: "#D62E83"
  primary-text: "#AF2069"
  primary-soft: "#FEEDF5"
  secondary: "#22BFD1"
  secondary-hover: "#0E9BB0"
  secondary-fill: "#0A7B8C"
  secondary-soft: "#E7F8FB"
  accent: "#1F6FBE"
  accent-hover: "#10559B"
  accent-soft: "#EAF1FA"
  sun: "#FBD130"
  sun-soft: "#FFF4BF"
  brand-pink: "#EE4A9B"
  brand-cyan: "#22BFD1"
  brand-blue: "#10559B"
  brand-yellow: "#FBD130"
  canvas: "#FFF9FC"
  surface: "#FFFFFF"
  surface-sunken: "#F3FAFC"
  surface-tint: "#FEEDF5"
  hairline: "#EDE9F1"
  hairline-strong: "#D6DEE8"
  ink: "#1D2B4C"
  ink-body: "#37456A"
  muted: "#5E6A89"
  subtle: "#68728C"
  placeholder: "#B4BCCC"
  on-brand: "#FFFFFF"
  success: "#1FC39C"
  success-fill: "#0C7D63"
  info: "#22BFD1"
  warning: "#FBA22B"
  danger: "#FF5A5A"
  focus-ring: "rgba(238, 74, 155, 0.28)"

typography:
  hero:
    fontFamily: "'Rubik', 'Nunito', system-ui, sans-serif"
    fontSize: 84px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.015em
  h1:
    fontFamily: "'Rubik', 'Nunito', system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.015em
  h2:
    fontFamily: "'Rubik', 'Nunito', system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.015em
  h3:
    fontFamily: "'Rubik', 'Nunito', system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
  h4:
    fontFamily: "'Rubik', 'Nunito', system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
  lead:
    fontFamily: "'Nunito', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Nunito', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  subhead:
    fontFamily: "'Rubik', 'Nunito', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
  label:
    fontFamily: "'Nunito', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.25
  overline:
    fontFamily: "'Nunito', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0.1em
    textTransform: uppercase
  wordmark:
    fontFamily: "'Riffic', 'Rubik', system-ui, sans-serif"
    note: "Latin only — never set Cyrillic in this face."

rounded:
  xs: 8px
  sm: 12px
  md: 18px
  lg: 28px
  xl: 40px
  2xl: 56px
  pill: 999px
  circle: 50%

spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]
  container-max: 1200px
  container-pad: "clamp(20px, 5vw, 64px)"
  section-y: "clamp(64px, 9vw, 128px)"

elevation:
  xs: "0 1px 2px rgba(29, 43, 76, 0.06)"
  sm: "0 4px 14px rgba(29, 43, 76, 0.07)"
  md: "0 10px 26px rgba(29, 43, 76, 0.10)"
  lg: "0 20px 44px rgba(29, 43, 76, 0.13)"
  xl: "0 32px 64px rgba(29, 43, 76, 0.16)"
  glow-pink: "0 14px 30px rgba(238, 74, 155, 0.34)"
  glow-cyan: "0 14px 30px rgba(34, 191, 209, 0.30)"
  glow-yellow: "0 14px 30px rgba(251, 209, 48, 0.34)"
  glow-blue: "0 14px 30px rgba(31, 111, 190, 0.30)"

motion:
  ease-out: "cubic-bezier(0.22, 1, 0.36, 1)"
  ease-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  ease-bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  fast: 140ms
  base: 220ms
  slow: 360ms

gradients:
  sun: "linear-gradient(135deg, #EE4A9B 0%, #D62E83 30%, #1F6FBE 70%, #0E9BB0 100%)"
  rainbow: "linear-gradient(90deg, #EE4A9B 0%, #FBD130 33%, #22BFD1 66%, #10559B 100%)"
  pink: "linear-gradient(135deg, #D62E83 0%, #AF2069 100%)"
  sky: "linear-gradient(135deg, #6FDDEA 0%, #0E9BB0 100%)"
  sunrise: "linear-gradient(180deg, #C6F0F6 0%, #FFF4BF 55%, #FCD8E9 100%)"

---

## Overview

Color Baby House is a private full-day kindergarten in Tashkent for children aged 1 to 7. The site sells to **the parent**, not the child — every playful decision has to survive the question *"does this make a mother trust us with her toddler?"* The design language is therefore **bright but calm**: saturated brand colour concentrated in small, deliberate places, floating on a lot of near-white space, with type that is friendly rather than corporate and shapes that have no sharp corners anywhere.

Everything in the system radiates from a single asset — `assets/logo-cbh-mark.svg`, a ring of hand-painted brush strokes in fuchsia, cyan, blue and yellow, holding two children with a yellow balloon inside a pair of cupped pink hands. There was no prior codebase, Figma file or brand book; the four hues, the roundness and the hand-made quality of the mark are the entire source of truth.

**The three defining traits, in order of importance:**

1. **Cool-white canvas, hot brand accents.** The page is `{colors.canvas}` — white with the faintest pink breath — not cream, not beige. Colour arrives as small, high-voltage moments: a fuchsia pill button, a cyan icon chip, a yellow spark. Never as a full-bleed wash on every section.
2. **Radical roundness.** Cards at 28–40px, buttons as full pills, icon chips and avatars as circles. There is effectively no 90° corner in the entire system. This is the fastest visual tell that a screen is on-brand.
3. **Fill + shadow, not outlines.** Surfaces separate through a white plate lifted on a soft blue-tinted shadow, optionally with a 1px hairline. Heavy borders, hard rules and boxed-in layouts read as institutional and are off-brand.

**Language:** Russian, primary and only. Voice is a warm host welcoming you into a home — «мы» addressing «вы», sentence case, short concrete sentences, gentle exclamation marks, an occasional ✨ 😊 ☀️ 🎨 💛. Lead with the facts a parent buys on: «от 1 до 7 лет», «5-разовое питание», «ежедневный отчёт в Telegram». Never jargon, never scarcity pressure, never «учреждение осуществляет…».

## Colors

### Brand & accent

The four logo hues are the whole palette. `{colors.brand-pink}`, `{colors.brand-cyan}`, `{colors.brand-blue}`, `{colors.brand-yellow}` are the literal values off the mark; everything else is a tint or shade of them.

- **`{colors.primary}` fuchsia #EE4A9B** — the single interactive voltage. Primary buttons, links, active nav, the focus ring, the most important badge on a card. If a screen has exactly one hot colour, it is this one.
- **`{colors.secondary}` cyan #22BFD1** — the counterweight, matching the light arc of the ring. Secondary CTAs, informational chips, category tinting.
- **`{colors.accent}` blue #1F6FBE / #10559B** — the boy and the dark arc. Structural accents, the third category colour, gradient terminus.
- **`{colors.sun}` yellow #FBD130** — the balloon. **Decoration only.** Sparks, stars, blob fills, badge dots. Yellow on white is ~1.4:1 — it can never carry text or be a text colour.

### Contrast pairing rules (non-negotiable)

Fuchsia at 400 is 3.45:1 on white — enough for a fill, not enough for text. The system therefore splits every hot hue into a *fill* value and a *text* value. **Never use the 400 step for text or for a white-text background.**

| Job | Token | Why |
|---|---|---|
| Solid fill under white text | `{colors.primary-fill}` #D62E83 | White on #EE4A9B is 3.45:1; on #D62E83 it is 4.59:1. Visually near-identical, legally different. |
| Brand-coloured text on white | `{colors.primary-text}` #AF2069 | Overlines, links, captions. |
| Cyan fill under white text | `{colors.secondary-fill}` #0A7B8C | White on #22BFD1 is 2.2:1 — unusable. |
| Text on a `-50` tint | `--on-pink-tint` #AF2069 · `--on-cyan-tint` #086673 · `--on-yellow-tint` #6E5600 · `--on-blue-tint` #10559B | Each pair verified 5.7–6.7:1 on its own tint. |
| Text/icons on a `-100` tint | `--on-pink-100` · `--on-cyan-100` · `--on-yellow-100` · `--on-blue-100` · `--on-mint-100` · `--on-gold-100` | 5–6.3:1 — clears 4.5:1 text and 3:1 icon at once. |

### Surface

- **`{colors.canvas}` #FFF9FC** — the default page. White with a pink breath.
- **`{colors.surface}` #FFFFFF** — cards, the sticky header, popovers, form fields.
- **`{colors.surface-sunken}` #F3FAFC** — recessed bands and alternating sections. Cyan-tinted, never grey.
- **`{colors.surface-tint}` #FEEDF5** and its siblings `--sky-50`, `--yellow-50`, `--purple-50` — pastel feature tiles and icon chips.

### Hairlines & borders

`{colors.hairline}` #EDE9F1 for the 1px optional card outline and section dividers; `{colors.hairline-strong}` #D6DEE8 only for form-field rest borders. The brand prefers fill + shadow over outline — reach for a border last.

### Text

`{colors.ink}` #1D2B4C is the deep logo blue used for all headings and primary copy — **never pure black, never grey-black.** `{colors.ink-body}` #37456A for long body copy on tints, `{colors.muted}` #5E6A89 for supporting copy, `{colors.subtle}` #68728C for fine print (4.8:1 on white — the lightest step that is still legal), `{colors.placeholder}` #B4BCCC for placeholder and disabled only.

### Semantic

`{colors.success}` teal-mint, `{colors.info}` cyan, `{colors.warning}` warm gold, `{colors.danger}` #FF5A5A. Each has a `-soft` tint background. Use the `-fill` variants when white text sits on them.

### Legacy token names

`--purple-*` holds the logo **blue**, `--orange-*` a warm **gold**, `--mint-*` a **teal**. The names stayed so existing markup does not break; the values are on-brand. **In new work always prefer `--brand-pink / --brand-cyan / --brand-blue / --brand-yellow` or the semantic aliases.**

## Typography

### Font family

- **Display — Rubik 700/800.** Chunky, friendly, subtly rounded corners. All headings, the wordmark voice, numbers used as trust signals. Full Cyrillic. Self-hosted `.woff2` in `fonts/`.
- **Body — Nunito 400/600/700/800.** Humanist rounded sans, very legible at small sizes, warm. All body copy, labels, overlines. Full Cyrillic.
- **Accent — Riffic.** The bold rounded face from the logo. **Latin glyphs only.** Reserved for the *"by Color Baby House"* lockup and decorative Latin flourishes. Setting Russian in Riffic produces tofu — it is the single most damaging mistake available in this system.

### Hierarchy

`{typography.hero}` 84/800 → `{typography.h1}` 64/800 → `{typography.h2}` 48/700 → `{typography.h3}` 36/700 → `{typography.h4}` 28/700 → `{typography.subhead}` 22/700 → `{typography.lead}` 18/400/1.65 → `{typography.body}` 16/400/1.5 → `{typography.label}` 14/700 → `{typography.overline}` 12/800 uppercase with 0.1em tracking.

### Principles

- **Headlines tight, body relaxed.** Display sizes take `-0.015em` tracking and 1.1–1.25 leading; body runs at 1.5, lead paragraphs at 1.65. The contrast between dense headline and airy body is a core rhythm of the system.
- **Sentence case in prose.** The only all-caps lockups are the wordmark COLOR BABY HOUSE and `{typography.overline}` eyebrows.
- **Gradient text is a hero device, not a utility.** `{gradients.sun}` clipped to text belongs on one phrase in the hero and occasionally one section headline. Yellow is deliberately absent from that gradient because it stops reading on white. Never gradient-fill body copy, and never gradient-fill more than one phrase per viewport.
- **Numbers are typography.** «от 1 до 7 лет», «5-разовое питание» carry more selling weight than adjectives — set them large and bold rather than burying them in a sentence.

### Note on font substitutes

Riffic has no Cyrillic, so Russian display type falls back to Rubik — the closest chunky-rounded Cyrillic match available. If the operator ever supplies a Cyrillic display face matching the wordmark, it swaps in at `--font-display`.

## Layout

### Spacing system

4px base. Use only the scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128. Component-internal padding lives in 12–24; card padding 24–32; grid gutters 16–24; the gap between a heading and its body 12–16.

### Grid & container

`{spacing.container-max}` 1200px centred, with `{spacing.container-pad}` `clamp(20px, 5vw, 64px)` side padding so mobile never touches the edge and wide screens get real margins. Section rhythm is `{spacing.section-y}` `clamp(64px, 9vw, 128px)` — vertical breathing scales with the viewport rather than snapping at breakpoints.

### Whitespace philosophy

Airy, not packed. Feature grids run 3-up desktop with 24px gutters and a lot of vertical space above and below. The brand's biggest risk is looking like a busy municipal noticeboard — when in doubt, remove an element rather than shrink the gap. Decorative touches (a soft radial glow behind the hero, pastel blobs, the ring mark as a low-opacity watermark) fill emptiness better than more content does.

## Elevation

Two shadow families, both soft, both blue-tinted, none inner.

- **Neutral drops** `{elevation.xs}` → `{elevation.xl}`, all `rgba(29, 43, 76, …)` at low opacity — the general card and header language. `{elevation.md}` is the resting card default; `{elevation.lg}` is the card hover.
- **Coloured glows** `{elevation.glow-pink}`, `{elevation.glow-cyan}`, `{elevation.glow-yellow}`, `{elevation.glow-blue}` — under primary CTAs and playful tiles, matching the element's own hue. These are the only "loud" shadows and should appear a handful of times per page, not on every card.

Depth reads as *light and floaty*. No inner shadows, no hard drop shadows, no dark scrims except a real modal backdrop.

## Components

### Buttons

**`button-primary`** — `{colors.primary-fill}` background, white label, `{rounded.pill}`, `{elevation.glow-pink}`. Hover darkens one step to `{colors.primary-hover}` and lifts the shadow. Press scales to `0.97` and settles the shadow — a tactile squish. This is the only button style that carries `{gradients.sun}` as an alternate treatment, and only for the single most important CTA on the page («Записаться на экскурсию»).

**`button-secondary`** — white fill, `{colors.ink}` label, 1px `{colors.hairline}` hairline, `{rounded.pill}`, `{elevation.sm}`. Used beside the primary in the hero and for «Узнать о местах».

**`button-ghost`** — no fill, `{colors.primary-text}` label, pill hit-area. Tertiary actions and inline links.

**All buttons** are pills, minimum 48px tall for touch, and never lose their focus ring.

### Cards

**`card`** — the workhorse. `{colors.surface}` white plate, `{rounded.lg}` 28px (`{rounded.xl}` 40px for large feature cards), 24–32px padding, `{elevation.md}`, optional 1px `{colors.hairline}`. Hover lifts `translateY(-4px)` into `{elevation.lg}`.

**`card-tinted`** — same geometry, but filled with a pastel `-50` tint (`{colors.surface-tint}`, `--sky-50`, `--yellow-50`, `--purple-50`) instead of white. Text inside must switch to the matching `--on-*-tint` value. Used for programme tiles and reassurance blocks.

**`card-featured`** — a tinted or gradient card carrying `{elevation.glow-pink}` and a slightly larger radius. One per section maximum.

**`icon-chip`** — a `{rounded.circle}` 48–56px chip filled with a `-100` tint, holding a 20–24px Lucide line icon in the matching `--on-*-100` colour. The single most repeated brand atom on the page; it is what makes programme lists read as playful rather than as a spreadsheet.

### Badges & tags

**`badge`** — `{rounded.pill}`, `{typography.label}` 14/700 or `{typography.overline}` 12/800 uppercase, solid `-fill` background with white text, or a `-50` tint with `--on-*-tint` text. Small, one per card.

**`tag`** — pill outline in `{colors.hairline}` with `{colors.muted}` label, for neutral metadata (age range, duration).

### Navigation

**`header`** — sticky, translucent white with a subtle backdrop-blur, `{elevation.sm}` once scrolled, `{spacing.container-max}` inner width. Left: the ring mark + COLOR BABY HOUSE wordmark. Centre or right: section anchors in `{typography.label}`. Far right: a `button-primary` CTA. Blur is used *lightly* — this is not a glassmorphism system.

**`nav-link`** — `{colors.ink}` at rest, `{colors.primary-text}` on hover and when its section is active, with a short fuchsia underline or dot marker. Active state must be visible without colour alone.

**`mobile-nav`** — full-screen sheet from a `{rounded.circle}` burger button, links stacked at `{typography.subhead}` size with generous 56px rows.

### Forms

**`input`** — white fill, 1px `{colors.hairline-strong}` border, `{rounded.md}` 18px, 48–56px tall, `{typography.body}` with `{colors.placeholder}` placeholder. Label above in `{typography.label}`. Focus swaps the border to `{colors.primary}` and adds the `{colors.focus-ring}` 4px soft pink ring. **The focus ring is never removed, on any element, ever.**

**`enroll-widget`** — the conversion block: a `{gradients.pink}` filled card (the 500→600 ramp, because white on `--pink-300` is 2.45:1 and disappears), white heading, white-on-transparent inputs, and a white `button` with fuchsia label.

### Sections

The homepage runs: hero → about/care → programmes → gallery → schedule → pricing → enrol → reviews → FAQ → contacts, with `#summer` as a seasonal band. Alternate `{colors.canvas}` and `{colors.surface-sunken}` between neighbouring sections rather than tinting every section a different colour.

**`section-heading`** — `{typography.overline}` eyebrow in `{colors.primary-text}`, then `{typography.h2}` in `{colors.ink}`, then an optional `{typography.lead}` in `{colors.muted}` capped at ~60 characters per line.

### Footer

`{colors.surface-sunken}` or a deep `{colors.ink}` band, 3-column link/contact grid collapsing to 1 column on mobile, the ring mark plus wordmark in the brand column, circular social chips, and a legal strip in `{typography.label}` at `{colors.subtle}`.

## Motion

Gentle, short, purposeful. Durations 140–360ms — `{motion.fast}` for hover/press, `{motion.base}` for most transitions, `{motion.slow}` only for entrances.

- **Entrances:** fade + a small rise (12–20px), `{motion.ease-out}`, staggered 60–80ms across a grid. Triggered once on scroll into view, never looping.
- **Delight:** `{motion.ease-bounce}` overshoot for a button press pop, a badge appearing, a balloon bob. Reserved for a few moments per page.
- **Hover:** buttons darken one step and lift; cards `translateY(-4px)` into a stronger shadow.
- **Press:** `scale(0.97)` and shadow settle.
- **Ambient:** slow float on decorative blobs/balloons and a slow sun spin are on-brand *as background texture at low amplitude*. They must never move text, never run at high amplitude, and never continue behind a focused input or an open menu.
- **`prefers-reduced-motion: reduce` disables every ambient loop, every parallax and every scroll-driven transform, leaving only opacity changes.** This is a hard rule — the audience includes vestibular-sensitive parents on phones.

## Iconography

**Lucide** line icons via CDN, 2–2.25px stroke with round caps and joins, sizes 20/24/32. Tint with a brand hue or `--ink-700`; for playful tiles nest inside an `icon-chip`. Programme mapping: English → `languages`, dance → `music`, chess → `crown`, acting → `drama`, robotics → `bot`, speech → `mic`, games → `puzzle`, gymnastics → `activity`, meals → `utensils`, Telegram report → `send`.

Emoji are an accepted light accent in *copy* — never a substitute for a UI icon. The ring-and-children mark is the one bespoke icon; use `assets/logo-cbh-mark.svg`, never redraw it.

## Imagery

Bright, warm, naturally-lit photographs of real children playing and learning. Sunny and saturated; **no cold or moody grading, no black & white, no stock-photo boardroom energy.** Serve `.webp` with a `.jpg` fallback (both live in `assets/photos/`), always with real Russian `alt` text, explicit `width`/`height` to hold layout, and `loading="lazy"` below the fold. Photos are clipped to `{rounded.lg}` or larger — a square-cornered photo is off-brand.

## Responsive behavior

| Name | Width | Key changes |
|---|---|---|
| Mobile | < 640px | Single column throughout; header collapses to mark + burger; hero display drops to ~40px; section padding at the 20px floor; sticky bottom CTA for enrolment; ambient decoration reduced. |
| Tablet | 640–1024px | 2-up programme and pricing grids; header keeps the CTA, hides secondary anchors; hero art moves below the copy. |
| Desktop | 1024–1200px | Full nav, 3-up grids, hero splits copy/art side by side. |
| Wide | > 1200px | Content caps at `{spacing.container-max}`; padding grows to 64px; background decoration is free to bleed past the container. |

### Touch targets

Every interactive element is at least 44×44px, and primary CTAs 48px tall. Icon-only buttons are `{rounded.circle}` at 44px minimum. Adjacent tap targets keep 8px of clear space.

### Collapsing strategy

Reduce column counts cleanly (3 → 2 → 1); never reflow into ragged rows. Horizontal scrollers are acceptable only for the gallery and the marquee — everything else stacks. The page must never scroll horizontally at 320px.

## Accessibility floor

These are pass/fail, not preferences:

- Body text ≥ 4.5:1, large text and icons ≥ 3:1. Use the fill/text token split above rather than eyeballing it.
- Colour is never the only signal — pair it with an icon, a label or a shape.
- Visible focus on every focusable element, using the `{colors.focus-ring}` soft pink ring.
- One `<h1>` per page, headings in order, real landmarks (`header`/`nav`/`main`/`footer`), real `<button>`/`<a>` elements rather than clickable `<div>`s.
- Every input has a real `<label>`; errors are text, not just a red border.
- `prefers-reduced-motion` honoured everywhere.
- `lang="ru"` on the document, and no text baked into images.

## Agent prompt guide

When generating or editing anything for this brand:

1. **Read `readme.md` and link `styles.css`.** Every token below is already defined there — `styles.css` pulls in `tokens/*.css` plus the self-hosted fonts in one import.
2. **Never hard-code a hex that exists as a token.** Use `var(--color-primary)`, not `#EE4A9B`.
3. **Pick the fill/text token pair deliberately** — `--color-primary-fill` under white text, `--color-primary-text` for brand-coloured text. Getting this wrong is the most common failure in this system.
4. **Round everything.** If you wrote a `border-radius` under 8px, you are off-brand.
5. **Reach for fill + shadow before border.** Coloured glows only under CTAs and one featured tile per section.
6. **Keep yellow out of text and out of `--gradient-sun`.**
7. **Set Russian in Rubik or Nunito. Riffic is Latin-only.**
8. **Change one section at a time.** This is an existing production site with a real brand; sweeping recolours and whole-page motion overhauls have been tried and reverted. Propose a change on one section, show it, then roll it out.
9. **Reassurance beats delight when they conflict.** The parent is the buyer.
