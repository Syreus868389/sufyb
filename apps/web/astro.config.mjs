// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Lora",
      cssVariable: "--font-lora"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Source Sans Pro",
      cssVariable: "--font-source"
    }]
  },
  site: 'https://lesmotsenfilature.fr',
    redirects: {
    "/accueil": "/"
  },
  vite: {
    // @ts-expect-error
    plugins: [tailwindcss()]
  },

  image:{
    responsiveStyles: true,
  },

  integrations: [sitemap()],
});