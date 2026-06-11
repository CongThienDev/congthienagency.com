import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb, ProofBadge, CaseStudyStats } from "@/components/Bits";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PROJECTS, getProject } from "@/content/projects.vi";
import { graphDocument, breadcrumbGraph, creativeWorkGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ locale: "vi", slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (locale !== "vi" || !project) return {};
  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: project.path,
    locale: "vi",
    type: "article",
  });
}

export default async function Page({ params }: Params) {
  const { locale, slug } = await params;
  if (locale !== "vi") notFound();
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <Shell locale="vi">
      <JsonLd
        data={graphDocument([
          breadcrumbGraph(project.breadcrumb),
          creativeWorkGraph({
            name: project.name,
            description: project.metaDescription,
            path: project.path,
          }),
        ])}
      />

      <section className="border-b border-line bg-glow">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={project.breadcrumb} />
          <div className="mt-6 max-w-3xl animate-rise">
            <p className="label-mono text-blue-600">{project.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl text-balance">
              {project.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{project.heroSub}</p>
          </div>
          <div className="mt-10">
            <CaseStudyStats stats={project.stats} />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">{project.summary}</p>
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {project.sections.map((s) => (
              <div key={s.heading} className="rounded-card border border-line bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold tracking-tight text-ink">{s.heading}</h2>
                {s.body && <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>}
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

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">Phạm vi công việc</h2>
              <ul className="mt-5 grid gap-3">
                {project.scope.map((it) => (
                  <li key={it} className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-soft">
                    <span aria-hidden className="text-blue-600">✓</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">Kết quả kiểm chứng</h2>
              <div className="mt-5 flex flex-col gap-3">
                {project.verifiedProof.map((p) => (
                  <div key={p} className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm text-ink">
                    <ProofBadge>✓</ProofBadge>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {project.related.length > 0 && (
        <section className="border-t border-line bg-white py-14">
          <Container>
            <p className="label-mono text-muted">Liên quan</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.related.map((r) => (
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
        title="Bạn muốn một website tương tự?"
        sub="Nhắn tôi qua Zalo để trao đổi nhu cầu và nhận báo giá rõ ràng."
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ"
      />

      <div className="sr-only" data-image-slots>
        {project.images.map((im) => `${im.slot}:${im.suggestion}`).join("|")}
      </div>
    </Shell>
  );
}
