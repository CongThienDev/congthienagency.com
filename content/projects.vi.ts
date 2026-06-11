export type ProjectStat = { label: string; value: string };

export type ProjectSection = { heading: string; body?: string; bullets?: string[] };

export type ImageSlot = { slot: string; suggestion: string; alt: string };

export type Project = {
  path: string;
  slug: string;
  name: string;
  category: string;
  industry: string;
  location: string;
  year: string;
  breadcrumb: { label: string; href: string }[];
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  summary: string;
  stats: ProjectStat[];
  scope: string[];
  sections: ProjectSection[];
  verifiedProof: string[];
  related: { label: string; href: string; note: string }[];
  images: ImageSlot[];
  schema: { serviceType: string };
};

export const PROJECTS_HUB = {
  metaTitle: "Dự án website & marketing đã thực hiện | Công Thiên Agency",
  metaDescription:
    "Một số dự án website có booking và thanh toán online cho doanh nghiệp dịch vụ – du lịch tại Hội An – Đà Nẵng. Tất cả đạt PageSpeed SEO 100/100.",
  eyebrow: "Portfolio",
  h1: "Dự án đã thực hiện",
  heroSub:
    "Những website thật tôi đã trực tiếp thiết kế và code — có booking, thanh toán online và đạt điểm SEO tối đa trên PageSpeed Insights.",
};

export const PROJECTS: Project[] = [
  {
    path: "/vi/du-an/serena-retreat",
    slug: "serena-retreat",
    name: "Serena Retreat",
    category: "Website spa & wellness",
    industry: "Spa · Wellness",
    location: "Hội An",
    year: "2024",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dự án", href: "/vi/du-an" },
      { label: "Serena Retreat", href: "/vi/du-an/serena-retreat" },
    ],
    metaTitle: "Serena Retreat — Website spa có booking & thanh toán | Công Thiên Agency",
    metaDescription:
      "Case study website spa & wellness Serena Retreat: booking dịch vụ, thanh toán PayPal/Stripe/Credit Card, email xác nhận, hoàn thành trong 15 ngày, PageSpeed SEO 100/100.",
    eyebrow: "Case study · Spa & Wellness",
    h1: "Serena Retreat — website spa có booking & thanh toán online",
    heroSub:
      "Website spa & wellness hoàn chỉnh với luồng đặt dịch vụ và thanh toán quốc tế, hoàn thành trong 15 ngày và đạt điểm SEO tối đa.",
    summary:
      "Serena Retreat cần một website thể hiện đúng trải nghiệm spa cao cấp, đồng thời cho khách quốc tế đặt liệu trình và thanh toán trực tiếp. Tôi thiết kế giao diện riêng và code toàn bộ luồng booking, thanh toán cùng email xác nhận tự động.",
    stats: [
      { label: "Thời gian bàn giao", value: "15 ngày" },
      { label: "PageSpeed SEO", value: "100/100" },
      { label: "Thanh toán", value: "PayPal · Stripe · Card" },
    ],
    scope: [
      "Thiết kế giao diện riêng cho thương hiệu spa",
      "Booking liệu trình & dịch vụ",
      "Thanh toán PayPal / Stripe / Credit Card",
      "Email xác nhận tự động sau khi đặt",
      "Tối ưu SEO kỹ thuật và tốc độ",
      "Thiết lập Google Maps cho doanh nghiệp",
    ],
    sections: [
      {
        heading: "Bài toán",
        body:
          "Spa cần một website xứng tầm trải nghiệm cao cấp và cho khách quốc tế đặt liệu trình, thanh toán ngay mà không qua trung gian.",
      },
      {
        heading: "Giải pháp",
        bullets: [
          "Giao diện riêng truyền tải không gian wellness tĩnh lặng",
          "Luồng booking rõ ràng theo từng liệu trình",
          "Tích hợp PayPal, Stripe và Credit Card cho khách quốc tế",
          "Email xác nhận tự động ngay sau khi đặt thành công",
          "Tối ưu cấu trúc, tốc độ và schema để đạt SEO 100/100",
        ],
      },
      {
        heading: "Kết quả",
        body:
          "Toàn bộ website hoàn thành và bàn giao trong 15 ngày, đạt PageSpeed Insights SEO 100/100, với luồng đặt – thanh toán – xác nhận hoạt động đầy đủ và hồ sơ Google Maps được thiết lập.",
      },
    ],
    verifiedProof: [
      "Full website hoàn thành trong 15 ngày",
      "Booking liệu trình & dịch vụ",
      "Thanh toán PayPal / Stripe / Credit Card + email xác nhận",
      "PageSpeed Insights SEO 100/100",
      "Thiết lập Google Maps",
    ],
    related: [
      {
        label: "Thiết kế website spa Hội An",
        href: "/vi/thiet-ke-website/spa-hoi-an",
        note: "Dịch vụ liên quan",
      },
      {
        label: "Ruong House",
        href: "/vi/du-an/ruong-house",
        note: "Dự án khác",
      },
    ],
    images: [
      {
        slot: "hero",
        suggestion: "/images/projects/serena-retreat/hero.jpg",
        alt: "Website spa Serena Retreat trên màn hình desktop và mobile",
      },
      {
        slot: "booking",
        suggestion: "/images/projects/serena-retreat/booking.jpg",
        alt: "Giao diện đặt liệu trình của website Serena Retreat",
      },
      {
        slot: "pagespeed",
        suggestion: "/images/projects/serena-retreat/pagespeed.jpg",
        alt: "Kết quả PageSpeed Insights SEO 100/100 của Serena Retreat",
      },
    ],
    schema: { serviceType: "Web design" },
  },
  {
    path: "/vi/du-an/ruong-house",
    slug: "ruong-house",
    name: "Ruong House",
    category: "Website nhà hàng & trải nghiệm",
    industry: "Nhà hàng · Trải nghiệm",
    location: "Hội An",
    year: "2024",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dự án", href: "/vi/du-an" },
      { label: "Ruong House", href: "/vi/du-an/ruong-house" },
    ],
    metaTitle: "Ruong House — Website có giỏ hàng & thanh toán | Công Thiên Agency",
    metaDescription:
      "Case study website Ruong House: giỏ hàng, thanh toán PayPal, email xác nhận, full website hoàn thành trong 1 tháng và đạt PageSpeed SEO 100/100.",
    eyebrow: "Case study · Nhà hàng & Trải nghiệm",
    h1: "Ruong House — website có giỏ hàng & thanh toán online",
    heroSub:
      "Full website với giỏ hàng, thanh toán PayPal và email xác nhận, hoàn thành trong 1 tháng và đạt điểm SEO tối đa.",
    summary:
      "Ruong House cần một website cho khách xem dịch vụ, đặt và thanh toán online dễ dàng. Tôi xây dựng toàn bộ website cùng luồng giỏ hàng, thanh toán PayPal và email xác nhận tự động.",
    stats: [
      { label: "Thời gian bàn giao", value: "1 tháng" },
      { label: "PageSpeed SEO", value: "100/100" },
      { label: "Thanh toán", value: "Giỏ hàng · PayPal" },
    ],
    scope: [
      "Thiết kế & code full website",
      "Giỏ hàng và quy trình đặt online",
      "Thanh toán PayPal",
      "Email xác nhận tự động sau khi đặt",
      "Tối ưu SEO kỹ thuật và tốc độ",
      "Thiết lập Google Maps cho doanh nghiệp",
    ],
    sections: [
      {
        heading: "Bài toán",
        body:
          "Doanh nghiệp cần một website cho khách xem dịch vụ, thêm vào giỏ và thanh toán online thay vì chỉ nhắn tin qua mạng xã hội.",
      },
      {
        heading: "Giải pháp",
        bullets: [
          "Thiết kế và code toàn bộ website chuẩn SEO",
          "Luồng giỏ hàng và đặt online rõ ràng",
          "Tích hợp thanh toán PayPal",
          "Email xác nhận tự động sau khi khách đặt",
          "Tối ưu tốc độ và schema để đạt SEO 100/100",
        ],
      },
      {
        heading: "Kết quả",
        body:
          "Full website hoàn thành trong 1 tháng, đạt PageSpeed Insights SEO 100/100, với giỏ hàng – thanh toán PayPal – email xác nhận hoạt động đầy đủ và hồ sơ Google Maps được thiết lập.",
      },
    ],
    verifiedProof: [
      "Full website hoàn thành trong 1 tháng",
      "Giỏ hàng & quy trình đặt online",
      "Thanh toán PayPal + email xác nhận",
      "PageSpeed Insights SEO 100/100",
      "Thiết lập Google Maps",
    ],
    related: [
      {
        label: "Thiết kế website nhà hàng Hội An",
        href: "/vi/thiet-ke-website/nha-hang-hoi-an",
        note: "Dịch vụ liên quan",
      },
      {
        label: "Serena Retreat",
        href: "/vi/du-an/serena-retreat",
        note: "Dự án khác",
      },
    ],
    images: [
      {
        slot: "hero",
        suggestion: "/images/projects/ruong-house/hero.jpg",
        alt: "Website Ruong House trên màn hình desktop và mobile",
      },
      {
        slot: "cart",
        suggestion: "/images/projects/ruong-house/cart.jpg",
        alt: "Giỏ hàng và thanh toán của website Ruong House",
      },
      {
        slot: "pagespeed",
        suggestion: "/images/projects/ruong-house/pagespeed.jpg",
        alt: "Kết quả PageSpeed Insights SEO 100/100 của Ruong House",
      },
    ],
    schema: { serviceType: "Web design" },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
