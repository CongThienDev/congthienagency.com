import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ABOUT_VI } from "@/content/pages.vi";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/gioi-thieu";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  const c = ABOUT_VI;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: PATH,
    locale: "vi",
    alternateKey: "about",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();
  const c = ABOUT_VI;

  return (
    <Shell locale="vi" alternateKey="about">
      <JsonLd data={graphDocument([breadcrumbGraph(c.breadcrumb)])} />
      <section className="bg-glow border-b border-line">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={c.breadcrumb} />
          <div className="mt-6 max-w-3xl animate-rise">
            <p className="label-mono text-blue-600">{c.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl text-balance">
              {c.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{c.heroSub}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div className="flex flex-col gap-10">
              {c.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink">{s.heading}</h2>
                  {s.body && <p className="mt-3 text-base leading-relaxed text-muted">{s.body}</p>}
                  {s.bullets && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-base text-ink-soft">
                          <span aria-hidden className="mt-1 text-blue-600">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {c.values.map((v) => (
                <div key={v.title} className="rounded-card border border-line bg-white p-5 shadow-soft">
                  <h3 className="font-semibold text-ink">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Cùng xây dựng hiện diện online cho doanh nghiệp của bạn"
        sub="Nhắn tôi qua Zalo để trao đổi nhu cầu và nhận tư vấn."
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ"
      />
    </Shell>
  );
}
