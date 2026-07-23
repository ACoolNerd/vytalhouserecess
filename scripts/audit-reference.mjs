#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { URL } from 'node:url';

const startInput = process.argv[2] ?? 'https://reecess.com/';
const maxPages = Math.max(1, Math.min(Number(process.argv[3] ?? 8), 20));
const start = new URL(startInput);
const origin = start.origin;
const queue = [start.href];
const visited = new Set();
const pages = [];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const decode = (value = '') => value
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&#39;/gi, "'")
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>');
const clean = (value = '') => decode(value.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const matches = (html, regex) => [...html.matchAll(regex)];
const attr = (tag, name) => tag.match(new RegExp(`${name}=["']([^"']+)["']`, 'i'))?.[1] ?? '';

async function robotsAllows() {
  try {
    const response = await fetch(new URL('/robots.txt', origin), { headers: { 'user-agent': 'VYTALHouseReferenceAudit/1.0 (+project-owner)' } });
    if (!response.ok) return true;
    const text = await response.text();
    const blocks = text.split(/user-agent:/i).slice(1);
    const star = blocks.find((block) => block.trim().startsWith('*'));
    return !star || !/^\s*\*([\s\S]*?)disallow:\s*\/\s*$/im.test(`*${star}`);
  } catch {
    return true;
  }
}

if (!(await robotsAllows())) {
  throw new Error(`robots.txt does not permit this audit for ${origin}`);
}

while (queue.length && pages.length < maxPages) {
  const current = queue.shift();
  if (!current || visited.has(current)) continue;
  visited.add(current);

  const response = await fetch(current, {
    redirect: 'follow',
    headers: { 'user-agent': 'VYTALHouseReferenceAudit/1.0 (+project-owner)' }
  });
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) continue;
  const html = await response.text();
  const finalUrl = new URL(response.url);

  const headingRows = matches(html, /<(h[1-3])\b[^>]*>([\s\S]*?)<\/\1>/gi)
    .map((match) => ({ level: match[1].toLowerCase(), text: clean(match[2]).slice(0, 160) }))
    .filter((row) => row.text);
  const anchors = matches(html, /<a\b[^>]*>[\s\S]*?<\/a>/gi).map((match) => {
    const tag = match[0];
    const href = attr(tag, 'href');
    return { label: clean(tag).slice(0, 100), href };
  }).filter((row) => row.href);
  const images = matches(html, /<img\b[^>]*>/gi).map((match) => ({
    src: attr(match[0], 'src') || attr(match[0], 'data-src'),
    alt: attr(match[0], 'alt').slice(0, 120)
  })).filter((row) => row.src);
  const colors = [...new Set(matches(html, /#[0-9a-f]{3,8}\b|rgba?\([^)]*\)/gi).map((match) => match[0].toLowerCase()))].slice(0, 60);
  const fonts = [...new Set(matches(html, /font-family\s*:\s*([^;}{]+)/gi).map((match) => clean(match[1]).slice(0, 100)))].slice(0, 30);

  pages.push({
    url: finalUrl.href,
    status: response.status,
    title: clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ''),
    description: attr(html.match(/<meta\b[^>]*name=["']description["'][^>]*>/i)?.[0] ?? '', 'content'),
    headings: headingRows,
    navigation: anchors.filter((row) => row.label).slice(0, 80),
    imageReferences: images.slice(0, 60),
    designSignals: { colors, fonts },
    counts: {
      links: anchors.length,
      images: images.length,
      forms: matches(html, /<form\b/gi).length,
      buttons: matches(html, /<button\b/gi).length,
      sections: matches(html, /<section\b/gi).length
    }
  });

  for (const link of anchors) {
    try {
      const next = new URL(link.href, finalUrl);
      next.hash = '';
      if (next.origin === origin && ['http:', 'https:'].includes(next.protocol) && !visited.has(next.href)) queue.push(next.href);
    } catch {
      // Ignore malformed or non-web links.
    }
  }
  await sleep(500);
}

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const directory = 'reference-audit';
await mkdir(directory, { recursive: true });
const jsonPath = `${directory}/${start.hostname}-${stamp}.json`;
const mdPath = `${directory}/${start.hostname}-${stamp}.md`;
const report = {
  generatedAt: new Date().toISOString(),
  reference: start.href,
  purpose: 'Structural and visual-pattern audit for an original VYTAL House implementation.',
  compliance: 'This report intentionally does not save source HTML, downloadable assets, testimonials, proprietary code, or complete page copy.',
  pages
};
await writeFile(jsonPath, JSON.stringify(report, null, 2));
await writeFile(mdPath, [
  `# Reference audit: ${start.hostname}`,
  '',
  '> Use this only to study information architecture, interaction patterns, and broad design signals. Rebuild with original VYTAL House copy, branding, media, components, and code.',
  '',
  ...pages.flatMap((page) => [
    `## ${page.title || page.url}`,
    '',
    `- URL: ${page.url}`,
    `- Links: ${page.counts.links}; images: ${page.counts.images}; forms: ${page.counts.forms}; sections: ${page.counts.sections}`,
    `- Headings: ${page.headings.slice(0, 10).map((row) => `${row.level.toUpperCase()} “${row.text}”`).join('; ') || 'None detected'}`,
    `- Color signals: ${page.designSignals.colors.slice(0, 12).join(', ') || 'None detected'}`,
    ''
  ])
].join('\n'));

console.log(`Audited ${pages.length} page(s).`);
console.log(jsonPath);
console.log(mdPath);
