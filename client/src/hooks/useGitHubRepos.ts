import { useQuery } from '@tanstack/react-query';
export const REPOS = ['mission-control-ai','youth-ai-build-lab','handoff-eval-agent'] as const;
export type GitHubRepo = {full_name:string; html_url:string; description:string|null; stargazers_count:number;
 forks_count:number; open_issues_count:number; language:string|null; pushed_at:string; updated_at:string; archived:boolean};
type CacheEntry = {savedAt:number; data:GitHubRepo};
const TTL = 3600000;
const key = (name:string) => `aafc:github:v1:${name}`;
function cached(name:string):CacheEntry|null {
 try {const raw = localStorage.getItem(key(name));if(!raw)return null;
  const value = JSON.parse(raw) as CacheEntry;
  return value?.data?.full_name === `knoxkiminou1-byte/${name}` && Number.isFinite(value.savedAt) ? value : null;
 } catch {return null;}
}
export function useGitHubRepo(name:string) {
 return useQuery({queryKey:['github-repo',name], staleTime:TTL, retry:1,
  initialData:()=>cached(name)?.data,
  initialDataUpdatedAt:()=>cached(name)?.savedAt,
  queryFn:async ({signal})=>{
   const old=cached(name);
   if(old && Date.now()-old.savedAt < TTL) return old.data;
   try {
    const response=await fetch(`https://api.github.com/repos/knoxkiminou1-byte/${encodeURIComponent(name)}`, {signal,headers:{Accept:'application/vnd.github+json'}});
    if(!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const data=await response.json() as GitHubRepo;
    if(data.full_name !== `knoxkiminou1-byte/${name}`) throw new Error('Unexpected repository');
    try {localStorage.setItem(key(name),JSON.stringify({savedAt:Date.now(),data}));}catch {}
    return data;
   }catch(error){if(old)return old.data;throw error;}
  }});
}
export function getRepoCacheAge(name:string) {return cached(name)?.savedAt ?? null;}
