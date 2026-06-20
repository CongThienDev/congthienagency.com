import { SITE } from "@/content/site";

export type ServiceInlinePart =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

export type ServiceSection = {
  heading: string;
  body?: string;
  bodyParts?: ServiceInlinePart[];
  bullets?: string[];
};

export type FAQ = { q: string; a: string };

export type ImageSlot = { slot: string; suggestion: string; alt: string };

export type Service = {
  path: string; // full url path, e.g. /vi/thiet-ke-website/spa-hoi-an
  lastModified?: string; // ISO date string, e.g. "2026-06-18" — used in sitemap
  cluster: "website" | "naver" | "maps" | "social" | "qr";
  isPillar: boolean;
  breadcrumb: { label: string; href: string }[];
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  heroCta: string;
  /** Optional override for the hero CTA target. External URLs (http…) open in a new tab. Defaults to /vi/lien-he. */
  heroCtaHref?: string;
  intro: string;
  sections: ServiceSection[];
  deliverables?: { title: string; items: string[] };
  whoFor?: string[];
  process?: { step: string; detail: string }[];
  priceFrom?: string;
  priceNote?: string;
  proof?: { projectPath: string; projectName: string; text: string };
  faqs: FAQ[];
  related: { label: string; href: string; note: string }[];
  images: ImageSlot[];
  schema: { serviceType: string; offerMinPriceVnd?: number; offerPriceVnd?: number };
};

const PROOF_SERENA = {
  projectPath: "/vi/du-an/serena-retreat",
  projectName: "Serena Retreat",
};
const PROOF_RUONG = {
  projectPath: "/vi/du-an/ruong-house",
  projectName: "Ruong House",
};

export const SERVICES: Service[] = [
  /* ───────────────────────── WEBSITE PILLAR ───────────────────────── */
  {
    path: "/vi/thiet-ke-website",
    cluster: "website",
    isPillar: true,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
    ],
    primaryKeyword: "thiết kế website Hội An Đà Nẵng",
    metaTitle: "Thiết kế website Hội An Đà Nẵng chuẩn SEO | Công Thiên Agency",
    metaDescription:
      "Thiết kế website Hội An – Đà Nẵng cho spa, nhà hàng, khách sạn, tour và cooking class. Chuẩn SEO, tải nhanh, có booking và thanh toán online.",
    eyebrow: "Dịch vụ · Website",
    h1: "Thiết kế website Hội An – Đà Nẵng chuẩn SEO, có booking online",
    heroSub:
      "Website làm nền tảng cho cả hệ thống marketing: khách tìm thấy bạn trên Google, xem dịch vụ rõ ràng, đặt lịch và thanh toán online ngay trên trang.",
    heroCta: "Nhận tư vấn website qua Zalo",
    intro:
      "Tôi xây website thật cho doanh nghiệp dịch vụ – du lịch, không chỉ là trang giới thiệu tĩnh. Mỗi website đều hướng đến ba mục tiêu: được Google index tốt, tải nhanh trên mobile và cho khách đặt – thanh toán online. Đây là nền tảng mà Fanpage hay Google Maps không thay thế được.",
    sections: [
      {
        heading: "Vì sao doanh nghiệp cần website riêng, không chỉ Facebook?",
        bullets: [
          "Khách du lịch và khách Hàn tin tưởng thương hiệu có website chính chủ hơn là chỉ có Fanpage.",
          "Bạn kiểm soát thương hiệu, dữ liệu khách và trải nghiệm đặt dịch vụ — không phụ thuộc thuật toán mạng xã hội.",
          "Website chuẩn SEO giúp doanh nghiệp xuất hiện khi khách chủ động tìm dịch vụ trên Google.",
          "Một đường link website chuyên nghiệp dùng được cho Google Maps, Naver, Facebook và Tripadvisor.",
        ],
      },
      {
        heading: "Website của tôi tập trung vào điều gì?",
        body:
          "Khác với nhiều đơn vị chỉ dựng landing page, tôi trực tiếp code hệ thống booking và thanh toán: giỏ hàng, PayPal / Stripe / Credit Card và email xác nhận tự động sau khi khách đặt — như đã triển khai cho Serena Retreat và Ruong House.",
      },
      {
        heading: "SEO & tốc độ là mặc định, không phải tùy chọn",
        body:
          "Cả hai dự án tham khảo đều đạt PageSpeed SEO 100/100. Mỗi website được tối ưu cấu trúc URL, metadata, schema JSON-LD, sitemap và tốc độ tải để Google dễ hiểu và xếp hạng.",
      },
      {
        heading: "Trang này khác gì trang chủ của agency?",
        body:
          "Trang chủ của Công Thiên Agency giới thiệu toàn bộ hệ thống marketing. Còn trang này đi riêng vào dịch vụ thiết kế website: cấu trúc trang, luồng booking, thanh toán online, SEO kỹ thuật và cách website trở thành trung tâm chuyển đổi cho doanh nghiệp du lịch.",
      },
      {
        heading: "Khi nào nên đọc trang dịch vụ này trước?",
        bodyParts: [
          { type: "text", text: "Nếu bạn đang cân nhắc làm website mới, thêm booking online hoặc muốn hiểu website nên đóng vai trò gì trong hệ thống marketing, hãy bắt đầu ở đây. Sau đó có thể đọc tiếp " },
          { type: "link", text: "website booking online cần những gì", href: "/vi/blog/website-booking-online-can-nhung-gi" },
          { type: "text", text: " và " },
          { type: "link", text: "website đa ngôn ngữ cho khách quốc tế", href: "/vi/blog/website-da-ngon-ngu-cho-khach-quoc-te" },
          { type: "text", text: " để đi sâu vào từng tình huống cụ thể." },
        ],
      },
    ],
    deliverables: {
      title: "Một dự án website gồm có",
      items: [
        "Thiết kế giao diện riêng theo ngành nghề",
        "Code website chuyên nghiệp, tối ưu mobile",
        "Luồng booking và thanh toán online (nếu cần)",
        "Email xác nhận tự động sau khi đặt",
        "Cấu trúc URL chuẩn SEO, sitemap, robots, metadata",
        "Schema JSON-LD và tối ưu tốc độ tải",
      ],
    },
    whoFor: [
      "Spa, massage, wellness",
      "Nhà hàng, seafood, cafe",
      "Khách sạn, homestay, villa",
      "Tour, cooking class, trải nghiệm địa phương",
    ],
    process: [
      { step: "Tư vấn", detail: "Hiểu ngành nghề, mục tiêu và nhóm khách của bạn." },
      { step: "Thiết kế", detail: "Dựng giao diện và cấu trúc trang theo hành vi đặt dịch vụ." },
      { step: "Phát triển", detail: "Code website, booking, thanh toán và email xác nhận." },
      { step: "Tối ưu & bàn giao", detail: "Kiểm tra SEO, tốc độ, mobile rồi bàn giao." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Giá cuối tùy số trang, tính năng booking/thanh toán và mục tiêu SEO.",
    proof: {
      ...PROOF_SERENA,
      text: "Serena Retreat — website spa & wellness có booking và thanh toán, hoàn thành trong 15 ngày, đạt PageSpeed SEO 100/100.",
    },
    faqs: [
      {
        q: "Thiết kế website mất bao lâu?",
        a: "Tùy quy mô. Tham khảo thực tế: Serena Retreat 15 ngày, Ruong House 1 tháng cho full website có booking và thanh toán.",
      },
      {
        q: "Website có booking và thanh toán online không?",
        a: "Có — giỏ hàng, PayPal / Stripe / Credit Card và email xác nhận tự động sau khi khách đặt.",
      },
      {
        q: "Website có chuẩn SEO không?",
        a: "Có. Cả hai dự án tham khảo đều đạt PageSpeed SEO 100/100, kèm cấu trúc URL chuẩn, metadata và schema đầy đủ.",
      },
      {
        q: "Có làm website đa ngôn ngữ cho khách quốc tế không?",
        a: "Có — Việt/Anh/Hàn, và có thể kết hợp Naver Blog để tiếp cận khách Hàn Quốc.",
      },
    ],
    related: [
      { label: "Website spa Hội An", href: "/vi/thiet-ke-website/spa-hoi-an", note: "Trang dịch vụ chuyên ngành spa" },
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Trang dịch vụ chuyên ngành nhà hàng" },
      { label: "Website khách sạn & homestay Hội An", href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an", note: "Trang dịch vụ lưu trú" },
      { label: "Website tour du lịch Hội An", href: "/vi/thiet-ke-website/website-tour-du-lich-hoi-an", note: "Trang dịch vụ tour" },
      { label: "Naver Marketing", href: "/vi/naver-marketing", note: "Tiếp cận khách Hàn Quốc" },
      { label: "Local SEO Hội An", href: "/vi/google-maps-marketing/hoi-an", note: "Kết hợp website và Google Maps" },
      { label: "Website booking online cần những gì", href: "/vi/blog/website-booking-online-can-nhung-gi", note: "Bài hỗ trợ chuyên sâu" },
      { label: "Website đa ngôn ngữ cho khách quốc tế", href: "/vi/blog/website-da-ngon-ngu-cho-khach-quoc-te", note: "Bài hỗ trợ chuyên sâu" },
      { label: "Bảng giá", href: "/vi/bang-gia", note: "Xem chi phí gói Website Business" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-website.webp", alt: "Thiết kế website doanh nghiệp Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Thiết kế website", offerMinPriceVnd: 10000000 },
  },

  /* ───────────────────────── WEBSITE SPOKE — SPA HỘI AN ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/spa-hoi-an",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      { label: "Website spa Hội An", href: "/vi/thiet-ke-website/spa-hoi-an" },
    ],
    primaryKeyword: "thiết kế website spa Hội An",
    metaTitle: "Thiết kế website spa Hội An có booking | Công Thiên Agency",
    metaDescription:
      "Thiết kế website spa Hội An cho spa, massage, wellness: treatment page, booking online, thanh toán PayPal/Stripe, SEO kỹ thuật và tối ưu mobile.",
    eyebrow: "Website · Spa Hội An",
    h1: "Thiết kế website spa Hội An chuyên nghiệp, tối ưu SEO và booking online",
    heroSub:
      "Website spa giúp khách du lịch và khách Hàn dễ xem dịch vụ, đặt lịch và thanh toán — đồng thời được Google tìm thấy với từ khóa spa tại Hội An.",
    heroCta: "Nhận tư vấn website spa qua Zalo",
    intro:
      "Spa tại Hội An phục vụ nhiều khách du lịch và khách Hàn Quốc — nhóm khách thường tìm hiểu kỹ và đặt lịch trước khi đến. Một website spa chuyên nghiệp giúp bạn giới thiệu không gian, trình bày treatment rõ ràng, cho khách đặt và thanh toán online, đồng thời xuất hiện trên Google khi khách tìm spa tại Hội An.",
    sections: [
      {
        heading: "Vì sao spa tại Hội An cần website riêng?",
        bullets: [
          "Khách du lịch và khách Hàn tin tưởng spa có website chính chủ hơn là chỉ có Fanpage.",
          "Website trình bày đầy đủ treatment, bảng giá, hình ảnh không gian và chính sách đặt lịch.",
          "Bạn chủ động được dữ liệu khách và trải nghiệm đặt dịch vụ.",
          "Website chuẩn SEO giúp spa hiển thị khi khách tìm “spa Hội An”, “massage Hội An”, “spa gần phố cổ”.",
        ],
      },
      {
        heading: "Booking, treatment pages và thanh toán online",
        body:
          "Tôi xây luồng đặt dịch vụ thực tế: khách chọn treatment → chọn thời gian → thanh toán → nhận email xác nhận. Đây chính là hệ thống đã triển khai cho Serena Retreat, với PayPal, Stripe và Credit Card, giúp giảm no-show và tăng tính chuyên nghiệp.",
      },
      {
        heading: "Kết hợp Naver Blog để tiếp cận khách Hàn",
        body:
          "Phần lớn khách spa cao cấp tại Hội An là khách Hàn Quốc và họ tìm thông tin trên Naver trước khi đặt. Website spa có thể kết hợp với dịch vụ Naver Marketing để tiếp cận khách Hàn ngay từ giai đoạn tìm hiểu.",
      },
    ],
    deliverables: {
      title: "Website spa của bạn sẽ có",
      items: [
        "Trang chủ giới thiệu không gian và phong cách spa",
        "Trang treatment/dịch vụ với mô tả, thời lượng và giá",
        "Hệ thống đặt lịch theo dịch vụ và khung giờ",
        "Thanh toán PayPal / Stripe / Credit Card",
        "Email xác nhận tự động",
        "Tối ưu SEO, tốc độ và mobile",
      ],
    },
    whoFor: [
      "Spa, day spa, massage tại Hội An",
      "Trung tâm wellness, trị liệu",
      "Spa phục vụ khách Hàn và khách quốc tế",
      "Spa mới mở cần nền tảng thương hiệu",
    ],
    process: [
      { step: "Tư vấn", detail: "Phân tích treatment, nhóm khách và đối thủ tại Hội An." },
      { step: "Thiết kế", detail: "Dựng giao diện spa và cấu trúc treatment dễ đặt lịch." },
      { step: "Phát triển", detail: "Code booking, thanh toán và email xác nhận." },
      { step: "SEO & bàn giao", detail: "Tối ưu từ khóa spa Hội An, kiểm tra PageSpeed rồi bàn giao." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Thuộc gói Website Business; giá cuối tùy số trang và tính năng.",
    proof: {
      ...PROOF_SERENA,
      text: "Serena Retreat là website spa & wellness tại Hội An, full trong 15 ngày: treatment pages, cart, PayPal/Stripe/Credit Card, email xác nhận, PageSpeed SEO 100/100 và hỗ trợ tạo Google Maps.",
    },
    faqs: [
      {
        q: "Thiết kế website spa Hội An mất bao lâu?",
        a: "Tham khảo Serena Retreat: full website spa có booking trong 15 ngày, tùy số trang và tính năng.",
      },
      {
        q: "Website spa có đặt lịch và thanh toán online không?",
        a: "Có — đặt theo treatment/khung giờ, thanh toán PayPal/Stripe/Credit Card và email xác nhận tự động.",
      },
      {
        q: "Website có chuẩn SEO để khách tìm thấy không?",
        a: "Có, tối ưu PageSpeed, cấu trúc và schema; Serena Retreat đạt SEO 100/100.",
      },
      {
        q: "Có làm website spa đa ngôn ngữ cho khách Hàn không?",
        a: "Có — Việt/Anh/Hàn, và có thể kết hợp Naver Blog để tiếp cận khách Hàn.",
      },
      {
        q: "Chi phí thiết kế website spa khoảng bao nhiêu?",
        a: "Từ 10.000.000đ/dự án; báo giá cuối tùy yêu cầu cụ thể.",
      },
    ],
    related: [
      { label: "Thiết kế website Hội An Đà Nẵng", href: "/vi/thiet-ke-website", note: "Trang trụ cột Website" },
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Tiếp cận khách Hàn cho spa" },
      { label: "Google Maps cho spa", href: "/vi/google-maps-marketing/cho-spa", note: "Tăng hiển thị local cho spa" },
      { label: "Serena Retreat", href: "/vi/du-an/serena-retreat", note: "Case study website spa" },
      { label: "Website spa Hội An cần gì", href: "/vi/blog/website-spa-hoi-an-can-gi", note: "Bài hỗ trợ chuyên sâu" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/spa.webp", alt: "Thiết kế website spa Hội An" },
    ],
    schema: { serviceType: "Thiết kế website spa", offerMinPriceVnd: 10000000 },
  },

  /* ───────────────────────── WEBSITE SPOKE — NHÀ HÀNG HỘI AN ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/nha-hang-hoi-an",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an" },
    ],
    primaryKeyword: "thiết kế website nhà hàng Hội An",
    metaTitle: "Thiết kế website nhà hàng Hội An: menu, đặt bàn, SEO | Công Thiên Agency",
    metaDescription:
      "Website nhà hàng Hội An giúp khách xem menu, đặt bàn và tin tưởng thương hiệu. Tối ưu SEO món ăn, kết hợp Google Maps và Naver cho khách Hàn. Tư vấn qua Zalo.",
    eyebrow: "Website · Nhà hàng Hội An",
    h1: "Thiết kế website nhà hàng Hội An giúp khách xem menu, đặt bàn và tin tưởng thương hiệu",
    heroSub:
      "Nhà hàng tại Hội An cạnh tranh bằng trải nghiệm và niềm tin. Website giúp khách xem menu, hình ảnh, vị trí và đặt bàn trước khi đến.",
    heroCta: "Nhận tư vấn website nhà hàng qua Zalo",
    intro:
      "Khách du lịch thường quyết định ăn ở đâu sau khi xem hình ảnh, menu và đánh giá. Nếu nhà hàng chỉ có Fanpage, khách khó nắm được menu và giá. Website nhà hàng chuyên nghiệp giúp bạn trình bày món ăn hấp dẫn, cho khách đặt bàn và được Google tìm thấy với từ khóa ẩm thực tại Hội An.",
    sections: [
      {
        heading: "Vấn đề khi nhà hàng chỉ dùng Facebook và Google Maps",
        bullets: [
          "Menu và giá khó tra cứu, hình ảnh trôi theo dòng thời gian.",
          "Khách quốc tế khó tìm thông tin tiếng Anh/Hàn rõ ràng.",
          "Không có nơi tập trung để đặt bàn và xem chính sách.",
          "Thiếu một đường link chuyên nghiệp cho Google Maps và Tripadvisor.",
        ],
      },
      {
        heading: "Website nhà hàng cần có gì?",
        body:
          "Trang menu theo nhóm món, hình ảnh chất lượng cao, vị trí và bản đồ, giờ mở cửa, form đặt bàn và phần giới thiệu câu chuyện thương hiệu. Tất cả tối ưu để tải nhanh trên mobile — nơi phần lớn khách du lịch tra cứu.",
      },
      {
        heading: "SEO món ăn, địa phương và kết hợp Google Maps",
        body:
          "Website được tối ưu cho từ khóa món ăn và nhà hàng tại Hội An, kết hợp với Google Maps Review & Reputation để tăng uy tín địa phương. Có thể bổ sung Naver Blog cho nhóm khách Hàn.",
      },
    ],
    deliverables: {
      title: "Website nhà hàng của bạn sẽ có",
      items: [
        "Trang menu theo nhóm món, có hình ảnh và giá",
        "Hình ảnh không gian và món ăn tối ưu tốc độ",
        "Vị trí, bản đồ, giờ mở cửa",
        "Form đặt bàn / liên hệ nhanh",
        "Tối ưu SEO ẩm thực và địa phương",
        "Đa ngôn ngữ Việt/Anh/Hàn nếu cần",
      ],
    },
    whoFor: [
      "Nhà hàng, quán ăn tại Hội An",
      "Seafood, đặc sản miền Trung",
      "Cafe, brunch, không gian view đẹp",
      "Nhà hàng phục vụ khách du lịch quốc tế",
    ],
    process: [
      { step: "Tư vấn", detail: "Phân tích menu, phong cách và nhóm khách mục tiêu." },
      { step: "Thiết kế", detail: "Dựng giao diện ẩm thực và cấu trúc menu dễ xem trên mobile." },
      { step: "Phát triển", detail: "Code menu, đặt bàn và tối ưu hình ảnh." },
      { step: "SEO & bàn giao", detail: "Tối ưu từ khóa nhà hàng Hội An và bàn giao." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Thuộc gói Website Business; báo giá cuối tùy số trang và tính năng.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House cho thấy năng lực xây website trải nghiệm – ẩm thực có booking, cart, PayPal và email xác nhận, đạt PageSpeed SEO 100/100.",
    },
    faqs: [
      {
        q: "Website nhà hàng có cho khách đặt bàn online không?",
        a: "Có — form đặt bàn/liên hệ nhanh; có thể mở rộng thành đặt chỗ theo khung giờ tùy nhu cầu.",
      },
      {
        q: "Có hiển thị menu nhiều ngôn ngữ không?",
        a: "Có, hỗ trợ Việt/Anh/Hàn để phục vụ khách du lịch quốc tế.",
      },
      {
        q: "Website có giúp nhà hàng lên Google không?",
        a: "Website được tối ưu SEO cho từ khóa ẩm thực và địa phương, kết hợp Google Maps để tăng hiển thị.",
      },
      {
        q: "Chi phí website nhà hàng bao nhiêu?",
        a: "Từ 10.000.000đ/dự án, tùy số trang menu, hình ảnh và tính năng.",
      },
    ],
    related: [
      { label: "Website spa Hội An", href: "/vi/thiet-ke-website/spa-hoi-an", note: "Dịch vụ cùng nhóm website" },
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Uy tín cho nhà hàng" },
      { label: "Bảng giá", href: "/vi/bang-gia", note: "Chi phí gói Website Business" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/restaurant.webp", alt: "Thiết kế website nhà hàng Hội An" },
    ],
    schema: { serviceType: "Thiết kế website nhà hàng", offerMinPriceVnd: 10000000 },
  },

  /* ───────────────────────── WEBSITE SPOKE — COOKING CLASS HỘI AN ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/cooking-class-hoi-an",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      { label: "Website cooking class Hội An", href: "/vi/thiet-ke-website/cooking-class-hoi-an" },
    ],
    primaryKeyword: "thiết kế website cooking class Hội An",
    metaTitle: "Thiết kế website cooking class Hội An: tour, booking, thanh toán | Công Thiên Agency",
    metaDescription:
      "Website cooking class Hội An có tour pages, lịch, booking, giỏ hàng, PayPal checkout và email xác nhận. SEO trải nghiệm địa phương, PageSpeed 100/100. Tư vấn qua Zalo.",
    eyebrow: "Website · Cooking class Hội An",
    h1: "Thiết kế website cooking class Hội An có tour, booking, thanh toán và SEO Google",
    heroSub:
      "Cooking class và workshop bán trải nghiệm trực tiếp. Website giúp khách hiểu lịch trình, đặt chỗ và thanh toán trước — sẵn sàng cho khách quốc tế.",
    heroCta: "Nhận tư vấn website cooking class qua Zalo",
    intro:
      "Khách du lịch đặt cooking class thường lên kế hoạch trước chuyến đi và muốn xem rõ lịch trình, giá và cách đặt chỗ. Một website có tour pages, lịch và thanh toán online giúp bạn chốt booking ngay khi khách còn đang tìm hiểu — đúng mô hình đã làm cho Ruong House.",
    sections: [
      {
        heading: "Cooking class cần website để bán trải nghiệm",
        bullets: [
          "Khách quốc tế muốn xem lịch trình, thời lượng và điểm đến trước khi đặt.",
          "Thanh toán trước giúp giữ chỗ và giảm hủy phút chót.",
          "Hình ảnh và câu chuyện trải nghiệm tạo cảm xúc đặt ngay.",
          "Website chuyên nghiệp dùng được cho Google, Naver và các nền tảng OTA.",
        ],
      },
      {
        heading: "Tour pages, lịch, giỏ hàng và thanh toán",
        body:
          "Tôi dựng tour/workshop pages với mô tả, lịch trình, giá và thời gian; khách thêm vào giỏ, thanh toán PayPal và nhận email xác nhận — chính là hệ thống đã triển khai cho Ruong House.",
      },
      {
        heading: "SEO trải nghiệm địa phương tại Hội An",
        body:
          "Website tối ưu cho từ khóa trải nghiệm – cooking class tại Hội An, cấu trúc rõ ràng để Google index và đạt điểm PageSpeed cao.",
      },
    ],
    deliverables: {
      title: "Website cooking class của bạn sẽ có",
      items: [
        "Tour/workshop pages với lịch trình và giá",
        "Lịch và khung giờ trải nghiệm",
        "Giỏ hàng và thanh toán PayPal",
        "Email xác nhận sau khi đặt",
        "Hình ảnh trải nghiệm tối ưu tốc độ",
        "SEO trải nghiệm địa phương",
      ],
    },
    whoFor: [
      "Cooking class, lớp nấu ăn tại Hội An",
      "Craft workshop, trải nghiệm thủ công",
      "Tour trải nghiệm địa phương",
      "Doanh nghiệp bán trải nghiệm cho khách quốc tế",
    ],
    process: [
      { step: "Tư vấn", detail: "Xác định loại trải nghiệm, lịch trình và nhóm khách." },
      { step: "Thiết kế", detail: "Dựng tour pages và luồng đặt chỗ rõ ràng." },
      { step: "Phát triển", detail: "Code lịch, giỏ hàng, PayPal và email xác nhận." },
      { step: "SEO & bàn giao", detail: "Tối ưu từ khóa trải nghiệm Hội An và bàn giao." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Thuộc gói Website Business; báo giá cuối tùy tính năng booking.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House — website cooking class & craft workshop tại Hội An, full trong 1 tháng: tour pages, cart, PayPal checkout, email xác nhận, PageSpeed SEO 100/100 và hỗ trợ tạo Google Maps.",
    },
    faqs: [
      {
        q: "Website cooking class có đặt chỗ và thanh toán không?",
        a: "Có — tour pages, lịch, giỏ hàng, thanh toán PayPal và email xác nhận, như đã làm cho Ruong House.",
      },
      {
        q: "Khách quốc tế thanh toán bằng cách nào?",
        a: "Hỗ trợ PayPal; có thể mở rộng thêm Stripe/Credit Card tùy nhu cầu.",
      },
      {
        q: "Website có chuẩn SEO không?",
        a: "Có, Ruong House đạt PageSpeed SEO 100/100 và hiển thị tốt cho từ khóa thương hiệu.",
      },
      {
        q: "Làm website cooking class mất bao lâu?",
        a: "Tham khảo Ruong House: full website trong 1 tháng, tùy số tour và tính năng.",
      },
    ],
    related: [
      { label: "Case study Ruong House", href: "/vi/du-an/ruong-house", note: "Dự án tham khảo trực tiếp" },
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Dịch vụ cùng nhóm" },
      { label: "Naver Marketing", href: "/vi/naver-marketing", note: "Tiếp cận khách Hàn cho trải nghiệm" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/cooking-class-tour.webp", alt: "Thiết kế website cooking class Hội An" },
    ],
    schema: { serviceType: "Thiết kế website cooking class", offerMinPriceVnd: 10000000 },
  },

  /* ───────────────────────── WEBSITE SPOKE — KHÁCH SẠN & HOMESTAY HỘI AN ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      {
        label: "Website khách sạn & homestay Hội An",
        href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an",
      },
    ],
    primaryKeyword: "thiết kế website khách sạn homestay Hội An",
    metaTitle:
      "Thiết kế website khách sạn, homestay Hội An có booking | Công Thiên Agency",
    metaDescription:
      "Thiết kế website khách sạn, homestay Hội An với phòng, giá, booking trực tiếp và SEO địa phương. Giúp giảm phụ thuộc OTA và tăng tỷ lệ đặt phòng trực tiếp.",
    eyebrow: "Website · Khách sạn & Homestay Hội An",
    h1: "Thiết kế website khách sạn và homestay Hội An để tăng đặt phòng trực tiếp",
    heroSub:
      "Website khách sạn không chỉ để giới thiệu hình ảnh. Nó phải giúp khách xem phòng, hiểu vị trí, kiểm tra giá và gửi yêu cầu đặt phòng nhanh chóng.",
    heroCta: "Nhận tư vấn website khách sạn qua Zalo",
    intro:
      "Khách sạn và homestay tại Hội An thường phụ thuộc lớn vào OTA như Booking hay Agoda. Các kênh đó giúp bạn có khách, nhưng cũng lấy mất biên lợi nhuận và quyền kiểm soát trải nghiệm. Website riêng giúp bạn xây thương hiệu, nhận đặt phòng trực tiếp và tạo một điểm chạm đáng tin trước khi khách quyết định.",
    sections: [
      {
        heading: "Vì sao khách sạn cần website riêng ngoài OTA?",
        bullets: [
          "Giảm phụ thuộc vào nền tảng trung gian và phí hoa hồng.",
          "Chủ động giới thiệu phòng, tiện nghi, vị trí và dịch vụ theo cách của thương hiệu.",
          "Tạo điểm đến chính thức để gắn trên Google Maps, Fanpage và Naver.",
          "Tăng khả năng nhận inquiry và booking trực tiếp từ khách quay lại hoặc khách tìm trên Google.",
        ],
      },
      {
        heading: "Website khách sạn cần có gì?",
        body:
          "Trang phòng rõ ràng, bộ ảnh đẹp, thông tin tiện nghi, giờ check-in/check-out, vị trí, chính sách và form đặt phòng hoặc yêu cầu báo giá. Với homestay hoặc villa, phần kể câu chuyện không gian và trải nghiệm lưu trú cũng rất quan trọng.",
      },
      {
        heading: "SEO địa phương và niềm tin trước khi đặt phòng",
        body:
          "Khách thường kiểm tra website song song với Google Maps và review trước khi đặt. Website chuẩn SEO và đồng bộ thông tin giúp thương hiệu trông chuyên nghiệp hơn, đồng thời hỗ trợ Local SEO cho các truy vấn khách sạn và homestay tại Hội An.",
      },
    ],
    deliverables: {
      title: "Website khách sạn hoặc homestay của bạn sẽ có",
      items: [
        "Trang giới thiệu từng loại phòng và tiện nghi",
        "Bộ ảnh không gian và vị trí tối ưu mobile",
        "Thông tin check-in/check-out, chính sách và liên hệ",
        "Form đặt phòng hoặc yêu cầu báo giá trực tiếp",
        "Cấu trúc SEO cho từ khóa lưu trú địa phương",
        "Đa ngôn ngữ Việt/Anh nếu cần",
      ],
    },
    whoFor: [
      "Khách sạn boutique tại Hội An",
      "Homestay, villa, house rental",
      "Cơ sở lưu trú muốn tăng direct booking",
      "Doanh nghiệp cần website chuyên nghiệp ngoài OTA",
    ],
    process: [
      { step: "Tư vấn", detail: "Phân tích mô hình lưu trú, nhóm khách và kênh booking hiện tại." },
      { step: "Thiết kế", detail: "Dựng cấu trúc phòng, tiện nghi và trải nghiệm đặt phòng rõ ràng." },
      { step: "Phát triển", detail: "Code website, form booking/inquiry và tối ưu mobile." },
      { step: "SEO & bàn giao", detail: "Tối ưu từ khóa lưu trú Hội An và bàn giao hướng dẫn vận hành." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Giá cuối tùy số loại phòng, ngôn ngữ và mức độ phức tạp của booking flow.",
    faqs: [
      {
        q: "Website khách sạn có thay thế OTA được không?",
        a: "Không nên nhìn theo hướng thay thế hoàn toàn. Website giúp bạn tăng kênh direct booking và giảm phụ thuộc vào OTA, đồng thời xây thương hiệu bền vững hơn.",
      },
      {
        q: "Có hiển thị nhiều loại phòng và tiện nghi không?",
        a: "Có. Website có thể tách rõ từng loại phòng, ảnh, tiện nghi, chính sách và mức giá tham khảo.",
      },
      {
        q: "Website homestay có cần đa ngôn ngữ không?",
        a: "Thường nên có ít nhất Việt/Anh nếu đón khách quốc tế; có thể mở rộng thêm ngôn ngữ khác theo nhu cầu.",
      },
      {
        q: "Chi phí website khách sạn hoặc homestay bao nhiêu?",
        a: "Từ 10.000.000đ/dự án, tùy phạm vi nội dung, số trang và tính năng booking.",
      },
    ],
    related: [
      { label: "Website booking online", href: "/vi/thiet-ke-website/website-booking-online", note: "Tính năng booking" },
      { label: "Website đa ngôn ngữ", href: "/vi/thiet-ke-website/website-da-ngon-ngu", note: "Phục vụ khách quốc tế" },
      { label: "Website khách sạn khác gì website spa", href: "/vi/blog/website-khach-san-khac-gi-website-spa", note: "Bài so sánh" },
      { label: "Nên làm website hay chỉ dùng OTA/Facebook", href: "/vi/blog/nen-lam-website-hay-chi-dung-ota-facebook", note: "Bài chiến lược" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/homestay.webp", alt: "Thiết kế website khách sạn homestay Hội An" },
    ],
    schema: {
      serviceType: "Thiết kế website khách sạn và homestay",
      offerMinPriceVnd: 10000000,
    },
  },

  /* ───────────────────────── WEBSITE SPOKE — TOUR DU LỊCH HỘI AN ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/website-tour-du-lich-hoi-an",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      {
        label: "Website tour du lịch Hội An",
        href: "/vi/thiet-ke-website/website-tour-du-lich-hoi-an",
      },
    ],
    primaryKeyword: "thiết kế website tour du lịch Hội An",
    metaTitle:
      "Thiết kế website tour du lịch Hội An có booking | Công Thiên Agency",
    metaDescription:
      "Thiết kế website tour du lịch Hội An với lịch trình, giá, booking và thanh toán online. Phù hợp cho tour địa phương, trải nghiệm, shuttle và day tour.",
    eyebrow: "Website · Tour du lịch Hội An",
    h1: "Thiết kế website tour du lịch Hội An có lịch trình, booking và thanh toán",
    heroSub:
      "Với tour và trải nghiệm, khách cần hiểu nhanh hành trình, giá và cách đặt chỗ. Website tốt giúp bạn chốt booking ngay khi khách còn đang lên kế hoạch.",
    heroCta: "Nhận tư vấn website tour qua Zalo",
    intro:
      "Tour du lịch và trải nghiệm địa phương cần bán bằng sự rõ ràng. Nếu khách không thấy lịch trình, thời lượng, điểm đón và giá ngay trên website, họ sẽ quay lại OTA hoặc chọn đối thủ. Website tour giúp bạn gom mọi thông tin quan trọng vào một hành trình đặt chỗ mạch lạc.",
    sections: [
      {
        heading: "Khách tour cần thấy gì trước khi đặt?",
        bullets: [
          "Lịch trình cụ thể, thời lượng và điểm nổi bật của tour.",
          "Giá, bao gồm/không bao gồm và chính sách hủy.",
          "Điểm đón, giờ khởi hành và cách liên hệ nhanh.",
          "Hình ảnh trải nghiệm thật để tạo cảm giác đáng tin.",
        ],
      },
      {
        heading: "Website tour cần một luồng booking rõ ràng",
        body:
          "Khách phải đi từ xem tour sang gửi booking hoặc thanh toán với ít bước nhất có thể. Đây là khác biệt giữa một website chỉ để xem và một website thực sự bán được tour.",
      },
      {
        heading: "SEO cho tour địa phương và trải nghiệm",
        body:
          "Các truy vấn như tour Hội An, cooking class, trải nghiệm nông thôn hay shuttle đều cần landing page rõ mục tiêu. Website được cấu trúc tốt giúp Google index từng tour tốt hơn thay vì dồn mọi thứ vào một trang chung.",
      },
    ],
    deliverables: {
      title: "Website tour của bạn sẽ có",
      items: [
        "Trang tour riêng với lịch trình, giá và chính sách",
        "Form booking hoặc luồng thanh toán online",
        "Khối FAQ cho từng loại tour",
        "Điểm đón, giờ khởi hành và thông tin liên hệ",
        "Tối ưu SEO cho từng trải nghiệm địa phương",
        "Giao diện rõ ràng trên mobile cho khách quốc tế",
      ],
    },
    whoFor: [
      "Tour địa phương, city tour, countryside tour",
      "Shuttle, transfer, day trip",
      "Trải nghiệm làng nghề, nấu ăn, workshop",
      "Doanh nghiệp du lịch cần direct booking",
    ],
    process: [
      { step: "Tư vấn", detail: "Rà soát loại tour, hành vi booking và kênh bán hiện tại." },
      { step: "Thiết kế", detail: "Dựng cấu trúc trang tour dễ đọc và dễ đặt." },
      { step: "Phát triển", detail: "Code tour pages, form booking hoặc thanh toán online." },
      { step: "SEO & bàn giao", detail: "Tối ưu từ khóa tour Hội An và bàn giao hướng dẫn cập nhật." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Chi phí tùy số tour, mức độ tùy biến và có thanh toán online hay không.",
    faqs: [
      {
        q: "Website tour có bán nhiều tour khác nhau không?",
        a: "Có. Mỗi tour có thể có trang riêng với lịch trình, giá, FAQ và luồng booking riêng để dễ SEO và dễ chốt khách hơn.",
      },
      {
        q: "Có hỗ trợ thanh toán online cho tour không?",
        a: "Có thể tích hợp form booking trước hoặc thanh toán online tùy nhu cầu và ngân sách.",
      },
      {
        q: "Website tour có phù hợp khách quốc tế không?",
        a: "Có. Cấu trúc nội dung ưu tiên mobile, rõ thông tin, và có thể triển khai đa ngôn ngữ nếu cần.",
      },
      {
        q: "Website tour mất bao lâu để triển khai?",
        a: "Tùy số tour và tính năng. Các website dạng bán trải nghiệm thường nhanh hơn nếu nội dung và ảnh đã sẵn sàng.",
      },
    ],
    related: [
      { label: "Website booking online", href: "/vi/thiet-ke-website/website-booking-online", note: "Tính năng cốt lõi" },
      { label: "Website khách sạn & homestay Hội An", href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an", note: "Nhóm du lịch lưu trú" },
      { label: "Website booking online cần những gì", href: "/vi/blog/website-booking-online-can-nhung-gi", note: "Bài hỗ trợ" },
      { label: "Website cooking class Hội An", href: "/vi/thiet-ke-website/cooking-class-hoi-an", note: "Mô hình gần giống" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/cooking-class-tour.webp", alt: "Thiết kế website tour du lịch Hội An" },
    ],
    schema: {
      serviceType: "Thiết kế website tour du lịch",
      offerMinPriceVnd: 10000000,
    },
  },

  /* ───────────────────────── WEBSITE SPOKE — WEBSITE ĐA NGÔN NGỮ ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/website-da-ngon-ngu",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      { label: "Website đa ngôn ngữ", href: "/vi/thiet-ke-website/website-da-ngon-ngu" },
    ],
    primaryKeyword: "thiết kế website đa ngôn ngữ",
    metaTitle:
      "Thiết kế website đa ngôn ngữ cho khách quốc tế | Công Thiên Agency",
    metaDescription:
      "Thiết kế website đa ngôn ngữ Việt, Anh, Hàn cho doanh nghiệp du lịch và dịch vụ. Giúp khách quốc tế hiểu dịch vụ rõ hơn và tăng niềm tin trước khi booking.",
    eyebrow: "Website · Đa ngôn ngữ",
    h1: "Thiết kế website đa ngôn ngữ cho khách quốc tế và khách Hàn",
    heroSub:
      "Nếu bạn đón khách quốc tế, một website chỉ có tiếng Việt thường chưa đủ. Website đa ngôn ngữ giúp khách hiểu dịch vụ nhanh hơn và dễ đi đến quyết định hơn.",
    heroCta: "Nhận tư vấn website đa ngôn ngữ",
    intro:
      "Spa, khách sạn, nhà hàng và tour tại Hội An thường phục vụ khách từ nhiều quốc gia. Khi khách không đọc được nội dung hoặc phải dùng Google Translate, niềm tin giảm ngay từ bước đầu. Website đa ngôn ngữ giúp bạn nói đúng ngôn ngữ của khách và giữ trải nghiệm thương hiệu nhất quán hơn.",
    sections: [
      {
        heading: "Khi nào doanh nghiệp cần website đa ngôn ngữ?",
        bullets: [
          "Khi phần lớn khách là khách quốc tế hoặc khách Hàn.",
          "Khi khách phải hiểu rõ dịch vụ, giá và chính sách trước khi booking.",
          "Khi bạn muốn dùng website làm trung tâm cho Google, Naver và social.",
          "Khi nội dung bản dịch máy không còn đủ để tạo niềm tin.",
        ],
      },
      {
        heading: "Đa ngôn ngữ không chỉ là dịch nội dung",
        body:
          "Một website đa ngôn ngữ tốt cần cấu trúc URL rõ ràng, metadata phù hợp từng ngôn ngữ, nội dung tự nhiên và CTA đúng với hành vi của từng nhóm khách. Đây là phần kỹ thuật và nội dung phải đi cùng nhau.",
      },
      {
        heading: "Phù hợp đặc biệt với khách Hàn",
        body:
          "Nếu bạn đang làm Naver Marketing hoặc phục vụ nhiều khách Hàn, website tiếng Hàn hoặc ít nhất có trang đích tiếng Hàn sẽ giúp hành trình từ Naver sang website mượt hơn rất nhiều.",
      },
    ],
    deliverables: {
      title: "Website đa ngôn ngữ của bạn sẽ có",
      items: [
        "Cấu trúc trang Việt/Anh/Hàn rõ ràng",
        "Metadata và URL theo từng ngôn ngữ",
        "Nút chuyển ngôn ngữ thuận tiện trên mobile",
        "CTA và nội dung phù hợp nhóm khách quốc tế",
        "Khả năng mở rộng thêm ngôn ngữ sau này",
        "Nền tảng tốt để kết hợp SEO và Naver",
      ],
    },
    whoFor: [
      "Spa và wellness phục vụ khách Hàn",
      "Khách sạn, homestay, villa đón khách quốc tế",
      "Nhà hàng, tour, trải nghiệm cần nội dung Anh/Hàn",
      "Doanh nghiệp muốn mở rộng tệp khách ngoài Việt Nam",
    ],
    process: [
      { step: "Tư vấn", detail: "Xác định tệp khách chính và ngôn ngữ ưu tiên." },
      { step: "Cấu trúc", detail: "Thiết kế hệ thống trang và điều hướng đa ngôn ngữ." },
      { step: "Phát triển", detail: "Code website và tối ưu metadata theo từng locale." },
      { step: "Hoàn thiện", detail: "Rà soát trải nghiệm người dùng và bàn giao quy trình cập nhật." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Giá tăng theo số ngôn ngữ, khối lượng nội dung và mức độ tùy biến.",
    faqs: [
      {
        q: "Website đa ngôn ngữ có cần dịch toàn bộ mọi trang không?",
        a: "Không nhất thiết. Có thể ưu tiên dịch các trang có tác động trực tiếp đến booking trước, rồi mở rộng dần.",
      },
      {
        q: "Có nên làm tiếng Hàn nếu đang đón khách Hàn?",
        a: "Thường là có, đặc biệt khi bạn đang đầu tư Naver. Nội dung tiếng Hàn giúp khách đi từ Naver sang website liền mạch hơn.",
      },
      {
        q: "Website đa ngôn ngữ có ảnh hưởng SEO không?",
        a: "Nếu làm đúng cấu trúc và metadata thì đây là điểm cộng. Làm sai cấu trúc mới dễ gây lẫn lộn cho Google và người dùng.",
      },
      {
        q: "Có thể bắt đầu từ Việt và Anh rồi mở rộng sau không?",
        a: "Có. Đây là cách thực tế với nhiều doanh nghiệp: triển khai lõi trước rồi thêm Hàn hoặc ngôn ngữ khác khi sẵn nội dung.",
      },
    ],
    related: [
      { label: "Website booking online", href: "/vi/thiet-ke-website/website-booking-online", note: "Tăng chuyển đổi" },
      { label: "Website khách sạn & homestay Hội An", href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an", note: "Ứng dụng cho lưu trú" },
      { label: "Website đa ngôn ngữ cho khách quốc tế", href: "/vi/blog/website-da-ngon-ngu-cho-khach-quoc-te", note: "Bài hỗ trợ" },
      { label: "Naver Marketing", href: "/vi/naver-marketing", note: "Khách Hàn" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-website.webp", alt: "Thiết kế website đa ngôn ngữ cho khách quốc tế" },
    ],
    schema: {
      serviceType: "Thiết kế website đa ngôn ngữ",
      offerMinPriceVnd: 10000000,
    },
  },

  /* ───────────────────────── WEBSITE SPOKE — WEBSITE BOOKING ONLINE ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/website-booking-online",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      { label: "Website booking online", href: "/vi/thiet-ke-website/website-booking-online" },
    ],
    primaryKeyword: "thiết kế website booking online",
    metaTitle:
      "Thiết kế website booking online cho dịch vụ du lịch | Công Thiên Agency",
    metaDescription:
      "Thiết kế website booking online cho spa, tour, khách sạn, trải nghiệm với form đặt chỗ, giỏ hàng, thanh toán và email xác nhận tự động.",
    eyebrow: "Website · Booking online",
    h1: "Thiết kế website booking online giúp khách đặt dịch vụ ngay trên trang",
    heroSub:
      "Nếu khách phải nhắn tin qua lại quá nhiều mới đặt được, bạn đang mất booking. Website booking online biến nhu cầu đang nóng thành hành động ngay lập tức.",
    heroCta: "Nhận tư vấn website booking online",
    intro:
      "Nhiều doanh nghiệp dịch vụ có website nhưng vẫn chưa bán được trực tiếp vì thiếu luồng đặt chỗ rõ ràng. Một website booking online tốt cần giảm ma sát: khách xem dịch vụ, chọn thời gian hoặc gói phù hợp, thanh toán nếu cần và nhận xác nhận ngay.",
    sections: [
      {
        heading: "Website booking online giải quyết vấn đề gì?",
        bullets: [
          "Giảm tình trạng khách hỏi rồi rời đi vì quy trình quá thủ công.",
          "Tăng tỷ lệ chốt khi khách đang có nhu cầu cao ngay trên website.",
          "Giảm no-show bằng xác nhận tự động và thanh toán trước nếu cần.",
          "Tạo cảm giác chuyên nghiệp hơn với khách quốc tế.",
        ],
      },
      {
        heading: "Một flow booking tốt cần những gì?",
        body:
          "Tùy ngành, flow có thể là chọn dịch vụ, chọn thời gian, điền thông tin, thanh toán và nhận email xác nhận. Điều quan trọng không nằm ở việc có nhiều bước, mà là mỗi bước phải rõ và hợp lý với hành vi đặt dịch vụ.",
      },
      {
        heading: "Phù hợp cho spa, tour, lưu trú và trải nghiệm",
        body:
          "Mô hình này đặc biệt phù hợp khi khách cần giữ chỗ trước. Serena Retreat và Ruong House là hai ví dụ thực tế cho cách website booking online giúp biến traffic thành đơn hàng hoặc booking.",
      },
    ],
    deliverables: {
      title: "Website booking online của bạn sẽ có",
      items: [
        "Flow đặt chỗ theo dịch vụ hoặc gói",
        "Khả năng thu cọc hoặc thanh toán online",
        "Email xác nhận tự động sau khi đặt",
        "Trang dịch vụ/tour/phòng rõ ràng trước khi booking",
        "Tối ưu mobile để khách đặt nhanh trên điện thoại",
        "Nền tảng tốt để kết hợp SEO và quảng bá đa kênh",
      ],
    },
    whoFor: [
      "Spa, massage, wellness",
      "Tour, cooking class, workshop",
      "Khách sạn, homestay, villa",
      "Doanh nghiệp dịch vụ muốn chốt khách trực tiếp",
    ],
    process: [
      { step: "Phân tích", detail: "Xác định hành vi đặt dịch vụ và điểm rơi chuyển đổi." },
      { step: "Thiết kế flow", detail: "Sắp xếp các bước booking đơn giản, rõ ràng và hợp lý." },
      { step: "Phát triển", detail: "Code form, giỏ hàng, thanh toán và email xác nhận." },
      { step: "Kiểm tra", detail: "Test trên mobile, rà soát ma sát và bàn giao." },
    ],
    priceFrom: "Từ 10.000.000đ / dự án",
    priceNote: "Tùy mức độ phức tạp của flow booking, thanh toán và số loại dịch vụ.",
    proof: {
      ...PROOF_SERENA,
      text: "Serena Retreat và Ruong House là hai ví dụ rõ nhất cho khả năng triển khai booking online, thanh toán và email xác nhận theo hành vi đặt dịch vụ thực tế.",
    },
    faqs: [
      {
        q: "Booking online có nhất thiết phải thanh toán trước không?",
        a: "Không. Có thể chỉ cần form booking hoặc thu cọc/thanh toán tùy cách vận hành của doanh nghiệp.",
      },
      {
        q: "Website booking online phù hợp ngành nào nhất?",
        a: "Phù hợp nhất với spa, tour, trải nghiệm, lưu trú và mọi dịch vụ cần giữ chỗ trước.",
      },
      {
        q: "Khách có nhận email sau khi đặt không?",
        a: "Có thể triển khai email xác nhận tự động để khách yên tâm và giảm sai sót thủ công.",
      },
      {
        q: "Làm website booking online có phức tạp hơn website thường không?",
        a: "Có, vì cần thiết kế flow chuyển đổi và xử lý logic đặt chỗ. Nhưng đây cũng là phần tạo giá trị kinh doanh rõ nhất.",
      },
    ],
    related: [
      { label: "Website khách sạn & homestay Hội An", href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an", note: "Ứng dụng cho lưu trú" },
      { label: "Website tour du lịch Hội An", href: "/vi/thiet-ke-website/website-tour-du-lich-hoi-an", note: "Ứng dụng cho tour" },
      { label: "Website booking online cần những gì", href: "/vi/blog/website-booking-online-can-nhung-gi", note: "Bài hỗ trợ" },
      { label: "Website đa ngôn ngữ", href: "/vi/thiet-ke-website/website-da-ngon-ngu", note: "Phục vụ khách quốc tế" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-website.webp", alt: "Thiết kế website booking online" },
    ],
    schema: {
      serviceType: "Thiết kế website booking online",
      offerMinPriceVnd: 10000000,
    },
  },

  /* ───────────────────────── NAVER PILLAR ───────────────────────── */
  {
    path: "/vi/naver-marketing",
    cluster: "naver",
    isPillar: true,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
    ],
    primaryKeyword: "Naver Marketing Việt Nam",
    metaTitle: "Naver Marketing Việt Nam cho khách Hàn | Công Thiên Agency",
    metaDescription:
      "Dịch vụ Naver Marketing Việt Nam cho spa, nhà hàng, khách sạn và tour muốn tiếp cận khách Hàn: Naver Blog, blogger Hàn, Naver Place và KOC.",
    eyebrow: "Dịch vụ · Naver",
    h1: "Naver Marketing Việt Nam cho doanh nghiệp muốn tiếp cận khách Hàn Quốc",
    heroSub:
      "Khách Hàn tìm thông tin trên Naver trước khi đến Việt Nam. Tôi giúp doanh nghiệp xuất hiện đúng nơi đó qua nội dung Naver Blog và blogger Hàn.",
    heroCta: "Nhận tư vấn Naver qua Zalo",
    intro:
      "Naver là cổng tìm kiếm chính của người Hàn. Trước khi đặt spa, nhà hàng hay tour tại Hội An – Đà Nẵng, khách Hàn thường đọc review trên Naver Blog. Dịch vụ Naver Marketing giúp doanh nghiệp của bạn có nội dung tiếng Hàn đáng tin ngay tại điểm chạm đó.",
    sections: [
      {
        heading: "Naver Marketing gồm những gì?",
        bullets: [
          "Booking blogger / reviewer Hàn Quốc viết bài trải nghiệm thực tế.",
          "Tạo tài khoản Naver và thiết lập Naver Blog cho doanh nghiệp.",
          "Viết và đăng bài định kỳ theo bộ từ khóa thống nhất.",
          "Tư vấn nội dung phù hợp hành vi tìm kiếm của khách Hàn.",
        ],
      },
      {
        heading: "Vì sao nội dung Naver quan trọng?",
        body:
          "Khách Hàn tin nội dung trên Naver hơn quảng cáo. Một bài Naver Blog trải nghiệm thật tạo social proof bằng tiếng Hàn, giúp khách yên tâm đặt dịch vụ ngay từ giai đoạn tìm hiểu.",
      },
      {
        heading: "Định hướng mục tiêu rõ ràng, không over-promise",
        body:
          "Mục tiêu là tăng khả năng hiển thị trên Naver Search và tạo thêm nguồn social proof tiếng Hàn theo bộ từ khóa đã thống nhất — không cam kết thứ hạng vĩnh viễn.",
      },
      {
        heading: "Trang này khác gì các bài blog Naver?",
        body:
          "Trang này là trang dịch vụ chính, dùng để giải thích phạm vi triển khai, quy trình, báo giá tham khảo và đối tượng phù hợp. Các bài blog Naver đi sâu vào từng câu hỏi nhỏ như thời điểm đầu tư, sai lầm thường gặp hoặc cách đo hiệu quả, chứ không thay thế trang dịch vụ này.",
      },
      {
        heading: "Nên đọc gì tiếp theo nếu đang cân nhắc đầu tư?",
        bodyParts: [
          { type: "text", text: "Nếu bạn đang ở giai đoạn ra quyết định, hãy đọc tiếp " },
          { type: "link", text: "khi nào nên đầu tư Naver Marketing", href: "/vi/blog/khi-nao-nen-dau-tu-naver-marketing" },
          { type: "text", text: " và " },
          { type: "link", text: "5 sai lầm thường gặp khi làm Naver Marketing", href: "/vi/blog/sai-lam-thuong-gap-khi-lam-naver-marketing" },
          { type: "text", text: " để phân biệt rõ giữa nhu cầu thật, kỳ vọng hợp lý và các lỗi triển khai phổ biến." },
        ],
      },
    ],
    whoFor: [
      "Spa, wellness phục vụ khách Hàn",
      "Nhà hàng, quán ăn được khách Hàn yêu thích",
      "Khách sạn, homestay đón khách Hàn",
      "Tour, cooking class, trải nghiệm cho khách Hàn",
    ],
    process: [
      { step: "Tư vấn", detail: "Xác định nhóm khách Hàn và bộ từ khóa Naver mục tiêu." },
      { step: "Lên kế hoạch", detail: "Chọn blogger phù hợp hoặc thiết lập kênh Naver Blog." },
      { step: "Triển khai", detail: "Viết – đăng nội dung và tối ưu theo từ khóa." },
      { step: "Tổng hợp", detail: "Bàn giao link bài và đánh giá hiệu quả nội dung." },
    ],
    priceFrom: "Naver Blogger Review từ 8.000.000đ / 4 bài",
    priceNote: "Gói tài khoản + 8 bài/tháng: 6.000.000đ/tháng. KOC báo giá theo chiến dịch.",
    proof: {
      ...PROOF_SERENA,
      text: "Website (như Serena Retreat) làm nền tảng để nội dung Naver dẫn khách Hàn về một trang đặt dịch vụ chuyên nghiệp.",
    },
    faqs: [
      {
        q: "Naver Marketing phù hợp với doanh nghiệp nào?",
        a: "Doanh nghiệp muốn tiếp cận khách Hàn Quốc — đặc biệt spa, nhà hàng, khách sạn và tour tại Hội An – Đà Nẵng.",
      },
      {
        q: "Booking blogger Hàn và tự xây kênh Naver khác nhau thế nào?",
        a: "Blogger Hàn tạo social proof nhanh từ người thật; kênh Naver Blog riêng xây tài sản nội dung dài hạn. Có thể kết hợp cả hai.",
      },
      {
        q: "Dừng gói Naver hàng tháng có được bàn giao tài khoản không?",
        a: "Có — tài khoản Naver được bàn giao khi khách dừng dịch vụ.",
      },
      {
        q: "Có cam kết lên top Naver không?",
        a: "Tôi đặt mục tiêu theo bộ từ khóa đã thống nhất và tăng hiển thị, nhưng không cam kết thứ hạng vĩnh viễn.",
      },
    ],
    related: [
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Ngành · Spa" },
      { label: "Naver cho nhà hàng", href: "/vi/naver-marketing/cho-nha-hang", note: "Ngành · Nhà hàng" },
      { label: "Naver cho khách sạn", href: "/vi/naver-marketing/cho-khach-san", note: "Ngành · Khách sạn" },
      { label: "Naver cho tour", href: "/vi/naver-marketing/cho-tour", note: "Ngành · Tour & trải nghiệm" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Gói Naver Blogger Review" },
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Spoke · Content" },
      { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver", note: "Spoke · Monthly" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Spoke · Place" },
      { label: "Naver KOC", href: "/vi/naver-marketing/naver-koc", note: "Spoke · Campaign" },
      { label: "Naver Marketing Hội An", href: "/vi/naver-marketing/hoi-an", note: "Theo khu vực Hội An" },
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Theo khu vực Đà Nẵng" },
      { label: "Bảng giá Naver Marketing", href: "/vi/naver-marketing/bang-gia-chi-tiet", note: "Chi phí và phạm vi" },
      { label: "Naver hay Google cho khách Hàn", href: "/vi/naver-marketing/naver-vs-google", note: "So sánh kênh" },
      { label: "Naver Marketing Agency Vietnam", href: "/en/naver-marketing/naver-marketing-agency-vietnam", note: "English landing page" },
      { label: "Naver Blog Marketing Vietnam", href: "/en/naver-marketing/naver-blog-marketing-vietnam", note: "English landing page" },
      { label: "Naver SEO Agency for Hotels", href: "/en/naver-marketing/naver-seo-agency-for-hotels", note: "English landing page" },
      { label: "How to attract Korean tourists with Naver", href: "/en/naver-marketing/attract-korean-tourists-with-naver", note: "English guide" },
      { label: "Naver Map optimization for restaurants", href: "/en/naver-marketing/naver-map-optimization-restaurants-vietnam", note: "English landing page" },
      { label: "Khi nào nên đầu tư Naver Marketing", href: "/vi/blog/khi-nao-nen-dau-tu-naver-marketing", note: "Bài hỗ trợ quyết định" },
      { label: "5 sai lầm thường gặp khi làm Naver Marketing", href: "/vi/blog/sai-lam-thuong-gap-khi-lam-naver-marketing", note: "Bài hỗ trợ triển khai" },
      { label: "Naver Place là gì", href: "/vi/blog/naver-place-la-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver Marketing tiếp cận khách Hàn Quốc" },
    ],
    schema: { serviceType: "Naver Marketing", offerMinPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — CHO SPA ───────────────────────── */
  {
    path: "/vi/naver-marketing/cho-spa",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver cho spa", href: "/vi/naver-marketing/cho-spa" },
    ],
    primaryKeyword: "Naver Blog cho spa",
    metaTitle: "Naver Blog cho spa: tiếp cận khách Hàn tại Hội An – Đà Nẵng | Công Thiên Agency",
    metaDescription:
      "Naver Blog cho spa giúp tiếp cận khách Hàn trước khi họ đến Hội An – Đà Nẵng: booking blogger Hàn, nội dung trải nghiệm và social proof tiếng Hàn.",
    eyebrow: "Naver · Spa",
    h1: "Naver Blog cho spa: tiếp cận khách Hàn Quốc trước khi họ đến Hội An – Đà Nẵng",
    heroSub:
      "Khách Hàn chọn spa qua review trên Naver. Tôi giúp spa của bạn có nội dung tiếng Hàn đáng tin ngay tại điểm khách đang tìm hiểu.",
    heroCta: "Nhận tư vấn Naver cho spa qua Zalo",
    intro:
      "Spa cao cấp tại Hội An – Đà Nẵng đón rất nhiều khách Hàn, và họ gần như luôn tra Naver trước khi đặt lịch. Naver Blog cho spa tập trung tạo nội dung trải nghiệm thật bằng tiếng Hàn để khách yên tâm chọn spa của bạn.",
    sections: [
      {
        heading: "Khách Hàn tìm spa ở đâu trước khi đặt?",
        body:
          "Họ tìm trên Naver: blog trải nghiệm, hình ảnh không gian, treatment và cảm nhận của người Hàn khác. Nếu spa của bạn không có nội dung ở đó, khách sẽ chọn nơi đã có review.",
      },
      {
        heading: "Naver Blog cho spa gồm những gì?",
        bullets: [
          "Booking blogger Hàn trải nghiệm treatment và viết bài thật.",
          "Nội dung tập trung không gian, dịch vụ và cảm nhận.",
          "Tối ưu theo bộ từ khóa spa mà khách Hàn hay dùng.",
          "Có thể kết hợp gói tài khoản Naver đăng bài hàng tháng.",
        ],
      },
      {
        heading: "Kết nối với website spa để chốt booking",
        body:
          "Nội dung Naver dẫn khách về website spa có treatment pages và đặt lịch online (như Serena Retreat) — biến sự quan tâm thành booking thực tế.",
      },
    ],
    whoFor: [
      "Spa cao cấp đón khách Hàn",
      "Day spa, massage tại khu phố cổ / biển",
      "Spa mới mở muốn tạo review tiếng Hàn",
      "Spa đã có website cần thêm kênh khách Hàn",
    ],
    process: [
      { step: "Tư vấn", detail: "Phân tích treatment và bộ từ khóa spa cho khách Hàn." },
      { step: "Chọn blogger", detail: "Tìm blogger Hàn phù hợp tệp khách của spa." },
      { step: "Trải nghiệm & viết", detail: "Sắp xếp lịch trải nghiệm và brief nội dung." },
      { step: "Đăng & tổng hợp", detail: "Đăng bài, tối ưu từ khóa và bàn giao link." },
    ],
    priceFrom: "Naver Blogger Review 8.000.000đ / 4 bài",
    priceNote: "Có thể kết hợp gói tài khoản + 8 bài/tháng 6.000.000đ/tháng.",
    proof: {
      ...PROOF_SERENA,
      text: "Serena Retreat là ví dụ website spa nơi nội dung Naver có thể dẫn khách Hàn về trang đặt lịch chuyên nghiệp.",
    },
    faqs: [
      {
        q: "Naver Blog cho spa có hiệu quả với spa mới mở không?",
        a: "Có — đây là cách nhanh để tạo review tiếng Hàn đầu tiên, giúp khách Hàn tin tưởng spa chưa có nhiều đánh giá.",
      },
      {
        q: "Một gói gồm bao nhiêu bài?",
        a: "Gói Naver Blogger Review gồm 4 bài (8.000.000đ); có thể bổ sung gói đăng bài hàng tháng.",
      },
      {
        q: "Spa cần chuẩn bị gì?",
        a: "Hình ảnh không gian, danh sách treatment, điểm mạnh dịch vụ và lịch để sắp xếp trải nghiệm cho blogger.",
      },
      {
        q: "Có cần website trước không?",
        a: "Không bắt buộc, nhưng website spa giúp chuyển sự quan tâm từ Naver thành booking hiệu quả hơn.",
      },
    ],
    related: [
      { label: "Website spa Hội An", href: "/vi/thiet-ke-website/spa-hoi-an", note: "Nền tảng chốt booking" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Chi tiết gói blogger" },
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Theo khu vực" },
      { label: "Bộ từ khóa Naver cho du lịch", href: "/vi/blog/bo-tu-khoa-naver-cho-du-lich", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/spa.webp", alt: "Naver Blog cho spa Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Naver Blog cho spa", offerPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — ĐÀ NẴNG ───────────────────────── */
  {
    path: "/vi/naver-marketing/da-nang",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang" },
    ],
    primaryKeyword: "Naver Marketing Đà Nẵng",
    metaTitle: "Naver Marketing Đà Nẵng: marketing khách Hàn | Công Thiên Agency",
    metaDescription:
      "Naver Marketing Đà Nẵng cho spa, nhà hàng, khách sạn và tour: booking blogger Hàn, nội dung Naver Blog và social proof tiếng Hàn cho thị trường khách Hàn lớn tại Đà Nẵng.",
    eyebrow: "Naver · Đà Nẵng",
    h1: "Naver Marketing Đà Nẵng — tiếp cận thị trường khách Hàn Quốc lớn nhất miền Trung",
    heroSub:
      "Đà Nẵng là điểm đến hàng đầu của khách Hàn. Tôi giúp doanh nghiệp xuất hiện trên Naver Blog — nơi khách Hàn quyết định chọn dịch vụ.",
    heroCta: "Nhận tư vấn Naver Đà Nẵng qua Zalo",
    intro:
      "Đà Nẵng đón lượng khách Hàn Quốc rất lớn mỗi năm, và Naver là kênh họ tin tưởng nhất khi tìm spa, nhà hàng, khách sạn và tour. Naver Marketing tại Đà Nẵng giúp doanh nghiệp của bạn hiện diện đúng nơi khách Hàn đang tìm hiểu.",
    sections: [
      {
        heading: "Vì sao Đà Nẵng cần Naver Marketing?",
        bullets: [
          "Khách Hàn chiếm tỷ trọng lớn trong khách quốc tế đến Đà Nẵng.",
          "Họ tin Naver Blog hơn quảng cáo tiếng Việt hoặc tiếng Anh.",
          "Cạnh tranh giữa các spa, nhà hàng cho khách Hàn rất cao.",
          "Nội dung tiếng Hàn tạo lợi thế ngay tại điểm chạm đầu tiên.",
        ],
      },
      {
        heading: "Triển khai Naver tại Đà Nẵng",
        body:
          "Tôi chọn blogger Hàn phù hợp ngành và khu vực Đà Nẵng, sắp xếp trải nghiệm và tạo nội dung tối ưu theo bộ từ khóa khách Hàn hay tìm cho Đà Nẵng.",
      },
      {
        heading: "Kết hợp website và Google Maps",
        body:
          "Nội dung Naver mạnh nhất khi đi cùng website chuyên nghiệp và hồ sơ Google Maps được tối ưu — tạo trải nghiệm tin cậy từ tìm kiếm đến đặt dịch vụ.",
      },
    ],
    whoFor: [
      "Spa, wellness tại Đà Nẵng",
      "Nhà hàng, quán ăn khu vực biển Mỹ Khê / trung tâm",
      "Khách sạn, resort đón khách Hàn",
      "Tour, dịch vụ du lịch tại Đà Nẵng",
    ],
    process: [
      { step: "Tư vấn", detail: "Xác định ngành và bộ từ khóa Naver cho Đà Nẵng." },
      { step: "Chọn blogger", detail: "Tìm blogger Hàn phù hợp khu vực và tệp khách." },
      { step: "Triển khai", detail: "Trải nghiệm, viết và đăng nội dung tối ưu." },
      { step: "Tổng hợp", detail: "Bàn giao link và đánh giá hiệu quả." },
    ],
    priceFrom: "Naver Blogger Review từ 8.000.000đ / 4 bài",
    priceNote: "Gói tài khoản + 8 bài/tháng: 6.000.000đ/tháng. KOC báo giá theo chiến dịch.",
    faqs: [
      {
        q: "Naver Marketing Đà Nẵng khác Hội An không?",
        a: "Bộ từ khóa, khu vực và tệp khách khác nhau; nội dung được tối ưu riêng cho ngữ cảnh Đà Nẵng.",
      },
      {
        q: "Ngành nào hợp nhất ở Đà Nẵng?",
        a: "Spa, nhà hàng, khách sạn/resort và tour — những ngành khách Hàn tra cứu nhiều trên Naver.",
      },
      {
        q: "Có cần nội dung tiếng Hàn chuẩn không?",
        a: "Có — nội dung do blogger Hàn viết tự nhiên theo trải nghiệm thật, đáng tin với khách Hàn.",
      },
      {
        q: "Chi phí bắt đầu từ bao nhiêu?",
        a: "Gói Naver Blogger Review từ 8.000.000đ/4 bài; báo giá KOC theo chiến dịch.",
      },
    ],
    related: [
      { label: "Naver Marketing Hội An", href: "/vi/naver-marketing/hoi-an", note: "Khu vực lân cận" },
      { label: "Naver cho khách sạn", href: "/vi/naver-marketing/cho-khach-san", note: "Theo ngành khách sạn" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Chi tiết gói blogger" },
      { label: "Vì sao khách Hàn dùng Naver", href: "/vi/blog/vi-sao-khach-han-dung-naver", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver Marketing Đà Nẵng cho khách Hàn" },
    ],
    schema: { serviceType: "Naver Marketing Đà Nẵng", offerMinPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — BOOKING BLOGGER HÀN ───────────────────────── */
  {
    path: "/vi/naver-marketing/booking-blogger-han",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Booking blogger Hàn", href: "/vi/naver-marketing/booking-blogger-han" },
    ],
    primaryKeyword: "booking blogger Hàn Quốc",
    metaTitle: "Booking blogger Hàn Quốc & Naver Blogger Review | Công Thiên Agency",
    metaDescription:
      "Dịch vụ booking blogger Hàn Quốc / Naver Blogger Review: 8.000.000đ/4 bài. Blogger Hàn trải nghiệm thật, viết bài Naver Blog tối ưu từ khóa, tạo social proof tiếng Hàn.",
    eyebrow: "Naver · Blogger Hàn",
    h1: "Booking blogger Hàn Quốc — Naver Blogger Review cho doanh nghiệp du lịch",
    heroSub:
      "Để blogger Hàn trải nghiệm thật và viết bài Naver Blog về doanh nghiệp của bạn — nguồn social proof tiếng Hàn đáng tin với khách Hàn.",
    heroCta: "Nhận tư vấn booking blogger qua Zalo",
    intro:
      "Booking blogger Hàn (Naver Blogger Review) là cách nhanh để có nội dung trải nghiệm tiếng Hàn cho spa, nhà hàng, khách sạn hay tour. Blogger Hàn trải nghiệm dịch vụ thực tế và viết bài trên Naver Blog theo bộ từ khóa đã thống nhất.",
    sections: [
      {
        heading: "Gói Naver Blogger Review gồm gì?",
        bullets: [
          "Booking blogger / reviewer Hàn Quốc phù hợp ngành.",
          "Bài viết giới thiệu trải nghiệm doanh nghiệp bằng tiếng Hàn.",
          "Tối ưu theo bộ từ khóa đã thống nhất.",
          "Bàn giao link bài viết sau khi đăng.",
        ],
      },
      {
        heading: "Naver KOC / Korean Blogger Experience",
        body:
          "Với chiến dịch lớn hơn, tôi tổ chức trải nghiệm cho nhóm blogger/KOC Hàn: tìm người phù hợp, sắp xếp lịch, brief nội dung, theo dõi bài đăng và tổng hợp hiệu quả. Hạng mục này báo giá theo chiến dịch.",
      },
      {
        heading: "Định hướng minh bạch",
        body:
          "Mục tiêu là tăng hiển thị trên Naver Search và tạo social proof tiếng Hàn theo bộ từ khóa thống nhất. Nội dung dựa trên trải nghiệm thật của blogger.",
      },
    ],
    whoFor: [
      "Spa, nhà hàng, khách sạn, tour đón khách Hàn",
      "Doanh nghiệp cần review tiếng Hàn đầu tiên",
      "Thương hiệu chuẩn bị mùa khách Hàn cao điểm",
      "Doanh nghiệp muốn chiến dịch KOC quy mô lớn hơn",
    ],
    process: [
      { step: "Tư vấn", detail: "Chốt ngành, mục tiêu và bộ từ khóa Naver." },
      { step: "Chọn blogger", detail: "Đề xuất blogger Hàn phù hợp tệp khách." },
      { step: "Trải nghiệm", detail: "Sắp xếp lịch trải nghiệm và brief nội dung." },
      { step: "Đăng & báo cáo", detail: "Đăng bài, tổng hợp link và đánh giá hiệu quả." },
    ],
    priceFrom: "8.000.000đ / 4 bài",
    priceNote: "Naver KOC / Korean Blogger Experience: báo giá theo chiến dịch.",
    faqs: [
      {
        q: "Một gói gồm mấy bài và giá bao nhiêu?",
        a: "Gói Naver Blogger Review gồm 4 bài, giá 8.000.000đ.",
      },
      {
        q: "Blogger viết theo trải nghiệm thật chứ?",
        a: "Đúng vậy — blogger Hàn trải nghiệm dịch vụ thực tế rồi viết bài, đó là điều tạo niềm tin với khách Hàn.",
      },
      {
        q: "Naver KOC khác Naver Blogger Review thế nào?",
        a: "KOC thường là chiến dịch nhiều người/trải nghiệm sâu hơn, báo giá theo quy mô; Blogger Review là gói 4 bài tiêu chuẩn.",
      },
      {
        q: "Doanh nghiệp cần chuẩn bị gì?",
        a: "Thông tin dịch vụ, hình ảnh, điểm mạnh và lịch để sắp xếp trải nghiệm cho blogger.",
      },
    ],
    related: [
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Áp dụng cho ngành spa" },
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Theo khu vực Đà Nẵng" },
      { label: "Naver KOC và blogger Hàn", href: "/vi/blog/naver-koc-blogger-han-la-gi", note: "Blog" },
      { label: "Cách viết bài Naver Blog chuẩn", href: "/vi/blog/cach-viet-bai-naver-blog-chuan", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Booking blogger Hàn Quốc Naver Blogger Review" },
    ],
    schema: { serviceType: "Booking blogger Hàn Quốc", offerPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — VIẾT BÀI NAVER BLOG ───────────────────────── */
  {
    path: "/vi/naver-marketing/viet-bai-naver-blog",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog" },
    ],
    primaryKeyword: "Naver Blog dịch vụ viết bài review",
    metaTitle: "Naver Blog - Dịch vụ viết bài review | Congthienagency.com",
    metaDescription:
      "Dịch vụ viết bài review Naver Blog bằng tiếng Hàn cho spa, nhà hàng, khách sạn và tour. Có tư vấn chiến lược, chi phí rõ ràng, FAQ và liên hệ nhanh qua Zalo/WhatsApp.",
    eyebrow: "Naver Blog · Review tiếng Hàn",
    h1: "Naver Blog - Dịch vụ viết bài review giúp doanh nghiệp tiếp cận khách Hàn",
    heroSub:
      "Tạo bài review tiếng Hàn tự nhiên, có cấu trúc SEO Naver, hình ảnh thật và lời kêu gọi hành động rõ ràng để khách Hàn tin tưởng trước khi nhắn Zalo, WhatsApp hoặc đặt dịch vụ.",
    heroCta: "Tư vấn Naver Blog qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Naver Blog là một trong những điểm chạm quan trọng khi khách Hàn tìm hiểu spa, nhà hàng, khách sạn, tour hoặc trải nghiệm tại Việt Nam. Dịch vụ viết bài review Naver Blog của Công Thiên Agency tập trung vào nội dung có ích cho người đọc Hàn: giải thích rõ trải nghiệm, đưa hình ảnh thật, bám từ khóa Naver và dẫn khách về kênh liên hệ phù hợp như Zalo, WhatsApp, website hoặc Naver Place.",
    sections: [
      {
        heading: "What is Naver Blog? Nền tảng này hoạt động thế nào?",
        body:
          "Naver Blog là hệ sinh thái blog nằm trong công cụ tìm kiếm Naver của Hàn Quốc. Người dùng Hàn thường đọc bài review, ảnh trải nghiệm và cảm nhận thực tế trước khi chọn spa, nhà hàng, khách sạn hoặc tour. Vì vậy một bài Naver Blog tốt không chỉ để giới thiệu thương hiệu, mà còn tạo bằng chứng xã hội bằng tiếng Hàn ở đúng nơi khách đang tìm kiếm.",
      },
      {
        heading: "Quảng cáo Naver Blog là gì?",
        body:
          "Với doanh nghiệp du lịch, “quảng cáo Naver Blog” thường không giống banner ads. Cách làm hiệu quả hơn là xây bài review, booking blogger/KOC hoặc đăng nội dung đều trên tài khoản Naver Blog để tăng độ tin cậy. Bài viết cần tự nhiên, có hình thật, có địa điểm, có từ khóa ngành và có đường dẫn liên hệ rõ ràng.",
      },
      {
        heading: "Dịch vụ này phù hợp khi nào?",
        bullets: [
          "Khi doanh nghiệp muốn khách Hàn tìm thấy bài review trước khi ra quyết định.",
          "Khi cần nội dung tiếng Hàn tự nhiên, không phải dịch máy từ tiếng Việt.",
          "Khi muốn bám bộ từ khóa như spa Hội An, nhà hàng Đà Nẵng, tour Hội An, khách sạn Việt Nam.",
          "Khi cần dẫn khách về Zalo, WhatsApp, website, Naver Place hoặc form đặt dịch vụ.",
        ],
      },
      {
        heading: "Một bài Naver Blog tốt cần điều gì?",
        bodyParts: [
          { type: "text", text: "Tiêu đề đúng ý định tìm kiếm, mở bài có bối cảnh, thân bài có trải nghiệm hoặc thông tin hữu ích, hình ảnh phù hợp và văn phong đúng kiểu Naver. Nếu bạn muốn hiểu sâu hơn về cách cấu trúc bài, hãy xem " },
          { type: "link", text: "bài cách viết bài Naver Blog chuẩn", href: "/vi/blog/cach-viet-bai-naver-blog-chuan" },
          { type: "text", text: ". Nội dung phải vừa đọc được, vừa hỗ trợ hiển thị tìm kiếm." },
        ],
      },
      {
        heading: "Viết bài mạnh nhất khi đi cùng tài khoản và Place",
        bodyParts: [
          { type: "text", text: "Bài Naver Blog phát huy tốt hơn khi đi cùng " },
          { type: "link", text: "quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver" },
          { type: "text", text: " và " },
          { type: "link", text: "tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place" },
          { type: "text", text: ". Khi đó, nội dung không chỉ phục vụ tìm kiếm mà còn làm dày tín hiệu tin cậy quanh địa điểm." },
        ],
      },
      {
        heading: "Chi phí viết bài review Naver Blog",
        body:
          "Chi phí phụ thuộc vào số bài, độ dài, yêu cầu hình ảnh, đăng trên tài khoản doanh nghiệp hay kết hợp blogger Hàn. Với campaign cần social proof nhanh, có thể bắt đầu bằng gói Naver Blogger Review 8.000.000đ / 4 bài. Với doanh nghiệp muốn xây kênh dài hạn, nên dùng gói đăng bài theo tháng.",
      },
      {
        heading: "Trang được tối ưu để Google crawl và hiểu nội dung",
        body:
          "Trang này có cấu trúc heading rõ ràng, breadcrumb, FAQ, Service schema, metadata, sitemap và internal links tới các bài hướng dẫn Naver liên quan. Đây là nền tảng kỹ thuật giúp Google hiểu chủ đề, nhưng thứ hạng cuối cùng còn phụ thuộc cạnh tranh từ khóa, backlink, tín hiệu thương hiệu và chất lượng nội dung sau khi xuất bản.",
      },
    ],
    deliverables: {
      title: "Một gói viết bài review Naver Blog gồm có",
      items: [
        "Tư vấn mục tiêu và nhóm khách Hàn cần tiếp cận",
        "Nghiên cứu cụm từ khóa theo ngành, khu vực và ý định tìm kiếm",
        "Outline bài review theo cấu trúc người Hàn quen đọc",
        "Viết nội dung tiếng Hàn tự nhiên, tránh văn phong dịch máy",
        "Gợi ý hình ảnh thật cần chuẩn bị cho bài review",
        "CTA dẫn về Zalo, WhatsApp, website, Naver Place hoặc trang đặt dịch vụ",
        "Liên kết nội bộ giữa Naver Blog, Naver Place và website nếu có",
      ],
    },
    whoFor: [
      "Spa, massage, wellness phục vụ khách Hàn",
      "Nhà hàng, cafe, hải sản, cooking class",
      "Khách sạn, homestay, villa tại Hội An – Đà Nẵng",
      "Tour, local experience, dịch vụ du lịch muốn có review tiếng Hàn",
      "Doanh nghiệp đã có tài khoản Naver Blog hoặc muốn bắt đầu từ đầu",
    ],
    process: [
      { step: "Audit nhanh", detail: "Xem ngành, địa điểm, website, Google Maps, Naver Place và nội dung hiện có." },
      { step: "Lên keyword map", detail: "Chọn chủ đề theo nhu cầu khách Hàn: review, giá, vị trí, trải nghiệm, cách đặt." },
      { step: "Viết bài review", detail: "Soạn nội dung tiếng Hàn tự nhiên, có cấu trúc tiêu đề, đoạn ngắn và CTA rõ." },
      { step: "Đăng & đo lường", detail: "Đăng bài hoặc bàn giao content, sau đó theo dõi index, hiển thị và lead qua Zalo/WhatsApp." },
    ],
    priceFrom: "Từ 8.000.000đ / 4 bài review",
    priceNote: "Giá phụ thuộc số bài, ngành, hình ảnh, tài khoản đăng bài và việc có booking blogger Hàn hay không. Nhắn Zalo/WhatsApp để nhận báo giá theo case thực tế.",
    faqs: [
      {
        q: "Naver Blog là gì?",
        a: "Naver Blog là nền tảng blog trong hệ sinh thái tìm kiếm Naver của Hàn Quốc. Khách Hàn thường đọc bài review, hình ảnh và trải nghiệm trên Naver Blog trước khi chọn dịch vụ.",
      },
      {
        q: "Quảng cáo Naver Blog là gì?",
        a: "Trong thực tế marketing du lịch, quảng cáo Naver Blog thường là hoạt động tạo bài review, booking blogger/KOC hoặc đăng nội dung tối ưu từ khóa để doanh nghiệp xuất hiện và tạo niềm tin với khách Hàn.",
      },
      {
        q: "Chi phí viết bài review Naver Blog bao nhiêu?",
        a: "Gói tham khảo bắt đầu từ 8.000.000đ / 4 bài review. Chi phí thay đổi theo số bài, yêu cầu hình ảnh, đăng trên tài khoản doanh nghiệp hay qua blogger Hàn.",
      },
      {
        q: "Dịch vụ viết bài có bao gồm đăng bài không?",
        a: "Có thể bao gồm cả đăng bài nếu bạn dùng gói quản lý tài khoản theo tháng; nếu không, có thể tách riêng phần content.",
      },
      {
        q: "Bài được viết mới hay dịch từ tiếng Việt?",
        a: "Ưu tiên viết theo cách đọc tự nhiên của người Hàn, không đơn thuần dịch nguyên văn từ tiếng Việt.",
      },
      {
        q: "Dịch vụ này khác booking blogger Hàn thế nào?",
        a: "Booking blogger tạo social proof từ người ngoài; dịch vụ viết bài tập trung xây kênh nội dung của chính doanh nghiệp.",
      },
      {
        q: "Có cần chuẩn bị hình ảnh không?",
        a: "Có. Hình ảnh thật, phù hợp bối cảnh là phần rất quan trọng của một bài Naver Blog hiệu quả.",
      },
      {
        q: "Trang này có giúp lên top Google ngay không?",
        a: "Không thể cam kết lên top ngay vì còn phụ thuộc cạnh tranh, backlink, thương hiệu và lịch sử domain. Tuy nhiên trang được tối ưu metadata, breadcrumb, FAQ schema, Service schema, sitemap và nội dung chuyên sâu để Google crawl/index tốt hơn.",
      },
      {
        q: "Làm sao liên hệ tư vấn nhanh nhất?",
        a: `Bạn có thể nhắn Zalo ${SITE.contact.phoneDisplay} hoặc WhatsApp để gửi ngành nghề, địa điểm, website/Naver hiện có và mục tiêu muốn tiếp cận khách Hàn.`,
      },
    ],
    related: [
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Tạo review nhanh" },
      { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver", note: "Đi cùng dịch vụ này" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Bổ trợ tín hiệu địa điểm" },
      { label: "Naver KOC", href: "/vi/naver-marketing/naver-koc", note: "Khi cần campaign lớn hơn" },
      { label: "Cách viết bài Naver Blog chuẩn", href: "/vi/blog/cach-viet-bai-naver-blog-chuan", note: "Blog" },
      { label: "Chi phí Naver Marketing", href: "/vi/blog/chi-phi-naver-marketing", note: "Bảng giá tham khảo" },
      { label: "Naver Place khác Naver Blog", href: "/vi/blog/naver-place-khac-naver-blog-the-nao", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver Blog dịch vụ viết bài review tiếng Hàn" },
    ],
    schema: { serviceType: "Dịch vụ viết bài review Naver Blog", offerPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — QUẢN LÝ TÀI KHOẢN NAVER ───────────────────────── */
  {
    path: "/vi/naver-marketing/quan-ly-tai-khoan-naver",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver" },
    ],
    primaryKeyword: "quản lý tài khoản Naver",
    metaTitle: "Quản lý tài khoản Naver hàng tháng | Công Thiên Agency",
    metaDescription:
      "Dịch vụ quản lý tài khoản Naver Blog theo tháng: lên kế hoạch nội dung, viết bài, đăng đều, tối ưu từ khóa và bàn giao tài khoản cho doanh nghiệp khi dừng dịch vụ.",
    eyebrow: "Naver · Quản lý tài khoản",
    h1: "Quản lý tài khoản Naver Blog hàng tháng cho doanh nghiệp du lịch",
    heroSub:
      "Nếu doanh nghiệp muốn xây hiện diện bền vững trên Naver, bạn cần một tài khoản được chăm đều, bài đăng có chủ đích và nội dung được vận hành như một tài sản thực sự.",
    heroCta: "Nhận tư vấn quản lý tài khoản Naver",
    intro:
      "Booking blogger tạo đà nhanh, nhưng tài khoản Naver riêng mới là tài sản nội dung dài hạn của doanh nghiệp. Dịch vụ quản lý tài khoản Naver hàng tháng giúp bạn có lịch đăng đều, bài viết nhất quán và một kênh có thể tiếp tục phát triển ngay cả khi dừng dịch vụ.",
    sections: [
      {
        heading: "Dịch vụ quản lý tài khoản gồm gì?",
        bullets: [
          "Thiết lập hoặc rà soát tài khoản Naver Blog của doanh nghiệp.",
          "Lên lịch chủ đề theo tháng dựa trên bộ từ khóa mục tiêu.",
          "Viết và đăng bài đều đặn theo nhịp phù hợp.",
          "Bàn giao tài khoản đầy đủ nếu doanh nghiệp dừng dịch vụ.",
        ],
      },
      {
        heading: "Vì sao tài khoản riêng quan trọng?",
        bodyParts: [
          { type: "text", text: "Một kênh Naver Blog riêng giúp doanh nghiệp không chỉ phụ thuộc vào review từ bên ngoài. Bạn tích lũy dần nội dung, tín hiệu thương hiệu và khả năng dẫn khách Hàn về đúng website hoặc điểm chạm mình kiểm soát. Đây là phần bổ trợ trực tiếp cho " },
          { type: "link", text: "dịch vụ viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog" },
          { type: "text", text: "." },
        ],
      },
      {
        heading: "Đây là cách xây hiện diện bền hơn chiến dịch ngắn hạn",
        bodyParts: [
          { type: "text", text: "Khi tài khoản được quản lý tốt trong nhiều tháng, Naver nhận thấy kênh có hoạt động thật và nội dung có chủ đích. Nếu bạn đang thắc mắc nhịp này bao lâu mới có tín hiệu, xem thêm bài " },
          { type: "link", text: "bao lâu thì Naver có tín hiệu", href: "/vi/blog/bao-lau-thi-naver-co-tin-hieu" },
          { type: "text", text: "." },
        ],
      },
    ],
    whoFor: [
      "Doanh nghiệp muốn có kênh Naver riêng",
      "Spa, nhà hàng, khách sạn cần đăng bài đều",
      "Thương hiệu đã có review ban đầu và muốn đi đường dài",
      "Doanh nghiệp cần bàn giao tài sản nội dung về sau",
    ],
    process: [
      { step: "Thiết lập", detail: "Tạo hoặc rà soát tài khoản Naver và định hướng nội dung." },
      { step: "Kế hoạch tháng", detail: "Chốt lịch bài, chủ đề và nhóm từ khóa cho từng tháng." },
      { step: "Vận hành", detail: "Viết, đăng và giữ nhịp nội dung ổn định." },
      { step: "Bàn giao", detail: "Lưu toàn bộ quyền sở hữu tài khoản cho doanh nghiệp." },
    ],
    priceFrom: "6.000.000đ / tháng",
    priceNote: "Mức tham chiếu cho gói tài khoản + 8 bài/tháng, có thể điều chỉnh theo phạm vi.",
    faqs: [
      {
        q: "Dừng dịch vụ có được bàn giao tài khoản không?",
        a: "Có. Tài khoản Naver được bàn giao cho doanh nghiệp khi dừng dịch vụ.",
      },
      {
        q: "Một tháng gồm bao nhiêu bài?",
        a: "Gói tham chiếu hiện tại là 8 bài/tháng; có thể điều chỉnh theo nhu cầu thực tế.",
      },
      {
        q: "Có nên làm cùng booking blogger không?",
        a: "Rất nên. Blogger tạo social proof nhanh, còn tài khoản riêng xây tài sản dài hạn.",
      },
      {
        q: "Dịch vụ này có phù hợp doanh nghiệp mới bắt đầu không?",
        a: "Có, đặc biệt nếu bạn muốn xây kênh Naver bài bản ngay từ đầu thay vì chỉ làm theo chiến dịch ngắn hạn.",
      },
    ],
    related: [
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Content engine" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Điểm chạm địa điểm" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Tạo đà ban đầu" },
      { label: "Cách tạo và vận hành tài khoản Naver Blog", href: "/vi/blog/cach-tao-va-van-hanh-tai-khoan-naver-blog", note: "Blog" },
      { label: "Bao lâu thì Naver có tín hiệu", href: "/vi/blog/bao-lau-thi-naver-co-tin-hieu", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Quản lý tài khoản Naver Blog hàng tháng" },
    ],
    schema: { serviceType: "Quản lý tài khoản Naver", offerPriceVnd: 6000000 },
  },

  /* ───────────────────────── NAVER SPOKE — TỐI ƯU NAVER PLACE ───────────────────────── */
  {
    path: "/vi/naver-marketing/toi-uu-naver-place",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place" },
    ],
    primaryKeyword: "tối ưu Naver Place",
    metaTitle: "Tối ưu Naver Place cho khách Hàn | Công Thiên Agency",
    metaDescription:
      "Dịch vụ tối ưu Naver Place cho spa, nhà hàng, khách sạn và tour: thông tin địa điểm, hình ảnh, liên kết blog review và tín hiệu giúp khách Hàn tin tưởng hơn khi xem Naver Map.",
    eyebrow: "Naver · Place",
    h1: "Tối ưu Naver Place để khách Hàn tin và chọn doanh nghiệp của bạn",
    heroSub:
      "Naver Place là điểm chạm kiểu Google Maps dành cho người Hàn. Nếu hồ sơ địa điểm mỏng hoặc rời rạc, bạn đang mất khách ngay ở bước họ so sánh lựa chọn.",
    heroCta: "Nhận tư vấn tối ưu Naver Place",
    intro:
      "Tối ưu Naver Place không chỉ là có tên địa điểm xuất hiện trên bản đồ. Doanh nghiệp cần làm dày phần thông tin, hình ảnh và mối liên kết với blog review để khách Hàn có đủ lý do tin tưởng. Đây là dịch vụ phù hợp cho những doanh nghiệp đã đón khách Hàn và muốn tăng độ chắc ở giai đoạn khách đang cân nhắc.",
    sections: [
      {
        heading: "Naver Place tác động vào điều gì?",
        bullets: [
          "Giúp khách Hàn thấy địa điểm rõ ràng khi mở Naver Map.",
          "Tăng độ tin cậy nhờ hình ảnh và thông tin nhất quán.",
          "Kết nối các bài blog review với hồ sơ địa điểm.",
          "Tạo một điểm chạm rõ ràng để khách so sánh trước khi chọn.",
        ],
      },
      {
        heading: "Tối ưu Place khác gì viết bài Blog?",
        bodyParts: [
          { type: "text", text: "Blog giúp tạo độ phủ tìm kiếm và kể câu chuyện trải nghiệm. Place là nơi khách nhìn tổng hợp thông tin địa điểm và chốt cảm giác tin hay không. Hai phần này mạnh nhất khi đi cùng nhau. Xem thêm bài " },
          { type: "link", text: "Naver Place khác Naver Blog", href: "/vi/blog/naver-place-khac-naver-blog-the-nao" },
          { type: "text", text: " để thấy rõ vai trò của từng phần." },
        ],
      },
      {
        heading: "Phù hợp cho doanh nghiệp có địa điểm rõ ràng",
        bodyParts: [
          { type: "text", text: "Spa, nhà hàng, khách sạn và nhiều mô hình du lịch tại điểm đến đều hưởng lợi nếu khách Hàn có thể xem nhanh một hồ sơ địa điểm dày hơn, rõ hơn và nhiều tín hiệu xã hội hơn. Đây là phần thường đi cùng " },
          { type: "link", text: "dịch vụ viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog" },
          { type: "text", text: " hoặc " },
          { type: "link", text: "booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han" },
          { type: "text", text: "." },
        ],
      },
    ],
    whoFor: [
      "Spa, nhà hàng, khách sạn có địa điểm cố định",
      "Doanh nghiệp đã có hoặc đang xây Naver Blog",
      "Thương hiệu muốn củng cố Naver Map / Place",
      "Doanh nghiệp cần đồng bộ tìm kiếm và địa điểm",
    ],
    process: [
      { step: "Rà soát", detail: "Đánh giá hiện trạng hồ sơ Place và tín hiệu liên quan." },
      { step: "Chuẩn hóa", detail: "Làm rõ thông tin, hình ảnh và các điểm chạm cần bổ sung." },
      { step: "Liên kết", detail: "Đồng bộ với blog review và nội dung xung quanh." },
      { step: "Theo dõi", detail: "Quan sát tín hiệu hiển thị và điều chỉnh." },
    ],
    priceFrom: "Báo giá theo hiện trạng",
    priceNote: "Thường nên đi cùng content Naver và/hoặc booking blogger để hiệu quả rõ hơn.",
    faqs: [
      {
        q: "Naver Place có giống Google Maps không?",
        a: "Gần giống về vai trò điểm chạm địa điểm, nhưng Naver Place chịu ảnh hưởng mạnh hơn từ blog review và hệ sinh thái Naver.",
      },
      {
        q: "Có cần làm cả Naver Blog không?",
        a: "Không bắt buộc, nhưng rất nên làm cùng nhau vì Blog và Place bổ trợ trực tiếp cho nhau.",
      },
      {
        q: "Ngành nào phù hợp nhất?",
        a: "Spa, nhà hàng, khách sạn và các mô hình có địa điểm rõ ràng là phù hợp nhất.",
      },
      {
        q: "Bao lâu thì thấy khác biệt?",
        a: "Tùy hiện trạng và mức độ nội dung hỗ trợ xung quanh, nhưng hồ sơ Place mạnh hơn thường đến từ sự đồng bộ chứ không phải một chỉnh sửa đơn lẻ.",
      },
    ],
    related: [
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Tạo blog review" },
      { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver", note: "Xây nội dung dài hạn" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Review bên ngoài" },
      { label: "Naver Place là gì", href: "/vi/blog/naver-place-la-gi", note: "Blog nền tảng" },
      { label: "Naver Place khác Naver Blog", href: "/vi/blog/naver-place-khac-naver-blog-the-nao", note: "Blog so sánh" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Tối ưu Naver Place cho khách Hàn" },
    ],
    schema: { serviceType: "Tối ưu Naver Place" },
  },

  /* ───────────────────────── NAVER SPOKE — NAVER KOC ───────────────────────── */
  {
    path: "/vi/naver-marketing/naver-koc",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver KOC", href: "/vi/naver-marketing/naver-koc" },
    ],
    primaryKeyword: "Naver KOC",
    metaTitle: "Naver KOC / Korean Blogger Experience | Công Thiên Agency",
    metaDescription:
      "Dịch vụ Naver KOC cho doanh nghiệp du lịch: xây chiến dịch trải nghiệm với KOC/blogger Hàn để tăng độ phủ, social proof và hiện diện tiếng Hàn theo mùa hoặc chiến dịch.",
    eyebrow: "Naver · KOC",
    h1: "Naver KOC cho chiến dịch cần độ phủ và trải nghiệm tiếng Hàn mạnh hơn",
    heroSub:
      "Khi doanh nghiệp cần nhiều hơn một vài bài review, chiến dịch Naver KOC giúp tạo đợt nội dung có quy mô lớn hơn và hiệu ứng lan tỏa rõ hơn trong một khoảng thời gian.",
    heroCta: "Nhận tư vấn chiến dịch Naver KOC",
    intro:
      "Naver KOC phù hợp khi doanh nghiệp chuẩn bị mùa cao điểm, khai trương hoặc muốn tạo cú hích lớn hơn trên thị trường khách Hàn. Khác với gói blogger review tiêu chuẩn, KOC thiên về tổ chức chiến dịch: chọn đúng người, lên kịch bản trải nghiệm, quản lý lịch và tổng hợp hiệu quả ở quy mô lớn hơn.",
    sections: [
      {
        heading: "Khi nào nên chọn Naver KOC?",
        bullets: [
          "Khi cần độ phủ mạnh hơn một gói 4 bài review tiêu chuẩn.",
          "Khi chuẩn bị cao điểm mùa khách Hàn hoặc ra mắt dịch vụ mới.",
          "Khi muốn nhiều góc nhìn trải nghiệm thay vì chỉ vài bài lẻ.",
          "Khi cần chiến dịch có cấu trúc và báo cáo rõ ràng hơn.",
        ],
      },
      {
        heading: "KOC khác gì blogger review tiêu chuẩn?",
        bodyParts: [
          { type: "text", text: "Blogger review tiêu chuẩn phù hợp để tạo những bài social proof chất lượng. KOC phù hợp khi cần chiến dịch có nhiều người tham gia, nhịp đăng bài rõ và hiệu ứng nhận biết mạnh hơn trong ngắn hạn. Nếu bạn cần mốc so sánh rõ hơn, xem bài " },
          { type: "link", text: "Naver KOC và blogger Hàn hoạt động thế nào", href: "/vi/blog/naver-koc-blogger-han-la-gi" },
          { type: "text", text: "." },
        ],
      },
      {
        heading: "Chiến dịch chỉ hiệu quả khi brief và trải nghiệm được chuẩn bị kỹ",
        bodyParts: [
          { type: "text", text: "Phần quan trọng nhất không phải là mời thật nhiều người, mà là chọn đúng tệp và tạo trải nghiệm đủ rõ để nội dung được tự nhiên. Đây là lý do khâu chuẩn bị hồ sơ doanh nghiệp, hình ảnh và điểm mạnh phải làm kỹ ngay từ đầu. Xem checklist " },
          { type: "link", text: "hồ sơ doanh nghiệp trước khi book blogger Hàn", href: "/vi/blog/ho-so-doanh-nghiep-truoc-khi-book-blogger-han" },
          { type: "text", text: "." },
        ],
      },
    ],
    whoFor: [
      "Doanh nghiệp chuẩn bị mùa cao điểm khách Hàn",
      "Spa, nhà hàng, khách sạn muốn đợt phủ lớn hơn",
      "Thương hiệu ra mắt hoặc tái định vị dịch vụ",
      "Doanh nghiệp muốn chiến dịch Naver có cấu trúc rõ",
    ],
    process: [
      { step: "Chốt mục tiêu", detail: "Xác định lý do chạy chiến dịch, nhóm khách và thời điểm." },
      { step: "Chọn KOC", detail: "Lọc người phù hợp và xây plan trải nghiệm." },
      { step: "Triển khai", detail: "Sắp lịch, brief nội dung và theo dõi bài đăng." },
      { step: "Tổng hợp", detail: "Gom link, tín hiệu và rút kinh nghiệm cho đợt tiếp theo." },
    ],
    priceFrom: "Báo giá theo chiến dịch",
    priceNote: "Chi phí phụ thuộc số lượng KOC/blogger, ngành và quy mô triển khai.",
    faqs: [
      {
        q: "Naver KOC có thay thế booking blogger review không?",
        a: "Không hẳn. KOC và blogger review phù hợp cho hai mục tiêu khác nhau; nhiều doanh nghiệp kết hợp cả hai.",
      },
      {
        q: "Chiến dịch KOC phù hợp nhất với thời điểm nào?",
        a: "Thường là lúc khai trương, cao điểm mùa khách Hàn hoặc khi cần tạo cú hích nhận biết mạnh hơn.",
      },
      {
        q: "Có báo giá cố định không?",
        a: "Không. KOC được báo giá theo chiến dịch vì phạm vi và số lượng người tham gia thay đổi nhiều.",
      },
      {
        q: "Doanh nghiệp cần chuẩn bị gì trước khi chạy KOC?",
        a: "Cần chuẩn bị rõ dịch vụ, điểm mạnh, hình ảnh, lịch trải nghiệm và cách tiếp khách để nội dung lên tự nhiên và đúng định hướng.",
      },
    ],
    related: [
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Gói tiêu chuẩn" },
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Content song song" },
      { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver", note: "Duy trì dài hạn" },
      { label: "Hồ sơ doanh nghiệp cần chuẩn bị gì trước khi book blogger Hàn", href: "/vi/blog/ho-so-doanh-nghiep-truoc-khi-book-blogger-han", note: "Blog" },
      { label: "Naver KOC và blogger Hàn", href: "/vi/blog/naver-koc-blogger-han-la-gi", note: "Blog" },
      { label: "Cách đo hiệu quả chiến dịch Naver", href: "/vi/blog/cach-do-hieu-qua-chien-dich-naver", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver KOC Korean Blogger Experience" },
    ],
    schema: { serviceType: "Naver KOC" },
  },

  /* ───────────────────────── MAPS PILLAR ───────────────────────── */
  {
    path: "/vi/google-maps-marketing",
    cluster: "maps",
    isPillar: true,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
    ],
    primaryKeyword: "Google Maps Marketing Hội An Đà Nẵng",
    metaTitle: "Google Maps Marketing Hội An Đà Nẵng | Công Thiên Agency",
    metaDescription:
      "Google Maps Marketing Hội An – Đà Nẵng: tối ưu Google Business Profile, hình ảnh, danh mục, Local SEO và quy trình review thật cho doanh nghiệp.",
    eyebrow: "Dịch vụ · Google Maps",
    h1: "Google Maps Marketing Hội An – Đà Nẵng cho doanh nghiệp địa phương",
    heroSub:
      "Hồ sơ Google Maps là nơi khách quyết định tin hay không. Tôi tối ưu hồ sơ và xây chiến lược review & reputation từ khách hàng thật.",
    heroCta: "Nhận tư vấn Google Maps qua Zalo",
    intro:
      "Khi khách tìm spa, nhà hàng hay khách sạn gần mình, Google Maps là điểm chạm quyết định. Một hồ sơ đầy đủ hình ảnh, mô tả, danh mục và đánh giá tích cực tạo niềm tin để khách chọn bạn. Dịch vụ tập trung tối ưu hồ sơ và xây uy tín bền vững.",
    sections: [
      {
        heading: "Hồ sơ Google Maps cần tối ưu gì?",
        bullets: [
          "Thông tin doanh nghiệp đầy đủ, đúng danh mục.",
          "Hình ảnh không gian, dịch vụ và món/treatment chất lượng.",
          "Mô tả, dịch vụ và bài đăng cập nhật.",
          "Chiến lược thu hút review từ khách hàng thật.",
        ],
      },
      {
        heading: "Review & Reputation từ khách hàng thật",
        body:
          "Tôi xây quy trình khuyến khích khách hài lòng để lại đánh giá (QR, nhắc sau dịch vụ, kịch bản phản hồi) — tăng social proof một cách minh bạch, đúng chính sách của Google.",
      },
      {
        heading: "Kết hợp website và Local SEO",
        body:
          "Hồ sơ Google Maps mạnh nhất khi đi cùng website chuẩn SEO và thông tin nhất quán (NAP). Tôi đảm bảo dữ liệu đồng bộ giữa website, hồ sơ và schema.",
      },
    ],
    whoFor: [
      "Spa, nhà hàng cần khách địa phương & du lịch",
      "Khách sạn, homestay cần đánh giá tốt",
      "Tour, dịch vụ muốn tăng độ tin cậy",
      "Doanh nghiệp mới cần xây hồ sơ Maps bài bản",
    ],
    process: [
      { step: "Audit", detail: "Đánh giá hồ sơ Google Business Profile hiện tại." },
      { step: "Tối ưu hồ sơ", detail: "Cập nhật thông tin, danh mục, hình ảnh, mô tả, dịch vụ." },
      { step: "Reputation", detail: "Thiết lập quy trình review từ khách hàng thật." },
      { step: "Theo dõi", detail: "Đo lường và đề xuất cải thiện tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Phù hợp spa, nhà hàng, khách sạn, tour.",
    faqs: [
      {
        q: "Dịch vụ này có mua review không?",
        a: "Không. Tôi tập trung tối ưu hồ sơ và xây quy trình thu hút đánh giá từ khách hàng thật, đúng chính sách Google.",
      },
      {
        q: "Bao lâu thấy kết quả?",
        a: "Tối ưu hồ sơ có hiệu lực ngay; uy tín và đánh giá tăng dần theo lượng khách thật và quy trình triển khai.",
      },
      {
        q: "Có hỗ trợ tạo hồ sơ mới không?",
        a: "Có — hỗ trợ tạo và tối ưu Google Business Profile, như đã làm cho Ruong House và Serena Retreat.",
      },
      {
        q: "Phù hợp với ngành nào?",
        a: "Spa, nhà hàng, khách sạn và tour — những ngành phụ thuộc nhiều vào niềm tin địa phương.",
      },
    ],
    related: [
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Chiến lược đánh giá" },
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Spoke · Audit" },
      { label: "Xử lý không hiển thị trên Google Maps", href: "/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps", note: "Spoke · Sự cố" },
      { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc", note: "Spoke · Reputation" },
      { label: "Tối ưu hình ảnh Google Maps", href: "/vi/google-maps-marketing/toi-uu-hinh-anh-google-maps", note: "Spoke · Hình ảnh" },
      { label: "Google Maps cho spa", href: "/vi/google-maps-marketing/cho-spa", note: "Ngành · Spa" },
      { label: "Google Maps cho nhà hàng", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Ngành · Nhà hàng" },
      { label: "Google Maps cho khách sạn", href: "/vi/google-maps-marketing/cho-khach-san", note: "Ngành · Khách sạn" },
      { label: "Google Maps cho tour", href: "/vi/google-maps-marketing/cho-tour", note: "Ngành · Tour & trải nghiệm" },
      { label: "Local SEO Hội An", href: "/vi/google-maps-marketing/hoi-an", note: "Khu vực · Hội An" },
      { label: "Local SEO Đà Nẵng", href: "/vi/google-maps-marketing/da-nang", note: "Khu vực · Đà Nẵng" },
      { label: "Thiết kế website Hội An Đà Nẵng", href: "/vi/thiet-ke-website", note: "Đồng bộ website và NAP" },
      { label: "Local SEO là gì", href: "/vi/blog/local-seo-la-gi", note: "Blog" },
      { label: "Quy trình xin review thật", href: "/vi/blog/quy-trinh-xin-review-that-sau-dich-vu", note: "Bài hỗ trợ review" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Google Maps Marketing Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Google Maps Marketing", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── MAPS SPOKE — REVIEW & REPUTATION ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/review-reputation",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Review & Reputation", href: "/vi/google-maps-marketing/review-reputation" },
    ],
    primaryKeyword: "Google Maps Review & Reputation",
    metaTitle: "Google Maps Review & Reputation Marketing | Công Thiên Agency",
    metaDescription:
      "Google Maps Review & Reputation Marketing: tối ưu Google Business Profile, hình ảnh, danh mục và chiến lược review từ khách hàng thật. Từ 3.500.000đ/chiến dịch.",
    eyebrow: "Google Maps · Review & Reputation",
    h1: "Google Maps Review & Reputation Marketing cho doanh nghiệp tại Hội An – Đà Nẵng",
    heroSub:
      "Tăng độ tin cậy trên Google Maps bằng hồ sơ được tối ưu và chiến lược review minh bạch từ khách hàng thật.",
    heroCta: "Nhận tư vấn Review & Reputation qua Zalo",
    intro:
      "Google Maps ảnh hưởng trực tiếp đến quyết định booking: khách nhìn số sao, đọc đánh giá và xem hình ảnh trước khi chọn. Dịch vụ Review & Reputation Marketing giúp doanh nghiệp xây hình ảnh đáng tin trên Google Maps một cách bền vững và đúng chính sách.",
    sections: [
      {
        heading: "Vì sao Google Maps ảnh hưởng đến booking?",
        bullets: [
          "Khách so sánh nhiều nơi qua số sao và đánh giá.",
          "Hình ảnh và mô tả quyết định ấn tượng đầu tiên.",
          "Hồ sơ thiếu thông tin khiến khách nghi ngờ độ chuyên nghiệp.",
          "Đánh giá tích cực thật là yếu tố chốt mạnh nhất.",
        ],
      },
      {
        heading: "Chúng tôi tối ưu những gì?",
        bullets: [
          "Google Business Profile: thông tin, danh mục, dịch vụ.",
          "Hình ảnh không gian, dịch vụ, món/treatment.",
          "Mô tả và bài đăng cập nhật định kỳ.",
          "Quy trình thu hút review từ khách hàng thật (QR, nhắc sau dịch vụ).",
        ],
      },
      {
        heading: "Cách tiếp cận an toàn, đúng chính sách",
        body:
          "Tôi không tạo đánh giá ảo. Trọng tâm là giúp khách hài lòng dễ để lại đánh giá thật và phản hồi chuyên nghiệp các đánh giá — xây reputation bền vững thay vì rủi ro.",
      },
    ],
    whoFor: [
      "Spa cần tăng đánh giá và hình ảnh",
      "Nhà hàng cạnh tranh bằng review",
      "Khách sạn, homestay cần điểm tin cậy",
      "Tour, dịch vụ muốn nổi bật trên Maps",
    ],
    process: [
      { step: "Audit hồ sơ", detail: "Rà soát thông tin, hình ảnh, danh mục, đánh giá hiện tại." },
      { step: "Tối ưu", detail: "Hoàn thiện hồ sơ và nội dung hình ảnh/mô tả." },
      { step: "Quy trình review", detail: "Thiết lập cách thu hút và phản hồi đánh giá thật." },
      { step: "Đo lường", detail: "Theo dõi hiển thị, đánh giá và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Báo giá tùy hiện trạng hồ sơ và phạm vi tối ưu.",
    faqs: [
      {
        q: "Dịch vụ có bán review không?",
        a: "Không — tôi xây quy trình thu hút đánh giá từ khách hàng thật và phản hồi chuyên nghiệp, đúng chính sách Google.",
      },
      {
        q: "Nhiều người tìm “tăng review Google Maps”, dịch vụ này có giúp không?",
        a: "Có, nhưng theo hướng bền vững: tối ưu hồ sơ và khuyến khích khách thật đánh giá, thay vì đánh giá ảo dễ bị xóa và gây rủi ro.",
      },
      {
        q: "Chi phí bao nhiêu?",
        a: "Từ 3.500.000đ/chiến dịch, tùy hiện trạng và phạm vi.",
      },
      {
        q: "Có cần website không?",
        a: "Không bắt buộc, nhưng website chuẩn SEO giúp hồ sơ Maps mạnh hơn nhờ thông tin nhất quán.",
      },
    ],
    related: [
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing", note: "Trang dịch vụ tổng quan" },
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Rà soát nền tảng" },
      { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc", note: "Xử lý review xấu" },
      { label: "Google Maps cho nhà hàng", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Theo ngành" },
      { label: "Cách có thêm đánh giá Google thật", href: "/vi/blog/cach-co-them-danh-gia-google-that", note: "Blog" },
      { label: "Google Business Profile cần có gì", href: "/vi/blog/google-business-profile-can-co-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Google Maps Review và Reputation Marketing" },
    ],
    schema: { serviceType: "Google Maps Review & Reputation", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── MAPS SPOKE — AUDIT GBP ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/audit-google-business-profile",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile" },
    ],
    primaryKeyword: "audit Google Business Profile",
    metaTitle: "Audit Google Business Profile cho doanh nghiệp địa phương | Công Thiên Agency",
    metaDescription:
      "Dịch vụ audit Google Business Profile: rà soát danh mục, NAP, hình ảnh, review, hồ sơ trùng và độ đồng bộ với website để tìm đúng điểm nghẽn hiển thị trên Google Maps.",
    eyebrow: "Google Maps · Audit",
    h1: "Audit Google Business Profile để biết chính xác hồ sơ đang nghẽn ở đâu",
    heroSub:
      "Nhiều doanh nghiệp tối ưu Google Maps theo cảm tính. Audit giúp bóc tách rõ vấn đề nằm ở danh mục, hồ sơ trùng, hình ảnh, review hay độ đồng bộ với website.",
    heroCta: "Nhận tư vấn audit Google Maps",
    intro:
      "Audit Google Business Profile phù hợp khi bạn chưa muốn lao vào chỉnh sửa ngẫu nhiên. Trước hết cần một bức tranh rõ: hồ sơ đang thiếu gì, sai gì và phần nào tác động mạnh nhất đến khả năng hiển thị và chuyển đổi trên Google Maps.",
    sections: [
      {
        heading: "Audit không chỉ là nhìn số sao",
        bullets: [
          "Rà soát tên, danh mục, khu vực phục vụ và thông tin cốt lõi.",
          "Kiểm tra NAP có nhất quán giữa website, hồ sơ và kênh khác hay không.",
          "Đánh giá độ dày của hình ảnh, bài đăng, dịch vụ và FAQ trong hồ sơ.",
          "Xác định vấn đề hồ sơ trùng, tín hiệu yếu hoặc thiếu review thật.",
        ],
      },
      {
        heading: "Khi nào nên audit trước khi tối ưu?",
        bodyParts: [
          { type: "text", text: "Nếu hồ sơ đang hiển thị chập chờn, tụt tín hiệu hoặc nhiều tháng không cải thiện dù đã cập nhật vài thứ nhỏ, audit là bước nên làm trước. Nó đặc biệt hữu ích khi bạn nghi có " },
          { type: "link", text: "vấn đề không hiển thị trên Google Maps", href: "/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps" },
          { type: "text", text: " hoặc hồ sơ bị phân tán do nhiều dữ liệu chồng chéo." },
        ],
      },
      {
        heading: "Audit tốt phải nối được sang action cụ thể",
        bodyParts: [
          { type: "text", text: "Kết quả audit không dừng ở danh sách lỗi. Mục tiêu là chốt được phần cần ưu tiên trước: sửa nền tảng hồ sơ, tăng review thật, làm lại hình ảnh hay đồng bộ lại website. Nếu hồ sơ thiếu chiều sâu hình ảnh, thường sẽ đi tiếp sang " },
          { type: "link", text: "tối ưu hình ảnh Google Maps", href: "/vi/google-maps-marketing/toi-uu-hinh-anh-google-maps" },
          { type: "text", text: "." },
        ],
      },
    ],
    whoFor: [
      "Doanh nghiệp chưa rõ vì sao Maps không tăng tín hiệu",
      "Hồ sơ đã có từ lâu nhưng hiệu quả không ổn định",
      "Doanh nghiệp nghi có hồ sơ trùng hoặc sai danh mục",
      "Chủ doanh nghiệp muốn có roadmap tối ưu rõ hơn",
    ],
    process: [
      { step: "Thu thập", detail: "Lấy hiện trạng hồ sơ, ảnh, review và dữ liệu website liên quan." },
      { step: "Rà soát", detail: "Kiểm tra lỗi nền tảng, tín hiệu thiếu và rủi ro hồ sơ trùng." },
      { step: "Ưu tiên", detail: "Xếp hạng các điểm nghẽn theo mức ảnh hưởng." },
      { step: "Đề xuất", detail: "Đưa ra checklist hành động rõ cho giai đoạn tiếp theo." },
    ],
    priceFrom: "Từ 1.500.000đ / buổi audit",
    priceNote: "Có thể trừ vào gói triển khai nếu tiếp tục tối ưu sau audit.",
    faqs: [
      {
        q: "Audit có bao gồm chỉnh sửa luôn không?",
        a: "Không mặc định. Audit tập trung xác định vấn đề và roadmap; phần triển khai có thể làm tiếp theo nhu cầu.",
      },
      {
        q: "Audit có phù hợp khi hồ sơ mới tạo không?",
        a: "Có, nhất là khi muốn setup đúng ngay từ đầu để tránh phải sửa sai sau này.",
      },
      {
        q: "Tôi có cần website trước khi audit không?",
        a: "Không bắt buộc, nhưng có website sẽ giúp đánh giá tốt hơn về độ đồng bộ NAP và tín hiệu Local SEO.",
      },
      {
        q: "Audit thường tìm ra những lỗi gì?",
        a: "Phổ biến nhất là sai danh mục, thông tin thiếu, hồ sơ trùng, hình ảnh mỏng, review yếu và website không khớp dữ liệu địa phương.",
      },
    ],
    related: [
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing", note: "Pillar" },
      { label: "Xử lý không hiển thị trên Google Maps", href: "/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps", note: "Spoke sự cố" },
      { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc", note: "Spoke reputation" },
      { label: "Google Business Profile audit gồm những gì", href: "/vi/blog/google-business-profile-audit-gom-nhung-gi", note: "Blog" },
      { label: "Khi nào cần gộp hồ sơ trùng Google Maps", href: "/vi/blog/khi-nao-can-gop-ho-so-trung-google-maps", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Audit Google Business Profile cho doanh nghiệp địa phương" },
    ],
    schema: { serviceType: "Audit Google Business Profile", offerPriceVnd: 1500000 },
  },

  /* ───────────────────────── MAPS SPOKE — KHÔNG HIỂN THỊ ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Xử lý không hiển thị trên Google Maps", href: "/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps" },
    ],
    primaryKeyword: "xử lý không hiển thị trên Google Maps",
    metaTitle: "Xử lý doanh nghiệp không hiển thị trên Google Maps | Công Thiên Agency",
    metaDescription:
      "Dịch vụ xử lý hồ sơ doanh nghiệp không hiển thị trên Google Maps: rà soát xác minh, danh mục, hồ sơ trùng, NAP và tín hiệu nền tảng để tìm hướng khắc phục thực tế.",
    eyebrow: "Google Maps · Visibility",
    h1: "Xử lý trường hợp doanh nghiệp không hiển thị trên Google Maps",
    heroSub:
      "Khi khách tìm mà không thấy bạn, vấn đề thường không nằm ở một nút bấm duy nhất. Cần rà soát đúng lớp lỗi trước khi kỳ vọng hồ sơ hiển thị ổn định trở lại.",
    heroCta: "Nhận tư vấn xử lý hiển thị Maps",
    intro:
      "Đây là spoke dành cho những trường hợp có dấu hiệu rõ: hồ sơ tìm khó thấy, hiện không đều, biến mất với một số truy vấn hoặc đã chỉnh nhiều lần nhưng vẫn không ổn. Mục tiêu là tìm đúng nguyên nhân thay vì sửa lan man.",
    sections: [
      {
        heading: "Những nhóm nguyên nhân hay gặp nhất",
        bullets: [
          "Hồ sơ chưa xác minh hoặc gặp lỗi xác minh.",
          "Sai danh mục, thông tin thiếu hoặc khu vực phục vụ chưa rõ.",
          "Có hồ sơ trùng hoặc NAP không nhất quán giữa các kênh.",
          "Tín hiệu độ nổi bật quá yếu trong khu vực cạnh tranh cao.",
        ],
      },
      {
        heading: "Không hiển thị khác với xếp hạng yếu",
        bodyParts: [
          { type: "text", text: "Có trường hợp hồ sơ vẫn tồn tại nhưng chỉ xếp hạng thấp; cũng có trường hợp bản thân hồ sơ có vấn đề nền tảng nên Google hiển thị rất hạn chế. Phân biệt hai tình huống này là bước đầu của " },
          { type: "link", text: "audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile" },
          { type: "text", text: "." },
        ],
      },
      {
        heading: "Thường phải xử lý cùng nhiều lớp dữ liệu",
        bodyParts: [
          { type: "text", text: "Nếu chỉ sửa mỗi một trường thông tin, kết quả thường không đủ. Nhiều case phải đồng thời xử lý hồ sơ trùng, đồng bộ NAP với website và củng cố độ nổi bật bằng review thật và hình ảnh mới. Xem thêm bài " },
          { type: "link", text: "website hỗ trợ Google Maps ra sao", href: "/vi/blog/website-ho-tro-google-maps-ra-sao" },
          { type: "text", text: " để hiểu vì sao website cũng ảnh hưởng đến tín hiệu địa phương." },
        ],
      },
    ],
    whoFor: [
      "Doanh nghiệp tìm tên mà vẫn hiện yếu hoặc không ổn định",
      "Hồ sơ mới tạo nhưng khó xuất hiện với truy vấn liên quan",
      "Doanh nghiệp nghi có hồ sơ trùng hoặc dữ liệu sai lệch",
      "Trường hợp đã tự chỉnh nhưng không cải thiện rõ",
    ],
    process: [
      { step: "Phân loại", detail: "Xác định hồ sơ đang mất hiển thị, hiển thị yếu hay lỗi dữ liệu nền." },
      { step: "Rà lỗi", detail: "Kiểm tra xác minh, danh mục, hồ sơ trùng và NAP." },
      { step: "Khắc phục", detail: "Đề xuất hoặc triển khai các bước sửa theo ưu tiên." },
      { step: "Củng cố", detail: "Gia cố thêm review, hình ảnh và tín hiệu website nếu cần." },
    ],
    priceFrom: "Báo giá theo hiện trạng",
    priceNote: "Các case có hồ sơ trùng hoặc sai lệch dữ liệu thường cần audit trước.",
    faqs: [
      {
        q: "Không hiển thị có phải do chưa có review không?",
        a: "Không hẳn. Review yếu là một nguyên nhân, nhưng còn có thể do xác minh, danh mục, hồ sơ trùng hoặc dữ liệu không nhất quán.",
      },
      {
        q: "Có cam kết khôi phục hiển thị ngay không?",
        a: "Không. Tôi chỉ cam kết quy trình rà soát và xử lý minh bạch theo nguyên nhân thực tế, vì phần hiển thị cuối cùng vẫn do Google quyết định.",
      },
      {
        q: "Có cần website để xử lý case này không?",
        a: "Không bắt buộc, nhưng website đúng NAP và đúng ngữ cảnh địa phương thường giúp củng cố tín hiệu đáng kể.",
      },
      {
        q: "Nếu có nhiều hồ sơ trùng thì sao?",
        a: "Đó là một trong những case thường gặp và cần xử lý sớm để tránh làm loãng tín hiệu hồ sơ chính.",
      },
    ],
    related: [
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Bước đầu" },
      { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc", note: "Uy tín sau xử lý" },
      { label: "Vì sao doanh nghiệp không hiển thị trên Google Maps", href: "/vi/blog/doanh-nghiep-khong-hien-thi-tren-google-maps", note: "Blog nền" },
      { label: "Khi nào cần gộp hồ sơ trùng Google Maps", href: "/vi/blog/khi-nao-can-gop-ho-so-trung-google-maps", note: "Blog" },
      { label: "Google Business Profile audit gồm những gì", href: "/vi/blog/google-business-profile-audit-gom-nhung-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Xử lý doanh nghiệp không hiển thị trên Google Maps" },
    ],
    schema: { serviceType: "Xử lý không hiển thị trên Google Maps" },
  },

  /* ───────────────────────── MAPS SPOKE — REVIEW TIÊU CỰC ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc" },
    ],
    primaryKeyword: "quản lý review tiêu cực Google Maps",
    metaTitle: "Quản lý review tiêu cực trên Google Maps | Công Thiên Agency",
    metaDescription:
      "Dịch vụ quản lý review tiêu cực trên Google Maps: xây kịch bản phản hồi, xử lý tình huống review xấu và bảo vệ uy tín hồ sơ theo cách chuyên nghiệp, đúng chính sách.",
    eyebrow: "Google Maps · Reputation",
    h1: "Quản lý review tiêu cực để bảo vệ uy tín trên Google Maps",
    heroSub:
      "Review xấu không phải lúc nào cũng tránh được. Vấn đề là doanh nghiệp có quy trình phản hồi đủ nhanh, đủ đúng và đủ nhất quán để không làm mất niềm tin của khách mới hay không.",
    heroCta: "Nhận tư vấn xử lý review tiêu cực",
    intro:
      "Spoke này dành cho doanh nghiệp đang bị ảnh hưởng bởi review xấu, bị động khi phản hồi hoặc muốn có hệ thống quản lý reputation tốt hơn. Trọng tâm là biến phản hồi thành một phần của trải nghiệm thương hiệu, thay vì chỉ dập lửa từng case.",
    sections: [
      {
        heading: "Review tiêu cực tác động nhiều hơn một sao bị mất",
        bullets: [
          "Khách mới đọc cả nội dung review và cách doanh nghiệp phản hồi.",
          "Một phản hồi phòng thủ có thể làm mất niềm tin nhanh hơn chính review xấu.",
          "Review tiêu cực lặp lại thường cho thấy vấn đề vận hành hoặc giao tiếp cần sửa.",
          "Quản lý review là phần lõi của reputation chứ không chỉ là CSKH hậu mãi.",
        ],
      },
      {
        heading: "Cần kịch bản phản hồi theo từng nhóm tình huống",
        bodyParts: [
          { type: "text", text: "Không thể dùng một mẫu trả lời cho mọi case. Review về thái độ nhân viên, chậm phục vụ hay hiểu nhầm dịch vụ cần những hướng phản hồi khác nhau. Nếu bạn cần nền tảng trước, xem bài " },
          { type: "link", text: "cách phản hồi đánh giá tiêu cực trên Google Maps", href: "/vi/blog/phan-hoi-danh-gia-tieu-cuc-google" },
          { type: "text", text: " để thấy cấu trúc chuẩn của một phản hồi tốt." },
        ],
      },
      {
        heading: "Review tiêu cực nên đi cùng chiến lược tăng review thật",
        bodyParts: [
          { type: "text", text: "Một hồ sơ chỉ xử lý review xấu mà không tiếp tục tạo thêm review thật tích cực sẽ vẫn khó cải thiện cảm nhận chung. Vì vậy spoke này thường kết hợp với " },
          { type: "link", text: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation" },
          { type: "text", text: " hoặc quy trình xin đánh giá thật sau dịch vụ." },
        ],
      },
    ],
    whoFor: [
      "Doanh nghiệp đang có nhiều review tiêu cực cần xử lý",
      "Đội ngũ chưa có kịch bản phản hồi thống nhất",
      "Spa, nhà hàng, khách sạn cần giữ điểm tin cậy ổn định",
      "Doanh nghiệp muốn chuyển từ phản ứng sang quản trị reputation",
    ],
    process: [
      { step: "Đọc mẫu", detail: "Phân loại review tiêu cực theo nhóm vấn đề." },
      { step: "Xây kịch bản", detail: "Soạn nguyên tắc và mẫu phản hồi theo từng tình huống." },
      { step: "Triển khai", detail: "Áp dụng cách phản hồi và luồng escalations nội bộ." },
      { step: "Củng cố", detail: "Kết hợp quy trình xin review thật để cân bằng tín hiệu." },
    ],
    priceFrom: "Báo giá theo phạm vi",
    priceNote: "Có thể triển khai như một phần của gói Review & Reputation tổng thể.",
    faqs: [
      {
        q: "Có thể xóa review xấu không?",
        a: "Chỉ một số review vi phạm chính sách mới có cơ hội được Google xem xét. Phần lớn trường hợp cần xử lý bằng phản hồi và reputation management đúng cách.",
      },
      {
        q: "Có nên trả lời mọi review xấu không?",
        a: "Hầu hết nên trả lời, trừ một số case đặc biệt cần xử lý nội bộ trước. Điều quan trọng là phản hồi đúng giọng thương hiệu và không tranh cãi công khai.",
      },
      {
        q: "Nếu review là giả thì sao?",
        a: "Có thể báo cáo lên Google nếu có dấu hiệu vi phạm, nhưng song song vẫn nên phản hồi lịch sự để người đọc khác hiểu bối cảnh.",
      },
      {
        q: "Dịch vụ này có bao gồm training nhân viên không?",
        a: "Có thể bao gồm guideline và kịch bản để đội ngũ biết khi nào nên mời khách phản hồi công khai hay chuyển sang xử lý riêng.",
      },
    ],
    related: [
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Spoke tổng" },
      { label: "Cách phản hồi đánh giá tiêu cực trên Google Maps", href: "/vi/blog/phan-hoi-danh-gia-tieu-cuc-google", note: "Blog" },
      { label: "Quy trình xin review thật sau dịch vụ", href: "/vi/blog/quy-trinh-xin-review-that-sau-dich-vu", note: "Blog" },
      { label: "Cách có thêm đánh giá Google thật", href: "/vi/blog/cach-co-them-danh-gia-google-that", note: "Blog nền" },
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Rà soát trước" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Quản lý review tiêu cực trên Google Maps" },
    ],
    schema: { serviceType: "Quản lý review tiêu cực Google Maps" },
  },

  /* ───────────────────────── MAPS SPOKE — HÌNH ẢNH ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/toi-uu-hinh-anh-google-maps",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Tối ưu hình ảnh Google Maps", href: "/vi/google-maps-marketing/toi-uu-hinh-anh-google-maps" },
    ],
    primaryKeyword: "tối ưu hình ảnh Google Maps",
    metaTitle: "Tối ưu hình ảnh Google Maps cho doanh nghiệp địa phương | Công Thiên Agency",
    metaDescription:
      "Dịch vụ tối ưu hình ảnh Google Maps: xây bộ ảnh đúng loại, đúng thứ tự ưu tiên và đúng kỳ vọng trải nghiệm để hồ sơ thuyết phục hơn với khách du lịch và khách địa phương.",
    eyebrow: "Google Maps · Hình ảnh",
    h1: "Tối ưu hình ảnh Google Maps để khách tin nhanh hơn",
    heroSub:
      "Khách xem ảnh trước khi đọc mô tả. Một hồ sơ có ảnh đúng loại, đủ mới và đúng trải nghiệm thực tế thường tạo chuyển đổi tốt hơn rất nhiều so với hồ sơ chỉ có vài ảnh rời rạc.",
    heroCta: "Nhận tư vấn tối ưu hình ảnh Maps",
    intro:
      "Hình ảnh trên Google Maps không chỉ để đẹp. Nó là phần giúp khách đánh giá nhanh mức độ chuyên nghiệp, không gian và cảm giác thật trước khi họ quyết định xem tiếp, gọi điện hay đặt dịch vụ.",
    sections: [
      {
        heading: "Hồ sơ Google Maps nên có những lớp ảnh nào?",
        bullets: [
          "Ảnh nhận diện: mặt tiền, lối vào, biển hiệu để khách dễ nhận ra.",
          "Ảnh không gian: khu vực chính, phòng treatment, bàn ăn, phòng nghỉ.",
          "Ảnh dịch vụ cụ thể: món, treatment, trải nghiệm, tiện ích nổi bật.",
          "Ảnh có người và khoảnh khắc thật để tăng cảm giác tin cậy.",
        ],
      },
      {
        heading: "Không phải cứ nhiều ảnh là đủ",
        bodyParts: [
          { type: "text", text: "Nhiều hồ sơ có ảnh nhưng vẫn yếu vì thiếu thứ tự ưu tiên và thiếu góc nhìn khách thực sự cần. Phần này thường được rà rõ trong " },
          { type: "link", text: "audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile" },
          { type: "text", text: " trước khi bổ sung ảnh mới." },
        ],
      },
      {
        heading: "Hình ảnh tốt còn hỗ trợ review và website",
        bodyParts: [
          { type: "text", text: "Bộ ảnh tốt không chỉ phục vụ Google Maps. Nó còn được dùng cho website, bài đăng và hỗ trợ khách dễ để lại review thật hơn khi trải nghiệm khớp kỳ vọng. Xem thêm bài " },
          { type: "link", text: "vì sao hình ảnh trên Google Maps quan trọng", href: "/vi/blog/vi-sao-hinh-anh-google-maps-quan-trong" },
          { type: "text", text: " để thấy tác động ở bước khách ra quyết định." },
        ],
      },
    ],
    whoFor: [
      "Doanh nghiệp có hồ sơ ảnh mỏng hoặc lỗi thời",
      "Spa, nhà hàng, khách sạn cần tăng chuyển đổi từ Maps",
      "Doanh nghiệp vừa cải tạo không gian hoặc ra dịch vụ mới",
      "Hồ sơ có nhiều ảnh nhưng vẫn không thuyết phục khách",
    ],
    process: [
      { step: "Rà soát", detail: "Đánh giá bộ ảnh hiện tại theo nhóm thông tin và trải nghiệm." },
      { step: "Lên checklist", detail: "Xác định các góc ảnh và loại ảnh còn thiếu." },
      { step: "Tối ưu", detail: "Sắp xếp lại chiến lược đăng và ưu tiên ảnh cần cập nhật." },
      { step: "Duy trì", detail: "Đề xuất nhịp bổ sung ảnh mới theo mùa hoặc theo dịch vụ." },
    ],
    priceFrom: "Báo giá theo hiện trạng",
    priceNote: "Có thể triển khai riêng hoặc đi cùng gói Google Maps tổng thể.",
    faqs: [
      {
        q: "Có cần ảnh chuyên nghiệp không?",
        a: "Không phải lúc nào cũng cần studio. Quan trọng hơn là ảnh sáng, thật và đúng trải nghiệm mà khách sẽ nhận được.",
      },
      {
        q: "Bao lâu nên cập nhật ảnh một lần?",
        a: "Tùy ngành, nhưng nên cập nhật khi có thay đổi không gian, dịch vụ mới hoặc theo mùa cao điểm.",
      },
      {
        q: "Ảnh khách đăng có quan trọng không?",
        a: "Có. Ảnh khách thật giúp tăng độ tin cậy tự nhiên và làm hồ sơ bớt cảm giác một chiều.",
      },
      {
        q: "Tối ưu hình ảnh có giúp lên Maps ngay không?",
        a: "Không có tác động thần kỳ tức thì, nhưng nó ảnh hưởng mạnh đến chuyển đổi và độ nổi bật tổng thể của hồ sơ theo thời gian.",
      },
    ],
    related: [
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Rà soát trước" },
      { label: "Google Maps cho spa", href: "/vi/google-maps-marketing/cho-spa", note: "Theo ngành" },
      { label: "Vì sao hình ảnh trên Google Maps quan trọng", href: "/vi/blog/vi-sao-hinh-anh-google-maps-quan-trong", note: "Blog" },
      { label: "Website hỗ trợ Google Maps ra sao", href: "/vi/blog/website-ho-tro-google-maps-ra-sao", note: "Blog" },
      { label: "Google Business Profile cần có gì", href: "/vi/blog/google-business-profile-can-co-gi", note: "Blog nền" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Tối ưu hình ảnh Google Maps cho doanh nghiệp địa phương" },
    ],
    schema: { serviceType: "Tối ưu hình ảnh Google Maps" },
  },

  /* ───────────────────────── SOCIAL PILLAR ───────────────────────── */
  {
    path: "/vi/social-marketing",
    cluster: "social",
    isPillar: true,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Social Marketing", href: "/vi/social-marketing" },
    ],
    primaryKeyword: "Social Marketing Hội An Đà Nẵng",
    metaTitle: "Social Marketing & Hỗ trợ Facebook | Công Thiên Agency",
    metaDescription:
      "Social Marketing cho doanh nghiệp Hội An – Đà Nẵng: Fanpage, hỗ trợ xác minh Fanpage (Meta Verified Support), Social Growth Package và hỗ trợ khôi phục tài khoản Facebook.",
    eyebrow: "Dịch vụ · Social",
    h1: "Social Marketing & hỗ trợ Facebook cho doanh nghiệp du lịch – dịch vụ",
    heroSub:
      "Social giúp thương hiệu nhìn đáng tin trước khi khách booking. Tôi hỗ trợ fanpage, xác minh, tăng trưởng kênh và khôi phục tài khoản — minh bạch và đúng quy định nền tảng.",
    heroCta: "Nhận tư vấn Social qua Zalo",
    intro:
      "Trước khi đặt dịch vụ, khách thường ghé Fanpage để kiểm tra độ uy tín. Dịch vụ Social Marketing giúp thương hiệu của bạn chỉn chu và đáng tin trên Facebook, Instagram, TikTok — từ hồ sơ, nội dung đến tăng trưởng kênh.",
    sections: [
      {
        heading: "Hỗ trợ xác minh Fanpage (Meta Verified Support)",
        body:
          "Tôi tối ưu hồ sơ fanpage, chuẩn bị thông tin thương hiệu và hỗ trợ quy trình đăng ký xác minh chính thức của Meta. Lưu ý: kết quả xác minh phụ thuộc vào điều kiện xét duyệt của Meta — đây là dịch vụ hỗ trợ chuẩn bị hồ sơ, không cam kết 100%.",
      },
      {
        heading: "Social Growth Package",
        body:
          "Hỗ trợ tăng trưởng và khởi động chỉ số ban đầu cho Facebook / Instagram / TikTok, kết hợp nội dung và quảng bá để xây nền tảng nhận diện thương hiệu. Phù hợp giai đoạn mới mở kênh.",
      },
      {
        heading: "Hỗ trợ khôi phục tài khoản Facebook",
        body:
          "Khi fanpage hoặc tài khoản gặp sự cố, tôi hỗ trợ chuẩn bị hồ sơ và quy trình kháng nghị. Kết quả phụ thuộc vào chính sách và quyết định của Meta.",
      },
      {
        heading: "Fanpage & nội dung",
        body:
          "Thiết lập và tối ưu fanpage chuyên nghiệp, định hướng nội dung giúp khách tin tưởng thương hiệu trước khi đặt dịch vụ.",
      },
    ],
    whoFor: [
      "Doanh nghiệp mới cần xây kênh social uy tín",
      "Spa, nhà hàng, tour cần fanpage chuyên nghiệp",
      "Thương hiệu muốn chuẩn bị xác minh Fanpage",
      "Doanh nghiệp cần hỗ trợ khôi phục tài khoản",
    ],
    process: [
      { step: "Đánh giá", detail: "Rà soát hiện trạng fanpage và kênh social." },
      { step: "Tối ưu", detail: "Hoàn thiện hồ sơ, nội dung và nhận diện." },
      { step: "Triển khai", detail: "Hỗ trợ xác minh, tăng trưởng hoặc khôi phục theo nhu cầu." },
      { step: "Theo dõi", detail: "Đánh giá kết quả và đề xuất tiếp theo." },
    ],
    priceFrom: "Hỗ trợ xác minh Fanpage từ 3.000.000đ / page",
    priceNote: "Social Growth Package từ 100.000đ / 1.000 followers. Kết quả xác minh phụ thuộc xét duyệt của Meta.",
    faqs: [
      {
        q: "Dịch vụ xác minh Fanpage có đảm bảo 100% không?",
        a: "Không. Đây là dịch vụ hỗ trợ chuẩn bị và hoàn thiện hồ sơ; kết quả phụ thuộc vào điều kiện xét duyệt của Meta.",
      },
      {
        q: "Social Growth Package hoạt động thế nào?",
        a: "Hỗ trợ khởi động và tăng trưởng chỉ số ban đầu cho Facebook/Instagram/TikTok, nên kết hợp với nội dung thật để bền vững.",
      },
      {
        q: "Tôi nghe nói “buff follow”, dịch vụ này có phải vậy không?",
        a: "Nhiều người gọi vậy, nhưng tôi định hướng tăng trưởng kèm nội dung để xây nhận diện thương hiệu thật, tránh chỉ số ảo không tạo chuyển đổi.",
      },
      {
        q: "Hỗ trợ khôi phục tài khoản Facebook có chắc lấy lại được không?",
        a: "Tôi hỗ trợ chuẩn bị hồ sơ và quy trình kháng nghị; kết quả cuối phụ thuộc chính sách và quyết định của Meta.",
      },
    ],
    related: [
      { label: "Hỗ trợ xác minh Fanpage", href: "/vi/social-marketing/xac-minh-fanpage", note: "Dịch vụ · Xác minh" },
      { label: "Tăng trưởng kênh social", href: "/vi/social-marketing/tang-truong-kenh", note: "Dịch vụ · Tăng trưởng" },
      { label: "Hỗ trợ khôi phục tài khoản Facebook", href: "/vi/social-marketing/khoi-phuc-tai-khoan-facebook", note: "Dịch vụ · Khôi phục" },
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Uy tín đa kênh" },
      { label: "Social proof là gì", href: "/vi/blog/social-proof-la-gi", note: "Blog" },
      { label: "Bảng giá", href: "/vi/bang-gia", note: "Chi tiết gói Social" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-social.webp", alt: "Social Marketing và hỗ trợ Facebook" },
    ],
    schema: { serviceType: "Social Marketing", offerMinPriceVnd: 3000000 },
  },

  /* ───────────────────────── NAVER SPOKE — CHO NHÀ HÀNG ───────────────────────── */
  {
    path: "/vi/naver-marketing/cho-nha-hang",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver cho nhà hàng", href: "/vi/naver-marketing/cho-nha-hang" },
    ],
    primaryKeyword: "Naver Blog cho nhà hàng",
    metaTitle: "Naver Blog cho nhà hàng: đón khách Hàn tại Hội An – Đà Nẵng | Công Thiên Agency",
    metaDescription:
      "Naver Blog cho nhà hàng giúp khách Hàn tìm thấy quán của bạn khi tra “맛집” tại Hội An – Đà Nẵng: booking blogger Hàn, review món ăn và social proof tiếng Hàn.",
    eyebrow: "Naver · Nhà hàng",
    h1: "Naver Blog cho nhà hàng: xuất hiện khi khách Hàn tìm quán ngon tại Hội An – Đà Nẵng",
    heroSub:
      "Khách Hàn tra “맛집” (quán ngon) trên Naver trước mỗi bữa ăn. Tôi giúp nhà hàng của bạn có bài review tiếng Hàn đáng tin ngay tại điểm đó.",
    heroCta: "Nhận tư vấn Naver cho nhà hàng qua Zalo",
    intro:
      "Với khách Hàn, chọn nơi ăn uống gần như luôn bắt đầu bằng việc tra “맛집” trên Naver. Họ đọc blog review món ăn, xem hình ảnh và không gian rồi mới quyết định. Naver Blog cho nhà hàng tập trung tạo nội dung trải nghiệm ẩm thực thật bằng tiếng Hàn để quán của bạn được chọn.",
    sections: [
      {
        heading: "Khách Hàn chọn quán ăn thế nào?",
        body:
          "Họ tìm theo món và khu vực — ví dụ hải sản Đà Nẵng, món Việt phố cổ Hội An — rồi đọc Naver Blog để xem món, giá và cảm nhận của người Hàn khác. Nếu nhà hàng của bạn không có review ở đó, khách sẽ chọn quán đã có.",
      },
      {
        heading: "Naver Blog cho nhà hàng gồm những gì?",
        bullets: [
          "Booking blogger Hàn trải nghiệm thực đơn và viết bài thật.",
          "Nội dung tập trung món signature, không gian và mức giá.",
          "Tối ưu theo bộ từ khóa ẩm thực mà khách Hàn hay dùng.",
          "Có thể kết hợp gói tài khoản Naver đăng bài định kỳ.",
        ],
      },
      {
        heading: "Kết hợp website và Google Maps",
        body:
          "Nội dung Naver mạnh nhất khi đi cùng website nhà hàng có menu rõ ràng và hồ sơ Google Maps tối ưu — tạo trải nghiệm tin cậy từ lúc khách Hàn tìm kiếm đến khi đến quán.",
      },
    ],
    whoFor: [
      "Nhà hàng, quán ăn đón khách Hàn tại Hội An – Đà Nẵng",
      "Hải sản, đặc sản miền Trung",
      "Quán món Việt, BBQ, lẩu được khách Hàn yêu thích",
      "Cafe, nhà hàng view đẹp gần khu khách Hàn lưu trú",
    ],
    process: [
      { step: "Tư vấn", detail: "Phân tích thực đơn và bộ từ khóa ẩm thực cho khách Hàn." },
      { step: "Chọn blogger", detail: "Tìm blogger Hàn phù hợp phong cách quán." },
      { step: "Trải nghiệm & viết", detail: "Sắp xếp lịch trải nghiệm và brief nội dung món ăn." },
      { step: "Đăng & tổng hợp", detail: "Đăng bài, tối ưu từ khóa và bàn giao link." },
    ],
    priceFrom: "Naver Blogger Review 8.000.000đ / 4 bài",
    priceNote: "Có thể kết hợp gói tài khoản + 8 bài/tháng 6.000.000đ/tháng.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House cho thấy năng lực xây website trải nghiệm – ẩm thực, nơi nội dung Naver có thể dẫn khách Hàn về một trang dịch vụ chuyên nghiệp.",
    },
    faqs: [
      {
        q: "Naver Blog cho nhà hàng phù hợp với quán mới mở không?",
        a: "Có — đây là cách nhanh để tạo review tiếng Hàn đầu tiên, giúp khách Hàn tin tưởng quán chưa có nhiều đánh giá.",
      },
      {
        q: "Một gói gồm bao nhiêu bài?",
        a: "Gói Naver Blogger Review gồm 4 bài (8.000.000đ); có thể bổ sung gói đăng bài hàng tháng.",
      },
      {
        q: "Nhà hàng cần chuẩn bị gì?",
        a: "Thực đơn, vài món signature, hình ảnh không gian và lịch để sắp xếp trải nghiệm cho blogger.",
      },
      {
        q: "Có cần website trước không?",
        a: "Không bắt buộc, nhưng website có menu và đặt bàn giúp chuyển sự quan tâm từ Naver thành khách thực tế hiệu quả hơn.",
      },
    ],
    related: [
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Nền tảng đón khách" },
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Ngành cùng cụm Naver" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Chi tiết gói blogger" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/restaurant.webp", alt: "Naver Blog cho nhà hàng Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Naver Blog cho nhà hàng", offerPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — CHO KHÁCH SẠN ───────────────────────── */
  {
    path: "/vi/naver-marketing/cho-khach-san",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver cho khách sạn", href: "/vi/naver-marketing/cho-khach-san" },
    ],
    primaryKeyword: "Naver Blog cho khách sạn",
    metaTitle: "Naver Blog cho khách sạn & homestay: đón khách Hàn | Công Thiên Agency",
    metaDescription:
      "Naver Blog cho khách sạn, resort, homestay tại Hội An – Đà Nẵng: booking blogger Hàn review phòng và dịch vụ, tạo social proof tiếng Hàn cho khách Hàn đặt phòng.",
    eyebrow: "Naver · Khách sạn",
    h1: "Naver Blog cho khách sạn & homestay: tạo niềm tin với khách Hàn trước khi đặt phòng",
    heroSub:
      "Khách Hàn đọc review phòng trên Naver trước khi đặt. Tôi giúp khách sạn, resort và homestay của bạn có nội dung tiếng Hàn đáng tin tại điểm đó.",
    heroCta: "Nhận tư vấn Naver cho khách sạn qua Zalo",
    intro:
      "Đặt phòng là quyết định cần nhiều niềm tin, và khách Hàn thường đọc Naver Blog để xem phòng thật, dịch vụ và vị trí trước khi chốt. Naver Blog cho khách sạn tập trung tạo nội dung trải nghiệm lưu trú bằng tiếng Hàn, giúp khách yên tâm chọn cơ sở của bạn giữa nhiều lựa chọn.",
    sections: [
      {
        heading: "Vì sao khách sạn cần nội dung Naver?",
        bullets: [
          "Khách Hàn so sánh nhiều cơ sở và tin review thật hơn ảnh quảng cáo.",
          "Naver Blog cho thấy phòng thật, tiện ích, bữa sáng và vị trí.",
          "Đặt phòng giá trị cao cần social proof bằng chính ngôn ngữ của khách.",
          "Cạnh tranh lưu trú cho khách Hàn tại Hội An – Đà Nẵng rất lớn.",
        ],
      },
      {
        heading: "Naver Blog cho khách sạn gồm những gì?",
        body:
          "Blogger Hàn trải nghiệm lưu trú và viết bài về phòng, dịch vụ, không gian chung và trải nghiệm xung quanh. Nội dung tối ưu theo bộ từ khóa khách sạn/homestay mà khách Hàn hay tìm, kèm hình ảnh thật của cơ sở.",
      },
      {
        heading: "Kết hợp website đặt phòng và Google Maps",
        body:
          "Nội dung Naver phát huy tốt nhất khi dẫn khách về website có thông tin phòng, giá và kênh đặt rõ ràng, cùng hồ sơ Google Maps được tối ưu — tạo hành trình tin cậy từ tìm kiếm đến đặt phòng.",
      },
    ],
    whoFor: [
      "Khách sạn, resort đón khách Hàn",
      "Homestay, villa khu phố cổ / ven biển",
      "Boutique hotel muốn tạo review tiếng Hàn",
      "Cơ sở lưu trú mới cần xây niềm tin ban đầu",
    ],
    process: [
      { step: "Tư vấn", detail: "Xác định loại phòng, dịch vụ và bộ từ khóa cho khách Hàn." },
      { step: "Chọn blogger", detail: "Tìm blogger Hàn phù hợp phân khúc lưu trú." },
      { step: "Trải nghiệm & viết", detail: "Sắp xếp lưu trú trải nghiệm và brief nội dung." },
      { step: "Đăng & tổng hợp", detail: "Đăng bài, tối ưu từ khóa và bàn giao link." },
    ],
    priceFrom: "Naver Blogger Review 8.000.000đ / 4 bài",
    priceNote: "Có thể kết hợp gói tài khoản + 8 bài/tháng 6.000.000đ/tháng.",
    faqs: [
      {
        q: "Naver Blog cho khách sạn phù hợp với cơ sở mới không?",
        a: "Rất phù hợp — review tiếng Hàn đầu tiên giúp cơ sở mới tạo niềm tin với khách Hàn khi chưa có nhiều đánh giá.",
      },
      {
        q: "Blogger có ở lại trải nghiệm thật không?",
        a: "Có — blogger Hàn trải nghiệm lưu trú thực tế rồi viết bài, đó là điều tạo độ tin cậy với người đọc.",
      },
      {
        q: "Khách sạn cần chuẩn bị gì?",
        a: "Một đêm lưu trú trải nghiệm, thông tin loại phòng/dịch vụ, hình ảnh và lịch phù hợp để sắp xếp.",
      },
      {
        q: "Chi phí bắt đầu từ bao nhiêu?",
        a: "Gói Naver Blogger Review từ 8.000.000đ/4 bài; chiến dịch KOC quy mô lớn báo giá riêng.",
      },
    ],
    related: [
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Thị trường khách Hàn lớn" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Chi tiết gói blogger" },
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Uy tín địa phương" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/homestay.webp", alt: "Naver Blog cho khách sạn homestay Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Naver Blog cho khách sạn", offerPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — CHO TOUR ───────────────────────── */
  {
    path: "/vi/naver-marketing/cho-tour",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver cho tour", href: "/vi/naver-marketing/cho-tour" },
    ],
    primaryKeyword: "Naver Blog cho tour",
    metaTitle: "Naver Blog cho tour & trải nghiệm: đón khách Hàn | Công Thiên Agency",
    metaDescription:
      "Naver Blog cho tour, cooking class và trải nghiệm tại Hội An – Đà Nẵng: booking blogger Hàn review lịch trình thật, tạo social proof tiếng Hàn để khách Hàn đặt tour.",
    eyebrow: "Naver · Tour & trải nghiệm",
    h1: "Naver Blog cho tour & trải nghiệm: giúp khách Hàn đặt tour của bạn tại Hội An – Đà Nẵng",
    heroSub:
      "Khách Hàn lên kế hoạch tour trước chuyến đi và đọc review trên Naver. Tôi giúp tour của bạn có nội dung trải nghiệm tiếng Hàn đáng tin.",
    heroCta: "Nhận tư vấn Naver cho tour qua Zalo",
    intro:
      "Khách Hàn thường đặt tour, cooking class và trải nghiệm từ trước chuyến đi, sau khi đọc Naver Blog để hình dung lịch trình và cảm nhận thật. Naver Blog cho tour tập trung kể lại trải nghiệm bằng tiếng Hàn, giúp khách hình dung rõ và yên tâm đặt chỗ.",
    sections: [
      {
        heading: "Khách Hàn chọn tour thế nào?",
        body:
          "Họ tìm trên Naver theo loại trải nghiệm và địa danh, đọc blog mô tả lịch trình, thời lượng, điểm đến và cảm nhận. Một bài review chi tiết bằng tiếng Hàn giúp khách quyết định nhanh và tin tưởng hơn.",
      },
      {
        heading: "Naver Blog cho tour gồm những gì?",
        bullets: [
          "Booking blogger Hàn tham gia trải nghiệm thật và viết bài.",
          "Nội dung mô tả lịch trình, điểm nhấn và cảm xúc trải nghiệm.",
          "Tối ưu theo bộ từ khóa tour/trải nghiệm khách Hàn hay tìm.",
          "Có thể kết hợp gói tài khoản Naver đăng bài định kỳ.",
        ],
      },
      {
        heading: "Kết hợp website booking để chốt đặt chỗ",
        body:
          "Nội dung Naver dẫn khách về website tour có lịch trình, giá và đặt chỗ – thanh toán online (như mô hình đã làm cho Ruong House) — biến sự quan tâm thành booking thực tế.",
      },
    ],
    whoFor: [
      "Tour, cooking class, craft workshop đón khách Hàn",
      "Trải nghiệm địa phương tại Hội An – Đà Nẵng",
      "Dịch vụ tham quan, half-day/full-day tour",
      "Doanh nghiệp trải nghiệm muốn tạo review tiếng Hàn",
    ],
    process: [
      { step: "Tư vấn", detail: "Xác định loại trải nghiệm và bộ từ khóa cho khách Hàn." },
      { step: "Chọn blogger", detail: "Tìm blogger Hàn phù hợp loại tour." },
      { step: "Trải nghiệm & viết", detail: "Sắp xếp tham gia tour và brief nội dung lịch trình." },
      { step: "Đăng & tổng hợp", detail: "Đăng bài, tối ưu từ khóa và bàn giao link." },
    ],
    priceFrom: "Naver Blogger Review 8.000.000đ / 4 bài",
    priceNote: "Có thể kết hợp gói tài khoản + 8 bài/tháng 6.000.000đ/tháng.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House — website cooking class & trải nghiệm có booking và thanh toán, là ví dụ nơi nội dung Naver dẫn khách Hàn về trang đặt chỗ chuyên nghiệp.",
    },
    faqs: [
      {
        q: "Naver Blog cho tour phù hợp loại trải nghiệm nào?",
        a: "Cooking class, craft workshop, tour tham quan và trải nghiệm địa phương — những loại khách Hàn đặt trước chuyến đi.",
      },
      {
        q: "Một gói gồm bao nhiêu bài?",
        a: "Gói Naver Blogger Review gồm 4 bài (8.000.000đ); có thể bổ sung gói đăng bài hàng tháng.",
      },
      {
        q: "Cần chuẩn bị gì cho buổi trải nghiệm?",
        a: "Một suất tour/trải nghiệm, thông tin lịch trình, điểm nhấn và lịch phù hợp để sắp xếp cho blogger.",
      },
      {
        q: "Có cần website đặt tour trước không?",
        a: "Không bắt buộc, nhưng website có lịch trình và đặt chỗ online giúp chuyển quan tâm từ Naver thành booking hiệu quả hơn.",
      },
    ],
    related: [
      { label: "Website cooking class Hội An", href: "/vi/thiet-ke-website/cooking-class-hoi-an", note: "Nền tảng đặt tour" },
      { label: "Case study Ruong House", href: "/vi/du-an/ruong-house", note: "Dự án tham khảo" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Chi tiết gói blogger" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/cooking-class-tour.webp", alt: "Naver Blog cho tour trải nghiệm Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Naver Blog cho tour", offerPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SPOKE — HỘI AN ───────────────────────── */
  {
    path: "/vi/naver-marketing/hoi-an",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver Marketing Hội An", href: "/vi/naver-marketing/hoi-an" },
    ],
    primaryKeyword: "Naver Marketing Hội An",
    metaTitle: "Naver Marketing Hội An cho khách Hàn | Công Thiên Agency",
    metaDescription:
      "Naver Marketing Hội An cho spa, nhà hàng, homestay, cooking class và tour phố cổ: booking blogger Hàn, Naver Blog và social proof tiếng Hàn.",
    eyebrow: "Naver · Hội An",
    h1: "Naver Marketing Hội An cho spa, nhà hàng, homestay và tour phố cổ",
    heroSub:
      "Khách Hàn đến Hội An thường lên kế hoạch kỹ và đặt trước qua Naver. Tôi giúp doanh nghiệp của bạn hiện diện đúng nơi họ ra quyết định.",
    heroCta: "Nhận tư vấn Naver Hội An qua Zalo",
    intro:
      "Hội An là điểm đến di sản mà khách Hàn yêu thích — nhưng cũng là nơi họ chuẩn bị rất kỹ trước khi đến: tra cứu spa, quán ăn, homestay và lớp trải nghiệm trên Naver từ trước chuyến đi. Khác với Đà Nẵng nghiêng về resort biển quy mô lớn, Hội An mang tính trải nghiệm, boutique và đi bộ. Naver Marketing tại Hội An tập trung tạo nội dung tiếng Hàn đúng với ngữ cảnh đó để doanh nghiệp của bạn được chọn.",
    sections: [
      {
        heading: "Vì sao Hội An cần cách tiếp cận Naver riêng?",
        bullets: [
          "Khách Hàn đến Hội An thường đặt trải nghiệm trước chuyến đi nhiều hơn quyết định tại chỗ.",
          "Phố cổ thiên về boutique spa, homestay, cooking class — cần nội dung kể trải nghiệm, không phải quảng cáo.",
          "Nhiều khách đi Hội An như chuyến trong ngày từ Đà Nẵng, nên thông tin lịch trình rõ ràng rất quan trọng.",
          "Yếu tố di sản, không gian và câu chuyện địa phương là điểm khách Hàn đặc biệt thích chia sẻ trên Naver Blog.",
        ],
      },
      {
        heading: "Naver Marketing Hội An gồm những gì?",
        body:
          "Tôi chọn blogger Hàn phù hợp với tệp khách đến phố cổ, sắp xếp trải nghiệm thật tại doanh nghiệp của bạn và tạo nội dung Naver Blog tối ưu theo bộ từ khóa khách Hàn dùng cho Hội An. Nội dung tập trung không gian, trải nghiệm và cảm nhận — đúng chất Hội An.",
      },
      {
        heading: "Phù hợp với nhiều ngành tại phố cổ",
        body:
          "Spa và wellness, nhà hàng và quán đặc sản, homestay và villa, cooking class và craft workshop — mỗi ngành có bộ từ khóa và cách kể chuyện riêng. Tôi triển khai theo từng ngành thay vì dùng một nội dung chung.",
      },
      {
        heading: "Kết hợp website và Google Maps để khép kín hành trình",
        body:
          "Nội dung Naver dẫn khách Hàn về website có thông tin và đặt dịch vụ rõ ràng (như mô hình đã làm cho Ruong House và Serena Retreat), cùng hồ sơ Google Maps tối ưu — tạo trải nghiệm tin cậy từ tìm kiếm trên Naver đến lúc đặt và đến nơi.",
      },
    ],
    whoFor: [
      "Spa, wellness boutique tại khu phố cổ Hội An",
      "Nhà hàng, quán đặc sản phục vụ khách Hàn",
      "Homestay, villa, boutique hotel tại Hội An",
      "Cooking class, craft workshop và tour trải nghiệm",
    ],
    process: [
      { step: "Tư vấn", detail: "Xác định ngành, tệp khách Hàn và bộ từ khóa Naver cho Hội An." },
      { step: "Chọn blogger", detail: "Tìm blogger Hàn phù hợp trải nghiệm phố cổ." },
      { step: "Triển khai", detail: "Sắp xếp trải nghiệm thật, viết và đăng nội dung tối ưu." },
      { step: "Tổng hợp", detail: "Bàn giao link bài và đánh giá hiệu quả nội dung." },
    ],
    priceFrom: "Naver Blogger Review từ 8.000.000đ / 4 bài",
    priceNote: "Gói tài khoản + 8 bài/tháng: 6.000.000đ/tháng. KOC báo giá theo chiến dịch.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House — website cooking class & craft workshop tại Hội An, là ví dụ nơi nội dung Naver có thể dẫn khách Hàn về trang đặt trải nghiệm chuyên nghiệp.",
    },
    faqs: [
      {
        q: "Naver Marketing Hội An khác Đà Nẵng thế nào?",
        a: "Hội An thiên về trải nghiệm, boutique và di sản; Đà Nẵng nghiêng về resort biển quy mô lớn. Bộ từ khóa, blogger và cách kể chuyện được tối ưu riêng cho từng ngữ cảnh.",
      },
      {
        q: "Ngành nào ở Hội An hợp với Naver nhất?",
        a: "Spa, nhà hàng, homestay/villa và cooking class — những ngành khách Hàn tra cứu và đặt trước nhiều trên Naver.",
      },
      {
        q: "Doanh nghiệp nhỏ ở phố cổ có làm được không?",
        a: "Rất phù hợp — Naver Blog đặc biệt hiệu quả với mô hình boutique, nơi trải nghiệm thật và câu chuyện địa phương tạo khác biệt.",
      },
      {
        q: "Chi phí bắt đầu từ bao nhiêu?",
        a: "Gói Naver Blogger Review từ 8.000.000đ/4 bài; gói tài khoản đăng bài hàng tháng 6.000.000đ/tháng; KOC báo giá theo chiến dịch.",
      },
    ],
    related: [
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Khu vực lân cận" },
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Theo ngành" },
      { label: "Naver cho nhà hàng", href: "/vi/naver-marketing/cho-nha-hang", note: "Theo ngành" },
      { label: "Naver cho khách sạn", href: "/vi/naver-marketing/cho-khach-san", note: "Theo ngành" },
      { label: "Naver cho tour", href: "/vi/naver-marketing/cho-tour", note: "Trải nghiệm phố cổ" },
      { label: "Local SEO Hội An", href: "/vi/google-maps-marketing/hoi-an", note: "Google Maps địa phương" },
      { label: "Naver Place là gì", href: "/vi/blog/naver-place-la-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver Marketing Hội An cho khách Hàn" },
    ],
    schema: { serviceType: "Naver Marketing Hội An", offerMinPriceVnd: 8000000 },
  },

  /* ───────────────────────── MAPS SPOKE — CHO SPA ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/cho-spa",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Google Maps cho spa", href: "/vi/google-maps-marketing/cho-spa" },
    ],
    primaryKeyword: "Google Maps cho spa",
    metaTitle: "Google Maps cho spa: tăng hiển thị & đánh giá thật | Công Thiên Agency",
    metaDescription:
      "Tối ưu Google Business Profile cho spa tại Hội An – Đà Nẵng: danh mục, hình ảnh treatment, đánh giá từ khách hàng thật và Local SEO để khách tìm thấy spa của bạn.",
    eyebrow: "Google Maps · Spa",
    h1: "Google Maps cho spa: xuất hiện khi khách tìm “spa gần đây” tại Hội An – Đà Nẵng",
    heroSub:
      "Phần lớn khách tìm spa ngay khi đang ở gần. Tôi tối ưu hồ sơ Google Maps và xây đánh giá thật để spa của bạn được chọn.",
    heroCta: "Nhận tư vấn Google Maps cho spa qua Zalo",
    intro:
      "Khách của spa thường tìm dịch vụ ngay khi đang ở Hội An hoặc Đà Nẵng, qua truy vấn như “spa gần đây”, “massage phố cổ” hay “spa Hội An”. Google Maps là nơi họ so sánh và chọn. Dịch vụ tập trung tối ưu hồ sơ spa và xây đánh giá thật để bạn nổi bật ngay tại bước quyết định.",
    sections: [
      {
        heading: "Vì sao spa phụ thuộc nhiều vào Google Maps?",
        bullets: [
          "Khách du lịch tìm spa theo vị trí và chọn trong vài lựa chọn gần nhất.",
          "Số sao, đánh giá và hình ảnh treatment quyết định ấn tượng đầu tiên.",
          "Hồ sơ thiếu ảnh không gian thư giãn khiến spa kém hấp dẫn.",
          "Cạnh tranh spa tại khu phố cổ và ven biển rất cao.",
        ],
      },
      {
        heading: "Tối ưu hồ sơ spa gồm những gì?",
        body:
          "Hoàn thiện Google Business Profile với danh mục spa chính xác, hình ảnh không gian và treatment, danh sách dịch vụ, giờ mở cửa và bài đăng cập nhật. Song song là quy trình thu hút đánh giá thật từ khách sau liệu trình — đúng chính sách Google.",
      },
      {
        heading: "Kết hợp website spa và Naver cho khách Hàn",
        body:
          "Hồ sơ Google Maps mạnh hơn khi đi cùng website spa có đặt lịch (như Serena Retreat) và thông tin nhất quán. Với spa đón khách Hàn, có thể kết hợp Naver để phủ cả kênh tìm kiếm của người Hàn.",
      },
    ],
    whoFor: [
      "Spa, day spa, massage tại Hội An – Đà Nẵng",
      "Trung tâm wellness, trị liệu",
      "Spa đón khách du lịch và khách quốc tế",
      "Spa mới mở cần xây đánh giá ban đầu",
    ],
    process: [
      { step: "Audit hồ sơ", detail: "Rà soát hồ sơ Google Maps spa hiện tại." },
      { step: "Tối ưu", detail: "Hoàn thiện danh mục, hình ảnh treatment, dịch vụ, mô tả." },
      { step: "Quy trình review", detail: "Thiết lập cách thu hút đánh giá thật sau liệu trình." },
      { step: "Đo lường", detail: "Theo dõi hiển thị, đánh giá và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Báo giá tùy hiện trạng hồ sơ và phạm vi tối ưu.",
    proof: {
      ...PROOF_SERENA,
      text: "Serena Retreat — website spa tại Hội An kèm hỗ trợ tạo Google Maps, ví dụ về hồ sơ địa phương đồng bộ với website đặt lịch.",
    },
    faqs: [
      {
        q: "Dịch vụ có mua đánh giá cho spa không?",
        a: "Không. Tôi tối ưu hồ sơ và xây quy trình thu hút đánh giá từ khách thật sau liệu trình, đúng chính sách Google.",
      },
      {
        q: "Spa mới mở chưa có đánh giá thì bắt đầu thế nào?",
        a: "Bắt đầu bằng hồ sơ hoàn chỉnh và quy trình mời khách hài lòng đánh giá ngay sau dịch vụ để tích lũy đánh giá thật đầu tiên.",
      },
      {
        q: "Bao lâu spa thấy thay đổi?",
        a: "Tối ưu hồ sơ có hiệu lực ngay; đánh giá và uy tín tăng dần theo lượng khách thật và quy trình triển khai.",
      },
      {
        q: "Có cần website spa không?",
        a: "Không bắt buộc, nhưng website spa có đặt lịch giúp hồ sơ Maps mạnh hơn nhờ thông tin nhất quán.",
      },
    ],
    related: [
      { label: "Website spa Hội An", href: "/vi/thiet-ke-website/spa-hoi-an", note: "Nền tảng đi kèm" },
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Kênh khách Hàn" },
      { label: "Google Business Profile cần có gì", href: "/vi/blog/google-business-profile-can-co-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/spa.webp", alt: "Google Maps cho spa Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Google Maps cho spa", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── MAPS SPOKE — CHO NHÀ HÀNG ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/cho-nha-hang",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Google Maps cho nhà hàng", href: "/vi/google-maps-marketing/cho-nha-hang" },
    ],
    primaryKeyword: "Google Maps cho nhà hàng",
    metaTitle: "Google Maps cho nhà hàng: tăng khách & đánh giá thật | Công Thiên Agency",
    metaDescription:
      "Tối ưu Google Business Profile cho nhà hàng tại Hội An – Đà Nẵng: danh mục, ảnh món ăn, menu, đánh giá từ khách thật và Local SEO để khách tìm thấy quán của bạn.",
    eyebrow: "Google Maps · Nhà hàng",
    h1: "Google Maps cho nhà hàng: nổi bật khi khách tìm chỗ ăn tại Hội An – Đà Nẵng",
    heroSub:
      "Khách du lịch chọn quán ăn ngay trên Google Maps qua hình ảnh và đánh giá. Tôi tối ưu hồ sơ và xây đánh giá thật để quán bạn được chọn.",
    heroCta: "Nhận tư vấn Google Maps cho nhà hàng qua Zalo",
    intro:
      "Trước mỗi bữa ăn, khách du lịch mở Google Maps tìm “nhà hàng Hội An”, “quán ngon gần đây” hay món cụ thể, rồi chọn dựa trên hình ảnh món ăn và số sao. Một hồ sơ nhà hàng đầy đủ và nhiều đánh giá thật tạo lợi thế rõ rệt tại đúng bước quyết định.",
    sections: [
      {
        heading: "Khách chọn quán ăn trên Google Maps thế nào?",
        bullets: [
          "Tìm theo món và khu vực rồi so sánh vài quán gần nhất.",
          "Ảnh món ăn và không gian quyết định khách có ghé hay không.",
          "Số sao và đánh giá gần đây ảnh hưởng mạnh đến lựa chọn.",
          "Menu, giờ mở cửa và vị trí rõ ràng giúp khách quyết định nhanh.",
        ],
      },
      {
        heading: "Tối ưu hồ sơ nhà hàng gồm những gì?",
        body:
          "Hoàn thiện Google Business Profile với danh mục ẩm thực chính xác, ảnh món signature và không gian, menu và giá tham khảo, giờ mở cửa và bài đăng. Đồng thời xây quy trình mời khách hài lòng để lại đánh giá thật sau bữa ăn.",
      },
      {
        heading: "Kết hợp website nhà hàng và uy tín đa kênh",
        body:
          "Hồ sơ Maps mạnh hơn khi đi cùng website có menu rõ ràng và thông tin nhất quán. Với quán đón khách Hàn, nội dung Naver có thể bổ trợ để phủ thêm kênh tìm kiếm của người Hàn.",
      },
    ],
    whoFor: [
      "Nhà hàng, quán ăn tại Hội An – Đà Nẵng",
      "Hải sản, đặc sản miền Trung",
      "Cafe, brunch, không gian view đẹp",
      "Quán phục vụ khách du lịch quốc tế",
    ],
    process: [
      { step: "Audit hồ sơ", detail: "Rà soát hồ sơ Google Maps nhà hàng hiện tại." },
      { step: "Tối ưu", detail: "Hoàn thiện danh mục, ảnh món, menu, mô tả, bài đăng." },
      { step: "Quy trình review", detail: "Thiết lập cách thu hút đánh giá thật sau bữa ăn." },
      { step: "Đo lường", detail: "Theo dõi hiển thị, đánh giá và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Báo giá tùy hiện trạng hồ sơ và phạm vi tối ưu.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House — dự án trải nghiệm – ẩm thực tại Hội An kèm hỗ trợ tạo Google Maps, ví dụ về hồ sơ địa phương đồng bộ với website.",
    },
    faqs: [
      {
        q: "Dịch vụ có mua đánh giá cho nhà hàng không?",
        a: "Không. Tôi tối ưu hồ sơ và xây quy trình thu hút đánh giá từ khách thật sau bữa ăn, đúng chính sách Google.",
      },
      {
        q: "Ảnh món ăn quan trọng thế nào?",
        a: "Rất quan trọng — ảnh món và không gian là yếu tố khách xem đầu tiên và thường quyết định họ có ghé quán hay không.",
      },
      {
        q: "Quán mới mở nên bắt đầu từ đâu?",
        a: "Hồ sơ hoàn chỉnh với ảnh món đẹp và quy trình mời khách đánh giá ngay sau bữa ăn để tích lũy đánh giá thật.",
      },
      {
        q: "Có cần website nhà hàng không?",
        a: "Không bắt buộc, nhưng website có menu giúp hồ sơ Maps mạnh hơn nhờ thông tin nhất quán.",
      },
    ],
    related: [
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Nền tảng đi kèm" },
      { label: "Naver cho nhà hàng", href: "/vi/naver-marketing/cho-nha-hang", note: "Kênh khách Hàn" },
      { label: "Vì sao hình ảnh Google Maps quan trọng", href: "/vi/blog/vi-sao-hinh-anh-google-maps-quan-trong", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/restaurant.webp", alt: "Google Maps cho nhà hàng Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Google Maps cho nhà hàng", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── MAPS SPOKE — CHO KHÁCH SẠN ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/cho-khach-san",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Google Maps cho khách sạn", href: "/vi/google-maps-marketing/cho-khach-san" },
    ],
    primaryKeyword: "Google Maps cho khách sạn",
    metaTitle: "Google Maps cho khách sạn & homestay: uy tín đặt phòng | Công Thiên Agency",
    metaDescription:
      "Tối ưu Google Business Profile cho khách sạn, resort, homestay tại Hội An – Đà Nẵng: hình ảnh phòng, tiện ích, đánh giá từ khách thật và Local SEO tăng uy tín đặt phòng.",
    eyebrow: "Google Maps · Khách sạn",
    h1: "Google Maps cho khách sạn & homestay: xây uy tín trước khi khách đặt phòng",
    heroSub:
      "Khách so sánh nơi lưu trú qua đánh giá và hình ảnh trên Google Maps. Tôi tối ưu hồ sơ và xây đánh giá thật để cơ sở của bạn nổi bật.",
    heroCta: "Nhận tư vấn Google Maps cho khách sạn qua Zalo",
    intro:
      "Đặt phòng là quyết định cần nhiều niềm tin. Khách thường kiểm tra Google Maps để xem phòng thật, tiện ích, vị trí và đánh giá trước khi chốt — kể cả khi đã thấy cơ sở trên kênh đặt phòng khác. Một hồ sơ đầy đủ và nhiều đánh giá thật giúp khách sạn, resort và homestay của bạn tạo lợi thế.",
    sections: [
      {
        heading: "Vì sao khách sạn cần hồ sơ Google Maps mạnh?",
        bullets: [
          "Khách kiểm tra đánh giá và hình ảnh phòng trước khi đặt.",
          "Vị trí và chỉ đường trên Maps ảnh hưởng đến trải nghiệm khách.",
          "Đánh giá gần đây phản ánh chất lượng dịch vụ hiện tại.",
          "Cạnh tranh lưu trú tại Hội An – Đà Nẵng rất lớn.",
        ],
      },
      {
        heading: "Tối ưu hồ sơ khách sạn gồm những gì?",
        body:
          "Hoàn thiện Google Business Profile với danh mục lưu trú chính xác, hình ảnh phòng và không gian chung, tiện ích, mô tả và bài đăng. Song song là quy trình mời khách để lại đánh giá thật khi trả phòng — đúng chính sách Google.",
      },
      {
        heading: "Kết hợp website đặt phòng và Naver cho khách Hàn",
        body:
          "Hồ sơ Maps mạnh hơn khi đi cùng website có thông tin phòng, giá và kênh đặt rõ ràng. Với cơ sở đón nhiều khách Hàn, nội dung Naver bổ trợ để phủ thêm kênh tìm kiếm của người Hàn.",
      },
    ],
    whoFor: [
      "Khách sạn, resort tại Hội An – Đà Nẵng",
      "Homestay, villa khu phố cổ / ven biển",
      "Boutique hotel cần xây đánh giá",
      "Cơ sở lưu trú mới cần tạo niềm tin ban đầu",
    ],
    process: [
      { step: "Audit hồ sơ", detail: "Rà soát hồ sơ Google Maps lưu trú hiện tại." },
      { step: "Tối ưu", detail: "Hoàn thiện danh mục, ảnh phòng, tiện ích, mô tả, bài đăng." },
      { step: "Quy trình review", detail: "Thiết lập cách thu hút đánh giá thật khi khách trả phòng." },
      { step: "Đo lường", detail: "Theo dõi hiển thị, đánh giá và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Báo giá tùy hiện trạng hồ sơ và phạm vi tối ưu.",
    faqs: [
      {
        q: "Dịch vụ có mua đánh giá cho khách sạn không?",
        a: "Không. Tôi tối ưu hồ sơ và xây quy trình thu hút đánh giá từ khách thật khi trả phòng, đúng chính sách Google.",
      },
      {
        q: "Đã có trên kênh đặt phòng khác, vẫn cần Google Maps chứ?",
        a: "Có — nhiều khách kiểm tra chéo Google Maps để xem đánh giá và hình ảnh trước khi quyết định, kể cả khi đã thấy cơ sở nơi khác.",
      },
      {
        q: "Cơ sở mới nên bắt đầu thế nào?",
        a: "Hồ sơ hoàn chỉnh với ảnh phòng thật và quy trình mời khách đánh giá khi trả phòng để tích lũy đánh giá thật đầu tiên.",
      },
      {
        q: "Có cần website đặt phòng không?",
        a: "Không bắt buộc, nhưng website có thông tin phòng giúp hồ sơ Maps mạnh hơn nhờ thông tin nhất quán.",
      },
    ],
    related: [
      { label: "Naver cho khách sạn", href: "/vi/naver-marketing/cho-khach-san", note: "Kênh khách Hàn" },
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Chiến lược đánh giá" },
      { label: "Local SEO là gì", href: "/vi/blog/local-seo-la-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/homestay.webp", alt: "Google Maps cho khách sạn homestay Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Google Maps cho khách sạn", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── MAPS SPOKE — HỘI AN (LOCAL SEO) ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/hoi-an",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Local SEO Hội An", href: "/vi/google-maps-marketing/hoi-an" },
    ],
    primaryKeyword: "Local SEO Hội An",
    metaTitle: "Local SEO Hội An & Google Maps Marketing | Công Thiên Agency",
    metaDescription:
      "Local SEO Hội An cho spa, nhà hàng, homestay và tour phố cổ: tối ưu Google Business Profile, hình ảnh, NAP website và đánh giá thật.",
    eyebrow: "Google Maps · Hội An",
    h1: "Local SEO Hội An giúp doanh nghiệp phố cổ hiển thị trên Google Maps",
    heroSub:
      "Khách đến Hội An tìm dịch vụ ngay trên điện thoại. Tôi tối ưu hồ sơ Google Maps và đánh giá thật để bạn xuất hiện đúng lúc đó.",
    heroCta: "Nhận tư vấn Local SEO Hội An qua Zalo",
    intro:
      "Hội An là điểm đến đi bộ, nơi khách du lịch liên tục tìm spa, quán ăn, homestay và trải nghiệm ngay khi đang ở phố cổ. Local SEO Hội An tập trung giúp doanh nghiệp hiển thị trên Google Maps và kết quả địa phương đúng lúc khách đang tìm — yếu tố quyết định với mô hình phục vụ khách du lịch.",
    sections: [
      {
        heading: "Vì sao Local SEO quan trọng tại Hội An?",
        bullets: [
          "Khách du lịch tìm dịch vụ theo vị trí, ngay khi đang ở phố cổ.",
          "Quyết định nhanh dựa trên số sao, hình ảnh và khoảng cách.",
          "Mật độ doanh nghiệp dịch vụ tại khu phố cổ rất cao.",
          "Nhiều khách đi Hội An trong ngày từ Đà Nẵng, cần thông tin rõ ràng.",
        ],
      },
      {
        heading: "Local SEO Hội An gồm những gì?",
        body:
          "Tối ưu Google Business Profile với danh mục và thông tin chính xác, hình ảnh thật, đồng bộ NAP giữa hồ sơ và website, xây đánh giá từ khách hàng thật và duy trì bài đăng. Mục tiêu là tăng độ liên quan và độ nổi bật của hồ sơ trong khu vực Hội An.",
      },
      {
        heading: "Phù hợp với doanh nghiệp phố cổ",
        body:
          "Spa boutique, nhà hàng đặc sản, homestay, villa và cooking class — những mô hình đặc trưng của Hội An — đều hưởng lợi từ Local SEO. Có thể kết hợp Naver Marketing Hội An để phủ thêm nhóm khách Hàn.",
      },
    ],
    whoFor: [
      "Spa, wellness tại khu phố cổ Hội An",
      "Nhà hàng, quán đặc sản phục vụ khách du lịch",
      "Homestay, villa, boutique hotel tại Hội An",
      "Cooking class, workshop và tour trải nghiệm",
    ],
    process: [
      { step: "Audit hồ sơ", detail: "Rà soát hồ sơ Google Maps và hiển thị địa phương tại Hội An." },
      { step: "Tối ưu", detail: "Hoàn thiện hồ sơ, đồng bộ NAP với website, cập nhật hình ảnh." },
      { step: "Quy trình review", detail: "Thiết lập cách thu hút đánh giá thật từ khách." },
      { step: "Đo lường", detail: "Theo dõi hiển thị địa phương và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Báo giá tùy ngành, hiện trạng hồ sơ và phạm vi tối ưu.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House tại Hội An — website kèm hỗ trợ tạo Google Maps, ví dụ về hồ sơ địa phương đồng bộ với website đặt trải nghiệm.",
    },
    faqs: [
      {
        q: "Local SEO Hội An khác Google Maps Marketing chung thế nào?",
        a: "Đây là cùng phương pháp nhưng tập trung vào hiển thị trong khu vực Hội An và đặc thù khách du lịch phố cổ.",
      },
      {
        q: "Doanh nghiệp nhỏ ở phố cổ có làm được không?",
        a: "Rất phù hợp — hồ sơ Google Maps tối ưu và đánh giá thật đặc biệt hiệu quả với mô hình boutique đón khách du lịch.",
      },
      {
        q: "Có giúp đồng bộ thông tin với website không?",
        a: "Có — đồng bộ NAP và dữ liệu giữa hồ sơ Maps và website là phần quan trọng của Local SEO.",
      },
      {
        q: "Chi phí từ bao nhiêu?",
        a: "Từ 3.500.000đ/chiến dịch, tùy ngành và phạm vi tối ưu.",
      },
    ],
    related: [
      { label: "Local SEO Đà Nẵng", href: "/vi/google-maps-marketing/da-nang", note: "Khu vực lân cận" },
      { label: "Naver Marketing Hội An", href: "/vi/naver-marketing/hoi-an", note: "Kênh khách Hàn" },
      { label: "Google Maps cho spa", href: "/vi/google-maps-marketing/cho-spa", note: "Theo ngành" },
      { label: "Google Maps cho nhà hàng", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Theo ngành" },
      { label: "Thiết kế website Hội An Đà Nẵng", href: "/vi/thiet-ke-website", note: "Đồng bộ website và NAP" },
      { label: "Local SEO là gì", href: "/vi/blog/local-seo-la-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Local SEO Hội An tối ưu Google Maps" },
    ],
    schema: { serviceType: "Local SEO Hội An", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── MAPS SPOKE — ĐÀ NẴNG (LOCAL SEO) ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/da-nang",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Local SEO Đà Nẵng", href: "/vi/google-maps-marketing/da-nang" },
    ],
    primaryKeyword: "Local SEO Đà Nẵng",
    metaTitle: "Local SEO Đà Nẵng: tối ưu Google Maps cho doanh nghiệp | Công Thiên Agency",
    metaDescription:
      "Local SEO Đà Nẵng: tối ưu Google Business Profile và đánh giá thật để spa, nhà hàng, khách sạn và tour xuất hiện khi khách tìm dịch vụ tại Đà Nẵng.",
    eyebrow: "Google Maps · Đà Nẵng",
    h1: "Local SEO Đà Nẵng — tối ưu Google Maps cho doanh nghiệp dịch vụ – du lịch",
    heroSub:
      "Đà Nẵng cạnh tranh cao và khách tìm dịch vụ theo vị trí. Tôi tối ưu hồ sơ Google Maps và đánh giá thật để bạn nổi bật.",
    heroCta: "Nhận tư vấn Local SEO Đà Nẵng qua Zalo",
    intro:
      "Đà Nẵng là thị trường du lịch lớn với mật độ spa, nhà hàng, khách sạn và tour dày đặc. Khách tìm dịch vụ theo khu vực — biển Mỹ Khê, trung tâm, gần cầu Rồng — và chọn qua Google Maps. Local SEO Đà Nẵng giúp doanh nghiệp hiển thị nổi bật giữa cạnh tranh tại đúng bước khách quyết định.",
    sections: [
      {
        heading: "Vì sao Local SEO quan trọng tại Đà Nẵng?",
        bullets: [
          "Lượng khách du lịch lớn tìm dịch vụ theo vị trí mỗi ngày.",
          "Cạnh tranh cao giữa các spa, nhà hàng, khách sạn cùng khu vực.",
          "Số sao và đánh giá gần đây ảnh hưởng mạnh đến lựa chọn.",
          "Khách quốc tế phụ thuộc nhiều vào hồ sơ Maps và hình ảnh.",
        ],
      },
      {
        heading: "Local SEO Đà Nẵng gồm những gì?",
        body:
          "Tối ưu Google Business Profile theo khu vực phục vụ, hình ảnh thật, đồng bộ NAP với website, xây đánh giá từ khách hàng thật và duy trì bài đăng. Mục tiêu là tăng độ liên quan và độ nổi bật của hồ sơ trong các khu vực trọng điểm của Đà Nẵng.",
      },
      {
        heading: "Kết hợp Naver cho thị trường khách Hàn lớn",
        body:
          "Đà Nẵng đón lượng khách Hàn rất lớn. Local SEO trên Google Maps phục vụ khách quốc tế nói chung, còn Naver Marketing Đà Nẵng phủ riêng nhóm khách Hàn — hai kênh kết hợp tạo độ phủ tìm kiếm toàn diện.",
      },
    ],
    whoFor: [
      "Spa, wellness tại Đà Nẵng",
      "Nhà hàng, quán ăn khu biển / trung tâm",
      "Khách sạn, resort, homestay",
      "Tour, dịch vụ du lịch tại Đà Nẵng",
    ],
    process: [
      { step: "Audit hồ sơ", detail: "Rà soát hồ sơ Google Maps và hiển thị địa phương tại Đà Nẵng." },
      { step: "Tối ưu", detail: "Hoàn thiện hồ sơ, đồng bộ NAP với website, cập nhật hình ảnh." },
      { step: "Quy trình review", detail: "Thiết lập cách thu hút đánh giá thật từ khách." },
      { step: "Đo lường", detail: "Theo dõi hiển thị địa phương và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Báo giá tùy ngành, hiện trạng hồ sơ và phạm vi tối ưu.",
    faqs: [
      {
        q: "Local SEO Đà Nẵng khác Hội An thế nào?",
        a: "Cùng phương pháp, nhưng tối ưu theo khu vực, mật độ cạnh tranh và đặc thù khách của Đà Nẵng.",
      },
      {
        q: "Ngành nào hợp nhất ở Đà Nẵng?",
        a: "Spa, nhà hàng, khách sạn/resort và tour — những ngành phụ thuộc nhiều vào tìm kiếm địa phương và đánh giá.",
      },
      {
        q: "Có kết hợp được với Naver cho khách Hàn không?",
        a: "Có — Google Maps phục vụ khách quốc tế nói chung, Naver phủ riêng khách Hàn; kết hợp tạo độ phủ toàn diện.",
      },
      {
        q: "Chi phí từ bao nhiêu?",
        a: "Từ 3.500.000đ/chiến dịch, tùy ngành và phạm vi tối ưu.",
      },
    ],
    related: [
      { label: "Local SEO Hội An", href: "/vi/google-maps-marketing/hoi-an", note: "Khu vực lân cận" },
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Kênh khách Hàn" },
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Chiến lược đánh giá" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Local SEO Đà Nẵng tối ưu Google Maps" },
    ],
    schema: { serviceType: "Local SEO Đà Nẵng", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── MAPS SPOKE — CHO TOUR ───────────────────────── */
  {
    path: "/vi/google-maps-marketing/cho-tour",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
      { label: "Google Maps cho tour", href: "/vi/google-maps-marketing/cho-tour" },
    ],
    primaryKeyword: "Google Maps cho tour",
    metaTitle: "Google Maps cho tour & trải nghiệm: tăng đặt chỗ | Công Thiên Agency",
    metaDescription:
      "Tối ưu Google Business Profile cho tour, cooking class và trải nghiệm tại Hội An – Đà Nẵng: hình ảnh, đánh giá từ khách thật và Local SEO để khách tìm thấy và đặt tour.",
    eyebrow: "Google Maps · Tour & trải nghiệm",
    h1: "Google Maps cho tour & trải nghiệm: nổi bật khi khách tìm hoạt động tại Hội An – Đà Nẵng",
    heroSub:
      "Khách du lịch tìm trải nghiệm trên Google Maps và chọn theo đánh giá. Tôi tối ưu hồ sơ và xây đánh giá thật để tour của bạn được chọn.",
    heroCta: "Nhận tư vấn Google Maps cho tour qua Zalo",
    intro:
      "Khách du lịch tìm “cooking class Hội An”, “tour Đà Nẵng” hay trải nghiệm địa phương trên Google Maps, rồi so sánh qua đánh giá và hình ảnh. Một hồ sơ tour đầy đủ và nhiều đánh giá thật giúp bạn tạo niềm tin và nổi bật ngay tại bước khách quyết định đặt chỗ.",
    sections: [
      {
        heading: "Vì sao tour cần hồ sơ Google Maps mạnh?",
        bullets: [
          "Khách tìm hoạt động và trải nghiệm theo khu vực đang ở.",
          "Đánh giá thật là yếu tố chốt mạnh với dịch vụ trải nghiệm.",
          "Hình ảnh lịch trình và khoảnh khắc thật tạo cảm hứng đặt tour.",
          "Vị trí điểm hẹn rõ ràng giúp khách yên tâm tham gia.",
        ],
      },
      {
        heading: "Tối ưu hồ sơ tour gồm những gì?",
        body:
          "Hoàn thiện Google Business Profile với danh mục trải nghiệm chính xác, hình ảnh hoạt động thật, mô tả lịch trình, điểm hẹn và bài đăng. Song song là quy trình mời khách để lại đánh giá thật sau khi kết thúc trải nghiệm — đúng chính sách Google.",
      },
      {
        heading: "Kết hợp website đặt tour và Naver cho khách Hàn",
        body:
          "Hồ sơ Maps mạnh hơn khi đi cùng website có lịch trình và đặt chỗ rõ ràng (như mô hình Ruong House). Với tour đón khách Hàn, nội dung Naver bổ trợ để phủ thêm kênh tìm kiếm của người Hàn.",
      },
    ],
    whoFor: [
      "Tour, cooking class, craft workshop tại Hội An – Đà Nẵng",
      "Trải nghiệm địa phương, half-day/full-day tour",
      "Dịch vụ tham quan, hoạt động ngoài trời",
      "Doanh nghiệp trải nghiệm mới cần xây đánh giá",
    ],
    process: [
      { step: "Audit hồ sơ", detail: "Rà soát hồ sơ Google Maps tour hiện tại." },
      { step: "Tối ưu", detail: "Hoàn thiện danh mục, ảnh hoạt động, lịch trình, điểm hẹn." },
      { step: "Quy trình review", detail: "Thiết lập cách thu hút đánh giá thật sau trải nghiệm." },
      { step: "Đo lường", detail: "Theo dõi hiển thị, đánh giá và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.500.000đ / chiến dịch",
    priceNote: "Báo giá tùy hiện trạng hồ sơ và phạm vi tối ưu.",
    proof: {
      ...PROOF_RUONG,
      text: "Ruong House — cooking class & craft workshop tại Hội An kèm hỗ trợ tạo Google Maps, ví dụ về hồ sơ trải nghiệm đồng bộ với website đặt chỗ.",
    },
    faqs: [
      {
        q: "Dịch vụ có mua đánh giá cho tour không?",
        a: "Không. Tôi tối ưu hồ sơ và xây quy trình thu hút đánh giá từ khách thật sau trải nghiệm, đúng chính sách Google.",
      },
      {
        q: "Tour mới chưa có đánh giá thì bắt đầu thế nào?",
        a: "Hồ sơ hoàn chỉnh với ảnh hoạt động thật và quy trình mời khách đánh giá ngay sau trải nghiệm để tích lũy đánh giá thật đầu tiên.",
      },
      {
        q: "Khách quốc tế có tìm tour trên Google Maps không?",
        a: "Có — nhiều khách quốc tế tìm hoạt động và trải nghiệm trên Google Maps; riêng khách Hàn nên kết hợp thêm Naver.",
      },
      {
        q: "Có cần website đặt tour không?",
        a: "Không bắt buộc, nhưng website có lịch trình và đặt chỗ giúp hồ sơ Maps mạnh hơn nhờ thông tin nhất quán.",
      },
    ],
    related: [
      { label: "Website cooking class Hội An", href: "/vi/thiet-ke-website/cooking-class-hoi-an", note: "Nền tảng đặt tour" },
      { label: "Naver cho tour", href: "/vi/naver-marketing/cho-tour", note: "Kênh khách Hàn" },
      { label: "Cách lên top Google Maps", href: "/vi/blog/cach-len-top-google-maps", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/cooking-class-tour.webp", alt: "Google Maps cho tour trải nghiệm Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Google Maps cho tour", offerMinPriceVnd: 3500000 },
  },

  /* ───────────────────────── SOCIAL SPOKE — XÁC MINH FANPAGE ───────────────────────── */
  {
    path: "/vi/social-marketing/xac-minh-fanpage",
    cluster: "social",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Social Marketing", href: "/vi/social-marketing" },
      { label: "Hỗ trợ xác minh Fanpage", href: "/vi/social-marketing/xac-minh-fanpage" },
    ],
    primaryKeyword: "hỗ trợ xác minh Fanpage",
    metaTitle: "Hỗ trợ xác minh Fanpage & Meta Verified | Công Thiên Agency",
    metaDescription:
      "Dịch vụ hỗ trợ xác minh Fanpage (Meta Verified Support): chuẩn bị và hoàn thiện hồ sơ để tăng khả năng đủ điều kiện. Kết quả phụ thuộc xét duyệt của Meta, không cam kết 100%.",
    eyebrow: "Social · Xác minh Fanpage",
    h1: "Hỗ trợ xác minh Fanpage (Meta Verified Support) cho doanh nghiệp",
    heroSub:
      "Chuẩn bị và hoàn thiện hồ sơ xác minh đúng cách để tăng khả năng đủ điều kiện. Kết quả cuối thuộc xét duyệt của Meta — tôi minh bạch về điều đó.",
    heroCta: "Nhận tư vấn xác minh Fanpage qua Zalo",
    intro:
      "Dấu xác minh giúp Fanpage tăng độ tin cậy và giảm rủi ro bị mạo danh — đặc biệt quan trọng với doanh nghiệp cạnh tranh bằng niềm tin. Dịch vụ này hỗ trợ bạn chuẩn bị và hoàn thiện hồ sơ để tăng khả năng đủ điều kiện. Quan trọng: quy trình xét duyệt hoàn toàn thuộc về Meta, nên đây là dịch vụ hỗ trợ chuẩn bị, không cam kết chắc chắn được duyệt.",
    sections: [
      {
        heading: "Vì sao nên xác minh Fanpage?",
        bullets: [
          "Tăng độ tin cậy hiển thị với khách, nhất là khách quốc tế.",
          "Giảm rủi ro bị mạo danh hoặc nhầm lẫn thương hiệu.",
          "Củng cố hình ảnh chuyên nghiệp trước khi khách booking.",
          "Một số quyền lợi bảo vệ và hỗ trợ tài khoản đi kèm Meta Verified.",
        ],
      },
      {
        heading: "Dịch vụ hỗ trợ những gì?",
        body:
          "Tôi rà soát và hoàn thiện hồ sơ Fanpage, đảm bảo thông tin nhất quán với website và các kênh, chuẩn bị giấy tờ theo yêu cầu và hướng dẫn quy trình đăng ký xác minh của Meta. Mục tiêu là đưa hồ sơ về trạng thái tốt nhất để tăng khả năng đủ điều kiện.",
      },
      {
        heading: "Minh bạch về kết quả",
        body:
          "Tôi không hứa “bao đậu 100%”. Quyết định duyệt xác minh thuộc về Meta dựa trên điều kiện và chính sách của họ. Cam kết của tôi là chuẩn bị hồ sơ đúng, an toàn cho tài khoản và nói rõ kỳ vọng thực tế.",
      },
    ],
    whoFor: [
      "Doanh nghiệp muốn tăng uy tín Fanpage",
      "Thương hiệu cạnh tranh bằng niềm tin với khách quốc tế",
      "Fanpage đã hoạt động ổn định, muốn xác minh",
      "Doanh nghiệp lo ngại bị mạo danh thương hiệu",
    ],
    process: [
      { step: "Đánh giá", detail: "Rà soát hồ sơ Fanpage và mức độ sẵn sàng xác minh." },
      { step: "Hoàn thiện", detail: "Tối ưu thông tin, nhận diện và chuẩn bị giấy tờ." },
      { step: "Hỗ trợ đăng ký", detail: "Hướng dẫn quy trình đăng ký xác minh của Meta." },
      { step: "Theo dõi", detail: "Đồng hành xử lý phản hồi và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 3.000.000đ / page",
    priceNote: "Đây là phí hỗ trợ chuẩn bị hồ sơ. Kết quả xác minh phụ thuộc xét duyệt của Meta, không cam kết 100%.",
    faqs: [
      {
        q: "Dịch vụ có đảm bảo được duyệt tick xanh 100% không?",
        a: "Không. Đây là dịch vụ hỗ trợ chuẩn bị và hoàn thiện hồ sơ; kết quả cuối phụ thuộc điều kiện và xét duyệt của Meta.",
      },
      {
        q: "Fanpage mới có xác minh được không?",
        a: "Có thể, nếu đáp ứng điều kiện của Meta về thông tin và tính xác thực — không chỉ phụ thuộc tuổi trang. Tôi giúp đưa hồ sơ về trạng thái tốt nhất.",
      },
      {
        q: "Cần chuẩn bị giấy tờ gì?",
        a: "Thông tin Fanpage đầy đủ, nhất quán với thương hiệu và giấy tờ doanh nghiệp theo yêu cầu của Meta tại thời điểm đăng ký.",
      },
      {
        q: "Chi phí bao nhiêu?",
        a: "Từ 3.000.000đ/page cho phần hỗ trợ chuẩn bị hồ sơ; phí đăng ký Meta Verified (nếu có) theo quy định của Meta.",
      },
    ],
    related: [
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Trang dịch vụ tổng quan" },
      { label: "Meta Verified là gì", href: "/vi/blog/meta-verified-la-gi", note: "Blog" },
      { label: "Fanpage mới có lên tick xanh được không", href: "/vi/blog/fanpage-moi-co-len-tick-xanh-duoc-khong", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-social.webp", alt: "Hỗ trợ xác minh Fanpage Meta Verified" },
    ],
    schema: { serviceType: "Hỗ trợ xác minh Fanpage", offerMinPriceVnd: 3000000 },
  },

  /* ───────────────────────── SOCIAL SPOKE — TĂNG TRƯỞNG KÊNH ───────────────────────── */
  {
    path: "/vi/social-marketing/tang-truong-kenh",
    cluster: "social",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Social Marketing", href: "/vi/social-marketing" },
      { label: "Tăng trưởng kênh social", href: "/vi/social-marketing/tang-truong-kenh" },
    ],
    primaryKeyword: "tăng trưởng kênh social",
    metaTitle: "Social Growth Package: tăng trưởng kênh bền vững | Công Thiên Agency",
    metaDescription:
      "Social Growth Package giúp khởi động và tăng trưởng kênh Facebook, Instagram, TikTok kết hợp nội dung thật để xây nhận diện thương hiệu bền vững, tránh chỉ số ảo.",
    eyebrow: "Social · Tăng trưởng kênh",
    h1: "Social Growth Package — tăng trưởng kênh social kết hợp nội dung thật",
    heroSub:
      "Tăng trưởng kênh chỉ có giá trị khi đi cùng nội dung thật. Tôi giúp khởi động và phát triển kênh để xây nhận diện thương hiệu, không chạy theo con số ảo.",
    heroCta: "Nhận tư vấn tăng trưởng kênh qua Zalo",
    intro:
      "Một kênh social mới thường khó tạo niềm tin khi còn trống trải. Social Growth Package hỗ trợ khởi động chỉ số ban đầu và phát triển kênh Facebook, Instagram, TikTok — nhưng luôn kết hợp nội dung thật, vì follower ảo không tạo chuyển đổi và tiềm ẩn rủi ro.",
    sections: [
      {
        heading: "Tăng trưởng kênh để làm gì?",
        bullets: [
          "Giúp kênh mới không trông trống trải khi khách ghé kiểm tra.",
          "Tạo nền tảng nhận diện để chạy nội dung và quảng bá hiệu quả hơn.",
          "Củng cố social proof khi đi cùng tương tác thật.",
          "Chuẩn bị kênh sẵn sàng cho các chiến dịch tiếp theo.",
        ],
      },
      {
        heading: "Cách tiếp cận bền vững",
        body:
          "Tôi định hướng tăng trưởng kết hợp nội dung thật và quảng bá đúng tệp, thay vì chỉ tăng con số. Mục tiêu là một kênh đáng tin giúp khách quyết định booking — không phải lượng follower trông đẹp nhưng không tương tác.",
      },
      {
        heading: "Kết hợp Fanpage và đa kênh",
        body:
          "Tăng trưởng kênh hiệu quả nhất khi đi cùng Fanpage chỉn chu, nội dung đều đặn và sự nhất quán với website, Google Maps. Tôi có thể triển khai đồng bộ để mọi điểm chạm đều củng cố niềm tin của khách.",
      },
    ],
    whoFor: [
      "Doanh nghiệp mới mở kênh social",
      "Spa, nhà hàng, tour cần nền tảng nhận diện",
      "Thương hiệu chuẩn bị chạy nội dung và quảng bá",
      "Kênh cần khởi động chỉ số ban đầu một cách an toàn",
    ],
    process: [
      { step: "Đánh giá", detail: "Rà soát hiện trạng kênh và mục tiêu tăng trưởng." },
      { step: "Kế hoạch", detail: "Định hướng nội dung và mức khởi động phù hợp." },
      { step: "Triển khai", detail: "Tăng trưởng kết hợp nội dung và quảng bá đúng tệp." },
      { step: "Theo dõi", detail: "Đo lường tương tác thật và đề xuất tiếp theo." },
    ],
    priceFrom: "Từ 100.000đ / 1.000 followers",
    priceNote: "Nên kết hợp nội dung thật để bền vững; báo giá cuối tùy nền tảng và mục tiêu.",
    faqs: [
      {
        q: "Đây có phải “buff follow” không?",
        a: "Nhiều người gọi vậy, nhưng tôi định hướng tăng trưởng kèm nội dung để xây nhận diện thương hiệu thật, tránh chỉ số ảo không tạo chuyển đổi.",
      },
      {
        q: "Follower tăng có giúp bán hàng không?",
        a: "Chỉ khi đi cùng nội dung thật và tương tác thật. Con số đơn thuần không tạo booking, nên tôi luôn kết hợp nội dung.",
      },
      {
        q: "Áp dụng cho nền tảng nào?",
        a: "Facebook, Instagram và TikTok, tùy nơi tệp khách của bạn hoạt động nhiều nhất.",
      },
      {
        q: "Chi phí bắt đầu từ bao nhiêu?",
        a: "Từ 100.000đ/1.000 followers; báo giá cuối tùy nền tảng, mục tiêu và nội dung đi kèm.",
      },
    ],
    related: [
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Trang dịch vụ tổng quan" },
      { label: "Buff follow có nên dùng không", href: "/vi/blog/buff-follow-co-nen-dung-khong", note: "Blog" },
      { label: "Social proof là gì", href: "/vi/blog/social-proof-la-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/growth.webp", alt: "Social Growth Package tăng trưởng kênh social" },
    ],
    schema: { serviceType: "Social Growth Package", offerMinPriceVnd: 100000 },
  },

  /* ───────────────────────── SOCIAL SPOKE — KHÔI PHỤC TÀI KHOẢN FACEBOOK ───────────────────────── */
  {
    path: "/vi/social-marketing/khoi-phuc-tai-khoan-facebook",
    cluster: "social",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Social Marketing", href: "/vi/social-marketing" },
      { label: "Hỗ trợ khôi phục tài khoản Facebook", href: "/vi/social-marketing/khoi-phuc-tai-khoan-facebook" },
    ],
    primaryKeyword: "khôi phục tài khoản Facebook",
    metaTitle: "Hỗ trợ khôi phục tài khoản & Fanpage Facebook | Công Thiên Agency",
    metaDescription:
      "Hỗ trợ khôi phục tài khoản hoặc Fanpage Facebook bị khóa/hạn chế: chuẩn bị hồ sơ và quy trình kháng nghị. Kết quả phụ thuộc chính sách và quyết định của Meta.",
    eyebrow: "Social · Khôi phục tài khoản",
    h1: "Hỗ trợ khôi phục tài khoản & Fanpage Facebook bị khóa",
    heroSub:
      "Khi tài khoản hoặc Fanpage gặp sự cố, tôi hỗ trợ chuẩn bị hồ sơ và quy trình kháng nghị đúng cách. Kết quả cuối phụ thuộc quyết định của Meta.",
    heroCta: "Nhận tư vấn khôi phục tài khoản qua Zalo",
    intro:
      "Mất quyền truy cập tài khoản hoặc Fanpage có thể gây gián đoạn lớn cho doanh nghiệp, nhất là khi đó là kênh tiếp cận khách chính. Dịch vụ này hỗ trợ bạn chuẩn bị hồ sơ và đi đúng quy trình kháng nghị của Meta để tăng khả năng khôi phục. Quan trọng: kết quả cuối phụ thuộc chính sách và quyết định của Meta.",
    sections: [
      {
        heading: "Các trường hợp thường gặp",
        bullets: [
          "Fanpage bị hạn chế hoặc vô hiệu hóa.",
          "Tài khoản bị khóa do nghi ngờ vi phạm chính sách.",
          "Mất quyền quản trị Fanpage sau sự cố.",
          "Tài khoản bị mạo danh hoặc chiếm quyền.",
        ],
      },
      {
        heading: "Dịch vụ hỗ trợ những gì?",
        body:
          "Tôi giúp xác định tình trạng, chuẩn bị thông tin và giấy tờ cần thiết, rồi đi đúng quy trình kháng nghị chính thức của Meta. Việc làm đúng quy trình ngay từ đầu giúp tăng khả năng được xem xét khôi phục.",
      },
      {
        heading: "Minh bạch về kết quả",
        body:
          "Tôi không cam kết chắc chắn lấy lại được, vì quyết định cuối thuộc về Meta dựa trên chính sách của họ. Cam kết của tôi là hỗ trợ đúng quy trình, an toàn, và nói rõ kỳ vọng thực tế ngay từ đầu.",
      },
    ],
    whoFor: [
      "Doanh nghiệp bị khóa Fanpage đang dùng để tiếp cận khách",
      "Chủ tài khoản bị hạn chế hoặc vô hiệu hóa",
      "Thương hiệu mất quyền quản trị sau sự cố",
      "Doanh nghiệp bị mạo danh trên Facebook",
    ],
    process: [
      { step: "Đánh giá", detail: "Xác định tình trạng và nguyên nhân khóa/hạn chế." },
      { step: "Chuẩn bị hồ sơ", detail: "Tập hợp thông tin và giấy tờ cần cho kháng nghị." },
      { step: "Kháng nghị", detail: "Đi đúng quy trình kháng nghị chính thức của Meta." },
      { step: "Theo dõi", detail: "Đồng hành xử lý phản hồi và đề xuất bước tiếp theo." },
    ],
    priceFrom: "Báo giá theo từng trường hợp",
    priceNote: "Phí hỗ trợ tùy mức độ phức tạp. Kết quả khôi phục phụ thuộc chính sách và quyết định của Meta.",
    faqs: [
      {
        q: "Có chắc lấy lại được tài khoản không?",
        a: "Không thể cam kết chắc chắn. Tôi hỗ trợ chuẩn bị hồ sơ và đi đúng quy trình kháng nghị; kết quả cuối phụ thuộc quyết định của Meta.",
      },
      {
        q: "Mất bao lâu để xử lý?",
        a: "Tùy trường hợp và tốc độ phản hồi của Meta. Việc làm đúng quy trình ngay từ đầu giúp rút ngắn thời gian xem xét.",
      },
      {
        q: "Cần chuẩn bị gì?",
        a: "Thông tin tài khoản/Fanpage, bằng chứng quyền sở hữu và giấy tờ liên quan theo yêu cầu của Meta.",
      },
      {
        q: "Chi phí thế nào?",
        a: "Báo giá theo từng trường hợp tùy mức độ phức tạp; tôi trao đổi rõ trước khi bắt đầu.",
      },
    ],
    related: [
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Trang dịch vụ tổng quan" },
      { label: "Hỗ trợ xác minh Fanpage", href: "/vi/social-marketing/xac-minh-fanpage", note: "Dịch vụ cùng nhóm" },
      { label: "Cách xây Fanpage chuyên nghiệp", href: "/vi/blog/cach-xay-fanpage-chuyen-nghiep", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-social.webp", alt: "Hỗ trợ khôi phục tài khoản Facebook" },
    ],
    schema: { serviceType: "Hỗ trợ khôi phục tài khoản Facebook" },
  },

  /* ───────────────────────── QR / ACTIVATION PILLAR ───────────────────────── */
  {
    path: "/vi/quet-ma-qr",
    cluster: "qr",
    isPillar: true,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ quét mã QR", href: "/vi/quet-ma-qr" },
    ],
    primaryKeyword: "dịch vụ quét mã QR theo chiến dịch KPI",
    metaTitle: "Dịch vụ quét mã QR & tải app theo KPI cho agency, nhãn hàng | Công Thiên Agency",
    metaDescription:
      "Nhận triển khai chiến dịch quét mã QR, tải app và mở tài khoản theo KPI cho agency và nhãn hàng tại Hội An – Đà Nẵng và toàn quốc. Đội cộng tác viên thật, người dùng thật, báo cáo minh bạch.",
    eyebrow: "Dịch vụ · Quét mã QR",
    h1: "Dịch vụ quét mã QR & tải app theo KPI cho agency và nhãn hàng",
    heroSub:
      "Bạn có một chiến dịch cần đủ số lượt quét mã QR, tải app hoặc mở tài khoản trong thời gian ngắn? Tôi nhận triển khai trọn gói theo KPI bằng đội cộng tác viên thật trên khắp Hội An – Đà Nẵng và toàn quốc.",
    heroCta: "Gửi yêu cầu chiến dịch qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Các nhãn hàng như Heineken, ví điện tử (Momo, ZaloPay) và ngân hàng số (Cake, VPBank, MB Bank…) thường xuyên chạy chiến dịch tiếp thị bằng mã QR: quét tại quán, tải app, định danh tài khoản hay nhận voucher. Khi agency được giao KPI kiểu “10.000 lượt quét mã”, việc khó nhất là gom đủ người thật làm đúng, đủ và đúng hạn. Đó là phần tôi nhận: điều phối mạng lưới cộng tác viên để chạy chiến dịch quét mã QR và tải app đạt KPI, hợp lệ với điều khoản của từng nền tảng.",
    sections: [
      {
        heading: "Tôi nhận loại chiến dịch quét mã nào?",
        bullets: [
          "Chiến dịch quét mã QR tại điểm bán: quán ăn, nhà hàng, sự kiện, hội chợ (kiểu activation của Heineken, bia, FMCG).",
          "Tải app & định danh tài khoản: ví điện tử, ngân hàng số, app thương mại điện tử theo lượt cài đặt thật.",
          "Chiến dịch affiliate / referral qua nền tảng trung gian (AccessTrade và tương tự) bằng link – mã QR hợp lệ.",
          "Khảo sát, xem quảng cáo, tương tác mini app Zalo để tích điểm – đổi voucher.",
        ],
      },
      {
        heading: "Vì sao agency nên thuê ngoài phần thực thi?",
        body:
          "KPI số lượt quét lớn cần mạng lưới người thật trải rộng nhiều khu vực — thứ mà một team in-house khó tự gom trong vài ngày. Khi giao cho tôi, bạn chỉ cần đưa brief, mã/link và KPI; tôi lo phần tuyển, điều phối, theo dõi tiến độ và tổng hợp số liệu để bạn báo cáo lại cho nhãn hàng.",
      },
      {
        heading: "Cam kết người thật & minh bạch số liệu",
        body:
          "Tôi chạy bằng cộng tác viên và người dùng thật, mỗi tài khoản do chính chủ sở hữu, tuân thủ điều khoản của nền tảng đang chạy. Thu nhập và nghiệm thu tính theo lượt hoàn thành hợp lệ thực tế — không bơm số ảo, vì số ảo dễ bị nền tảng huỷ và làm hỏng uy tín cả hai bên.",
      },
    ],
    deliverables: {
      title: "Khi nhận một chiến dịch, tôi bàn giao",
      items: [
        "Kế hoạch triển khai theo KPI và mốc thời gian rõ ràng",
        "Mạng lưới cộng tác viên thật theo khu vực bạn cần",
        "Theo dõi tiến độ lượt quét / lượt cài đặt theo ngày",
        "Báo cáo số liệu nghiệm thu minh bạch cuối chiến dịch",
        "Đầu mối liên hệ duy nhất xử lý phát sinh trong suốt chiến dịch",
      ],
    },
    whoFor: [
      "Agency activation / trade marketing",
      "Nhãn hàng FMCG, bia, đồ uống",
      "Ví điện tử, ngân hàng số, fintech",
      "Nền tảng affiliate cần đẩy KPI cài đặt",
    ],
    process: [
      { step: "Nhận brief", detail: "Bạn gửi mục tiêu, KPI, mã/link và khu vực cần chạy." },
      { step: "Lên kế hoạch", detail: "Tôi chốt số lượng, mốc thời gian và cách nghiệm thu." },
      { step: "Triển khai", detail: "Điều phối cộng tác viên chạy lượt quét / tải app thật." },
      { step: "Báo cáo", detail: "Tổng hợp số liệu hợp lệ và bàn giao cho bạn." },
    ],
    priceFrom: "Báo giá theo KPI từng chiến dịch",
    priceNote:
      "Chi phí tính theo loại chiến dịch, số lượt KPI, khu vực và thời hạn. Trao đổi brief để nhận báo giá rõ ràng trước khi bắt đầu.",
    faqs: [
      {
        q: "Anh có chạy được chiến dịch toàn quốc không?",
        a: "Có. Tôi điều phối cộng tác viên theo khu vực; tập trung mạnh ở Hội An – Đà Nẵng và mở rộng các tỉnh thành khác tùy KPI.",
      },
      {
        q: "Làm sao đảm bảo là người thật, không phải số ảo?",
        a: "Mỗi lượt là người dùng thật với tài khoản chính chủ, nghiệm thu theo lượt hoàn thành hợp lệ. Tôi không bơm số ảo vì nền tảng sẽ huỷ và cả hai bên đều thiệt.",
      },
      {
        q: "Chi phí và thanh toán thế nào?",
        a: "Báo giá theo KPI từng chiến dịch. Thường chốt số lượng, đơn giá mỗi lượt và mốc nghiệm thu trước khi chạy.",
      },
      {
        q: "Agency cần chuẩn bị gì?",
        a: "Brief chiến dịch, mã QR hoặc link hợp lệ từ nhãn hàng/nền tảng, KPI và khu vực mong muốn. Phần còn lại tôi lo.",
      },
    ],
    related: [
      { label: "Tuyển cộng tác viên quét mã QR", href: "/vi/quet-ma-qr/tuyen-cong-tac-vien", note: "Tuyển dụng" },
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Dịch vụ liên quan" },
      { label: "Liên hệ", href: "/vi/lien-he", note: "Gửi brief chiến dịch" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/og/og-default.jpg", alt: "Dịch vụ quét mã QR theo KPI cho agency" },
    ],
    schema: { serviceType: "Dịch vụ triển khai chiến dịch quét mã QR theo KPI" },
  },

  /* ───────────────────────── QR SPOKE · TUYỂN CTV ───────────────────────── */
  {
    path: "/vi/quet-ma-qr/tuyen-cong-tac-vien",
    cluster: "qr",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ quét mã QR", href: "/vi/quet-ma-qr" },
      { label: "Tuyển cộng tác viên", href: "/vi/quet-ma-qr/tuyen-cong-tac-vien" },
    ],
    primaryKeyword: "tuyển cộng tác viên quét mã QR tải app kiếm tiền",
    metaTitle: "Tuyển cộng tác viên quét mã QR – tải app kiếm tiền online | Công Thiên Agency",
    metaDescription:
      "Tuyển cộng tác viên quét mã QR, tải app và mời bạn bè nhận thưởng theo lượt. Làm online tại nhà, không cọc, thu nhập theo hiệu suất. Liên hệ Zalo 0934.868.001.",
    eyebrow: "Tuyển dụng · Quét mã QR",
    h1: "Tuyển cộng tác viên quét mã QR – tải app kiếm tiền online",
    heroSub:
      "Bạn rảnh và muốn kiếm thêm thu nhập từ điện thoại? Tôi đang tuyển cộng tác viên tham gia các chiến dịch quét mã QR, tải app và giới thiệu nhận thưởng theo từng lượt hoàn thành.",
    heroCta: "Đăng ký làm CTV qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Tôi nhận chiến dịch quét mã QR và tải app từ các nhãn hàng, ví điện tử, ngân hàng số và nền tảng affiliate, rồi chia việc cho mạng lưới cộng tác viên. Công việc đơn giản, làm online bằng điện thoại, phù hợp sinh viên, mẹ bỉm, người làm tự do muốn kiếm thêm lúc rảnh. Thu nhập tính theo số lượt bạn hoàn thành hợp lệ.",
    sections: [
      {
        heading: "Công việc cụ thể là gì?",
        bullets: [
          "Quét mã QR của chiến dịch và làm theo hướng dẫn (xem quảng cáo, làm khảo sát, nhận voucher).",
          "Tải app ví điện tử / ngân hàng số rồi định danh tài khoản chính chủ của bạn.",
          "Lấy mã QR giới thiệu cá nhân để mời bạn bè, người thân cùng tham gia.",
          "Mỗi lượt hoàn thành hợp lệ được trả thưởng theo đơn giá từng chiến dịch.",
        ],
      },
      {
        heading: "Quyền lợi cộng tác viên",
        bullets: [
          "Làm online tại nhà, chủ động thời gian, chỉ cần điện thoại.",
          "Không thu phí, không yêu cầu đặt cọc trước.",
          "Thanh toán theo lượt hoàn thành, đối soát rõ ràng.",
          "Có thêm thưởng khi mời được cộng tác viên mới tham gia.",
        ],
      },
      {
        heading: "Làm việc minh bạch, đúng quy định",
        body:
          "Bạn chỉ dùng tài khoản chính chủ của mình và làm đúng hướng dẫn từng chiến dịch — tuyệt đối không mượn giấy tờ người khác hay tạo tài khoản giả, vì các nền tảng sẽ huỷ lượt và không trả thưởng. Thu nhập phụ thuộc số lượt bạn làm và số chiến dịch đang chạy, không phải con số cố định cam kết.",
      },
    ],
    whoFor: [
      "Sinh viên muốn kiếm thêm",
      "Mẹ bỉm sữa ở nhà",
      "Người làm tự do, freelancer",
      "Ai có thời gian rảnh và điện thoại",
    ],
    process: [
      { step: "Đăng ký", detail: "Nhắn Zalo 0934.868.001 để lại tên và khu vực của bạn." },
      { step: "Nhận hướng dẫn", detail: "Tôi gửi chiến dịch đang chạy và cách làm chi tiết." },
      { step: "Làm nhiệm vụ", detail: "Quét mã, tải app hoặc giới thiệu theo hướng dẫn." },
      { step: "Nhận thưởng", detail: "Đối soát số lượt hợp lệ và thanh toán cho bạn." },
    ],
    priceNote:
      "Thu nhập tính theo số lượt hoàn thành hợp lệ và số chiến dịch đang chạy — không phải mức cố định cam kết. Không thu phí, không đặt cọc.",
    faqs: [
      {
        q: "Có cần đặt cọc hay đóng phí không?",
        a: "Không. Tôi không thu bất kỳ khoản phí hay tiền cọc nào. Nếu ai đó yêu cầu bạn nộp tiền để nhận việc, đó là dấu hiệu lừa đảo.",
      },
      {
        q: "Một lượt được trả bao nhiêu?",
        a: "Tùy chiến dịch. Các chương trình mời người dùng mới thường dao động 20.000đ – 100.000đ mỗi lượt thành công; chiến dịch khác có đơn giá riêng, tôi báo trước khi bạn nhận.",
      },
      {
        q: "Một tháng kiếm được bao nhiêu?",
        a: "Không có con số cố định. Thu nhập phụ thuộc số lượt bạn hoàn thành và số chiến dịch đang chạy. Tôi không cam kết mức thu nhập để tránh hứa hẹn sai.",
      },
      {
        q: "Cần chuẩn bị gì để bắt đầu?",
        a: "Một điện thoại smartphone, tài khoản chính chủ (số điện thoại, ví/ngân hàng nếu chiến dịch yêu cầu) và thời gian rảnh. Nhắn Zalo để bắt đầu.",
      },
    ],
    related: [
      { label: "Dịch vụ quét mã QR theo KPI", href: "/vi/quet-ma-qr", note: "Trang dịch vụ" },
      { label: "Liên hệ", href: "/vi/lien-he", note: "Đăng ký nhanh" },
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Dịch vụ liên quan" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/og/og-default.jpg", alt: "Tuyển cộng tác viên quét mã QR tải app kiếm tiền" },
    ],
    schema: { serviceType: "Tuyển cộng tác viên quét mã QR" },
  },

  /* ───────────────────────── QR SPOKE · ACTIVATION SỰ KIỆN ───────────────────────── */
  {
    path: "/vi/quet-ma-qr/cho-su-kien-activation",
    cluster: "qr",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ quét mã QR", href: "/vi/quet-ma-qr" },
      { label: "Quét mã QR cho sự kiện & activation", href: "/vi/quet-ma-qr/cho-su-kien-activation" },
    ],
    primaryKeyword: "quét mã QR cho sự kiện activation",
    metaTitle: "Quét mã QR cho sự kiện & activation – đủ KPI lượt quét | Công Thiên Agency",
    metaDescription:
      "Triển khai quét mã QR cho sự kiện, activation, sampling và hội chợ: gom đủ lượt quét, tải app, nhận voucher bằng đội cộng tác viên thật tại Hội An – Đà Nẵng và toàn quốc.",
    eyebrow: "Dịch vụ · Quét mã QR",
    h1: "Quét mã QR cho sự kiện & activation: đủ lượt quét, đúng tiến độ",
    heroSub:
      "Booth sampling, hội chợ, lễ hội hay activation của nhãn hàng đều cần đủ lượt quét mã QR trong khung giờ ngắn. Tôi điều phối đội cộng tác viên thật để chiến dịch của bạn đạt KPI ngay tại điểm tổ chức.",
    heroCta: "Gửi brief sự kiện qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Trong một buổi activation, KPI thường gắn với số lượt quét mã QR, tải app hoặc nhận voucher tại booth. Nhưng lượng khách tự nhiên ghé booth thường không đủ, nhất là ở các sự kiện đông đối thủ hoặc địa điểm xa trung tâm. Tôi nhận phần thực thi: đưa cộng tác viên thật đến đúng địa điểm, đúng khung giờ để gom đủ lượt quét hợp lệ, giúp nhãn hàng và agency yên tâm về con số báo cáo cuối ngày.",
    sections: [
      {
        heading: "Tôi hỗ trợ những loại sự kiện nào?",
        bullets: [
          "Booth sampling FMCG, bia, đồ uống tại siêu thị, hội chợ, lễ hội.",
          "Activation ra mắt sản phẩm, roadshow, sự kiện thương hiệu.",
          "Gian hàng ví điện tử, ngân hàng số cần lượt tải app & định danh tại chỗ.",
          "Mini game quét QR đổi quà, tích điểm trên mini app Zalo.",
        ],
      },
      {
        heading: "Vì sao cần đội thực thi tại sự kiện?",
        body:
          "Sự kiện chỉ diễn ra trong vài giờ hoặc vài ngày — không có cơ hội làm lại. Nếu lượt quét không đủ, KPI của agency với nhãn hàng bị ảnh hưởng trực tiếp. Đội cộng tác viên thật giúp giữ nhịp lượt quét đều, tránh tình trạng booth vắng ở khung giờ thấp điểm và đảm bảo con số cuối ngày đạt mục tiêu.",
      },
      {
        heading: "Người thật, lượt hợp lệ, báo cáo rõ ràng",
        body:
          "Mỗi lượt quét là người thật với tài khoản chính chủ, làm đúng kịch bản của nhãn hàng và đúng điều khoản nền tảng. Tôi tổng hợp số lượt theo khung giờ để bạn có dữ liệu báo cáo minh bạch — không bơm số ảo vì số ảo dễ bị nền tảng loại và làm hỏng uy tín chiến dịch.",
      },
    ],
    deliverables: {
      title: "Khi nhận một sự kiện, tôi bàn giao",
      items: [
        "Kế hoạch nhân sự theo khung giờ và KPI từng ca",
        "Đội cộng tác viên thật có mặt đúng địa điểm, đúng giờ",
        "Theo dõi lượt quét / tải app theo thời gian thực trong ngày",
        "Báo cáo tổng hợp số liệu hợp lệ sau sự kiện",
        "Một đầu mối xử lý phát sinh xuyên suốt sự kiện",
      ],
    },
    whoFor: [
      "Agency activation / event / trade marketing",
      "Nhãn hàng FMCG, bia, đồ uống chạy booth",
      "Ví điện tử, ngân hàng số cần lượt tải app tại chỗ",
      "Đơn vị tổ chức hội chợ, lễ hội, roadshow",
    ],
    process: [
      { step: "Nhận brief", detail: "Bạn gửi địa điểm, thời gian, KPI và kịch bản tại booth." },
      { step: "Lên ca", detail: "Tôi phân bổ cộng tác viên theo khung giờ và mục tiêu mỗi ca." },
      { step: "Chạy sự kiện", detail: "Đội có mặt tại chỗ, gom lượt quét đều theo tiến độ." },
      { step: "Báo cáo", detail: "Tổng hợp số liệu hợp lệ và bàn giao cuối sự kiện." },
    ],
    priceFrom: "Báo giá theo sự kiện & KPI",
    priceNote:
      "Chi phí tính theo địa điểm, số lượt KPI, số ca và thời lượng sự kiện. Gửi brief để nhận báo giá rõ ràng trước khi chốt.",
    faqs: [
      {
        q: "Sự kiện ở tỉnh khác có chạy được không?",
        a: "Có. Tôi mạnh nhất ở Hội An – Đà Nẵng và điều phối được cộng tác viên ở nhiều tỉnh thành tùy quy mô và thời gian báo trước.",
      },
      {
        q: "Cần báo trước bao lâu?",
        a: "Càng sớm càng tốt để bố trí nhân sự. Với sự kiện lớn nên báo trước vài ngày đến một tuần để đảm bảo đủ người đúng khung giờ.",
      },
      {
        q: "Làm sao biết lượt quét là thật?",
        a: "Mỗi lượt là người thật với tài khoản chính chủ, làm đúng kịch bản. Tôi đối soát theo lượt hợp lệ thực tế, không tính số ảo.",
      },
      {
        q: "Có kèm nhân sự đứng booth không?",
        a: "Tùy brief. Tôi tập trung phần gom lượt quét/tải app; nếu cần PG/PB đứng booth có thể trao đổi để phối hợp thêm.",
      },
    ],
    related: [
      { label: "Dịch vụ quét mã QR theo KPI", href: "/vi/quet-ma-qr", note: "Trang dịch vụ chính" },
      { label: "Quét mã QR & tải app theo KPI", href: "/vi/quet-ma-qr/tai-app-theo-kpi", note: "Dịch vụ liên quan" },
      { label: "Liên hệ", href: "/vi/lien-he", note: "Gửi brief sự kiện" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/qr-activation.webp", alt: "Quét mã QR tại booth activation sự kiện" },
      { slot: "inline", suggestion: "/images/services/qr-event-booth.webp", alt: "Cộng tác viên gom lượt quét mã QR tại sự kiện" },
    ],
    schema: { serviceType: "Triển khai quét mã QR cho sự kiện và activation" },
  },

  /* ───────────────────────── QR SPOKE · TẢI APP THEO KPI ───────────────────────── */
  {
    path: "/vi/quet-ma-qr/tai-app-theo-kpi",
    cluster: "qr",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ quét mã QR", href: "/vi/quet-ma-qr" },
      { label: "Quét mã QR & tải app theo KPI", href: "/vi/quet-ma-qr/tai-app-theo-kpi" },
    ],
    primaryKeyword: "dịch vụ tải app theo KPI cho nhãn hàng",
    metaTitle: "Dịch vụ tải app & mở tài khoản theo KPI cho fintech, nhãn hàng | Công Thiên Agency",
    metaDescription:
      "Đẩy lượt tải app, định danh tài khoản và referral theo KPI cho ví điện tử, ngân hàng số và nền tảng affiliate. Người dùng thật, tài khoản chính chủ, nghiệm thu minh bạch.",
    eyebrow: "Dịch vụ · Quét mã QR",
    h1: "Dịch vụ tải app & mở tài khoản theo KPI cho ví, ngân hàng số, affiliate",
    heroSub:
      "Bạn cần đẩy nhanh số lượt cài đặt app, định danh tài khoản hay referral hợp lệ? Tôi nhận triển khai theo KPI bằng người dùng thật, tài khoản chính chủ, đúng điều khoản nền tảng.",
    heroCta: "Gửi yêu cầu KPI qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Ví điện tử (Momo, ZaloPay), ngân hàng số (Cake, VPBank NEO, MB Bank…) và các nền tảng affiliate (AccessTrade và tương tự) thường đặt mục tiêu theo lượt tải app, định danh eKYC hoặc referral thành công. Khi KPI lớn và thời gian gấp, việc gom đủ người dùng thật làm đúng quy trình là phần khó nhất. Đó là phần tôi nhận: điều phối mạng lưới cộng tác viên để đạt số lượt cài đặt và mở tài khoản hợp lệ, đúng chính sách của từng app.",
    sections: [
      {
        heading: "Tôi nhận loại KPI nào?",
        bullets: [
          "Lượt tải & mở app ví điện tử, ngân hàng số theo cài đặt thật.",
          "Định danh tài khoản (eKYC) bằng giấy tờ chính chủ của cộng tác viên.",
          "Referral / giới thiệu người dùng mới qua link – mã QR hợp lệ.",
          "Chiến dịch affiliate qua nền tảng trung gian theo lượt chuyển đổi.",
        ],
      },
      {
        heading: "Vì sao nên thuê ngoài phần thực thi KPI?",
        body:
          "KPI cài đặt lớn cần mạng lưới người dùng thật trải rộng, mỗi người một thiết bị và tài khoản chính chủ. Team in-house khó gom đủ trong thời gian ngắn. Khi giao cho tôi, bạn đưa app, link/mã và KPI; tôi lo phần tuyển, điều phối, theo dõi và tổng hợp số liệu nghiệm thu.",
      },
      {
        heading: "Tài khoản chính chủ, đúng chính sách app",
        body:
          "Mỗi lượt cài đặt và định danh đều dùng giấy tờ và tài khoản chính chủ của cộng tác viên, làm đúng quy trình của app. Tôi không tạo tài khoản giả hay mượn giấy tờ vì các nền tảng fintech có hệ thống chống gian lận chặt chẽ — lượt gian lận sẽ bị huỷ và ảnh hưởng uy tín cả hai bên. Nghiệm thu tính theo lượt hợp lệ thực tế.",
      },
    ],
    deliverables: {
      title: "Khi nhận một chiến dịch KPI, tôi bàn giao",
      items: [
        "Kế hoạch theo KPI và mốc thời gian rõ ràng",
        "Mạng lưới người dùng thật, tài khoản chính chủ theo khu vực",
        "Theo dõi lượt cài đặt / định danh theo ngày",
        "Báo cáo số liệu nghiệm thu minh bạch",
        "Một đầu mối xử lý phát sinh xuyên suốt chiến dịch",
      ],
    },
    whoFor: [
      "Ví điện tử, ngân hàng số, fintech",
      "Agency phụ trách growth / user acquisition",
      "Nền tảng affiliate cần đẩy KPI cài đặt",
      "Nhãn hàng có app riêng cần tăng lượt tải",
    ],
    process: [
      { step: "Nhận brief", detail: "Bạn gửi app, link/mã, KPI và yêu cầu định danh nếu có." },
      { step: "Lên kế hoạch", detail: "Tôi chốt số lượng, mốc thời gian và cách nghiệm thu." },
      { step: "Triển khai", detail: "Điều phối người dùng thật cài đặt và định danh đúng quy trình." },
      { step: "Báo cáo", detail: "Tổng hợp lượt hợp lệ và bàn giao số liệu cho bạn." },
    ],
    priceFrom: "Báo giá theo KPI từng chiến dịch",
    priceNote:
      "Chi phí tính theo loại KPI (cài đặt / định danh / referral), số lượt, khu vực và thời hạn. Trao đổi brief để nhận đơn giá mỗi lượt trước khi chạy.",
    faqs: [
      {
        q: "App fintech kiểm soát gian lận chặt, anh xử lý sao?",
        a: "Tôi chỉ dùng người dùng thật với tài khoản và giấy tờ chính chủ, làm đúng quy trình app. Cách này hợp lệ và bền hơn nhiều so với tài khoản ảo vốn sẽ bị hệ thống loại.",
      },
      {
        q: "Có làm được định danh eKYC không?",
        a: "Có, với điều kiện cộng tác viên dùng giấy tờ chính chủ của họ. Tôi không nhận yêu cầu mượn hay làm giả giấy tờ.",
      },
      {
        q: "Nghiệm thu và thanh toán thế nào?",
        a: "Chốt đơn giá mỗi lượt hợp lệ và mốc nghiệm thu trước khi chạy. Cuối chiến dịch đối soát theo lượt thật.",
      },
      {
        q: "Chạy được KPI lớn toàn quốc không?",
        a: "Có, tùy quy mô và thời gian báo trước. Tôi mạnh ở Hội An – Đà Nẵng và mở rộng các tỉnh khác theo nhu cầu KPI.",
      },
    ],
    related: [
      { label: "Dịch vụ quét mã QR theo KPI", href: "/vi/quet-ma-qr", note: "Trang dịch vụ chính" },
      { label: "Quét mã QR cho sự kiện", href: "/vi/quet-ma-qr/cho-su-kien-activation", note: "Dịch vụ liên quan" },
      { label: "Tuyển cộng tác viên quét mã QR", href: "/vi/quet-ma-qr/tuyen-cong-tac-vien", note: "Tuyển dụng" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/qr-tai-app-kpi.webp", alt: "Dịch vụ tải app theo KPI cho ví điện tử và ngân hàng số" },
      { slot: "inline", suggestion: "/images/services/qr-ekyc-dinh-danh.webp", alt: "Định danh tài khoản app bằng giấy tờ chính chủ" },
    ],
    schema: { serviceType: "Dịch vụ tải app và mở tài khoản theo KPI" },
  },

  /* ───────────────────────── QR SPOKE · QUÉT MÃ ZALO THU LEAD (B2B) ───────────────────────── */
  {
    path: "/vi/quet-ma-zalo-thu-lead",
    cluster: "qr",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ quét mã QR", href: "/vi/quet-ma-qr" },
      { label: "Quét mã Zalo thu lead tại điểm bán", href: "/vi/quet-ma-zalo-thu-lead" },
    ],
    primaryKeyword: "quét mã Zalo thu lead tại điểm bán",
    metaTitle: "Quét mã Zalo thu lead tại cửa hàng, showroom | Công Thiên Agency",
    metaDescription:
      "Thiết lập luồng quét mã QR Zalo OA tại quầy, showroom, điểm dịch vụ để thu lead và chăm sóc lại khách. Standee QR, kịch bản nhân sự, ưu đãi và follow-up bài bản.",
    eyebrow: "Dịch vụ · Quét mã QR",
    h1: "Quét mã Zalo thu lead tại cửa hàng, showroom & điểm dịch vụ",
    heroSub:
      "Khách ghé quầy rồi đi mà bạn không có cách liên hệ lại? Tôi giúp bạn thiết lập luồng quét mã QR Zalo OA tại điểm bán để biến lượt ghé thành tệp lead có thể chăm sóc về sau.",
    heroCta: "Tư vấn quét mã Zalo qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Với cửa hàng, showroom, spa hay nhà hàng, phần lớn khách ghé một lần rồi rời đi mà không để lại thông tin. Một mã QR Zalo OA đặt đúng chỗ, kèm lý do đủ hấp dẫn để khách quét, sẽ giúp bạn thu được tệp lead chủ động — không phụ thuộc hoàn toàn vào quảng cáo. Tôi giúp doanh nghiệp thiết kế trọn luồng: từ vị trí đặt QR, ưu đãi, kịch bản nhân sự đến cách follow-up sau khi khách quét.",
    sections: [
      {
        heading: "Vì sao nên thu lead bằng quét mã Zalo?",
        bullets: [
          "Khách đã đến tận nơi là lead nóng — bỏ lỡ là mất luôn cơ hội bán lại.",
          "Zalo OA cho phép nhắn lại, gửi ưu đãi và chăm sóc khách miễn phí trong giới hạn.",
          "Tệp lead là tài sản của bạn, không phụ thuộc thuật toán quảng cáo.",
          "Chi phí thấp hơn nhiều so với chạy ads để có cùng số lead.",
        ],
      },
      {
        heading: "Tôi giúp bạn thiết lập những gì?",
        bullets: [
          "Thiết kế standee / wobbler / sticker QR đặt đúng điểm chạm.",
          "Xây lý do để khách quét: ưu đãi, tích điểm, quà, nội dung hữu ích.",
          "Kịch bản để nhân sự mời khách quét đúng thời điểm, không gượng.",
          "Luồng follow-up sau khi quét: tin nhắn chào, phân loại, chăm sóc lại.",
        ],
      },
      {
        heading: "Làm đúng cách để khách sẵn sàng quét",
        body:
          "Một mã QR dán lên tường mà không có lý do thì rất ít người quét. Tôi tập trung vào trải nghiệm: đặt QR ở nơi khách có thời gian (bàn chờ, quầy thanh toán), gắn ưu đãi rõ ràng và huấn luyện nhân sự mời đúng lúc. Khi luồng đủ mượt, tỷ lệ khách quét và để lại thông tin tăng đáng kể.",
      },
    ],
    deliverables: {
      title: "Khi triển khai, bạn nhận được",
      items: [
        "Thiết kế ấn phẩm QR Zalo OA phù hợp không gian điểm bán",
        "Kịch bản mời khách quét cho nhân sự",
        "Cấu trúc ưu đãi / lý do quét theo ngành của bạn",
        "Luồng tin nhắn chào và phân loại lead sau khi quét",
        "Gợi ý đo lường: số lượt quét, số lead, tỷ lệ phản hồi",
      ],
    },
    whoFor: [
      "Cửa hàng bán lẻ, showroom",
      "Spa, salon, phòng khám",
      "Nhà hàng, quán cà phê",
      "Doanh nghiệp dịch vụ có khách ghé trực tiếp",
    ],
    process: [
      { step: "Khảo sát", detail: "Tìm hiểu điểm bán, luồng khách và mục tiêu thu lead." },
      { step: "Thiết kế luồng", detail: "Lên vị trí QR, ưu đãi, kịch bản và tin nhắn follow-up." },
      { step: "Triển khai", detail: "Bàn giao ấn phẩm QR và hướng dẫn nhân sự thực hiện." },
      { step: "Tối ưu", detail: "Theo dõi số lượt quét và lead để điều chỉnh cho tốt hơn." },
    ],
    priceFrom: "Báo giá theo quy mô điểm bán",
    priceNote:
      "Chi phí tùy số điểm bán, số ấn phẩm thiết kế và mức độ thiết lập luồng chăm sóc. Nhắn Zalo để nhận báo giá theo trường hợp cụ thể.",
    faqs: [
      {
        q: "Tôi chưa có Zalo OA thì sao?",
        a: "Tôi hướng dẫn hoặc hỗ trợ tạo Zalo OA cho doanh nghiệp trước, sau đó mới thiết lập luồng quét mã thu lead.",
      },
      {
        q: "Làm sao để khách chịu quét mã?",
        a: "Mấu chốt là lý do quét: ưu đãi, tích điểm hoặc nội dung hữu ích, cộng với việc nhân sự mời đúng thời điểm. Tôi thiết kế cả hai phần này.",
      },
      {
        q: "Có đo được hiệu quả không?",
        a: "Có. Bạn theo dõi số lượt quét, số lead mới và tỷ lệ phản hồi qua Zalo OA để biết luồng đang chạy tốt đến đâu.",
      },
      {
        q: "Khác gì với chạy quảng cáo?",
        a: "Quảng cáo tiếp cận khách mới nhưng tốn phí liên tục. Quét mã Zalo tận dụng khách đã đến tận nơi và giữ họ thành tệp lead lâu dài của bạn.",
      },
    ],
    related: [
      { label: "Dịch vụ quét mã QR theo KPI", href: "/vi/quet-ma-qr", note: "Trang dịch vụ chính" },
      { label: "Top cách quét mã Zalo thu lead", href: "/vi/blog/top-cach-quet-ma-zalo-thu-lead", note: "Bài viết" },
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Dịch vụ liên quan" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/quet-ma-zalo-quay.webp", alt: "Standee quét mã Zalo OA thu lead tại quầy cửa hàng" },
      { slot: "inline", suggestion: "/images/services/quet-ma-zalo-khach.webp", alt: "Khách quét mã Zalo nhận ưu đãi tại điểm bán" },
    ],
    schema: { serviceType: "Thiết lập quét mã Zalo thu lead tại điểm bán" },
  },

  /* ───────────────────────── QR SPOKE · ĐÀ NẴNG ───────────────────────── */
  {
    path: "/vi/quet-ma-qr/da-nang",
    cluster: "qr",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ quét mã QR", href: "/vi/quet-ma-qr" },
      { label: "Quét mã QR tại Đà Nẵng", href: "/vi/quet-ma-qr/da-nang" },
    ],
    primaryKeyword: "dịch vụ quét mã QR tại Đà Nẵng",
    metaTitle: "Dịch vụ quét mã QR & cộng tác viên tại Đà Nẵng | Công Thiên Agency",
    metaDescription:
      "Triển khai chiến dịch quét mã QR, tải app theo KPI và tuyển cộng tác viên tại Đà Nẵng. Đội người thật tại địa phương, chạy nhanh cho sự kiện, activation và fintech.",
    eyebrow: "Dịch vụ · Quét mã QR",
    h1: "Dịch vụ quét mã QR & cộng tác viên tại Đà Nẵng",
    heroSub:
      "Bạn cần chạy chiến dịch quét mã QR, tải app hay tổ chức activation tại Đà Nẵng? Tôi có sẵn mạng lưới cộng tác viên thật tại địa phương để triển khai nhanh, đạt KPI.",
    heroCta: "Gửi yêu cầu Đà Nẵng qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Đà Nẵng là trung tâm sự kiện, du lịch và hoạt động thương mại của khu vực miền Trung, nơi các nhãn hàng và fintech thường xuyên chạy activation, booth sampling và chương trình tải app. Với mạng lưới cộng tác viên thật ngay tại Đà Nẵng, tôi giúp agency và nhãn hàng triển khai chiến dịch quét mã QR đạt KPI mà không phải điều người từ xa đến.",
    sections: [
      {
        heading: "Tôi hỗ trợ gì tại Đà Nẵng?",
        bullets: [
          "Chiến dịch quét mã QR & activation tại sự kiện, hội chợ, lễ hội Đà Nẵng.",
          "Lượt tải app, định danh tài khoản fintech theo KPI tại địa phương.",
          "Tuyển và điều phối cộng tác viên người Đà Nẵng cho chiến dịch dài hạn.",
          "Thiết lập quét mã Zalo thu lead cho cửa hàng, showroom tại Đà Nẵng.",
        ],
      },
      {
        heading: "Vì sao chọn đội tại địa phương?",
        body:
          "Cộng tác viên ở ngay Đà Nẵng giúp bạn tiết kiệm chi phí di chuyển, phản ứng nhanh khi sự kiện thay đổi và am hiểu địa điểm tổ chức. Điều này đặc biệt quan trọng với các activation diễn ra trong thời gian ngắn, cần đủ người đúng giờ tại đúng địa điểm.",
      },
      {
        heading: "Người thật, đúng chính sách nền tảng",
        body:
          "Như mọi chiến dịch khác, tôi chạy bằng cộng tác viên và người dùng thật với tài khoản chính chủ, nghiệm thu theo lượt hợp lệ. Không bơm số ảo — vừa tránh bị nền tảng huỷ, vừa giữ uy tín cho cả nhãn hàng và agency.",
      },
    ],
    whoFor: [
      "Agency cần chạy chiến dịch tại Đà Nẵng",
      "Nhãn hàng tổ chức activation miền Trung",
      "Fintech cần lượt tải app tại Đà Nẵng",
      "Cửa hàng, doanh nghiệp Đà Nẵng muốn thu lead",
    ],
    process: [
      { step: "Nhận brief", detail: "Bạn gửi mục tiêu, KPI, địa điểm và thời gian tại Đà Nẵng." },
      { step: "Lên kế hoạch", detail: "Tôi bố trí cộng tác viên địa phương theo khung giờ." },
      { step: "Triển khai", detail: "Đội chạy lượt quét / tải app thật tại Đà Nẵng." },
      { step: "Báo cáo", detail: "Tổng hợp số liệu hợp lệ và bàn giao cho bạn." },
    ],
    priceFrom: "Báo giá theo KPI & quy mô",
    priceNote:
      "Chi phí tính theo loại chiến dịch, số lượt KPI và thời hạn tại Đà Nẵng. Gửi brief để nhận báo giá rõ ràng.",
    faqs: [
      {
        q: "Đội cộng tác viên ở ngay Đà Nẵng chứ?",
        a: "Đúng vậy. Tôi ưu tiên cộng tác viên tại Đà Nẵng và khu vực lân cận để chạy nhanh, tiết kiệm chi phí di chuyển.",
      },
      {
        q: "Có chạy được cả Hội An không?",
        a: "Có. Hội An – Đà Nẵng là khu vực tôi mạnh nhất, có thể phối hợp chạy chiến dịch ở cả hai nơi.",
      },
      {
        q: "Sự kiện gấp trong vài ngày có kịp không?",
        a: "Thường là kịp với chiến dịch quy mô vừa. Báo càng sớm tôi càng dễ bố trí đủ người đúng khung giờ.",
      },
    ],
    related: [
      { label: "Dịch vụ quét mã QR theo KPI", href: "/vi/quet-ma-qr", note: "Trang dịch vụ chính" },
      { label: "Quét mã QR cho sự kiện", href: "/vi/quet-ma-qr/cho-su-kien-activation", note: "Dịch vụ liên quan" },
      { label: "Tuyển cộng tác viên quét mã QR", href: "/vi/quet-ma-qr/tuyen-cong-tac-vien", note: "Tuyển dụng" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/qr-da-nang.webp", alt: "Dịch vụ quét mã QR và cộng tác viên tại Đà Nẵng" },
    ],
    schema: { serviceType: "Dịch vụ quét mã QR tại Đà Nẵng" },
  },

  /* ───────────────────────── NAVER SPOKE · BẢNG GIÁ CHI TIẾT ───────────────────────── */
  {
    path: "/vi/naver-marketing/bang-gia-chi-tiet",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Bảng giá chi tiết", href: "/vi/naver-marketing/bang-gia-chi-tiet" },
    ],
    primaryKeyword: "bảng giá dịch vụ Naver Marketing",
    metaTitle: "Bảng giá dịch vụ Naver Marketing chi tiết 2026 | Công Thiên Agency",
    metaDescription:
      "Bảng giá Naver Marketing gồm những gì: viết bài Naver Blog, booking blogger/KOC Hàn, tối ưu Naver Place và quản lý tài khoản. Các yếu tố ảnh hưởng chi phí và cách nhận báo giá.",
    eyebrow: "Dịch vụ · Naver",
    h1: "Bảng giá dịch vụ Naver Marketing: gồm những gì và phụ thuộc yếu tố nào?",
    heroSub:
      "Bạn muốn biết làm Naver Marketing tốn bao nhiêu trước khi quyết định? Trang này giải thích rõ các hạng mục, yếu tố ảnh hưởng chi phí và cách nhận báo giá theo đúng nhu cầu của bạn.",
    heroCta: "Nhận báo giá Naver qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Chi phí Naver Marketing không cố định vì mỗi doanh nghiệp có ngành nghề, mục tiêu và số lượng nội dung khác nhau. Thay vì đưa một con số chung dễ gây hiểu lầm, tôi báo giá theo từng hạng mục thực tế bạn cần. Trang này giúp bạn hiểu cấu trúc giá để dễ so sánh và ra quyết định.",
    sections: [
      {
        heading: "Bảng giá thường gồm các hạng mục nào?",
        bullets: [
          "Viết bài review Naver Blog tiếng Hàn (tính theo số bài).",
          "Booking blogger / KOC Hàn (tính theo tầm ảnh hưởng và số bài).",
          "Tối ưu Naver Place: hồ sơ, hình ảnh, thông tin doanh nghiệp.",
          "Quản lý tài khoản Naver Blog doanh nghiệp theo tháng.",
        ],
      },
      {
        heading: "Yếu tố ảnh hưởng đến chi phí",
        bullets: [
          "Số lượng bài viết và tần suất đăng mỗi tháng.",
          "Có booking blogger/KOC Hàn hay tự đăng bằng tài khoản doanh nghiệp.",
          "Ngành nghề và độ khó của nội dung (spa, nhà hàng, tour, khách sạn).",
          "Yêu cầu hình ảnh, dịch thuật và mức độ tối ưu SEO Naver.",
        ],
      },
      {
        heading: "Vì sao nên báo giá theo case thực tế?",
        body:
          "Một spa cần 3 bài/tháng sẽ khác hẳn một chuỗi khách sạn cần booking nhiều KOC. Báo giá theo nhu cầu thật giúp bạn không trả cho phần không cần và biết rõ mình nhận được gì. Tôi luôn nêu rõ số bài, hạng mục và cách đo hiệu quả trước khi bắt đầu.",
      },
    ],
    deliverables: {
      title: "Khi nhận báo giá, bạn sẽ thấy rõ",
      items: [
        "Danh sách hạng mục và số lượng cụ thể",
        "Đơn giá từng phần, không gộp mập mờ",
        "Phạm vi công việc và những gì không bao gồm",
        "Cách đo hiệu quả: index, hiển thị, lead qua Zalo/WhatsApp",
        "Mốc thời gian triển khai dự kiến",
      ],
    },
    whoFor: [
      "Spa, nhà hàng, khách sạn muốn tiếp cận khách Hàn",
      "Doanh nghiệp tour, trải nghiệm tại Hội An – Đà Nẵng",
      "Chủ doanh nghiệp đang so sánh chi phí trước khi đầu tư",
      "Đơn vị cần báo giá rõ ràng để lập ngân sách",
    ],
    process: [
      { step: "Gửi nhu cầu", detail: "Bạn cho biết ngành, mục tiêu và số nội dung mong muốn." },
      { step: "Tư vấn gói", detail: "Tôi đề xuất hạng mục phù hợp và giải thích lý do." },
      { step: "Báo giá", detail: "Gửi bảng giá chi tiết theo từng phần, minh bạch." },
      { step: "Chốt & triển khai", detail: "Thống nhất phạm vi rồi bắt đầu theo kế hoạch." },
    ],
    priceFrom: "Báo giá theo hạng mục thực tế",
    priceNote:
      "Chi phí phụ thuộc số bài, ngành nghề, hình ảnh, tài khoản đăng bài và có booking blogger Hàn hay không. Nhắn Zalo để nhận bảng giá theo đúng nhu cầu của bạn.",
    faqs: [
      {
        q: "Làm Naver Marketing rẻ nhất khoảng bao nhiêu?",
        a: "Gói nhỏ thường bắt đầu từ một vài bài Naver Blog mỗi tháng. Con số cụ thể tùy ngành và yêu cầu nội dung; tôi báo giá rõ trước khi bắt đầu.",
      },
      {
        q: "Booking blogger Hàn có đắt không?",
        a: "Chi phí tùy tầm ảnh hưởng của blogger/KOC và số bài. Tôi tư vấn chọn mức phù hợp ngân sách thay vì chạy theo người nổi tiếng không cần thiết.",
      },
      {
        q: "Có gói theo tháng không?",
        a: "Có. Nhiều doanh nghiệp chọn gói quản lý theo tháng để đăng bài đều và theo dõi hiệu quả liên tục.",
      },
      {
        q: "Báo giá có kèm cam kết thứ hạng không?",
        a: "Tôi không cam kết thứ hạng cụ thể vì Naver phụ thuộc nhiều yếu tố. Thay vào đó tôi cam kết khối lượng, chất lượng nội dung và minh bạch cách đo hiệu quả.",
      },
    ],
    related: [
      { label: "Naver Marketing tổng quan", href: "/vi/naver-marketing", note: "Trang dịch vụ chính" },
      { label: "Naver hay Google cho khách Hàn?", href: "/vi/naver-marketing/naver-vs-google", note: "So sánh" },
      { label: "Chi phí Naver Marketing", href: "/vi/blog/chi-phi-naver-marketing", note: "Bài viết" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/naver-bang-gia.webp", alt: "Bảng giá dịch vụ Naver Marketing chi tiết" },
    ],
    schema: { serviceType: "Tư vấn và báo giá dịch vụ Naver Marketing" },
  },

  /* ───────────────────────── NAVER SPOKE · NAVER VS GOOGLE ───────────────────────── */
  {
    path: "/vi/naver-marketing/naver-vs-google",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver hay Google cho khách Hàn", href: "/vi/naver-marketing/naver-vs-google" },
    ],
    primaryKeyword: "Naver hay Google cho khách Hàn Quốc",
    metaTitle: "Naver hay Google: khách Hàn tìm dịch vụ ở đâu? | Công Thiên Agency",
    metaDescription:
      "So sánh Naver và Google để tiếp cận khách Hàn Quốc: thói quen tìm kiếm, độ tin tưởng, kênh nào hiệu quả cho spa, nhà hàng, khách sạn và tour tại Hội An – Đà Nẵng.",
    eyebrow: "Dịch vụ · Naver",
    h1: "Naver hay Google: khách Hàn tìm spa, nhà hàng, tour ở đâu?",
    heroSub:
      "Nếu khách mục tiêu của bạn là người Hàn Quốc, chọn sai kênh tìm kiếm sẽ lãng phí ngân sách. Trang này so sánh Naver và Google để bạn biết nên đầu tư vào đâu trước.",
    heroCta: "Tư vấn chọn kênh qua Zalo",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Khách Việt và khách quốc tế nói chung dùng Google, nhưng người Hàn Quốc lại có thói quen tìm kiếm rất riêng. Họ tin và dùng Naver như cổng thông tin chính: tìm review, blog, bản đồ và đặt dịch vụ. Hiểu sự khác biệt này giúp doanh nghiệp du lịch tại Hội An – Đà Nẵng phân bổ ngân sách đúng chỗ.",
    sections: [
      {
        heading: "Người Hàn tìm kiếm khác như thế nào?",
        bullets: [
          "Phần lớn khách Hàn mở Naver trước khi mở Google để tra cứu.",
          "Họ đọc Naver Blog và review của người Hàn để ra quyết định.",
          "Naver Place đóng vai trò như bản đồ + hồ sơ doanh nghiệp với khách Hàn.",
          "Nội dung tiếng Hàn tạo cảm giác tin tưởng hơn nội dung dịch máy.",
        ],
      },
      {
        heading: "Khi nào nên ưu tiên Naver?",
        body:
          "Nếu tệp khách chính của bạn là người Hàn — tour Hàn, khách sạn đón đoàn Hàn, spa/nhà hàng gần khu khách Hàn lui tới — thì Naver thường mang lại hiệu quả cao hơn cho cùng một ngân sách so với chỉ chạy Google. Naver là nơi họ thật sự tìm và tin tưởng.",
      },
      {
        heading: "Khi nào Google vẫn quan trọng?",
        body:
          "Google vẫn cần thiết cho khách Việt, khách Âu – Mỹ và để website của bạn được index, hiển thị trên Google Maps. Thực tế tốt nhất là kết hợp: Google cho tệp khách quốc tế chung, Naver cho khách Hàn — thay vì bỏ hẳn một bên.",
      },
    ],
    deliverables: {
      title: "Tôi giúp bạn quyết định bằng cách",
      items: [
        "Phân tích tệp khách mục tiêu thật của doanh nghiệp",
        "Đề xuất tỷ trọng đầu tư Naver / Google hợp lý",
        "Lên nội dung Naver phù hợp hành vi khách Hàn",
        "Kết nối Naver với website và Google Maps hiện có",
        "Cách đo hiệu quả từng kênh để điều chỉnh dần",
      ],
    },
    whoFor: [
      "Doanh nghiệp có nhiều khách Hàn Quốc",
      "Tour, khách sạn đón đoàn khách Hàn",
      "Spa, nhà hàng gần khu khách Hàn",
      "Chủ doanh nghiệp phân vân chọn Naver hay Google",
    ],
    process: [
      { step: "Phân tích khách", detail: "Xác định tỷ lệ khách Hàn và mục tiêu của bạn." },
      { step: "Đề xuất kênh", detail: "Gợi ý phân bổ Naver / Google theo tệp khách." },
      { step: "Triển khai", detail: "Xây nội dung Naver và kết nối với kênh hiện có." },
      { step: "Đo & tối ưu", detail: "Theo dõi lead từng kênh để điều chỉnh ngân sách." },
    ],
    priceFrom: "Tư vấn miễn phí chọn kênh",
    priceNote:
      "Tôi tư vấn miễn phí việc chọn Naver hay Google dựa trên tệp khách của bạn; chi phí chỉ tính khi triển khai nội dung. Nhắn Zalo để được tư vấn.",
    faqs: [
      {
        q: "Khách Hàn có dùng Google không?",
        a: "Có, nhưng phần lớn ưu tiên Naver trước cho việc tra cứu review, blog và bản đồ. Với khách Hàn, Naver thường là điểm chạm quyết định.",
      },
      {
        q: "Tôi nên làm cả hai hay chọn một?",
        a: "Nếu ngân sách cho phép, kết hợp là tốt nhất: Google cho khách quốc tế chung, Naver cho khách Hàn. Nếu phải chọn, hãy ưu tiên theo tệp khách chính.",
      },
      {
        q: "Naver có thay thế được website không?",
        a: "Không. Naver là kênh tiếp cận; website vẫn là tài sản chính chủ để khách đặt dịch vụ và để Google index. Tốt nhất là Naver dẫn khách về website.",
      },
      {
        q: "Làm sao biết khách của tôi là Hàn hay không?",
        a: "Qua dữ liệu booking, nguồn khách hiện tại và đặc thù ngành. Tôi giúp bạn phân tích trước khi quyết định đầu tư kênh nào.",
      },
    ],
    related: [
      { label: "Naver Marketing tổng quan", href: "/vi/naver-marketing", note: "Trang dịch vụ chính" },
      { label: "Bảng giá Naver chi tiết", href: "/vi/naver-marketing/bang-gia-chi-tiet", note: "Bảng giá" },
      { label: "Vì sao khách Hàn dùng Naver", href: "/vi/blog/vi-sao-khach-han-dung-naver", note: "Bài viết" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/naver-vs-google.webp", alt: "So sánh Naver và Google để tiếp cận khách Hàn Quốc" },
    ],
    schema: { serviceType: "Tư vấn chọn kênh Naver hoặc Google cho khách Hàn" },
  },

  /* ───────────────────────── NAVER SEO LANDING — AGENCY VIETNAM ───────────────────────── */
  {
    path: "/en/naver-marketing/naver-marketing-agency-vietnam",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Naver Marketing Agency Vietnam", href: "/en/naver-marketing/naver-marketing-agency-vietnam" },
    ],
    primaryKeyword: "Naver marketing agency Vietnam",
    metaTitle: "Naver Marketing Agency Vietnam | Công Thiên Agency",
    metaDescription:
      "Naver marketing agency in Vietnam for hotels, restaurants, spas and tours targeting Korean tourists. Naver Blog, Naver Place, Korean blogger reviews and SEO-ready content.",
    eyebrow: "Naver · Vietnam Agency",
    h1: "Naver Marketing Agency Vietnam for brands targeting Korean tourists",
    heroSub:
      "Naver Marketing services in Vietnam for hotels, restaurants, spas and tours that want to reach Korean tourists before they book.",
    heroCta: "Get a Naver Marketing plan",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "If your business in Vietnam depends on Korean tourists, Naver is not an optional channel. Công Thiên Agency helps tourism and hospitality brands build Korean-language visibility through Naver Blog content, Korean blogger reviews, Naver Place optimization and SEO-ready landing pages that connect back to your website, Google Maps, Zalo and WhatsApp.",
    sections: [
      {
        heading: "Why work with a Naver marketing agency in Vietnam?",
        bullets: [
          "Korean tourists often search Naver before choosing a hotel, restaurant, spa or local tour in Vietnam.",
          "Naver Blog reviews create trust in Korean before the customer contacts your business.",
          "Naver Place helps Korean customers understand your location, opening hours and key information.",
          "A local Vietnam team can connect Naver content with your website, Google Maps, booking flow and real operations.",
        ],
      },
      {
        heading: "What the agency service includes",
        body:
          "The work can include Naver strategy, keyword mapping, Korean-language content planning, Naver Blog posts, Korean blogger/KOC reviews, Naver Place setup guidance and SEO landing pages on your own website. The goal is to create a consistent discovery path for Korean tourists, from search to trust to booking.",
      },
      {
        heading: "Best-fit businesses",
        body:
          "This service is strongest for hotels, boutique stays, restaurants, cafes, spas, wellness brands, cooking classes, local tours and travel experiences in Vietnam, especially in Hội An, Đà Nẵng and other destinations with strong Korean travel demand.",
      },
    ],
    deliverables: {
      title: "Naver marketing deliverables",
      items: [
        "Naver search and competitor audit for your Vietnam market",
        "Korean tourist keyword map by service, location and intent",
        "Naver Blog content plan and review article direction",
        "Korean blogger or KOC review coordination when needed",
        "Naver Place optimization checklist and content guidance",
        "Internal link plan connecting Naver, website and Google Maps",
      ],
    },
    whoFor: [
      "Hotels and resorts in Vietnam",
      "Restaurants and cafes serving Korean tourists",
      "Spas and wellness businesses",
      "Tours, cooking classes and local experiences",
    ],
    process: [
      { step: "Audit", detail: "Review your website, Google Maps, Naver visibility and Korean tourist intent." },
      { step: "Strategy", detail: "Build a keyword and content map for Naver Blog, Place and landing pages." },
      { step: "Execution", detail: "Create content, coordinate reviews and connect channels into one discovery path." },
      { step: "Optimize", detail: "Track links, leads and content performance, then adjust the monthly plan." },
    ],
    priceFrom: "Naver Blogger Review from 8,000,000 VND / 4 posts",
    priceNote:
      "Final scope depends on industry, location, post volume and blogger/KOC needs. Message me on Zalo for a plan based on your real business.",
    faqs: [
      {
        q: "What is a Naver marketing agency in Vietnam?",
        a: "It is an agency that helps Vietnam-based businesses reach Korean tourists through Naver Blog, Naver Place, Korean reviews, Korean-language content and SEO landing pages.",
      },
      {
        q: "Is Naver important for Korean tourists visiting Vietnam?",
        a: "Yes. Many Korean travelers use Naver to read blog reviews, compare locations and validate businesses before booking hotels, restaurants, spas or tours.",
      },
      {
        q: "Do you write Korean content or only Vietnamese content?",
        a: "The Naver content direction is built for Korean readers. Website service pages can be written in Vietnamese or English depending on the Google keyword target.",
      },
      {
        q: "Can Naver marketing work together with Google SEO?",
        a: "Yes. The strongest setup connects Naver Blog and Naver Place with a fast website, Google-indexable service pages and an optimized Google Business Profile.",
      },
      {
        q: "Which Vietnam locations do you serve?",
        a: "The service can support businesses across Vietnam, with especially strong fit for Hội An, Đà Nẵng and tourism destinations serving Korean visitors.",
      },
    ],
    related: [
      { label: "Naver Marketing overview", href: "/vi/naver-marketing", note: "Vietnamese service page" },
      { label: "Naver Blog Marketing Vietnam", href: "/en/naver-marketing/naver-blog-marketing-vietnam", note: "Related keyword" },
      { label: "Naver SEO for hotels", href: "/en/naver-marketing/naver-seo-agency-for-hotels", note: "Hotel keyword" },
      { label: "Naver Place optimization", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Vietnamese service page" },
      { label: "Naver Marketing Vietnam: reach Korean tourists", href: "/en/blog/naver-marketing-vietnam-guide", note: "Blog guide" },
      { label: "How to attract Korean tourists to Hoi An", href: "/en/blog/attract-korean-tourists-hoi-an", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver marketing agency Vietnam for Korean tourists" },
    ],
    schema: { serviceType: "Naver marketing agency Vietnam", offerMinPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SEO LANDING — BLOG MARKETING VIETNAM ───────────────────────── */
  {
    path: "/en/naver-marketing/naver-blog-marketing-vietnam",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Naver Blog Marketing Vietnam", href: "/en/naver-marketing/naver-blog-marketing-vietnam" },
    ],
    primaryKeyword: "Naver blog marketing Vietnam",
    metaTitle: "Naver Blog Marketing Vietnam | Công Thiên Agency",
    metaDescription:
      "Naver Blog marketing in Vietnam for brands targeting Korean travelers. Korean blog reviews, keyword content, blogger coordination and trust-building articles.",
    eyebrow: "Naver Blog · Vietnam",
    h1: "Naver Blog Marketing Vietnam for Korean traveler trust",
    heroSub:
      "Build Korean-language Naver Blog content that helps Korean travelers read reviews, understand the experience and trust your Vietnam business before booking.",
    heroCta: "Get a Naver Blog plan",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Naver Blog marketing in Vietnam is about earning attention and trust where Korean travelers already research. Instead of only translating sales copy, we create review-style content, useful travel context, keyword-led blog topics and clear calls to action that help Korean readers move from search to inquiry.",
    sections: [
      {
        heading: "Why Naver Blog matters in Vietnam tourism",
        bullets: [
          "Korean travelers read Naver Blog reviews to understand real experiences before booking.",
          "Blog content can explain location, prices, service details and travel tips in a familiar Korean format.",
          "Review-style posts create social proof that ads and short social captions cannot replace.",
          "Naver Blog can support Google SEO when your website links and landing pages are structured clearly.",
        ],
      },
      {
        heading: "Content that fits how Korean users read",
        body:
          "A strong Naver Blog article usually needs a natural title, real photos, location context, service details, price/value signals, honest experience language and a clear next step. For Vietnam tourism brands, the content should answer practical questions Korean tourists ask before they message or book.",
      },
      {
        heading: "Organic blog content plus blogger reviews",
        body:
          "You can build content on your own Naver Blog account for long-term assets, book Korean bloggers for faster third-party proof, or combine both. The right mix depends on your timeline, budget and current Korean market demand.",
      },
    ],
    deliverables: {
      title: "Naver Blog marketing scope",
      items: [
        "Korean tourist topic and keyword research",
        "Naver Blog article outlines by industry and location",
        "Review-style Korean content direction",
        "Image checklist for natural Naver posts",
        "CTA structure for Zalo, WhatsApp, website or Naver Place",
        "Internal links to service pages and related Naver content",
      ],
    },
    whoFor: [
      "Vietnam hotels, restaurants, spas and tours",
      "Brands that need Korean review content",
      "Businesses building a long-term Naver Blog account",
      "Campaigns combining owned content and Korean blogger posts",
    ],
    process: [
      { step: "Research", detail: "Map Korean search intent by city, category and decision stage." },
      { step: "Plan", detail: "Choose owned blog posts, blogger reviews or a combined content plan." },
      { step: "Create", detail: "Write or brief Korean review-style articles with real photos and CTAs." },
      { step: "Connect", detail: "Link Naver Blog to website, Place, maps and booking/contact channels." },
    ],
    priceFrom: "From 8,000,000 VND / 4 review posts",
    priceNote:
      "Pricing depends on post volume, publishing account, photo quality and whether Korean blogger booking is included.",
    faqs: [
      {
        q: "What is Naver Blog marketing in Vietnam?",
        a: "It is the process of using Naver Blog content, Korean-language reviews and related links to help Korean travelers discover and trust Vietnam-based businesses.",
      },
      {
        q: "Is Naver Blog different from Naver Place?",
        a: "Yes. Naver Blog is content and review-led, while Naver Place is a business/location profile. They work best together for tourism and hospitality businesses.",
      },
      {
        q: "Should I use my own Naver Blog or Korean bloggers?",
        a: "Use your own Naver Blog for long-term content assets and Korean bloggers for faster third-party trust. Many campaigns combine both.",
      },
      {
        q: "Can you target hotel, restaurant, spa and tour keywords?",
        a: "Yes. The keyword map can be built around your category, destination, Korean traveler intent and booking stage.",
      },
      {
        q: "Does Naver Blog marketing guarantee top rankings?",
        a: "No agency should promise permanent rankings. The goal is to create better Korean content, stronger trust signals and more indexable assets around your business.",
      },
    ],
    related: [
      { label: "Naver Blog writing service", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Vietnamese service page" },
      { label: "Korean blogger booking", href: "/vi/naver-marketing/booking-blogger-han", note: "Vietnamese service page" },
      { label: "Naver Marketing Agency Vietnam", href: "/en/naver-marketing/naver-marketing-agency-vietnam", note: "Agency service" },
      { label: "Naver Place vs Naver Blog", href: "/vi/blog/naver-place-khac-naver-blog-the-nao", note: "Vietnamese explainer" },
      { label: "Naver Blog reviews guide", href: "/en/blog/naver-blog-reviews-guide", note: "Blog guide" },
      { label: "What Korean tourists search for in Vietnam", href: "/en/blog/what-korean-tourists-search-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver Blog marketing Vietnam for Korean travelers" },
    ],
    schema: { serviceType: "Naver Blog marketing Vietnam", offerPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SEO LANDING — HOTELS ───────────────────────── */
  {
    path: "/en/naver-marketing/naver-seo-agency-for-hotels",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Naver SEO Agency for Hotels", href: "/en/naver-marketing/naver-seo-agency-for-hotels" },
    ],
    primaryKeyword: "Naver SEO agency for hotels",
    metaTitle: "Naver SEO Agency for Hotels in Vietnam | Công Thiên",
    metaDescription:
      "Naver SEO agency for hotels in Vietnam: Korean blog reviews, Naver Place, hotel landing pages and content strategy to attract Korean travelers and direct bookings.",
    eyebrow: "Naver SEO · Hotels",
    h1: "Naver SEO agency for hotels targeting Korean travelers",
    heroSub:
      "Naver SEO for hotels, resorts, homestays and villas in Vietnam that want to build trust with Korean travelers and support direct bookings.",
    heroCta: "Get a hotel Naver SEO plan",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Hotels that target Korean travelers need more than OTA listings. Korean guests often validate rooms, location, breakfast, nearby attractions and real guest experiences through Naver. This Naver SEO service helps hotels in Vietnam build Korean-language search assets across Naver Blog, Naver Place and their own website landing pages.",
    sections: [
      {
        heading: "Hotel Naver SEO is trust-led",
        bullets: [
          "Korean travelers compare hotels through reviews, photos and location details before booking.",
          "Naver Blog articles can show room experience, amenities, breakfast, neighborhood and travel routes.",
          "Naver Place helps connect hotel information with map-based discovery.",
          "A hotel website landing page helps convert interest into direct inquiries or bookings.",
        ],
      },
      {
        heading: "What we optimize for hotels",
        body:
          "The work focuses on Korean search intent, room and amenity messaging, location context, Naver Blog review topics, blogger coordination and website pages that explain why Korean guests should book directly instead of only relying on OTA platforms.",
      },
      {
        heading: "Direct booking support",
        body:
          "Naver SEO should not stop at visibility. It should lead Korean guests toward a clear booking or contact path: hotel website, booking form, Zalo, WhatsApp, phone or a direct reservation page.",
      },
    ],
    deliverables: {
      title: "Hotel Naver SEO deliverables",
      items: [
        "Hotel Naver visibility and competitor audit",
        "Korean keyword map for hotel, location and room intent",
        "Naver Blog review content plan for rooms and guest experience",
        "Naver Place optimization guidance",
        "Hotel landing page SEO recommendations",
        "Internal linking from Naver content to booking/contact channels",
      ],
    },
    whoFor: [
      "Hotels and resorts serving Korean travelers",
      "Boutique hotels and homestays in Vietnam",
      "Villas and stays seeking more direct bookings",
      "Properties that already receive Korean guests from OTA channels",
    ],
    process: [
      { step: "Audit", detail: "Review Naver, website, OTA, Google Maps and direct booking readiness." },
      { step: "Keyword map", detail: "Select Korean search themes for hotel category, location and intent." },
      { step: "Content", detail: "Plan Naver Blog reviews and website pages that support hotel trust." },
      { step: "Conversion", detail: "Connect content to direct inquiry or booking paths." },
    ],
    priceFrom: "Naver Blogger Review from 8,000,000 VND / 4 posts",
    priceNote:
      "Hotels may need stay reviews, Naver Place work and website booking page improvements; quotes depend on property size and goals.",
    faqs: [
      {
        q: "What does a Naver SEO agency for hotels do?",
        a: "It helps hotels improve visibility and trust among Korean travelers through Naver Blog content, Korean reviews, Naver Place and SEO landing pages.",
      },
      {
        q: "Is Naver useful for hotels in Vietnam?",
        a: "Yes, especially for hotels, resorts and homestays that already serve Korean guests or want to increase Korean direct inquiries.",
      },
      {
        q: "Can Naver SEO reduce OTA dependence?",
        a: "It can support direct booking by building Korean-language trust assets and linking users to your official website or contact channels, but it should work alongside OTA rather than replace it overnight.",
      },
      {
        q: "Do hotel blogger reviews require a stay?",
        a: "For authentic hotel content, a real stay or site experience is usually recommended because Korean readers expect real photos and practical details.",
      },
      {
        q: "Can this work for homestays and villas?",
        a: "Yes. Boutique stays, homestays and villas can use the same Naver SEO approach with room, location and experience-led content.",
      },
    ],
    related: [
      { label: "Naver for hotels", href: "/vi/naver-marketing/cho-khach-san", note: "Vietnamese industry page" },
      { label: "Hotel website design", href: "/vi/thiet-ke-website/website-khach-san-homestay-hoi-an", note: "Direct booking" },
      { label: "Naver Marketing Agency Vietnam", href: "/en/naver-marketing/naver-marketing-agency-vietnam", note: "Agency service" },
      { label: "Google Maps for hotels", href: "/vi/google-maps-marketing/cho-khach-san", note: "Vietnamese local SEO page" },
      { label: "Naver Marketing Vietnam guide", href: "/en/blog/naver-marketing-vietnam-guide", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/homestay.webp", alt: "Naver SEO agency for hotels in Vietnam" },
    ],
    schema: { serviceType: "Naver SEO agency for hotels", offerMinPriceVnd: 8000000 },
  },

  /* ───────────────────────── NAVER SEO LANDING — ATTRACT KOREAN TOURISTS ───────────────────────── */
  {
    path: "/en/naver-marketing/attract-korean-tourists-with-naver",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Attract Korean Tourists with Naver", href: "/en/naver-marketing/attract-korean-tourists-with-naver" },
    ],
    primaryKeyword: "How to attract Korean tourists with Naver",
    metaTitle: "How to Attract Korean Tourists with Naver | Vietnam",
    metaDescription:
      "Learn how Vietnam hotels, restaurants, spas and tours can attract Korean tourists with Naver Blog, Naver Place, Korean reviews, website SEO and clear booking paths.",
    eyebrow: "Naver Strategy · Korean Tourists",
    h1: "How to attract Korean tourists with Naver in Vietnam",
    heroSub:
      "A strategy page for Vietnam tourism businesses that want to turn Naver into a Korean tourist acquisition channel, from search and reviews to messages and bookings.",
    heroCta: "Get a Naver strategy plan",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "To attract Korean tourists with Naver, you need to appear in the places they already trust: Naver Blog reviews, Naver Place results, Korean-language search content and clear booking pages. For Vietnam tourism businesses, the best strategy is not one isolated post, but a connected path from discovery to confidence to conversion.",
    sections: [
      {
        heading: "Step 1: Understand Korean search behavior",
        body:
          "Korean travelers often search by destination, category and review intent. They want practical information: location, price, photos, opening hours, how to book and whether other Korean visitors had a good experience.",
      },
      {
        heading: "Step 2: Build Naver trust assets",
        bullets: [
          "Use Naver Blog articles to explain real experiences in Korean.",
          "Use Korean blogger reviews when you need third-party trust quickly.",
          "Optimize Naver Place so location and business information are easier to understand.",
          "Keep your website fast, indexable and ready to receive Korean traffic.",
        ],
      },
      {
        heading: "Step 3: Convert traffic into bookings",
        body:
          "Every Naver touchpoint should lead somewhere useful: a hotel room page, restaurant menu, spa treatment page, tour booking page, Zalo, WhatsApp or reservation form. Without a clear next step, visibility becomes wasted attention.",
      },
    ],
    deliverables: {
      title: "What I help you build",
      items: [
        "Korean tourist search intent map for your business",
        "Naver Blog and blogger review campaign plan",
        "Naver Place optimization checklist",
        "Website landing page and booking path recommendations",
        "Internal linking strategy between Naver, Google Maps and your site",
        "Monthly content roadmap for Korean tourist demand",
      ],
    },
    whoFor: [
      "Vietnam tourism businesses targeting Korean visitors",
      "Hotels, restaurants, spas and tours",
      "Brands that need Korean reviews and clearer booking paths",
      "Owners unsure how to start Naver marketing",
    ],
    process: [
      { step: "Diagnose", detail: "Identify where Korean tourists currently discover or miss your business." },
      { step: "Prioritize", detail: "Choose the fastest Naver actions by industry, location and budget." },
      { step: "Build", detail: "Create Naver Blog, Place, review and website assets in the right order." },
      { step: "Improve", detail: "Review inquiries, content topics and conversion paths monthly." },
    ],
    priceFrom: "Free consultation for choosing a Naver direction",
    priceNote:
      "After the consultation, you can choose Naver Blogger Review, monthly Naver account management or Naver Place optimization depending on your goals.",
    faqs: [
      {
        q: "How do I attract Korean tourists with Naver?",
        a: "Start with Korean search intent, create Naver Blog review content, optimize Naver Place, use Korean bloggers when needed and connect all traffic to clear booking or contact pages.",
      },
      {
        q: "Which business types benefit most from Naver?",
        a: "Hotels, restaurants, spas, cafes, tours, cooking classes and local experiences that depend on Korean travelers usually benefit most.",
      },
      {
        q: "Do I need a Korean-language website?",
        a: "Not always at the start, but you need a trustworthy landing page and clear contact path. Korean content on Naver can bridge the language gap while your website supports conversion.",
      },
      {
        q: "Should I start with Naver Blog or Naver Place?",
        a: "If you need trust and reviews, start with Naver Blog or blogger reviews. If location discovery is weak, fix Naver Place early. Many businesses need both.",
      },
      {
        q: "How fast can Naver bring Korean leads?",
        a: "Blogger review campaigns can create faster trust signals, while owned Naver Blog and SEO work are better viewed as monthly assets that compound over time.",
      },
    ],
    related: [
      { label: "Naver or Google for Korean tourists", href: "/vi/naver-marketing/naver-vs-google", note: "Vietnamese comparison" },
      { label: "Naver Blog Marketing Vietnam", href: "/en/naver-marketing/naver-blog-marketing-vietnam", note: "Content strategy" },
      { label: "Korean blogger booking", href: "/vi/naver-marketing/booking-blogger-han", note: "Vietnamese review page" },
      { label: "Naver Marketing Hoi An", href: "/vi/naver-marketing/hoi-an", note: "Vietnamese local page" },
      { label: "How to attract Korean tourists to Hoi An", href: "/en/blog/attract-korean-tourists-hoi-an", note: "Blog guide" },
      { label: "What Korean tourists search for in Vietnam", href: "/en/blog/what-korean-tourists-search-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "How to attract Korean tourists with Naver in Vietnam" },
    ],
    schema: { serviceType: "Naver strategy for attracting Korean tourists" },
  },

  /* ───────────────────────── NAVER SEO LANDING — MAP RESTAURANTS ───────────────────────── */
  {
    path: "/en/naver-marketing/naver-map-optimization-restaurants-vietnam",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Naver Map Optimization Restaurants Vietnam", href: "/en/naver-marketing/naver-map-optimization-restaurants-vietnam" },
    ],
    primaryKeyword: "Naver Map optimization for restaurants in Vietnam",
    metaTitle: "Naver Map Optimization for Restaurants in Vietnam",
    metaDescription:
      "Naver Map optimization for restaurants in Vietnam targeting Korean diners: Naver Place setup, Korean menu signals, blog reviews, map trust and Google Maps alignment.",
    eyebrow: "Naver Map · Restaurants",
    h1: "Naver Map optimization for restaurants in Vietnam",
    heroSub:
      "Naver Place and Naver Map optimization for Vietnam restaurants that want Korean travelers to find them, understand the menu and choose to visit.",
    heroCta: "Get a restaurant Naver Map plan",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "For Korean diners in Vietnam, maps and blog reviews work together. Naver Map optimization for restaurants means making your place easier to understand in Korean: location, category, opening hours, menu highlights, photos, review content and links that help guests decide before they arrive.",
    sections: [
      {
        heading: "What Korean diners need before choosing a restaurant",
        bullets: [
          "Clear location and opening hours on a trusted map platform.",
          "Food photos, menu highlights and signature dishes they can understand.",
          "Korean-language blog reviews showing real dining experiences.",
          "Consistent information between Naver, website and Google Maps.",
        ],
      },
      {
        heading: "Naver Map, Naver Place and Naver Blog",
        body:
          "For restaurants, Naver Map discovery is closely connected with Naver Place information and Naver Blog content. A map profile without Korean context is weak; a blog review without accurate location details also loses conversion. The best setup connects both.",
      },
      {
        heading: "Restaurant optimization priorities",
        body:
          "The priority is to make the restaurant easy to trust and easy to visit: correct location, category clarity, Korean-friendly dish descriptions, strong photos, review articles and links to menu, booking, Zalo, WhatsApp or Google Maps.",
      },
    ],
    deliverables: {
      title: "Restaurant Naver Map optimization scope",
      items: [
        "Naver Place/Naver Map information audit",
        "Restaurant category, location and Korean intent checklist",
        "Menu and signature dish messaging for Korean diners",
        "Naver Blog review plan connected to map discovery",
        "Photo and content checklist for restaurant trust",
        "Alignment with website menu and Google Maps profile",
      ],
    },
    whoFor: [
      "Restaurants and cafes serving Korean tourists",
      "Vietnamese food, seafood, BBQ and local specialty restaurants",
      "New restaurants needing Korean visibility",
      "Restaurants in Hội An, Đà Nẵng and Vietnam tourism areas",
    ],
    process: [
      { step: "Audit", detail: "Check existing Naver, Google Maps, website, menu and Korean review signals." },
      { step: "Optimize", detail: "Improve place information, content direction, photos and Korean-friendly messaging." },
      { step: "Review", detail: "Add Naver Blog or blogger review content to support map discovery." },
      { step: "Align", detail: "Connect Naver Map, website menu, Google Maps and contact/booking channels." },
    ],
    priceFrom: "From 8,000,000 VND / 4 review posts",
    priceNote:
      "You can run Naver Place/Naver Map optimization alone or combine it with Naver Blogger Review for restaurant trust.",
    faqs: [
      {
        q: "What is Naver Map optimization for restaurants?",
        a: "It is the process of improving restaurant visibility and trust for Korean users through Naver Place information, map signals, Korean content, blog reviews and consistent links.",
      },
      {
        q: "Is Naver Map the same as Naver Place?",
        a: "They are closely connected. Naver Place is the business profile information, while Naver Map is how users discover and navigate to places. Restaurants should optimize both together.",
      },
      {
        q: "Do restaurants in Vietnam need Naver if they already have Google Maps?",
        a: "If Korean tourists are an important customer group, yes. Google Maps is still important, but many Korean diners use Naver content and map behavior before choosing a restaurant.",
      },
      {
        q: "Can Naver Blog reviews help Naver Map performance?",
        a: "They can support trust and discovery because blog reviews give Korean users real dining context, photos and reasons to visit the restaurant.",
      },
      {
        q: "What should a restaurant prepare?",
        a: "Prepare menu, signature dishes, opening hours, address, high-quality photos, booking/contact links and any Korean-friendly details such as spice level or dietary notes.",
      },
    ],
    related: [
      { label: "Naver for restaurants", href: "/vi/naver-marketing/cho-nha-hang", note: "Vietnamese industry page" },
      { label: "Naver Place optimization", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Vietnamese service page" },
      { label: "Restaurant website design", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Menu and booking" },
      { label: "Google Maps for restaurants", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Vietnamese local SEO page" },
      { label: "Naver Marketing Vietnam guide", href: "/en/blog/naver-marketing-vietnam-guide", note: "Blog guide" },
      { label: "Attract Korean tourists to Hoi An", href: "/en/blog/attract-korean-tourists-hoi-an", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/restaurant.webp", alt: "Naver Map optimization for restaurants in Vietnam" },
    ],
    schema: { serviceType: "Naver Map optimization for restaurants in Vietnam", offerMinPriceVnd: 8000000 },
  },

  /* ───────────────────────── SOCIAL SPOKE — THREADS GROWTH ───────────────────────── */
  {
    path: "/vi/social-marketing/threads-growth",
    cluster: "social",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Social Marketing", href: "/vi/social-marketing" },
      { label: "Threads Growth", href: "/vi/social-marketing/threads-growth" },
    ],
    primaryKeyword: "phát triển kênh Threads cho doanh nghiệp",
    metaTitle: "Threads Growth — phát triển kênh Threads cho doanh nghiệp | Công Thiên Agency",
    metaDescription:
      "Dịch vụ phát triển kênh Threads cho doanh nghiệp dịch vụ – du lịch tại Hội An – Đà Nẵng: nội dung thật, định vị thương hiệu, kết hợp Instagram. Kết quả phụ thuộc thuật toán Meta, không cam kết viral.",
    eyebrow: "Social · Threads Growth",
    h1: "Threads Growth — phát triển kênh Threads cho doanh nghiệp dịch vụ – du lịch",
    heroSub:
      "Threads là kênh social mới của Meta, kết nối trực tiếp với Instagram. Tôi giúp doanh nghiệp Hội An – Đà Nẵng khởi động và phát triển kênh Threads bằng nội dung thật, định vị thương hiệu sớm trước khi nền tảng bão hòa.",
    heroCta: "Nhận tư vấn Threads qua Zalo",
    intro:
      "Threads là mạng xã hội text-first do Meta phát hành tháng 7/2023, tích hợp đăng nhập bằng Instagram và đang được Adam Mosseri (CEO Instagram) định vị là đối thủ trực tiếp của X (trước đây là Twitter). Với doanh nghiệp dịch vụ – du lịch, Threads mở ra cơ hội tiếp cận tệp khách Gen Z và khách quốc tế ở giai đoạn early-mover, khi cạnh tranh từ khoá còn thấp. Congthienagency.com hỗ trợ bạn xây kênh Threads bài bản — nội dung thật, định vị thương hiệu rõ ràng — thay vì chạy theo trend ngắn hạn.",
    sections: [
      {
        heading: "Vì sao doanh nghiệp nên đầu tư Threads ngay bây giờ?",
        bullets: [
          "Threads vượt 100 triệu user trong 5 ngày đầu (theo Meta công bố) và tiếp tục tăng trưởng — tệp khách Gen Z và khách quốc tế đang dịch chuyển sang đây.",
          "Cạnh tranh nội dung Việt còn thấp: dễ chiếm “share of voice” trong ngành du lịch Hội An – Đà Nẵng.",
          "Tích hợp sâu với Instagram: 1 tài khoản, 2 kênh — tận dụng follower Instagram hiện có để khởi động kênh Threads.",
          "Định dạng text-first phù hợp kể chuyện thương hiệu — điều mà Reels và TikTok khó truyền tải.",
        ],
      },
      {
        heading: "Dịch vụ Threads Growth gồm những gì?",
        body:
          "Tôi rà soát hiện trạng tài khoản Instagram liên kết, lên định hướng nội dung Threads phù hợp ngành nghề (spa, nhà hàng, cooking class, khách sạn, tour) và triển khai đăng định kỳ. Nội dung tập trung kể chuyện thương hiệu, chia sẻ behind-the-scenes, tương tác với cộng đồng — không spam quảng cáo. Mục tiêu là một kênh đáng tin giúp khách tăng niềm tin trước khi booking, không phải chỉ số follower ảo.",
      },
      {
        heading: "Cách tiếp cận bền vững cho Threads",
        body:
          "Khác với Facebook hay Instagram đã bão hòa, Threads thưởng cho nội dung có cá tính, tương tác chân thật và đăng đều. Tôi xây kế hoạch nội dung 30–60 ngày, kết hợp 3 dạng bài: kể chuyện thương hiệu (40%), giá trị thực tế cho khách (40%) và tương tác cộng đồng (20%). Mọi bài đều dùng tài khoản chính chủ, không buff, không bot.",
      },
      {
        heading: "Kết hợp Threads với hệ thống marketing hiện có",
        bodyParts: [
          { type: "text", text: "Threads hiệu quả nhất khi đi cùng " },
          { type: "link", text: "Fanpage chuyên nghiệp", href: "/vi/social-marketing/xac-minh-fanpage" },
          { type: "text", text: ", " },
          { type: "link", text: "Social Growth Package", href: "/vi/social-marketing/tang-truong-kenh" },
          { type: "text", text: " và website doanh nghiệp đồng bộ thương hiệu. Tôi có thể triển khai trọn gói để mọi điểm chạm — Threads, Instagram, Fanpage, Google Maps, website — đều củng cố niềm tin khách trước khi đặt dịch vụ." },
        ],
      },
      {
        heading: "Minh bạch về kỳ vọng",
        body:
          "Threads vẫn là nền tảng mới, thuật toán Meta thay đổi liên tục và lượt tiếp cận từng bài không ổn định như Instagram. Tôi không hứa “triệu view” hay “viral”. Cam kết của tôi là chiến lược nội dung đúng định vị, tài khoản an toàn và sự nhất quán dài hạn — vì đó là cách bền vững để kênh sống lâu trên bất kỳ mạng xã hội nào.",
      },
    ],
    whoFor: [
      "Spa, nhà hàng, khách sạn, cooking class, tour tại Hội An – Đà Nẵng muốn đón đầu kênh Threads",
      "Doanh nghiệp đã có Instagram, muốn mở rộng sang Threads tận dụng follower hiện có",
      "Thương hiệu tập trung khách Gen Z và khách quốc tế",
      "Doanh nghiệp muốn định vị thương hiệu sớm khi Threads chưa bão hòa",
    ],
    process: [
      { step: "Đánh giá", detail: "Rà soát tài khoản Instagram liên kết và định vị thương hiệu hiện tại." },
      { step: "Kế hoạch", detail: "Xây kế hoạch nội dung Threads 30–60 ngày phù hợp ngành nghề." },
      { step: "Triển khai", detail: "Đăng nội dung định kỳ, tương tác cộng đồng, theo dõi engagement thật." },
      { step: "Tối ưu", detail: "Báo cáo hàng tháng và điều chỉnh nội dung theo phản hồi thực tế." },
    ],
    priceFrom: "Từ 4.000.000đ / tháng",
    priceNote: "Báo giá tuỳ tần suất đăng và mức độ kết hợp Instagram. Kết quả tiếp cận phụ thuộc thuật toán Meta, không cam kết viral.",
    faqs: [
      {
        q: "Threads có thật sự đáng đầu tư cho doanh nghiệp tại Việt Nam không?",
        a: "Có, nếu bạn nhắm tệp Gen Z hoặc khách quốc tế. Threads đã vượt 100 triệu user toàn cầu và tích hợp sâu với Instagram, nên doanh nghiệp đã có Instagram chỉ tốn thêm chi phí nội dung, không cần xây kênh từ con số 0.",
      },
      {
        q: "Cần đã có Instagram mới làm Threads được không?",
        a: "Phải có tài khoản Instagram, vì Threads dùng chung tài khoản. Nếu chưa có Instagram, tôi sẽ thiết lập đồng thời cả hai trong gói triển khai.",
      },
      {
        q: "Dịch vụ có cam kết bao nhiêu follower hay view không?",
        a: "Không. Threads thưởng cho nội dung chân thật và đăng đều, nhưng thuật toán Meta thay đổi liên tục nên tôi không hứa con số cụ thể. Cam kết của tôi là chiến lược nội dung đúng và tài khoản an toàn.",
      },
      {
        q: "Có dùng buff follow / bot không?",
        a: "Không. Toàn bộ nội dung và tương tác đều bằng tài khoản chính chủ. Buff trên Threads rất rủi ro vì Meta phát hiện và hạn chế tài khoản nhanh chóng.",
      },
      {
        q: "Chi phí bắt đầu từ bao nhiêu?",
        a: "Từ 4.000.000đ/tháng cho gói nội dung định kỳ. Báo giá cuối tuỳ tần suất đăng (3–7 bài/tuần) và mức độ kết hợp Instagram.",
      },
      {
        q: "Tôi có thể tự làm Threads thay vì thuê agency không?",
        a: "Hoàn toàn có thể, đặc biệt nếu chủ doanh nghiệp am hiểu thương hiệu và có thời gian. Dịch vụ phù hợp với bạn nếu cần đăng đều, không có nhân sự content riêng, hoặc muốn lộ trình bài bản từ ngày đầu.",
      },
    ],
    related: [
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Trang dịch vụ tổng quan" },
      { label: "Social Growth Package", href: "/vi/social-marketing/tang-truong-kenh", note: "Dịch vụ liên quan" },
      { label: "Hỗ trợ xác minh Fanpage", href: "/vi/social-marketing/xac-minh-fanpage", note: "Dịch vụ liên quan" },
      { label: "Threads là gì, doanh nghiệp có nên đầu tư?", href: "/vi/blog/threads-la-gi-doanh-nghiep-co-nen-dau-tu", note: "Blog" },
      { label: "Cách xây kênh Threads cho doanh nghiệp dịch vụ", href: "/vi/blog/cach-xay-kenh-threads-cho-doanh-nghiep-dich-vu", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/threads-growth.webp", alt: "Phát triển kênh Threads cho doanh nghiệp dịch vụ du lịch" },
    ],
    schema: { serviceType: "Threads Growth Service", offerMinPriceVnd: 4000000 },
  },


  /* ───────────────────────── WEBSITE SPOKE — LANDING PAGE CHIẾN DỊCH ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/landing-page-chien-dich",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      { label: "Landing page chiến dịch", href: "/vi/thiet-ke-website/landing-page-chien-dich" },
    ],
    primaryKeyword: "thiết kế landing page chiến dịch",
    metaTitle: "Thiết kế landing page chiến dịch chuyển đổi cao | Công Thiên Agency",
    metaDescription:
      "Thiết kế landing page cho chiến dịch quảng cáo, ra mắt sản phẩm, sự kiện mùa cao điểm tại Hội An – Đà Nẵng. Tốc độ tải dưới 2 giây, tối ưu chuyển đổi, không cần CMS phức tạp.",
    eyebrow: "Website · Landing page",
    h1: "Thiết kế landing page chiến dịch — tối ưu chuyển đổi, không lãng phí ngân sách ads",
    heroSub:
      "Landing page là vũ khí chuyên dụng cho chiến dịch quảng cáo và ra mắt mùa cao điểm. Tôi xây trang đơn nhanh dưới 2 giây, mỗi yếu tố đều có lý do — để mỗi đồng ads của bạn không chảy vào một website chậm và rối.",
    heroCta: "Nhận tư vấn landing page qua Zalo",
    intro:
      "Một website đầy đủ phù hợp với doanh nghiệp dài hạn, nhưng landing page là lựa chọn đúng cho chiến dịch ngắn: ra mắt tour mới, ưu đãi mùa cao điểm, khuyến mãi Tết, sự kiện booking. Congthienagency.com thiết kế landing page độc lập, tốc độ cao, đo lường được, để mỗi đồng ngân sách quảng cáo chạy về Google Ads, Meta Ads hay Naver đều có cơ hội chuyển đổi tốt nhất.",
    sections: [
      {
        heading: "Khi nào doanh nghiệp cần landing page riêng?",
        bullets: [
          "Chạy quảng cáo Google Ads, Meta Ads, Naver — cần trang đáp đúng từ khoá tìm kiếm.",
          "Ra mắt dịch vụ mới, tour mới, gói combo mùa cao điểm cần test thị trường nhanh.",
          "Sự kiện đơn lẻ: workshop, retreat, cooking class theo lứa, không cần CMS dài hạn.",
          "Cần chuyển đổi cao hơn (booking, để lại số) hơn là giới thiệu chung chung.",
        ],
      },
      {
        heading: "Landing page khác website thông thường ở điểm nào?",
        body:
          "Website có nhiều trang, nhiều menu, phục vụ nhiều mục đích. Landing page chỉ có một mục tiêu duy nhất — khách đặt lịch, để lại số điện thoại hoặc thanh toán. Mọi chữ, mọi nút, mọi hình ảnh đều phục vụ mục tiêu đó. Không có menu đi lạc, không có blog, không có link ra ngoài.",
      },
      {
        heading: "Cấu trúc landing page tôi áp dụng",
        bodyParts: [
          { type: "text", text: "Tôi xây landing page theo cấu trúc đã chứng minh hiệu quả: hero section (đề xuất giá trị + CTA), social proof, chi tiết gói, FAQ giải đáp lo lắng, CTA cuối. Trang đạt PageSpeed 95+ trên mobile, có schema Offer/Event để xuất hiện rich result trên Google. Tham khảo ví dụ thực tế tại " },
          { type: "link", text: "dự án Serena Retreat", href: "/vi/du-an/serena-retreat" },
          { type: "text", text: " — một spa có cả website đầy đủ lẫn landing page mùa cao điểm." },
        ],
      },
      {
        heading: "Kết hợp landing page với hệ thống marketing hiện có",
        bodyParts: [
          { type: "text", text: "Landing page hiệu quả nhất khi đi cùng " },
          { type: "link", text: "website chính của doanh nghiệp", href: "/vi/thiet-ke-website" },
          { type: "text", text: ", " },
          { type: "link", text: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
          { type: "text", text: " và Fanpage. Khách thấy quảng cáo → vào landing page → quyết định nhanh → nếu cần tìm hiểu thêm có thể về website chính. Tôi có thể triển khai trọn gói." },
        ],
      },
      {
        heading: "Minh bạch về kết quả",
        body:
          "Tôi không cam kết tỉ lệ chuyển đổi cụ thể — vì còn phụ thuộc chất lượng ads, giá dịch vụ, mùa và đối thủ. Cam kết của tôi là kỹ thuật chuẩn: tốc độ tải <2s, schema đúng, đo lường đúng qua Google Tag Manager / Meta Pixel, A/B test dễ. Phần còn lại là chất lượng chiến dịch của bạn.",
      },
    ],
    whoFor: [
      "Doanh nghiệp chạy Google Ads, Meta Ads, Naver Ads tại Hội An – Đà Nẵng",
      "Spa, nhà hàng, cooking class ra mắt tour/khoá học mới",
      "Khách sạn, homestay cần trang riêng cho ưu đãi mùa cao điểm",
      "Sự kiện đơn lẻ: workshop, retreat, hội thảo",
    ],
    process: [
      { step: "Brief", detail: "Trao đổi mục tiêu chiến dịch, tệp khách và ngân sách ads." },
      { step: "Wireframe", detail: "Phác thảo cấu trúc trang và message chính trong 2 ngày." },
      { step: "Thiết kế", detail: "Giao diện riêng theo thương hiệu và tốc độ tải." },
      { step: "Bàn giao", detail: "Tích hợp Tag Manager, Pixel, schema; bàn giao truy cập đầy đủ." },
    ],
    priceFrom: "Từ 6.000.000đ / landing page",
    priceNote: "Báo giá tuỳ độ phức tạp tích hợp (form booking, thanh toán, tracking). Tốc độ tải <2s là cam kết kỹ thuật.",
    faqs: [
      {
        q: "Landing page có thay được website chính không?",
        a: "Không. Landing page chỉ phục vụ một mục tiêu (chuyển đổi từ ads), không thay thế website đầy đủ. Doanh nghiệp dài hạn vẫn cần cả hai.",
      },
      {
        q: "Bao lâu thì hoàn thành một landing page?",
        a: "Trung bình 7–10 ngày từ lúc chốt brief đến lúc live. Nếu tích hợp thanh toán hoặc form phức tạp, có thể 12–14 ngày.",
      },
      {
        q: "Có hỗ trợ A/B test không?",
        a: "Có. Tôi tích hợp Google Optimize hoặc giải pháp tương tự để bạn test 2 phiên bản tiêu đề/CTA/hình ảnh, ra quyết định dựa trên dữ liệu.",
      },
      {
        q: "Tốc độ <2 giây có ý nghĩa gì với ads?",
        a: "Mỗi giây tăng thêm có thể làm tỉ lệ thoát tăng 10–30%. Trang nhanh giảm chi phí mỗi chuyển đổi và tăng điểm chất lượng quảng cáo Google.",
      },
      {
        q: "Sau chiến dịch có thể tái sử dụng landing page không?",
        a: "Có. Landing page được code module hoá, bạn có thể nhân bản cho chiến dịch mới, đổi nội dung và ảnh trong vài giờ.",
      },
      {
        q: "Tôi có thể tự chỉnh sửa nội dung không?",
        a: "Có. Bạn được bàn giao bảng quản trị nội dung đơn giản để đổi text, ảnh và CTA mà không cần code.",
      },
    ],
    related: [
      { label: "Thiết kế website", href: "/vi/thiet-ke-website", note: "Trang dịch vụ trụ cột" },
      { label: "Website booking online", href: "/vi/thiet-ke-website/website-booking-online", note: "Dịch vụ liên quan" },
      { label: "Landing page là gì, khi nào cần", href: "/vi/blog/landing-page-la-gi-khi-nao-doanh-nghiep-can", note: "Blog" },
      { label: "PageSpeed SEO 100/100 nghĩa là gì", href: "/vi/blog/pagespeed-seo-100-nghia-la-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/landing-page-chien-dich.webp", alt: "Thiết kế landing page chiến dịch tối ưu chuyển đổi" },
    ],
    schema: { serviceType: "Landing Page Design", offerMinPriceVnd: 6000000 },
  },

  /* ───────────────────────── WEBSITE SPOKE — WEBSITE CAFE/BAR HỘI AN ───────────────────────── */
  {
    path: "/vi/thiet-ke-website/website-cafe-bar-hoi-an",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Thiết kế website", href: "/vi/thiet-ke-website" },
      { label: "Website café & bar Hội An", href: "/vi/thiet-ke-website/website-cafe-bar-hoi-an" },
    ],
    primaryKeyword: "thiết kế website café bar Hội An",
    metaTitle: "Thiết kế website café & bar Hội An concept đẹp | Công Thiên Agency",
    metaDescription:
      "Thiết kế website cho café concept, bar, rooftop tại Hội An – Đà Nẵng. Bộ ảnh không gian, menu PDF nhanh, đặt bàn online, tích hợp Google Maps và Instagram.",
    eyebrow: "Website · Café & Bar",
    h1: "Thiết kế website café & bar tại Hội An — bộ mặt số cho concept thật",
    heroSub:
      "Khách đến café không vì menu, mà vì không khí và câu chuyện. Tôi xây website giúp khách cảm nhận được điều đó trước khi đẩy cửa bước vào — kết hợp ảnh chất lượng cao, đặt bàn online và liên kết Google Maps.",
    heroCta: "Nhận tư vấn website café qua Zalo",
    intro:
      "Café concept và bar tại Hội An – Đà Nẵng phụ thuộc rất nhiều vào không khí: ánh sáng, decor, playlist, chỗ ngồi yêu thích. Một website tốt không chỉ liệt kê menu — nó truyền tải được \"vibe\" để khách Hàn, khách phương Tây và khách Việt thấy ngay đây là chỗ họ muốn đến. Congthienagency.com thiết kế website café với bộ ảnh chuyên nghiệp, menu PDF tải nhanh và tính năng đặt bàn online — tất cả tích hợp Google Maps và Instagram.",
    sections: [
      {
        heading: "Vì sao café concept cần website riêng?",
        bullets: [
          "Khách quốc tế tin website chính chủ hơn Fanpage — đặc biệt khách Hàn, Nhật, châu Âu.",
          "Menu cập nhật nhanh, không bị giới hạn font/định dạng như khi đăng ảnh Facebook.",
          "Tích hợp đặt bàn online — quan trọng vào weekend và mùa cao điểm.",
          "Website mạnh hỗ trợ Google Maps lên top khi khách tìm \"café Hội An\".",
        ],
      },
      {
        heading: "Mục đích duy nhất: làm khách quyết định đến trong 90 giây",
        body:
          "Khách café không đọc trang giới thiệu dài — họ scroll nhanh qua ảnh, đọc menu, kiểm tra giờ mở cửa và bấm chỉ đường. Tôi thiết kế website tối ưu cho hành vi đó: ảnh hero load instant, menu accessible trong 2 click, nút \"Chỉ đường\" và \"Đặt bàn\" luôn nổi.",
      },
      {
        heading: "Bộ tính năng tiêu chuẩn cho café & bar",
        bullets: [
          "Trang chủ với bộ ảnh không gian chất lượng cao và caption gợi cảm xúc.",
          "Trang menu có ảnh từng món, giá và mô tả ngắn — hỗ trợ song ngữ Việt – Anh.",
          "Tính năng đặt bàn online tích hợp lịch (có thể kết nối Google Calendar).",
          "Trang sự kiện / live music / workshop cho café concept.",
          "Tích hợp Instagram feed để khách thấy không khí mới nhất.",
          "Link Google Maps, Zalo, số điện thoại — bấm là gọi/chỉ đường ngay.",
        ],
      },
      {
        heading: "Kết hợp với Google Maps và Social",
        bodyParts: [
          { type: "text", text: "Website café hiệu quả nhất khi đi cùng " },
          { type: "link", text: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
          { type: "text", text: " và " },
          { type: "link", text: "Social Marketing", href: "/vi/social-marketing" },
          { type: "text", text: " — vì khách thường tìm trên Google Maps trước, vào Instagram check vibe, rồi mới vào website xem menu chi tiết. Ba kênh cùng đồng bộ thương hiệu tạo hiệu ứng kép." },
        ],
      },
      {
        heading: "Minh bạch về thời gian và chi phí",
        body:
          "Một website café tốt cần ít nhất 4–6 tuần: 1 tuần brief, 1 tuần chụp ảnh, 2–3 tuần thiết kế và phát triển, 1 tuần test và bàn giao. Tôi không nhận làm \"gấp 7 ngày\" vì chất lượng ảnh và copywriting cần thời gian. Báo giá rõ ràng trước khi bắt đầu, không phát sinh.",
      },
    ],
    whoFor: [
      "Café concept, café specialty tại Hội An – Đà Nẵng",
      "Bar, rooftop, cocktail lounge phục vụ khách quốc tế",
      "Café kết hợp cooking class, workshop, sự kiện",
      "Chuỗi 2–3 chi nhánh café cần website thương hiệu chung",
    ],
    process: [
      { step: "Brief", detail: "Khảo sát concept, tệp khách, mục tiêu kinh doanh." },
      { step: "Chụp ảnh", detail: "Đề xuất chụp ảnh chuyên nghiệp (có thể giới thiệu studio đối tác)." },
      { step: "Thiết kế", detail: "Giao diện riêng truyền tải vibe quán." },
      { step: "Bàn giao", detail: "Đặt bàn online, Google Maps, Instagram feed, hướng dẫn quản trị." },
    ],
    priceFrom: "Từ 12.000.000đ / website",
    priceNote: "Giá không gồm chi phí chụp ảnh chuyên nghiệp (nếu cần). Báo giá cuối tuỳ số trang menu và tính năng đặt bàn.",
    faqs: [
      {
        q: "Café nhỏ có cần website không hay chỉ Fanpage là đủ?",
        a: "Nếu khách chính là người Việt đi qua đường thì Fanpage + Google Maps đủ. Nếu phục vụ khách quốc tế thì cần website — vì khách Hàn, Nhật, châu Âu kiểm tra website trước khi quyết định ghé.",
      },
      {
        q: "Có cần đặt bàn online cho café không?",
        a: "Không bắt buộc, nhưng rất nên có nếu café đông vào weekend hoặc có khu vực hot (rooftop, bar). Đặt bàn online giảm tỉ lệ khách bỏ đi vì hết chỗ.",
      },
      {
        q: "Website có hiển thị menu tiếng Hàn được không?",
        a: "Có. Tôi hỗ trợ đa ngôn ngữ (Việt, Anh, Hàn) với menu PDF song song hoặc menu HTML chuyển ngữ. Tham khảo thêm dịch vụ website đa ngôn ngữ.",
      },
      {
        q: "Có giúp chụp ảnh quán không?",
        a: "Tôi không trực tiếp chụp, nhưng giới thiệu studio đối tác chuyên về food/space tại Hội An. Bạn cũng có thể dùng ảnh sẵn có nếu chất lượng đủ tốt.",
      },
      {
        q: "Có tích hợp Google Maps để khách chỉ đường được không?",
        a: "Có. Mọi website đều có nút \"Chỉ đường\" mở trực tiếp Google Maps, kèm địa chỉ, giờ mở cửa, số điện thoại — đồng bộ với Google Business Profile của quán.",
      },
      {
        q: "Sau khi bàn giao tôi có thể tự đổi menu không?",
        a: "Có. Bạn được bàn giao bảng quản trị đơn giản để đổi món, giá, ảnh menu mà không cần code. Hướng dẫn video kèm theo.",
      },
    ],
    related: [
      { label: "Thiết kế website", href: "/vi/thiet-ke-website", note: "Trang dịch vụ trụ cột" },
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Dịch vụ liên quan" },
      { label: "Website đa ngôn ngữ", href: "/vi/thiet-ke-website/website-da-ngon-ngu", note: "Dịch vụ liên quan" },
      { label: "Google Maps cho nhà hàng", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Dịch vụ liên quan" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/website-cafe-bar-hoi-an.webp", alt: "Thiết kế website café concept tại Hội An Đà Nẵng" },
    ],
    schema: { serviceType: "Website Design for Cafe and Bar", offerMinPriceVnd: 12000000 },
  },

  /* ───────────────── EN: Naver Blog English ───────────────── */
  {
    path: "/en/naver-marketing/naver-blog-english",
    lastModified: "2026-06-18",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Naver Blog English", href: "/en/naver-marketing/naver-blog-english" },
    ],
    primaryKeyword: "Naver Blog English",
    metaTitle: "Naver Blog English: Guide & Marketing Support for Vietnam Brands",
    metaDescription:
      "Is Naver Blog available in English? A clear guide for non-Korean readers — interface language, English content options on Naver Blog and how Vietnam brands work around it.",
    eyebrow: "Naver Blog · English",
    h1: "Naver Blog in English: what works, what doesn't",
    heroSub:
      "Naver Blog is a Korean platform with no official English interface. This page explains how English speakers read, write and use Naver Blog — and how Vietnam brands publish content that reaches Korean travelers.",
    heroCta: "Talk to a Naver content lead",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Many people search for 'Naver Blog English' to know whether Naver Blog has an English version, whether English posts work on Naver, or how to read Korean blog content as a non-Korean reader. The short answer: Naver Blog is built for the Korean market and does not have a real English UI. But there are still ways to publish English content, translate Korean posts, and use Naver Blog as a marketing channel for Vietnam tourism brands.",
    sections: [
      {
        heading: "Is Naver Blog available in English?",
        body:
          "Naver Blog does not offer an official English interface. The dashboard, menu, comment system and search results are in Korean. Browser translation (Chrome, Edge, Safari) can translate posts, but the writing experience and discovery are still Korean-first.",
      },
      {
        heading: "Can you write Naver Blog posts in English?",
        bullets: [
          "Yes — Naver accepts English text in posts, but Korean users mostly search in Korean.",
          "English-only posts rarely rank for Korean travel queries.",
          "The most effective pattern is Korean primary content with an English summary section for global readers.",
          "Bilingual posts can support brand pages, press releases or international team profiles.",
        ],
      },
      {
        heading: "How English-speaking brands use Naver Blog for Vietnam tourism",
        body:
          "Vietnam hotels, tours, spas and restaurants that target Korean guests usually publish in Korean. The English-speaking owner or marketing manager works with a Korean writer or partner agency, reviews briefs in English, and approves Korean drafts before publishing on Naver Blog.",
      },
      {
        heading: "Reading Naver Blog content as an English speaker",
        bullets: [
          "Open the post in Chrome or Edge and use the built-in translate option.",
          "Use Papago (Naver's translation tool) for more natural Korean → English results.",
          "Check the original photos, prices and locations — they are universal even when text is Korean.",
          "Note that Korean review tone is often softer and more story-driven than English reviews.",
        ],
      },
      {
        heading: "When English content on Naver Blog actually helps",
        body:
          "English content on Naver Blog is useful for global PR, investor pages, English-speaking expat audiences in Korea and bilingual brand storytelling. It is not the right channel if your goal is Korean tourist acquisition — for that, Korean-language Naver Blog content remains the standard.",
      },
    ],
    deliverables: {
      title: "What we help with",
      items: [
        "Naver Blog content strategy for non-Korean speaking owners",
        "Korean writing briefs and translation review in English",
        "Bilingual Naver Blog post structure",
        "Korean keyword research with English explanations",
        "English summaries for Korean-first posts",
        "Coordination between English-speaking brand team and Korean writers",
      ],
    },
    whoFor: [
      "Vietnam hotels, tours and F&B brands run by English-speaking owners",
      "International marketing managers handling Korean-speaking markets",
      "Brands needing bilingual Naver Blog content",
      "Teams who want to read and approve Korean drafts before publishing",
    ],
    process: [
      { step: "Audit", detail: "Review current Naver presence and clarify what English content is needed." },
      { step: "Brief", detail: "Build content briefs in English with Korean keyword targets." },
      { step: "Write", detail: "Korean writer drafts the post; English summary is added when needed." },
      { step: "Review", detail: "Brand team reviews English brief + translation before publish." },
      { step: "Publish", detail: "Post on Naver Blog, track Korean search performance and iterate." },
    ],
    priceFrom: "From 8,000,000 VND / 4 posts",
    priceNote:
      "Pricing depends on translation depth, number of posts and whether English summaries or bilingual versions are required.",
    faqs: [
      {
        q: "Does Naver Blog have an English version?",
        a: "No. Naver Blog is built entirely for the Korean market. The dashboard, editor, search index and comment system are all in Korean. There is no language toggle or official English UI. English speakers can use browser translation tools to read posts, but the publishing and discovery experience remains Korean-first.",
      },
      {
        q: "Can I write Naver Blog posts entirely in English?",
        a: "Technically yes — Naver accepts English text inside blog posts. However, Korean users search in Korean, so English-only posts get almost no organic traffic from Naver search. English posts are useful for brand pages, press releases or expat-facing content, but not for Korean tourist acquisition.",
      },
      {
        q: "How can I read Korean Naver Blog posts as an English speaker?",
        a: "The fastest method is opening the post in Chrome or Edge and using the built-in page translation feature. For higher-quality Korean-to-English translation, use Naver's own Papago translator at papago.naver.com. Photos, prices and location details in posts are universal and readable regardless of language.",
      },
      {
        q: "Should Vietnam brands write Naver Blog content in English?",
        a: "Only if the goal is bilingual PR, investor communication or reaching English-speaking expats in Korea. For the primary goal of attracting Korean tourists to Vietnam hotels, restaurants, spas and tours, Korean-language Naver Blog content is the standard and performs significantly better in Naver search results.",
      },
      {
        q: "Can your team handle the Korean writing for us?",
        a: "Yes. Công Thiên Agency briefs content in English so your team understands the direction, then Korean writers produce the final post. You review an English summary or translation before we publish. This workflow lets non-Korean-speaking brand owners maintain quality control over their Naver Blog presence.",
      },
      {
        q: "What is Papago and how does it help with Naver Blog?",
        a: "Papago is Naver's own AI translation service, available at papago.naver.com. It handles Korean-English translation more naturally than Google Translate because it is trained on Korean language patterns. English-speaking brand managers can use Papago to review Korean draft posts before approving them for publication on Naver Blog.",
      },
      {
        q: "Is bilingual content on Naver Blog effective for SEO?",
        a: "Bilingual posts (Korean primary with an English summary section) do not harm Naver SEO and can help brand credibility with international audiences. However, the Korean portion is what drives Naver search ranking. The English section serves readers who land on the post via direct link, social share or browser translation.",
      },
      {
        q: "How long does it take to see results from Naver Blog marketing?",
        a: "Korean influencer blog reviews can generate traffic within 2–4 weeks of publishing. Brand-owned Naver Blog accounts building organic authority typically need 3–6 months of consistent posting to see meaningful search visibility. The timeline depends on competition in your category, city and keyword targets.",
      },
      {
        q: "Do I need a Korean phone number to create a Naver Blog?",
        a: "Creating a Naver account used to require Korean phone verification, but Naver now allows sign-up with international email for basic accounts. However, some features and trust signals are tied to Korean-verified accounts. Công Thiên Agency can set up and manage the Naver Blog account on your behalf.",
      },
      {
        q: "How is Naver Blog different from a regular website blog?",
        a: "A regular website blog lives on your own domain and is indexed by Google. A Naver Blog lives on blog.naver.com and is indexed by Naver's own search engine. For Korean travelers, Naver search is the starting point — not Google. Publishing on Naver Blog puts your content where Korean users actually search, read and trust reviews.",
      },
    ],
    related: [
      { label: "Naver Blog Marketing Vietnam", href: "/en/naver-marketing/naver-blog-marketing-vietnam", note: "Korean content marketing" },
      { label: "Naver Marketing Agency Vietnam", href: "/en/naver-marketing/naver-marketing-agency-vietnam", note: "Full-funnel Naver" },
      { label: "Attract Korean Tourists with Naver", href: "/en/naver-marketing/attract-korean-tourists-with-naver", note: "Tourism playbook" },
      { label: "Naver Blogs overview", href: "/en/naver-marketing/naver-blogs", note: "Platform overview" },
      { label: "Naver Blog official", href: "https://blog.naver.com", note: "External · Naver Blog platform" },
      { label: "Naver Blog reviews guide", href: "/en/blog/naver-blog-reviews-guide", note: "Blog guide" },
      { label: "Papago translator", href: "https://papago.naver.com", note: "External · Naver translation tool" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver Blog English guide for Vietnam brands" },
    ],
    schema: { serviceType: "Naver Blog English content strategy", offerPriceVnd: 8000000 },
  },

  /* ───────────────── VI: Naver Blog tiếng Anh ───────────────── */
  {
    path: "/vi/naver-marketing/naver-blog-tieng-anh",
    lastModified: "2026-06-18",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ", href: "/vi/dich-vu" },
      { label: "Naver Blog tiếng Anh", href: "/vi/naver-marketing/naver-blog-tieng-anh" },
    ],
    primaryKeyword: "Naver Blog tiếng Anh",
    metaTitle: "Naver Blog tiếng Anh: hướng dẫn & viết bài cho khách quốc tế",
    metaDescription:
      "Naver Blog có bản tiếng Anh không, viết bài tiếng Anh trên Naver Blog có hiệu quả không, và cách thương hiệu Việt Nam tiếp cận người Hàn khi chủ doanh nghiệp không biết tiếng Hàn.",
    eyebrow: "Naver Blog · Tiếng Anh",
    h1: "Naver Blog tiếng Anh: dùng được không và dùng thế nào",
    heroSub:
      "Naver Blog là nền tảng Hàn Quốc, không có giao diện tiếng Anh chính thức. Bài viết này giải thích rõ Naver Blog tiếng Anh hoạt động ra sao, đọc và viết kiểu gì, và doanh nghiệp Việt Nam nên xử lý nội dung Naver thế nào khi chủ thương hiệu không biết tiếng Hàn.",
    heroCta: "Tư vấn nội dung Naver",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Rất nhiều người tìm 'Naver Blog tiếng Anh' để biết Naver Blog có bản tiếng Anh không, viết bài tiếng Anh trên Naver có lên top được không, hoặc làm sao đọc bài blog tiếng Hàn khi mình không biết tiếng Hàn. Câu trả lời ngắn: Naver Blog được làm cho thị trường Hàn Quốc và không có giao diện tiếng Anh chính thức. Nhưng vẫn có cách viết nội dung tiếng Anh, dịch bài Hàn sang Anh, và dùng Naver Blog như một kênh marketing cho thương hiệu du lịch Việt Nam.",
    sections: [
      {
        heading: "Naver Blog có giao diện tiếng Anh không?",
        body:
          "Không. Dashboard quản lý, menu, hệ thống bình luận và kết quả tìm kiếm Naver đều bằng tiếng Hàn. Trình duyệt Chrome, Edge, Safari có thể dịch bài viết sang tiếng Anh, nhưng phần viết bài và tìm kiếm vẫn ưu tiên tiếng Hàn.",
      },
      {
        heading: "Viết bài Naver Blog bằng tiếng Anh có ổn không?",
        bullets: [
          "Naver chấp nhận nội dung tiếng Anh trong bài viết.",
          "Người Hàn chủ yếu tìm bằng tiếng Hàn, nên bài tiếng Anh thường không lên top từ khoá du lịch.",
          "Hiệu quả nhất là bài tiếng Hàn là chính, có thêm phần tóm tắt tiếng Anh cho người đọc quốc tế.",
          "Bài song ngữ hợp với trang thương hiệu, thông cáo báo chí hoặc giới thiệu đội ngũ.",
        ],
      },
      {
        heading: "Chủ doanh nghiệp không biết tiếng Hàn vẫn dùng Naver Blog được",
        body:
          "Khách sạn, tour, spa, nhà hàng Việt Nam phục vụ khách Hàn thường viết Naver Blog bằng tiếng Hàn. Chủ thương hiệu nói tiếng Anh sẽ làm việc với writer Hàn hoặc agency Naver, duyệt brief bằng tiếng Anh, xem bản dịch tiếng Anh trước khi đăng bài tiếng Hàn.",
      },
      {
        heading: "Cách đọc bài Naver Blog tiếng Hàn nếu không biết tiếng Hàn",
        bullets: [
          "Mở bài bằng Chrome hoặc Edge và bật dịch trang tự động.",
          "Dùng Papago (công cụ dịch của Naver) cho bản dịch Hàn → Anh tự nhiên hơn Google Translate.",
          "Hình ảnh, giá tiền, địa điểm trong bài vẫn đọc được bình thường dù chữ là tiếng Hàn.",
          "Văn phong review Hàn thường mềm và kể chuyện, khác kiểu review thẳng của tiếng Anh.",
        ],
      },
      {
        heading: "Khi nào nội dung tiếng Anh trên Naver Blog thực sự có ích",
        body:
          "Nội dung tiếng Anh trên Naver Blog hợp với PR quốc tế, trang nhà đầu tư, cộng đồng người nước ngoài sống tại Hàn và brand storytelling song ngữ. Nếu mục tiêu là thu hút khách Hàn đến Việt Nam, vẫn nên dùng nội dung tiếng Hàn là chính.",
      },
    ],
    deliverables: {
      title: "Phạm vi hỗ trợ",
      items: [
        "Chiến lược Naver Blog cho chủ thương hiệu không biết tiếng Hàn",
        "Brief tiếng Anh + review bản dịch trước khi đăng",
        "Cấu trúc bài song ngữ Hàn–Anh",
        "Nghiên cứu keyword tiếng Hàn kèm giải thích tiếng Anh",
        "Phần tóm tắt tiếng Anh trong bài tiếng Hàn",
        "Phối hợp giữa team thương hiệu (tiếng Anh) và writer Hàn",
      ],
    },
    whoFor: [
      "Khách sạn, tour, F&B Việt Nam có chủ nói tiếng Anh",
      "Marketing manager quốc tế phụ trách thị trường Hàn",
      "Thương hiệu cần nội dung Naver song ngữ",
      "Đội ngũ muốn duyệt nội dung Hàn trước khi đăng",
    ],
    process: [
      { step: "Audit", detail: "Đánh giá hiện trạng Naver và xác định nội dung tiếng Anh nào thực sự cần." },
      { step: "Brief", detail: "Xây brief nội dung bằng tiếng Anh với từ khoá tiếng Hàn mục tiêu." },
      { step: "Viết", detail: "Writer Hàn viết bài; thêm phần tóm tắt tiếng Anh khi cần." },
      { step: "Duyệt", detail: "Brand team duyệt brief tiếng Anh + bản dịch trước khi đăng." },
      { step: "Đăng", detail: "Đăng bài, theo dõi traffic tiếng Hàn và tối ưu tiếp." },
    ],
    priceFrom: "Từ 8.000.000đ / 4 bài",
    priceNote:
      "Giá phụ thuộc độ sâu phần dịch, số lượng bài và việc có làm bản tóm tắt hay bài song ngữ hay không.",
    faqs: [
      {
        q: "Naver Blog có bản tiếng Anh chính thức không?",
        a: "Không. Naver Blog được xây dựng hoàn toàn cho thị trường Hàn Quốc. Dashboard quản lý, trình soạn thảo, hệ thống tìm kiếm và bình luận đều bằng tiếng Hàn. Không có nút chuyển ngôn ngữ hay giao diện tiếng Anh chính thức. Người dùng nói tiếng Anh có thể dùng tính năng dịch trang của trình duyệt để đọc bài viết.",
      },
      {
        q: "Viết hoàn toàn bằng tiếng Anh trên Naver Blog có lên top được không?",
        a: "Naver chấp nhận nội dung tiếng Anh trong bài viết, nhưng người dùng Hàn Quốc tìm kiếm bằng tiếng Hàn. Bài tiếng Anh thuần gần như không có traffic từ Naver Search. Nội dung tiếng Anh chỉ phù hợp cho PR quốc tế, trang thương hiệu hoặc nội dung hướng đến cộng đồng người nước ngoài tại Hàn.",
      },
      {
        q: "Tôi không biết tiếng Hàn thì đọc bài Naver Blog kiểu gì?",
        a: "Cách nhanh nhất là mở bài viết bằng Chrome hoặc Edge và bật dịch trang tự động. Để có bản dịch Hàn–Anh tự nhiên hơn, dùng công cụ Papago của Naver tại papago.naver.com. Ảnh chụp, giá tiền và thông tin địa điểm trong bài vẫn đọc được bình thường bất kể ngôn ngữ.",
      },
      {
        q: "Doanh nghiệp Việt nên viết Naver Blog tiếng Anh hay tiếng Hàn?",
        a: "Nếu mục tiêu chính là thu hút khách Hàn Quốc đến khách sạn, nhà hàng, spa hay tour tại Việt Nam thì phải viết tiếng Hàn. Tiếng Anh chỉ nên dùng cho bài PR quốc tế, truyền thông nhà đầu tư hoặc nội dung song ngữ phục vụ đối tượng đọc đa ngôn ngữ.",
      },
      {
        q: "Bên bạn có viết bài tiếng Hàn giúp được không?",
        a: "Có. Công Thiên Agency brief nội dung bằng tiếng Anh để team thương hiệu hiểu rõ hướng đi, sau đó writer Hàn Quốc viết bài hoàn chỉnh. Bạn duyệt bản tóm tắt hoặc bản dịch tiếng Anh trước khi đăng. Quy trình này giúp chủ doanh nghiệp không biết tiếng Hàn vẫn kiểm soát được chất lượng nội dung Naver Blog.",
      },
      {
        q: "Papago là gì và hỗ trợ Naver Blog thế nào?",
        a: "Papago là dịch vụ dịch thuật AI của Naver, truy cập tại papago.naver.com. Papago xử lý dịch Hàn–Anh tự nhiên hơn Google Translate vì được huấn luyện chuyên sâu trên dữ liệu tiếng Hàn. Chủ thương hiệu nói tiếng Anh có thể dùng Papago để review bản nháp tiếng Hàn trước khi duyệt đăng trên Naver Blog.",
      },
      {
        q: "Nội dung song ngữ trên Naver Blog có tốt cho SEO không?",
        a: "Bài song ngữ (tiếng Hàn chính + tóm tắt tiếng Anh) không gây hại cho Naver SEO và có thể tăng uy tín thương hiệu với đối tượng quốc tế. Tuy nhiên, phần tiếng Hàn mới là phần quyết định thứ hạng tìm kiếm Naver. Phần tiếng Anh phục vụ người đọc đến từ link trực tiếp, chia sẻ social hoặc dịch trang tự động.",
      },
      {
        q: "Bao lâu thì Naver Blog có kết quả?",
        a: "Bài review từ blogger Hàn có thể tạo traffic trong 2–4 tuần sau khi đăng. Blog thương hiệu tự xây dựng organic authority thường cần 3–6 tháng đăng đều để có visibility tìm kiếm rõ rệt. Thời gian phụ thuộc mức cạnh tranh ngành, thành phố và từ khoá mục tiêu.",
      },
      {
        q: "Có cần số điện thoại Hàn Quốc để mở Naver Blog không?",
        a: "Trước đây cần xác minh số Hàn, nhưng hiện tại Naver cho phép đăng ký bằng email quốc tế cho tài khoản cơ bản. Tuy nhiên, một số tính năng và tín hiệu uy tín vẫn gắn với tài khoản xác minh Hàn. Công Thiên Agency có thể mở và quản lý tài khoản Naver Blog thay cho bạn.",
      },
      {
        q: "Naver Blog khác gì blog trên website riêng?",
        a: "Blog trên website riêng nằm trên domain của bạn và được Google index. Naver Blog nằm trên blog.naver.com và được Naver Search index. Với khách Hàn, Naver Search là điểm xuất phát tìm kiếm — không phải Google. Đăng bài trên Naver Blog đưa nội dung vào đúng nơi người Hàn thực sự tìm, đọc và tin tưởng review.",
      },
    ],
    related: [
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Dịch vụ viết bài chính" },
      { label: "Booking blogger Hàn", href: "/vi/naver-marketing/booking-blogger-han", note: "Review từ blogger Hàn" },
      { label: "Naver Marketing Agency Vietnam", href: "/en/naver-marketing/naver-marketing-agency-vietnam", note: "Trang EN tổng hợp" },
      { label: "Naver Blogs là gì", href: "/vi/naver-marketing/naver-blogs", note: "Giới thiệu nền tảng" },
      { label: "Naver Blog chính thức", href: "https://blog.naver.com", note: "External · Nền tảng Naver Blog" },
      { label: "Papago dịch thuật", href: "https://papago.naver.com", note: "External · Công cụ dịch của Naver" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Hướng dẫn Naver Blog tiếng Anh cho thương hiệu Việt Nam" },
    ],
    schema: { serviceType: "Tư vấn Naver Blog song ngữ", offerPriceVnd: 8000000 },
  },

  /* ───────────────── EN: Naver Blogs ───────────────── */
  {
    path: "/en/naver-marketing/naver-blogs",
    lastModified: "2026-06-18",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Naver Blogs", href: "/en/naver-marketing/naver-blogs" },
    ],
    primaryKeyword: "Naver blogs",
    metaTitle: "Naver Blogs: What They Are and How Vietnam Brands Use Them",
    metaDescription:
      "Naver blogs are Korean-language review and lifestyle posts on naver.com. Learn how the platform works, why Korean travelers trust it, and how Vietnam brands publish content there.",
    eyebrow: "Naver · Platform overview",
    h1: "Naver Blogs explained: the trust layer of Korean search",
    heroSub:
      "Naver blogs are personal and brand blogs hosted on naver.com — the largest search engine in Korea. They power most of the review and recommendation results Korean travelers see before booking.",
    heroCta: "Plan a Naver content strategy",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Naver blogs are the long-form content layer of Naver, Korea's dominant search engine. Each user can run their own blog, post photos, write reviews and share experiences. For Korean travelers researching Vietnam, Naver blogs are often more trusted than ads, Instagram or even Google results.",
    sections: [
      {
        heading: "What are Naver blogs?",
        body:
          "A Naver blog is a personal or brand blog published on the blog.naver.com domain. Anyone with a Naver account can create one. Posts can include text, photos, videos and links. Naver search results often surface blog posts above other websites for review and recommendation queries.",
      },
      {
        heading: "Why Korean users trust Naver blogs",
        bullets: [
          "Long-form posts with photos feel more authentic than short social ads.",
          "Naver promotes blog content heavily in its search results.",
          "Travelers read multiple blog reviews before deciding where to stay or eat.",
          "Korean blog tone is story-driven and detail-rich, which builds confidence.",
        ],
      },
      {
        heading: "Types of Naver blogs for Vietnam tourism",
        bullets: [
          "Brand blogs — owned by the business, used for long-term Korean SEO assets.",
          "Influencer blogs — popular Korean bloggers booked for paid or invited reviews.",
          "Traveler blogs — organic posts from Korean tourists, hard to control but valuable.",
          "Agency-managed blogs — content pipelines run by partners like Công Thiên Agency.",
        ],
      },
      {
        heading: "How Naver blogs fit a full Korean marketing plan",
        body:
          "Naver blogs work best when combined with Naver Place (business profile), Naver Map (location search) and a clear CTA path back to your website, Zalo, WhatsApp or booking system. Standalone blog posts without a connected funnel rarely convert.",
      },
    ],
    deliverables: {
      title: "Naver blogs scope of work",
      items: [
        "Audit of current Naver blogs and Korean visibility",
        "Brand Naver blog setup and content calendar",
        "Korean blogger outreach and booking",
        "Review-style post outlines and image briefs",
        "CTA structure connecting blog → Place → website / Zalo",
        "Internal Naver linking strategy across blog, Place and Map",
      ],
    },
    whoFor: [
      "Vietnam hotels, restaurants, spas and tour operators",
      "Brands building long-term Korean search visibility",
      "Marketing teams comparing organic blogs vs paid blogger reviews",
      "Owners who want a structured Naver presence, not one-off posts",
    ],
    process: [
      { step: "Audit", detail: "Map your current Naver visibility and identify content gaps." },
      { step: "Plan", detail: "Choose brand blog, influencer reviews or a mixed model." },
      { step: "Produce", detail: "Build Korean posts with photos, prices and clear CTAs." },
      { step: "Connect", detail: "Link blog content to Naver Place, website and contact channels." },
      { step: "Track", detail: "Monitor Korean search performance and refresh evergreen posts." },
    ],
    priceFrom: "From 8,000,000 VND / 4 posts",
    priceNote:
      "Total cost depends on blog ownership, content volume, photo production and whether Korean influencer booking is included.",
    faqs: [
      {
        q: "What exactly is a Naver blog?",
        a: "A Naver blog is a personal or brand blog hosted on blog.naver.com, the blog platform of Naver — Korea's largest search engine. Each blog can publish long-form posts with photos, videos, maps and links. Naver search results prioritize blog posts for review, recommendation and experience queries, making Naver blogs the primary trust layer for Korean consumers researching purchases and travel.",
      },
      {
        q: "Are Naver blogs different from Korean influencer Instagram?",
        a: "Yes, fundamentally. Naver blogs are search-driven and long-form — users find them through Naver search when actively researching a destination or product. Instagram is feed-driven and short — users scroll past content passively. For Korean travelers comparing hotels or restaurants in Vietnam, Naver blog reviews carry more weight because they appear at the moment of intent. Both channels can be used together for maximum coverage.",
      },
      {
        q: "Do I need my own Naver blog or just influencer reviews?",
        a: "Owned Naver blogs build long-term search assets that you control — every post compounds over time. Korean influencer blog reviews deliver faster third-party proof and credibility. Most effective Vietnam tourism campaigns combine both: a brand blog for evergreen content and periodic influencer posts for fresh social proof and wider reach.",
      },
      {
        q: "Can Naver blogs help with Google rankings?",
        a: "Indirectly yes. Naver blog posts increase brand mentions, Korean-language coverage and backlink signals across the web. When Korean travelers search on Google for Vietnam destinations, having Naver blog content strengthens overall brand authority. The primary benefit is Naver search visibility, with Google as a secondary bonus.",
      },
      {
        q: "How fast do Naver blogs show results?",
        a: "Korean influencer blog reviews can generate measurable traffic within 2–4 weeks of publishing, especially if the blogger has an established audience. Brand-owned Naver blogs building organic search authority typically need 3–6 months of consistent, keyword-targeted posting to see meaningful visibility in Naver search results.",
      },
      {
        q: "How many Naver blog posts does a Vietnam hotel or restaurant need?",
        a: "A minimum viable Naver blog presence usually starts with 8–12 posts covering your core service, location, seasonal angles and comparison topics. Ongoing campaigns typically publish 4–8 new posts per month to maintain freshness in Naver search. The exact volume depends on competition in your city and category.",
      },
      {
        q: "What makes a good Naver blog post for Korean travelers?",
        a: "A strong Naver blog post uses a natural Korean title with a target keyword, includes 15–30 real photos, provides specific details like prices, directions, operating hours and menu highlights, uses honest review-style language and ends with a clear call to action — Zalo, WhatsApp, booking link or Naver Place profile.",
      },
      {
        q: "Is Naver blogs the same as Naver Café?",
        a: "No. Naver blogs are individual publishing platforms (one author per blog). Naver Café is a community forum system where multiple members post in a shared space. Both appear in Naver search results, but blogs are better for brand-controlled content and SEO, while Cafés are useful for community engagement and user-generated discussions.",
      },
      {
        q: "Can Naver blogs link to my website?",
        a: "Yes. Naver blog posts can include outbound links to your website, booking page, Zalo, WhatsApp or any external URL. These links drive referral traffic and help connect your Naver content to your conversion funnel. Posts should also link to your Naver Place profile for local search reinforcement.",
      },
      {
        q: "What does Công Thiên Agency charge for Naver blog management?",
        a: "Naver blog packages start from 8,000,000 VND for 4 review-style posts. Total cost depends on whether you need brand blog setup, content calendar management, photo production, Korean influencer booking or multilingual coordination. Contact us via Zalo for a scope-matched quote.",
      },
    ],
    related: [
      { label: "Naver Blog Marketing Vietnam", href: "/en/naver-marketing/naver-blog-marketing-vietnam", note: "Korean content marketing" },
      { label: "Naver Marketing Agency Vietnam", href: "/en/naver-marketing/naver-marketing-agency-vietnam", note: "Agency service" },
      { label: "Naver Blog English guide", href: "/en/naver-marketing/naver-blog-english", note: "For non-Korean readers" },
      { label: "Attract Korean Tourists with Naver", href: "/en/naver-marketing/attract-korean-tourists-with-naver", note: "Tourism playbook" },
      { label: "Naver Blog official", href: "https://blog.naver.com", note: "External · Naver Blog platform" },
      { label: "Naver Blog reviews guide", href: "/en/blog/naver-blog-reviews-guide", note: "Blog guide" },
      { label: "Naver search engine", href: "https://www.naver.com", note: "External · Korea's #1 search engine" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver blogs overview for Vietnam brands" },
    ],
    schema: { serviceType: "Naver blogs strategy", offerPriceVnd: 8000000 },
  },

  /* ───────────────── VI: Naver Blogs là gì ───────────────── */
  {
    path: "/vi/naver-marketing/naver-blogs",
    lastModified: "2026-06-18",
    cluster: "naver",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ", href: "/vi/dich-vu" },
      { label: "Naver Blogs", href: "/vi/naver-marketing/naver-blogs" },
    ],
    primaryKeyword: "Naver blogs",
    metaTitle: "Naver Blogs là gì? Cách doanh nghiệp Việt Nam dùng Naver Blog",
    metaDescription:
      "Naver blogs là hệ thống blog cá nhân và thương hiệu trên Naver. Giải thích cách Naver Blog hoạt động, vì sao khách Hàn tin và cách thương hiệu Việt Nam xuất hiện trên đó.",
    eyebrow: "Naver · Tổng quan nền tảng",
    h1: "Naver Blogs: lớp nội dung tin cậy của tìm kiếm Hàn Quốc",
    heroSub:
      "Naver blogs là blog cá nhân và blog thương hiệu trên naver.com — công cụ tìm kiếm lớn nhất Hàn Quốc. Đây là nơi khách Hàn đọc review và quyết định trước khi đặt phòng, đặt tour, đặt bàn.",
    heroCta: "Tư vấn chiến lược Naver",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Naver blogs là tầng nội dung dài của Naver — công cụ tìm kiếm chiếm thị phần lớn nhất tại Hàn Quốc. Mỗi tài khoản Naver có thể mở blog riêng, đăng ảnh, viết review, chia sẻ trải nghiệm. Với khách Hàn tìm thông tin du lịch Việt Nam, Naver blogs thường đáng tin hơn quảng cáo, Instagram hay thậm chí Google.",
    sections: [
      {
        heading: "Naver blogs là gì?",
        body:
          "Naver blog là blog cá nhân hoặc blog thương hiệu nằm trên tên miền blog.naver.com. Ai có tài khoản Naver đều mở được. Bài viết có thể là chữ, ảnh, video, liên kết. Naver thường ưu tiên hiển thị bài blog trong kết quả tìm kiếm về review và gợi ý.",
      },
      {
        heading: "Vì sao người Hàn tin Naver blogs",
        bullets: [
          "Bài dài kèm ảnh thật cảm giác chân thực hơn quảng cáo ngắn.",
          "Naver chủ động ưu tiên blog trong kết quả tìm kiếm.",
          "Khách Hàn thường đọc nhiều bài blog trước khi quyết định.",
          "Văn phong blog Hàn kể chuyện, chi tiết, tạo sự yên tâm.",
        ],
      },
      {
        heading: "Các loại Naver blogs cho du lịch Việt Nam",
        bullets: [
          "Brand blog — blog của chính doanh nghiệp, xây tài sản SEO Hàn dài hạn.",
          "Influencer blog — blogger Hàn nổi tiếng nhận book review trả phí hoặc invited.",
          "Traveler blog — bài tự nhiên của khách Hàn, khó kiểm soát nhưng giá trị cao.",
          "Agency-managed blog — pipeline nội dung do agency như Công Thiên Agency vận hành.",
        ],
      },
      {
        heading: "Naver blogs trong chiến lược marketing Hàn tổng thể",
        body:
          "Naver blogs phát huy hiệu quả nhất khi kết hợp với Naver Place (hồ sơ doanh nghiệp), Naver Map (tìm kiếm vị trí) và đường dẫn CTA rõ ràng về website, Zalo, WhatsApp hoặc hệ thống booking. Bài blog đứng một mình mà không có funnel đi kèm thường khó chuyển đổi.",
      },
    ],
    deliverables: {
      title: "Phạm vi dịch vụ Naver blogs",
      items: [
        "Audit hiện trạng Naver blogs và độ phủ tiếng Hàn",
        "Mở brand Naver blog và lịch nội dung",
        "Outreach và book blogger Hàn",
        "Outline bài review và brief hình ảnh",
        "Cấu trúc CTA blog → Place → website / Zalo",
        "Internal link giữa blog, Place và Map",
      ],
    },
    whoFor: [
      "Khách sạn, nhà hàng, spa, tour Việt Nam",
      "Thương hiệu xây độ phủ tìm kiếm Hàn dài hạn",
      "Đội ngũ marketing đang so sánh organic blog vs blogger book",
      "Chủ doanh nghiệp muốn Naver bài bản, không làm lẻ tẻ",
    ],
    process: [
      { step: "Audit", detail: "Đánh giá độ phủ Naver hiện tại và xác định lỗ hổng nội dung." },
      { step: "Plan", detail: "Chọn brand blog, influencer review hoặc kết hợp." },
      { step: "Produce", detail: "Sản xuất bài tiếng Hàn có ảnh, giá, CTA rõ ràng." },
      { step: "Connect", detail: "Liên kết blog với Place, website và kênh liên hệ." },
      { step: "Track", detail: "Theo dõi traffic tìm kiếm Hàn và refresh bài evergreen." },
    ],
    priceFrom: "Từ 8.000.000đ / 4 bài",
    priceNote:
      "Chi phí phụ thuộc tài khoản đăng, số lượng bài, chất lượng ảnh và có book blogger Hàn hay không.",
    faqs: [
      {
        q: "Naver blogs khác gì blog thông thường?",
        a: "Blog thông thường nằm trên domain riêng của bạn và được Google index. Naver blogs nằm trên blog.naver.com — thuộc hệ sinh thái Naver, công cụ tìm kiếm lớn nhất Hàn Quốc. Naver ưu tiên hiển thị bài blog trong kết quả tìm kiếm cho các truy vấn review, gợi ý và trải nghiệm. Với khách Hàn, Naver Search là điểm bắt đầu — không phải Google.",
      },
      {
        q: "Naver blogs có khác Instagram của blogger Hàn không?",
        a: "Khác hoàn toàn về cơ chế. Naver blogs hướng tìm kiếm và viết dài — người dùng tìm thấy khi đang chủ động research điểm đến hoặc sản phẩm. Instagram hướng feed và ngắn — người dùng lướt qua nội dung một cách thụ động. Với khách Hàn đang so sánh khách sạn hay nhà hàng tại Việt Nam, bài review Naver blog có trọng lượng hơn vì xuất hiện đúng lúc có intent. Hai kênh dùng song song cho coverage tối đa.",
      },
      {
        q: "Cần blog riêng hay chỉ book blogger là đủ?",
        a: "Blog riêng (brand blog) tạo tài sản SEO dài hạn mà bạn kiểm soát — mỗi bài viết tích luỹ theo thời gian. Blogger Hàn review tạo social proof bên thứ ba nhanh hơn. Chiến dịch du lịch Việt Nam hiệu quả nhất thường kết hợp cả hai: brand blog cho nội dung evergreen và blogger review định kỳ cho fresh proof và reach rộng hơn.",
      },
      {
        q: "Naver blogs có hỗ trợ Google SEO không?",
        a: "Có gián tiếp. Bài Naver blog tăng brand mention, độ phủ tiếng Hàn và tín hiệu backlink trên web. Khi khách Hàn tìm trên Google về điểm đến Việt Nam, có nội dung Naver blog tăng cường authority thương hiệu tổng thể. Lợi ích chính là visibility trên Naver Search, Google là bonus phụ.",
      },
      {
        q: "Bao lâu thì Naver blogs có kết quả?",
        a: "Bài review từ blogger Hàn có thể tạo traffic đo được trong 2–4 tuần sau khi đăng, đặc biệt nếu blogger có audience sẵn. Brand blog tự xây organic authority thường cần 3–6 tháng đăng đều, nhắm từ khoá cụ thể để có visibility rõ rệt trên Naver Search.",
      },
      {
        q: "Khách sạn hoặc nhà hàng Việt cần bao nhiêu bài Naver blog?",
        a: "Naver blog presence tối thiểu thường bắt đầu với 8–12 bài bao phủ dịch vụ chính, vị trí, góc mùa vụ và chủ đề so sánh. Chiến dịch đang chạy thường đăng 4–8 bài mới mỗi tháng để duy trì freshness trên Naver Search. Số lượng chính xác phụ thuộc mức cạnh tranh ngành và thành phố.",
      },
      {
        q: "Bài Naver blog tốt cho khách Hàn cần những gì?",
        a: "Một bài Naver blog hiệu quả cần tiêu đề tiếng Hàn tự nhiên có keyword mục tiêu, 15–30 ảnh thật, thông tin cụ thể như giá, đường đi, giờ mở cửa, điểm nổi bật của menu, văn phong review trung thực và CTA rõ ràng — Zalo, WhatsApp, link đặt phòng hoặc profile Naver Place.",
      },
      {
        q: "Naver blogs có giống Naver Café không?",
        a: "Không. Naver blogs là nền tảng đăng bài cá nhân (mỗi blog một tác giả). Naver Café là hệ thống diễn đàn cộng đồng nơi nhiều thành viên đăng bài chung. Cả hai đều xuất hiện trong Naver Search, nhưng blogs phù hợp hơn cho nội dung thương hiệu và SEO, còn Café hữu ích cho engagement cộng đồng và thảo luận UGC.",
      },
      {
        q: "Naver blogs có link được về website không?",
        a: "Có. Bài Naver blog có thể chứa link ra website, trang booking, Zalo, WhatsApp hoặc URL bên ngoài. Những link này mang referral traffic và kết nối nội dung Naver với conversion funnel của bạn. Bài viết cũng nên link đến Naver Place profile để tăng cường local search.",
      },
      {
        q: "Công Thiên Agency tính phí quản lý Naver blog thế nào?",
        a: "Gói Naver blog bắt đầu từ 8.000.000đ cho 4 bài review. Tổng chi phí phụ thuộc vào việc có cần setup brand blog, quản lý lịch nội dung, sản xuất ảnh, book blogger Hàn hay phối hợp đa ngôn ngữ. Liên hệ qua Zalo để nhận báo giá theo phạm vi cụ thể.",
      },
    ],
    related: [
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Dịch vụ viết bài chính" },
      { label: "Booking blogger Hàn", href: "/vi/naver-marketing/booking-blogger-han", note: "Review blogger" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Hồ sơ doanh nghiệp" },
      { label: "Naver Blog tiếng Anh", href: "/vi/naver-marketing/naver-blog-tieng-anh", note: "Cho chủ thương hiệu nói tiếng Anh" },
      { label: "Naver Blog chính thức", href: "https://blog.naver.com", note: "External · Nền tảng Naver Blog" },
      { label: "Naver.com", href: "https://www.naver.com", note: "External · Công cụ tìm kiếm #1 Hàn Quốc" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Naver blogs cho thương hiệu Việt Nam" },
    ],
    schema: { serviceType: "Chiến lược Naver blogs", offerPriceVnd: 8000000 },
  },

  /* ───────────────── EN: Map Review Jobs ───────────────── */
  {
    path: "/en/google-maps-marketing/map-review-jobs",
    lastModified: "2026-06-18",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Map review jobs", href: "/en/google-maps-marketing/map-review-jobs" },
    ],
    primaryKeyword: "map review jobs",
    metaTitle: "Map Review Jobs: How Honest Reviewer Programs Work | Công Thiên Agency",
    metaDescription:
      "How map review jobs and honest reviewer programs work for Google Business Profile, who qualifies, what's allowed and what isn't, and how Vietnam businesses run ethical review reputation marketing.",
    eyebrow: "Google Maps · Reviewer programs",
    h1: "Map review jobs: how honest reviewer programs work",
    heroSub:
      "There is real demand for map review jobs — but only honest, experience-based reviews are sustainable. This page explains how ethical reviewer programs work for Google Business Profile and how we structure them at Công Thiên Agency.",
    heroCta: "Talk about a reviewer program",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Searches like 'map review jobs' usually come from two sides: people looking for paid reviewer work, and businesses wondering if they can hire reviewers for Google Maps. We work only with honest, experience-based review reputation marketing. Fake or paid-without-experience reviews violate Google policy and put the business at risk. This page explains what's allowed, what we do, and what we do not do.",
    sections: [
      {
        heading: "What are map review jobs?",
        body:
          "Map review jobs usually describe paid or freelance work where someone writes a review on Google Maps, Naver Map or similar platforms. Legitimate programs only allow reviews from people who actually visited or used the service. Anything else breaks Google's review policies.",
      },
      {
        heading: "What we do — and do not do",
        bullets: [
          "We do not sell fake reviews, bot reviews or guaranteed star counts.",
          "We coordinate honest reviewer programs where real customers share genuine experiences.",
          "We invite past guests, partners or community members to leave honest feedback.",
          "We help businesses respond to reviews, fix issues and protect their profile.",
        ],
      },
      {
        heading: "Who can take part in honest reviewer programs",
        bullets: [
          "Real past customers who agree to share their experience publicly.",
          "Invited content creators who actually visit the venue.",
          "Community members or partners with first-hand experience.",
          "Anyone is free to write reviews based on truthful experience.",
        ],
      },
      {
        heading: "Why fake review jobs are a bad investment",
        body:
          "Google detects unnatural review patterns and can remove reviews, suspend profiles or penalize ranking. Negative attention from fake review schemes can damage brand trust permanently. Honest review reputation marketing takes longer but compounds — every real review strengthens the profile.",
      },
      {
        heading: "How our review reputation service is structured",
        body:
          "We focus on Google Business Profile optimization, review request workflows for real customers, response templates, negative review handling and ongoing reputation reporting. The goal is more genuine reviews from people who actually experienced the service.",
      },
    ],
    deliverables: {
      title: "Reviewer program scope",
      items: [
        "Google Business Profile audit and optimization",
        "Honest review request workflow for past customers",
        "QR code and link tools for in-venue review prompts",
        "Response templates for positive and negative reviews",
        "Negative review escalation and reporting workflow",
        "Monthly reputation report",
      ],
    },
    whoFor: [
      "Hotels, restaurants, spas, tours and clinics",
      "Multi-location businesses managing reputation at scale",
      "Owners recovering from a wave of negative reviews",
      "Brands that want a clean, policy-compliant review strategy",
    ],
    process: [
      { step: "Audit", detail: "Review the current profile, review history and risk signals." },
      { step: "Plan", detail: "Design an honest review request flow tied to real customer touchpoints." },
      { step: "Activate", detail: "Roll out QR codes, post-visit messages and response templates." },
      { step: "Protect", detail: "Handle negative reviews and report policy-violating reviews where valid." },
      { step: "Report", detail: "Monthly reputation report and next-step recommendations." },
    ],
    priceFrom: "From 6,000,000 VND / month",
    priceNote:
      "Pricing depends on number of locations, review volume and whether multi-language responses are required.",
    faqs: [
      {
        q: "Can I pay people to leave fake Google reviews?",
        a: "No. Google's review policy explicitly prohibits fake reviews, paid reviews from people who never visited, bot-generated reviews and incentivized reviews that require a specific star rating. Violations can result in review removal, profile suspension or permanent penalties. Google's algorithms detect unnatural patterns including sudden volume spikes, reviewer account age and geographic anomalies.",
      },
      {
        q: "Then what is a legitimate map review job?",
        a: "A legitimate map review job means real people who actually visited the business and used the service share their genuine experience as a Google review. This includes past customers invited to leave feedback, content creators who visit in person, community partners with first-hand experience, and staff of partner businesses who genuinely used the service. The review must reflect honest personal experience.",
      },
      {
        q: "Do you guarantee a number of 5-star reviews?",
        a: "No reputable agency should guarantee specific star ratings. Công Thiên Agency commits to the process: structured review request workflows, volume of genuine review invitations sent to real customers, response templates and reputation monitoring. The star rating reflects real customer satisfaction — our job is to make it easy for happy customers to share their experience.",
      },
      {
        q: "Can you help if I already have many negative reviews?",
        a: "Yes. We audit the full review history, identify reviews that violate Google's policies (fake competitor attacks, irrelevant content, spam), submit removal requests with evidence through Google Business Profile support, and simultaneously build a pipeline of genuine positive reviews from real customers over time. Recovery is gradual but sustainable.",
      },
      {
        q: "Is this work safe for my Google Business Profile?",
        a: "Yes. Every step follows Google's published review policies. We never use bots, fake accounts, review farms or incentivized star guarantees. The goal is sustainable reputation built on genuine customer experiences. This approach protects your profile from penalties and builds trust that compounds over time.",
      },
      {
        q: "How does Google detect fake reviews?",
        a: "Google uses machine learning to detect patterns: sudden spikes in review volume, reviews from accounts with no other activity, multiple reviews from the same IP address or device, geographic inconsistencies (reviewers located far from the business), and language patterns typical of templated or AI-generated reviews. Flagged reviews can be removed without notice.",
      },
      {
        q: "What is a Google Business Profile and why does it matter for reviews?",
        a: "A Google Business Profile (formerly Google My Business) is your business listing on Google Maps and Google Search. It displays your location, hours, photos, contact info and — critically — customer reviews. For local businesses like hotels, restaurants and spas, the review score and volume directly influence whether customers choose you over competitors in Google Maps results.",
      },
      {
        q: "How do QR codes help with collecting reviews?",
        a: "A QR code placed at checkout, on the table or at reception links directly to your Google review page. Guests scan it on their phone while the experience is fresh. This removes friction — instead of asking customers to search for your business on Google Maps, they go straight to the review form. QR codes combined with polite staff prompts significantly increase genuine review volume.",
      },
      {
        q: "Can competitors leave fake negative reviews on my profile?",
        a: "Unfortunately yes — fake negative reviews from competitors are a known problem. If you suspect a review is fake (no visit history, generic complaint, reviewer with suspicious patterns), you can flag it for removal through Google Business Profile. Công Thiên Agency helps document evidence and submit removal requests through the proper channels.",
      },
      {
        q: "How long does it take to improve a Google Maps review score?",
        a: "With consistent genuine review requests, most businesses see measurable improvement within 2–3 months. A business averaging 5–10 new real reviews per month will shift its score noticeably over a quarter. The timeline depends on current review count, score gap and how consistently the review request workflow is maintained.",
      },
    ],
    related: [
      { label: "Google Maps Review & Reputation", href: "/en/services", note: "Service hub" },
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Profile audit" },
      { label: "Review reputation Vietnam", href: "/vi/google-maps-marketing/review-reputation", note: "VI service page" },
      { label: "Handle negative reviews", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc", note: "Negative review workflow" },
      { label: "Google Maps for Hoi An & Da Nang businesses", href: "/en/blog/google-maps-hoi-an-da-nang-guide", note: "Blog guide" },
      { label: "Google Business Profile Help", href: "https://support.google.com/business", note: "External · Google official support" },
      { label: "Google review policies", href: "https://support.google.com/contributionpolicy/answer/7400114", note: "External · Google policy reference" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Map review jobs and honest reviewer programs" },
    ],
    schema: { serviceType: "Google Maps Review & Reputation Marketing", offerMinPriceVnd: 6000000 },
  },

  /* ───────────────── VI: Việc làm đánh giá Map ───────────────── */
  {
    path: "/vi/google-maps-marketing/viec-lam-danh-gia-map",
    lastModified: "2026-06-18",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Dịch vụ", href: "/vi/dich-vu" },
      { label: "Việc làm đánh giá Map", href: "/vi/google-maps-marketing/viec-lam-danh-gia-map" },
    ],
    primaryKeyword: "việc làm đánh giá map",
    metaTitle: "Việc làm đánh giá Map: chương trình CTV đánh giá trải nghiệm thật",
    metaDescription:
      "Việc làm đánh giá Map cho ai, làm thế nào cho đúng chính sách Google, và cách chương trình CTV đánh giá trải nghiệm thật của Công Thiên Agency hoạt động cho khách hàng và CTV.",
    eyebrow: "Google Maps · Chương trình CTV đánh giá",
    h1: "Việc làm đánh giá Map: chương trình CTV đánh giá trải nghiệm thật",
    heroSub:
      "Có nhu cầu tìm việc làm đánh giá Map và có nhu cầu tuyển CTV đánh giá. Chúng tôi chỉ làm chương trình đánh giá có trải nghiệm thật, đúng chính sách Google, không làm review ảo. Trang này giải thích cách chương trình hoạt động cho cả khách hàng và CTV.",
    heroCta: "Liên hệ về chương trình CTV",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Từ khoá 'việc làm đánh giá map' đến từ hai nhóm: người đang tìm việc CTV đánh giá Google Maps, và doanh nghiệp muốn thuê CTV viết review. Công Thiên Agency chỉ triển khai chương trình đánh giá có trải nghiệm thật — CTV phải đến trải nghiệm dịch vụ trước khi viết review. Review ảo, review không trải nghiệm vi phạm chính sách Google và có thể bị gỡ review hoặc khoá hồ sơ doanh nghiệp.",
    sections: [
      {
        heading: "Việc làm đánh giá Map là gì?",
        body:
          "Là công việc CTV trải nghiệm dịch vụ tại địa điểm thực tế (khách sạn, nhà hàng, spa, tour…) rồi viết review trung thực trên Google Maps hoặc nền tảng tương tự. Chỉ những đánh giá dựa trên trải nghiệm thật mới được Google chấp nhận và mới có giá trị bền vững cho doanh nghiệp.",
      },
      {
        heading: "Chúng tôi làm gì — và không làm gì",
        bullets: [
          "Không bán review ảo, review bot, không cam kết số sao 100%.",
          "Triển khai chương trình CTV đến trải nghiệm thật rồi viết review trung thực.",
          "Mời khách cũ, đối tác, cộng đồng đến trải nghiệm và chia sẻ cảm nhận.",
          "Hỗ trợ phản hồi review, xử lý review tiêu cực, bảo vệ hồ sơ doanh nghiệp.",
        ],
      },
      {
        heading: "CTV đánh giá Map làm những gì",
        bullets: [
          "Đến địa điểm theo lịch hẹn được sắp xếp với doanh nghiệp.",
          "Trải nghiệm dịch vụ thật: ăn, lưu trú, sử dụng dịch vụ.",
          "Chụp ảnh thật trong quá trình trải nghiệm.",
          "Viết review trung thực dựa trên cảm nhận cá nhân.",
          "Tuân thủ chính sách review của Google và quy định bảo mật.",
        ],
      },
      {
        heading: "Vì sao review ảo là khoản đầu tư tệ",
        body:
          "Google có hệ thống phát hiện review bất thường. Khi bị phát hiện, review có thể bị gỡ, hồ sơ doanh nghiệp có thể bị cảnh cáo hoặc khoá tạm thời, và thương hiệu mất uy tín với khách thật. Review trải nghiệm thật xây chậm hơn nhưng tích luỹ — mỗi review thật làm hồ sơ mạnh hơn.",
      },
      {
        heading: "Cách dịch vụ review reputation của chúng tôi vận hành",
        body:
          "Trọng tâm là tối ưu Google Business Profile, quy trình mời khách cũ để lại review thật, mẫu phản hồi review, xử lý review tiêu cực và báo cáo uy tín hàng tháng. Mục tiêu là nhiều review thật từ khách thật — không phải số sao tăng nhanh rồi biến mất.",
      },
    ],
    deliverables: {
      title: "Phạm vi chương trình CTV & review reputation",
      items: [
        "Audit và tối ưu Google Business Profile",
        "Quy trình mời review từ khách hàng thật",
        "QR code và link mời review tại điểm bán",
        "Mẫu phản hồi review tích cực và tiêu cực",
        "Quy trình xử lý review tiêu cực vi phạm chính sách",
        "Báo cáo uy tín hàng tháng",
      ],
    },
    whoFor: [
      "Khách sạn, nhà hàng, spa, tour, phòng khám",
      "Chuỗi nhiều địa điểm cần quản lý uy tín quy mô",
      "Doanh nghiệp đang bị review tiêu cực dồn dập",
      "Thương hiệu muốn chiến lược review sạch, đúng chính sách",
    ],
    process: [
      { step: "Audit", detail: "Đánh giá hồ sơ hiện tại, lịch sử review và các tín hiệu rủi ro." },
      { step: "Plan", detail: "Thiết kế quy trình mời review gắn với điểm chạm khách thật." },
      { step: "Activate", detail: "Triển khai QR code, tin nhắn sau trải nghiệm, mẫu phản hồi." },
      { step: "Protect", detail: "Xử lý review tiêu cực và báo cáo review vi phạm chính sách khi có cơ sở." },
      { step: "Report", detail: "Báo cáo uy tín hàng tháng và đề xuất bước tiếp." },
    ],
    priceFrom: "Từ 6.000.000đ / tháng",
    priceNote:
      "Chi phí tuỳ số địa điểm, lưu lượng review và việc có cần phản hồi đa ngôn ngữ hay không.",
    faqs: [
      {
        q: "Tôi đang tìm việc làm đánh giá Map, ứng tuyển thế nào?",
        a: "Công Thiên Agency chỉ nhận CTV trải nghiệm thật — bạn phải thực sự đến địa điểm, sử dụng dịch vụ rồi mới viết review. Nhắn Zalo kèm khu vực bạn đang ở, ngành nghề quan tâm (khách sạn, nhà hàng, spa, tour) để được thêm vào danh sách CTV. Khi có chương trình phù hợp ở khu vực bạn, chúng tôi sẽ liên hệ mời tham gia.",
      },
      {
        q: "Doanh nghiệp có thể thuê CTV viết review không trải nghiệm không?",
        a: "Không. Chúng tôi không nhận bất kỳ dịch vụ review ảo, review bot hoặc review từ người chưa đến nơi nào. Đây là vi phạm trực tiếp chính sách đánh giá của Google và có thể dẫn đến gỡ review, cảnh cáo hồ sơ hoặc khoá Google Business Profile. Rủi ro cho doanh nghiệp lớn hơn rất nhiều so với lợi ích ngắn hạn.",
      },
      {
        q: "Có cam kết bao nhiêu sao không?",
        a: "Không agency uy tín nào nên cam kết số sao cụ thể. Công Thiên Agency cam kết quy trình: số lượng lời mời review gửi đến khách thật, mẫu phản hồi chuyên nghiệp, hệ thống theo dõi uy tín. Số sao phản ánh mức độ hài lòng thật của khách — việc của chúng tôi là giúp khách hài lòng dễ dàng chia sẻ trải nghiệm.",
      },
      {
        q: "Tôi đang có nhiều review tiêu cực, xử lý được không?",
        a: "Được. Chúng tôi audit toàn bộ lịch sử review, xác định review vi phạm chính sách Google (tấn công đối thủ, nội dung không liên quan, spam), gửi yêu cầu gỡ kèm bằng chứng qua hỗ trợ Google Business Profile, đồng thời xây dựng pipeline review tích cực từ khách hàng thật. Phục hồi là quá trình dần dần nhưng bền vững.",
      },
      {
        q: "Chương trình này có an toàn cho hồ sơ doanh nghiệp không?",
        a: "Có. Mọi bước đều tuân thủ chính sách đánh giá đã công bố của Google. Chúng tôi không bao giờ dùng bot, tài khoản ảo, farm review hay cam kết sao có điều kiện. Mục tiêu là uy tín bền vững xây trên trải nghiệm khách hàng thật. Cách tiếp cận này bảo vệ hồ sơ khỏi bị phạt và tạo dựng trust tích luỹ theo thời gian.",
      },
      {
        q: "Google phát hiện review ảo bằng cách nào?",
        a: "Google dùng machine learning để phát hiện: tăng đột ngột số lượng review, review từ tài khoản không có hoạt động khác, nhiều review từ cùng IP hoặc thiết bị, bất nhất địa lý (reviewer ở rất xa doanh nghiệp), và mẫu ngôn ngữ điển hình của review viết sẵn hoặc AI tạo. Review bị gắn cờ có thể bị gỡ không cần thông báo.",
      },
      {
        q: "Google Business Profile là gì và vì sao liên quan đến review?",
        a: "Google Business Profile (trước đây là Google My Business) là hồ sơ doanh nghiệp trên Google Maps và Google Search. Nó hiển thị vị trí, giờ mở cửa, ảnh, liên hệ và — quan trọng nhất — đánh giá của khách hàng. Với doanh nghiệp địa phương như khách sạn, nhà hàng, spa, điểm số và số lượng review ảnh hưởng trực tiếp đến việc khách chọn bạn hay đối thủ trên Google Maps.",
      },
      {
        q: "QR code hỗ trợ thu thập review thế nào?",
        a: "QR code đặt tại quầy thanh toán, trên bàn hoặc lễ tân dẫn thẳng đến trang viết review Google của bạn. Khách quét bằng điện thoại ngay khi trải nghiệm còn tươi. Cách này giảm ma sát — thay vì yêu cầu khách tự tìm doanh nghiệp trên Google Maps, họ đến thẳng form review. QR code kết hợp lời mời lịch sự từ nhân viên tăng đáng kể lượng review thật.",
      },
      {
        q: "Đối thủ có thể đăng review tiêu cực giả trên hồ sơ tôi không?",
        a: "Rất tiếc là có — review tiêu cực giả từ đối thủ là vấn đề phổ biến. Nếu bạn nghi ngờ review không thật (không có lịch sử ghé thăm, phàn nàn chung chung, reviewer có dấu hiệu đáng ngờ), bạn có thể report qua Google Business Profile. Công Thiên Agency hỗ trợ thu thập bằng chứng và gửi yêu cầu gỡ review qua kênh chính thức.",
      },
      {
        q: "Bao lâu thì điểm review Google Maps cải thiện?",
        a: "Với quy trình mời review thật đều đặn, phần lớn doanh nghiệp thấy cải thiện đo được trong 2–3 tháng. Doanh nghiệp đạt trung bình 5–10 review thật mới mỗi tháng sẽ thấy điểm dịch chuyển rõ rệt trong một quý. Thời gian phụ thuộc tổng số review hiện tại, khoảng cách điểm cần cải thiện và mức duy trì quy trình.",
      },
    ],
    related: [
      { label: "Review reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Dịch vụ chính" },
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile", note: "Audit hồ sơ" },
      { label: "Quản lý review tiêu cực", href: "/vi/google-maps-marketing/quan-ly-review-tieu-cuc", note: "Xử lý review xấu" },
      { label: "Map review jobs (EN)", href: "/en/google-maps-marketing/map-review-jobs", note: "Trang tiếng Anh" },
      { label: "Google Business Profile Help", href: "https://support.google.com/business", note: "External · Hỗ trợ chính thức Google" },
      { label: "Chính sách đánh giá Google", href: "https://support.google.com/contributionpolicy/answer/7400114", note: "External · Chính sách Google" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Việc làm đánh giá Map – chương trình CTV trải nghiệm thật" },
    ],
    schema: { serviceType: "Google Maps Review & Reputation Marketing", offerMinPriceVnd: 6000000 },
  },

  // ─── EN Website Design spokes ───────────────────────────────────────────────
  {
    path: "/en/website-design/spa-hotel-website-hoi-an",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Spa & Hotel Website Design Hoi An", href: "/en/website-design/spa-hotel-website-hoi-an" },
    ],
    primaryKeyword: "spa hotel website design Hoi An",
    metaTitle: "Spa & Hotel Website Design in Hoi An | Cong Thien Agency",
    metaDescription:
      "Professional website design for spas, hotels, homestays and resorts in Hoi An and Da Nang. Mobile-first, fast, multilingual and built for direct bookings.",
    eyebrow: "Website · Hoi An",
    h1: "Spa & Hotel Website Design in Hoi An and Da Nang",
    heroSub:
      "Websites built specifically for tourism accommodation and wellness businesses in Hoi An and Da Nang — fast, mobile-first, multilingual and optimised for direct bookings.",
    heroCta: "Get a website proposal",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Your website is the only online asset you fully control. OTA platforms like Booking.com and Agoda charge commission on every booking and own the customer relationship. A well-built, fast-loading website for your spa or hotel in Hoi An creates a direct booking channel that costs nothing per transaction, ranks on Google, and gives Korean, Western and Vietnamese guests a trustworthy place to learn about your business and book.",
    sections: [
      {
        heading: "What a spa or hotel website needs to convert visitors into bookings",
        bullets: [
          "Fast loading on mobile — most guests research and book on their phone, often on slow hotel Wi-Fi.",
          "Real photography of the space, rooms and services — not stock images that undermine trust.",
          "Clear pricing or rate request form that removes friction from the booking step.",
          "Multilingual content in English and Vietnamese as a minimum; Korean language pages if Korean tourists are a target segment.",
          "Integration with Google Maps so the listing and website reinforce each other for local search.",
        ],
      },
      {
        heading: "SEO and Google Maps visibility built into the design",
        body:
          "The website is built to be indexed and ranked by Google from day one — with correct heading structure, LocalBusiness schema markup, consistent name and address information, fast page load scores and location-relevant content. These signals also strengthen your Google Business Profile ranking because Google uses website data to validate and rank local listings.",
      },
      {
        heading: "Multilingual and Korean-ready",
        body:
          "For spas and hotels in Hoi An and Da Nang that serve Korean tourists, the website can include Korean-language service pages that connect to your Naver marketing strategy. A website page in Korean that is linked from a Naver Blog review creates a trust chain from discovery to booking that fully Korean-language businesses cannot offer.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Mobile-first responsive design built on Next.js or a suitable CMS",
        "PageSpeed performance target of 90+ on mobile",
        "LocalBusiness schema markup for Google Maps reinforcement",
        "Booking enquiry form or integration with your booking system",
        "English and Vietnamese content as standard; Korean content available as an add-on",
        "Handover with a simple content management guide",
      ],
    },
    whoFor: [
      "Spas and massage centres in Hoi An and Da Nang",
      "Boutique hotels, resorts and homestays",
      "Wellness and retreat businesses",
      "Accommodation businesses wanting to reduce OTA commission",
    ],
    process: [
      { step: "Brief", detail: "Understand your guest profile, booking channels and what you want the website to achieve." },
      { step: "Design", detail: "Create a site structure and visual design suited to your brand and guest expectations." },
      { step: "Build", detail: "Develop the site with performance, SEO and multilingual requirements built in from the start." },
      { step: "Launch", detail: "Deploy, connect to Google Search Console and submit the sitemap for indexing." },
    ],
    priceFrom: "Website from 15,000,000 VND",
    priceNote:
      "Price depends on page count, features, languages and booking integrations. Message me on Zalo for a quote based on your specific requirements.",
    faqs: [
      {
        q: "Do I need a website if I already have a Booking.com or Agoda listing?",
        a: "Yes. OTA platforms take 15–25% commission on every booking and control the guest relationship. Your own website creates a direct booking channel where you pay no commission and can build your brand and email list independently.",
      },
      {
        q: "How long does a spa or hotel website take to build?",
        a: "A standard project takes 3–5 weeks from brief to launch. Timeline depends on how quickly content (photos, text, pricing) is ready and how many revision rounds are needed.",
      },
      {
        q: "Will the website rank on Google?",
        a: "The site is built with technical SEO, LocalBusiness schema and Google Maps integration from the start. Ranking depends on competitive factors in your specific market, but the technical foundation will be correct.",
      },
      {
        q: "Can you add Korean-language pages to the website?",
        a: "Yes. Korean-language service pages can be added as part of the initial build or as a later add-on. These pages work best when combined with a Naver marketing strategy that links Korean blog content back to the website.",
      },
      {
        q: "Can you connect the website to my existing booking system?",
        a: "This depends on your booking system and whether it provides an embeddable widget or API. Common systems like Booking Engine, SimplyBook and similar can usually be integrated.",
      },
    ],
    related: [
      { label: "Tourism Website Design Vietnam", href: "/en/website-design/tourism-website-design-vietnam", note: "Related service" },
      { label: "Google Maps for hotels", href: "/vi/google-maps-marketing/cho-khach-san", note: "Local SEO service" },
      { label: "Naver SEO for hotels", href: "/en/naver-marketing/naver-seo-agency-for-hotels", note: "Korean market" },
      { label: "Website design for tourism Hoi An", href: "/en/blog/website-design-for-tourism-hoi-an", note: "Blog guide" },
      { label: "Booking website vs OTA for tourism", href: "/en/blog/booking-website-vs-ota-tourism-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-website.webp", alt: "Spa hotel website design for tourism businesses in Hoi An" },
    ],
    schema: { serviceType: "Website Design for Spas and Hotels", offerMinPriceVnd: 15000000 },
  },
  {
    path: "/en/website-design/tourism-website-design-vietnam",
    cluster: "website",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Tourism Website Design Vietnam", href: "/en/website-design/tourism-website-design-vietnam" },
    ],
    primaryKeyword: "tourism website design Vietnam",
    metaTitle: "Tourism Website Design in Vietnam | Cong Thien Agency",
    metaDescription:
      "Website design for tourism businesses in Vietnam: cooking classes, tour operators, restaurants and local experiences in Hoi An and Da Nang. Fast, multilingual and built for bookings.",
    eyebrow: "Website · Vietnam Tourism",
    h1: "Tourism Website Design for Vietnam Businesses",
    heroSub:
      "Websites for cooking classes, tour operators, restaurants, local experiences and hospitality businesses in Vietnam — built to rank on Google, load fast and convert international visitors into bookings.",
    heroCta: "Get a website proposal",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Tourism businesses in Vietnam — cooking classes, local tours, restaurants, activity providers — often rely entirely on OTA listings and social media. A dedicated website changes the game: it creates a direct booking channel that you own, a platform for Korean and English-language SEO, and a trust anchor that booking platforms cannot provide.",
    sections: [
      {
        heading: "What makes a tourism website different from a general business website",
        bullets: [
          "Booking and enquiry flow is central — not an afterthought. The site must make it easy to check availability and book or enquire.",
          "Photo and video content is the primary conversion driver — guests need to see exactly what the experience looks and feels like before they commit.",
          "Multilingual is not optional for international tourism businesses — English is a minimum; Korean or Japanese may apply depending on your target market.",
          "Local SEO signals must be built in — the site should reinforce your Google Maps listing and rank for location-based searches.",
          "Mobile performance is critical — most international tourists research and book on their phone.",
        ],
      },
      {
        heading: "Reaching Korean tourists through your website",
        body:
          "For cooking classes, tours and restaurants in Hoi An that serve Korean visitors, a website with Korean-language pages creates a powerful combination with your Naver marketing: Korean blog posts link to your Korean website pages, Korean tourists can read about your business in their own language, and Google indexes the Korean content for local search. This is the difference between being found and not being found by the Korean market.",
      },
      {
        heading: "Direct booking without OTA commission",
        body:
          "Many tourism activity providers in Hoi An pay 20–30% commission to OTA platforms like Viator, Klook or GetYourGuide. A website with a direct booking form or integration with a booking engine creates a channel where the commission stays with you. Over time this difference compounds significantly, especially for recurring and high-volume businesses.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Website design and development suited to tourism activity businesses",
        "Booking enquiry form or direct booking integration",
        "Mobile-first, fast-loading build with PageSpeed 90+ target",
        "English and Vietnamese content; Korean language available as add-on",
        "LocalBusiness schema and Google Maps reinforcement",
        "Photo optimisation for tourism visuals",
      ],
    },
    whoFor: [
      "Cooking classes and culinary experience providers",
      "Local tour operators and activity providers",
      "Restaurants and cafes targeting international guests",
      "Photography tours, bicycle tours and cultural experiences",
    ],
    process: [
      { step: "Brief", detail: "Define your core offering, target guests, booking process and any existing tech stack." },
      { step: "Design", detail: "Build a site structure that leads international visitors naturally from discovery to enquiry." },
      { step: "Build", detail: "Develop with performance, multilingual SEO and booking flow requirements in place from the start." },
      { step: "Launch", detail: "Go live with sitemap submission, Google Search Console setup and a short training session." },
    ],
    priceFrom: "Website from 12,000,000 VND",
    priceNote:
      "Price depends on page count, booking integration, number of languages and photo editing requirements. Message me on Zalo for a custom quote.",
    faqs: [
      {
        q: "Can you build a website for a cooking class or tour business in Hoi An?",
        a: "Yes — cooking classes and local tours are a strong fit for this service. The site will include an experience description page, photo gallery, booking form and optional Korean-language content.",
      },
      {
        q: "What booking system should I use?",
        a: "This depends on your volume and workflow. Simple businesses often start with a WhatsApp or Zalo enquiry form. Growing businesses can integrate with SimplyBook, Fareharbor or a custom solution. The recommendation will come from the brief.",
      },
      {
        q: "How does a website help my Google Maps ranking?",
        a: "Google uses your website to verify and strengthen your local listing — checking that the name, address and phone number match, reading the content to understand what you offer, and using the site's quality and speed as a trust signal. A well-built website directly improves your Maps ranking over time.",
      },
      {
        q: "Do I need Korean-language pages if I want Korean tourists?",
        a: "It helps significantly — especially if you are also investing in Naver Blog marketing. Korean pages create a landing destination for Naver blog links and allow Korean tourists to read about your business in their own language before they book.",
      },
    ],
    related: [
      { label: "Spa & Hotel Website Design Hoi An", href: "/en/website-design/spa-hotel-website-hoi-an", note: "Related service" },
      { label: "Attract Korean tourists with Naver", href: "/en/naver-marketing/attract-korean-tourists-with-naver", note: "Korean market" },
      { label: "Google Maps for restaurants", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Local SEO" },
      { label: "Website design for tourism Hoi An", href: "/en/blog/website-design-for-tourism-hoi-an", note: "Blog guide" },
      { label: "Multilingual website for Vietnam tourism", href: "/en/blog/multilingual-website-tourism-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-website.webp", alt: "Tourism website design for cooking classes and tours in Vietnam" },
    ],
    schema: { serviceType: "Tourism Website Design", offerMinPriceVnd: 12000000 },
  },

  // ─── EN Google Maps spokes ───────────────────────────────────────────────────
  {
    path: "/en/google-maps-marketing/google-business-profile-vietnam",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Google Business Profile Vietnam", href: "/en/google-maps-marketing/google-business-profile-vietnam" },
    ],
    primaryKeyword: "Google Business Profile Vietnam",
    metaTitle: "Google Business Profile Setup & Optimisation in Vietnam | Cong Thien Agency",
    metaDescription:
      "Expert Google Business Profile setup and optimisation for tourism businesses in Hoi An and Da Nang. Correct categories, keyword-rich descriptions, photo strategy and local SEO.",
    eyebrow: "Google Maps · GBP",
    h1: "Google Business Profile Setup and Optimisation in Vietnam",
    heroSub:
      "A complete, well-optimised Google Business Profile is the foundation of local search visibility for any tourism business in Hoi An and Da Nang.",
    heroCta: "Get a GBP audit",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Google Business Profile (formerly Google My Business) is the listing that appears when someone searches for your business — or for businesses like yours — on Google Search and Google Maps. For hotels, spas, restaurants, cooking classes and tours in Hoi An and Da Nang, an incomplete or incorrectly set up profile means invisibility when international tourists are actively looking to book.",
    sections: [
      {
        heading: "What an optimised Google Business Profile includes",
        bullets: [
          "Correct primary and secondary business categories that match how tourists search for your type of business.",
          "A keyword-rich business description written in English (and optionally Vietnamese and Korean) that describes what makes your business distinctive.",
          "Accurate opening hours, service attributes, booking links and contact information consistent with your website.",
          "A complete photo set covering interior, exterior, services and food or products.",
          "Regular Google Posts to signal that the listing is actively managed.",
        ],
      },
      {
        heading: "Why category selection matters more than most businesses realise",
        body:
          "Google uses your primary category to determine which searches your listing is eligible to appear for. A spa listed under 'Day Spa' ranks differently from one listed under 'Beauty Salon' or 'Massage Therapist' — and the right choice depends on how tourists in your specific market actually search. Getting this wrong from the start means months of lost visibility.",
      },
      {
        heading: "GBP and your website work together",
        body:
          "Google cross-references your Google Business Profile with your website to verify consistency and assess trust. A website with matching NAP information, LocalBusiness schema markup and relevant local content directly strengthens your GBP ranking. The two assets reinforce each other — optimising one without the other leaves performance on the table.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Full audit of existing GBP or new profile setup from scratch",
        "Category selection and optimisation for your specific business type",
        "Description writing in English (Vietnamese and Korean available as add-on)",
        "Photo set review and upload guidance",
        "Service list and attribute completion",
        "Google Search Console connection and sitemap submission",
      ],
    },
    whoFor: [
      "Spas, hotels and restaurants newly setting up a GBP",
      "Businesses with an existing profile that is incomplete or incorrectly categorised",
      "Tourism businesses preparing for a high season push",
      "Any business that wants to improve its local search ranking on Google Maps",
    ],
    process: [
      { step: "Audit", detail: "Review current profile status, category accuracy and completeness score." },
      { step: "Optimise", detail: "Fix categories, description, attributes, hours and photos." },
      { step: "Content", detail: "Add Google Posts and ensure website consistency." },
      { step: "Monitor", detail: "Track impressions, calls and direction requests in GBP Insights." },
    ],
    priceFrom: "From 3,500,000 VND / campaign",
    priceNote:
      "Price depends on current profile state, languages required and whether website updates are included. Message on Zalo for a scope-specific quote.",
    faqs: [
      {
        q: "Is Google Business Profile free to set up?",
        a: "Yes — the listing itself is free. The cost of this service is for the setup, optimisation work and ongoing content strategy, not for the listing itself.",
      },
      {
        q: "How long does it take to see improvement in Google Maps ranking after optimisation?",
        a: "Profile updates can take effect within a few days to a few weeks. Ranking improvement depends on your market's competitiveness — for many tourism businesses in Hoi An, a complete and accurate profile shows measurable improvement within 4–8 weeks.",
      },
      {
        q: "Do I need to verify my Google Business Profile?",
        a: "Yes — a verified listing appears in Google Maps search results and gives you control over the information displayed. Verification is done via postcard, phone, email or video depending on what Google allows for your business type and location.",
      },
      {
        q: "Can you manage the profile on an ongoing basis?",
        a: "Yes — monthly management is available, including Google Posts, photo updates, review response guidance and performance reporting.",
      },
    ],
    related: [
      { label: "Google Maps Review & Reputation", href: "/en/google-maps-marketing/review-reputation-vietnam", note: "Reviews service" },
      { label: "Google Maps for spas Vietnam", href: "/en/google-maps-marketing/google-maps-for-spas-vietnam", note: "Industry spoke" },
      { label: "Google Maps guide Hoi An Da Nang", href: "/en/blog/google-maps-hoi-an-da-nang-guide", note: "Blog guide" },
      { label: "Google Business Profile setup Vietnam", href: "/en/blog/google-business-profile-setup-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Google Business Profile setup and optimisation for tourism businesses in Vietnam" },
    ],
    schema: { serviceType: "Google Business Profile Optimisation", offerMinPriceVnd: 3500000 },
  },
  {
    path: "/en/google-maps-marketing/review-reputation-vietnam",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Google Review & Reputation Vietnam", href: "/en/google-maps-marketing/review-reputation-vietnam" },
    ],
    primaryKeyword: "Google Maps review reputation Vietnam",
    metaTitle: "Google Maps Review & Reputation Management in Vietnam | Cong Thien Agency",
    metaDescription:
      "Build genuine Google review volume and manage your online reputation for tourism businesses in Hoi An and Da Nang. No fake reviews — only sustainable, policy-compliant review strategy.",
    eyebrow: "Google Maps · Review & Reputation",
    h1: "Google Maps Review & Reputation Management for Tourism Businesses in Vietnam",
    heroSub:
      "Build a steady stream of genuine guest reviews and manage your Google reputation the right way — without risking your listing.",
    heroCta: "Get a reputation audit",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Star rating is the first thing a tourist sees when your business appears on Google Maps. A high rating with a consistent volume of recent, genuine reviews signals trust and converts browsers into guests. This service helps tourism businesses in Hoi An and Da Nang build that review presence systematically — without fake reviews, without risk.",
    sections: [
      {
        heading: "Why genuine reviews matter more than volume alone",
        bullets: [
          "Google's algorithm detects patterns of fake or incentivised reviews and can remove or suppress them.",
          "International tourists read review content, not just star scores — a recent, detailed review builds more trust than an old aggregate.",
          "Diverse reviews from different nationalities reinforce trust across your target audiences.",
          "Review response behaviour signals to Google and to potential guests that your business is professionally managed.",
        ],
      },
      {
        heading: "How we build genuine review volume",
        body:
          "The most effective system is a simple, consistent post-service review request — a QR code at reception, a follow-up WhatsApp message, a card left with the bill. The key is timing (request immediately after a positive experience), ease (one tap to the review form) and training (staff who know when and how to ask). This consistently outperforms any shortcut and builds a review base that compounds over time.",
      },
      {
        heading: "Managing negative reviews the right way",
        body:
          "Negative reviews are inevitable — what matters is how you respond. A thoughtful, professional response to a negative review often does more for your reputation than the review itself does against it. We advise on response tone, what to acknowledge, what to avoid and how to invite the guest back. This is covered in detail in our guide on responding to negative Google reviews.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Review velocity audit — current pace, recency and rating breakdown",
        "Post-service review request system (QR code, message templates, staff script)",
        "Review response templates for positive and negative reviews",
        "Monthly review performance report",
        "Guidance on flagging fake or malicious reviews for Google removal",
      ],
    },
    whoFor: [
      "Spas and wellness businesses wanting to increase review count",
      "Restaurants and cafes competing on Google Maps local ranking",
      "Hotels and homestays targeting international guests",
      "Any tourism business whose review score is holding back bookings",
    ],
    process: [
      { step: "Audit", detail: "Assess current review count, rating, recency and response rate." },
      { step: "System", detail: "Build the post-service review request process for your specific workflow." },
      { step: "Train", detail: "Brief staff or owners on how and when to ask for reviews." },
      { step: "Monitor", detail: "Track monthly review velocity and flag issues." },
    ],
    priceFrom: "From 3,500,000 VND / campaign",
    priceNote: "Price depends on current review state and scope of ongoing management required.",
    faqs: [
      {
        q: "Do you offer fake or paid Google reviews?",
        a: "No. Fake reviews violate Google's policies and can result in listing suspension. This service is built entirely on genuine reviews from real guests using a post-service request process.",
      },
      {
        q: "How quickly can we increase our review count?",
        a: "A well-implemented post-service request system typically generates 5–15 new reviews per month for an active tourism business. The pace depends on guest volume and how consistently the process is applied.",
      },
      {
        q: "Can you remove bad reviews?",
        a: "Only reviews that violate Google's content policies can be flagged for removal — and Google decides whether to act. What we can do is help you respond effectively and build enough genuine positive reviews that any individual negative review has less impact on your overall score.",
      },
      {
        q: "How important is responding to reviews for ranking?",
        a: "Google has confirmed that responding to reviews is a positive signal for local ranking. Beyond ranking, responses signal professionalism to potential guests reading your profile.",
      },
    ],
    related: [
      { label: "Negative Review Management", href: "/en/google-maps-marketing/negative-review-management-vietnam", note: "Related service" },
      { label: "GBP Setup Vietnam", href: "/en/google-maps-marketing/google-business-profile-vietnam", note: "Foundation" },
      { label: "Get more Google reviews guide", href: "/en/blog/get-more-google-reviews-tourism-vietnam", note: "Blog guide" },
      { label: "Respond to negative reviews", href: "/en/blog/respond-to-negative-reviews-tourism", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Google Maps review and reputation management for tourism businesses in Vietnam" },
    ],
    schema: { serviceType: "Google Maps Review & Reputation Management", offerMinPriceVnd: 3500000 },
  },
  {
    path: "/en/google-maps-marketing/google-maps-for-spas-vietnam",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Google Maps for Spas Vietnam", href: "/en/google-maps-marketing/google-maps-for-spas-vietnam" },
    ],
    primaryKeyword: "Google Maps for spas Vietnam",
    metaTitle: "Google Maps Optimisation for Spas in Hoi An & Da Nang | Cong Thien Agency",
    metaDescription:
      "Improve your spa's Google Maps ranking in Hoi An and Da Nang: category optimisation, treatment photos, genuine reviews and local SEO for spa businesses targeting international guests.",
    eyebrow: "Google Maps · Spa",
    h1: "Google Maps Optimisation for Spas in Hoi An and Da Nang",
    heroSub:
      "Most tourists searching for a spa in Hoi An or Da Nang choose from the top three Google Maps results. This service is about getting your spa into that position.",
    heroCta: "Get a spa profile audit",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "When a tourist arrives in Hoi An or Da Nang and searches 'spa near me' or 'massage Hoi An', they are shown a list of three businesses — the local pack. The spas that appear there capture a disproportionate share of walk-in and same-day bookings. Google Maps optimisation for spas is about making sure your business is consistently in that pack for the searches that matter to your guests.",
    sections: [
      {
        heading: "Why spas depend more on Google Maps than most businesses",
        bullets: [
          "Spa bookings are often same-day or next-day — guests search while already in the destination.",
          "Photo quality is a primary decision driver — guests compare treatment rooms, ambience and cleanliness before choosing.",
          "Review count and rating directly determine who appears in the local pack.",
          "Many international guests do not know specific spa names — they discover through search.",
        ],
      },
      {
        heading: "What spa-specific profile optimisation looks like",
        body:
          "A spa profile needs: the correct primary category (Day Spa, Massage Therapist, or Beauty Salon depending on your primary service), a complete treatment menu listed as services, high-quality photos of treatment rooms and relaxation spaces, accurate booking link or WhatsApp contact, and a description written in English that includes location keywords like 'Hoi An old town' or 'Da Nang beachfront'.",
      },
      {
        heading: "Building reviews for a spa",
        body:
          "Spas are well-positioned to build reviews consistently because the service experience is personal and positive outcomes are the norm. The best system is a QR code at checkout with a short message thanking the guest and inviting them to share their experience. Staff training on when and how to mention it matters — timing the ask at the moment of maximum satisfaction is the key variable.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Spa GBP audit and category correction",
        "Treatment service list and attribute completion",
        "Photo strategy for spa interiors and treatments",
        "Post-treatment review request system",
        "English-language description and Google Post templates",
      ],
    },
    whoFor: [
      "Day spas and massage centres in Hoi An and Da Nang",
      "Wellness retreats and holistic therapy centres",
      "Hotel spas wanting to attract outside guests",
      "New spas needing to build their Google presence from scratch",
    ],
    process: [
      { step: "Audit", detail: "Review current spa profile — category, photos, reviews and completeness." },
      { step: "Optimise", detail: "Fix categories, update description, complete service list and photo set." },
      { step: "Reviews", detail: "Set up post-treatment review request workflow." },
      { step: "Monitor", detail: "Track profile impressions, clicks and calls monthly." },
    ],
    priceFrom: "From 3,500,000 VND / campaign",
    priceNote: "Scope depends on current profile state and whether ongoing management is included.",
    faqs: [
      {
        q: "Does it help if my spa is not in the city centre?",
        a: "Yes — Google ranks businesses relative to the searcher's location. A spa in a quieter area can still rank strongly for searches made by guests staying in that part of the city, especially with a well-optimised profile.",
      },
      {
        q: "How do I compete with spas that have hundreds of reviews?",
        a: "Recency matters as much as volume. A spa with 50 reviews in the last 3 months often outranks one with 300 reviews spread over 4 years. Consistent, recent reviews are the practical priority.",
      },
      {
        q: "Can you help with my Naver presence too?",
        a: "Yes — for spas targeting Korean tourists specifically, Naver Blog and Naver Place are equally important as Google Maps. Both can be managed together as part of a combined Korean and international guest strategy.",
      },
    ],
    related: [
      { label: "Spa website design Hoi An", href: "/en/website-design/spa-hotel-website-hoi-an", note: "Website service" },
      { label: "Naver SEO for hotels", href: "/en/naver-marketing/naver-seo-agency-for-hotels", note: "Korean market" },
      { label: "GBP setup Vietnam", href: "/en/google-maps-marketing/google-business-profile-vietnam", note: "Foundation" },
      { label: "Google Maps guide Hoi An Da Nang", href: "/en/blog/google-maps-hoi-an-da-nang-guide", note: "Blog guide" },
      { label: "Get more Google reviews", href: "/en/blog/get-more-google-reviews-tourism-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/spa.webp", alt: "Google Maps optimisation for spas in Hoi An and Da Nang" },
    ],
    schema: { serviceType: "Google Maps Optimisation for Spas", offerMinPriceVnd: 3500000 },
  },
  {
    path: "/en/google-maps-marketing/google-maps-for-restaurants-vietnam",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Google Maps for Restaurants Vietnam", href: "/en/google-maps-marketing/google-maps-for-restaurants-vietnam" },
    ],
    primaryKeyword: "Google Maps for restaurants Vietnam",
    metaTitle: "Google Maps Optimisation for Restaurants in Hoi An & Da Nang | Cong Thien Agency",
    metaDescription:
      "Improve your restaurant's Google Maps ranking in Hoi An and Da Nang: menu listing, food photos, genuine reviews and local SEO for restaurants targeting international diners.",
    eyebrow: "Google Maps · Restaurant",
    h1: "Google Maps Optimisation for Restaurants in Hoi An and Da Nang",
    heroSub:
      "Restaurants in Hoi An and Da Nang compete intensely for tourist footfall. A well-optimised Google Maps listing puts your restaurant in front of international guests at the moment they are deciding where to eat.",
    heroCta: "Get a restaurant profile audit",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "International tourists in Hoi An and Da Nang choose restaurants primarily through Google Maps. They search 'restaurant near me', read reviews, look at food photos and compare options within minutes of feeling hungry. A restaurant that is not visible — or that has an incomplete profile with no recent reviews or poor photos — simply does not get chosen.",
    sections: [
      {
        heading: "What restaurants need on Google Maps to compete",
        bullets: [
          "Correct category: 'Restaurant' or a more specific type (Vietnamese Restaurant, Seafood Restaurant, Cafe) depending on your menu.",
          "A complete menu listing in English — tourists often check the menu before they visit.",
          "High-quality food photos showing actual dishes rather than empty dining rooms.",
          "Accurate price range attribute so guests know what to expect.",
          "Opening hours that are kept current — incorrect hours are one of the most common reasons restaurants lose Maps trust.",
        ],
      },
      {
        heading: "Food photos: the single most important asset",
        body:
          "For restaurants, Google Maps photos drive decisions more than any other factor. Dishes should be photographed in natural light, on clean backgrounds, showing realistic portion sizes and presentation. Owner-uploaded photos are supplemented by guest photos — encouraging guests to photograph and upload their dishes is a legitimate and effective strategy for building a strong visual profile.",
      },
      {
        heading: "Reviews for restaurants: volume and frequency",
        body:
          "Restaurants can build review velocity faster than almost any other business type because of daily guest turnover. A simple QR code on the receipt or a short verbal invitation from staff is enough to generate consistent weekly reviews. The goal is steady, diverse reviews from multiple nationalities — which reflects the typical restaurant guest mix in Hoi An and Da Nang.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Restaurant GBP audit and category optimisation",
        "Menu listing and price range attribute setup",
        "Food photo strategy and upload guidance",
        "Post-meal review request system",
        "English description with location and cuisine keywords",
      ],
    },
    whoFor: [
      "Restaurants and cafes in Hoi An old town and Da Nang",
      "Street food venues and local experience restaurants",
      "Cooking class providers wanting to attract dining guests",
      "Hotel restaurants targeting outside guests",
    ],
    process: [
      { step: "Audit", detail: "Review current restaurant profile — categories, menu, photos, reviews." },
      { step: "Optimise", detail: "Complete menu, update photos, fix categories and attributes." },
      { step: "Reviews", detail: "Set up post-meal review request process." },
      { step: "Monitor", detail: "Track impressions, direction requests and calls monthly." },
    ],
    priceFrom: "From 3,500,000 VND / campaign",
    priceNote: "Final scope depends on profile state and whether ongoing monthly management is required.",
    faqs: [
      {
        q: "Should I list my restaurant on Google Maps in Vietnamese or English?",
        a: "Ideally both. The business name and primary information should be consistent across languages. The description can be in English as the primary international language, with Vietnamese for local search.",
      },
      {
        q: "How do I get tourists to leave Google reviews?",
        a: "The most effective method is a QR code linking directly to your Google review form, placed on the receipt or table card. Timing the ask at the end of a positive meal — when the guest is most satisfied — is key.",
      },
      {
        q: "Does Naver also matter for restaurants?",
        a: "Yes — for restaurants that attract Korean tourists, Naver Blog reviews and Naver Place are critical. Korean food bloggers are extremely active and a single well-placed Naver post can drive significant footfall. Both Google and Naver strategies can run in parallel.",
      },
    ],
    related: [
      { label: "Review & Reputation Vietnam", href: "/en/google-maps-marketing/review-reputation-vietnam", note: "Reviews service" },
      { label: "Naver Map optimization restaurants", href: "/en/naver-marketing/naver-map-optimization-restaurants-vietnam", note: "Korean market" },
      { label: "GBP setup Vietnam", href: "/en/google-maps-marketing/google-business-profile-vietnam", note: "Foundation" },
      { label: "Google Maps guide Hoi An", href: "/en/blog/google-maps-hoi-an-da-nang-guide", note: "Blog guide" },
      { label: "Get more Google reviews", href: "/en/blog/get-more-google-reviews-tourism-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/restaurant.webp", alt: "Google Maps optimisation for restaurants in Hoi An and Da Nang" },
    ],
    schema: { serviceType: "Google Maps Optimisation for Restaurants", offerMinPriceVnd: 3500000 },
  },
  {
    path: "/en/google-maps-marketing/google-maps-for-hotels-vietnam",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Google Maps for Hotels Vietnam", href: "/en/google-maps-marketing/google-maps-for-hotels-vietnam" },
    ],
    primaryKeyword: "Google Maps for hotels Vietnam",
    metaTitle: "Google Maps Optimisation for Hotels in Hoi An & Da Nang | Cong Thien Agency",
    metaDescription:
      "Improve your hotel's Google Maps visibility in Hoi An and Da Nang: profile optimisation, room photos, genuine reviews and local SEO to attract direct bookings from international guests.",
    eyebrow: "Google Maps · Hotel",
    h1: "Google Maps Optimisation for Hotels in Hoi An and Da Nang",
    heroSub:
      "International guests searching for hotels in Hoi An and Da Nang compare options on Google Maps before opening a single booking platform. A strong profile here creates the first impression.",
    heroCta: "Get a hotel profile audit",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Hotels, boutique stays and homestays in Hoi An and Da Nang compete across Google Search, Google Maps and OTA platforms. What many overlook is that Google Maps is often the first touchpoint — the place where a guest decides whether to investigate further or move on. A well-optimised profile at this stage does not just improve ranking; it converts interest into clicks, clicks into website visits and website visits into direct bookings.",
    sections: [
      {
        heading: "What hotel Google Maps profiles must get right",
        bullets: [
          "Correct property type category — Hotel, Boutique Hotel, Bed & Breakfast, or Hostel depending on your classification.",
          "Room and facility photos: pool, lobby, rooms, views and breakfast are the highest-priority visual categories for accommodation.",
          "Check-in and check-out information, payment methods and accessibility attributes — guests use these to filter options.",
          "Booking link connected directly to your website or booking engine to capture direct bookings.",
          "Response to every review — hotels are scrutinised more closely than most business types on this measure.",
        ],
      },
      {
        heading: "Reviews for hotels: what international guests read",
        body:
          "International hotel guests read reviews carefully. They look for mentions of breakfast quality, room cleanliness, staff responsiveness, noise levels and Wi-Fi speed. Review responses from management that address specific complaints show future guests how the hotel handles problems. This matters as much as the overall star score.",
      },
      {
        heading: "Connecting Google Maps to direct booking",
        body:
          "The practical goal of hotel Google Maps optimisation is not just better ranking — it is more direct bookings. A profile that includes a direct booking link, a clear description of what makes the property distinctive, and strong social proof through reviews gives guests a reason to book direct rather than through an OTA. Combined with a fast, well-built website, this creates a direct channel that compounds over time.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Hotel GBP audit and category check",
        "Room and facility photo review and upload strategy",
        "Amenity and attribute completion",
        "Booking link and contact information setup",
        "Review response templates for hotel-specific guest feedback",
        "Monthly performance review",
      ],
    },
    whoFor: [
      "Boutique hotels, resorts and homestays in Hoi An and Da Nang",
      "Properties wanting to reduce OTA dependence through direct booking",
      "Hotels with low review scores or outdated profiles",
      "New properties needing to build a Google presence from launch",
    ],
    process: [
      { step: "Audit", detail: "Assess current hotel profile — categories, photos, reviews and booking link." },
      { step: "Optimise", detail: "Complete amenities, update photos, connect booking link." },
      { step: "Reviews", detail: "Set up post-checkout review request and response workflow." },
      { step: "Monitor", detail: "Track monthly profile views, booking link clicks and review velocity." },
    ],
    priceFrom: "From 3,500,000 VND / campaign",
    priceNote: "Price depends on property size, current profile state and scope of ongoing management.",
    faqs: [
      {
        q: "Does Google Maps ranking affect my position on Booking.com or Agoda?",
        a: "No — Google Maps ranking is independent of OTA platforms. However, a strong Google Maps presence gives guests a direct path to your website, which can reduce OTA dependence over time.",
      },
      {
        q: "Should I respond to all reviews including positive ones?",
        a: "Yes. Responding to positive reviews reinforces good guest relationships and signals an active, engaged management team. Keep positive responses brief and genuine — not a copy-paste template.",
      },
      {
        q: "How do I get guests to leave Google reviews rather than just Booking.com reviews?",
        a: "At checkout, provide a QR code linking to your Google review form alongside your thank-you card. Many guests are willing to leave a Google review if the process is simple and they are asked at the right moment.",
      },
    ],
    related: [
      { label: "Spa & Hotel Website Design", href: "/en/website-design/spa-hotel-website-hoi-an", note: "Website service" },
      { label: "Naver SEO for hotels", href: "/en/naver-marketing/naver-seo-agency-for-hotels", note: "Korean market" },
      { label: "Review & Reputation Vietnam", href: "/en/google-maps-marketing/review-reputation-vietnam", note: "Reviews service" },
      { label: "Google Maps guide Hoi An", href: "/en/blog/google-maps-hoi-an-da-nang-guide", note: "Blog guide" },
      { label: "Local SEO Vietnam tourism", href: "/en/blog/local-seo-vietnam-tourism", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/illustrations/homestay.webp", alt: "Google Maps optimisation for hotels and homestays in Hoi An and Da Nang" },
    ],
    schema: { serviceType: "Google Maps Optimisation for Hotels", offerMinPriceVnd: 3500000 },
  },
  {
    path: "/en/google-maps-marketing/negative-review-management-vietnam",
    cluster: "maps",
    isPillar: false,
    breadcrumb: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "Negative Review Management Vietnam", href: "/en/google-maps-marketing/negative-review-management-vietnam" },
    ],
    primaryKeyword: "negative review management Vietnam",
    metaTitle: "Negative Google Review Management for Tourism Businesses | Cong Thien Agency",
    metaDescription:
      "Professional negative Google review management for spas, restaurants, hotels and tours in Hoi An and Da Nang. Response strategy, flagging policy violations and reputation recovery.",
    eyebrow: "Google Maps · Reputation",
    h1: "Negative Google Review Management for Tourism Businesses in Vietnam",
    heroSub:
      "A single badly-handled negative review can damage bookings for months. A well-handled one can do the opposite — demonstrating to future guests exactly how your business operates under pressure.",
    heroCta: "Get a reputation audit",
    heroCtaHref: SITE.contact.zalo,
    intro:
      "Negative reviews are part of running any tourism business. What separates businesses that recover quickly from those that see sustained booking drops is not the number of negative reviews — it is how they respond. This service helps tourism businesses in Hoi An and Da Nang manage negative reviews professionally, flag policy violations for removal, and build enough positive review volume that individual negative reviews lose their impact.",
    sections: [
      {
        heading: "The three types of negative review and how to handle each",
        bullets: [
          "Genuine negative feedback from a dissatisfied guest — requires a direct, empathetic professional response that acknowledges the issue without being defensive.",
          "Inaccurate or exaggerated reviews — respond factually without becoming confrontational; correct the record calmly.",
          "Fake or competitor reviews — document the evidence and flag to Google for policy violation review. These can be removed if they violate Google's content guidelines.",
        ],
      },
      {
        heading: "Why your response is read by more people than the review itself",
        body:
          "When a potential guest reads a negative review, they immediately scroll to the response. A professional, solution-focused response communicates to that potential guest that the business is managed attentively and that problems are taken seriously. A defensive or absent response communicates the opposite. The goal of your response is not to win an argument with the reviewer — it is to reassure the next thousand guests who read that exchange.",
      },
      {
        heading: "Reputation recovery: building volume to dilute impact",
        body:
          "The most sustainable protection against negative reviews is a consistent volume of genuine positive ones. When a new 1-star review arrives on a business with 12 reviews, it is devastating. When the same review arrives on a business with 200 reviews and a 4.7 average, it barely moves the needle. The long-term strategy is building that volume through a systematic post-service review request process.",
      },
    ],
    deliverables: {
      title: "What is included",
      items: [
        "Negative review audit — categorise existing negative reviews by type",
        "Response templates for different negative review scenarios",
        "Google policy violation reporting for fake or malicious reviews",
        "Positive review generation system to dilute negative impact",
        "Monthly reputation monitoring report",
      ],
    },
    whoFor: [
      "Businesses that have received a damaging negative review",
      "Tourism businesses with a dropping review score",
      "Properties targeted by competitors with fake negative reviews",
      "Any business wanting a proactive reputation management system",
    ],
    process: [
      { step: "Audit", detail: "Review all existing negative reviews and categorise by type and severity." },
      { step: "Respond", detail: "Draft and publish professional responses to open negative reviews." },
      { step: "Flag", detail: "Report policy-violating reviews to Google with documented evidence." },
      { step: "Build", detail: "Implement positive review generation to improve overall score trajectory." },
    ],
    priceFrom: "From 3,500,000 VND / campaign",
    priceNote: "Scope depends on review volume, severity of issues and ongoing management requirements.",
    faqs: [
      {
        q: "Can Google remove a negative review?",
        a: "Google will remove reviews that violate its content policies — including fake reviews, spam, reviews from non-customers, or reviews containing prohibited content. Genuine reviews from real customers, even very negative ones, are not typically removed. We help identify which reviews qualify for a removal request and document the case.",
      },
      {
        q: "Should I respond to old negative reviews even if they are months old?",
        a: "Yes. Potential guests often read every review regardless of date. A professional response to an old negative review is still worth writing — it demonstrates that the business takes feedback seriously even when the pressure has passed.",
      },
      {
        q: "What should I avoid saying in a response to a negative review?",
        a: "Avoid being defensive, denying facts that the guest clearly experienced, or attacking the reviewer's credibility. Even if you believe the review is unfair, the response must read as professional and solution-focused to the thousands of future guests who will see it.",
      },
    ],
    related: [
      { label: "Review & Reputation Vietnam", href: "/en/google-maps-marketing/review-reputation-vietnam", note: "Full service" },
      { label: "GBP setup Vietnam", href: "/en/google-maps-marketing/google-business-profile-vietnam", note: "Foundation" },
      { label: "Respond to negative reviews guide", href: "/en/blog/respond-to-negative-reviews-tourism", note: "Blog guide" },
      { label: "Get more Google reviews", href: "/en/blog/get-more-google-reviews-tourism-vietnam", note: "Blog guide" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Negative Google review management for tourism businesses in Vietnam" },
    ],
    schema: { serviceType: "Negative Review Management", offerMinPriceVnd: 3500000 },
  },

];

export function getService(path: string): Service | undefined {
  return SERVICES.find((s) => s.path === path);
}

export function getServicesByCluster(cluster: Service["cluster"]): Service[] {
  return SERVICES.filter((s) => s.cluster === cluster && !s.isPillar);
}
