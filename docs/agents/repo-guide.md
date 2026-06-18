# Agent Repo Guide

This guide is for AI coding agents and human contributors who need to understand the repo quickly.

## Project Summary

Công Thiên Agency is a production Next.js site for a founder-led marketing and web development agency in Hội An and Đà Nẵng. The site is designed around commercial SEO clusters, local entity trust, public proof, and AI-readable resources.

## Current Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Route handlers for XML, JSON, and text resources
- Typed content modules in `content/`
- JSON-LD graph helpers in `lib/schema.ts`

## Source Of Truth

Use these files before editing pages:

| Purpose | File |
| --- | --- |
| Site identity, domain, contact, locales | `content/site.ts` |
| Vietnamese homepage/service copy | `content/pages.vi.ts` |
| English core page copy | `content/pages.en.ts` |
| Service page data | `content/services.vi.ts` |
| Blog post data | `content/blog.vi.ts` |
| Case studies | `content/projects.vi.ts` |
| Pricing | `content/pricing.vi.ts` |
| Glossary | `content/glossary.vi.ts` |
| Navigation and hreflang map | `content/navigation.ts` |

## Routing Model

Most public pages live under `app/[locale]/`.

Service pages are thin route files. They call `serviceRoute(path)` from `lib/serviceRoute.tsx`, which handles:

- metadata
- locale validation
- service lookup
- rendering with `ServicePageView`

This keeps dozens of service routes consistent.

## SEO Model

Metadata is centralized through `buildMetadata()` in `lib/seo.ts`. Structured data is built through `lib/schema.ts`.

Important generated resources:

- `app/robots.ts`
- `app/sitemap.ts`
- `app/image-sitemap.xml/route.ts`
- `app/llms.txt/route.ts`
- `app/llms-full.txt/route.ts`
- `app/ai-content.json/route.ts`
- `app/case-studies.json/route.ts`

## Editing Rules

- Prefer editing content files over page components when changing copy.
- Keep service pages aligned with their cluster: `website`, `naver`, `maps`, `social`, or `qr`.
- Do not create new keyword pages unless the search intent is distinct and the content can be genuinely unique.
- Keep `robots.txt` sitemap entries limited to real sitemap files.
- Do not add AI JSON or text resources to `sitemap.xml`; link them from `llms.txt` and entity pages instead.
- Preserve public proof boundaries. Do not invent traffic, revenue, ranking, or ROI metrics.

## Build Check

Run this after meaningful changes:

```bash
npm run build
```

Known working baseline:

- Next.js 15.1.9
- Static output includes `/llms.txt`, `/llms-full.txt`, `/ai-content.json`, `/case-studies.json`, `/sitemap.xml`, and `/robots.txt`

