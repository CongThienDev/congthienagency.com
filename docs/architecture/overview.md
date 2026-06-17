# Architecture Overview

## High-Level Shape

The repo is a content-driven Next.js website. Pages are generated from typed TypeScript data instead of a CMS. This gives the project strong compile-time safety while keeping content close to the components that render it.

```text
content/* data
  -> lib helpers
  -> app routes
  -> components
  -> generated metadata, schema, sitemap, AI resources
```

## App Router

`app/[locale]/layout.tsx` validates locales and injects site-level JSON-LD. The homepage and core pages branch between Vietnamese and English content where needed.

Service pages are intentionally thin. A typical service route imports `serviceRoute()` and exports the generated page and metadata. This avoids repeating metadata and rendering logic across more than 50 service pages.

## Content Model

The main content modules are:

- `SERVICES`: commercial service pages, including pillar and spoke pages
- `BLOG_POSTS`: informational articles grouped by cluster
- `PROJECTS`: public case studies with stats, scope, proof, and related services
- `PRICING_GROUPS`: pricing packages and FAQ support
- `GLOSSARY_TERMS`: glossary entries for marketing and SEO concepts

This model makes it easy to reuse the same facts across HTML pages, JSON-LD, sitemap, and AI resource files.

## Metadata

`buildMetadata()` handles:

- title
- description
- canonical URL
- language alternates when available
- robots index/follow
- Open Graph
- Twitter cards

`SITE_METADATA_BASE` sets the production domain for Next metadata generation.

## Structured Data

`lib/schema.ts` builds JSON-LD graph nodes for:

- Organization
- ProfessionalService
- LocalBusiness
- Person
- WebSite
- BreadcrumbList
- Service
- FAQPage
- CreativeWork
- BlogPosting
- WebPage

The site uses `JsonLd` components to inject these graphs directly into pages.

## Indexable Pages

`lib/siteIndex.ts` is the canonical inventory for generated discovery resources. It combines:

- Vietnamese core pages
- English core pages
- service pages
- project pages
- blog posts

The sitemap and image sitemap read from this inventory.

## AI Resource Layer

The AI layer is intentionally separate from the Google XML sitemap:

- `llms.txt`: short human and agent-friendly overview
- `llms-full.txt`: full text export for AI assistants
- `ai-content.json`: structured manifest of services, blog posts, pricing, glossary, and entity data
- `case-studies.json`: structured case-study manifest
- `agency-profile.txt`: static plain-text agency profile

`lib/aiResources.ts` keeps shared links, pillar references, highlighted blogs, and counts in one place.

