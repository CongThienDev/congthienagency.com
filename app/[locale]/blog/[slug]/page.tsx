import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Bits";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { BLOG_POSTS, getPost } from "@/content/blog.vi";
import { BLOG_POSTS_EN, getPostEn } from "@/content/blog.en";
import { graphDocument, breadcrumbGraph, blogPostingGraph, faqGraph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { resolveAbsoluteImageUrls, resolvePrimaryImage } from "@/lib/siteIndex";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return [
    ...BLOG_POSTS.map((p) => ({ locale: "vi", slug: p.slug })),
    ...BLOG_POSTS_EN.map((p) => ({ locale: "en", slug: p.slug })),
  ];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale === "en") {
    const post = getPostEn(slug);
    if (!post) return {};
    return buildMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      path: post.path,
      locale: "en",
      type: "article",
      image: resolvePrimaryImage([
        ...(post.heroImage ? [post.heroImage.src] : []),
        "/images/og/og-default.jpg",
      ]),
    });
  }
  const post = getPost(slug);
  if (locale !== "vi" || !post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: post.path,
    locale: "vi",
    type: "article",
    image: resolvePrimaryImage([
      ...(post.heroImage ? [post.heroImage.src] : []),
      "/images/og/og-default.jpg",
    ]),
  });
}

export default async function Page({ params }: Params) {
  const { locale, slug } = await params;
  if (locale !== "vi" && locale !== "en") notFound();
  const post = locale === "en" ? getPostEn(slug) : getPost(slug);
  if (!post) notFound();

  const isEn = locale === "en";
  const bodyImages = post.body.flatMap((b) => (b.type === "img" ? [b.src] : []));
  const imageUrls = resolveAbsoluteImageUrls([
    ...(post.heroImage ? [post.heroImage.src] : []),
    ...bodyImages,
    "/images/og/og-default.jpg",
  ]);
  const schemaNodes = [
    breadcrumbGraph(post.breadcrumb),
    blogPostingGraph({
      title: post.title,
      description: post.metaDescription,
      path: post.path,
      datePublished: post.date,
      images: imageUrls,
    }),
  ];
  if (post.faqs?.length) schemaNodes.push(faqGraph(post.faqs));

  const d = new Date(post.date).toLocaleDateString(isEn ? "en-GB" : "vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Shell locale={locale as "vi" | "en"}>
      <JsonLd
        data={graphDocument(schemaNodes)}
      />
      <section className="border-b border-line bg-glow">
        <Container className="py-12 sm:py-16">
          <Breadcrumb items={post.breadcrumb} />
          <div className="mt-6 max-w-3xl animate-rise">
            <div className="flex items-center gap-3 text-xs text-muted">
              <span>{d}</span>
              <span className="h-1 w-1 rounded-full bg-line-strong" />
              <span>{post.readingMinutes} {isEn ? "min read" : "phút đọc"}</span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl text-balance">
              {post.title}
            </h1>
          </div>
          {post.heroImage && (
            <div className="mt-8">
              <ResponsiveImage
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                aspectRatio="video"
                priority
              />
            </div>
          )}
        </Container>
      </section>

      <article className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-5">
            {post.body.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                    {block.text}
                  </h2>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="flex flex-col gap-2.5">
                    {block.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-base leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-1.5 text-blue-600">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              if (block.type === "img")
                return (
                  <figure key={i} className="my-2">
                    <ResponsiveImage src={block.src} alt={block.alt} aspectRatio="video" />
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-sm text-muted">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              return (
                <p key={i} className="text-base leading-relaxed text-ink-soft">
                  {block.parts
                    ? block.parts.map((part, partIndex) =>
                        part.type === "link" ? (
                          <Link
                            key={`${part.href}-${partIndex}`}
                            href={part.href}
                            className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-800"
                          >
                            {part.text}
                          </Link>
                        ) : (
                          <span key={`${part.text.slice(0, 16)}-${partIndex}`}>{part.text}</span>
                        )
                      )
                    : block.text}
                </p>
              );
            })}
          </div>

          {post.related.length > 0 && (
            <div className="mx-auto mt-12 max-w-2xl border-t border-line pt-8">
              <p className="label-mono text-muted">{isEn ? "Related" : "Liên quan"}</p>
              <div className="mt-4 flex flex-col gap-3">
                {post.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group flex items-center justify-between rounded-xl border border-line px-4 py-3 transition-all hover:border-blue-200"
                  >
                    <span>
                      <span className="label-mono text-blue-600">{r.note}</span>
                      <span className="mt-1 block font-medium text-ink group-hover:text-blue-700">{r.label}</span>
                    </span>
                    <span aria-hidden className="text-blue-700 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <div className="mx-auto mt-12 max-w-2xl border-t border-line pt-8">
              <p className="label-mono text-muted">FAQ</p>
              <div className="mt-4 flex flex-col gap-3">
                {post.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-line bg-white px-4 py-3"
                  >
                    <summary className="cursor-pointer list-none font-medium text-ink group-open:text-blue-700">
                      {faq.q}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>

      <CTASection
        title={isEn ? "Ready to grow your business?" : "Cần tư vấn cho doanh nghiệp của bạn?"}
        sub={isEn ? "Message me on Zalo or WhatsApp for a consultation on Naver, Google Maps or your website." : "Nhắn tôi qua Zalo để được tư vấn website, Naver và Google Maps."}
        primaryHref={isEn ? "/en/contact" : "/vi/lien-he"}
        primaryLabel={isEn ? "Get in touch" : "Liên hệ"}
      />
    </Shell>
  );
}
