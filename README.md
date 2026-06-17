# Công Thiên Agency Website

Production website for Công Thiên Agency, a founder-led digital marketing and web development agency serving hospitality and local-service businesses in Hội An, Đà Nẵng, and Vietnam.

The site is built as a real business asset: fast landing pages, structured service clusters, case studies, pricing, blog content, Google Search indexing surfaces, and AI-readable resources for modern browsing agents.

## Project Highlights

- **Production stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, static generation, route handlers, JSON-LD schema, dynamic sitemap, image sitemap, robots.txt, and IndexNow support.
- **SEO architecture:** 52 service pages, 59 blog posts, 2 public case studies, glossary content, FAQ hub, localized Vietnamese and English routes, canonical metadata, structured data, and internal-link clusters.
- **AI discoverability:** `/llms.txt`, `/llms-full.txt`, `/ai-content.json`, `/case-studies.json`, and `/agency-profile.txt` expose the site to AI assistants, web research agents, and citation workflows.
- **Business positioning:** website design, Naver Marketing for Korean tourists, Google Maps Marketing, Local SEO, Social Marketing, and QR activation campaigns.
- **Measured quality:** PageSpeed report from June 18, 2026 shows SEO 100/100 on mobile and desktop, Best Practices 100/100 on mobile and desktop, mobile Agentic Browsing 3/3, and desktop Agentic Browsing 2/3.

## Why This Repo Matters

This is not a template portfolio. It demonstrates end-to-end ownership across product strategy, frontend implementation, technical SEO, content architecture, structured data, and deployment operations.

For HR or technical reviewers, the strongest signals are:

- **Engineering discipline:** typed content models, reusable metadata helpers, schema graph builders, shared service-route factory, static route generation, and automated build validation.
- **SEO thinking:** topic clusters, buyer-intent money pages, accurate sitemap `lastModified`, localized route handling, clean redirects, FAQ schema, image discovery, and canonical-first indexing.
- **AI-era readiness:** public machine-readable resources that help agents understand the brand, services, proof, case studies, and recommendation boundaries without scraping every page manually.
- **Business awareness:** the site avoids broad trend traffic and focuses on relevant commercial intent for local hospitality and tourism businesses.

## Current PageSpeed Snapshot

The latest screenshots supplied for `https://www.congthienagency.com/vi` show:

| Device | Performance | Accessibility | Best Practices | SEO | Agentic Browsing |
| --- | ---: | ---: | ---: | ---: | ---: |
| Mobile | 86 | 100 | 100 | 100 | 3/3 |
| Desktop | 99 | 92 | 100 | 100 | 2/3 |

Interpretation:

- The SEO patch is sound: SEO remains 100/100 and the technical crawl/index surfaces are cleaner than before.
- Mobile Agentic Browsing is excellent at 3/3.
- Desktop Agentic Browsing is close at 2/3, but the exact missing audit requires the exported PageSpeed/Lighthouse JSON report because the screenshot only shows the category score.
- Mobile performance at 86 is acceptable for launch but worth improving next, likely around hero media, JavaScript cost, or render timing.

## Core Features

- Localized routes under `/vi` and `/en`
- Service pages generated from a typed service content model
- Blog posts generated from structured content arrays
- Project/case-study pages with verified proof fields
- Pricing pages and pricing FAQ schema
- FAQ hub aggregating site-wide questions
- Glossary for marketing and SEO terminology
- Organization, LocalBusiness, Person, WebSite, WebPage, Service, BlogPosting, Breadcrumb, FAQ, and CreativeWork JSON-LD
- Dynamic `sitemap.xml` and `image-sitemap.xml`
- AI-oriented resource routes:
  - `/llms.txt`
  - `/llms-full.txt`
  - `/ai-content.json`
  - `/case-studies.json`
  - `/agency-profile.txt`
- IndexNow script and API route for URL submission

## Tech Stack

| Area | Implementation |
| --- | --- |
| Framework | Next.js 15 App Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React + local icon components |
| SEO | Next metadata, canonical URLs, hreflang alternates, JSON-LD |
| Content | Typed TypeScript files in `content/` |
| AI resources | Route handlers and static text resources |
| Deployment target | Static-friendly Next.js deployment, suitable for Vercel |

## Repository Map

```text
app/                 Next.js App Router pages, route handlers, metadata, sitemap, robots
components/          Reusable UI components and page sections
content/             Typed site copy, services, blog posts, pricing, projects, glossary
lib/                 SEO helpers, schema graph builders, routing helpers, AI resource helpers
public/              Images, icons, logo assets, verification files, agency profile text
scripts/             Utility scripts, including IndexNow submission
docs/                Developer, agent, SEO, AI, and operations documentation
```

## Important Files

- `content/site.ts`: brand identity, domain, contact, locale, entity facts
- `content/services.vi.ts`: service-page source of truth
- `content/blog.vi.ts`: blog content source of truth
- `content/projects.vi.ts`: public case studies
- `lib/seo.ts`: metadata/canonical/hreflang builder
- `lib/schema.ts`: JSON-LD graph builders
- `lib/serviceRoute.tsx`: localized service route factory
- `lib/siteIndex.ts`: canonical indexable pages for sitemap and AI resources
- `lib/aiResources.ts`: shared AI resource links and highlights
- `app/robots.ts`: crawler policy and sitemap discovery
- `app/sitemap.ts`: canonical XML sitemap
- `app/image-sitemap.xml/route.ts`: image sitemap

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/vi`.

## Validation

```bash
npm run build
```

The current working version builds successfully with Next.js 15.1.9.

For IndexNow dry run:

```bash
npm run indexnow
```

For live IndexNow submission:

```bash
npm run indexnow -- --submit
```

## Documentation

Start here:

- [Docs Index](docs/README.md)
- [Agent Repo Guide](docs/agents/repo-guide.md)
- [Architecture Overview](docs/architecture/overview.md)
- [Google SEO Audit](docs/seo/google-seo-audit.md)
- [AI and Agentic Browsing](docs/ai/agentic-browsing.md)
- [Deployment and Indexing](docs/operations/deployment-and-indexing.md)

## SEO Positioning

The site follows current Google Search guidance: make pages crawlable, use clear page titles and structure, publish helpful original content, keep canonical URLs clean, use accurate sitemap data, and avoid mass-producing pages around unrelated trends.

The strongest next growth lever is not more generic blog content. It is more real case studies, stronger local entity signals, and Search Console-driven iteration on pages that already receive impressions.

