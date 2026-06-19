import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { JsonLd } from "@/components/JsonLd";
import { BlogCard } from "@/components/Cards";
import { IconArrowRight } from "@/components/Icons";
import { BLOG_HUB, BLOG_POSTS, type BlogPost } from "@/content/blog.vi";
import { BLOG_HUB_EN, BLOG_POSTS_EN } from "@/content/blog.en";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};
const PAGE_SIZE = 6;

type BlogCluster = BlogPost["cluster"];

const VI_PATH = "/vi/blog";
const VI_BREADCRUMB = [
  { label: "Trang chủ", href: "/vi" },
  { label: "Blog", href: VI_PATH },
];
const EN_PATH = "/en/blog";
const EN_BREADCRUMB = [
  { label: "Home", href: "/en" },
  { label: "Blog", href: EN_PATH },
];

const CATEGORY_ORDER: BlogCluster[] = ["naver", "website", "maps", "qr", "social", "general"];

const CATEGORY_META_VI: Record<BlogCluster, { label: string; title: string; description: string }> = {
  naver: {
    label: "Naver",
    title: "Naver Marketing",
    description: "Bài viết về Naver Blog, blogger Hàn, Naver Place và cách tiếp cận khách Hàn.",
  },
  website: {
    label: "Website",
    title: "Website & SEO",
    description: "Website cho spa, khách sạn, tour, booking online và nền tảng chuyển đổi.",
  },
  maps: {
    label: "Google Maps",
    title: "Google Maps",
    description: "Google Business Profile, review thật, local SEO và xử lý vấn đề hiển thị.",
  },
  social: {
    label: "Social",
    title: "Social Marketing",
    description: "Fanpage, social proof, tăng trưởng kênh và cách giữ thương hiệu đáng tin.",
  },
  qr: {
    label: "QR & Zalo",
    title: "Quét mã QR & Zalo",
    description: "Quét mã QR, Zalo lead, activation tại điểm bán và thu data offline.",
  },
  general: {
    label: "Khác",
    title: "Kiến thức chung",
    description: "Các ghi chú nền tảng hỗ trợ chiến lược marketing online tổng thể.",
  },
};

const CATEGORY_META_EN: Record<BlogCluster, { label: string; title: string; description: string }> = {
  naver: {
    label: "Naver",
    title: "Naver Marketing",
    description: "Guides on Naver Blog, Korean blogger reviews, Naver Place and reaching Korean tourists.",
  },
  website: {
    label: "Website",
    title: "Website & SEO",
    description: "Web design for spas, hotels, tours, online booking and conversion.",
  },
  maps: {
    label: "Google Maps",
    title: "Google Maps",
    description: "Google Business Profile, genuine reviews, local SEO and visibility optimization.",
  },
  social: {
    label: "Social",
    title: "Social Marketing",
    description: "Fanpage, social proof, channel growth and brand trust.",
  },
  qr: {
    label: "QR & Zalo",
    title: "QR Code & Zalo",
    description: "QR code activation, Zalo lead capture and offline-to-online data collection.",
  },
  general: {
    label: "Other",
    title: "General Knowledge",
    description: "Foundation guides supporting broader online marketing strategy.",
  },
};

function pageParamValue(
  searchParams: Record<string, string | string[] | undefined>,
  key: string,
  pageCount: number
) {
  const raw = searchParams[key];
  const value = Array.isArray(raw) ? raw[0] : raw;
  const page = Number.parseInt(value ?? "1", 10);
  if (!Number.isFinite(page)) return 1;
  return Math.min(Math.max(page, 1), pageCount);
}

function buildPageHref(
  searchParams: Record<string, string | string[] | undefined>,
  key: string,
  page: number,
  basePath: string
) {
  const nextParams = new URLSearchParams();
  for (const [paramKey, value] of Object.entries(searchParams)) {
    if (paramKey === key || value == null) continue;
    const paramValue = Array.isArray(value) ? value[0] : value;
    if (paramValue) nextParams.set(paramKey, paramValue);
  }
  if (page > 1) nextParams.set(key, String(page));
  const query = nextParams.toString();
  return `${basePath}${query ? `?${query}` : ""}#${key}`;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return buildMetadata({
      title: BLOG_HUB_EN.metaTitle,
      description: BLOG_HUB_EN.metaDescription,
      path: EN_PATH,
      locale: "en",
    });
  }
  if (locale !== "vi") return {};
  return buildMetadata({
    title: BLOG_HUB.metaTitle,
    description: BLOG_HUB.metaDescription,
    path: VI_PATH,
    locale: "vi",
  });
}

export default async function Page({ params, searchParams }: Params) {
  const { locale } = await params;
  if (locale !== "vi" && locale !== "en") notFound();
  const isEn = locale === "en";
  const currentSearchParams = (await searchParams) ?? {};
  const PATH = isEn ? EN_PATH : VI_PATH;
  const BREADCRUMB = isEn ? EN_BREADCRUMB : VI_BREADCRUMB;
  const hub = isEn ? BLOG_HUB_EN : BLOG_HUB;
  const CATEGORY_META = isEn ? CATEGORY_META_EN : CATEGORY_META_VI;
  const allPosts = isEn ? [...BLOG_POSTS_EN] : [...BLOG_POSTS];
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));
  const grouped = CATEGORY_ORDER.map((cluster) => ({
    key: cluster,
    label: CATEGORY_META[cluster].label,
    title: CATEGORY_META[cluster].title,
    description: CATEGORY_META[cluster].description,
    posts: posts.filter((post) => post.cluster === cluster),
  })).filter((group) => group.posts.length > 0);

  return (
    <Shell locale={locale as "vi" | "en"}>
      <JsonLd data={graphDocument([breadcrumbGraph(BREADCRUMB)])} />
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(37,99,235,0.11),transparent_34%),linear-gradient(180deg,#fff_0%,#f7f9ff_100%)]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <Container className="relative py-12 sm:py-16">
          <Breadcrumb items={BREADCRUMB} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl animate-rise">
              <p className="label-mono text-blue-600">{hub.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl text-balance">
                {hub.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {hub.heroSub}
              </p>
            </div>
            <div className="animate-rise lg:pb-2" style={{ animationDelay: "120ms" }}>
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {isEn
                  ? "Guides on Naver Marketing, Google Maps, website design and reaching Korean tourists — organized by topic for easy navigation."
                  : "Tổng hợp bài viết về Naver, Website, Google Maps và Social Marketing, sắp xếp theo từng cụm để bạn dễ theo dõi đúng chủ đề mình quan tâm."}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {grouped.map((group) => (
                  <Link
                    key={group.key}
                    href={`#${group.key}`}
                    className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-semibold text-ink-soft shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
                  >
                    {group.label}
                    <span className="ml-2 font-mono text-[11px] text-muted">{group.posts.length}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            {"intro" in hub && (
              <div className="rounded-[1.75rem] border border-line bg-white/85 p-5 shadow-soft">
                {(hub as typeof BLOG_HUB).intro.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-ink-soft not-first:mt-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <div className="rounded-[1.75rem] border border-line bg-white/85 p-5 shadow-soft">
              <p className="label-mono text-blue-600">{isEn ? "Start from the key service pages" : "Bắt đầu từ các trang trụ cột"}</p>
              <div className="mt-4 flex flex-col gap-3">
                {hub.focusLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-line px-4 py-3 transition-all hover:border-blue-200 hover:text-blue-700"
                  >
                    <span className="label-mono text-blue-600">{item.note}</span>
                    <span className="mt-1 block font-medium text-ink">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <div className="space-y-10">
            {grouped.map((group) => {
              const pageCount = Math.ceil(group.posts.length / PAGE_SIZE);
              const currentPage = pageParamValue(currentSearchParams, group.key, pageCount);
              const startIndex = (currentPage - 1) * PAGE_SIZE;
              const pagePosts = group.posts.slice(startIndex, startIndex + PAGE_SIZE);
              const previousPage = currentPage === 1 ? pageCount : currentPage - 1;
              const nextPage = currentPage === pageCount ? 1 : currentPage + 1;

              return (
                <section
                  key={group.key}
                  id={group.key}
                  className="scroll-mt-28 rounded-[2rem] border border-line bg-white p-5 shadow-soft sm:p-7"
                  aria-labelledby={`${group.key}-heading`}
                >
                  <div className="flex flex-col gap-5 border-b border-line pb-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="label-mono text-blue-600">{group.label}</p>
                      <h2
                        id={`${group.key}-heading`}
                        className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
                      >
                        {group.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        {group.posts.length} {isEn ? "posts" : "bài"} · {currentPage}/{pageCount}
                      </span>
                      <div className="flex rounded-full border border-line bg-paper p-1">
                        <Link
                          href={buildPageHref(currentSearchParams, group.key, previousPage, PATH)}
                          aria-label={isEn ? `Previous page of ${group.title}` : `Trang trước của ${group.title}`}
                          className="grid h-9 w-9 place-items-center rounded-full text-ink-soft transition-all hover:bg-white hover:text-blue-700 hover:shadow-soft"
                        >
                          <IconArrowRight className="h-4 w-4 rotate-180" />
                        </Link>
                        <Link
                          href={buildPageHref(currentSearchParams, group.key, nextPage, PATH)}
                          aria-label={isEn ? `Next page of ${group.title}` : `Trang sau của ${group.title}`}
                          className="grid h-9 w-9 place-items-center rounded-full text-ink-soft transition-all hover:bg-white hover:text-blue-700 hover:shadow-soft"
                        >
                          <IconArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {pagePosts.map((post) => (
                      <BlogCard
                        key={post.slug}
                        href={post.path}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        readingMinutes={post.readingMinutes}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </section>
    </Shell>
  );
}
