import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

await mkdir('dist', { recursive: true });
await writeFile('dist/.nojekyll', '');

// A useful fallback for GitHub Pages refreshes. Static routes remain the primary output.
if (existsSync('dist/index.html')) {
  await copyFile('dist/index.html', 'dist/404.html');
}

console.log('Prepared dist/ for GitHub Pages (.nojekyll + 404 fallback).');
