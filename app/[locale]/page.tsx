import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard, PortfolioCard } from "@/components/Cards";
import { TrustStrip, ProofBadge } from "@/components/Bits";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { HOME_VI } from "@/content/pages.vi";
import { HOME_EN } from "@/content/pages.en";
import { PROJECTS } from "@/content/projects.vi";
import { GLOBAL_FAQS } from "@/content/faqs.vi";
import { FAQAccordion } from "@/components/FAQAccordion";
import { graphDocument, faqGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const c = locale === "en" ? HOME_EN : HOME_VI;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: locale === "en" ? "/en" : "/vi",
    locale: locale === "en" ? "en" : "vi",
    alternateKey: "home",
  });
}

export default async function HomePage({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi" && locale !== "en") notFound();

  if (locale === "en") return <HomeEN />;
  return <HomeVI />;
}

function HomeVI() {
  const c = HOME_VI;
  return (
    <Shell locale="vi" alternateKey="home">
      <JsonLd data={graphDocument([faqGraph(GLOBAL_FAQS)])} />

      <section className="bg-glow relative overflow-hidden border-b border-line">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="label-mono animate-rise text-blue-600" style={{ animationDelay: "0ms" }}>
              {c.eyebrow}
            </p>
            <h1
              className="animate-rise mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl text-balance"
              style={{ animationDelay: "80ms" }}
            >
              {c.h1}
            </h1>
            <p
              className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "160ms" }}
            >
              {c.heroSub}
            </p>
            <div
              className="animate-rise mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Button href={c.heroPrimaryCta.href}>{c.heroPrimaryCta.label}</Button>
              <Button href={c.heroSecondaryCta.href} variant="secondary">
                {c.heroSecondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="animate-rise mt-14" style={{ animationDelay: "320ms" }}>
            <TrustStrip items={c.trust} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader {...c.servicesIntro} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader {...c.whyIntro} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {c.why.map((w) => (
              <div key={w.title} className="rounded-card border border-line p-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader {...c.proofIntro} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <PortfolioCard
                key={p.slug}
                href={p.path}
                name={p.name}
                category={p.category}
                location={`${p.location} · ${p.year}`}
                stat={p.stats[1]?.value ? `SEO ${p.stats[1].value}` : "PageSpeed SEO 100/100"}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader {...c.processIntro} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.map((p) => (
              <div key={p.step} className="rounded-card border border-line p-6">
                <span className="font-mono text-sm text-blue-600">{p.step}</span>
                <h3 className="mt-2 font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Câu hỏi thường gặp" />
          <div className="mt-8">
            <FAQAccordion faqs={GLOBAL_FAQS} />
          </div>
        </Container>
      </section>

      <CTASection
        title={c.ctaTitle}
        sub={c.ctaSub}
        primaryHref="/vi/lien-he"
        primaryLabel="Nhận tư vấn qua Zalo"
      />
    </Shell>
  );
}

function HomeEN() {
  const c = HOME_EN;
  return (
    <Shell locale="en" alternateKey="home">
      <section className="bg-glow relative overflow-hidden border-b border-line">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="label-mono text-blue-600">{c.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl text-balance">
              {c.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{c.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={c.heroPrimaryCta.href}>{c.heroPrimaryCta.label}</Button>
              <Button href={c.heroSecondaryCta.href} variant="secondary">
                {c.heroSecondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="mt-14">
            <TrustStrip items={c.trust} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader {...c.servicesIntro} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="mt-12">
            <ProofBadge>Reference projects reached PageSpeed SEO 100/100</ProofBadge>
          </div>
        </Container>
      </section>

      <CTASection
        title={c.ctaTitle}
        sub={c.ctaSub}
        primaryHref="/en/contact"
        primaryLabel="Get a consultation"
      />
    </Shell>
  );
}
