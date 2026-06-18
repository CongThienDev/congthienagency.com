import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/content/services.vi";
import { Shell } from "@/components/Shell";
import { ServicePageView } from "@/components/ServicePageView";
import { buildMetadata } from "@/lib/seo";
import { resolvePrimaryImage } from "@/lib/siteIndex";
import type { Locale } from "@/content/site";

type Params = { params: Promise<{ locale: string }> };

function pathFor(locale: string) {
  return locale === "en"
    ? "/en/naver-marketing/naver-blogs"
    : "/vi/naver-marketing/naver-blogs";
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "vi") return {};
  const service = getService(pathFor(locale));
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: pathFor(locale),
    locale: locale as Locale,
    image: resolvePrimaryImage(service.images.map((image) => image.suggestion)),
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "vi") notFound();
  const service = getService(pathFor(locale));
  if (!service) notFound();
  return (
    <Shell locale={locale as Locale}>
      <ServicePageView service={service} />
    </Shell>
  );
}
