import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://christiansadik.dev',
	output: 'static',
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'devnose',
			openGraph: {
				home: {
					title: 'devnose — Christian Sadik',
					description:
						'Web developer portfolio and digital garden. Code, books, productivity, tools and more.',
				},
				blog: {
					title: 'Blog — devnose',
					description: 'Articles about code, books, productivity, tools and more.',
				},
				projects: {
					title: 'Projects — devnose',
				},
			},
		}),
	],
});

export default config;
