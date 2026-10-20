import { useGitHubRepo, getRepoCacheAge } from '@/hooks/useGitHubRepos';
export default function GitHubStats({repo}:{repo:string}) {
 const {data,isPending,isError,isFetching}=useGitHubRepo(repo);
 const saved=getRepoCacheAge(repo);
 if(isPending)return <p className="text-sm text-muted-foreground">Loading GitHub details...</p>;
 if(isError&&!data)return <p className="text-sm text-muted-foreground">GitHub details are unavailable. The project links still work.</p>;
 if(!data)return null;
 return <section className="rounded-lg border p-4 text-sm" aria-label={`${repo} GitHub details`}>
  <p className="font-medium">Live GitHub repository details</p>
  <p className="mt-2 text-muted-foreground">{data.description || 'No repository description provided.'}</p>
  <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
   <div><dt>Stars</dt><dd className="font-semibold">{data.stargazers_count}</dd></div>
   <div><dt>Forks</dt><dd className="font-semibold">{data.forks_count}</dd></div>
   <div><dt>Open issues and PRs</dt><dd className="font-semibold">{data.open_issues_count}</dd></div>
   <div><dt>Primary language</dt><dd>{data.language || 'Not listed'}</dd></div>
   <div><dt>Last push</dt><dd>{new Date(data.pushed_at).toLocaleDateString()}</dd></div>
   <div><dt>Metadata updated</dt><dd>{new Date(data.updated_at).toLocaleDateString()}</dd></div>
  </dl><p className="mt-3 text-xs text-muted-foreground">{isFetching?'Refreshing GitHub data. ':''}{saved?`Cached ${new Date(saved).toLocaleString()}. `:'Live response. '}Public repository metadata, not deployment status.</p>
  <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-primary underline">View repository</a>
 </section>;
}
