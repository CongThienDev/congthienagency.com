import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { IconArrowRight } from "@/components/Icons";
import { SERVICES_OVERVIEW_VI, HOME_VI } from "@/content/pages.vi";
import { graphDocument, breadcrumbGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/dich-vu";
const WEBSITE_SPOKES = [
  { label: "Website khách sạn & homestay Hội An", href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an" },
  { label: "Website tour du lịch Hội An", href: "/vi/thiet-ke-website/website-tour-du-lich-hoi-an" },
  { label: "Website đa ngôn ngữ", href: "/vi/thiet-ke-website/website-da-ngon-ngu" },
  { label: "Website booking online", href: "/vi/thiet-ke-website/website-booking-online" },
];
const WEBSITE_ARTICLES = [
  { label: "Website booking online cần những gì", href: "/vi/blog/website-booking-online-can-nhung-gi" },
  { label: "Website đa ngôn ngữ cho khách quốc tế", href: "/vi/blog/website-da-ngon-ngu-cho-khach-quoc-te" },
  { label: "Nên làm website hay chỉ dùng OTA/Facebook", href: "/vi/blog/nen-lam-website-hay-chi-dung-ota-facebook" },
  { label: "Website khách sạn khác gì website spa", href: "/vi/blog/website-khach-san-khac-gi-website-spa" },
];
const NAVER_SPOKES = [
  { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog" },
  { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver" },
  { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place" },
  { label: "Naver KOC", href: "/vi/naver-marketing/naver-koc" },
  { label: "Bảng giá Naver chi tiết", href: "/vi/naver-marketing/bang-gia-chi-tiet" },
  { label: "Naver hay Google cho khách Hàn", href: "/vi/naver-marketing/naver-vs-google" },
];
const NAVER_ARTICLES = [
  { label: "Naver Place khác Naver Blog", href: "/vi/blog/naver-place-khac-naver-blog-the-nao" },
  { label: "Bao lâu thì Naver có tín hiệu", href: "/vi/blog/bao-lau-thi-naver-co-tin-hieu" },
  { label: "Cách đo hiệu quả chiến dịch Naver", href: "/vi/blog/cach-do-hieu-qua-chien-dich-naver" },
  { label: "Chuẩn bị trước khi book blogger Hàn", href: "/vi/blog/ho-so-doanh-nghiep-truoc-khi-book-blogger-han" },
];
const MAPS_SPOKES = [
  { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile" },
  { label: "Xử lý không hiển thị trên Google Maps", href: "/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps" },
  { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc" },
  { label: "Tối ưu hình ảnh Google Maps", href: "/vi/google-maps-marketing/toi-uu-hinh-anh-google-maps" },
];
const MAPS_ARTICLES = [
  { label: "Google Business Profile audit gồm những gì", href: "/vi/blog/google-business-profile-audit-gom-nhung-gi" },
  { label: "Khi nào cần gộp hồ sơ trùng Google Maps", href: "/vi/blog/khi-nao-can-gop-ho-so-trung-google-maps" },
  { label: "Website hỗ trợ Google Maps ra sao", href: "/vi/blog/website-ho-tro-google-maps-ra-sao" },
  { label: "Quy trình xin review thật sau dịch vụ", href: "/vi/blog/quy-trinh-xin-review-that-sau-dich-vu" },
];
const QR_PAGES = [
  { label: "Dịch vụ quét mã QR & tải app theo KPI", href: "/vi/quet-ma-qr" },
  { label: "Quét mã QR cho sự kiện & activation", href: "/vi/quet-ma-qr/cho-su-kien-activation" },
  { label: "Tải app & mở tài khoản theo KPI", href: "/vi/quet-ma-qr/tai-app-theo-kpi" },
  { label: "Quét mã Zalo thu lead tại điểm bán", href: "/vi/quet-ma-zalo-thu-lead" },
  { label: "Quét mã QR tại Đà Nẵng", href: "/vi/quet-ma-qr/da-nang" },
  { label: "Tuyển cộng tác viên quét mã QR", href: "/vi/quet-ma-qr/tuyen-cong-tac-vien" },
];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "vi") return {};
  const c = SERVICES_OVERVIEW_VI;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: PATH,
    locale: "vi",
    alternateKey: "services",
  });
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();
  const c = SERVICES_OVERVIEW_VI;

  return (
    <Shell locale="vi" alternateKey="services">
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
          <SectionHeader {...HOME_VI.servicesIntro} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_VI.services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Website"
            title="Mở rộng cụm Website"
            sub="Nối trực tiếp từ hub dịch vụ sang cả spoke mới và bài hỗ trợ mới để tăng tín hiệu internal linking cho cluster Website."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="label-mono text-blue-600">Spoke dịch vụ</p>
              <div className="mt-4 flex flex-col gap-3">
                {WEBSITE_SPOKES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:border-blue-200"
                  >
                    <span className="font-medium text-ink group-hover:text-blue-700">{item.label}</span>
                    <IconArrowRight className="h-4 w-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="label-mono text-blue-600">Bài hỗ trợ intent</p>
              <div className="mt-4 flex flex-col gap-3">
                {WEBSITE_ARTICLES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:border-blue-200"
                  >
                    <span className="font-medium text-ink group-hover:text-blue-700">{item.label}</span>
                    <IconArrowRight className="h-4 w-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Naver"
            title="Mở rộng cụm Naver"
            sub="Nối trực tiếp từ hub dịch vụ sang các spoke thương mại mới và bài hỗ trợ mới để tăng tín hiệu internal linking cho cluster Naver."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="label-mono text-blue-600">Spoke dịch vụ</p>
              <div className="mt-4 flex flex-col gap-3">
                {NAVER_SPOKES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:border-blue-200"
                  >
                    <span className="font-medium text-ink group-hover:text-blue-700">{item.label}</span>
                    <IconArrowRight className="h-4 w-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="label-mono text-blue-600">Bài hỗ trợ intent</p>
              <div className="mt-4 flex flex-col gap-3">
                {NAVER_ARTICLES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:border-blue-200"
                  >
                    <span className="font-medium text-ink group-hover:text-blue-700">{item.label}</span>
                    <IconArrowRight className="h-4 w-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Google Maps"
            title="Mở rộng cụm Google Maps"
            sub="Nối trực tiếp từ hub dịch vụ sang các spoke problem-solution mới và bài hỗ trợ mới để tăng tín hiệu internal linking cho cluster Google Maps."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="label-mono text-blue-600">Spoke dịch vụ</p>
              <div className="mt-4 flex flex-col gap-3">
                {MAPS_SPOKES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:border-blue-200"
                  >
                    <span className="font-medium text-ink group-hover:text-blue-700">{item.label}</span>
                    <IconArrowRight className="h-4 w-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="label-mono text-blue-600">Bài hỗ trợ intent</p>
              <div className="mt-4 flex flex-col gap-3">
                {MAPS_ARTICLES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:border-blue-200"
                  >
                    <span className="font-medium text-ink group-hover:text-blue-700">{item.label}</span>
                    <IconArrowRight className="h-4 w-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Quét mã QR"
            title="Cụm Quét mã QR & Activation"
            sub="Nhận triển khai chiến dịch quét mã QR / tải app theo KPI cho agency, và tuyển cộng tác viên trực tiếp thực thi — hai điểm vào nội bộ cho cluster Quét mã QR."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {QR_PAGES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-card border border-line bg-white px-5 py-4 shadow-soft transition-all hover:border-blue-200"
              >
                <span className="font-medium text-ink group-hover:text-blue-700">{item.label}</span>
                <IconArrowRight className="h-4 w-4 text-blue-700 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Không chắc nên bắt đầu từ đâu?"
        sub="Nhắn tôi qua Zalo để được tư vấn lộ trình phù hợp với ngân sách và mục tiêu của bạn."
        primaryHref="/vi/lien-he"
        primaryLabel="Nhận tư vấn"
      />
    </Shell>
  );
}
