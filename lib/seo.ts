import type { Metadata } from "next";
import { SITE, OG_IMAGE, type Locale } from "@/content/site";
import { LOCALE_ALTERNATES } from "@/content/navigation";

type BuildMetaArgs = {
  title: string;
  description: string;
  /** Path of the current page, e.g. "/vi/thiet-ke-website". */
  path: string;
  locale: Locale;
  /** Key into LOCALE_ALTERNATES for hreflang, when the page has cross-locale twins. */
  alternateKey?: keyof typeof LOCALE_ALTERNATES;
  image?: string;
  noindex?: boolean;
  type?: "website" | "article";
};

const LOCALE_OG: Record<Locale, string> = {
  vi: "vi_VN",
  en: "en_US",
};

export function buildMetadata({
  title,
  description,
  path,
  locale,
  alternateKey,
  image = OG_IMAGE,
  noindex = false,
  type = "website",
}: BuildMetaArgs): Metadata {
  const canonical = `${SITE.url}${path}`;

  const languages: Record<string, string> = {};
  if (alternateKey) {
    const alt = LOCALE_ALTERNATES[alternateKey];
    if (alt.vi) languages["vi"] = `${SITE.url}${alt.vi}`;
    if (alt.en) languages["en"] = `${SITE.url}${alt.en}`;
    if (alt.vi) languages["x-default"] = `${SITE.url}${alt.vi}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.shortName,
      locale: LOCALE_OG[locale],
      type,
      images: [{ url: `${SITE.url}${image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE.url}${image}`],
    },
  };
}

export const SITE_METADATA_BASE = new URL(SITE.url);
