import { useEffect } from "react";
import { useLocation } from "wouter";
import site from "@/seo/pages.json";
import { getArticle } from "@/wiki/articles";

const logo = site.siteUrl + "/aafc-logo.png";

function upsertMeta(key: "name" | "property", name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>('meta[' + key + '="' + name + '"]');
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(key, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function SEOManager() {
  const [location] = useLocation();
  useEffect(() => {
    const path = location.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
    const standard = site.pages.find(page => page.path === path);
    const slug = path.startsWith("/wiki/") ? path.slice("/wiki/".length) : "";
    const article = slug && !slug.includes("/") ? getArticle(slug) : undefined;
    const title = article ? article.title + " | AAFC Builders" : standard?.title ?? "Page Not Found | AAFC Builders";
    const description = article?.description ?? standard?.description ?? "The requested AAFC Builders page could not be found.";
    const url = site.siteUrl + (path === "/" ? "/" : path);
    const indexable = Boolean(standard || article);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", indexable ? "index,follow" : "noindex,follow");
    upsertMeta("property", "og:type", article ? "article" : "website");
    upsertMeta("property", "og:site_name", site.organization);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", logo);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", logo);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let script = document.querySelector<HTMLScriptElement>("#aafc-page-schema");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "aafc-page-schema";
      document.head.appendChild(script);
    }
    const publisher = { "@type": "Organization", name: site.organization, url: site.siteUrl + "/", logo };
    const structuredData = article
      ? { "@context": "https://schema.org", "@type": "Article", headline: article.title,
          description: article.description, mainEntityOfPage: url, publisher }
      : { "@context": "https://schema.org",
          "@type": standard?.path === "/wiki" ? "CollectionPage" : "WebPage",
          name: title, description, url,
          isPartOf: { "@type": "WebSite", name: site.organization, url: site.siteUrl + "/" },
          publisher };
    script.textContent = JSON.stringify(structuredData);
  }, [location]);

  return null;
}
