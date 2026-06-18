# Deployment And Indexing

## Local Commands

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

IndexNow dry run:

```bash
npm run indexnow
```

IndexNow live submission:

```bash
npm run indexnow -- --submit
```

## Production Discovery URLs

After deploy, verify these URLs return `200`:

- `https://www.congthienagency.com/robots.txt`
- `https://www.congthienagency.com/sitemap.xml`
- `https://www.congthienagency.com/image-sitemap.xml`
- `https://www.congthienagency.com/llms.txt`
- `https://www.congthienagency.com/llms-full.txt`
- `https://www.congthienagency.com/ai-content.json`
- `https://www.congthienagency.com/case-studies.json`
- `https://www.congthienagency.com/agency-profile.txt`

## Search Console Checklist

1. Submit `https://www.congthienagency.com/sitemap.xml`.
2. Submit `https://www.congthienagency.com/image-sitemap.xml`.
3. Request indexing for the top money pages.
4. Request indexing for case studies and entity pages.
5. Inspect `/llms.txt` and `/ai-content.json` as URL Inspection test URLs, even if they are not normal ranking targets.
6. Review impressions weekly before creating new long-tail pages.

## Priority URLs

Top commercial pages:

- `/vi/thiet-ke-website`
- `/vi/thiet-ke-website/spa-hoi-an`
- `/vi/naver-marketing`
- `/vi/naver-marketing/hoi-an`
- `/vi/google-maps-marketing`
- `/vi/google-maps-marketing/hoi-an`

Proof and entity pages:

- `/vi/du-an`
- `/vi/du-an/serena-retreat`
- `/vi/du-an/ruong-house`
- `/vi/ve-chung-toi`
- `/vi/gioi-thieu`

AI resource pages:

- `/llms.txt`
- `/llms-full.txt`
- `/ai-content.json`
- `/case-studies.json`
- `/agency-profile.txt`

## Deployment Notes

- Keep `SITE.url` and `SITE.domain` in `content/site.ts` aligned with production.
- Keep the IndexNow key file in `public/`.
- Set `INDEXNOW_SECRET` in production if the public `/api/indexnow` endpoint should require authorization.
- Do not add generated AI files to `sitemap.xml`; keep them linked from `llms.txt` and entity resources.
- Use permanent redirects for locale or URL moves that have already been crawled.

