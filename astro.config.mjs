// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dev server: use the port assigned by the environment when present.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
  // For GitHub Pages: set this to your GitHub Pages URL before deploying.
  site: 'https://YOUR-GITHUB-USERNAME.github.io',
  // If the site will live at https://<username>.github.io/<repo-name>/
  // (a "project page" rather than a user page), also uncomment this:
  // base: '/<repo-name>',
  markdown: {
    shikiConfig: {
      // Emit both themes; global.css switches them via the data-theme attribute.
      themes: { light: 'github-light', dark: 'one-dark-pro' },
      defaultColor: false,
    },
  },
});
