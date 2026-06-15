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
      { label: "Viết bài Naver Blog", href: "/vi/naver-marketing/viet-bai-naver-blog", note: "Spoke · Content" },
      { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver", note: "Spoke · Monthly" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Spoke · Place" },
      { label: "Naver KOC", href: "/vi/naver-marketing/naver-koc", note: "Spoke · Campaign" },
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
    primaryKeyword: "dịch vụ viết bài Naver Blog",
    metaTitle: "Dịch vụ viết bài Naver Blog cho khách Hàn | Công Thiên Agency",
    metaDescription:
      "Dịch vụ viết bài Naver Blog bằng tiếng Hàn cho spa, nhà hàng, khách sạn và tour. Nội dung bám bộ từ khóa, phong cách tự nhiên và phù hợp hành vi đọc của khách Hàn.",
    eyebrow: "Naver · Viết bài",
    h1: "Dịch vụ viết bài Naver Blog cho doanh nghiệp muốn tiếp cận khách Hàn",
    heroSub:
      "Không phải doanh nghiệp nào cũng cần bắt đầu bằng booking blogger. Nhiều trường hợp cần một hệ thống bài viết đều đặn, bám từ khóa và đúng giọng Naver ngay trên kênh của mình.",
    heroCta: "Nhận tư vấn viết bài Naver Blog",
    intro:
      "Viết bài Naver Blog không chỉ là dịch nội dung sang tiếng Hàn. Bài viết cần đúng phong cách người Hàn quen đọc, bám bộ từ khóa tìm kiếm và đủ tự nhiên để không mang cảm giác quảng cáo lộ liễu. Đây là dịch vụ dành cho doanh nghiệp muốn xây nội dung Naver một cách bài bản thay vì đăng rời rạc.",
    sections: [
      {
        heading: "Dịch vụ này phù hợp khi nào?",
        bullets: [
          "Khi doanh nghiệp đã có hoặc đang xây tài khoản Naver riêng.",
          "Khi cần đăng bài đều theo tháng thay vì chỉ một đợt blogger review.",
          "Khi muốn bám bộ từ khóa theo ngành và khu vực.",
          "Khi cần nội dung tiếng Hàn tự nhiên, không phải dịch máy.",
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
    ],
    whoFor: [
      "Doanh nghiệp đã có tài khoản Naver Blog",
      "Spa, nhà hàng, khách sạn muốn đăng bài định kỳ",
      "Doanh nghiệp cần bộ nội dung theo từ khóa Naver",
      "Thương hiệu muốn xây tài sản nội dung tiếng Hàn dài hạn",
    ],
    process: [
      { step: "Xác định chủ đề", detail: "Chốt mục tiêu, ngành và bộ từ khóa cho từng đợt nội dung." },
      { step: "Lên outline", detail: "Xây cấu trúc bài phù hợp phong cách Naver và hành vi người đọc Hàn." },
      { step: "Viết & rà soát", detail: "Soạn bài tiếng Hàn, rà ngữ điệu và tính tự nhiên." },
      { step: "Đăng & tối ưu", detail: "Đăng bài đúng nhịp và điều chỉnh theo tín hiệu hiển thị." },
    ],
    priceFrom: "Báo giá theo số bài / tháng",
    priceNote: "Phù hợp nhất khi kết hợp cùng dịch vụ quản lý tài khoản Naver hàng tháng.",
    faqs: [
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
    ],
    related: [
      { label: "Quản lý tài khoản Naver", href: "/vi/naver-marketing/quan-ly-tai-khoan-naver", note: "Đi cùng dịch vụ này" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place", note: "Bổ trợ tín hiệu địa điểm" },
      { label: "Naver KOC", href: "/vi/naver-marketing/naver-koc", note: "Khi cần campaign lớn hơn" },
      { label: "Cách viết bài Naver Blog chuẩn", href: "/vi/blog/cach-viet-bai-naver-blog-chuan", note: "Blog" },
      { label: "Naver Place khác Naver Blog", href: "/vi/blog/naver-place-khac-naver-blog-the-nao", note: "Blog" },
    ],
    images: [
      { slot: "hero", suggestion: "/images/services/service-naver.webp", alt: "Dịch vụ viết bài Naver Blog" },
    ],
    schema: { serviceType: "Viết bài Naver Blog" },
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
