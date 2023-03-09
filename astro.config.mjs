import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://yy-ac.github.io',
  base: '/Hi-Windom',
	integrations: [mdx(), sitemap()],
});
