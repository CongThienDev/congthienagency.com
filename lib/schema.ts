import { SITE } from "@/content/site";

const ORG_ID = `${SITE.url}/#organization`;
const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;
const DEFAULT_LOGO = `${SITE.url}/logo/cong-thien-agency-signature-blue.svg`;
const DEFAULT_IMAGE = `${SITE.url}/images/og/og-default.jpg`;

type Graph = Record<string, unknown>;

/** Organization + LocalBusiness + Person + WebSite, referenced by @id elsewhere. */
export function organizationGraph(): Graph[] {
  return [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      url: SITE.url,
      description: SITE.description,
      email: SITE.contact.email,
      telephone: SITE.contact.phoneE164,
      logo: DEFAULT_LOGO,
      image: [DEFAULT_IMAGE],
      founder: { "@id": PERSON_ID },
      areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hội An",
        addressRegion: "Quảng Nam – Đà Nẵng",
        addressCountry: "VN",
      },
      sameAs: [SITE.contact.fanpage],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.founder,
      alternateName: "CongThienDev",
      jobTitle: "Founder & Developer",
      worksFor: { "@id": ORG_ID },
      url: SITE.url,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE.url,
      name: SITE.shortName,
      publisher: { "@id": ORG_ID },
      inLanguage: ["vi", "en"],
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
