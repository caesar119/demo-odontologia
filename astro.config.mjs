import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ASTRO_BASE permite publicar el mismo build en una subcarpeta (GitHub Pages:
// /demo-odontologia) o en la raiz (Vercel, Cloudflare). Sin la variable, raiz.
export default defineConfig({
  output: 'static',
  base: process.env.ASTRO_BASE || '/',
  integrations: [tailwind({ applyBaseStyles: false })],
});
