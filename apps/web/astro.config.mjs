// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

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
      name: "Fira Sans",
      cssVariable: "--font-fira"
    }]
  },
  site: 'https://lesmotsenfilature.fr',
    redirects: {
    "/accueil": "/"
  },
  vite: {
    plugins: [tailwindcss()]
  },

  image:{
    responsiveStyles: true,
  },

  integrations: [svelte(),sitemap()],
});