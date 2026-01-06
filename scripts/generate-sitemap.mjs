import { mkdir, writeFile } from 'fs/promises';
import { resolve } from 'path';

const rawBaseUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://estudiocinza.com';

const resolveBaseUrl = (value) => {
  try {
    return new URL(value).origin;
  } catch (error) {
    console.warn(`Invalid SITE_URL provided (${value}). Falling back to http://localhost:5173.`);
    return 'http://localhost:5173';
  }
};

const baseUrl = resolveBaseUrl(rawBaseUrl);
const publicDir = resolve(process.cwd(), 'public');

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/space', priority: '0.9', changefreq: 'weekly' },
  { path: '/equipment', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'weekly' },
];

const lastmod = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${path === '/' ? '/' : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

await mkdir(publicDir, { recursive: true });
await Promise.all([
  writeFile(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8'),
  writeFile(resolve(publicDir, 'robots.txt'), robots, 'utf8'),
]);
