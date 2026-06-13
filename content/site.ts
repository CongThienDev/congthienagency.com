export const SITE = {
  name: "Công Thiên Agency by CongThienDev",
  shortName: "Công Thiên Agency",
  brandTagline: "Marketing Online · Website · Naver · Google Maps",
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
    whatsapp:
      "https://wa.me/84367441259?text=Ch%C3%A0o%20em%2C%20anh%2Fch%E1%BB%8B%20c%E1%BA%A7n%20t%C6%B0%20v%E1%BA%A5n%20v%E1%BB%81%20d%E1%BB%8Bch%20v%E1%BB%A5%3A%0A-%20Website%0A-%20Naver%20Marketing%0A-%20Google%20Maps%0A-%20Social%20Marketing",
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
