#!/usr/bin/env node
/** Copy built Pagefind index into public/ so `astro dev` can serve search. */
import { cpSync, existsSync, mkdirSync } from 'node:fs';

if (!existsSync('dist/pagefind')) {
	process.exit(0);
}

mkdirSync('public/pagefind', { recursive: true });
cpSync('dist/pagefind', 'public/pagefind', { recursive: true, force: true });
