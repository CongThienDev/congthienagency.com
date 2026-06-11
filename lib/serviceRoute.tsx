import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/content/services.vi";
import { Shell } from "@/components/Shell";
import { ServicePageView } from "@/components/ServicePageView";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

/** Builds the generateMetadata + default page export for a VI service route. */
export function serviceRoute(path: string) {
  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale } = await params;
    const service = getService(path);
    if (locale !== "vi" || !service) return {};
    return buildMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path,
      locale: "vi",
    });
  }

  async function Page({ params }: Params) {
    const { locale } = await params;
    if (locale !== "vi") notFound();
    const service = getService(path);
    if (!service) notFound();
    return (
      <Shell locale="vi">
        <ServicePageView service={service} />
      </Shell>
    );
  }

  return { generateMetadata, Page };
}
