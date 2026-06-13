import { SITE } from "@/content/site";
import { getAllIndexablePages, resolveAbsoluteImageUrls } from "@/lib/siteIndex";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = getAllIndexablePages()
    .map((page) => ({
      url: `${SITE.url}${page.path}`,
      title: page.title,
      images: resolveAbsoluteImageUrls(page.imageCandidates),
    }))
    .filter((page) => page.images.length > 0);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${items
    .map(
      (page) => `  <url>\n    <loc>${page.url}</loc>\n${page.images
        .map(
          (image) =>
            `    <image:image>\n      <image:loc>${image}</image:loc>\n      <image:title>${escapeXml(page.title)}</image:title>\n    </image:image>`,
        )
        .join("\n")}\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
