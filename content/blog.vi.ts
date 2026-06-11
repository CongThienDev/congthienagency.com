export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  path: string;
  cluster: "website" | "naver" | "maps" | "social" | "general";
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  primaryKeyword: string;
  breadcrumb: { label: string; href: string }[];
  body: BlogBlock[];
  related: { label: string; href: string; note: string }[];
};

export const BLOG_HUB = {
  metaTitle: "Blog Marketing Online cho doanh nghiệp du lịch | Công Thiên Agency",
  metaDescription:
    "Kiến thức thực chiến về thiết kế website, SEO, Naver Marketing và Google Maps cho doanh nghiệp dịch vụ – du lịch tại Hội An – Đà Nẵng.",
  eyebrow: "Blog",
  h1: "Blog kiến thức Marketing Online",
  heroSub:
    "Những bài viết thực chiến giúp doanh nghiệp dịch vụ – du lịch hiểu rõ website, SEO, Naver và Google Maps trước khi đầu tư.",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tai-sao-doanh-nghiep-can-website-rieng",
    path: "/vi/blog/tai-sao-doanh-nghiep-can-website-rieng",
    cluster: "website",
    title: "Tại sao doanh nghiệp du lịch cần website riêng, không chỉ Facebook?",
    metaTitle: "Vì sao doanh nghiệp du lịch cần website riêng? | Công Thiên Agency",
    metaDescription:
      "Phân tích lý do doanh nghiệp dịch vụ – du lịch tại Hội An nên có website riêng thay vì chỉ dựa vào Facebook: thương hiệu, SEO, dữ liệu và booking.",
    excerpt:
      "Fanpage giúp bạn tiếp cận khách, nhưng website mới là tài sản bạn thật sự sở hữu. Đây là lý do.",
    date: "2025-01-10",
    readingMinutes: 6,
    primaryKeyword: "doanh nghiệp cần website riêng",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Blog", href: "/vi/blog" },
      {
        label: "Vì sao cần website riêng",
        href: "/vi/blog/tai-sao-doanh-nghiep-can-website-rieng",
      },
    ],
    body: [
      {
        type: "p",
        text: "Rất nhiều spa, nhà hàng và homestay tại Hội An – Đà Nẵng hiện chỉ chạy trên Facebook hoặc Instagram. Cách này tiếp cận khách nhanh, nhưng có một rủi ro lớn: bạn không sở hữu kênh đó.",
      },
      { type: "h2", text: "Website là tài sản bạn sở hữu" },
      {
        type: "p",
        text: "Khi bạn có website riêng, bạn kiểm soát thương hiệu, dữ liệu khách và trải nghiệm đặt dịch vụ. Thuật toán mạng xã hội thay đổi không làm bạn mất khách.",
      },
      { type: "h2", text: "Khách chủ động tìm bạn trên Google" },
      {
        type: "ul",
        items: [
          "Website chuẩn SEO xuất hiện khi khách tìm dịch vụ trên Google.",
          "Khách quốc tế và khách Hàn tin tưởng thương hiệu có website chính chủ.",
          "Một link website chuyên nghiệp dùng được cho Google Maps, Naver, Facebook và Tripadvisor.",
        ],
      },
      { type: "h2", text: "Website cho phép đặt và thanh toán online" },
      {
        type: "p",
        text: "Khác với Fanpage, website có thể tích hợp booking và thanh toán, giúp khách đặt dịch vụ ngay cả ngoài giờ làm việc — như cách tôi đã triển khai cho Serena Retreat và Ruong House.",
      },
    ],
    related: [
      {
        label: "Thiết kế website cho doanh nghiệp du lịch",
        href: "/vi/thiet-ke-website",
        note: "Dịch vụ",
      },
      {
        label: "Serena Retreat",
        href: "/vi/du-an/serena-retreat",
        note: "Case study",
      },
    ],
  },
  {
    slug: "website-spa-hoi-an-can-gi",
    path: "/vi/blog/website-spa-hoi-an-can-gi",
    cluster: "website",
    title: "Website spa tại Hội An cần những gì để có khách đặt lịch?",
    metaTitle: "Website spa Hội An cần gì để có khách đặt? | Công Thiên Agency",
    metaDescription:
      "Checklist những yếu tố một website spa tại Hội An cần có: booking, thanh toán quốc tế, SEO, tốc độ và trải nghiệm mobile để biến lượt xem thành lượt đặt.",
    excerpt:
      "Một website spa đẹp thôi chưa đủ. Đây là những yếu tố thực sự giúp khách đặt lịch.",
    date: "2025-01-17",
    readingMinutes: 7,
    primaryKeyword: "website spa Hội An",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Blog", href: "/vi/blog" },
      {
        label: "Website spa Hội An cần gì",
        href: "/vi/blog/website-spa-hoi-an-can-gi",
      },
    ],
    body: [
      {
        type: "p",
        text: "Khách của spa tại Hội An phần lớn là khách du lịch và khách quốc tế. Họ tìm spa trên Google, xem nhanh trên điện thoại và muốn đặt ngay. Website của bạn cần phục vụ đúng hành vi đó.",
      },
      { type: "h2", text: "Những yếu tố bắt buộc" },
      {
        type: "ul",
        items: [
          "Booking liệu trình rõ ràng, đặt được trên mobile.",
          "Thanh toán quốc tế: PayPal, Stripe, Credit Card.",
          "Email xác nhận tự động tạo sự tin tưởng.",
          "Tốc độ tải nhanh và điểm SEO cao trên PageSpeed.",
          "Hình ảnh truyền tải đúng không gian thư giãn.",
        ],
      },
      { type: "h2", text: "SEO giúp khách tìm thấy bạn" },
      {
        type: "p",
        text: "Cấu trúc URL, metadata, schema và tốc độ tải quyết định việc Google có hiểu và xếp hạng website spa của bạn hay không. Đây là phần kỹ thuật tôi tối ưu mặc định cho mọi dự án.",
      },
    ],
    related: [
      {
        label: "Thiết kế website spa Hội An",
        href: "/vi/thiet-ke-website/spa-hoi-an",
        note: "Dịch vụ",
      },
      {
        label: "Serena Retreat",
        href: "/vi/du-an/serena-retreat",
        note: "Case study",
      },
    ],
  },
  {
    slug: "naver-marketing-la-gi",
    path: "/vi/blog/naver-marketing-la-gi",
    cluster: "naver",
    title: "Naver Marketing là gì và vì sao quan trọng với khách Hàn?",
    metaTitle: "Naver Marketing là gì? Tiếp cận khách Hàn | Công Thiên Agency",
    metaDescription:
      "Giải thích Naver Marketing và lý do doanh nghiệp du lịch tại Hội An – Đà Nẵng nên đầu tư để tiếp cận khách Hàn Quốc trên nền tảng tìm kiếm số 1 của họ.",
    excerpt:
      "Người Hàn tìm kiếm trên Naver chứ không phải Google. Nếu bạn đón khách Hàn, đây là kênh không thể bỏ qua.",
    date: "2025-01-24",
    readingMinutes: 6,
    primaryKeyword: "Naver Marketing là gì",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Blog", href: "/vi/blog" },
      { label: "Naver Marketing là gì", href: "/vi/blog/naver-marketing-la-gi" },
    ],
    body: [
      {
        type: "p",
        text: "Naver là cỗ máy tìm kiếm phổ biến nhất Hàn Quốc. Khi khách Hàn lên kế hoạch du lịch Hội An – Đà Nẵng, họ tìm spa, nhà hàng và tour trên Naver chứ không phải Google.",
      },
      { type: "h2", text: "Naver Marketing gồm những gì?" },
      {
        type: "ul",
        items: [
          "Bài blog review từ cộng tác viên người Hàn.",
          "Nội dung định kỳ trên tài khoản Naver bằng tiếng Hàn.",
          "Hợp tác KOC/blogger cho chiến dịch chuyên sâu.",
        ],
      },
      { type: "h2", text: "Vì sao hiệu quả với doanh nghiệp du lịch" },
      {
        type: "p",
        text: "Nội dung tiếng Hàn tự nhiên trên Naver giúp doanh nghiệp xuất hiện đúng lúc khách Hàn đang cân nhắc lựa chọn, tăng độ tin tưởng trước khi họ đặt dịch vụ.",
      },
    ],
    related: [
      {
        label: "Dịch vụ Naver Marketing",
        href: "/vi/naver-marketing",
        note: "Dịch vụ",
      },
      {
        label: "Naver Marketing cho spa",
        href: "/vi/naver-marketing/cho-spa",
        note: "Ngành nghề",
      },
    ],
  },
  {
    slug: "toi-uu-google-maps-cho-doanh-nghiep",
    path: "/vi/blog/toi-uu-google-maps-cho-doanh-nghiep",
    cluster: "maps",
    title: "Tối ưu Google Maps cho doanh nghiệp du lịch: bắt đầu từ đâu?",
    metaTitle: "Tối ưu Google Maps cho doanh nghiệp du lịch | Công Thiên Agency",
    metaDescription:
      "Hướng dẫn tối ưu hồ sơ Google Business Profile và quản lý đánh giá thật cho doanh nghiệp du lịch tại Hội An – Đà Nẵng, tuân thủ chính sách Google.",
    excerpt:
      "Google Maps thường là nơi khách nhìn thấy bạn đầu tiên. Một hồ sơ tối ưu tạo khác biệt lớn.",
    date: "2025-01-31",
    readingMinutes: 6,
    primaryKeyword: "tối ưu Google Maps doanh nghiệp",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Blog", href: "/vi/blog" },
      {
        label: "Tối ưu Google Maps",
        href: "/vi/blog/toi-uu-google-maps-cho-doanh-nghiep",
      },
    ],
    body: [
      {
        type: "p",
        text: "Khi khách tìm “spa gần đây” hay “nhà hàng Hội An”, Google Maps thường là kết quả đầu tiên họ thấy. Một hồ sơ đầy đủ, hình ảnh đẹp và nhiều đánh giá thật giúp bạn nổi bật.",
      },
      { type: "h2", text: "Những việc nên làm" },
      {
        type: "ul",
        items: [
          "Thiết lập và xác minh Google Business Profile.",
          "Điền đầy đủ danh mục, giờ mở cửa, dịch vụ và hình ảnh.",
          "Xây dựng quy trình mời khách để lại đánh giá thật.",
          "Phản hồi đánh giá chuyên nghiệp, kể cả đánh giá tiêu cực.",
        ],
      },
      { type: "h2", text: "Làm đúng cách, bền vững" },
      {
        type: "p",
        text: "Tôi tập trung vào đánh giá thật và tuân thủ chính sách Google — không dùng đánh giá ảo. Cách làm minh bạch giúp uy tín doanh nghiệp bền vững thay vì rủi ro bị Google xử lý.",
      },
    ],
    related: [
      {
        label: "Google Maps Review & Reputation",
        href: "/vi/google-maps-marketing",
        note: "Dịch vụ",
      },
      {
        label: "Review & Reputation Marketing",
        href: "/vi/google-maps-marketing/review-reputation",
        note: "Chi tiết",
      },
    ],
  },
  {
    slug: "pagespeed-seo-100-nghia-la-gi",
    path: "/vi/blog/pagespeed-seo-100-nghia-la-gi",
    cluster: "website",
    title: "PageSpeed SEO 100/100 nghĩa là gì và vì sao nó quan trọng?",
    metaTitle: "PageSpeed SEO 100/100 nghĩa là gì? | Công Thiên Agency",
    metaDescription:
      "Giải thích điểm SEO 100/100 trên PageSpeed Insights, ý nghĩa với thứ hạng Google và trải nghiệm khách, cùng cách đạt được điểm tối đa.",
    excerpt:
      "Điểm SEO trên PageSpeed Insights phản ánh mức độ thân thiện kỹ thuật của website với Google. Đây là ý nghĩa thực sự.",
    date: "2025-02-07",
    readingMinutes: 5,
    primaryKeyword: "PageSpeed SEO 100",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Blog", href: "/vi/blog" },
      {
        label: "PageSpeed SEO 100 là gì",
        href: "/vi/blog/pagespeed-seo-100-nghia-la-gi",
      },
    ],
    body: [
      {
        type: "p",
        text: "PageSpeed Insights là công cụ miễn phí của Google đánh giá website ở nhiều khía cạnh, trong đó có điểm SEO kỹ thuật. Điểm 100/100 nghĩa là website đáp ứng đầy đủ các tiêu chí kỹ thuật cơ bản mà Google khuyến nghị.",
      },
      { type: "h2", text: "Điểm SEO 100 phản ánh điều gì" },
      {
        type: "ul",
        items: [
          "Trang có metadata, thẻ tiêu đề và mô tả hợp lệ.",
          "Cấu trúc HTML rõ ràng, dễ cho Google đọc hiểu.",
          "Trang có thể được crawl và index đúng cách.",
          "Trải nghiệm mobile và liên kết hợp lệ.",
        ],
      },
      { type: "h2", text: "Lưu ý quan trọng" },
      {
        type: "p",
        text: "Điểm SEO 100/100 là nền tảng kỹ thuật tốt, nhưng không tự động đồng nghĩa thứ hạng cao — thứ hạng còn phụ thuộc nội dung và cạnh tranh. Cả Serena Retreat và Ruong House đều đạt điểm này như một điểm khởi đầu vững chắc.",
      },
    ],
    related: [
      {
        label: "Thiết kế website chuẩn SEO",
        href: "/vi/thiet-ke-website",
        note: "Dịch vụ",
      },
      {
        label: "Ruong House",
        href: "/vi/du-an/ruong-house",
        note: "Case study",
      },
    ],
  },
  {
    slug: "ho-tro-xac-minh-fanpage-meta-verified",
    path: "/vi/blog/ho-tro-xac-minh-fanpage-meta-verified",
    cluster: "social",
    title: "Xác minh Fanpage và Meta Verified: quy trình và điều cần biết",
    metaTitle: "Xác minh Fanpage & Meta Verified: cần biết gì? | Công Thiên Agency",
    metaDescription:
      "Tìm hiểu quy trình hỗ trợ xác minh Fanpage và Meta Verified, hồ sơ cần chuẩn bị và vì sao không nên tin vào lời hứa cam kết tick xanh 100%.",
    excerpt:
      "Tick xanh giúp tăng độ tin cậy, nhưng quy trình duyệt thuộc về Meta. Đây là điều bạn cần biết trước.",
    date: "2025-02-14",
    readingMinutes: 5,
    primaryKeyword: "xác minh Fanpage Meta Verified",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Blog", href: "/vi/blog" },
      {
        label: "Xác minh Fanpage & Meta Verified",
        href: "/vi/blog/ho-tro-xac-minh-fanpage-meta-verified",
      },
    ],
    body: [
      {
        type: "p",
        text: "Một Fanpage được xác minh giúp khách tin tưởng hơn và giảm rủi ro bị mạo danh. Tuy nhiên, quy trình xét duyệt hoàn toàn thuộc về Meta, nên việc chuẩn bị hồ sơ đúng cách rất quan trọng.",
      },
      { type: "h2", text: "Hồ sơ cần chuẩn bị" },
      {
        type: "ul",
        items: [
          "Thông tin Fanpage đầy đủ, nhất quán với thương hiệu.",
          "Giấy tờ doanh nghiệp theo yêu cầu của Meta.",
          "Hoạt động và nội dung kênh ổn định.",
        ],
      },
      { type: "h2", text: "Cảnh giác với lời hứa 100%" },
      {
        type: "p",
        text: "Không đơn vị nào có thể cam kết chắc chắn được duyệt tick xanh, vì quyết định cuối cùng thuộc về Meta. Tôi hỗ trợ chuẩn bị hồ sơ và quy trình để tăng khả năng được duyệt, nhưng luôn nói rõ về sự phụ thuộc này.",
      },
    ],
    related: [
      {
        label: "Social Marketing & Verification Support",
        href: "/vi/social-marketing",
        note: "Dịch vụ",
      },
      {
        label: "Bảng giá",
        href: "/vi/bang-gia",
        note: "Tham khảo chi phí",
      },
    ],
  },
  {
    slug: "chi-phi-lam-website-doanh-nghiep",
    path: "/vi/blog/chi-phi-lam-website-doanh-nghiep",
    cluster: "website",
    title: "Chi phí làm website doanh nghiệp phụ thuộc vào những gì?",
    metaTitle: "Chi phí làm website doanh nghiệp gồm những gì? | Công Thiên Agency",
    metaDescription:
      "Phân tích các yếu tố quyết định chi phí thiết kế website doanh nghiệp: số trang, tính năng booking/thanh toán, mức độ SEO và chi phí bên thứ ba.",
    excerpt:
      "Vì sao báo giá website lại khác nhau? Đây là những yếu tố thực sự quyết định chi phí.",
    date: "2025-02-21",
    readingMinutes: 6,
    primaryKeyword: "chi phí làm website doanh nghiệp",
    breadcrumb: [
      { label: "Trang chủ", href: "/vi" },
      { label: "Blog", href: "/vi/blog" },
      {
        label: "Chi phí làm website",
        href: "/vi/blog/chi-phi-lam-website-doanh-nghiep",
      },
    ],
    body: [
      {
        type: "p",
        text: "Nhiều chủ doanh nghiệp bối rối khi mỗi nơi báo giá website một kiểu. Thực tế, chi phí phụ thuộc vào phạm vi công việc cụ thể chứ không có một con số chung cho mọi dự án.",
      },
      { type: "h2", text: "Những yếu tố quyết định chi phí" },
      {
        type: "ul",
        items: [
          "Số lượng trang và độ phức tạp giao diện.",
          "Có tích hợp booking, giỏ hàng, thanh toán hay không.",
          "Mức độ tối ưu SEO kỹ thuật và tốc độ.",
          "Nội dung, hình ảnh do bạn cung cấp hay cần hỗ trợ.",
        ],
      },
      { type: "h2", text: "Đừng quên chi phí bên thứ ba" },
      {
        type: "p",
        text: "Tên miền, hosting và phí nền tảng thanh toán là chi phí riêng, tách khỏi phí thiết kế. Tôi luôn báo giá rõ ràng từng phần trước khi bắt đầu để bạn chủ động ngân sách.",
      },
    ],
    related: [
      {
        label: "Bảng giá dịch vụ",
        href: "/vi/bang-gia",
        note: "Tham khảo",
      },
      {
        label: "Thiết kế website",
        href: "/vi/thiet-ke-website",
        note: "Dịch vụ",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
