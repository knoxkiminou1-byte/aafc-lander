import type { WikiArticle } from './types';
const normalize = (s: string) => s.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
export function searchArticles(articles: WikiArticle[], query: string, category = 'All') {
 const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
 return articles.map(article => {
  if (category !== 'All' && article.category !== category) return {article, score: -1};
  const title = normalize(article.title), tags = normalize(article.tags.join(' '));
  const desc = normalize(article.description), body = normalize(article.body);
  let score = 0;
  for (const term of terms) {
   if (![title,tags,desc,body].some(field => field.includes(term))) return {article, score: -1};
   score += (title.includes(term) ? 10 : 0) + (tags.includes(term) ? 6 : 0)
    + (desc.includes(term) ? 3 : 0) + (body.includes(term) ? 1 : 0);
  }
  return {article, score};
 }).filter(item => item.score >= 0).sort((a,b) => b.score - a.score || a.article.title.localeCompare(b.article.title)).map(item => item.article);
}
