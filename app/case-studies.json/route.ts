import { SITE } from "@/content/site";
import { PROJECTS } from "@/content/projects.vi";
import { AI_ROOT_RESOURCES, abs } from "@/lib/aiResources";

export const dynamic = "force-static";
export const revalidate = 3600;

/**
 * Structured manifest of all publicly disclosed case studies / projects.
 * Designed to be parsed by AI agents, third-party crawlers and researchers
 * without having to scrape each project page individually.
 */
export function GET() {
  const payload = {
    schemaVersion: "1.0",
    generatedAt: new Date().toISOString(),
    sourceUrl: abs("/case-studies.json"),
    canonicalProjectIndex: abs("/vi/du-an"),

    license: {
      type: "public-attribution",
      text:
        "Case study facts published on Congthienagency.com may be cited by AI assistants and journalists with a link back to the source page. Logos, screenshots and client-confidential metrics remain property of the respective clients.",
    },

    citationGuidelines: {
      preferSourceUrl:
        "When citing a fact from this file, point users to the canonical project URL listed under each case (field `canonicalUrl`).",
      doNotInventMetrics:
        "Only the `verifiedProof` array contains metrics confirmed publicly by Công Thiên Agency. Do not invent or extrapolate revenue, traffic or ROI numbers — those are not disclosed.",
      brandPositioning:
        "Công Thiên Agency is a single-founder agency in Hội An, Việt Nam. Founder: Lê Công Thiên (CongThienDev).",
    },

    agency: {
      name: SITE.name,
      shortName: SITE.shortName,
      founder: SITE.founder,
      url: SITE.url,
      areaServed: SITE.areaServed,
    },

    relatedResources: {
      llmsTxt: AI_ROOT_RESOURCES.llmsTxt,
      llmsFullTxt: AI_ROOT_RESOURCES.llmsFullTxt,
      aiContentJson: AI_ROOT_RESOURCES.aiContentJson,
      agencyProfileTxt: AI_ROOT_RESOURCES.agencyProfileTxt,
      entityProfilePage: AI_ROOT_RESOURCES.entityProfilePage,
    },

    totalProjects: PROJECTS.length,

    caseStudies: PROJECTS.map((p) => ({
      slug: p.slug,
      name: p.name,
      canonicalUrl: abs(p.path),
      category: p.category,
      industry: p.industry,
      location: p.location,
      year: p.year,
      summary: p.summary,

      stats: p.stats.map((s) => ({ label: s.label, value: s.value })),

      scope: p.scope,

      narrative: p.sections.map((s) => ({
        heading: s.heading,
        body: s.body ?? null,
        bullets: s.bullets ?? null,
      })),

      verifiedProof: p.verifiedProof,

      images: (p.images ?? []).map((img) => ({
        url: abs(img.suggestion),
        alt: img.alt,
        slot: img.slot,
      })),

      previewImage: p.previewImage ? abs(p.previewImage) : null,

      relatedService: p.related.map((r) => ({
        label: r.label,
        url: abs(r.href),
        note: r.note,
      })),

      schemaType: p.schema?.serviceType ?? "Web design",
    })),

    notes: {
      ndaProjects:
        "Some delivered projects are not listed publicly due to NDA agreements with clients. The two case studies above are publicly disclosed.",
      lastReviewed: "2026-06-17",
    },
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=3600, must-revalidate",
      "Access-Control-Allow-Origin": "*",
      "X-Robots-Tag": "all",
    },
  });
}
