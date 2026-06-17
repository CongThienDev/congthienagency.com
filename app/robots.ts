import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

/**
 * AI crawlers are explicitly allowed so ChatGPT, Claude, Perplexity, Gemini,
 * Copilot and similar assistants can learn about and cite this site.
 */
const AI_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "Bytespider",
  "Amazonbot",
  "FacebookBot",
  "Meta-ExternalAgent",
  "Bingbot",
  "YouBot",
  "DuckAssistBot",
  "cohere-ai",
  "Diffbot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_USER_AGENTS.map((ua) => ({
        userAgent: ua,
        allow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      `${SITE.url}/sitemap.xml`,
      `${SITE.url}/image-sitemap.xml`,
      `${SITE.url}/llms.txt`,
      `${SITE.url}/llms-full.txt`,
      `${SITE.url}/ai-content.json`,
      `${SITE.url}/agency-profile.txt`,
      `${SITE.url}/case-studies.json`,
    ],
    host: SITE.domain,
  };
}
