import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PROCESS_VI } from "@/content/pages.vi";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/quy-trinh";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  const c = PROCESS_VI;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: PATH,
    locale: "vi",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();
  const c = PROCESS_VI;

  return (
    <Shell locale="vi">
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.steps.map((s) => (
              <div key={s.step} className="rounded-card border border-line bg-white p-6 shadow-soft">
                <span className="font-mono text-sm text-blue-600">{s.step}</span>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Bắt đầu với bước tư vấn miễn phí"
        sub="Nhắn tôi qua Zalo để trao đổi nhu cầu và nhận báo giá rõ ràng."
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ"
      />
    </Shell>
  );
}
