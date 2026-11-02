import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  ...(process.env.SITE_URL ? { site: process.env.SITE_URL } : {}),
});
