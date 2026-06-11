export type ServiceSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type FAQ = { q: string; a: string };

export type ImageSlot = { slot: string; suggestion: string; alt: string };

export type Service = {
  path: string; // full url path, e.g. /vi/thiet-ke-website/spa-hoi-an
  cluster: "website" | "naver" | "maps" | "social";
  isPillar: boolean;
  breadcrumb: { label: string; href: string }[];
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  heroCta: string;
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
    metaTitle: "Thiết kế website SEO có booking & thanh toán | Công Thiên Agency",
    metaDescription:
      "Thiết kế website chuyên nghiệp cho spa, nhà hàng, khách sạn, tour và cooking class tại Hội An – Đà Nẵng. Có booking, thanh toán online và đạt PageSpeed SEO 100/100.",
    eyebrow: "Dịch vụ · Website",
    h1: "Thiết kế website SEO cho doanh nghiệp du lịch tại Hội An – Đà Nẵng",
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
      { label: "Naver Marketing", href: "/vi/naver-marketing", note: "Tiếp cận khách Hàn Quốc" },
      { label: "Bảng giá", href: "/vi/bang-gia", note: "Xem chi phí gói Website Business" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/website-hero.jpg", alt: "Thiết kế website doanh nghiệp Hội An Đà Nẵng" },
      { slot: "proof", suggestion: "/images/proof/serena-pagespeed.jpg", alt: "PageSpeed SEO 100/100 của Serena Retreat" },
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
    metaTitle: "Thiết kế website spa Hội An chuẩn SEO, có booking | Công Thiên Agency",
    metaDescription:
      "Dịch vụ thiết kế website spa Hội An chuyên nghiệp: booking treatment, thanh toán PayPal/Stripe, SEO 100/100 PageSpeed. Kết hợp Naver cho khách Hàn. Tư vấn miễn phí qua Zalo.",
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
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Dịch vụ cùng nhóm website" },
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Tiếp cận khách Hàn cho spa" },
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Tăng uy tín địa phương" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/spa-hoi-an-hero.jpg", alt: "Thiết kế website spa Hội An" },
      { slot: "feature", suggestion: "/images/proof/serena-booking-flow.jpg", alt: "Luồng booking và thanh toán website spa" },
      { slot: "proof", suggestion: "/images/proof/serena-pagespeed.jpg", alt: "PageSpeed SEO 100/100 website spa Serena Retreat" },
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
      { slot: "hero", suggestion: "/images/services/nha-hang-hoi-an-hero.jpg", alt: "Thiết kế website nhà hàng Hội An" },
      { slot: "feature", suggestion: "/images/services/menu-mobile.jpg", alt: "Trang menu website nhà hàng trên mobile" },
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
      { slot: "hero", suggestion: "/images/services/cooking-class-hero.jpg", alt: "Thiết kế website cooking class Hội An" },
      { slot: "proof", suggestion: "/images/proof/ruong-pagespeed.jpg", alt: "PageSpeed SEO 100/100 website Ruong House" },
    ],
    schema: { serviceType: "Thiết kế website cooking class", offerMinPriceVnd: 10000000 },
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
    metaTitle: "Naver Marketing: tiếp cận khách Hàn Quốc | Công Thiên Agency",
    metaDescription:
      "Dịch vụ Naver Marketing cho doanh nghiệp Hội An – Đà Nẵng: booking blogger Hàn, viết bài Naver Blog và xây nội dung tiếp cận khách Hàn trước khi họ đặt dịch vụ.",
    eyebrow: "Dịch vụ · Naver",
    h1: "Naver Marketing — tiếp cận khách Hàn Quốc cho doanh nghiệp Hội An – Đà Nẵng",
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
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Trang chuyên ngành spa" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Gói Naver Blogger Review" },
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Theo khu vực Đà Nẵng" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/naver-hero.jpg", alt: "Naver Marketing tiếp cận khách Hàn Quốc" },
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
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/naver-spa-hero.jpg", alt: "Naver Blog cho spa Hội An Đà Nẵng" },
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
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Theo ngành spa" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Chi tiết gói blogger" },
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Tăng uy tín địa phương" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/naver-danang-hero.jpg", alt: "Naver Marketing Đà Nẵng cho khách Hàn" },
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
      { label: "Bảng giá", href: "/vi/bang-gia", note: "Chi tiết gói Naver" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/blogger-han-hero.jpg", alt: "Booking blogger Hàn Quốc Naver Blogger Review" },
    ],
    schema: { serviceType: "Booking blogger Hàn Quốc", offerPriceVnd: 8000000 },
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
    metaTitle: "Google Maps Marketing & Review Reputation | Công Thiên Agency",
    metaDescription:
      "Tối ưu Google Business Profile, hình ảnh, danh mục và chiến lược Review & Reputation để tăng uy tín địa phương cho doanh nghiệp tại Hội An – Đà Nẵng.",
    eyebrow: "Dịch vụ · Google Maps",
    h1: "Google Maps Marketing — tăng uy tín địa phương cho doanh nghiệp Hội An – Đà Nẵng",
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
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Trang dịch vụ chi tiết" },
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Nền tảng đi kèm Maps" },
      { label: "Social Marketing", href: "/vi/social-marketing", note: "Tăng uy tín đa kênh" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/google-maps-hero.jpg", alt: "Google Maps Marketing Hội An Đà Nẵng" },
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
      { label: "Website nhà hàng Hội An", href: "/vi/thiet-ke-website/nha-hang-hoi-an", note: "Nền tảng đi kèm" },
      { label: "Bảng giá", href: "/vi/bang-gia", note: "Chi tiết gói Review & Reputation" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/maps-review-hero.jpg", alt: "Google Maps Review và Reputation Marketing" },
    ],
    schema: { serviceType: "Google Maps Review & Reputation", offerMinPriceVnd: 3500000 },
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
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Uy tín đa kênh" },
      { label: "Bảng giá", href: "/vi/bang-gia", note: "Chi tiết gói Social" },
      { label: "Liên hệ", href: "/vi/lien-he", note: "Trao đổi nhu cầu cụ thể" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/social-hero.jpg", alt: "Social Marketing và hỗ trợ Facebook" },
    ],
    schema: { serviceType: "Social Marketing", offerMinPriceVnd: 3000000 },
  },
];

export function getService(path: string): Service | undefined {
  return SERVICES.find((s) => s.path === path);
}

export function getServicesByCluster(cluster: Service["cluster"]): Service[] {
  return SERVICES.filter((s) => s.cluster === cluster && !s.isPillar);
}
