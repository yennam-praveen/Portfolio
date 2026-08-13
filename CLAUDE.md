# CLAUDE.md — Praveen's portfolio & blog

Personal portfolio + Markdown blog for Praveen Kumar Yennam (Software
Developer, Bioculture Group, Mauritius). Astro 5, no UI framework, vanilla
CSS/JS. Deployed and live.

## Hard constraints

- **Node is v20.19.2** — Astro is pinned to `^5.18.2`. Do NOT upgrade to
  Astro 6+ (requires Node 22). Ignore `npm warn EBADENGINE` for undici.
- **The site is served from a subpath**: `https://yennam-praveen.github.io/Portfolio/`
  (`site` + `base: '/Portfolio'` in `astro.config.mjs`). Every internal link,
  asset and RSS item must be base-aware — use
  `import.meta.env.BASE_URL.replace(/\/$/, '')` as a prefix, as all existing
  pages do. A root-absolute `/foo` link is a bug.

## Deployment

- Repo: `yennam-praveen/Portfolio` (public), branch `main`.
- Every push to `main` auto-deploys via `.github/workflows/deploy.yml`
  (Pages source = GitHub Actions). Takes ~1 minute.
- `gh` CLI v2.97 is installed at `C:\Program Files\GitHub CLI\gh.exe`
  (may not be on PATH in older shells), authenticated as `yennam-praveen`.

## Dev server

- `npm run dev`, or the `.claude/launch.json` entry named `portfolio`
  (port 4321, `autoPort: true`; `astro.config.mjs` reads the `PORT` env var).
- Because of `base`, pages are served under `/Portfolio/` in dev too.

## Architecture notes

- Blog posts: Markdown in `src/content/blog/`; schema in
  `src/content.config.ts` (title, description, pubDate, tags[]).
- Shared layout `src/layouts/Base.astro`: header/nav, footer, scroll-reveal
  IntersectionObserver, and the theme toggle.
- Theming: `data-theme="dark" | "light"` on `<html>`, persisted in
  localStorage, applied by an inline `<head>` script before first paint.
  Tokens live at the top of `src/styles/global.css` (`:root` = dark,
  `:root[data-theme="light"]` = light). New colors must be defined in BOTH.
- Code highlighting: Shiki dual themes (`defaultColor: false` in
  `astro.config.mjs`); the theme switch CSS is in `global.css`.
- Reading time helper: `src/lib/reading-time.ts`.
- RSS: `src/pages/rss.xml.js` at `/Portfolio/rss.xml`.

## Owner context

Praveen is a .NET/Angular developer, new to modern web tooling — explain
Astro/npm concepts briefly when relevant, and prefer offering guided choices
over open-ended questions.
