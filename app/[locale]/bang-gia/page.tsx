import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import {
  PRICING_META,
  PRICING_GROUPS,
  PRICING_NOTE,
  PRICING_FAQS,
} from "@/content/pricing.vi";
import { graphDocument, breadcrumbGraph, faqGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/bang-gia";
const BREADCRUMB = [
  { label: "Trang chủ", href: "/vi" },
  { label: "Bảng giá", href: PATH },
];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  return buildMetadata({
    title: PRICING_META.metaTitle,
    description: PRICING_META.metaDescription,
    path: PATH,
    locale: "vi",
    alternateKey: "pricing",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  return (
    <Shell locale="vi" alternateKey="pricing">
      <JsonLd
        data={graphDocument([breadcrumbGraph(BREADCRUMB), faqGraph(PRICING_FAQS)])}
      />
      <section className="bg-glow border-b border-line">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={BREADCRUMB} />
          <div className="mt-6 max-w-3xl animate-rise">
            <p className="label-mono text-blue-600">{PRICING_META.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl text-balance">
              {PRICING_META.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{PRICING_META.heroSub}</p>
          </div>
        </Container>
      </section>

      {PRICING_GROUPS.map((group) => (
        <section key={group.id} className="py-12 first:pt-16 sm:py-14">
          <Container>
            <SectionHeader eyebrow={group.id} title={group.title} sub={group.intro} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.packages.map((pkg) => (
                <PricingCard
                  key={pkg.id}
                  name={pkg.name}
                  priceLabel={pkg.priceLabel}
                  priceUnit={pkg.priceUnit}
                  tagline={pkg.tagline}
                  features={pkg.features}
                  ctaHref={pkg.ctaHref}
                  ctaLabel={pkg.ctaLabel}
                  highlight={pkg.highlight}
                  disclaimer={pkg.disclaimer}
                  cluster={pkg.cluster}
                />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="pb-8">
        <Container>
          <p className="rounded-card border border-line bg-white p-5 text-sm leading-relaxed text-muted">
            {PRICING_NOTE}
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Câu hỏi về bảng giá" />
          <div className="mt-8">
            <FAQAccordion faqs={PRICING_FAQS} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Cần báo giá cho dự án cụ thể?"
        sub="Nhắn tôi qua Zalo để nhận báo giá chi tiết theo đúng nhu cầu của bạn."
        primaryHref="/vi/lien-he"
        primaryLabel="Nhận báo giá"
      />
    </Shell>
  );
}
