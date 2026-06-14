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
      { label: "Naver Marketing cho spa", href: "/vi/naver-marketing/cho-spa", note: "Ngành · Spa" },
      { label: "Naver cho nhà hàng", href: "/vi/naver-marketing/cho-nha-hang", note: "Ngành · Nhà hàng" },
      { label: "Naver cho khách sạn", href: "/vi/naver-marketing/cho-khach-san", note: "Ngành · Khách sạn" },
      { label: "Naver cho tour", href: "/vi/naver-marketing/cho-tour", note: "Ngành · Tour & trải nghiệm" },
      { label: "Booking blogger Hàn Quốc", href: "/vi/naver-marketing/booking-blogger-han", note: "Gói Naver Blogger Review" },
      { label: "Naver Marketing Hội An", href: "/vi/naver-marketing/hoi-an", note: "Theo khu vực Hội An" },
      { label: "Naver Marketing Đà Nẵng", href: "/vi/naver-marketing/da-nang", note: "Theo khu vực Đà Nẵng" },
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
      { label: "Google Maps Review & Reputation", href: "/vi/google-maps-marketing/review-reputation", note: "Chiến lược đánh giá" },
      { label: "Google Maps cho spa", href: "/vi/google-maps-marketing/cho-spa", note: "Ngành · Spa" },
      { label: "Google Maps cho nhà hàng", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Ngành · Nhà hàng" },
      { label: "Google Maps cho khách sạn", href: "/vi/google-maps-marketing/cho-khach-san", note: "Ngành · Khách sạn" },
      { label: "Google Maps cho tour", href: "/vi/google-maps-marketing/cho-tour", note: "Ngành · Tour & trải nghiệm" },
      { label: "Local SEO Hội An", href: "/vi/google-maps-marketing/hoi-an", note: "Khu vực · Hội An" },
      { label: "Local SEO Đà Nẵng", href: "/vi/google-maps-marketing/da-nang", note: "Khu vực · Đà Nẵng" },
      { label: "Local SEO là gì", href: "/vi/blog/local-seo-la-gi", note: "Blog" },
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
      { label: "Google Maps cho nhà hàng", href: "/vi/google-maps-marketing/cho-nha-hang", note: "Theo ngành" },
      { label: "Cách có thêm đánh giá Google thật", href: "/vi/blog/cach-co-them-danh-gia-google-that", note: "Blog" },
      { label: "Google Business Profile cần có gì", href: "/vi/blog/google-business-profile-can-co-gi", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-maps.webp", alt: "Google Maps Review và Reputation Marketing" },
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
    metaTitle: "Naver Marketing Hội An: tiếp cận khách Hàn phố cổ | Công Thiên Agency",
    metaDescription:
      "Naver Marketing Hội An cho spa, nhà hàng, homestay, cooking class và tour: booking blogger Hàn, nội dung Naver Blog và social proof tiếng Hàn cho khách Hàn đến phố cổ.",
    eyebrow: "Naver · Hội An",
    h1: "Naver Marketing Hội An — đưa doanh nghiệp phố cổ đến đúng nơi khách Hàn tìm kiếm",
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
      { label: "Naver cho tour", href: "/vi/naver-marketing/cho-tour", note: "Trải nghiệm phố cổ" },
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
    metaTitle: "Local SEO Hội An: tối ưu Google Maps cho doanh nghiệp phố cổ | Công Thiên Agency",
    metaDescription:
      "Local SEO Hội An: tối ưu Google Business Profile và đánh giá thật để spa, nhà hàng, homestay và tour xuất hiện khi khách tìm dịch vụ tại Hội An và khu phố cổ.",
    eyebrow: "Google Maps · Hội An",
    h1: "Local SEO Hội An — giúp doanh nghiệp phố cổ hiển thị khi khách tìm trên Google Maps",
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
];

export function getService(path: string): Service | undefined {
  return SERVICES.find((s) => s.path === path);
}

export function getServicesByCluster(cluster: Service["cluster"]): Service[] {
  return SERVICES.filter((s) => s.cluster === cluster && !s.isPillar);
}
