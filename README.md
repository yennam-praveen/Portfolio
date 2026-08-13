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

## Deployment

The site deploys to GitHub Pages at
<https://yennam-praveen.github.io/Portfolio/> from the
`yennam-praveen/Portfolio` repository. Every push to `main` triggers the
workflow in `.github/workflows/deploy.yml`, which builds the site and
publishes it automatically (repo setting: **Settings → Pages → Source:
GitHub Actions**).
