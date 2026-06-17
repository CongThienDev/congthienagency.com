import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES } from "@/content/services.vi";
import { BLOG_POSTS } from "@/content/blog.vi";
import { GLOBAL_FAQS } from "@/content/faqs.vi";
import { PRICING_FAQS } from "@/content/pricing.vi";
import { graphDocument, breadcrumbGraph, faqGraph, webPageGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/cau-hoi-thuong-gap";

type ClusterKey = "general" | "website" | "naver" | "maps" | "social" | "qr";
type FAQRow = { q: string; a: string; sourceLabel: string; sourceHref: string };
type ClusterGroup = { key: ClusterKey; title: string; eyebrow: string; intro: string; faqs: FAQRow[] };

const CLUSTER_TITLES: Record<ClusterKey, { title: string; intro: string }> = {
  general: {
    title: "Câu hỏi chung",
    intro:
      "Câu hỏi tổng hợp về Công Thiên Agency, quy trình làm việc, khu vực phục vụ và cách kết hợp dịch vụ.",
  },
  website: {
    title: "Thiết kế website",
    intro:
      "FAQ về thiết kế website doanh nghiệp, landing page, tốc độ tải, booking online, đa ngôn ngữ, bảo trì và tích hợp Google Maps.",
  },
  naver: {
    title: "Naver Marketing",
    intro:
      "FAQ về Naver Blog, Naver Place, Naver KOC, blogger Hàn, chi phí Naver Marketing và cách đo hiệu quả với tệp khách Hàn Quốc.",
  },
  maps: {
    title: "Google Maps Marketing",
    intro:
      "FAQ về Google Business Profile, Local SEO, đánh giá Google, phản hồi review tiêu cực, hồ sơ trùng và cách lên top Google Maps địa phương.",
  },
  social: {
    title: "Social Marketing",
    intro:
      "FAQ về Threads, Fanpage, Meta Verified, xác minh tick xanh, khôi phục tài khoản Facebook, social proof và tăng trưởng kênh bền vững.",
  },
  qr: {
    title: "Quét mã QR & Activation",
    intro:
      "FAQ về chiến dịch quét mã QR, tải app theo KPI, cộng tác viên quét mã, mã QR Zalo OA và phân biệt việc thật – lừa đảo.",
  },
};

const CLUSTER_ORDER: ClusterKey[] = ["general", "website", "naver", "maps", "social", "qr"];

function normalize(q: string) {
  return q.trim().toLowerCase().replace(/\s+/g, " ");
}

function buildGroups(): ClusterGroup[] {
  const buckets = new Map<ClusterKey, FAQRow[]>(
    CLUSTER_ORDER.map((k) => [k, [] as FAQRow[]])
  );
  const seen = new Map<string, true>();

  function push(cluster: ClusterKey, row: FAQRow) {
    const key = `${cluster}|${normalize(row.q)}`;
    if (seen.has(key)) return;
    seen.set(key, true);
    buckets.get(cluster)!.push(row);
  }

  // Global FAQs
  for (const f of GLOBAL_FAQS) push("general", { q: f.q, a: f.a, sourceLabel: "Câu hỏi chung", sourceHref: "/vi" });
  for (const f of PRICING_FAQS) push("general", { q: f.q, a: f.a, sourceLabel: "Bảng giá", sourceHref: "/vi/bang-gia" });

  // Service FAQs
  for (const s of SERVICES) {
    if (!s.faqs?.length) continue;
    for (const f of s.faqs) {
      push(s.cluster, {
        q: f.q,
        a: f.a,
        sourceLabel: `Dịch vụ · ${s.h1}`,
        sourceHref: s.path,
      });
    }
  }

  // Blog FAQs
  for (const p of BLOG_POSTS) {
    if (!p.faqs?.length) continue;
    const cluster = (p.cluster === "general" ? "general" : p.cluster) as ClusterKey;
    for (const f of p.faqs) {
      push(cluster, {
        q: f.q,
        a: f.a,
        sourceLabel: `Blog · ${p.title}`,
        sourceHref: p.path,
      });
    }
  }

  return CLUSTER_ORDER.map((k) => ({
    key: k,
    title: CLUSTER_TITLES[k].title,
    eyebrow: k.toUpperCase(),
    intro: CLUSTER_TITLES[k].intro,
    faqs: buckets.get(k) ?? [],
  })).filter((g) => g.faqs.length > 0);
}

const META_TITLE = "Câu hỏi thường gặp về Marketing Online | Công Thiên Agency";
const META_DESCRIPTION =
  "Tổng hợp toàn bộ câu hỏi thường gặp về thiết kế website, Naver Marketing, Google Maps, Threads/Social và quét mã QR cho doanh nghiệp dịch vụ – du lịch Hội An – Đà Nẵng.";

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

  const groups = buildGroups();
  const totalFaqs = groups.reduce((acc, g) => acc + g.faqs.length, 0);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/vi" },
    { label: "Câu hỏi thường gặp", href: PATH },
  ];

  // Flatten all FAQs for schema (FAQPage with full mainEntity)
  const allFaqsForSchema = groups.flatMap((g) => g.faqs.map((f) => ({ q: f.q, a: f.a })));

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
          faqGraph(allFaqsForSchema),
        ])}
      />

      <section className="border-b border-line bg-glow">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <p className="label-mono text-blue-600">FAQ Hub · {totalFaqs} câu hỏi</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Câu hỏi thường gặp về Marketing Online cho doanh nghiệp dịch vụ – du lịch
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Đây là kho câu hỏi tổng hợp từ toàn bộ trang dịch vụ và blog của Công Thiên Agency
              (Congthienagency.com) — về Website, Naver, Google Maps, Threads/Social và Quét mã QR.
              Mỗi câu trả lời đều dẫn về trang gốc nếu bạn muốn đọc sâu hơn. Trang này được cập nhật
              liên tục mỗi khi có nội dung mới.
            </p>
          </div>

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Mục lục FAQ">
            {groups.map((g) => (
              <a
                key={g.key}
                href={`#cluster-${g.key}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-all hover:border-blue-300 hover:text-blue-700"
              >
                <span>{g.title}</span>
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-mono text-blue-700">
                  {g.faqs.length}
                </span>
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {groups.map((g, idx) => (
        <section
          key={g.key}
          id={`cluster-${g.key}`}
          className={`border-b border-line py-14 sm:py-16 ${idx % 2 === 1 ? "bg-white" : "bg-glow/40"}`}
        >
          <Container>
            <SectionHeader eyebrow={g.eyebrow} title={g.title} sub={g.intro} />

            <div className="mt-10 grid gap-4">
              {g.faqs.map((f, i) => {
                const anchor = `${g.key}-q${i + 1}`;
                return (
                  <article
                    key={anchor}
                    id={anchor}
                    className="card-gradient-border overflow-hidden rounded-card bg-white shadow-soft"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <details className="group">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-5 transition-colors hover:text-blue-700 sm:px-7">
                        <div>
                          <h3
                            className="text-[15px] font-semibold leading-snug text-ink group-hover:text-blue-700"
                            itemProp="name"
                          >
                            {f.q}
                          </h3>
                          <p className="mt-1 text-xs text-muted">
                            <a
                              href={`#${anchor}`}
                              className="font-mono hover:text-blue-700"
                              aria-label="Link trực tiếp tới câu hỏi"
                            >
                              #{anchor}
                            </a>
                            <span className="mx-2">·</span>
                            <Link href={f.sourceHref} className="hover:text-blue-700">
                              {f.sourceLabel}
                            </Link>
                          </p>
                        </div>
                        <span
                          aria-hidden
                          className="faq-icon grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-base font-medium text-blue-600 ring-1 ring-blue-100 transition-transform duration-300"
                        >
                          +
                        </span>
                      </summary>
                      <div
                        className="faq-body"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div>
                          <p
                            className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-7 sm:text-[15px]"
                            itemProp="text"
                          >
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </details>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ))}

      <CTASection
        title="Không thấy câu trả lời bạn cần?"
        sub="Nhắn Zalo cho Công Thiên Agency để được tư vấn trực tiếp về website, Naver, Google Maps, Threads và quét mã QR."
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ ngay"
      />
    </Shell>
  );
}
