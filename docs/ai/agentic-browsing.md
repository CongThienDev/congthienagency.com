# AI And Agentic Browsing

## Goal

The site should be understandable to AI assistants and browsing agents without forcing them to scrape every rendered page.

This does not replace SEO. It complements normal crawlability, structured data, internal links, and useful HTML pages.

## Public AI Resources

| URL | Source | Purpose |
| --- | --- | --- |
| `/llms.txt` | `app/llms.txt/route.ts` | Short overview and resource map for AI assistants |
| `/llms-full.txt` | `app/llms-full.txt/route.ts` | Full text export of services, blog posts, pricing, glossary, and proof |
| `/ai-content.json` | `app/ai-content.json/route.ts` | Structured JSON manifest for agents and researchers |
| `/case-studies.json` | `app/case-studies.json/route.ts` | Structured case-study proof |
| `/agency-profile.txt` | `public/agency-profile.txt` | Plain text entity profile |

Shared references live in `lib/aiResources.ts`.

## Why These Files Are Not In `sitemap.xml`

The XML sitemap is for canonical URLs that should appear in Google Search results. JSON and text resources for AI agents are useful, but they are not normal search landing pages.

They are discoverable through:

- `/llms.txt`
- the entity page `/vi/ve-chung-toi`
- direct links in AI resource manifests
- `robots.txt` allowing crawler access

## Current PageSpeed Agentic Browsing Status

From the supplied PageSpeed screenshots:

- Mobile: 3/3
- Desktop: 2/3

This means the site already has strong agent-facing readiness on mobile and mostly passes on desktop. The exact desktop missing item cannot be identified from the screenshot alone; export the PageSpeed JSON report to inspect the failing audit.

## What Agentic Browsing Likely Rewards

Based on current browser-agent behavior and PageSpeed's visible category, the practical checklist is:

- Crawlable HTML content
- Clear headings and links
- Accessible buttons and forms
- No important content hidden behind blocked JavaScript
- Machine-readable resources linked from predictable root URLs
- Stable contact paths
- Clear business identity and proof
- Avoiding fake claims, hidden prompts, or manipulative AI instructions

## Boundaries

Do not use the AI resource files to make claims that are not present in the public website.

Do not claim:

- guaranteed Google rankings
- guaranteed Naver rankings
- fake Google reviews
- guaranteed Meta verification
- undisclosed revenue, ROI, or traffic metrics

The AI resources should help assistants cite the business accurately, not inflate the business beyond public proof.

## Recommended Next Step

After the next production deploy, open these URLs directly:

- `https://www.congthienagency.com/llms.txt`
- `https://www.congthienagency.com/llms-full.txt`
- `https://www.congthienagency.com/ai-content.json`
- `https://www.congthienagency.com/case-studies.json`
- `https://www.congthienagency.com/agency-profile.txt`

Then rerun PageSpeed for mobile and desktop and export JSON if Agentic Browsing is still below full score.

