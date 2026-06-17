import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { GLOSSARY_SECTIONS, GLOSSARY_TERMS } from "@/content/glossary.vi";
import { graphDocument, breadcrumbGraph, webPageGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/tu-dien-marketing";

const META_TITLE = "Từ điển Marketing Online & SEO cho doanh nghiệp dịch vụ | Công Thiên Agency";
const META_DESCRIPTION =
  "Từ điển tổng hợp thuật ngữ Marketing Online, SEO, Naver, Google Maps, Threads/Social và quét mã QR — định nghĩa rõ ràng kèm ví dụ thực tế ngành du lịch Hội An – Đà Nẵng.";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  return buildMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: PATH,
    locale: "vi",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/vi" },
    { label: "Từ điển Marketing", href: PATH },
  ];

  const totalTerms = GLOSSARY_TERMS.length;

  // DefinedTermSet schema — describes a glossary
  const definedTermSet = {
    "@type": "DefinedTermSet",
    "@id": `${SITE.url}${PATH}#termset`,
    name: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    hasDefinedTerm: GLOSSARY_TERMS.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE.url}${PATH}#${t.slug}`,
      name: t.term,
      description: t.shortDef,
      url: `${SITE.url}${PATH}#${t.slug}`,
      termCode: t.slug,
      inDefinedTermSet: `${SITE.url}${PATH}#termset`,
    })),
  };

  return (
    <Shell locale="vi">
      <JsonLd
        data={graphDocument([
          breadcrumbGraph(breadcrumbItems),
          webPageGraph({
            name: META_TITLE,
            description: META_DESCRIPTION,
            path: PATH,
          }),
          definedTermSet,
        ])}
      />

      <section className="border-b border-line bg-glow">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <p className="label-mono text-blue-600">Từ điển · {totalTerms} thuật ngữ</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Từ điển Marketing Online &amp; SEO cho doanh nghiệp dịch vụ – du lịch
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Từ điển tổng hợp các thuật ngữ Công Thiên Agency (Congthienagency.com) sử dụng khi
              tư vấn website, Naver, Google Maps, Threads/Social và quét mã QR. Mỗi mục giải thích
              ngắn gọn kèm ví dụ thực tế ngành du lịch Hội An – Đà Nẵng — phù hợp cho cả chủ doanh
              nghiệp lẫn bạn đọc đang nghiên cứu chiến lược marketing.
            </p>
          </div>

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Mục lục từ điển">
            {GLOSSARY_SECTIONS.map((s) => {
              const count = GLOSSARY_TERMS.filter((t) => t.category === s.category).length;
              return (
                <a
                  key={s.category}
                  href={`#cat-${s.category}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-all hover:border-blue-300 hover:text-blue-700"
                >
                  <span>{s.title}</span>
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-mono text-blue-700">
                    {count}
                  </span>
                </a>
              );
            })}
          </nav>
        </Container>
      </section>

      {GLOSSARY_SECTIONS.map((section, idx) => {
        const terms = GLOSSARY_TERMS.filter((t) => t.category === section.category);
        if (terms.length === 0) return null;
        return (
          <section
            key={section.category}
            id={`cat-${section.category}`}
            className={`border-b border-line py-14 sm:py-16 ${idx % 2 === 1 ? "bg-white" : "bg-glow/40"}`}
          >
            <Container>
              <SectionHeader
                eyebrow={section.category.toUpperCase()}
                title={section.title}
                sub={section.intro}
              />

              <div className="mt-10 grid gap-6">
                {terms.map((t) => (
                  <article
                    key={t.slug}
                    id={t.slug}
                    className="card-gradient-border rounded-card bg-white p-6 shadow-soft sm:p-7"
                    itemScope
                    itemType="https://schema.org/DefinedTerm"
                  >
                    <header className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3
                        className="text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                        itemProp="name"
                      >
                        {t.term}
                      </h3>
                      <a
                        href={`#${t.slug}`}
                        className="font-mono text-xs text-muted hover:text-blue-700"
                        aria-label={`Link trực tiếp tới thuật ngữ ${t.term}`}
                      >
                        #{t.slug}
                      </a>
                    </header>

                    <p className="mt-2 text-sm font-medium italic text-blue-700">
                      {t.shortDef}
                    </p>

                    <p
                      className="mt-4 text-[15px] leading-relaxed text-ink-soft"
                      itemProp="description"
                    >
                      {t.body}
                    </p>

                    {t.example && (
                      <div className="mt-4 rounded-xl border-l-2 border-blue-300 bg-blue-50/40 px-4 py-3">
                        <p className="label-mono text-blue-700">Ví dụ thực tế</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.example}</p>
                      </div>
                    )}

                    {t.related && t.related.length > 0 && (
                      <div className="mt-5 border-t border-line pt-4">
                        <p className="label-mono text-muted">Liên quan</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {t.related.map((r) => (
                            <Link
                              key={r.href}
                              href={r.href}
                              className="inline-flex items-center gap-1 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink transition-colors hover:border-blue-200 hover:text-blue-700"
                            >
                              {r.label}
                              <span aria-hidden>→</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CTASection
        title="Cần tư vấn cụ thể cho doanh nghiệp của bạn?"
        sub="Nhắn Zalo cho Công Thiên Agency để được tư vấn về website, Naver, Google Maps, Threads và quét mã QR."
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ ngay"
      />
    </Shell>
  );
}
