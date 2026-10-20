import { useQuery } from '@tanstack/react-query';
export type WikiSummary = { title: string; extract: string; content_urls?: { desktop?: {page?: string} }; type?: string };
const API = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
export function useWikipedia(title?: string) {
 return useQuery({ queryKey: ['wikipedia-summary', title], enabled: Boolean(title), staleTime: 86400000,
  retry: 1, queryFn: async ({signal}) => {
   const response = await fetch(API + encodeURIComponent(title!), {signal, headers: {Accept:'application/json'}});
   if (!response.ok) throw new Error(`Wikipedia returned ${response.status}`);
   const data = await response.json() as WikiSummary;
   if (!data.extract || data.type === 'disambiguation') throw new Error('No reliable summary available');
   return data;
  } });
}
export type WikipediaSearchResult = { title: string; pageid: number; snippet: string };
export function useWikipediaSearch(query: string) {
 return useQuery({queryKey:['wikipedia-search', query.trim()], enabled:query.trim().length >= 3,
  staleTime: 300000, retry: 0, queryFn:async ({signal}) => {
   const url = new URL('https://en.wikipedia.org/w/api.php');
   url.search = new URLSearchParams({action:'query',list:'search',srsearch:query.trim(),srlimit:'5',format:'json',origin:'*'}).toString();
   const response = await fetch(url, {signal});
   if (!response.ok) throw new Error('Wikipedia search unavailable');
   const data = await response.json() as {query?:{search?:WikipediaSearchResult[]}};
   return data.query?.search ?? [];
  }});
}
