import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/content/services.vi";
import { Shell } from "@/components/Shell";
import { ServicePageView } from "@/components/ServicePageView";
import { buildMetadata } from "@/lib/seo";
import { resolvePrimaryImage } from "@/lib/siteIndex";
import type { Locale } from "@/content/site";

type Params = { params: Promise<{ locale: string }> };

/** Builds the generateMetadata + default page export for a localized service route. */
export function serviceRoute(path: string) {
  const routeLocale: Locale = path.startsWith("/en/") ? "en" : "vi";

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale } = await params;
    const service = getService(path);
    if (locale !== routeLocale || !service) return {};
    return buildMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path,
      locale: routeLocale,
      image: resolvePrimaryImage(service.images.map((image) => image.suggestion)),
    });
  }

  async function Page({ params }: Params) {
    const { locale } = await params;
    if (locale !== routeLocale) notFound();
    const service = getService(path);
    if (!service) notFound();
    return (
      <Shell locale={routeLocale}>
        <ServicePageView service={service} />
      </Shell>
    );
  }

  return { generateMetadata, Page };
}
