import fs from "fs";
import path from "path";
import { BLOG_POSTS } from "@/content/blog.vi";
import { OG_IMAGE, SITE } from "@/content/site";
import { PROJECTS } from "@/content/projects.vi";
import { SERVICES } from "@/content/services.vi";

export type IndexablePage = {
  path: string;
  title: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  imageCandidates: string[];
};

const HOMEPAGE_IMAGES = [
  OG_IMAGE,
  "/images/hero/macbook-hero.jpg",
  "/images/illustrations/growth.webp",
  "/images/services/service-website.webp",
  "/images/services/service-naver.webp",
  "/images/services/service-maps.webp",
  "/images/services/service-social.webp",
  "/images/illustrations/spa.webp",
  "/images/illustrations/restaurant.webp",
  "/images/illustrations/homestay.webp",
  "/images/illustrations/cooking-class-tour.webp",
  "/logo/cong-thien-agency-signature-blue.svg",
];

const CORE_PAGE_IMAGES = [OG_IMAGE];

const VI_CORE_PAGES: IndexablePage[] = [
  { path: "/vi", title: "Công Thiên Agency", changeFrequency: "weekly", priority: 1, imageCandidates: HOMEPAGE_IMAGES },
  { path: "/vi/dich-vu", title: "Dịch vụ", changeFrequency: "weekly", priority: 0.8, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/gioi-thieu", title: "Giới thiệu", changeFrequency: "monthly", priority: 0.7, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/quy-trinh", title: "Quy trình", changeFrequency: "monthly", priority: 0.7, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/bang-gia", title: "Bảng giá", changeFrequency: "weekly", priority: 0.7, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/lien-he", title: "Liên hệ", changeFrequency: "monthly", priority: 0.6, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/du-an", title: "Dự án", changeFrequency: "weekly", priority: 0.8, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/blog", title: "Blog", changeFrequency: "weekly", priority: 0.8, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/cau-hoi-thuong-gap", title: "Câu hỏi thường gặp", changeFrequency: "weekly", priority: 0.75, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/tu-dien-marketing", title: "Từ điển Marketing", changeFrequency: "monthly", priority: 0.75, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/vi/ve-chung-toi", title: "Về chúng tôi — hồ sơ entity", changeFrequency: "monthly", priority: 0.8, imageCandidates: CORE_PAGE_IMAGES },
];

const EN_CORE_PAGES: IndexablePage[] = [
  { path: "/en", title: "Cong Thien Agency", changeFrequency: "weekly", priority: 0.9, imageCandidates: HOMEPAGE_IMAGES },
  { path: "/en/about", title: "About", changeFrequency: "monthly", priority: 0.7, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/en/services", title: "Services", changeFrequency: "weekly", priority: 0.8, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/en/pricing", title: "Pricing", changeFrequency: "weekly", priority: 0.7, imageCandidates: CORE_PAGE_IMAGES },
  { path: "/en/contact", title: "Contact", changeFrequency: "monthly", priority: 0.6, imageCandidates: CORE_PAGE_IMAGES },
];

function toPublicFile(assetPath: string) {
  return path.join(process.cwd(), "public", assetPath.replace(/^\//, ""));
}

export function assetExists(assetPath: string) {
  return assetPath.startsWith("/") && fs.existsSync(toPublicFile(assetPath));
}

export function resolveExistingImagePaths(imageCandidates: string[]) {
  return [...new Set(imageCandidates.filter(assetExists))];
}

export function resolveAbsoluteImageUrls(imageCandidates: string[]) {
  return resolveExistingImagePaths(imageCandidates).map((assetPath) => `${SITE.url}${assetPath}`);
}

export function resolvePrimaryImage(imageCandidates: string[], fallback = OG_IMAGE) {
  return resolveExistingImagePaths(imageCandidates)[0] ?? fallback;
}

export function getAllIndexablePages(): IndexablePage[] {
  const servicePages: IndexablePage[] = SERVICES.map((service) => ({
    path: service.path,
    title: service.metaTitle,
    changeFrequency: "weekly",
    priority: service.isPillar ? 0.8 : 0.75,
    imageCandidates: [OG_IMAGE, ...service.images.map((image) => image.suggestion)],
  }));

  const projectPages: IndexablePage[] = PROJECTS.map((project) => ({
    path: project.path,
    title: project.metaTitle,
    changeFrequency: "weekly",
    priority: 0.75,
    imageCandidates: [OG_IMAGE, ...project.images.map((image) => image.suggestion)],
  }));

  const blogPages: IndexablePage[] = BLOG_POSTS.map((post) => ({
    path: post.path,
    title: post.metaTitle,
    changeFrequency: "monthly",
    priority: 0.7,
    imageCandidates: [
      ...(post.heroImage ? [post.heroImage.src] : []),
      ...post.body.flatMap((block) => (block.type === "img" ? [block.src] : [])),
      OG_IMAGE,
    ],
  }));

  return [
    ...VI_CORE_PAGES,
    ...EN_CORE_PAGES,
    ...servicePages,
    ...projectPages,
    ...blogPages,
  ];
}
