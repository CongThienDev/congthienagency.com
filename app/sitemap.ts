import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { SERVICES } from "@/content/services.vi";
import { PROJECTS } from "@/content/projects.vi";
import { BLOG_POSTS } from "@/content/blog.vi";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const viCore = [
    "/vi",
    "/vi/dich-vu",
    "/vi/gioi-thieu",
    "/vi/quy-trinh",
    "/vi/bang-gia",
    "/vi/lien-he",
    "/vi/du-an",
    "/vi/blog",
  ];

  const enCore = ["/en", "/en/about", "/en/services", "/en/pricing", "/en/contact"];

  const servicePaths = SERVICES.map((s) => s.path);
  const projectPaths = PROJECTS.map((p) => p.path);
  const blogPaths = BLOG_POSTS.map((b) => b.path);

  const all = [...viCore, ...enCore, ...servicePaths, ...projectPaths, ...blogPaths];

  return all.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/vi" ? 1 : 0.7,
  }));
}
