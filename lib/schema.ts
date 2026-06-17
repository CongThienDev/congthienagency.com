import { SITE } from "@/content/site";

const ORG_ID = `${SITE.url}/#organization`;
const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;
const DEFAULT_IMAGE = `${SITE.url}/images/og/og-default.jpg`;

type Graph = Record<string, unknown>;

/** Organization + LocalBusiness + Person + WebSite, referenced by @id elsewhere. */
export function organizationGraph(): Graph[] {
  return [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": ORG_ID,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}${SITE.logoPath}`,
        width: 512,
        height: 512,
      },
      image: [
        DEFAULT_IMAGE,
        `${SITE.url}/images/services/service-website.webp`,
        `${SITE.url}/images/services/service-naver.webp`,
        `${SITE.url}/images/services/service-maps.webp`,
        `${SITE.url}/images/services/service-social.webp`,
      ],
      description: SITE.description,
      slogan: SITE.slogan,
      foundingDate: SITE.foundingDate,
      email: SITE.contact.email,
      telephone: SITE.contact.phoneE164,
      founder: { "@id": PERSON_ID },
      employee: { "@id": PERSON_ID },
      areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hội An",
        addressRegion: "Quảng Nam – Đà Nẵng",
        addressCountry: "VN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: SITE.contact.phoneE164,
          email: SITE.contact.email,
          areaServed: "VN",
          availableLanguage: ["vi", "en"],
          url: SITE.contact.zalo,
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: SITE.contact.phoneE164,
          areaServed: ["VN", "KR"],
          availableLanguage: ["vi", "en", "ko"],
        },
      ],
      knowsAbout: SITE.knowsAbout,
      knowsLanguage: ["vi", "en", "ko"],
      sameAs: SITE.sameAs,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dịch vụ Marketing Online Công Thiên Agency",
        itemListElement: [
          { "@type": "OfferCatalog", name: "Thiết kế website", url: `${SITE.url}/vi/thiet-ke-website` },
          { "@type": "OfferCatalog", name: "Naver Marketing", url: `${SITE.url}/vi/naver-marketing` },
          { "@type": "OfferCatalog", name: "Google Maps Marketing", url: `${SITE.url}/vi/google-maps-marketing` },
          { "@type": "OfferCatalog", name: "Social Marketing", url: `${SITE.url}/vi/social-marketing` },
          { "@type": "OfferCatalog", name: "Quét mã QR & Activation", url: `${SITE.url}/vi/quet-ma-qr` },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.founder,
      alternateName: ["CongThienDev", "Lê Công Thiên", "Le Cong Thien"],
      jobTitle: "Founder & Developer",
      worksFor: { "@id": ORG_ID },
      url: `${SITE.url}/vi/gioi-thieu`,
      sameAs: SITE.sameAs,
      knowsAbout: SITE.knowsAbout,
      knowsLanguage: ["vi", "en"],
      nationality: { "@type": "Country", name: "Việt Nam" },
      homeLocation: { "@type": "Place", name: "Hội An, Quảng Nam – Đà Nẵng" },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE.url,
      name: SITE.shortName,
      alternateName: SITE.alternateNames,
      description: SITE.description,
      publisher: { "@id": ORG_ID },
      inLanguage: ["vi", "en"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE.url}/vi/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

export function breadcrumbGraph(
  items: { label: string; href: string }[]
): Graph {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

export function serviceGraph(args: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offerMinPriceVnd?: number;
  offerPriceVnd?: number;
  images?: string[];
}): Graph {
  const offers =
    args.offerMinPriceVnd != null || args.offerPriceVnd != null
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "VND",
            ...(args.offerPriceVnd != null
              ? { price: args.offerPriceVnd }
              : { priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "VND",
                  minPrice: args.offerMinPriceVnd,
                } }),
          },
        }
      : {};

  return {
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.serviceType,
    url: `${SITE.url}${args.path}`,
    ...(args.images?.length ? { image: args.images } : {}),
    provider: { "@id": ORG_ID },
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
    ...offers,
  };
}

export function faqGraph(faqs: { q: string; a: string }[]): Graph {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function creativeWorkGraph(args: {
  name: string;
  description: string;
  path: string;
  images?: string[];
}): Graph {
  return {
    "@type": "CreativeWork",
    name: args.name,
    description: args.description,
    url: `${SITE.url}${args.path}`,
    ...(args.images?.length ? { image: args.images } : {}),
    creator: { "@id": PERSON_ID },
  };
}

export function blogPostingGraph(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  images?: string[];
}): Graph {
  return {
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    url: `${SITE.url}${args.path}`,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE.url}${args.path}`,
    ...(args.images?.length ? { image: args.images } : {}),
  };
}

export function webPageGraph(args: {
  name: string;
  description: string;
  path: string;
  images?: string[];
}): Graph {
  return {
    "@type": "WebPage",
    name: args.name,
    description: args.description,
    url: `${SITE.url}${args.path}`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(args.images?.length
      ? {
          image: args.images,
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: args.images[0],
          },
        }
      : {}),
  };
}

/** Wraps a list of nodes into a single @graph document. */
export function graphDocument(nodes: Graph[]): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
