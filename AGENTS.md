# AGENTS.md

Website for **Corporación Gaviotas — Mujeres Empresarias: La Ruta de los Oficios** (Colombian NGO, Cali). Live at `https://corpogaviotas.org/`.

## Two implementations

1. **Root `index.html`** — original static single-page site (no framework, no build step). Open directly in a browser.
2. **`react-app/`** — React rewrite (Vite 5 + React 18 + MUI v9). Has its own `package.json`, `.gitignore`, `dist/`.

Both share the same `assets/` directory for images, favicons, and gallery media.

## React app commands (from `react-app/`)

```sh
cd react-app
npm run dev      # Vite dev server
npm run build    # outputs to react-app/dist/
npm run lint     # ESLint (flat config, eslint.config.js)
npm run preview  # preview production build
```

No test framework is configured.

## Static site

Just open `index.html` in a browser. No dev server, no lint, no build.

## Content source of truth

`GAVIOTAS ME.pdf` — all facts on the site come from this brief. When the brief changes, verify both `index.html` and the React components match it.

## Brand

Palette defined in two places — keep them in sync:
- `styles.css` `:root` for the static site
- `react-app/src/theme.js` for the React app (MUI `createTheme`)

Core tokens: `--blue-deep` (#0c4f82), `--blue` (#1a7cc7), `--gold` (#ffd200), `--terracotta` (#b55a3a), `--bg` (#faf9f6). Typography: Fraunces (display), Work Sans (body), IBM Plex Mono (labels/captions).

## Design signature

The hero features a winding SVG path with six labeled waypoints — the visual spine of the page. Keep everything else disciplined around it.

## Spanish copy

All content is Colombian Spanish using "vos" imperative (e.g., "Sumate"). Keep copy in Spanish, sentence case.

## Gallery

`assets/gallery/` contains 34 images and 8 videos (with poster frames). `manifest.json` maps each video to its poster and original filename. Videos are large — keep them optimized.

## Gitignore highlights

Root `.gitignore` excludes: `.venv/`, `*.pyc`, Python scripts (`generate-favicons.py`, `optimize-media.py`, `process-videos.py`), `AGENTS.md`, `media/`, `*.pem`, `*-PrivateKey*`, `*-certificates*`, `*.ppt`, `*.pdf`, `*.zip`, `node_modules/`, `dist/`.

**Never commit** private keys, certificates, or PDFs. The `.pem` and certificate zip in the root are deployment credentials for `corpogaviotas.org`.

## SEO / structured data

Both `index.html` and `react-app/index.html` contain identical `<meta>` tags, Open Graph, Twitter Card, and four JSON-LD blocks (Organization, LocalBusiness, BreadcrumbList, FAQPage). If you update structured data, update both files.

## CI/CD

GitHub Actions workflow at `.github/workflows/deploy.yml`. Deploys to GoDaddy vía FTP on push to `main`.

**Secrets required** (configure in Repository → Settings → Secrets):
- `FTP_SERVER` — `ftp.corpogaviotas.org`
- `FTP_USERNAME` — `hbarbetti@corpogaviotas.org`
- `FTP_PASSWORD` — (the FTP password)

Build: `npm ci` → `npm run lint` → `npm run build` → copies static assets → uploads `react-app/dist/` to `/public_html/`.

## Gotchas

- Logo and visual assets cannot be verified programmatically — check in a browser.
- `inpoga_transparent.PNG` (886KB) is the original logo source; keep as reference, not referenced by the site.
- `.venv/` is only for Python PDF extraction scripts; not part of the site.
