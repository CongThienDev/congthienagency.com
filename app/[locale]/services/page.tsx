import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES_OVERVIEW_EN } from "@/content/pages.en";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/en/services";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  const c = SERVICES_OVERVIEW_EN;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: PATH,
    locale: "en",
    alternateKey: "services",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  const c = SERVICES_OVERVIEW_EN;

  return (
    <Shell locale="en" alternateKey="services">
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
          <div className="grid gap-6 sm:grid-cols-2">
            {c.services.map((s) => (
              <div key={s.title} className="rounded-card border border-line bg-white p-6 shadow-soft">
                <span className="label-mono text-blue-600">{s.tag}</span>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to start?"
        sub="Message me on Zalo or WhatsApp for a consultation and a clear quote."
        primaryHref="/en/contact"
        primaryLabel="Contact"
      />
    </Shell>
  );
}
