import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { getAllIndexablePages, resolveAbsoluteImageUrls } from "@/lib/siteIndex";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllIndexablePages().map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    images: resolveAbsoluteImageUrls(page.imageCandidates),
  }));
}
