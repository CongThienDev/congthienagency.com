export const SITE = {
  name: "Công Thiên Agency by CongThienDev",
  shortName: "Công Thiên Agency",
  brandTagline: "Marketing Online · Website · Naver · Google Maps",
  logoPath: "/brand/congthien-agency-logo.svg",
  founder: "Lê Công Thiên",
  domain: "www.congthienagency.com",
  url: "https://www.congthienagency.com",
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
    maps: {
      shortUrl: "https://maps.app.goo.gl/SnnjMzYzLD4RLE4w7",
      placeUrl:
        "https://www.google.com/maps/place/C%C3%B4ng+Thi%C3%AAn+Agency+-+Marketing+Company/@15.882005999999997,108.3833813,17z/",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.5161835729314!2d108.3833813!3d15.882005999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420da9564d2c9f%3A0x92fddbb95199d392!2sC%C3%B4ng%20Thi%C3%AAn%20Agency%20-%20Marketing%20Company!5e0!3m2!1svi!2s!4v1782018508802!5m2!1svi!2s",
      placeLabel: "Công Thiên Agency - Marketing Company",
    },
  },
  alternateNames: [
    "Cong Thien Agency",
    "Công Thiên Agency",
    "CongThienDev",
    "Công Thiên Marketing Online",
    "Congthienagency.com",
  ],
  foundingDate: "2025-01-01",
  slogan: "Marketing Online thật cho doanh nghiệp dịch vụ – du lịch Hội An – Đà Nẵng",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61586650725601",
    "https://github.com/CongThienDev",
    "https://zalo.me/+84934868001",
  ],
  geo: { latitude: 15.8801, longitude: 108.338 },
  knowsAbout: [
    "Thiết kế website doanh nghiệp",
    "Website booking online",
    "Landing page chiến dịch",
    "PageSpeed SEO",
    "Naver Marketing",
    "Naver Blog",
    "Naver Place",
    "Naver KOC",
    "Google Maps Marketing",
    "Google Business Profile",
    "Local SEO",
    "Review reputation management",
    "Social Marketing",
    "Threads Growth",
    "Meta Verified",
    "Facebook Fanpage verification",
    "Quét mã QR activation",
    "Quét mã Zalo thu lead",
    "Marketing cho spa",
    "Marketing cho nhà hàng",
    "Marketing cho khách sạn homestay",
    "Marketing cho café",
    "Marketing cho cooking class",
    "Marketing cho tour du lịch",
  ],
} as const;

export type Locale = (typeof SITE.locales)[number];

export const OG_IMAGE = "/images/og/og-default.jpg";
