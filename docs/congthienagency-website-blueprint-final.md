# Website Blueprint — FINAL (Trimmed & SEO-Safe) — CongThienAgency.com

**Project:** Công Thiên Agency by CongThienDev
**Domain:** `congthienagency.com`
**Default language:** Vietnamese (`/vi`)
**Secondary:** English core pages (`/en`) + selected Korean SEO landing pages (`/ko`)
**Stack:** Next.js SSR / App Router / TypeScript / Tailwind CSS / JSON-LD Schema / Sitemap / Robots / Blog from day one
**Style:** Clean professional agency — black / white / blue, SEO-first, founder-led trust
**Location positioning:** Service-area only → **Hội An – Đà Nẵng, Việt Nam** (no private physical address shown)
**Founder entity:** Lê Công Thiên (mentioned on About / Process for personal-brand SEO)

> **What changed vs the original blueprint:** the original specced ~120 Vietnamese pages. This version trims the launch to **~24 pages + 5–7 blog posts**, collapses cannibalizing URLs into single canonical pages, namespaces clusters into folders, rewrites sensitive services into safe public copy, and moves the rest to a tracked backlog. Build depth before breadth.

---

## 0. Guiding Principles

1. **One canonical page per search intent.** No two indexed pages compete for the same primary keyword.
2. **Depth over breadth.** 24 excellent pages beat 120 thin ones. A page only ships when its unique blocks (pain points, deliverables, FAQ, proof) are genuinely written, not templated.
3. **Folder namespaces** make the topical hierarchy explicit to Google and AI search.
4. **Entity-first SEO.** A strong About page + consistent NAP + clean schema graph + real proof (PageSpeed 100, the two case studies) is what ranks and converts.
5. **Safe public wording.** Sensitive services stay public but are reframed professionally. Risky keywords live only in body/FAQ/pricing copy, never in premium H1/title.
6. **Hybrid voice.** "Công Thiên Agency" for professional/service sections; "tôi" (Lê Công Thiên) on About / founder / process sections to increase trust.

---

## 1. Final Trimmed Sitemap (Phase 1 / 2 / 3)

### Phase 1 — Core launch (~24 pages)
Money pages + trust pages + proof + blog seed. Ships first, fully written.

**Core / trust**
- `/vi` — Homepage
- `/vi/gioi-thieu` — About / founder entity
- `/vi/dich-vu` — Service hub
- `/vi/quy-trinh` — Process (trust + conversion)
- `/vi/bang-gia` — Pricing
- `/vi/lien-he` — Contact
- `/vi/blog` — Blog index (+ 5–7 launch articles)

**Service pillars (4)**
- `/vi/thiet-ke-website` — Website pillar
- `/vi/naver-marketing` — Naver pillar
- `/vi/google-maps-marketing` — Google Maps pillar (Review & Reputation)
- `/vi/social-marketing` — Social pillar (absorbs verification, growth, recovery as sections)

**Phase-1 money spokes (high-intent, confirmed by you)**
- `/vi/thiet-ke-website/spa-hoi-an`
- `/vi/thiet-ke-website/nha-hang-hoi-an`
- `/vi/thiet-ke-website/cooking-class-hoi-an`
- `/vi/naver-marketing/cho-spa`
- `/vi/naver-marketing/da-nang`
- `/vi/naver-marketing/booking-blogger-han`
- `/vi/google-maps-marketing/review-reputation`

**Portfolio**
- `/vi/du-an` — Portfolio hub
- `/vi/du-an/ruong-house`
- `/vi/du-an/serena-retreat`

**English core (early launch)**
- `/en` — Homepage
- `/en/about`
- `/en/services`
- `/en/pricing`
- `/en/contact`

> Phase-1 indexed total ≈ **24 core/VI pages + 5 EN core + 5–7 blog = ~34 URLs.** Comfortable and defensible.

### Phase 2 — SEO expansion (add only when content is unique)
- VI spokes: `/vi/thiet-ke-website/khach-san-homestay-hoi-an`, `/vi/thiet-ke-website/tour-du-lich-hoi-an`, `/vi/thiet-ke-website/da-nang`
- Naver verticals: `/vi/naver-marketing/cho-nha-hang`, `/vi/naver-marketing/cho-khach-san`, `/vi/naver-marketing/koc`
- Maps verticals: `/vi/google-maps-marketing/cho-spa`, `/vi/google-maps-marketing/cho-nha-hang`, `/vi/google-maps-marketing/hoi-an`, `/vi/google-maps-marketing/da-nang`
- Industry solution hubs: `/vi/giai-phap/spa`, `/vi/giai-phap/nha-hang`, `/vi/giai-phap/khach-san-homestay`, `/vi/giai-phap/tour-cooking-class`
- Location pillar: `/vi/marketing-hoi-an`, `/vi/marketing-da-nang` (one strong pillar each — not 6 variants)
- English commercial: `/en/spa-website-design-hoi-an`, `/en/naver-marketing-da-nang`, `/en/google-maps-marketing-vietnam`
- Korean selected landing pages: `/ko` (hub), `/ko/da-nang-naver-marketing`, `/ko/hoi-an-naver-marketing`, `/ko/vietnam-naver-blog-marketing`

### Phase 3 — Content growth & long-tail
- Đà Nẵng twins of spa/restaurant pages **only with** city-specific examples, neighborhoods, distinct FAQs.
- Tripadvisor pages, additional industry × location combos that show real search demand.
- Blog scaled to 2–4 posts/week; remaining clusters from §11.
- More Korean landing pages once native-reviewed.

---

## 2. Recommended SEO URL Structure (folder namespaces)

```
/vi                                  Homepage
/vi/gioi-thieu                       About
/vi/dich-vu                          Service hub
/vi/quy-trinh                        Process
/vi/bang-gia                         Pricing
/vi/lien-he                          Contact

/vi/thiet-ke-website                 Website PILLAR
/vi/thiet-ke-website/spa-hoi-an      └ spoke
/vi/thiet-ke-website/nha-hang-hoi-an └ spoke
/vi/thiet-ke-website/cooking-class-hoi-an

/vi/naver-marketing                  Naver PILLAR
/vi/naver-marketing/cho-spa
/vi/naver-marketing/da-nang
/vi/naver-marketing/booking-blogger-han

/vi/google-maps-marketing            Maps PILLAR
/vi/google-maps-marketing/review-reputation

/vi/social-marketing                 Social PILLAR (verification, growth, recovery = sections)

/vi/giai-phap/{spa|nha-hang|...}     Industry solution hubs (Phase 2)
/vi/marketing-hoi-an                 Location pillar (Phase 2)
/vi/marketing-da-nang                Location pillar (Phase 2)

/vi/du-an                            Portfolio hub
/vi/du-an/{slug}                     Case study

/vi/blog                             Blog index
/vi/blog/{category}                  Category
/vi/blog/{slug}                      Article

/en/...                              English (flat for core, folders for commercial)
/ko/...                              Korean selected landing pages
```

**URL rules (unchanged, they were correct):** lowercase only · hyphen separators · no Vietnamese accents · no dates in service URLs · language prefix `/vi` `/en` `/ko` · descriptive and keyword-focused · never a thin doorway.

**Why folders:** grouping spokes under their pillar (`/thiet-ke-website/spa-hoi-an`) signals structure, makes breadcrumbs natural, and avoids the "120 flat siblings = doorway farm" pattern that triggered the original cannibalization risk.

---

## 3. Exact Phase 1 Launch List (≤30 pages)

| # | URL | Type | Primary keyword |
|---|---|---|---|
| 1 | `/vi` | Home | Công Thiên Agency, marketing Hội An Đà Nẵng |
| 2 | `/vi/gioi-thieu` | About | Công Thiên Agency by CongThienDev, Lê Công Thiên |
| 3 | `/vi/dich-vu` | Hub | dịch vụ marketing online Hội An Đà Nẵng |
| 4 | `/vi/quy-trinh` | Trust | quy trình thiết kế website & marketing |
| 5 | `/vi/bang-gia` | Pricing | bảng giá website, bảng giá marketing online |
| 6 | `/vi/lien-he` | Contact | liên hệ Công Thiên Agency |
| 7 | `/vi/blog` | Blog index | marketing blog Hội An Đà Nẵng |
| 8 | `/vi/thiet-ke-website` | Pillar | thiết kế website Hội An Đà Nẵng |
| 9 | `/vi/thiet-ke-website/spa-hoi-an` | Spoke | thiết kế website spa Hội An |
| 10 | `/vi/thiet-ke-website/nha-hang-hoi-an` | Spoke | thiết kế website nhà hàng Hội An |
| 11 | `/vi/thiet-ke-website/cooking-class-hoi-an` | Spoke | thiết kế website cooking class Hội An |
| 12 | `/vi/naver-marketing` | Pillar | Naver Marketing Việt Nam |
| 13 | `/vi/naver-marketing/cho-spa` | Spoke | Naver Blog cho spa |
| 14 | `/vi/naver-marketing/da-nang` | Spoke | Naver Marketing Đà Nẵng |
| 15 | `/vi/naver-marketing/booking-blogger-han` | Spoke | booking blogger Hàn Quốc, Naver Blogger Review |
| 16 | `/vi/google-maps-marketing` | Pillar | Google Maps Marketing Hội An Đà Nẵng |
| 17 | `/vi/google-maps-marketing/review-reputation` | Spoke | Google Maps Review & Reputation |
| 18 | `/vi/social-marketing` | Pillar | Social Marketing Hội An Đà Nẵng |
| 19 | `/vi/du-an` | Portfolio | dự án website Hội An Đà Nẵng |
| 20 | `/vi/du-an/ruong-house` | Case study | website cooking class Hội An |
| 21 | `/vi/du-an/serena-retreat` | Case study | website spa Hội An |
| 22 | `/en` | EN Home | digital marketing agency Hoi An Da Nang |
| 23 | `/en/about` | EN About | Cong Thien Agency |
| 24 | `/en/services` | EN Hub | marketing services Hoi An Da Nang |
| 25 | `/en/pricing` | EN Pricing | website and marketing pricing Vietnam |
| 26 | `/en/contact` | EN Contact | contact Cong Thien Agency |

**+ 5–7 launch blog posts** (Batch A in §11).

---

## 4. Kept as Future Backlog (from the old 120-page idea)

These are valid SEO targets — just **not at launch.** Promote to Phase 2/3 when you can write unique content.

- **Website cluster:** khách sạn/homestay/villa, tour du lịch, booking-online, thanh-toan-online, Đà Nẵng twins of each industry.
- **Naver cluster:** cho-nha-hang, cho-khach-san, cho-tour, viet-bai-naver-blog, tao-tai-khoan-naver, dang-bai-hang-thang, KOC, korean-marketing-hoi-an, marketing-khach-han.
- **Maps cluster:** review-hoi-an, review-da-nang, marketing-hoi-an, marketing-da-nang, toi-uu-gbp, cho-spa/nha-hang/khach-san, local-seo-hoi-an, local-seo-da-nang.
- **Tripadvisor cluster:** marketing, cho-nha-hang, cho-khach-san, cho-tour (all Phase 3 — only if demand shows).
- **Industry solution hubs:** spa / nhà hàng / khách sạn-homestay / tour-cooking (Phase 2 as `/vi/giai-phap/*`).
- **Location pillars:** marketing-hoi-an, marketing-da-nang (Phase 2, consolidated).
- **Korean:** spa-marketing, restaurant, tour, blogger-booking landing pages (Phase 2/3, post native review).

Track these in a simple backlog table (URL, target keyword, status, blocking dependency).

---

## 5. Merge / Remove / Convert decisions

**MERGE (collapse cannibalizing URLs into one canonical):**
- `thiet-ke-website-spa` + `...-spa-hoi-an` + `...-spa-da-nang` → **one** `/vi/thiet-ke-website/spa-hoi-an` at launch; Đà Nẵng is a future twin only if differentiated.
- `marketing-cho-spa-hoi-an` (industry) vs `thiet-ke-website/spa-hoi-an` (service) → industry hub becomes the **parent solution page** (`/vi/giai-phap/spa`), service page stays the deliverable. They must not both target "spa Hội An" as primary.
- `marketing-hoi-an` + `local-marketing-hoi-an` + `seo-hoi-an` + `marketing-agency-hoi-an` → **one** `/vi/marketing-hoi-an` pillar (same for Đà Nẵng).
- `google-maps-review*` + `google-maps-marketing*` + `toi-uu-google-maps-*` → pillar `/vi/google-maps-marketing` + one `/review-reputation` spoke; verticals later.
- `naver-blog-cho-spa` + `naver-blog-cho-spa-hoi-an` + `...-da-nang` → one `/vi/naver-marketing/cho-spa`.
- All `tick-xanh-*`, `buff-follow-*`, `buff-like-*`, `lay-lai-*`, `tao-fanpage`, `social-growth-package` → **sections inside** `/vi/social-marketing`, not separate indexed URLs at launch.

**REMOVE / DE-INDEX (no buyer intent — they're features, not searches):**
- `thiet-ke-website-seo-100-diem`, `...-toc-do-cao`, `...-nextjs`, `...-da-ngon-ngu` → become **homepage/service sections** and **blog posts**, not service URLs.

**CONVERT to blog posts (informational intent):**
- `viet-bai-naver-blog`, `bo-tu-khoa-naver-cho-spa`, `cach-chuan-bi-hinh-anh-naver` → Naver blog cluster.
- `google-business-profile-can-co-gi`, `vi-sao-hinh-anh-google-maps-quan-trong` → Maps blog cluster.
- `social-proof-la-gi`, `buff-follow-co-nen-dung-khong`, `fanpage-moi-co-len-tick-xanh-duoc-khong` → social blog cluster (this is also where the risky keywords live safely, in educational context).

---

## 6. Homepage Structure (H1 / H2 / CTA / section direction)

**Voice:** professional agency framing, founder-led trust. Vietnamese.

### Header
Menu: **Dịch vụ · Website · Naver Marketing · Google Maps · Portfolio · Bảng giá · Blog · Liên hệ**
Language switcher: VI / EN / KO.
Contact: Phone `0934.868.001` · Zalo · WhatsApp · Fanpage icons.
Primary CTA: **Nhận tư vấn miễn phí** · Secondary: **Xem dự án**

### Section 1 — Hero
- **Eyebrow:** Công Thiên Agency by CongThienDev
- **H1:** `Website, Naver & Google Maps cho spa, nhà hàng và du lịch tại Hội An – Đà Nẵng`
- **Subheadline (~25 words):** Giúp doanh nghiệp địa phương xây website chuyên nghiệp, tối ưu SEO Google, tiếp cận khách Hàn qua Naver và tăng uy tín trên Google Maps trước khi khách đặt dịch vụ.
- **CTA 1:** Nhận tư vấn qua Zalo · **CTA 2:** Xem portfolio
- **Trust strip (concrete proof):** `PageSpeed SEO 100/100 · 2 website booking đã bàn giao · Hội An – Đà Nẵng`

### Section 2 — Pain points
- **H2:** `Khách đang tìm bạn trên Google, Naver và Google Maps — họ có thấy bạn không?`
- 4–5 bullets: website chưa chuyên nghiệp · khách Hàn tìm trên Naver nhưng không có nội dung phù hợp · Google Maps thiếu hình ảnh/mô tả/review · Fanpage chưa tạo niềm tin · khách so sánh nhiều kênh trước khi quyết định.

### Section 3 — Main services (4 cards → link to pillars)
- **H2:** `Một hệ thống marketing online đầy đủ cho doanh nghiệp du lịch – dịch vụ`
1. **Thiết kế website SEO** → `/vi/thiet-ke-website`
2. **Naver Marketing** → `/vi/naver-marketing`
3. **Google Maps Review & Reputation** → `/vi/google-maps-marketing`
4. **Social Marketing & Hỗ trợ Facebook** → `/vi/social-marketing`

### Section 4 — Why Công Thiên (the moat — lead with differentiator)
- **H2:** `Không chỉ làm marketing — tôi xây hệ thống để khách tìm thấy, tin tưởng và đặt dịch vụ`
- Founder voice ("tôi"): code website booking thật (cart, PayPal/Stripe, email confirmation), không chỉ landing page · hiểu ngành spa/nhà hàng/tour tại Hội An – Đà Nẵng · tập trung SEO, tốc độ, mobile · có Naver cho khách Hàn · portfolio thật: Ruong House + Serena Retreat.

### Section 5 — Featured portfolio (proof)
- **H2:** `Dự án đã triển khai`
- Two cards (Ruong House, Serena Retreat) with PageSpeed 100 + delivery time + booking/payment flow + Google Maps setup. CTA: Xem case study.

### Section 6 — Pricing preview (anchor on Website)
- **H2:** `Bảng giá rõ ràng để dễ chọn gói phù hợp`
- 3 highlighted: Website Business từ 10.000.000đ (highlighted) · Naver Blogger Review 8.000.000đ/4 bài · Naver Account Content 6.000.000đ/tháng. CTA: Xem toàn bộ bảng giá.

### Section 7 — Industries
- **H2:** `Tập trung vào các ngành có nhu cầu booking và khách du lịch cao`
- Spa/Wellness · Nhà hàng/Cafe · Khách sạn/Homestay/Villa · Tour/Cooking Class · Dịch vụ du lịch Hội An – Đà Nẵng.

### Section 8 — Process
- **H2:** `Quy trình làm việc rõ ràng`
- 6 steps (tư vấn → phân tích hiện trạng → đề xuất gói → triển khai → tối ưu SEO & kiểm tra hiển thị → báo cáo & bàn giao).

### Section 9 — FAQ (feeds FAQPage schema)
- **H2:** `Câu hỏi thường gặp`
- 6–8 Qs (phù hợp doanh nghiệp nào · thời gian làm website · SEO · booking & thanh toán · Naver cho ai · Google Maps & Tripadvisor · nhận khách ngoài Hội An – Đà Nẵng không · bảng giá cố định không).

### Section 10 — Final CTA
- **H2:** `Bạn muốn khách tìm thấy doanh nghiệp của mình trên Google, Naver và Google Maps?`
- CTA: Nhắn Zalo · Gửi form tư vấn · Gọi 0934.868.001

### Footer
Logo · short description · Services · Industries · Locations (Hội An, Đà Nẵng) · Contact (phone/Zalo/WhatsApp/email/Fanpage) · Sitemap link · Chính sách dịch vụ. Footer links = pillars + key pages only (not every URL).

---

## 7. Service Page Template (reusable skeleton)

Every service page uses the same block order. **Templated blocks:** 1, 2, 7, 9, 12. **Must be hand-written per page (anti-thin rule):** 3, 4, 5, 6, 8, 10. If you can't write a unique #4 and #10, don't publish the page.

1. **Breadcrumb** (Trang chủ › Dịch vụ › Pillar › [Page])
2. **Hero** — H1 (primary keyword + location + benefit), subhead, CTA
3. **Intro** (60–90 words; answers "what + who" — feeds AI snippets) ← unique
4. **Pain points** (3–5, industry-specific) ← unique
5. **What's included / deliverables** (concrete bullets) ← unique
6. **Who it's for** (industry + location qualifier) ← unique
7. **Process** (3–6 steps)
8. **Proof block** — relevant case study (Serena for spa, Ruong for cooking/tour) ← unique
9. **Pricing anchor** ("từ X.000.000đ" + link to `/vi/bang-gia`)
10. **FAQ** (4–6 unique Qs → FAQPage schema) ← unique
11. **Related services** (2–3 internal links: 1 sibling spoke, up to pillar, 1 cross-cluster)
12. **Final CTA** (Zalo / form / phone)

**Internal-link quota per service page:** 1 portfolio page · 1 pillar (up-link) · 1–2 sibling/cross-cluster services · 1 pricing · 1 contact · 1 related blog post. Vary anchor text.

**Content length:** 900–1,500 words, unique intro/local angle/examples. Never copy a paragraph across Hội An and Đà Nẵng pages.

---

## 8. Final Service Page List — Phase 1 & Phase 2

### Phase 1 (pillars + confirmed money spokes)
- `/vi/thiet-ke-website` (pillar)
  - `/vi/thiet-ke-website/spa-hoi-an`
  - `/vi/thiet-ke-website/nha-hang-hoi-an`
  - `/vi/thiet-ke-website/cooking-class-hoi-an`
- `/vi/naver-marketing` (pillar)
  - `/vi/naver-marketing/cho-spa`
  - `/vi/naver-marketing/da-nang`
  - `/vi/naver-marketing/booking-blogger-han`
- `/vi/google-maps-marketing` (pillar)
  - `/vi/google-maps-marketing/review-reputation`
- `/vi/social-marketing` (pillar; verification/growth/recovery as on-page sections)

### Phase 2 (add when uniquely written)
- Website: `/khach-san-homestay-hoi-an`, `/tour-du-lich-hoi-an`, `/da-nang`
- Naver: `/cho-nha-hang`, `/cho-khach-san`, `/koc`
- Maps: `/cho-spa`, `/cho-nha-hang`, `/hoi-an`, `/da-nang`
- Industry hubs: `/vi/giai-phap/{spa|nha-hang|khach-san-homestay|tour-cooking-class}`
- Location pillars: `/vi/marketing-hoi-an`, `/vi/marketing-da-nang`
- English commercial: `/en/spa-website-design-hoi-an`, `/en/naver-marketing-da-nang`, `/en/google-maps-marketing-vietnam`
- Korean: `/ko`, `/ko/da-nang-naver-marketing`, `/ko/hoi-an-naver-marketing`, `/ko/vietnam-naver-blog-marketing`

---

## 9. Pricing Page Structure (safe public wording)

**URL:** `/vi/bang-gia` · **H1:** `Bảng giá dịch vụ Công Thiên Agency`

**Intro:**
> Bảng giá giúp chủ doanh nghiệp ước lượng ngân sách trước khi tư vấn. Mỗi dự án có thể thay đổi theo ngành nghề, mức độ cạnh tranh, số trang, tính năng booking/thanh toán và mục tiêu SEO.

**Cards (anchor the eye on Website Business — highlight it):**

**1 · Website Business — Từ 10.000.000đ / dự án** *(highlighted)*
Thiết kế giao diện · code chuyên nghiệp · tối ưu mobile · SEO cơ bản · tối ưu tốc độ · form liên hệ/booking · tích hợp thanh toán nếu cần · URL chuẩn SEO · sitemap/robots/metadata · tư vấn Google Search visibility. **CTA:** Tư vấn website.

**2 · Naver Blogger Review — 8.000.000đ / 4 bài**
Booking blogger/reviewer Hàn Quốc · bài viết trải nghiệm doanh nghiệp · tối ưu theo bộ từ khóa thống nhất · link bài sau đăng · định hướng nội dung cho khách Hàn.
*Positioning:* Mục tiêu tăng khả năng hiển thị trên Naver Search và tạo thêm social proof từ nội dung tiếng Hàn.

**3 · Naver Account Monthly Content — 6.000.000đ / tháng**
Tạo tài khoản Naver · thiết lập Naver Blog · 8 bài/tháng · đăng định kỳ · tối ưu từ khóa · **bàn giao tài khoản nếu khách dừng dịch vụ** · gia hạn theo tháng.

**4 · Naver KOC / Korean Blogger Experience — Báo giá theo chiến dịch**
Tìm blogger Hàn phù hợp · sắp xếp lịch trải nghiệm · brief nội dung · theo dõi bài đăng · tổng hợp link & hiệu quả.

**5 · Google Maps Review & Reputation — Từ 3.500.000đ / chiến dịch**
Tối ưu Google Business Profile · hình ảnh, danh mục, mô tả, dịch vụ, bài đăng · chiến lược review & reputation từ khách hàng thật · xây dựng social proof và uy tín địa phương. Phù hợp spa, nhà hàng, khách sạn, tour.
*(Safe framing — see §9.1.)*

**6 · Hỗ trợ xác minh Fanpage (Meta Verified Support) — Từ 3.000.000đ / fanpage**
Tối ưu hồ sơ fanpage · chuẩn bị thông tin thương hiệu · hỗ trợ quy trình đăng ký xác minh chính thức của Meta · hỗ trợ Instagram nếu phù hợp.
**Lưu ý:** Kết quả xác minh phụ thuộc vào điều kiện xét duyệt của Meta; dịch vụ là hỗ trợ chuẩn bị hồ sơ, không cam kết 100%.

**7 · Social Growth Package — Từ 100.000đ / 1.000 followers**
Hỗ trợ tăng trưởng và khởi động chỉ số ban đầu cho Facebook / Instagram / TikTok · kết hợp nội dung và quảng bá để xây nền tảng nhận diện thương hiệu. Có thể kết hợp với fanpage marketing và content.

**Pricing FAQ (8):** Website 10 triệu gồm gì · website có thanh toán online không · Naver Blogger Review phù hợp spa không · dừng gói Naver có được bàn giao tài khoản không · Google Maps Review & Reputation phù hợp ai · xác minh Fanpage có đảm bảo 100% không (→ no) · kết hợp nhiều gói thành 1 chiến dịch được không · nhận khách ngoài Hội An – Đà Nẵng không.

### 9.1 Sensitive-service wording rules (enforce sitewide)
- **Google Maps:** ✅ "Review & Reputation Marketing", "tối ưu Google Business Profile", "social proof", "uy tín địa phương", "chiến lược review từ khách hàng thật". ❌ Never "mua review", "review ảo", guaranteed star counts, "tăng X review/tháng".
- **Facebook verification:** ✅ "Hỗ trợ xác minh Fanpage / Meta Verified Support". ❌ Don't put "lên tick xanh" or "guaranteed blue tick" in premium H1/title. Always show the Meta-review disclaimer.
- **Social growth:** ✅ "Social Growth Package", "tăng trưởng kênh social", "khởi động chỉ số ban đầu". ❌ Remove "buff" from headlines/titles.
- **Account recovery:** ✅ "Hỗ trợ khôi phục tài khoản Facebook" + "phụ thuộc chính sách Meta".
- **Where risky keywords are allowed:** body paragraphs, FAQ answers, pricing fine print, blog posts — for natural search match only (e.g., "...thường gọi là tick xanh Fanpage...", "...nhiều người tìm dịch vụ buff follow, nhưng nên hiểu..."). Never as the main premium headline.

---

## 10. Portfolio / Case Study Structure

**Hub** `/vi/du-an`: grid of case cards + 1-line result each + filter by industry (Phase 2).

**Case study template:**
1. **Hero:** project name · industry · location · live link · 1-line result
2. **At-a-glance stats bar:** delivery time · SEO 100/100 · booking/payment flow · Google Maps setup
3. **Bối cảnh / mục tiêu** (the client + goal)
4. **Thách thức** (what was missing before)
5. **Phạm vi công việc** (scope, bulleted)
6. **Tính năng đã xây** (booking, cart, payment, email confirmation — your differentiator)
7. **Kết quả & bằng chứng** (PageSpeed screenshot, Google search-visibility screenshot)
8. **Screenshots** (`next/image`, optimized; homepage + key pages)
9. **Điều dự án này chứng minh** (bridge to the sale)
10. **CTA** ("Cần website giống [project]? Nhận tư vấn")
11. *(Optional/future)* testimonial slot — leave structured placeholder, no fake quotes.

### 10.1 Ruong House — `/vi/du-an/ruong-house`
**Title:** Ruonghouse.com – Website Cooking Class & Craft Workshop tại Hội An
**Stats:** 1 tháng · SEO 100/100 PageSpeed · tour pages + cart + PayPal checkout + email confirmation · Google Maps setup.
**Proof (verifiable only):** PageSpeed 100 screenshot · hiển thị #1 cho brand terms "ruonghouse" / "ruong house" (frame as brand-term ranking, không overclaim non-brand).
**CTA:** Bạn cần website booking tour / cooking class giống Ruong House?

### 10.2 Serena Retreat — `/vi/du-an/serena-retreat`
**Title:** Serenaretreat.com – Website Spa & Wellness tại Hội An
**Stats:** 15 ngày · SEO 100/100 PageSpeed · treatment/service pages + cart + PayPal/Stripe/Credit Card + email confirmation · Google Maps setup.
**Proof:** PageSpeed 100 screenshot · hiển thị tốt với nhóm từ khóa spa tại Hội An (frame conservatively until verified).
**CTA:** Bạn cần website spa có booking và SEO như Serena Retreat?

> **Honesty guardrail:** PageSpeed 100 and delivery time are concrete — make them the hero stats. Do NOT claim traffic, booking counts, or exact non-brand rankings until verified. No `aggregateRating`/`Review` schema without real reviews.

---

## 11. Blog Topic Cluster — First 30 (priority-ordered)

Categories: `website-seo` · `naver-marketing` · `google-maps` · `spa-marketing` · `nha-hang-khach-san` · `social-marketing` · `case-study` · `marketing-hoi-an-da-nang`.

**Batch A — launch with these 7 (support core pillars):**
1. Thiết kế website spa cần có những gì? → spa-hoi-an
2. Vì sao spa cần website riêng thay vì chỉ dùng Facebook? → website pillar
3. Naver Blog là gì và vì sao khách Hàn hay dùng? → naver pillar
4. Google Maps ảnh hưởng đến booking như thế nào? → maps pillar
5. Marketing cho spa Hội An nên bắt đầu từ đâu? → spa solution
6. Case Study: Ruong House đạt PageSpeed 100 → ruong-house
7. Case Study: Serena Retreat đạt PageSpeed 100 → serena-retreat

**Batch B — website cluster (8–13):**
8. Checklist website spa chuyên nghiệp
9. Website cooking class Hội An cần có những gì?
10. Thiết kế website nhà hàng cần những trang nào?
11. PageSpeed 100 quan trọng thế nào với SEO?
12. Website booking online hoạt động như thế nào?
13. Website và Fanpage khác nhau ra sao?

**Batch C — Naver cluster (14–19):**
14. Cách khách Hàn tìm spa ở Đà Nẵng trên Naver
15. Nên book blogger Hàn hay tự xây kênh Naver?
16. Naver KOC là gì?
17. Chi phí Naver Blog marketing tại Việt Nam
18. Naver Blog cho nhà hàng và du lịch
19. Cách chuẩn bị hình ảnh cho bài Naver Blog

**Batch D — Maps / Local cluster (20–24):**
20. Cách tối ưu Google Maps cho spa
21. Google Business Profile cần những thông tin gì?
22. Google Maps review và niềm tin khách hàng *(safe reputation framing)*
23. Local SEO Hội An cho doanh nghiệp du lịch
24. Kết hợp website + Google Maps để tăng booking

**Batch E — industry + social (25–30):**
25. Marketing cho nhà hàng Hội An
26. Marketing cho khách sạn / homestay Hội An
27. Marketing cho tour & cooking class
28. Social proof là gì và vì sao quan trọng?
29. Checklist Fanpage chuyên nghiệp cho doanh nghiệp *(tick xanh keyword lives here safely)*
30. Cách xây dựng niềm tin thương hiệu trước khi khách booking

**Cadence:** Phase 1 ships Batch A. Phase 3: 2–4 posts/week. **Every post links** to 1 service page + 1 industry/location page + 1 CTA (pricing or contact).

---

## 12. Internal Linking Strategy

**Model: topical-authority silo with controlled cross-links.**
- **Pillar → spokes:** each pillar links down to all its spokes.
- **Spoke → up + across:** every spoke links up to its pillar (breadcrumb + in-body) and to 1–2 sibling spokes only.
- **Cross-cluster bridges (conversion glue):** website pages link to Naver *when mentioning khách Hàn* and to Maps *when mentioning local trust* — contextual in-sentence anchors, not footer dumps.
- **Industry hubs = connectors:** `/vi/giai-phap/spa` links to spa-website + naver/cho-spa + maps/cho-spa. This is the page a spa owner lands on and routes from.
- **Money pages get the most inbound links:** Serena/Ruong case studies and `/vi/bang-gia` linked from nearly every service page (proof + price = conversion levers).
- **Blog → service (up, not spam):** posts link up to money pages with descriptive anchors; each money page links out to max 1 "tìm hiểu thêm" blog post.
- **Anchor text:** vary (exact + partial + branded). Avoid identical exact-match anchors at scale.
- **Footer:** pillars + key pages only.
- **Breadcrumbs everywhere** (match BreadcrumbList schema).

**Homepage links to:** spa-hoi-an · naver/da-nang · google-maps-marketing · du-an/ruong-house · du-an/serena-retreat · bang-gia · lien-he.

---

## 13. Schema Markup Plan (by page type)

Use `@id` references so the Org is defined once and referenced everywhere (clean entity graph for Google + AI). Localize with `inLanguage`. Keep NAP byte-identical across footer / contact / schema.

| Page type | JSON-LD |
|---|---|
| **All pages** | `WebSite` (+ `SearchAction` if site search), `BreadcrumbList`; one sitewide `Organization`+`LocalBusiness` referenced by `@id` |
| **Home** | `Organization`/`LocalBusiness` (primary), `WebSite` |
| **About** | `Person` (Lê Công Thiên) linked via `worksFor`/`founder` to `Organization` |
| **Service pillar/spoke** | `Service` (`provider`→Org `@id`, `areaServed`, `serviceType`), `FAQPage`, `BreadcrumbList` |
| **Pricing** | `OfferCatalog` of `Offer`/`Service` items, `FAQPage`, `BreadcrumbList` |
| **Portfolio hub** | `CollectionPage`, `BreadcrumbList` |
| **Case study** | `CreativeWork` (the built website) + referenced `Service`, `BreadcrumbList` |
| **Blog index** | `Blog`, `BreadcrumbList` |
| **Blog post** | `BlogPosting` (author `Person`/`Organization`, `datePublished`, `dateModified`, `image`), `BreadcrumbList` |

**Guardrails:**
- ❌ **No `aggregateRating` / `Review` schema** for Công Thiên Agency until real, verifiable reviews exist. Fake review markup = manual-action risk.
- `Offer` prices: fixed packages → exact `price`+`priceCurrency` (`VND`); "từ X" → `priceSpecification.minPrice`. Never invent exact prices.
- `LocalBusiness` uses **service area** (`areaServed: ["Hội An","Đà Nẵng","Vietnam"]`), no street address.
- Unique schema per page — don't copy identical JSON-LD everywhere.

**Org JSON-LD anchor data:** name "Công Thiên Agency by CongThienDev"; alternateName ["Cong Thien Agency","CongThienDev","Công Thiên Marketing Online"]; url, logo; email congthienjob@gmail.com; telephone +84934868001; areaServed Hội An/Đà Nẵng/Vietnam; sameAs Fanpage; contactPoint languages vi/en/ko.

---

## 14. Meta Title & Description Templates (by page type)

Keep titles ≤ ~60 chars where possible, descriptions ≤ ~155 chars. Brand suffix: `| Công Thiên Agency`.

| Page type | Title template | Description template |
|---|---|---|
| **Home** | `Website, Naver & Google Maps cho Spa, Nhà hàng, Du lịch Hội An – Đà Nẵng \| Công Thiên Agency` | `Công Thiên Agency by CongThienDev: thiết kế website SEO, Naver Marketing, Google Maps Review & Reputation cho doanh nghiệp Hội An – Đà Nẵng.` |
| **About** | `Giới thiệu Công Thiên Agency by CongThienDev \| Lê Công Thiên` | `Câu chuyện và năng lực của Công Thiên Agency — website, SEO, Naver và Google Maps cho doanh nghiệp du lịch tại Hội An – Đà Nẵng.` |
| **Service hub** | `Dịch vụ Marketing Online Hội An – Đà Nẵng \| Công Thiên Agency` | `Website, Naver Marketing, Google Maps Review & Reputation và Social Marketing cho spa, nhà hàng, khách sạn, tour tại Hội An – Đà Nẵng.` |
| **Service pillar** | `{Dịch vụ} cho doanh nghiệp Hội An – Đà Nẵng \| Công Thiên Agency` | `Dịch vụ {primary keyword} cho spa, nhà hàng, khách sạn và du lịch tại Hội An – Đà Nẵng. Quy trình rõ ràng, tối ưu SEO, có proof thực tế.` |
| **Service spoke** | `{Primary Keyword} \| Công Thiên Agency` | `Dịch vụ {primary keyword}: {benefit ngắn}. Tối ưu SEO, booking/thanh toán, kết hợp Naver & Google Maps. Tư vấn miễn phí qua Zalo.` |
| **Pricing** | `Bảng giá Website, Naver & Google Maps Marketing \| Công Thiên Agency` | `Bảng giá dịch vụ Công Thiên Agency: website từ 10 triệu, Naver Blogger Review, Google Maps Review & Reputation, Social Growth. Xem chi tiết.` |
| **Portfolio hub** | `Dự án website đã triển khai tại Hội An \| Công Thiên Agency` | `Case study website booking SEO 100/100: Ruong House (cooking class) và Serena Retreat (spa) tại Hội An.` |
| **Case study** | `{Project} – {Industry} tại Hội An \| Case Study Công Thiên Agency` | `{Project}: full website trong {time}, SEO 100/100 PageSpeed, booking + thanh toán + email confirmation. Xem chi tiết dự án.` |
| **Blog index** | `Blog Marketing Website, Naver & Google Maps \| Công Thiên Agency` | `Kiến thức website, SEO, Naver và Google Maps cho doanh nghiệp spa, nhà hàng, khách sạn, tour tại Hội An – Đà Nẵng.` |
| **Blog post** | `{Tiêu đề bài viết} \| Công Thiên Agency` | `{1-câu tóm tắt giá trị bài viết}. Hướng dẫn từ Công Thiên Agency cho doanh nghiệp Hội An – Đà Nẵng.` |
| **Contact** | `Liên hệ tư vấn Website & Marketing \| Công Thiên Agency` | `Nhận tư vấn website, SEO, Naver và Google Maps. Zalo/Phone 0934.868.001, WhatsApp, email. Phục vụ Hội An – Đà Nẵng.` |

**English templates:** mirror structure, swap brand suffix to `| Cong Thien Agency`, keywords to EN (e.g., `Spa Website Design in Hoi An | Cong Thien Agency`).
**Korean:** machine-assisted first, native review before scaling; same structure, Korean keywords (네이버 마케팅 등).

---

## 15. Next.js SSR Implementation Notes (no code yet)

**Architecture**
- App Router with `app/[locale]/...`; `locale ∈ {vi, en, ko}`; `/` → redirect `/vi`.
- Server Components by default; SSR/SSG for all SEO pages; `generateStaticParams` for known slugs.
- **Data-driven pages:** service/industry/location pages generated from typed content files (`content/services.vi.ts`, etc.) so new SEO pages are added by adding data — but each entry must carry **unique** intro/painPoints/deliverables/faq/proof fields (enforce via required types so no page ships thin).
- Folder-namespaced routes per §2 (pillar segment + spoke segment).

**SEO plumbing**
- `generateMetadata` per route (title/description per §14, canonical, Open Graph, Twitter card).
- `hreflang` alternates for vi/en/ko **only where the translated page actually exists** (don't emit hreflang to non-existent pages).
- Central `lib/schema.ts` builders for each schema type in §13, using a single Org `@id`.
- `app/sitemap.ts` (auto from route/content registry) + `app/robots.ts` + per-page canonical.
- Breadcrumbs component paired with BreadcrumbList schema.

**Performance (target Perf 90+, SEO 100, Best Practices 100, A11y 90+)**
- `next/image` for all images; optimize the PageSpeed/search/portfolio screenshots.
- Minimal client JS; lazy-load non-critical sections; font optimization; avoid layout shift; responsive header/CTA.

**i18n / launch order**
- VI = default, full Phase 1. EN core early. KO = selected landing pages, machine-assisted then reviewed; consider `noindex` on KO pages until native-reviewed to avoid low-quality multilingual signals.

**Contact data (consistent everywhere — footer, contact, schema):**
- Phone/Zalo: `0934.868.001` · Zalo `https://zalo.me/+84934868001` · WhatsApp `http://wa.me/+84367441259` · Email `congthienjob@gmail.com` · Fanpage `https://www.facebook.com/profile.php?id=61586650725601` · **do not show personal Facebook.**

**Deliverables when code begins:** clean project structure · reusable section/card components · typed content data files · SEO metadata generator · JSON-LD schema helpers · sitemap + robots · responsive UI · 5–7 real launch blog posts (no lorem) · README on adding new service pages & blog posts.

---

## 16. Final Notes

- The site should read like a **professional digital agency with a local tourism focus**, not a cheap service directory.
- **Conversion path:** owner lands on a service/industry page → sees you understand their industry → sees proof (Ruong House + Serena Retreat, PageSpeed 100) → understands pricing → contacts via Zalo/phone/WhatsApp/Fanpage/form.
- **Strategic one-liner:** *Website làm nền tảng → Naver tiếp cận khách Hàn → Google Maps tăng niềm tin địa phương → Social tăng uy tín trước khi khách booking.*
- **Do not** overclaim metrics, use risky headline wording, or ship thin/duplicate pages. Grow the backlog (§4) only as fast as you can write genuinely unique content.
