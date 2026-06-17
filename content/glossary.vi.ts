export type GlossaryCategory = "website" | "seo" | "naver" | "maps" | "social" | "qr";

export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDef: string;
  body: string;
  example?: string;
  category: GlossaryCategory;
  related?: { label: string; href: string }[];
};

export type GlossarySection = {
  category: GlossaryCategory;
  title: string;
  intro: string;
};

export const GLOSSARY_SECTIONS: GlossarySection[] = [
  {
    category: "website",
    title: "Website & Thiết kế web",
    intro:
      "Thuật ngữ về thiết kế website, tốc độ tải, cấu trúc kỹ thuật, conversion và tích hợp.",
  },
  {
    category: "seo",
    title: "SEO & Tối ưu công cụ tìm kiếm",
    intro:
      "Khái niệm cốt lõi của Search Engine Optimization — từ EEAT, schema đến backlink và canonical.",
  },
  {
    category: "naver",
    title: "Naver Marketing (cho khách Hàn)",
    intro:
      "Thuật ngữ liên quan đến Naver — công cụ tìm kiếm số 1 của người Hàn Quốc — và hệ sinh thái Hàn Quốc.",
  },
  {
    category: "maps",
    title: "Google Maps & Local SEO",
    intro:
      "Khái niệm về Google Business Profile, đánh giá địa phương, knowledge panel và xếp hạng map pack.",
  },
  {
    category: "social",
    title: "Social & Meta",
    intro:
      "Thuật ngữ Facebook, Instagram, Threads, Meta Verified và các chỉ số tăng trưởng kênh.",
  },
  {
    category: "qr",
    title: "Quét mã QR & Tech",
    intro:
      "QR code, deep link, KPI activation, tracking và lead generation tại điểm bán.",
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // ── WEBSITE ───────────────────────────────────────────────────────
  {
    slug: "landing-page",
    term: "Landing page",
    category: "website",
    shortDef: "Trang web độc lập thiết kế cho một mục tiêu chuyển đổi duy nhất.",
    body:
      "Landing page (trang đích) là một trang web độc lập được thiết kế cho duy nhất một mục tiêu chuyển đổi — khách đặt lịch, để lại số điện thoại, hoặc thanh toán. Khác với website thông thường có menu và nhiều trang, landing page không có yếu tố gây phân tâm và bắt buộc tải dưới 2 giây để không lãng phí ngân sách quảng cáo. Cấu trúc tiêu chuẩn gồm hero section + đề xuất giá trị, social proof, chi tiết sản phẩm, FAQ và CTA cuối. Trang chạy ads cần tích hợp Google Tag Manager và Meta Pixel để đo chuyển đổi.",
    example: "Một spa Hội An chạy chiến dịch ưu đãi Tết dùng landing page riêng thay vì gửi traffic về trang chủ — chuyển đổi tăng 3 lần.",
    related: [
      { label: "Dịch vụ landing page", href: "/vi/thiet-ke-website/landing-page-chien-dich" },
      { label: "Landing page là gì, khi nào cần", href: "/vi/blog/landing-page-la-gi-khi-nao-doanh-nghiep-can" },
    ],
  },
  {
    slug: "cms",
    term: "CMS (Content Management System)",
    category: "website",
    shortDef: "Hệ quản trị nội dung cho phép chủ website cập nhật bài viết, ảnh, sản phẩm mà không cần code.",
    body:
      "CMS là phần mềm giúp quản lý nội dung website thông qua giao diện đồ hoạ. Phổ biến nhất là WordPress (chiếm ~43% website toàn cầu), Strapi, Sanity, Contentful. Với doanh nghiệp dịch vụ, CMS giúp tự đổi menu, giá, bài blog mà không phải gọi developer mỗi lần. Đánh đổi: CMS có nhiều plugin tiện nhưng cũng nhiều lỗ hổng bảo mật cần update định kỳ. Website Next.js static (như congthienagency.com) thường dùng headless CMS hoặc file-based content để cân bằng giữa tốc độ và khả năng cập nhật.",
    related: [
      { label: "Chi phí làm website doanh nghiệp", href: "/vi/blog/chi-phi-lam-website-doanh-nghiep" },
      { label: "Bảo trì website doanh nghiệp", href: "/vi/blog/bao-tri-website-doanh-nghiep-can-lam-gi" },
    ],
  },
  {
    slug: "cta",
    term: "CTA (Call-to-Action)",
    category: "website",
    shortDef: "Nút hoặc lời kêu gọi hành động trên website nhằm dẫn khách tới một hành vi cụ thể.",
    body:
      "CTA là yếu tố thiết kế dẫn khách đến hành động mong muốn: đặt lịch, gọi điện, để lại email, tải tài liệu. CTA tốt phải rõ ràng (1 hành động duy nhất), nổi bật (màu tương phản), đặt đúng vị trí (sau khi khách đã có đủ thông tin để quyết định) và dùng động từ chủ động (\"Đặt lịch ngay\" thay vì \"Đặt lịch\"). Một trang website không nên có quá 1–2 CTA chính khác nhau — quá nhiều lựa chọn làm khách phân vân và không click cái nào.",
    example: "Trang website spa nên có CTA \"Đặt lịch online\" ở header sticky + cuối mỗi section dịch vụ, không nên thêm CTA \"Tải brochure\" hoặc \"Đăng ký newsletter\" cạnh tranh.",
  },
  {
    slug: "ssl",
    term: "SSL (Secure Sockets Layer)",
    category: "website",
    shortDef: "Giao thức mã hoá kết nối giữa trình duyệt và website — biểu tượng ổ khoá trên URL.",
    body:
      "SSL (chính xác hơn là TLS hiện nay) mã hoá dữ liệu giữa khách và website, ngăn người thứ ba đọc trộm thông tin. Đây là yêu cầu bắt buộc với mọi website kể từ 2018 — Google Chrome đánh dấu \"Not secure\" với site không SSL, Google Ads từ chối quảng cáo về trang không SSL, và xếp hạng SEO bị giảm. SSL miễn phí qua Let's Encrypt và đa số hosting tự động kích hoạt. Doanh nghiệp dịch vụ phải có SSL trước khi triển khai bất kỳ form thu thập thông tin nào.",
  },
  {
    slug: "nap",
    term: "NAP (Name, Address, Phone)",
    category: "website",
    shortDef: "Bộ 3 thông tin định danh doanh nghiệp phải đồng bộ trên mọi kênh online.",
    body:
      "NAP là viết tắt của Name (tên), Address (địa chỉ), Phone (điện thoại) — bộ thông tin định danh doanh nghiệp. Quy tắc cốt lõi của Local SEO: NAP phải nhất quán 100% giữa website, Google Business Profile, Facebook, các thư mục như TripAdvisor, Foursquare. Một ký tự khác biệt (vd \"123 Lê Lợi\" vs \"123 Le Loi\") cũng có thể làm Google đánh giá doanh nghiệp như hai entity khác nhau và giảm xếp hạng.",
    example: "Spa đổi địa chỉ phải update đồng thời 5–7 nơi: website, GBP, Facebook, Instagram, TripAdvisor, Booking, Foursquare — không đồng bộ sẽ loạn Local SEO 30–60 ngày.",
    related: [
      { label: "Website tích hợp Google Maps tăng khách", href: "/vi/blog/website-tich-hop-google-maps-de-tang-khach" },
    ],
  },
  {
    slug: "sitemap",
    term: "Sitemap (XML)",
    category: "website",
    shortDef: "File XML liệt kê toàn bộ URL của website cho Google và bot tìm kiếm đọc.",
    body:
      "Sitemap.xml là danh sách URL mà chủ website công khai cho Google, Bing và các bot tìm kiếm để chúng biết phải crawl trang nào, ưu tiên ra sao, ngày cập nhật cuối. Site lớn (>500 URL) bắt buộc có sitemap để Google không miss page nào. Sitemap thường tự generate (Next.js có app/sitemap.ts) và submit vào Google Search Console. Image-sitemap là biến thể chứa ảnh kèm caption cho Image Search.",
    related: [
      { label: "Sitemap chính", href: "/sitemap.xml" },
      { label: "Image sitemap", href: "/image-sitemap.xml" },
    ],
  },
  {
    slug: "schema-org",
    term: "Schema.org / JSON-LD",
    category: "website",
    shortDef: "Định dạng dữ liệu có cấu trúc giúp Google và AI hiểu rõ nội dung trang.",
    body:
      "Schema.org là từ vựng chuẩn được Google, Microsoft, Yahoo, Yandex hợp tác phát triển từ 2011. JSON-LD là cách triển khai phổ biến nhất hiện nay — nhúng đoạn JSON vào HTML mô tả entity (Organization, LocalBusiness, Service, Product, FAQPage, BlogPosting...) cho bot đọc. Schema chuẩn giúp xuất hiện rich result trên Google (FAQ accordion, star rating, breadcrumb), tăng CTR 10–30%. Quan trọng cho cả AI search vì ChatGPT/Claude/Perplexity đọc schema để hiểu trang nói về gì.",
    example: "Một trang dịch vụ spa nên có Service + Offer + FAQPage + BreadcrumbList schema để Google hiển thị giá khởi điểm, FAQ và breadcrumb ngay trên kết quả tìm kiếm.",
  },
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    category: "website",
    shortDef: "Bộ 3 chỉ số trải nghiệm người dùng được Google dùng làm yếu tố xếp hạng.",
    body:
      "Core Web Vitals gồm LCP (Largest Contentful Paint, đo tốc độ hiển thị nội dung chính, mục tiêu <2.5s), INP (Interaction to Next Paint, đo thời gian phản hồi tương tác, mục tiêu <200ms) và CLS (Cumulative Layout Shift, đo độ dịch chuyển bố cục, mục tiêu <0.1). Từ 2021 Google chính thức đưa Core Web Vitals vào thuật toán xếp hạng. Website chậm hoặc giật lag rất khó cạnh tranh top, dù nội dung tốt.",
  },
  {
    slug: "pagespeed",
    term: "PageSpeed Insights",
    category: "website",
    shortDef: "Công cụ chính thức của Google đo điểm hiệu năng website từ 0–100.",
    body:
      "PageSpeed Insights (pagespeed.web.dev) là công cụ miễn phí của Google đo Core Web Vitals và xuất điểm tổng từ 0–100 cho cả mobile lẫn desktop. Điểm chia 3 mức: 0–49 đỏ (kém), 50–89 vàng (cần cải thiện), 90–100 xanh (tốt). Website đạt 100/100 trên cả mobile và desktop là chuẩn vàng — congthienagency.com hướng tới mục tiêu này. Cải thiện PageSpeed cần tối ưu ảnh (WebP, lazy load), JavaScript (code split, defer), font (preload, subset) và server (CDN, cache).",
    related: [
      { label: "PageSpeed SEO 100/100 nghĩa là gì", href: "/vi/blog/pagespeed-seo-100-nghia-la-gi" },
    ],
  },
  {
    slug: "ssr",
    term: "SSR (Server-Side Rendering)",
    category: "website",
    shortDef: "Render HTML trên server trước khi gửi về trình duyệt — tăng tốc độ và SEO.",
    body:
      "SSR là kỹ thuật render HTML hoàn chỉnh trên server (Node.js, PHP...) rồi gửi về browser, khác với CSR (client-side render) chỉ gửi JS rỗng để browser tự build DOM. SSR có 3 lợi thế: SEO tốt hơn (bot Google đọc được nội dung ngay), tốc độ tải trang đầu nhanh hơn, và trải nghiệm với mạng yếu mượt hơn. Next.js (framework dùng cho congthienagency.com) hỗ trợ cả SSR, SSG (static) và ISR. Với website doanh nghiệp ưu tiên SEO, SSR/SSG là lựa chọn mặc định.",
  },
  {
    slug: "ab-test",
    term: "A/B Test",
    category: "website",
    shortDef: "Phương pháp so sánh hai phiên bản trang web bằng dữ liệu thật để tìm phiên bản hiệu quả hơn.",
    body:
      "A/B test chia traffic ngẫu nhiên giữa hai phiên bản trang (A và B) khác nhau ở một yếu tố — tiêu đề, màu CTA, ảnh hero, vị trí form — và đo chuyển đổi nào cao hơn. Khác với phỏng đoán, A/B test cho quyết định dựa trên dữ liệu thật. Yêu cầu: tối thiểu 1.000 lượt truy cập mỗi phiên bản để có ý nghĩa thống kê. Công cụ phổ biến: Google Optimize (đã ngừng), Optimizely, VWO, hoặc giải pháp tự xây cho Next.js.",
  },
  {
    slug: "conversion-rate",
    term: "Conversion Rate (CR)",
    category: "website",
    shortDef: "Tỉ lệ khách thực hiện hành động mong muốn trên tổng lượt truy cập.",
    body:
      "Conversion rate đo % khách hoàn thành mục tiêu — đặt lịch, mua hàng, để lại số điện thoại — trên tổng lượt truy cập. Tham khảo benchmark ngành dịch vụ – du lịch: website tổng quát 0.5–2%, landing page chiến dịch tốt 5–15%. Để tăng CR cần tối ưu: tốc độ tải, social proof, độ rõ của CTA, độ tin của thông tin doanh nghiệp (NAP, schema), và giảm bước đặt lịch. CR thấp dù traffic cao thường là dấu hiệu nhắm sai tệp hoặc trang chưa thuyết phục.",
  },

  // ── SEO ─────────────────────────────────────────────────────────────
  {
    slug: "eeat",
    term: "EEAT (Experience, Expertise, Authoritativeness, Trust)",
    category: "seo",
    shortDef: "Khung đánh giá chất lượng nội dung được Google dùng từ 2022 — cốt lõi của Search Quality Rater Guidelines.",
    body:
      "EEAT mở rộng từ EAT (cũ) với chữ E thứ nhất = Experience (kinh nghiệm thực tế). Google đánh giá: nội dung có do người có kinh nghiệm thực sự viết không (E1)? Có kiến thức chuyên môn (E2)? Tác giả/website có uy tín ngành không (A)? Có đáng tin và trung thực không (T)? Đặc biệt quan trọng với chủ đề YMYL (Your Money Your Life — sức khoẻ, tài chính, pháp lý). Cách tăng EEAT: author bio rõ ràng, case study thật, xuất hiện trên các kênh uy tín, schema Person/Organization đầy đủ.",
    example: "Bài về Naver Marketing viết bởi người đã trực tiếp triển khai cho khách Hàn Quốc tại Hội An có EEAT cao hơn bài tổng hợp lý thuyết từ Wikipedia.",
  },
  {
    slug: "local-seo",
    term: "Local SEO",
    category: "seo",
    shortDef: "Tối ưu để doanh nghiệp xuất hiện khi khách tìm dịch vụ ở khu vực địa phương.",
    body:
      "Local SEO là nhánh SEO tập trung vào tìm kiếm có yếu tố địa lý — \"spa Hội An\", \"nhà hàng gần đây\", \"cafe Đà Nẵng\". Khác với SEO truyền thống nhắm xếp hạng toàn cầu, Local SEO ưu tiên xuất hiện trong Map Pack (3 doanh nghiệp đầu trên Google Maps) và Knowledge Panel. Ba yếu tố cốt lõi: Google Business Profile tối ưu, NAP đồng bộ trên mọi kênh, và đánh giá thật từ khách. 46% search trên Google có yếu tố local, nên đây là kênh không thể bỏ qua với mọi doanh nghiệp dịch vụ địa phương.",
    related: [
      { label: "Local SEO là gì", href: "/vi/blog/local-seo-la-gi" },
      { label: "Google Maps Marketing", href: "/vi/google-maps-marketing" },
    ],
  },
  {
    slug: "long-tail-keyword",
    term: "Long-tail keyword",
    category: "seo",
    shortDef: "Cụm từ khoá dài, cụ thể, lưu lượng thấp nhưng cạnh tranh thấp và tỉ lệ chuyển đổi cao.",
    body:
      "Long-tail keyword là cụm từ có 3–6 từ trở lên, mô tả nhu cầu rất cụ thể. So với từ ngắn như \"spa\" (lưu lượng cao, cạnh tranh khốc liệt), long-tail như \"spa massage cá nhân tại Hội An có booking online\" có ít người tìm hơn nhưng người tìm có ý định mua rõ ràng — chuyển đổi cao gấp 2–5 lần. Doanh nghiệp dịch vụ vừa và nhỏ nên ưu tiên long-tail vì khả thi đạt top, đem khách thật, chi phí thấp.",
  },
  {
    slug: "backlink",
    term: "Backlink",
    category: "seo",
    shortDef: "Liên kết từ website khác trỏ về website của bạn — phiếu bầu uy tín trong mắt Google.",
    body:
      "Backlink là một trong các yếu tố xếp hạng quan trọng nhất của Google từ 1998 (PageRank). Mỗi backlink chất lượng giống một phiếu bầu rằng website của bạn đáng tham khảo. Yếu tố quan trọng: nguồn (link từ website uy tín cùng ngành có giá trị hơn link tổng hợp), anchor text, dofollow/nofollow, vị trí trong trang. Cảnh báo: mua backlink hàng loạt từ link farm có thể bị Google phạt thông qua thuật toán Penguin. Cách xây backlink bền vững: viết khách (guest post), tham gia case study, được báo chí đề cập.",
  },
  {
    slug: "anchor-text",
    term: "Anchor text",
    category: "seo",
    shortDef: "Văn bản hiển thị của một liên kết — Google dùng để hiểu trang đích nói về gì.",
    body:
      "Anchor text là text mà người dùng nhìn thấy và click trong một hyperlink. Anchor text mô tả chính xác trang đích giúp Google xếp hạng tốt hơn — đó là lý do vì sao đừng dùng \"click here\" hay \"đọc thêm\" làm anchor. Phân loại: exact match (đúng từ khoá), partial match (chứa từ khoá), branded (tên thương hiệu), generic (chung chung), naked URL (URL trần). Một profile backlink tự nhiên có đa dạng các dạng — chỉ exact match nhiều dễ bị Google nghi ngờ thao túng.",
  },
  {
    slug: "canonical-url",
    term: "Canonical URL",
    category: "seo",
    shortDef: "Thẻ HTML báo Google đâu là URL chính khi cùng một nội dung có thể truy cập từ nhiều URL.",
    body:
      "Khi cùng nội dung có thể tới qua nhiều URL (vd có query string, có/không slash cuối, có/không www), Google có thể coi đó là duplicate content. Thẻ <link rel=\"canonical\" href=\"...\"> báo URL nào là bản chính, để Google dồn tín hiệu xếp hạng về đó. Quan trọng với e-commerce (sản phẩm cùng xuất hiện ở nhiều category) và website đa ngôn ngữ. Sai canonical (vd canonical về một trang không liên quan) dễ làm Google deindex tạm thời.",
  },
  {
    slug: "meta-description",
    term: "Meta description",
    category: "seo",
    shortDef: "Đoạn mô tả ngắn dưới tiêu đề trong kết quả tìm kiếm Google — không trực tiếp xếp hạng nhưng ảnh hưởng CTR.",
    body:
      "Meta description là đoạn 130–160 ký tự xuất hiện dưới tiêu đề trong kết quả Google. Khác với meta title, meta description không phải yếu tố xếp hạng trực tiếp, nhưng ảnh hưởng mạnh đến CTR. Mô tả tốt: chứa từ khoá chính (Google bôi đậm), nêu rõ giá trị duy nhất của trang, có lời kêu gọi hành động ngầm. Google đôi khi tự tạo description từ nội dung trang nếu meta của bạn không phù hợp với truy vấn.",
  },
  {
    slug: "internal-link",
    term: "Internal link",
    category: "seo",
    shortDef: "Liên kết giữa các trang trong cùng một website — giúp Google hiểu cấu trúc và phân phối uy tín.",
    body:
      "Internal link là link từ trang này sang trang khác trong cùng domain. Vai trò: (1) giúp bot Google crawl hết website, (2) phân phối \"link juice\" từ trang mạnh sang trang yếu, (3) thiết lập hierarchy nội dung (pillar → spoke). Chiến lược hub & spoke kinh điển: tạo 1 pillar page tổng quan cho mỗi cluster, link sang nhiều spoke page chuyên sâu, mỗi spoke link ngược về pillar và link ngang sang spoke khác trong cluster. Đây là cấu trúc congthienagency.com đang dùng.",
  },
  {
    slug: "doorway-page",
    term: "Doorway page (trang cửa)",
    category: "seo",
    shortDef: "Trang thin content tạo hàng loạt chỉ để xếp hạng từ khoá nhưng nội dung gần như giống nhau — bị Google phạt.",
    body:
      "Doorway page là chiến thuật cũ: tạo hàng trăm trang gần như giống nhau, chỉ thay địa danh hoặc từ khoá để chiếm nhiều từ trên Google. Vd: 50 trang \"thiết kế website tại [tên 50 quận]\" với cùng nội dung. Google công khai phạt chiến thuật này từ 2015 và rank đẩy về 0. Cách làm đúng: thay vì 50 trang sao chép, tạo 1 hub trang chính + chỉ tạo trang riêng cho khu vực có nội dung độc lập thật sự (vd khác biệt văn hoá, đối thủ, giá).",
  },

  // ── NAVER ──────────────────────────────────────────────────────────
  {
    slug: "naver",
    term: "Naver",
    category: "naver",
    shortDef: "Công cụ tìm kiếm và portal số 1 của Hàn Quốc — chiếm hơn 55% thị phần search nội địa.",
    body:
      "Naver (naver.com) ra mắt 1999, vận hành bởi Naver Corporation tại Hàn Quốc. Khác với Google, Naver là portal toàn diện: tìm kiếm + email + bản đồ (Naver Map) + blog (Naver Blog) + mua sắm (Naver Shopping) + thanh toán (Naver Pay) + truyện tranh (Naver Webtoon). Với khách Hàn, Naver là điểm khởi đầu cho mọi nhu cầu — họ tìm review nhà hàng Hội An trên Naver Blog chứ không phải Google Reviews. Doanh nghiệp Việt nhắm tệp khách Hàn nhất định phải có chiến lược Naver.",
    related: [
      { label: "Naver Marketing", href: "/vi/naver-marketing" },
      { label: "Naver Marketing là gì", href: "/vi/blog/naver-marketing-la-gi" },
    ],
  },
  {
    slug: "naver-blog",
    term: "Naver Blog",
    category: "naver",
    shortDef: "Nền tảng blog của Naver — nơi khách Hàn đọc review và tham khảo trước khi đặt dịch vụ.",
    body:
      "Naver Blog là blog platform tích hợp sâu trong Naver. Khách Hàn coi Naver Blog là nguồn review đáng tin hơn cả TripAdvisor — vì nội dung viết bằng tiếng Hàn, đúng văn hoá, do người Hàn từng trải nghiệm. Doanh nghiệp Việt thường book blogger Hàn (KOC) đến trải nghiệm dịch vụ và viết bài Naver Blog — đây là kênh marketing chính nhắm khách Hàn. Bài chuẩn Naver Blog cần ảnh nhiều, văn phong tự nhiên, hashtag đúng, không quá quảng cáo.",
    related: [
      { label: "Cách viết bài Naver Blog chuẩn", href: "/vi/blog/cach-viet-bai-naver-blog-chuan" },
      { label: "Viết bài Naver Blog dịch vụ", href: "/vi/naver-marketing/viet-bai-naver-blog" },
    ],
  },
  {
    slug: "naver-place",
    term: "Naver Place",
    category: "naver",
    shortDef: "Bản đồ địa điểm của Naver — phiên bản \"Google Maps cho người Hàn\".",
    body:
      "Naver Place (Naver 지도) là hệ thống bản đồ và hồ sơ doanh nghiệp của Naver. Khách Hàn dùng Naver Place để tìm spa, nhà hàng, khách sạn tại Hội An – Đà Nẵng với thông tin tiếng Hàn, giờ mở cửa, ảnh, review, dẫn đường. Doanh nghiệp đăng ký Naver Place miễn phí, sau đó cần duy trì: ảnh chất lượng cao, mô tả tiếng Hàn, cập nhật giờ và thông tin liên hệ. Khác Google Business Profile, Naver Place ưu tiên kết nối với Naver Blog — bài blog review tốt sẽ kéo traffic vào Place.",
    related: [
      { label: "Naver Place là gì", href: "/vi/blog/naver-place-la-gi" },
      { label: "Tối ưu Naver Place", href: "/vi/naver-marketing/toi-uu-naver-place" },
    ],
  },
  {
    slug: "naver-koc",
    term: "Naver KOC (Key Opinion Consumer)",
    category: "naver",
    shortDef: "Người Hàn có tầm ảnh hưởng nhỏ và trung bình trên Naver Blog, được doanh nghiệp book để viết review.",
    body:
      "KOC khác KOL ở quy mô: KOL là người nổi tiếng quy mô lớn, KOC là người dùng có tầm ảnh hưởng nhỏ–trung (5K–50K follower) nhưng tin cậy cao trong cộng đồng. Trên Naver Blog, KOC viết review tự nhiên có sức thuyết phục mạnh hơn KOL chuyên quảng cáo. Một chiến dịch Naver Marketing tốt thường book 4–10 KOC Hàn đến trải nghiệm dịch vụ thật rồi viết bài Naver Blog. Chi phí 1.5–3 triệu/bài KOC, rẻ hơn nhiều so với KOL Hàn nhưng hiệu quả lâu dài tốt.",
    related: [
      { label: "Naver KOC Campaign", href: "/vi/naver-marketing/naver-koc" },
      { label: "Naver KOC blogger Hàn là gì", href: "/vi/blog/naver-koc-blogger-han-la-gi" },
    ],
  },
  {
    slug: "kakaotalk",
    term: "KakaoTalk",
    category: "naver",
    shortDef: "Ứng dụng nhắn tin số 1 Hàn Quốc — gần như mọi người Hàn dùng hằng ngày.",
    body:
      "KakaoTalk (Kakao Corp) là ứng dụng nhắn tin và mạng xã hội phổ biến đến mức tương đương Zalo tại Việt Nam: gần 100% người Hàn dùng. Mở rộng từ nhắn tin: KakaoTalk Channel cho doanh nghiệp (giống Zalo OA), KakaoMap, Kakao Pay, KakaoTaxi. Khách Hàn ở Việt Nam thường liên hệ doanh nghiệp qua KakaoTalk hơn email. Doanh nghiệp nhắm khách Hàn nên có KakaoTalk Business account, không chỉ Zalo và WhatsApp.",
  },
  {
    slug: "naver-corp",
    term: "Naver Corporation (NHN)",
    category: "naver",
    shortDef: "Công ty mẹ vận hành Naver — niêm yết trên KRX với mã 035420.",
    body:
      "Naver Corporation (trước đây NHN Corporation) thành lập 1999, trụ sở tại Seongnam, Hàn Quốc. CEO hiện tại: Choi Soo-yeon. Naver Corp là một trong các tập đoàn công nghệ lớn nhất Hàn Quốc, đầu tư mạnh vào AI (Naver HyperCLOVA — LLM tiếng Hàn), cloud (Naver Cloud Platform), webtoon (mua Wattpad 2021), và mở rộng quốc tế (Naver Z, đầu tư vào LINE Plus). Khi làm marketing trên Naver, hiểu rằng đây là sản phẩm của một tập đoàn công nghệ lớn, không phải tool nhỏ.",
  },
  {
    slug: "smartstore",
    term: "Naver Smartstore",
    category: "naver",
    shortDef: "Nền tảng e-commerce miễn phí của Naver — như Shopee Hàn Quốc.",
    body:
      "Naver Smartstore (스마트스토어) là sàn thương mại điện tử của Naver, miễn phí mở gian hàng, phí giao dịch ~5%. Đây là cách phổ biến nhất để bán hàng online tại Hàn Quốc. Doanh nghiệp Việt nhắm xuất khẩu sang Hàn (mỹ phẩm, thực phẩm, đặc sản) cân nhắc mở Smartstore. Lưu ý: cần đăng ký kinh doanh Hàn Quốc hoặc thông qua agency địa phương. Naver Smartstore tích hợp Naver Pay và quảng cáo trong Naver Shopping.",
  },

  // ── MAPS ───────────────────────────────────────────────────────────
  {
    slug: "google-business-profile",
    term: "Google Business Profile (GBP)",
    category: "maps",
    shortDef: "Hồ sơ doanh nghiệp miễn phí trên Google Search và Google Maps — trước đây gọi là Google My Business.",
    body:
      "Google Business Profile (đổi tên từ Google My Business năm 2021) là hồ sơ doanh nghiệp xuất hiện khi khách tìm tên hoặc dịch vụ địa phương trên Google. GBP gồm: tên, địa chỉ, điện thoại, giờ mở cửa, ảnh, video, dịch vụ/sản phẩm, đánh giá khách, Q&A, bài đăng Google Posts. Miễn phí lập, nhưng cần verify (qua bưu thiếp, điện thoại, video) trước khi hiển thị. GBP là yếu tố số 1 quyết định xếp hạng trong Map Pack — không có GBP nghĩa là khách không tìm thấy bạn trên Google Maps.",
    related: [
      { label: "Audit Google Business Profile", href: "/vi/google-maps-marketing/audit-google-business-profile" },
      { label: "GBP cần có gì", href: "/vi/blog/google-business-profile-can-co-gi" },
    ],
  },
  {
    slug: "knowledge-panel",
    term: "Knowledge Panel",
    category: "maps",
    shortDef: "Khung thông tin xuất hiện bên phải kết quả tìm kiếm Google khi tra tên thương hiệu hoặc người nổi tiếng.",
    body:
      "Knowledge Panel là khung thông tin tổng hợp Google tự tạo cho entity (doanh nghiệp, người, địa điểm, sự kiện) khi user tìm theo tên. Nguồn dữ liệu: Wikipedia, Google Business Profile, Wikidata, schema Organization trên website chính chủ, sameAs link. Có Knowledge Panel cho thương hiệu là dấu hiệu Google đã \"công nhận\" bạn là entity riêng — tăng độ tin cậy và CTR đáng kể. Cách xây: schema Organization đầy đủ + sameAs trỏ về Facebook/LinkedIn/Wikipedia + GBP verified.",
  },
  {
    slug: "map-pack",
    term: "Map Pack (Local Pack)",
    category: "maps",
    shortDef: "3 doanh nghiệp đầu tiên hiển thị trên Google Maps khi khách tìm dịch vụ địa phương.",
    body:
      "Map Pack (còn gọi 3-Pack hoặc Local Pack) là khung 3 doanh nghiệp Google chọn hiển thị cao nhất khi user tìm có yếu tố địa lý. Vd \"spa gần đây\" → Google hiển thị 3 spa kèm sao, địa chỉ, giờ mở cửa, link chỉ đường. Lọt Map Pack cực kỳ giá trị vì khách thường click 1 trong 3, không scroll xuống. Yếu tố xếp hạng Map Pack: liên quan từ khoá (relevance), khoảng cách từ vị trí khách (proximity), uy tín doanh nghiệp (prominence — review, backlink, brand search). Tối ưu GBP + nhiều review thật là 2 đòn bẩy mạnh nhất.",
    related: [
      { label: "Cách lên top Google Maps", href: "/vi/blog/cach-len-top-google-maps" },
    ],
  },
  {
    slug: "review-reputation",
    term: "Review & Reputation Management",
    category: "maps",
    shortDef: "Quản lý đánh giá và uy tín thương hiệu trên Google Maps, TripAdvisor, Booking — bao gồm xin review, phản hồi và xử lý tiêu cực.",
    body:
      "Review & Reputation Management gồm: (1) Quy trình xin đánh giá thật từ khách hài lòng (qua QR code, email follow-up, link tắt), (2) Phản hồi mọi review (tích cực để cảm ơn, tiêu cực để giải quyết minh bạch), (3) Báo cáo review spam/giả mạo lên Google, (4) Theo dõi sentiment và xu hướng. Quan trọng: tuyệt đối không mua review ảo — Google phát hiện và phạt cả profile lẫn website. Một doanh nghiệp có 50 review thật trải dài 12 tháng đáng tin hơn 200 review đột ngột 1 tháng.",
    related: [
      { label: "Review & Reputation Marketing", href: "/vi/google-maps-marketing/review-reputation" },
      { label: "Cách có thêm đánh giá Google thật", href: "/vi/blog/cach-co-them-danh-gia-google-that" },
    ],
  },
  {
    slug: "google-posts",
    term: "Google Posts",
    category: "maps",
    shortDef: "Bài đăng ngắn xuất hiện trên Google Business Profile — cập nhật ưu đãi, sự kiện, sản phẩm mới.",
    body:
      "Google Posts là tính năng cho phép chủ doanh nghiệp đăng bài 100–1.500 ký tự kèm ảnh, CTA và link trực tiếp trên GBP — hiển thị trong cả Google Search lẫn Google Maps. Loại post: Update, Event (có ngày bắt đầu/kết thúc), Offer (có mã ưu đãi). Mỗi post hiển thị 7 ngày (trừ Event/Offer theo ngày cấu hình). Tận dụng Google Posts giúp profile tươi mới, tăng tín hiệu hoạt động cho thuật toán xếp hạng và tạo nội dung index thêm — hoàn toàn miễn phí nhưng nhiều doanh nghiệp bỏ quên.",
  },

  // ── SOCIAL ─────────────────────────────────────────────────────────
  {
    slug: "meta",
    term: "Meta Platforms",
    category: "social",
    shortDef: "Công ty mẹ của Facebook, Instagram, WhatsApp, Messenger và Threads — đổi tên từ Facebook Inc. năm 2021.",
    body:
      "Meta Platforms (NASDAQ: META), trước đây Facebook Inc., do Mark Zuckerberg đồng sáng lập. Sau khi đổi tên 2021, Meta hợp nhất Facebook, Instagram, WhatsApp, Messenger, Threads, Oculus dưới một tập đoàn. CEO mảng Instagram và Threads: Adam Mosseri. Khi nhắc \"chính sách Meta\" trong marketing, đó là quy tắc áp dụng đồng thời cho tất cả nền tảng này — vd buff follow trên Threads có thể ảnh hưởng tài khoản Instagram liên kết.",
  },
  {
    slug: "meta-verified",
    term: "Meta Verified",
    category: "social",
    shortDef: "Gói thuê bao trả phí của Meta cho cá nhân và doanh nghiệp — có dấu tích xác minh + hỗ trợ tài khoản.",
    body:
      "Meta Verified ra mắt 2023, là dịch vụ subscription cho phép user trả phí hàng tháng để được xác minh (tick xanh) trên Facebook và Instagram. Kèm theo: ưu tiên hỗ trợ khi tài khoản gặp sự cố, bảo vệ mạo danh chủ động, tăng tiếp cận. Khác với verify miễn phí cũ (chỉ dành cho người nổi tiếng), Meta Verified mở cho mọi cá nhân và doanh nghiệp đủ điều kiện. Phí ~12–25 USD/tháng tuỳ khu vực. Quan trọng: dịch vụ hỗ trợ chuẩn bị hồ sơ giúp tăng khả năng đủ điều kiện, nhưng kết quả cuối thuộc Meta — không cam kết 100%.",
    related: [
      { label: "Xác minh Fanpage Meta Verified", href: "/vi/social-marketing/xac-minh-fanpage" },
      { label: "Meta Verified là gì", href: "/vi/blog/meta-verified-la-gi" },
    ],
  },
  {
    slug: "threads",
    term: "Threads",
    category: "social",
    shortDef: "Mạng xã hội text-first của Meta, ra mắt 7/2023 — đối thủ trực tiếp của X (Twitter).",
    body:
      "Threads là ứng dụng do team Instagram phát triển, dùng chung tài khoản Instagram. Phát hành 5/7/2023, vượt 100 triệu user trong 5 ngày đầu (kỷ lục lịch sử). Định dạng: bài text tối đa 500 ký tự, kèm ảnh/video ngắn. Khác Instagram (thiên hình ảnh) và Facebook (thiên cộng đồng), Threads ưu tiên kể chuyện bằng văn bản và thread đối thoại — phù hợp doanh nghiệp có cá tính thương hiệu rõ. Đến giữa 2026, Meta chưa mở quảng cáo trả phí trên Threads ở đa số khu vực, doanh nghiệp chỉ tăng tiếp cận bằng nội dung organic.",
    related: [
      { label: "Threads Growth", href: "/vi/social-marketing/threads-growth" },
      { label: "Threads là gì có nên đầu tư", href: "/vi/blog/threads-la-gi-doanh-nghiep-co-nen-dau-tu" },
    ],
  },
  {
    slug: "reels",
    term: "Reels",
    category: "social",
    shortDef: "Video ngắn dạng dọc trên Instagram và Facebook — đối thủ trực tiếp của TikTok.",
    body:
      "Reels là tính năng video dọc 15–90 giây (có thể tới 3 phút) trên Instagram và Facebook, ra mắt 2020 sau khi TikTok bùng nổ. Meta đẩy mạnh Reels qua tiếp cận organic ưu tiên — bài Reels của doanh nghiệp dịch vụ có thể đạt 10–100x lượt xem so với bài ảnh thường. Reels phù hợp behind-the-scenes spa, quy trình nấu ăn cooking class, không gian khách sạn, tour du lịch. Yêu cầu tối thiểu: quay dọc 9:16, có hook 3 giây đầu, có subtitle vì 85% user xem không bật âm thanh.",
  },
  {
    slug: "stories",
    term: "Stories (Instagram/Facebook)",
    category: "social",
    shortDef: "Định dạng nội dung tồn tại 24 giờ — không vào feed chính, không lưu permanent.",
    body:
      "Stories là format Meta sao chép từ Snapchat 2016 — ảnh/video tồn tại 24 giờ rồi tự xoá (trừ khi save vào Highlights). Khác Reels (vào feed, có thuật toán), Stories chỉ hiển thị cho follower và xuất hiện trên thanh trên cùng app. Hữu ích cho doanh nghiệp dịch vụ: thông báo ưu đãi flash, behind-the-scenes hàng ngày, repost review khách, link \"swipe up\" (yêu cầu >10K follower hoặc verified). Stories có engagement cao hơn feed post nhưng tuổi thọ ngắn — phù hợp cập nhật, không phải nội dung evergreen.",
  },
  {
    slug: "engagement-rate",
    term: "Engagement Rate (ER)",
    category: "social",
    shortDef: "Tỉ lệ tương tác (like + comment + share + save) trên tổng follower hoặc reach.",
    body:
      "Engagement rate đo mức độ tương tác của khán giả với nội dung. Có 2 cách tính phổ biến: ER theo follower (tương tác / tổng follower × 100) và ER theo reach (tương tác / tổng reach × 100). Benchmark Instagram: dưới 1% kém, 1–3% trung bình, 3–6% tốt, >6% xuất sắc. ER quan trọng hơn số follower — 5K follower với ER 5% giá trị hơn 50K follower với ER 0.3%. Doanh nghiệp dịch vụ nên theo dõi ER theo reach để đánh giá nội dung thực sự cộng hưởng với khán giả thật.",
  },
  {
    slug: "organic-reach",
    term: "Organic Reach",
    category: "social",
    shortDef: "Số người xem nội dung của bạn không qua quảng cáo trả phí — đối lập với paid reach.",
    body:
      "Organic reach là số tài khoản khác nhau thấy bài đăng của bạn mà không bị tính phí cho nền tảng. Facebook organic reach đã sụt thê thảm từ 2015 — hiện chỉ <5% follower thấy bài, do thuật toán ưu tiên nội dung gia đình bạn bè. Instagram và Threads còn 10–30%. TikTok và Threads (mới) có organic reach cao nhất hiện nay vì còn đang đẩy lưu lượng để tăng dùng. Chiến lược thông minh: chọn nền tảng có organic reach cao tại thời điểm đó để xây nhận diện, dùng paid khi cần tăng tốc.",
  },
  {
    slug: "buff-follow",
    term: "Buff follow (không khuyến nghị)",
    category: "social",
    shortDef: "Mua follower hoặc tương tác ảo để tăng số liệu — vi phạm chính sách nền tảng và rủi ro tài khoản.",
    body:
      "Buff follow là dùng bot, click farm hoặc dịch vụ trả phí để tăng follower/like/comment không phải từ người thật. Hệ quả: (1) follower ảo không mua hàng, làm sai dữ liệu marketing; (2) Meta, Instagram, TikTok phát hiện và xoá follower ảo + giảm tiếp cận; (3) trường hợp nặng có thể khoá tài khoản; (4) khách thật khi thấy 10K follower nhưng chỉ vài like sẽ nghi ngờ thương hiệu. Cách bền vững thay thế: nội dung thật + cộng tác với KOC địa phương + chạy ads target tệp khách thật.",
    related: [
      { label: "Buff follow có nên dùng không", href: "/vi/blog/buff-follow-co-nen-dung-khong" },
      { label: "Social Growth Package", href: "/vi/social-marketing/tang-truong-kenh" },
    ],
  },
  {
    slug: "social-proof",
    term: "Social proof",
    category: "social",
    shortDef: "Nguyên lý tâm lý: khách quyết định dựa trên hành vi/đánh giá của người khác.",
    body:
      "Social proof là khái niệm Robert Cialdini nêu trong cuốn Influence (1984): con người tin tưởng và làm theo lựa chọn của số đông, đặc biệt khi không chắc chắn. Trong marketing, social proof gồm: đánh giá khách thật (Google, TripAdvisor, Facebook), số liệu (\"đã phục vụ 10.000 khách\"), logo khách hàng nổi tiếng, ảnh thật chứ không phải stock, mention từ báo chí. Doanh nghiệp dịch vụ cần social proof đa kênh — vì khách Hàn check Naver Blog, khách Tây check TripAdvisor, khách Việt check Facebook Review.",
    related: [
      { label: "Social proof là gì", href: "/vi/blog/social-proof-la-gi" },
    ],
  },
  {
    slug: "ugc",
    term: "UGC (User-Generated Content)",
    category: "social",
    shortDef: "Nội dung do khách tự tạo về thương hiệu — ảnh, video, review, post — đáng tin gấp nhiều lần content từ doanh nghiệp.",
    body:
      "UGC là nội dung khách tự tạo và đăng về thương hiệu mà doanh nghiệp không trả tiền chỉ đạo. Ví dụ: khách check-in cafe Hội An rồi đăng Instagram, khách viết review Naver Blog sau cooking class, khách quay video Reels phòng homestay. UGC đáng tin gấp 3–5 lần content chính chủ vì khách thấy đây là trải nghiệm thật. Cách kích thích UGC: tạo \"moment\" đáng chụp trong không gian, in hashtag riêng ở menu/biển hiệu, có chương trình \"khoe khoảnh khắc\" tặng quà nhỏ. Quan trọng: xin phép trước khi repost UGC lên kênh chính chủ.",
  },

  // ── QR / TECH ──────────────────────────────────────────────────────
  {
    slug: "qr-code",
    term: "QR Code",
    category: "qr",
    shortDef: "Mã vạch 2D do Denso Wave (Nhật) phát triển 1994 — đọc bằng camera điện thoại để mở link hoặc thông tin.",
    body:
      "QR Code (Quick Response Code) chứa được tối đa 7.089 ký tự số hoặc 4.296 ký tự alphanum, đọc nhanh bằng camera (kể cả khi bị che 30%). Ứng dụng trong marketing dịch vụ – du lịch: menu online, đặt bàn, kết bạn Zalo OA, follow Fanpage, dẫn link đặc biệt cho khách, theo dõi chiến dịch. QR động (dùng URL ngắn redirect) tốt hơn QR tĩnh vì có thể đổi đích sau khi in. Một QR ở vị trí đẹp tại điểm bán có thể đem 20–100 lượt quét/ngày — kênh thu lead chi phí cận biên gần 0.",
    related: [
      { label: "Quét mã QR & Activation", href: "/vi/quet-ma-qr" },
      { label: "Cách tạo mã QR Zalo OA", href: "/vi/blog/cach-tao-ma-qr-zalo-oa-cho-doanh-nghiep" },
    ],
  },
  {
    slug: "deep-link",
    term: "Deep link",
    category: "qr",
    shortDef: "Liên kết mở thẳng app cụ thể hoặc trang con trong app — không qua trình duyệt.",
    body:
      "Deep link là URL có format đặc biệt khi click trên mobile sẽ mở thẳng app tương ứng nếu đã cài, hoặc fallback ra trang web nếu chưa. Vd: \"https://www.google.com/maps/dir/?api=1&destination=...\" mở Google Maps app với route sẵn; \"zalo://...\" mở Zalo OA. Quan trọng cho doanh nghiệp dịch vụ vì giảm 1–2 bước cho khách — bấm 1 lần là tới đích thay vì copy địa chỉ. Universal Links (iOS) và App Links (Android) là biến thể hiện đại của deep link, hoạt động an toàn hơn.",
  },
  {
    slug: "kpi-activation",
    term: "KPI Activation",
    category: "qr",
    shortDef: "Chiến dịch marketing trả phí theo kết quả thực hiện — agency cam kết số lượt quét, tải app, đăng ký.",
    body:
      "Activation theo KPI là mô hình chiến dịch trong đó nhãn hàng/agency thuê đội cộng tác viên (CTV) thực hiện hành động cụ thể với KPI rõ ràng: X lượt quét mã QR, Y lượt tải app, Z lượt mở tài khoản. Phí thanh toán theo lượt hoàn thành hợp lệ — không thanh toán nếu không đạt. Ví dụ điển hình: chiến dịch Heineken khi ra mắt sản phẩm thuê CTV quét mã QR tải app theo KPI cụ thể. Nghiệm thu minh bạch yêu cầu: tài khoản chính chủ, không bơm số ảo, có timestamp + location.",
    related: [
      { label: "Quét mã QR theo KPI", href: "/vi/quet-ma-qr/tai-app-theo-kpi" },
      { label: "Quét mã QR cho activation", href: "/vi/quet-ma-qr/cho-su-kien-activation" },
    ],
  },
  {
    slug: "indexnow",
    term: "IndexNow",
    category: "qr",
    shortDef: "Giao thức mở do Microsoft và Yandex khởi xướng — báo cho công cụ tìm kiếm khi có nội dung mới.",
    body:
      "IndexNow ra mắt 2021, cho phép website ping trực tiếp Bing, Yandex, Naver, DuckDuckGo, Seznam khi có URL mới hoặc cập nhật — thay vì chờ bot crawl định kỳ. Google chưa chính thức tham gia nhưng đang test. Cách dùng: tạo key file đặt ở root, gửi POST API tới endpoint với danh sách URL. Hiệu quả: URL được index trong vài giờ thay vì vài ngày. Congthienagency.com có script npm run indexnow tự động ping sau mỗi deploy — quan trọng cho blog tin tức hoặc trang ưu đãi mùa cao điểm.",
  },
  {
    slug: "tracking-pixel",
    term: "Tracking Pixel",
    category: "qr",
    shortDef: "Đoạn code 1x1 invisible nhúng trên website để theo dõi hành vi khách phục vụ remarketing.",
    body:
      "Tracking pixel là pixel ảnh 1x1 trong suốt hoặc đoạn JavaScript được nhúng trên website. Phổ biến nhất: Meta Pixel (Facebook/Instagram Ads), Google Tag (Google Ads, GA4), TikTok Pixel, Naver Premium Log. Khi khách ghé trang, pixel ghi nhận hành vi (xem trang, click, thêm giỏ hàng, mua) và gửi về platform để: (1) đo hiệu quả ads, (2) tạo audience remarketing, (3) tối ưu thuật toán nhắm khách. Tuân thủ GDPR/quyền riêng tư: cần banner cookie consent trước khi load pixel ở thị trường EU.",
  },
  {
    slug: "lead-generation",
    term: "Lead Generation",
    category: "qr",
    shortDef: "Thu thập thông tin liên hệ (tên, SĐT, email) của khách tiềm năng — nguyên liệu đầu vào của bán hàng.",
    body:
      "Lead generation (\"thu lead\") là quy trình biến người lạ thành khách tiềm năng có thông tin liên hệ. Kênh thu lead phổ biến cho doanh nghiệp dịch vụ – du lịch: form đặt lịch trên website, quét QR Zalo OA tại điểm bán, popup ưu đãi đổi email, Meta Lead Ads, mini game Facebook. Chất lượng lead quan trọng hơn số lượng — 100 lead đúng tệp có ý định mua giá trị hơn 1.000 lead chung chung. Quy trình tốt: thu lead → nurture (email/Zalo OA tự động) → chuyển sang sales sau khi đạt mức warm.",
    related: [
      { label: "Quét mã Zalo thu lead", href: "/vi/quet-ma-zalo-thu-lead" },
      { label: "Cách quét mã Zalo thu lead", href: "/vi/blog/top-cach-quet-ma-zalo-thu-lead" },
    ],
  },
];
