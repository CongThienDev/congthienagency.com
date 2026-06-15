import Link from "next/link";
import type { Service } from "@/content/services.vi";
import { Container } from "./Container";
import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";
import { Breadcrumb, ProofBadge } from "./Bits";
import { FAQAccordion } from "./FAQAccordion";
import { CTASection } from "./CTASection";
import { JsonLd } from "./JsonLd";
import {
  graphDocument,
  breadcrumbGraph,
  serviceGraph,
  faqGraph,
} from "@/lib/schema";
import { SITE } from "@/content/site";
import { resolveAbsoluteImageUrls } from "@/lib/siteIndex";

export function ServicePageView({ service }: { service: Service }) {
  const imageUrls = resolveAbsoluteImageUrls(service.images.map((image) => image.suggestion));
  const nodes = [
    breadcrumbGraph(service.breadcrumb),
    serviceGraph({
      name: service.h1,
      description: service.metaDescription,
      path: service.path,
      serviceType: service.schema.serviceType,
      offerMinPriceVnd: service.schema.offerMinPriceVnd,
      offerPriceVnd: service.schema.offerPriceVnd,
      images: imageUrls,
    }),
  ];
  if (service.faqs.length > 0) nodes.push(faqGraph(service.faqs));

  return (
    <>
      <JsonLd data={graphDocument(nodes)} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="bg-glow absolute inset-0" />
        <div aria-hidden className="bg-grid bg-grid-fade absolute inset-0" />
        <Container className="relative py-12 sm:py-16">
          <Breadcrumb items={service.breadcrumb} />
          <div className="mt-7 max-w-3xl animate-rise">
            <p className="label-mono text-blue-600">{service.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl text-balance">
              {service.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{service.heroSub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/vi/lien-he" size="lg">{service.heroCta}</Button>
              {service.priceFrom && (
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-800">
                  {service.priceFrom}
                </span>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-14 sm:py-16">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">
            {service.intro}
          </p>
        </Container>
      </section>

      {/* Sections */}
      <section className="pb-4">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {service.sections.map((s) => (
              <div
                key={s.heading}
                className="card-hover card-gradient-border rounded-card p-6 shadow-soft"
              >
                <h2 className="text-lg font-semibold tracking-tight text-ink">{s.heading}</h2>
                {s.body && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                )}
                {s.bodyParts && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.bodyParts.map((part, partIndex) =>
                      part.type === "link" ? (
                        <Link
                          key={`${part.href}-${partIndex}`}
                          href={part.href}
                          className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-800"
                        >
                          {part.text}
                        </Link>
                      ) : (
                        <span key={`${part.text.slice(0, 16)}-${partIndex}`}>{part.text}</span>
                      )
                    )}
                  </p>
                )}
                {s.bullets && (
                  <ul className="mt-3 flex flex-col gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted">
                        <span aria-hidden className="mt-1 text-blue-600">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables + Who for */}
      {(service.deliverables || service.whoFor) && (
        <section className="py-14 sm:py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              {service.deliverables && (
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink">
                    {service.deliverables.title}
                  </h2>
                  <ul className="mt-5 grid gap-3">
                    {service.deliverables.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-soft"
                      >
                        <span aria-hidden className="text-blue-600">✓</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {service.whoFor && (
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink">
                    Phù hợp với
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.whoFor.map((w) => (
                      <span
                        key={w}
                        className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                  {service.priceNote && (
                    <p className="mt-6 rounded-card bg-blue-50 p-4 text-sm leading-relaxed text-ink-soft">
                      {service.priceNote}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Process */}
      {service.process && (
        <section className="border-y border-line bg-white py-14 sm:py-16">
          <Container>
            <SectionHeader eyebrow="Quy trình" title="Cách triển khai" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((p, i) => (
                <div key={p.step} className="rounded-card border border-line p-5">
                  <span className="font-mono text-sm text-blue-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-semibold text-ink">{p.step}</h3>
                  <p className="mt-1 text-sm text-muted">{p.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Proof */}
      {service.proof && (
        <section className="py-14 sm:py-16">
          <Container>
            <Link
              href={service.proof.projectPath}
              className="group block rounded-card border border-line bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <ProofBadge>Dự án kiểm chứng</ProofBadge>
              <p className="mt-4 max-w-3xl text-xl leading-relaxed text-ink">
                {service.proof.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
                Xem case study {service.proof.projectName}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="pb-16">
          <Container>
            <SectionHeader eyebrow="FAQ" title="Câu hỏi thường gặp" />
            <div className="mt-8">
              <FAQAccordion faqs={service.faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Related */}
      {service.related.length > 0 && (
        <section className="border-t border-line bg-white py-14">
          <Container>
            <p className="label-mono text-muted">Liên quan</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group rounded-card border border-line p-5 transition-all hover:border-blue-200 hover:shadow-soft"
                >
                  <span className="label-mono text-blue-600">{r.note}</span>
                  <p className="mt-2 font-medium text-ink group-hover:text-blue-700">{r.label}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Cần tư vấn cho dự án của bạn?"
        sub={`Nhắn tôi qua Zalo ${SITE.contact.phoneDisplay} để được tư vấn và nhận báo giá rõ ràng.`}
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ ngay"
      />

      {/* Image asset notes (dev-only reference, hidden) */}
      <div className="sr-only" data-image-slots>
        {service.images.map((im) => `${im.slot}:${im.suggestion}`).join("|")}
      </div>
    </>
  );
}
