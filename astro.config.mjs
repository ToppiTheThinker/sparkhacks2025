// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://ToppiTheThinker.github.io',
  base: '/sparkhacks2025/',
  integrations: [react()]
});