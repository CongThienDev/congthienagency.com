import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { SectionHeader } from "@/components/SectionHeader";
import { PricingList } from "@/components/PricingList";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ContactModalProvider } from "@/components/ContactModal";
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
      <ContactModalProvider>
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

      <section className="py-12 first:pt-16 sm:py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <PricingList groups={PRICING_GROUPS} />
            <p className="mt-8 flex items-start gap-2.5 px-1 text-[13px] leading-relaxed text-muted">
              <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-line-strong" />
              {PRICING_NOTE}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeader eyebrow="FAQ" title="Câu hỏi về bảng giá" />
            <div className="mt-8">
              <FAQAccordion faqs={PRICING_FAQS} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Cần báo giá cho dự án cụ thể?"
        sub="Nhắn tôi qua Zalo để nhận báo giá chi tiết theo đúng nhu cầu của bạn."
        primaryHref="/vi/lien-he"
        primaryLabel="Nhận báo giá"
      />
      </ContactModalProvider>
    </Shell>
  );
}
