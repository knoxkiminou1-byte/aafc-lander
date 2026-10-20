import { Link } from 'wouter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { WikiArticle as Article } from '@/wiki/types';
import { articles } from '@/wiki/articles';
import WikiTableOfContents from './WikiTableOfContents';
import WikipediaPanel from './WikipediaPanel';
import { slugifyHeading } from './heading';
export default function WikiArticle({article}:{article:Article}) {
 const i=articles.findIndex(a=>a.slug===article.slug);
 const previous=articles[i-1],next=articles[i+1];
 return <article><Link href="/wiki" className="text-sm text-primary underline">Back to wiki</Link>
  <p className="mt-8 text-sm text-muted-foreground">{article.category} · {article.tags.join(', ')}</p>
  <h1 className="mt-3 text-4xl font-bold tracking-tight">{article.title}</h1>
  <p className="mt-3 text-lg text-muted-foreground">{article.description}</p>
  <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
   <div className="min-w-0 space-y-8"><div className="prose prose-slate dark:prose-invert max-w-none prose-a:text-primary">
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
     h2:({children})=><h2 id={slugifyHeading(String(children))}>{children}</h2>,
     h3:({children})=><h3 id={slugifyHeading(String(children))}>{children}</h3>,
     a:({href,children})=><a href={href} rel={href?.startsWith('http')?'noopener noreferrer':undefined} target={href?.startsWith('http')?'_blank':undefined}>{children}</a>
    }}>{article.body}</ReactMarkdown></div><WikipediaPanel title={article.wikipedia}/></div>
   <div className="lg:sticky lg:top-6 lg:self-start"><WikiTableOfContents body={article.body}/></div>
  </div><nav aria-label="Article navigation" className="mt-12 grid gap-4 border-t pt-6 sm:grid-cols-2">
   {previous?<Link href={`/wiki/${previous.slug}`} className="rounded-lg border p-4 hover:bg-accent">Previous: {previous.title}</Link>:<span/>}
   {next&&<Link href={`/wiki/${next.slug}`} className="rounded-lg border p-4 hover:bg-accent">Next: {next.title}</Link>}
  </nav></article>;
}
