import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const out = path.resolve("dist/public");
const site = JSON.parse(fs.readFileSync("client/src/seo/pages.json", "utf8"));
const template = fs.readFileSync(path.join(out, "index.html"), "utf8");
const home = site.siteUrl + "/";
const logo = site.siteUrl + "/aafc-logo.png";
const e = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const articles = fs.readdirSync("client/src/wiki/articles").filter(f => f.endsWith(".md")).sort().map(file => {
  const raw = fs.readFileSync(path.join("client/src/wiki/articles", file), "utf8");
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  assert(fm, "Missing frontmatter in " + file);
  const meta = {};
  fm[1].split(/\r?\n/).forEach(line => {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  assert(meta.title && meta.description && meta.category, "Incomplete article: " + file);
  return { path: "/wiki/" + file.replace(/\.md$/, ""), heading: meta.title,
    title: meta.title + " | AAFC Builders", description: meta.description,
    markdown: raw.slice(fm[0].length).trim() };
});
assert.equal(articles.length, 9, "The wiki should include exactly nine articles");
const pages = [...site.pages, ...articles];
assert.equal(new Set(pages.map(p => p.path)).size, pages.length);

function renderMarkdown(md) {
  return md.split(/\n\s*\n/).filter(Boolean).map(p => {
    const block = p.trim();
    const h = block.match(/^(#{1,3}) (.+)$/);
    if (h) return "<h2>" + e(h[2]) + "</h2>";
    return "<p>" + e(block.replace(/\s*\n\s*/g, " ")) + "</p>";
  }).join("\n");
}
function fallback(page) {
  const nav = '<header style="background:#0b1a3a;padding:20px;color:white"><nav aria-label="Site navigation">' +
    ['/', '/builds', '/research', '/wiki'].map(p => '<a style="color:white;margin-right:24px" href="' + p + '">' +
      (p === '/' ? "AAFC Builders" : p.slice(1)) + '</a>').join("") + "</nav></header>";
  let body = "<h1>" + e(page.heading) + "</h1><p>" + e(page.description) + "</p>";
  if (page.markdown) body += renderMarkdown(page.markdown);
  if (page.path === "/wiki") body += "<h2>Articles</h2><ul>" + articles.map(a =>
    '<li><a href="' + e(a.path) + '">' + e(a.heading) + "</a></li>").join("") + "</ul>";
  return nav + '<main style="max-width:900px;margin:32px auto;padding:0 24px;line-height:1.7;color:#0b1a3a">' +
    body + "</main>";
}
function writePage(page) {
  const url = site.siteUrl + (page.path === "/" ? "/" : page.path);
  const publisher = { "@type": "Organization", name: site.organization, url: home, logo };
  const ld = page.markdown
    ? { "@context": "https://schema.org", "@type": "Article", headline: page.heading,
        description: page.description, mainEntityOfPage: url, publisher }
    : { "@context": "https://schema.org", "@type": page.path === "/wiki" ? "CollectionPage" : "WebPage",
        name: page.title, description: page.description, url,
        isPartOf: { "@type": "WebSite", name: site.organization, url: home }, publisher };
  const props = [
    "<title>" + e(page.title) + "</title>",
    '<meta name="description" content="' + e(page.description) + '" />',
    '<meta name="robots" content="' + (page.index === false ? "noindex,follow" : "index,follow") + '" />',
    '<link rel="canonical" href="' + e(url) + '" />',
    '<meta property="og:type" content="' + (page.markdown ? "article" : "website") + '" />',
    '<meta property="og:site_name" content="' + e(site.organization) + '" />',
    '<meta property="og:title" content="' + e(page.title) + '" />',
    '<meta property="og:description" content="' + e(page.description) + '" />',
    '<meta property="og:url" content="' + e(url) + '" />',
    '<meta property="og:image" content="' + logo + '" />',
    '<meta name="twitter:card" content="summary" />',
    '<meta name="twitter:title" content="' + e(page.title) + '" />',
    '<meta name="twitter:description" content="' + e(page.description) + '" />',
    '<meta name="twitter:image" content="' + logo + '" />',
    '<script type="application/ld+json" id="aafc-page-schema">' +
      JSON.stringify(ld).replace(/</g, "\\u003c") + "</script>"
  ].join("\n");
  const clean = template
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>/gi, "")
    .replace(/<meta\s+name="robots"[\s\S]*?\/>/gi, "")
    .replace(/<link\s+rel="canonical"[\s\S]*?\/>/gi, "")
    .replace(/<meta\s+(?:property="og:[^"]+"|name="twitter:[^"]+")[\s\S]*?\/>/gi, "")
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, "");
  assert(clean.includes("</head>") && clean.includes('<div id="root"></div>'),
    "Missing head or React root");
  const html = clean.replace("</head>", props + "\n</head>")
    .replace('<div id="root"></div>', '<div id="root">' + fallback(page) + "</div>");
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  const target = path.join(out, page.path === "/" ? "index.html" : page.path.slice(1) + ".html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  assert(fs.readFileSync(target, "utf8").includes('<link rel="canonical" href="' + e(url) + '" />'));
}
pages.forEach(writePage);
writePage({ path: "/404", index: false, title: "Page Not Found | AAFC Builders",
  heading: "Page Not Found", description: "The requested AAFC Builders page could not be found." });
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(p => "  <url><loc>" + e(site.siteUrl + (p.path === "/" ? "/" : p.path)) +
    "</loc><lastmod>2026-10-19</lastmod></url>").join("\n") + "\n</urlset>\n";
fs.writeFileSync(path.join(out, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(out, "robots.txt"),
  "User-agent: *\nAllow: /\n\nSitemap: " + site.siteUrl + "/sitemap.xml\n");
assert.equal((sitemap.match(/<url>/g) || []).length, pages.length, "Incomplete sitemap");
console.log("SEO verified: " + pages.length + " crawlable HTML routes, unique canonical URLs, structured data and sitemap entries");
