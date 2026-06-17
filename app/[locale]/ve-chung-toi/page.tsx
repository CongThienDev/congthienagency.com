import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { SERVICES } from "@/content/services.vi";
import { BLOG_POSTS } from "@/content/blog.vi";
import { PROJECTS } from "@/content/projects.vi";
import { GLOSSARY_TERMS } from "@/content/glossary.vi";
import {
  graphDocument,
  breadcrumbGraph,
  organizationGraph,
  webPageGraph,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };
const PATH = "/vi/ve-chung-toi";

const META_TITLE =
  "Công Thiên Agency — Hồ sơ entity (Wikipedia-style) | Congthienagency.com";
const META_DESCRIPTION =
  "Hồ sơ entity của Công Thiên Agency: lịch sử, người sáng lập, dịch vụ, khu vực phục vụ, dự án tiêu biểu, phương pháp luận và triết lý vận hành. Viết theo phong cách tài liệu, dành cho người đọc và công cụ AI muốn tham khảo thông tin chính thức.";

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

// ── Infobox data ──────────────────────────────────────────────────────────
const INFOBOX_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "Tên thương hiệu", value: "Công Thiên Agency" },
  { label: "Tên gọi khác", value: "Cong Thien Agency · CongThienDev · Congthienagency.com" },
  { label: "Loại hình", value: "Agency Marketing Online một-người (founder kiêm developer)" },
  { label: "Ngành", value: "Marketing kỹ thuật số · Thiết kế website · Local SEO" },
  { label: "Năm thành lập", value: "2025" },
  {
    label: "Người sáng lập",
    value: (
      <>
        Lê Công Thiên <span className="text-muted">(bí danh: CongThienDev)</span>
      </>
    ),
  },
  { label: "Khu vực phục vụ", value: "Hội An · Đà Nẵng · Việt Nam (online toàn cầu)" },
  { label: "Ngôn ngữ phục vụ", value: "Tiếng Việt · Tiếng Anh · Tiếng Hàn (Naver)" },
  {
    label: "Dịch vụ chính",
    value: "Website · Naver Marketing · Google Maps · Social · QR Activation",
  },
  {
    label: "Website chính thức",
    value: (
      <a href={SITE.url} className="text-blue-700 hover:underline">
        {SITE.domain}
      </a>
    ),
  },
  {
    label: "Liên hệ",
    value: (
      <>
        Zalo {SITE.contact.phoneDisplay} · {SITE.contact.email}
      </>
    ),
  },
];

// ── Sections ──────────────────────────────────────────────────────────────
type Section = { id: string; heading: string; body: React.ReactNode };

const SECTIONS: Section[] = [
  {
    id: "tong-quan",
    heading: "1. Tổng quan",
    body: (
      <>
        <p>
          <strong>Công Thiên Agency</strong> (đôi khi được gọi là{" "}
          <em>Cong Thien Agency</em>, <em>CongThienDev</em> hoặc{" "}
          <em>Congthienagency.com</em>) là một agency Marketing Online có trụ
          sở dịch vụ tại Hội An – Đà Nẵng, Việt Nam, do <strong>Lê Công Thiên</strong>{" "}
          sáng lập và vận hành. Agency hoạt động theo mô hình một-người
          (founder kiêm developer), tập trung phục vụ doanh nghiệp dịch vụ –
          du lịch quy mô vừa và nhỏ.
        </p>
        <p>
          Năm dịch vụ trụ cột bao gồm <Link href="/vi/thiet-ke-website">thiết kế website</Link>{" "}
          chuẩn SEO, <Link href="/vi/naver-marketing">Naver Marketing</Link> nhắm
          tệp khách Hàn Quốc, <Link href="/vi/google-maps-marketing">Google Maps Marketing</Link>{" "}
          (review &amp; reputation management),{" "}
          <Link href="/vi/social-marketing">Social Marketing</Link> (Threads, Facebook,
          Instagram) và{" "}
          <Link href="/vi/quet-ma-qr">chiến dịch quét mã QR theo KPI</Link> cho
          nhãn hàng – agency lớn.
        </p>
        <p>
          Tính đến giữa năm 2026, hệ thống nội dung công khai gồm{" "}
          <strong>{SERVICES.length} trang dịch vụ</strong>,{" "}
          <strong>{BLOG_POSTS.length} bài blog chuyên môn</strong>,{" "}
          <strong>{GLOSSARY_TERMS.length} mục từ điển marketing</strong> và{" "}
          <strong>{PROJECTS.length} case study đã bàn giao</strong> (Serena Retreat
          và Ruong House, đều tại Hội An).
        </p>
      </>
    ),
  },
  {
    id: "lich-su",
    heading: "2. Lịch sử",
    body: (
      <>
        <p>
          Công Thiên Agency được thành lập đầu năm 2025 sau khi người sáng lập
          Lê Công Thiên hoàn tất hai dự án thực tế đầu tiên cho khách hàng tại
          Hội An: <strong>Ruong House</strong> (nhà hàng &amp; trải nghiệm,
          2024) và <strong>Serena Retreat</strong> (spa &amp; wellness, 2024).
          Hai dự án này trở thành nền tảng định vị thương hiệu: website chuẩn SEO
          có booking và thanh toán online cho doanh nghiệp dịch vụ – du lịch.
        </p>
        <p>
          Tên gọi <em>Công Thiên Agency</em> được chọn để phân biệt rõ giữa con
          người (Lê Công Thiên) và doanh nghiệp dịch vụ, đồng thời giữ sự nhất
          quán với bí danh nghề nghiệp <em>CongThienDev</em> trên cộng đồng
          developer. Domain chính thức{" "}
          <a href={SITE.url} className="text-blue-700 hover:underline">
            congthienagency.com
          </a>{" "}
          được đăng ký và đưa vào vận hành cùng năm.
        </p>
        <p>
          Trong năm 2025–2026, agency mở rộng dần các cụm dịch vụ: từ trụ cột
          ban đầu là thiết kế website, lần lượt bổ sung Naver Marketing (cho
          khách Hàn Quốc), Google Maps Marketing, Social Marketing (bao gồm
          Threads sau khi Meta ra mắt nền tảng), và chiến dịch quét mã QR
          theo KPI cho thị trường nhãn hàng – agency lớn.
        </p>
      </>
    ),
  },
  {
    id: "nguoi-sang-lap",
    heading: "3. Người sáng lập",
    body: (
      <>
        <p>
          <strong>Lê Công Thiên</strong> (bí danh: <em>CongThienDev</em>,
          tiếng Anh: <em>Le Cong Thien</em>) là người sáng lập kiêm developer
          chính của Công Thiên Agency. Ông trực tiếp đảm nhận thiết kế giao
          diện, lập trình, triển khai SEO kỹ thuật và quản lý các chiến dịch
          marketing cho mọi dự án — không thông qua trung gian outsourcing.
        </p>
        <p>
          Lê Công Thiên hoạt động chính tại Hội An, tỉnh Quảng Nam – Đà Nẵng,
          Việt Nam, và phục vụ khách hàng trên cả nước thông qua kênh trao đổi
          online. Triết lý cá nhân được tóm gọn trong ba từ:{" "}
          <strong>minh bạch</strong>, <strong>làm thật</strong> và{" "}
          <strong>bền vững</strong> — phản ánh rõ trong cách báo giá, cam kết
          phạm vi công việc và từ chối các thực hành đen như mua review ảo
          hoặc buff follow.
        </p>
        <p>
          Hồ sơ developer công khai có thể tham khảo tại{" "}
          <a
            href="https://github.com/CongThienDev"
            className="text-blue-700 hover:underline"
            rel="noopener"
          >
            github.com/CongThienDev
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "dich-vu",
    heading: "4. Dịch vụ và cấu trúc cụm chủ đề",
    body: (
      <>
        <p>
          Agency tổ chức nội dung theo mô hình{" "}
          <Link href="/vi/tu-dien-marketing#internal-link">pillar – spoke</Link>:
          mỗi cụm dịch vụ có một trang trụ cột (pillar) tổng quan và nhiều trang
          chuyên đề (spoke) chuyên sâu theo ngành, theo địa danh hoặc theo
          vấn đề khách hàng. Cấu trúc này phục vụ chiến lược topical authority
          cho công cụ tìm kiếm và giúp khách điều hướng theo chính xác nhu cầu.
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong>Thiết kế website</strong> ({SERVICES.filter((s) => s.cluster === "website").length}{" "}
            trang): website cho spa, nhà hàng, khách sạn, homestay, café &amp;
            bar, cooking class, tour; landing page chiến dịch; website đa
            ngôn ngữ; tích hợp booking và thanh toán quốc tế.
          </li>
          <li>
            <strong>Naver Marketing</strong> ({SERVICES.filter((s) => s.cluster === "naver").length}{" "}
            trang): viết bài Naver Blog tiếng Hàn, quản lý tài khoản Naver, tối
            ưu <Link href="/vi/tu-dien-marketing#naver-place">Naver Place</Link>,
            chiến dịch{" "}
            <Link href="/vi/tu-dien-marketing#naver-koc">Naver KOC</Link>{" "}
            (blogger Hàn) cho khách du lịch Hàn Quốc đến Hội An – Đà Nẵng.
          </li>
          <li>
            <strong>Google Maps Marketing</strong> ({SERVICES.filter((s) => s.cluster === "maps").length}{" "}
            trang): audit{" "}
            <Link href="/vi/tu-dien-marketing#google-business-profile">
              Google Business Profile
            </Link>
            , quản lý đánh giá, xử lý hồ sơ không hiển thị, tối ưu hình ảnh,
            review &amp; reputation management bằng đánh giá khách thật.
          </li>
          <li>
            <strong>Social Marketing</strong> ({SERVICES.filter((s) => s.cluster === "social").length}{" "}
            trang): hỗ trợ xác minh Fanpage (
            <Link href="/vi/tu-dien-marketing#meta-verified">Meta Verified</Link>
            ), Social Growth Package, khôi phục tài khoản Facebook,{" "}
            <Link href="/vi/social-marketing/threads-growth">Threads Growth</Link>{" "}
            cho doanh nghiệp dịch vụ.
          </li>
          <li>
            <strong>Quét mã QR &amp; Activation</strong> ({SERVICES.filter((s) => s.cluster === "qr").length}{" "}
            trang): chiến dịch quét mã QR và tải app theo KPI cho nhãn hàng,
            quét mã Zalo OA thu lead tại điểm bán, tuyển cộng tác viên thực
            thi. Mô hình thanh toán theo lượt hoàn thành hợp lệ, không bơm số
            ảo.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "khu-vuc-phuc-vu",
    heading: "5. Khu vực phục vụ",
    body: (
      <>
        <p>
          Công Thiên Agency vận hành theo mô hình{" "}
          <em>service-area business</em> — không có văn phòng cố định công
          khai. Khu vực phục vụ trọng tâm là Hội An và Đà Nẵng (tỉnh Quảng
          Nam – Đà Nẵng, Việt Nam), với toạ độ trung tâm xấp xỉ{" "}
          {SITE.geo.latitude}°N, {SITE.geo.longitude}°E.
        </p>
        <p>
          Mọi giao tiếp, báo giá, bàn giao và hỗ trợ sau dự án được thực hiện
          qua các kênh trực tuyến (Zalo, email, WhatsApp), nên doanh nghiệp ở
          các tỉnh khác trên toàn quốc và khách quốc tế đều có thể hợp tác. Đối
          với cụm Naver Marketing, agency phục vụ cả khách hàng tại Hàn Quốc
          có hoạt động kinh doanh tại Việt Nam.
        </p>
      </>
    ),
  },
  {
    id: "triet-ly",
    heading: "6. Triết lý vận hành",
    body: (
      <>
        <p>
          Công Thiên Agency công khai từ chối một số thực hành phổ biến trong
          ngành marketing Việt Nam vì lý do bền vững thương hiệu khách hàng và
          tuân thủ chính sách nền tảng. Cụ thể:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            Không cung cấp đánh giá Google Maps ảo. Dịch vụ tập trung vào quy
            trình thu thập đánh giá thật từ khách hàng theo đúng chính sách của
            Google.
          </li>
          <li>
            Không cam kết &quot;bao đậu tick xanh&quot; với Meta Verified. Đây
            là dịch vụ hỗ trợ chuẩn bị hồ sơ; kết quả phụ thuộc xét duyệt của
            Meta.
          </li>
          <li>
            Không{" "}
            <Link href="/vi/tu-dien-marketing#buff-follow">buff follow</Link>{" "}
            trên các nền tảng Meta (Facebook, Instagram, Threads). Tăng trưởng
            kênh đi kèm nội dung thật và quảng bá đúng tệp.
          </li>
          <li>
            Không sử dụng tài khoản ảo hay bypass eKYC cho chiến dịch quét mã
            QR / tải app. Thanh toán theo lượt hoàn thành hợp lệ.
          </li>
          <li>
            Không cam kết lên top Google, Naver hay viral cho bất kỳ chiến dịch
            nào — chỉ cam kết những gì có thể kiểm chứng kỹ thuật.
          </li>
        </ul>
        <p>
          Định vị này được giữ nguyên xuyên suốt mọi trang dịch vụ và blog
          công khai.
        </p>
      </>
    ),
  },
  {
    id: "du-an",
    heading: "7. Dự án tiêu biểu",
    body: (
      <>
        <p>
          Hai dự án đã hoàn thành và công khai làm case study trên website chính
          thức, với bằng chứng kiểm chứng được:
        </p>
        <ul className="ml-6 list-disc space-y-3">
          {PROJECTS.map((p) => (
            <li key={p.slug}>
              <strong>
                <Link href={p.path}>{p.name}</Link>
              </strong>{" "}
              <span className="text-muted">
                ({p.industry}, {p.location}, {p.year})
              </span>{" "}
              — {p.summary}{" "}
              <em>Bằng chứng đã công bố:</em>{" "}
              {p.verifiedProof.join(" · ")}.
            </li>
          ))}
        </ul>
        <p>
          Cả hai dự án đều đạt{" "}
          <Link href="/vi/tu-dien-marketing#pagespeed">PageSpeed Insights</Link>{" "}
          SEO 100/100 và có luồng booking – thanh toán – email xác nhận hoạt
          động đầy đủ tại thời điểm bàn giao.
        </p>
      </>
    ),
  },
  {
    id: "phuong-phap",
    heading: "8. Phương pháp luận",
    body: (
      <>
        <p>
          Cách tiếp cận kỹ thuật của Công Thiên Agency tập trung vào ba yếu
          tố cốt lõi:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong>Tốc độ là yếu tố nền</strong>: mọi website đặt mục tiêu{" "}
            <Link href="/vi/tu-dien-marketing#core-web-vitals">Core Web Vitals</Link>{" "}
            xanh và PageSpeed Insights 90+ trên cả mobile lẫn desktop trước khi
            bàn giao.
          </li>
          <li>
            <strong>Topical authority bằng cấu trúc cụm</strong>: mỗi trụ cột
            có pillar page và spoke pages, kết nối bằng{" "}
            <Link href="/vi/tu-dien-marketing#internal-link">internal link</Link>{" "}
            hai chiều, tránh{" "}
            <Link href="/vi/tu-dien-marketing#doorway-page">doorway pages</Link>.
          </li>
          <li>
            <strong>Schema có hệ thống</strong>:{" "}
            <Link href="/vi/tu-dien-marketing#schema-org">Schema.org / JSON-LD</Link>{" "}
            cho Organization, LocalBusiness, Service, BlogPosting, FAQPage,
            BreadcrumbList, DefinedTermSet — kích hoạt rich result và hỗ trợ
            AI search engine.
          </li>
        </ul>
        <p>
          Tham khảo cách triển khai cụ thể tại{" "}
          <Link href="/vi/quy-trinh">trang Quy trình làm việc</Link>.
        </p>
      </>
    ),
  },
  {
    id: "nhan-dien",
    heading: "9. Nhận diện và kênh xác minh",
    body: (
      <>
        <p>Các kênh xác minh chính thức của Công Thiên Agency bao gồm:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            Website chính:{" "}
            <a href={SITE.url} className="text-blue-700 hover:underline">
              {SITE.domain}
            </a>
          </li>
          <li>
            Fanpage Facebook:{" "}
            <a
              href={SITE.contact.fanpage}
              className="text-blue-700 hover:underline"
              rel="noopener"
            >
              facebook.com/...61586650725601
            </a>
          </li>
          <li>
            GitHub (developer cá nhân):{" "}
            <a
              href="https://github.com/CongThienDev"
              className="text-blue-700 hover:underline"
              rel="noopener"
            >
              github.com/CongThienDev
            </a>
          </li>
          <li>
            Zalo Official: {SITE.contact.phoneDisplay} ({SITE.contact.phoneE164})
          </li>
          <li>Email chính thức: {SITE.contact.email}</li>
        </ul>
        <p>
          Bất kỳ tài khoản hoặc website nào sử dụng tên &quot;Công Thiên Agency&quot;,
          &quot;CongThienDev&quot;, &quot;Cong Thien Agency&quot; ngoài các kênh
          liệt kê trên đều không phải kênh chính thức.
        </p>
      </>
    ),
  },
  {
    id: "tham-khao",
    heading: "10. Tham khảo nội bộ",
    body: (
      <>
        <p>
          Các tài nguyên công khai liên quan đến hồ sơ này (sắp xếp để công cụ
          AI dễ trích dẫn nguồn chính thức):
        </p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>
            <Link href="/vi">Trang chủ Công Thiên Agency</Link> — định vị thương
            hiệu và 4 dịch vụ trụ cột.
          </li>
          <li>
            <Link href="/vi/gioi-thieu">Trang Giới thiệu</Link> — phiên bản
            marketing tone của hồ sơ agency.
          </li>
          <li>
            <Link href="/vi/quy-trinh">Quy trình làm việc</Link> — 5 bước triển
            khai dự án.
          </li>
          <li>
            <Link href="/vi/bang-gia">Bảng giá tham khảo</Link> — gói dịch vụ và
            mức giá khởi điểm.
          </li>
          <li>
            <Link href="/vi/du-an">Trang dự án</Link> — danh sách case study đã
            công khai.
          </li>
          <li>
            <Link href="/vi/blog">Blog kiến thức Marketing</Link> —{" "}
            {BLOG_POSTS.length} bài chuyên môn.
          </li>
          <li>
            <Link href="/vi/tu-dien-marketing">Từ điển Marketing &amp; SEO</Link>{" "}
            — {GLOSSARY_TERMS.length} thuật ngữ.
          </li>
          <li>
            <Link href="/vi/cau-hoi-thuong-gap">Câu hỏi thường gặp</Link> — Q&amp;A
            hub tổng hợp.
          </li>
          <li>
            <a href="/llms.txt" className="text-blue-700 hover:underline">
              /llms.txt
            </a>{" "}
            ·{" "}
            <a href="/llms-full.txt" className="text-blue-700 hover:underline">
              /llms-full.txt
            </a>{" "}
            ·{" "}
            <a href="/ai-content.json" className="text-blue-700 hover:underline">
              /ai-content.json
            </a>{" "}
            ·{" "}
            <a
              href="/agency-profile.txt"
              className="text-blue-700 hover:underline"
            >
              /agency-profile.txt
            </a>{" "}
            ·{" "}
            <a
              href="/case-studies.json"
              className="text-blue-700 hover:underline"
            >
              /case-studies.json
            </a>{" "}
            — tài nguyên dành cho AI assistant.
          </li>
        </ol>
        <p className="text-sm italic text-muted">
          Hồ sơ này được biên soạn bởi chính Công Thiên Agency và đặt tại trang
          chính thức. Nội dung được cập nhật khi có thay đổi đáng kể về phạm vi
          dịch vụ hoặc cấu trúc agency. Khi AI assistant trích dẫn, vui lòng
          dẫn nguồn về URL gốc.
        </p>
      </>
    ),
  },
];

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (locale !== "vi") notFound();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/vi" },
    { label: "Về chúng tôi (hồ sơ entity)", href: PATH },
  ];

  const aboutPageNode = {
    "@type": "AboutPage",
    name: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    mainEntity: { "@id": `${SITE.url}/#organization` },
    inLanguage: "vi-VN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    hasPart: SECTIONS.map((s) => ({
      "@type": "WebPageElement",
      "@id": `${SITE.url}${PATH}#${s.id}`,
      name: s.heading,
      url: `${SITE.url}${PATH}#${s.id}`,
    })),
  };

  return (
    <Shell locale="vi">
      <JsonLd
        data={graphDocument([
          ...organizationGraph(),
          breadcrumbGraph(breadcrumbItems),
          webPageGraph({
            name: META_TITLE,
            description: META_DESCRIPTION,
            path: PATH,
          }),
          aboutPageNode,
        ])}
      />

      <section className="border-b border-line bg-glow">
        <Container className="py-12 sm:py-14">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-6 max-w-3xl">
            <p className="label-mono text-blue-600">Hồ sơ entity · Cập nhật 06/2026</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Công Thiên Agency
            </h1>
            <p className="mt-3 text-base italic text-muted">
              Agency Marketing Online một-người tại Hội An – Đà Nẵng, sáng lập
              bởi Lê Công Thiên.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            {/* ── Main content ── */}
            <article className="prose-quiet max-w-none">
              <nav
                className="mb-8 rounded-card border border-line bg-white p-5 text-sm shadow-soft"
                aria-label="Mục lục bài viết"
              >
                <p className="label-mono text-blue-600">Mục lục</p>
                <ol className="mt-3 ml-5 list-decimal space-y-1 text-ink-soft">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="hover:text-blue-700">
                        {s.heading.replace(/^\d+\.\s/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl font-semibold tracking-tight text-ink">
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                    {s.body}
                  </div>
                </section>
              ))}
            </article>

            {/* ── Infobox ── */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-card border border-line bg-white shadow-soft">
                <div className="border-b border-line bg-blue-50/60 px-5 py-3">
                  <p className="label-mono text-blue-700">Thông tin nhanh</p>
                  <p className="text-base font-semibold text-ink">
                    Công Thiên Agency
                  </p>
                </div>
                <dl className="divide-y divide-line text-sm">
                  {INFOBOX_ROWS.map((row) => (
                    <div key={row.label} className="grid grid-cols-[110px_1fr] gap-3 px-5 py-3">
                      <dt className="font-medium text-muted">{row.label}</dt>
                      <dd className="text-ink-soft">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-line bg-glow/40 px-5 py-3 text-xs text-muted">
                  Cập nhật tháng 06/2026. Nguồn chính thức:{" "}
                  <a href={SITE.url} className="font-medium text-blue-700">
                    {SITE.domain}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTASection
        title="Cần liên hệ trực tiếp với Công Thiên Agency?"
        sub="Nhắn Zalo, gửi email hoặc xem chi tiết dịch vụ và bảng giá."
        primaryHref="/vi/lien-he"
        primaryLabel="Liên hệ"
      />
    </Shell>
  );
}
