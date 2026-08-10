---
name: colorbabyhouse-design
description: Use this skill to generate well-branded interfaces and assets for Color Baby House (Miracle Kindergarten, by Color Baby House) — a warm, bright kindergarten brand for children aged 1–7 — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colours, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

# Color Baby House — design skill

Read **`readme.md`** first — it holds the brand context, content/voice rules, full visual foundations (colour, type, shape, motion), iconography and a file index. Then explore the rest:

- `styles.css` — link this one file to get every token + font (`tokens/*.css`, self-hosted webfonts in `fonts/`).
- `assets/` — the logo: `logo-cbh-mark.svg` (brand mark as vector: ring of brush strokes, two children with a balloon, cupped hands). The wordmark itself is set in HTML with `--font-accent` (Riffic), see `ui_kits/website/Header.jsx`.
- `guidelines/*.card.html` — visual specimen cards (colour, type, spacing, brand).
- `components/core/` — React primitives (`Button`, `IconButton`, `Badge`, `Tag`, `Card`, `FeatureCard`, `Input`, `Avatar`, `SectionHeading`); each has `.jsx` + `.d.ts` + `.prompt.md`.
- `ui_kits/website/` — a full clickable marketing-site recreation with three homepage directions.

## How to work
If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view. Compose the components and lean on the tokens — never hard-code hex values that exist as tokens. Use **Rubik** for display/headings, **Nunito** for body; reserve **Riffic** for the Latin "by Color Baby House" lockup (it has no Cyrillic). Keep corners generously rounded, shadows soft and warm, and the sun gradient (`--gradient-sun`) as a hero accent, not a wash.

If working on **production code**, copy the assets and read the rules here to design like an expert in this brand.

## Voice
Russian, warm and reassuring; "мы" → "вы"; sentence case; gentle exclamation marks; an occasional ✨/😊 is on-brand. Lead with the facts parents care about (от 1 до 7 лет, 5-разовое питание, ежедневный отчёт в Telegram).

If the user invokes this skill without other guidance, ask what they want to build, ask a few focused questions, and act as an expert designer who outputs HTML artifacts **or** production code, depending on the need.
