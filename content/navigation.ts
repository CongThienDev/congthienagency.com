export type NavItem = {
  label: string;
  href: string;
};

export const NAV_VI: NavItem[] = [
  { label: "Dịch vụ", href: "/vi/dich-vu" },
  { label: "Website", href: "/vi/thiet-ke-website" },
  { label: "Naver Marketing", href: "/vi/naver-marketing" },
  { label: "Google Maps", href: "/vi/google-maps-marketing" },
  { label: "Quét mã QR", href: "/vi/quet-ma-qr" },
  { label: "Portfolio", href: "/vi/du-an" },
  { label: "Bảng giá", href: "/vi/bang-gia" },
  { label: "Blog", href: "/vi/blog" },
  { label: "Liên hệ", href: "/vi/lien-he" },
];

export const NAV_EN: NavItem[] = [
  { label: "Services", href: "/en/services" },
  { label: "Pricing", href: "/en/pricing" },
  { label: "About", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

export const FOOTER_VI = {
  services: [
    { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
    { label: "Landing page chiến dịch", href: "/vi/thiet-ke-website/landing-page-chien-dich" },
    { label: "Naver Marketing", href: "/vi/naver-marketing" },
    { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing" },
    { label: "Social Marketing", href: "/vi/social-marketing" },
    { label: "Threads Growth", href: "/vi/social-marketing/threads-growth" },
    { label: "Dịch vụ quét mã QR", href: "/vi/quet-ma-qr" },
    { label: "Quét mã Zalo thu lead", href: "/vi/quet-ma-zalo-thu-lead" },
  ],
  industries: [
    { label: "Website spa Hội An", href: "/vi/thiet-ke-website/spa-hoi-an" },
    { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an" },
    { label: "Website café & bar Hội An", href: "/vi/thiet-ke-website/website-cafe-bar-hoi-an" },
    { label: "Website cooking class Hội An", href: "/vi/thiet-ke-website/cooking-class-hoi-an" },
    { label: "Naver cho spa", href: "/vi/naver-marketing/cho-spa" },
    { label: "Tuyển CTV quét mã QR", href: "/vi/quet-ma-qr/tuyen-cong-tac-vien" },
  ],
  company: [
    { label: "Giới thiệu", href: "/vi/gioi-thieu" },
    { label: "Quy trình", href: "/vi/quy-trinh" },
    { label: "Bảng giá", href: "/vi/bang-gia" },
    { label: "Dự án", href: "/vi/du-an" },
    { label: "Blog", href: "/vi/blog" },
    { label: "Liên hệ", href: "/vi/lien-he" },
  ],
};

/** Maps a path to its counterpart in other locales for hreflang + language switcher. */
export const LOCALE_ALTERNATES: Record<string, Partial<Record<"vi" | "en", string>>> = {
  home: { vi: "/vi", en: "/en" },
  about: { vi: "/vi/gioi-thieu", en: "/en/about" },
  services: { vi: "/vi/dich-vu", en: "/en/services" },
  pricing: { vi: "/vi/bang-gia", en: "/en/pricing" },
  contact: { vi: "/vi/lien-he", en: "/en/contact" },
};
