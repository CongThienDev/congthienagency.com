import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { PortfolioCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PROJECTS_HUB, PROJECTS } from "@/content/projects.vi";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/du-an";
const BREADCRUMB = [
  { label: "Trang chủ", href: "/vi" },
  { label: "Dự án", href: PATH },
];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  return buildMetadata({
    title: PROJECTS_HUB.metaTitle,
    description: PROJECTS_HUB.metaDescription,
    path: PATH,
    locale: "vi",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  return (
    <Shell locale="vi">
      <JsonLd data={graphDocument([breadcrumbGraph(BREADCRUMB)])} />
      <section className="bg-glow border-b border-line">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={BREADCRUMB} />
          <div className="mt-6 max-w-3xl animate-rise">
            <p className="label-mono text-blue-600">{PROJECTS_HUB.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl text-balance">
              {PROJECTS_HUB.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{PROJECTS_HUB.heroSub}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <PortfolioCard
                key={p.slug}
                href={p.path}
                name={p.name}
                category={p.category}
                location={`${p.location} · ${p.year}`}
                stat="PageSpeed SEO 100/100"
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Muốn website của bạn nằm trong danh sách này?"
        sub="Nhắn tôi qua Zalo để bắt đầu dự án của bạn."
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ"
      />
    </Shell>
  );
}
