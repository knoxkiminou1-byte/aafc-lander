import { slugifyHeading } from './heading';
export default function WikiTableOfContents({body}:{body:string}) {
 const headings=body.split('\n').filter(line=>/^#{2,3}\s/.test(line)).map(line=>{
  const level=line.match(/^#+/)![0].length;const title=line.replace(/^#+\s*/, '').trim();return {level,title,id:slugifyHeading(title)};
 });
 if(!headings.length)return null;
 return <nav aria-label="On this page" className="rounded-xl border p-4"><h2 className="font-semibold">On this page</h2><ul className="mt-3 space-y-2 text-sm">{headings.map((h,i)=><li key={i} className={h.level===3?'pl-4':''}><a className="text-primary hover:underline" href={`#${h.id}`}>{h.title}</a></li>)}</ul></nav>;
}
