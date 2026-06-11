import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { ContactButtons } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT_VI } from "@/content/pages.vi";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/content/site";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/lien-he";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  const c = CONTACT_VI;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: PATH,
    locale: "vi",
    alternateKey: "contact",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();
  const c = CONTACT_VI;

  return (
    <Shell locale="vi" alternateKey="contact">
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
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-ink">Kênh liên hệ</h2>
              <div className="mt-5">
                <ContactButtons />
              </div>
              <p className="mt-6 rounded-card bg-blue-50 p-4 text-sm leading-relaxed text-ink-soft">
                {c.note}
              </p>
            </div>
            <div className="rounded-card border border-line bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold tracking-tight text-ink">Thông tin nhanh</h2>
              <dl className="mt-5 flex flex-col gap-4 text-sm">
                <div>
                  <dt className="text-muted">Hotline / Zalo</dt>
                  <dd className="mt-1 font-medium text-ink">{SITE.contact.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd className="mt-1 font-medium text-ink">{SITE.contact.email}</dd>
                </div>
                <div>
                  <dt className="text-muted">Khu vực phục vụ</dt>
                  <dd className="mt-1 font-medium text-ink">Hội An – Đà Nẵng & toàn Việt Nam</dd>
                </div>
                <div>
                  <dt className="text-muted">Người phụ trách</dt>
                  <dd className="mt-1 font-medium text-ink">{SITE.founder} (CongThienDev)</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </Shell>
  );
}
