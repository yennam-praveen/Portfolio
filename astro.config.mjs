// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dev server: use the port assigned by the environment when present.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
  // GitHub Pages project site: https://yennam-praveen.github.io/Portfolio/
  site: 'https://yennam-praveen.github.io',
  base: '/Portfolio',
  markdown: {
    shikiConfig: {
      // Emit both themes; global.css switches them via the data-theme attribute.
      themes: { light: 'github-light', dark: 'one-dark-pro' },
      defaultColor: false,
    },
  },
});
