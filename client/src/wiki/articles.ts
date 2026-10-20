import type { WikiArticle } from './types';
const files = import.meta.glob('./articles/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
function parse(path: string, raw: string): WikiArticle {
 const slug = path.split('/').pop()!.replace(/\.md$/, '');
 const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
 if (!match) throw new Error(`Missing wiki metadata: ${path}`);
 const meta: Record<string, string> = {};
 for (const line of match[1].split(/\r?\n/)) {
  const i = line.indexOf(':');
  if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
 }
 if (!meta.title || !meta.description || !meta.category) throw new Error(`Incomplete wiki metadata: ${path}`);
 return { slug, title: meta.title, description: meta.description, category: meta.category,
  tags: (meta.tags || '').split(',').map(s => s.trim()).filter(Boolean),
  wikipedia: meta.wikipedia || undefined, body: raw.slice(match[0].length).trim() };
}
export const articles = Object.entries(files).map(([path, raw]) => parse(path, raw))
 .sort((a,b) => a.title.localeCompare(b.title));
export function getArticle(slug: string) { return articles.find(a => a.slug === slug); }
