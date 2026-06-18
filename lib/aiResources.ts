import { BLOG_POSTS } from "@/content/blog.vi";
import { PROJECTS } from "@/content/projects.vi";
import { SERVICES } from "@/content/services.vi";
import { SITE } from "@/content/site";

export function abs(sitePath: string): string {
  return sitePath.startsWith("http") ? sitePath : `${SITE.url}${sitePath}`;
}

export const AI_ROOT_RESOURCES = {
  llmsTxt: abs("/llms.txt"),
  llmsFullTxt: abs("/llms-full.txt"),
  aiContentJson: abs("/ai-content.json"),
  caseStudiesJson: abs("/case-studies.json"),
  agencyProfileTxt: abs("/agency-profile.txt"),
  sitemapXml: abs("/sitemap.xml"),
  imageSitemapXml: abs("/image-sitemap.xml"),
  entityProfilePage: abs("/vi/ve-chung-toi"),
  servicesPage: abs("/vi/dich-vu"),
  projectsPage: abs("/vi/du-an"),
  blogPage: abs("/vi/blog"),
  faqPage: abs("/vi/cau-hoi-thuong-gap"),
  glossaryPage: abs("/vi/tu-dien-marketing"),
};

export const AI_PILLARS = [
  {
    cluster: "website",
    url: abs("/vi/thiet-ke-website"),
    label: "Thiết kế website",
    summary:
      "Website chuẩn SEO, tốc độ cao, có booking và thanh toán online cho doanh nghiệp dịch vụ.",
  },
  {
    cluster: "naver",
    url: abs("/vi/naver-marketing"),
    label: "Naver Marketing",
    summary:
      "Naver Blog, Naver Place và Korean KOC để tiếp cận khách Hàn Quốc trước khi họ đặt dịch vụ.",
  },
  {
    cluster: "maps",
    url: abs("/vi/google-maps-marketing"),
    label: "Google Maps Marketing",
    summary:
      "Google Business Profile, Local SEO, review thật và reputation cho doanh nghiệp địa phương.",
  },
  {
    cluster: "social",
    url: abs("/vi/social-marketing"),
    label: "Social Marketing",
    summary:
      "Threads Growth, Meta Verified support, fanpage verification và social growth theo hướng bền vững.",
  },
  {
    cluster: "qr",
    url: abs("/vi/quet-ma-qr"),
    label: "Quét mã QR & Activation",
    summary:
      "Campaign quét mã QR, tải app theo KPI và lead capture tại điểm bán bằng cộng tác viên thật.",
  },
];

const HIGHLIGHT_BLOG_SLUGS = [
  "naver-marketing-la-gi",
  "vi-sao-khach-han-dung-naver",
  "naver-hay-google-cho-khach-han",
  "chi-phi-naver-marketing",
  "local-seo-la-gi",
  "cach-len-top-google-maps",
  "cach-co-them-danh-gia-google-that",
  "phan-hoi-danh-gia-tieu-cuc-google",
  "tai-sao-doanh-nghiep-can-website-rieng",
  "pagespeed-seo-100-nghia-la-gi",
  "landing-page-la-gi-khi-nao-doanh-nghiep-can",
  "bao-tri-website-doanh-nghiep-can-lam-gi",
];

export const AI_HIGHLIGHT_BLOGS = HIGHLIGHT_BLOG_SLUGS.map((slug) => BLOG_POSTS.find((post) => post.slug === slug)).filter(
  (post): post is (typeof BLOG_POSTS)[number] => Boolean(post)
);

export const AI_FEATURED_CASE_STUDIES = PROJECTS.map((project) => ({
  name: project.name,
  url: abs(project.path),
  summary: project.summary,
}));

export const AI_COUNTS = {
  services: SERVICES.length,
  blogPosts: BLOG_POSTS.length,
  caseStudies: PROJECTS.length,
};
