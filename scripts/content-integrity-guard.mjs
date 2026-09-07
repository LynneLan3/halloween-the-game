#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateContentIntegrity } from '/Users/lanling/Code/shared-dev-skills/content-integrity-guard/index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(path.join(root, 'site-input/content-integrity-manifest.json'), 'utf8'));
const result = validateContentIntegrity(manifest);
console.log(JSON.stringify(result, null, 2));
