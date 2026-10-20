import { useState } from 'react';
import { Link } from 'wouter';
import { useWikipediaSearch } from '@/hooks/useWikipedia';
import { articles } from '@/wiki/articles';
import { searchArticles } from '@/wiki/search';
export default function WikiSearch() {
 const [query,setQuery]=useState('');const [category,setCategory]=useState('All');
 const categories=['All',...Array.from(new Set(articles.map(a=>a.category)))];
 const matches=searchArticles(articles,query,category);
 const external=useWikipediaSearch(query);
 return <section className="space-y-7">
  <div><label htmlFor="wiki-search" className="mb-2 block text-sm font-medium">Search the AAFC wiki</label>
   <input id="wiki-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search services, projects, technology..." className="w-full rounded-lg border bg-background px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" /></div>
  <div><label htmlFor="wiki-category" className="mb-2 block text-sm font-medium">Category</label>
   <select id="wiki-category" value={category} onChange={e=>setCategory(e.target.value)} className="rounded-lg border bg-background px-4 py-2">
    {categories.map(c=><option key={c}>{c}</option>)}
   </select></div>
  <div aria-live="polite" className="grid gap-4 sm:grid-cols-2">{matches.map(a=><Link key={a.slug} href={`/wiki/${a.slug}`} className="block rounded-xl border bg-card p-5 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
   <span className="text-xs text-muted-foreground">{a.category}</span><h2 className="mt-2 text-lg font-semibold">{a.title}</h2><p className="mt-2 text-sm text-muted-foreground">{a.description}</p><p className="mt-3 text-xs">{a.tags.join(' · ')}</p>
  </Link>)}{matches.length===0&&<p>No local articles matched. Try another search.</p>}</div>
  {query.trim().length>=3&&<section className="border-t pt-6"><h2 className="text-xl font-semibold">Wikipedia results</h2><p className="mt-1 text-sm text-muted-foreground">External articles, separate from AAFC content.</p>
   {external.isPending&&<p className="mt-3 text-sm">Searching Wikipedia...</p>}
   {external.isError&&<p className="mt-3 text-sm">Wikipedia search is unavailable. Local search still works.</p>}
   {external.data?.length===0&&<p className="mt-3 text-sm">No Wikipedia results.</p>}
   <ul className="mt-3 space-y-2">{external.data?.map(item=><li key={item.pageid}><a className="text-primary underline" target="_blank" rel="noopener noreferrer" href={`https://en.wikipedia.org/wiki/${encodeURIComponent(item.title.replace(/ /g,'_'))}`}>{item.title}</a></li>)}</ul>
  </section>}</section>;
}
