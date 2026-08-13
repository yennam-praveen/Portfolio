# Praveen's portfolio & blog

Personal portfolio website with an animated home page and a Markdown blog.
Built with [Astro](https://astro.build).

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:4321

## Write a blog post

Add a Markdown file to `src/content/blog/`. See the existing posts there for
the frontmatter format (title, description, pubDate). The file name becomes
the URL.

## Project layout

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | Home page (hero, about, skills, latest posts) |
| `src/pages/blog/` | Blog list page and the post template |
| `src/content/blog/` | Your blog posts (Markdown) |
| `src/layouts/Base.astro` | Shared layout: header, nav, footer |
| `src/styles/global.css` | Colors, fonts and shared styles (design tokens at the top) |

## Deploy to GitHub Pages (when ready)

1. Create a GitHub repository and push this project to it (branch `main`).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Edit `astro.config.mjs`: set `site` to `https://<your-username>.github.io`
   and, if the repo is not named `<your-username>.github.io`, uncomment `base`
   and set it to `/<repo-name>`.
4. Push — the included workflow (`.github/workflows/deploy.yml`) builds and
   publishes the site automatically.

## Placeholders to fill in

- `src/layouts/Base.astro` — your real LinkedIn and GitHub URLs in the footer.
- `astro.config.mjs` — your GitHub Pages URL (only needed for deployment).
- Home page text in `src/pages/index.astro` — tweak the about/skills wording
  to your liking.
