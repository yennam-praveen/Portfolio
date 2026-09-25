---
title: "How I add a new post to this blog"
description: "A note-to-self on the workflow: one Markdown file, three lines of frontmatter, done."
pubDate: 2026-08-12
tags: ["meta", "astro"]
---

This post doubles as documentation for future me. Adding a post takes three
steps:

## 1. Create a Markdown file

Add a new file in `src/content/blog/`, for example `my-new-post.md`. The file
name becomes the URL. This one is `writing-a-new-post.md`, so it lives at
`/blog/writing-a-new-post/`.

## 2. Add the frontmatter

Every post starts with a small header between `---` lines:

```yaml
---
title: "My new post"
description: "One sentence shown in post lists."
pubDate: 2026-08-12
---
```

## 3. Write, then check it locally

Everything after the frontmatter is normal Markdown: headings, lists, links,
code blocks. To preview, run:

```
npm run dev
```

and open `http://localhost:4321`. The new post appears automatically on the
blog page and, if it's recent, on the home page too.

That's the whole workflow. No excuses not to write.
