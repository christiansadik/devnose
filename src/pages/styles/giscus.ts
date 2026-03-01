import type { APIRoute } from 'astro';
import css from '../../styles/giscus.css?raw';

export const prerender = true;

export const GET: APIRoute = async () => {
	return new Response(css, {
		headers: {
			'Content-Type': 'text/css',
			'Access-Control-Allow-Origin': '*',
		},
	});
};
