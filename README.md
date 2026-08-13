# Praveen's portfolio & blog

Personal portfolio website with an animated home page, light/dark theme and
a Markdown blog. Built with [Astro](https://astro.build).

**Live site: <https://yennam-praveen.github.io/Portfolio/>**

> ⚠️ This machine runs Node 20, so Astro is pinned to v5. Don't upgrade to
> Astro 6+ without upgrading Node to 22 first.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:4321/Portfolio/ (note the `/Portfolio/` subpath —
the dev server mirrors the live URL structure).

## Write and publish a blog post

1. Add a Markdown file to `src/content/blog/`. See the existing posts there
   for the frontmatter format (title, description, pubDate, optional tags).
   The file name becomes the URL.
2. Preview locally with `npm run dev`.
3. Publish:

   ```
   git add .
   git commit -m "New post: my title"
   git push
   ```

   The push triggers the GitHub Actions workflow and the live site updates
   in about a minute.

## Project layout

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | Home page (hero, about, skills, latest posts) |
| `src/pages/blog/` | Blog list page and the post template |
| `src/content/blog/` | Your blog posts (Markdown) |
| `src/layouts/Base.astro` | Shared layout: header, nav, theme toggle, footer |
| `src/styles/global.css` | Colors, fonts and shared styles (dark + light design tokens at the top) |
| `src/pages/rss.xml.js` | RSS feed (`/Portfolio/rss.xml`) |
| `src/lib/reading-time.ts` | "X min read" estimate used on blog pages |
| `CLAUDE.md` | Project constraints and architecture notes (read by Claude Code) |

## Deployment

The site deploys to GitHub Pages at
<https://yennam-praveen.github.io/Portfolio/> from the
`yennam-praveen/Portfolio` repository. Every push to `main` triggers the
workflow in `.github/workflows/deploy.yml`, which builds the site and
publishes it automatically (repo setting: **Settings → Pages → Source:
GitHub Actions**).
