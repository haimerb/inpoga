# AGENTS.md

Static, single-page website (no framework, no build step) for the Colombian NGO **Corporación Gaviotas — Mujeres Empresarias: La Ruta de los Oficios**.

## What's here
- `index.html` — the full site in Spanish (one file, semantic sections).
- `styles.css` — all styling (responsive, desktop-first with two breakpoints).
- `assets/logo-gaviotas.png` — the NGO logo (triangle with guitar and doves, blue + yellow). Source original: `inpoga_transparent.PNG`.
- `inpoga_transparent.PNG` — original high-res transparent logo the user supplied (886KB; keep as reference, not referenced by the site).
- `GAVIOTAS ME.pdf` — the source-of-truth brief (all facts on the site come from it).
- `.venv/` — only used to extract text/images from the PDF; not part of the site.

## Design signature
- The hero features a winding SVG path with six labeled waypoints — the visual spine of the page. This is the single bold design choice; keep everything else disciplined around it.

## Brand
- Palette in `styles.css` `:root` is derived from the logo: primary `--blue` (#1572b5), deep `--blue-deep`
  (#0c4f82), accent `--gold` (#e8b830), earth `--terracotta` (#b55a3a) on warm `--bg` (#faf8f4). Typography: Fraunces (display) + Work Sans (body) + IBM Plex Mono (labels). Keep these consistent.

## Usage
- Just open `index.html` in a browser. There is no dev server or build step.
- To view/verify changes, reload the page in a browser; no lint or test commands exist.

## Gotchas
- All content is in Spanish (Colombian Spanish: "vos" imperative like "Sumate"). Keep copy in Spanish, sentence case.
- `GAVIOTAS ME.pdf` is the authoritative source of facts. When the brief changes, verify `index.html` matches it.
- Misión/visión/quienes-somos and contact details were drafted from the brief, not from an official mission statement. Re-confirm if official text becomes available.
- Logo and visual assets cannot be verified programmatically — check in a browser.
