export const SITE = {
  name: "Công Thiên Agency by CongThienDev",
  shortName: "Công Thiên Agency",
  brandTagline: "Marketing Online · Website · Naver · Google Maps",
  logoPath: "/brand/congthien-agency-logo.svg",
  founder: "Lê Công Thiên",
  domain: "congthienagency.com",
  url: "https://congthienagency.com",
  defaultLocale: "vi" as const,
  locales: ["vi", "en"] as const,
  description:
    "Công Thiên Agency cung cấp dịch vụ Marketing Online, Website, Naver Marketing và Google Maps Marketing cho doanh nghiệp tại Hội An – Đà Nẵng.",
  areaServed: ["Hội An", "Đà Nẵng", "Việt Nam"],
  contact: {
    phoneDisplay: "0934.868.001",
    phoneE164: "+84934868001",
    zalo: "https://zalo.me/+84934868001",
    whatsapp: "http://wa.me/+84367441259",
    email: "congthienjob@gmail.com",
    fanpage: "https://www.facebook.com/profile.php?id=61586650725601",
  },
  alternateNames: [
    "Cong Thien Agency",
    "Công Thiên Agency",
    "CongThienDev",
    "Công Thiên Marketing Online",
  ],
} as const;

export type Locale = (typeof SITE.locales)[number];

export const OG_IMAGE = "/images/og/og-default.jpg";
