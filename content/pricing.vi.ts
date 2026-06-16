export type PricingPackage = {
  id: string;
  cluster: "website" | "naver" | "maps" | "social" | "qr";
  name: string;
  priceLabel: string;
  priceUnit?: string;
  priceFromVnd?: number;
  tagline: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  highlight?: boolean;
  disclaimer?: string;
};

export type PricingGroup = {
  id: string;
  title: string;
  intro: string;
  packages: PricingPackage[];
};

export const PRICING_META = {
  metaTitle: "Bảng giá dịch vụ Website, Naver & Google Maps | Công Thiên Agency",
  metaDescription:
    "Bảng giá tham khảo dịch vụ thiết kế website, Naver Marketing, Google Maps Review & Reputation và Social Growth cho doanh nghiệp Hội An – Đà Nẵng. Báo giá cuối theo nhu cầu thực tế.",
  eyebrow: "Bảng giá",
  h1: "Bảng giá dịch vụ",
  heroSub:
    "Mức giá dưới đây là giá khởi điểm tham khảo. Báo giá cuối cùng phụ thuộc vào quy mô, tính năng và mục tiêu cụ thể của từng dự án — bạn luôn nhận báo giá rõ ràng trước khi bắt đầu.",
};

export const PRICING_NOTE =
  "Tất cả mức giá là giá khởi điểm mang tính tham khảo, chưa bao gồm chi phí bên thứ ba (tên miền, hosting, quảng cáo trả phí, chi phí nền tảng). Báo giá chi tiết được gửi sau khi trao đổi nhu cầu.";

export const PRICING_GROUPS: PricingGroup[] = [
  {
    id: "website",
    title: "Thiết kế website",
    intro:
      "Website chuẩn SEO, tối ưu mobile, có thể tích hợp booking và thanh toán online.",
    packages: [
      {
        id: "website-business",
        cluster: "website",
        name: "Website Business",
        priceLabel: "Từ 10.000.000đ",
        priceUnit: "/ dự án",
        priceFromVnd: 10000000,
        tagline: "Full website cho doanh nghiệp dịch vụ – du lịch.",
        features: [
          "Thiết kế giao diện riêng theo ngành nghề",
          "Tối ưu SEO kỹ thuật: URL, metadata, schema, sitemap",
          "Tối ưu tốc độ & mobile (hướng tới PageSpeed SEO 100/100)",
          "Tùy chọn booking, giỏ hàng và thanh toán online",
          "Email xác nhận tự động sau khi khách đặt",
          "Bàn giao kèm hướng dẫn quản trị nội dung",
        ],
        ctaHref: "/vi/lien-he",
        ctaLabel: "Nhận báo giá website",
        highlight: true,
      },
    ],
  },
  {
    id: "naver",
    title: "Naver Marketing",
    intro:
      "Tiếp cận khách Hàn Quốc đang tìm kiếm dịch vụ trên Naver — nền tảng tìm kiếm số 1 của người Hàn.",
    packages: [
      {
        id: "naver-blogger",
        cluster: "naver",
        name: "Naver Blogger Review",
        priceLabel: "8.000.000đ",
        priceUnit: "/ 4 bài khác nhau",
        priceFromVnd: 8000000,
        tagline: "Bài review trên blog Naver của cộng tác viên người Hàn.",
        features: [
          "4 bài blog review tiếng Hàn theo dịch vụ của bạn",
          "Nội dung tự nhiên, đúng văn phong người Hàn",
          "Kèm hình ảnh và thông tin liên hệ doanh nghiệp",
          "Báo cáo link bài đăng sau khi hoàn thành",
        ],
        ctaHref: "/vi/lien-he",
        ctaLabel: "Đặt gói Blogger Review",
      },
      {
        id: "naver-account",
        cluster: "naver",
        name: "Naver Account Content",
        priceLabel: "6.000.000đ",
        priceUnit: "/ tháng",
        priceFromVnd: 6000000,
        tagline: "Tạo tài khoản và Vận hành nội dung trên tài khoản Naver.",
        features: [
          "Đăng nội dung tiếng Hàn định kỳ hàng tháng",
          "Xây dựng hình ảnh thương hiệu bằng tiếng Hàn",
          "Tối ưu nội dung theo từ khóa khách Hàn tìm kiếm",
          "Báo cáo nội dung đã đăng theo tháng",
        ],
        ctaHref: "/vi/lien-he",
        ctaLabel: "Tư vấn gói tháng",
      },
      {
        id: "naver-koc",
        cluster: "naver",
        name: "Naver KOC Campaign",
        priceLabel: "Báo giá theo chiến dịch",
        tagline: "Hợp tác KOC/blogger Hàn cho chiến dịch chuyên sâu.",
        features: [
          "Lựa chọn KOC phù hợp ngành nghề và ngân sách",
          "Lập kế hoạch nội dung cho từng chiến dịch",
          "Phù hợp dịp ra mắt dịch vụ hoặc mùa cao điểm",
          "Báo giá riêng theo quy mô chiến dịch",
        ],
        ctaHref: "/vi/lien-he",
        ctaLabel: "Trao đổi chiến dịch",
      },
    ],
  },
  {
    id: "maps",
    title: "Google Maps Review & Reputation",
    intro:
      "Thiết lập, tối ưu và quản lý hình ảnh doanh nghiệp trên Google Maps một cách minh bạch.",
    packages: [
      {
        id: "maps-reputation",
        cluster: "maps",
        name: "Google Maps Review & Reputation",
        priceLabel: "Từ 3.500.000đ",
        priceUnit: "/ gói",
        priceFromVnd: 3500000,
        tagline: "Tối ưu hồ sơ và quản lý uy tín trên Google Maps.",
        features: [
          "Thiết lập & tối ưu hồ sơ Google Business Profile",
          "Tối ưu thông tin, hình ảnh, danh mục, giờ mở cửa",
          "Hướng dẫn quy trình thu thập đánh giá thật từ khách",
          "Soạn mẫu phản hồi đánh giá chuyên nghiệp",
          "Tư vấn xử lý đánh giá tiêu cực đúng chính sách Google",
        ],
        ctaHref: "/vi/lien-he",
        ctaLabel: "Tư vấn Google Maps",
        disclaimer:
          "Dịch vụ tập trung vào đánh giá thật từ khách hàng và tuân thủ chính sách Google. Không cung cấp đánh giá ảo.",
      },
    ],
  },
  {
    id: "social",
    title: "Social & Verification Support",
    intro:
      "Hỗ trợ tăng trưởng và xác minh kênh mạng xã hội theo đúng quy trình của nền tảng.",
    packages: [
      {
        id: "fanpage-verify",
        cluster: "social",
        name: "Hỗ trợ xác minh Fanpage / Meta Verified",
        priceLabel: "Từ 3.000.000đ",
        priceUnit: "/ gói",
        priceFromVnd: 3000000,
        tagline: "Chuẩn bị hồ sơ và hỗ trợ quy trình xác minh.",
        features: [
          "Rà soát và chuẩn hóa thông tin Fanpage",
          "Chuẩn bị hồ sơ, giấy tờ theo yêu cầu của Meta",
          "Hướng dẫn nộp xác minh và Meta Verified Support",
          "Tư vấn hoàn thiện kênh để tăng khả năng được duyệt",
        ],
        ctaHref: "/vi/lien-he",
        ctaLabel: "Hỗ trợ xác minh",
        disclaimer:
          "Đây là dịch vụ hỗ trợ chuẩn bị hồ sơ và quy trình. Kết quả phê duyệt cuối cùng phụ thuộc hoàn toàn vào quá trình xét duyệt của Meta — không cam kết 100% được duyệt.",
      },
      {
        id: "social-growth",
        cluster: "social",
        name: "Social Growth Package",
        priceLabel: "Từ 100.000đ",
        priceUnit: "/ 1.000 followers",
        priceFromVnd: 100000,
        tagline: "Gói tăng trưởng kênh mạng xã hội.",
        features: [
          "Tư vấn chiến lược nội dung tăng trưởng kênh",
          "Gói tăng trưởng theo quy mô và mục tiêu",
          "Báo cáo tiến độ minh bạch",
          "Kết hợp tốt cùng nội dung & quảng cáo",
        ],
        ctaHref: "/vi/lien-he",
        ctaLabel: "Tư vấn Social Growth",
      },
    ],
  },
  {
    id: "qr",
    title: "Quét mã QR & Activation",
    intro:
      "Triển khai chiến dịch quét mã QR, tải app và mở tài khoản theo KPI cho agency và nhãn hàng — bằng đội cộng tác viên thật, báo cáo minh bạch.",
    packages: [
      {
        id: "qr-campaign",
        cluster: "qr",
        name: "Chiến dịch quét mã QR theo KPI",
        priceLabel: "Báo giá theo chiến dịch",
        tagline: "Nhận chạy đủ số lượt quét mã / tải app theo KPI bạn cần.",
        features: [
          "Kế hoạch triển khai theo KPI và mốc thời gian",
          "Mạng lưới cộng tác viên thật theo khu vực",
          "Theo dõi tiến độ lượt quét / cài đặt theo ngày",
          "Báo cáo số liệu nghiệm thu minh bạch",
        ],
        ctaHref: "/vi/quet-ma-qr",
        ctaLabel: "Gửi brief chiến dịch",
        disclaimer:
          "Chạy bằng người dùng thật, tài khoản chính chủ, nghiệm thu theo lượt hoàn thành hợp lệ — không bơm số ảo. Báo giá theo loại chiến dịch, số lượt và khu vực.",
      },
    ],
  },
];

export const PRICING_FAQS: { q: string; a: string }[] = [
  {
    q: "Giá trên đã là giá cuối cùng chưa?",
    a: "Đây là giá khởi điểm tham khảo. Báo giá cuối phụ thuộc vào quy mô, tính năng và mục tiêu cụ thể. Bạn luôn nhận báo giá rõ ràng trước khi bắt đầu.",
  },
  {
    q: "Dịch vụ Google Maps có dùng đánh giá ảo không?",
    a: "Không. Dịch vụ tập trung vào việc tối ưu hồ sơ và xây dựng quy trình thu thập đánh giá thật từ khách hàng, tuân thủ chính sách của Google.",
  },
  {
    q: "Có cam kết Fanpage được tick xanh không?",
    a: "Tôi hỗ trợ chuẩn bị hồ sơ và quy trình xác minh để tăng khả năng được duyệt, nhưng kết quả cuối cùng phụ thuộc vào quá trình xét duyệt của Meta nên không thể cam kết 100%.",
  },
  {
    q: "Tôi có thể kết hợp nhiều dịch vụ không?",
    a: "Có. Nhiều doanh nghiệp bắt đầu bằng website rồi kết hợp Naver, Google Maps và Social để tạo hệ thống marketing đồng bộ. Tôi sẽ tư vấn lộ trình phù hợp ngân sách.",
  },
];
