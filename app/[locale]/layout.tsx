import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Be_Vietnam_Pro, IBM_Plex_Mono } from "next/font/google";
import { SITE, type Locale } from "@/content/site";
import { SITE_METADATA_BASE } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { organizationGraph, graphDocument } from "@/lib/schema";
import "../globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: SITE_METADATA_BASE,
  title: {
    default: SITE.name,
    template: `%s`,
  },
  description: SITE.description,
};

export function generateStaticParams() {
  return SITE.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SITE.locales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale} className={`${beVietnam.variable} ${plexMono.variable}`}>
      <body>
        <JsonLd data={graphDocument(organizationGraph())} />
        {children}
      </body>
    </html>
  );
}
