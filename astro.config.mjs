import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],

  theme: {
      extend: {
          // This section allows you to add custom animations if you want later
          animation: {
              'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }
      },
	},

  plugins: [],

  vite: {
    plugins: [tailwindcss()],
  },
});