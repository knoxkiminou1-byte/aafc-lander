import { useRoute } from 'wouter';
import { getArticle, articles } from '@/wiki/articles';
import WikiLayout from '@/components/wiki/WikiLayout';
import WikiSearch from '@/components/wiki/WikiSearch';
import WikiArticle from '@/components/wiki/WikiArticle';
export default function Wiki() {
 const [,params]=useRoute('/wiki/:slug');
 const article=params?.slug?getArticle(params.slug):undefined;
 return <WikiLayout>{params?.slug ? article ? <WikiArticle article={article}/> : <div role="alert"><h1 className="text-3xl font-bold">Article not found</h1><a href="/wiki" className="text-primary underline">Browse the wiki</a></div> : <>
  <p className="text-sm font-semibold uppercase tracking-widest text-primary">AAFC Knowledge Base</p>
  <h1 className="mt-3 text-4xl font-bold">The AAFC Wiki</h1>
  <p className="my-6 max-w-2xl text-muted-foreground">How we build, what we work on, and what you should know before starting a project. {articles.length} articles, available without an account.</p>
  <WikiSearch/></>}</WikiLayout>;
}
