# Google SEO Audit

Last reviewed: 2026-06-18.

This audit uses the current repo state, the supplied PageSpeed screenshots, and current Google Search Central guidance.

## Current PageSpeed Snapshot

For `https://www.congthienagency.com/vi`, the supplied PageSpeed screenshots show:

| Device | Performance | Accessibility | Best Practices | SEO | Agentic Browsing |
| --- | ---: | ---: | ---: | ---: | ---: |
| Mobile | 86 | 100 | 100 | 100 | 3/3 |
| Desktop | 99 | 92 | 100 | 100 | 2/3 |

## Patch Assessment

The latest SEO patch is directionally correct.

Reasons:

- `robots.txt` now only advertises real sitemap files: `sitemap.xml` and `image-sitemap.xml`.
- `sitemap.xml` now uses page-level `lastModified` instead of a build-time date for every URL.
- English Naver landing pages now use `/en/...` paths and redirect from old `/vi/...` English URLs.
- Money-page titles and descriptions now match commercial search intent more tightly.
- Internal links now reinforce website, Naver, Google Maps, and Local SEO clusters.
- AI-readable resources are linked through `llms.txt` and JSON manifests rather than being incorrectly placed in the XML sitemap.

## Google SEO Alignment

Google's current guidance is still clear: generative AI search does not replace SEO. Google says its AI features are rooted in core Search ranking and quality systems, so crawlability, helpful content, technical clarity, and user satisfaction still matter.

This repo aligns well with that guidance:

- It has a clear primary purpose: marketing and web systems for hospitality and local-service businesses.
- It uses descriptive URLs grouped by topic.
- It has canonical metadata and localized alternates for core pages.
- It exposes structured data for business identity, services, blog posts, FAQs, and case studies.
- It publishes first-party proof through case studies instead of relying only on generic advice content.
- It avoids unrelated trend pages like World Cup content, which would dilute topical focus.

## Current Strengths

- Strong technical SEO baseline: PageSpeed SEO 100/100 on both mobile and desktop.
- Clear service clusters: website, Naver, Google Maps, social, QR.
- Good AI/search entity layer: organization schema, founder facts, sameAs, agency profile, AI manifest, and case-study JSON.
- Image sitemap exists and pulls from real assets.
- IndexNow support exists through script and API route.
- FAQ and glossary help cover informational intent without bloating service pages.

## Remaining Risks

- Only 2 public case studies are available. For trust and topical authority, this is the biggest gap.
- Desktop Accessibility is 92, so at least one issue still deserves attention.
- Desktop Agentic Browsing is 2/3. The screenshot does not reveal the failing audit, so an exported PageSpeed JSON report is needed to diagnose exactly.
- Mobile Performance is 86. Good enough for launch, but hero media and JavaScript cost should be reviewed next.
- Some `/en` service route variants can appear at build time because of the dynamic locale segment, even when the canonical service data is Vietnamese. The route-level locale guard protects rendering, but generated route output should be monitored after deployment.

## Recommended Next SEO Work

1. Publish 3-5 real case studies tied directly to money pages.
2. Add local entity citations and backlinks from real business profiles, client/partner pages, and local directories.
3. Track GSC impressions weekly and expand only pages that show demand.
4. Improve mobile performance from 86 toward 90+.
5. Export the PageSpeed JSON report and inspect the failing desktop Agentic Browsing audit.
6. Add screenshots or external proof links to case studies where client confidentiality allows.

## Sources Used

- [Google Search Central: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Central: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search Central: Optimizing for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Chrome for Developers: Lighthouse overview](https://developer.chrome.com/docs/lighthouse/overview)
