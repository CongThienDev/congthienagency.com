import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { BlogCard } from "@/components/Cards";
import { JsonLd } from "@/components/JsonLd";
import { IconArrowRight } from "@/components/Icons";
import { BLOG_HUB, BLOG_POSTS } from "@/content/blog.vi";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/blog";
const BREADCRUMB = [
  { label: "Trang chủ", href: "/vi" },
  { label: "Blog", href: PATH },
];
const WEBSITE_CLUSTER_PICKS = [
  { label: "Website khách sạn & homestay Hội An", href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an", note: "Spoke dịch vụ" },
  { label: "Website tour du lịch Hội An", href: "/vi/thiet-ke-website/website-tour-du-lich-hoi-an", note: "Spoke dịch vụ" },
  { label: "Website đa ngôn ngữ", href: "/vi/thiet-ke-website/website-da-ngon-ngu", note: "Spoke dịch vụ" },
  { label: "Website booking online", href: "/vi/thiet-ke-website/website-booking-online", note: "Spoke dịch vụ" },
  { label: "Website booking online cần những gì", href: "/vi/blog/website-booking-online-can-nhung-gi", note: "Bài blog" },
  { label: "Website đa ngôn ngữ cho khách quốc tế", href: "/vi/blog/website-da-ngon-ngu-cho-khach-quoc-te", note: "Bài blog" },
  { label: "Nên làm website hay chỉ dùng OTA/Facebook", href: "/vi/blog/nen-lam-website-hay-chi-dung-ota-facebook", note: "Bài blog" },
  { label: "Website khách sạn khác gì website spa", href: "/vi/blog/website-khach-san-khac-gi-website-spa", note: "Bài blog" },
];
const NAVER_CLUSTER_PICKS = [
  { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Spoke dịch vụ" },
  { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver", note: "Spoke dịch vụ" },
  { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Spoke dịch vụ" },
  { label: "Naver KOC", href: "/vi/naver-marketing/naver-koc", note: "Spoke dịch vụ" },
  { label: "Naver Place khác Naver Blog", href: "/vi/blog/naver-place-khac-naver-blog-the-nao", note: "Bài blog" },
  { label: "Bao lâu thì Naver có tín hiệu", href: "/vi/blog/bao-lau-thi-naver-co-tin-hieu", note: "Bài blog" },
  { label: "Cách đo hiệu quả chiến dịch Naver", href: "/vi/blog/cach-do-hieu-qua-chien-dich-naver", note: "Bài blog" },
  { label: "Chuẩn bị trước khi book blogger Hàn", href: "/vi/blog/ho-so-doanh-nghiep-truoc-khi-book-blogger-han", note: "Bài blog" },
];
const MAPS_CLUSTER_PICKS = [
  { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Spoke dịch vụ" },
  { label: "Xử lý không hiển thị trên Google Maps", href: "/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps", note: "Spoke dịch vụ" },
  { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc", note: "Spoke dịch vụ" },
  { label: "Tối ưu hình ảnh Google Maps", href: "/vi/google-maps-marketing/toi-uu-hinh-anh-google-maps", note: "Spoke dịch vụ" },
  { label: "Google Business Profile audit gồm những gì", href: "/vi/blog/google-business-profile-audit-gom-nhung-gi", note: "Bài blog" },
  { label: "Khi nào cần gộp hồ sơ trùng Google Maps", href: "/vi/blog/khi-nao-can-gop-ho-so-trung-google-maps", note: "Bài blog" },
  { label: "Website hỗ trợ Google Maps ra sao", href: "/vi/blog/website-ho-tro-google-maps-ra-sao", note: "Bài blog" },
  { label: "Quy trình xin review thật sau dịch vụ", href: "/vi/blog/quy-trinh-xin-review-that-sau-dich-vu", note: "Bài blog" },
];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  return buildMetadata({
    title: BLOG_HUB.metaTitle,
    description: BLOG_HUB.metaDescription,
    path: PATH,
    locale: "vi",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Shell locale="vi">
      <JsonLd data={graphDocument([breadcrumbGraph(BREADCRUMB)])} />
      <section className="bg-glow border-b border-line">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={BREADCRUMB} />
          <div className="mt-6 max-w-3xl animate-rise">
            <p className="label-mono text-blue-600">{BLOG_HUB.eyebrow}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl text-balance">
              {BLOG_HUB.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{BLOG_HUB.heroSub}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
            <div className="max-w-3xl">
              <p className="label-mono text-blue-600">Website cluster</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                Cụm Website mới
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Blog hub giờ nối trực tiếp sang cả spoke dịch vụ mới và các bài mới của cụm Website để tăng số điểm vào nội bộ cho nhóm chủ đề này.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WEBSITE_CLUSTER_PICKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-card border border-line bg-white p-4 transition-all hover:border-blue-200"
                >
                  <span className="label-mono text-blue-600">{item.note}</span>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-ink group-hover:text-blue-700">
                    {item.label}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700">
                    Xem liên kết
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-10 rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
            <div className="max-w-3xl">
              <p className="label-mono text-blue-600">Naver cluster</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                Cụm Naver mới
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Blog hub giờ nối trực tiếp sang các spoke thương mại mới và các bài mới của cụm Naver để tăng số điểm vào nội bộ cho nhóm chủ đề này.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {NAVER_CLUSTER_PICKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-card border border-line bg-white p-4 transition-all hover:border-blue-200"
                >
                  <span className="label-mono text-blue-600">{item.note}</span>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-ink group-hover:text-blue-700">
                    {item.label}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700">
                    Xem liên kết
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-10 rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
            <div className="max-w-3xl">
              <p className="label-mono text-blue-600">Google Maps cluster</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                Cụm Google Maps mới
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Blog hub giờ nối trực tiếp sang các spoke problem-solution mới và các bài mới của cụm Google Maps để tăng số điểm vào nội bộ cho nhóm chủ đề này.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MAPS_CLUSTER_PICKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-card border border-line bg-white p-4 transition-all hover:border-blue-200"
                >
                  <span className="label-mono text-blue-600">{item.note}</span>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-ink group-hover:text-blue-700">
                    {item.label}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700">
                    Xem liên kết
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard
                key={p.slug}
                href={p.path}
                title={p.title}
                excerpt={p.excerpt}
                date={p.date}
                readingMinutes={p.readingMinutes}
              />
            ))}
          </div>
        </Container>
      </section>
    </Shell>
  );
}
