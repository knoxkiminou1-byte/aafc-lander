import { useWikipedia } from '@/hooks/useWikipedia';
export default function WikipediaPanel({title}:{title?:string}) {
 const {data,isPending,isError}=useWikipedia(title);
 if(!title)return null;
 return <aside className="rounded-xl border bg-card p-5" aria-label="External reference">
  <h2 className="font-semibold">From Wikipedia</h2>
  <p className="mt-1 text-xs text-muted-foreground">External reference, not an AAFC statement. Information may change.</p>
  {isPending && <p className="mt-3 text-sm">Loading reference...</p>}
  {isError && <p className="mt-3 text-sm">Wikipedia is unavailable right now. The AAFC article above is still available.</p>}
  {data && <><p className="mt-3 text-sm leading-7">{data.extract}</p>
   {data.content_urls?.desktop?.page && <a className="mt-3 inline-block text-sm text-primary underline" href={data.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">Read on Wikipedia</a>}</>}
 </aside>;
}
