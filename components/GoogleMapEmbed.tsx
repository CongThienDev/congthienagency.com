import { SITE } from "@/content/site";

type GoogleMapEmbedProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  compact?: boolean;
};

export function GoogleMapEmbed({
  title,
  description,
  ctaLabel = "Mở Google Maps",
  compact = false,
}: GoogleMapEmbedProps) {
  const wrapperClass = compact ? "mx-auto max-w-xl" : "mx-auto max-w-3xl";
  const iframeHeight = compact ? "120" : "180";

  return (
    <div className={`overflow-hidden rounded-card border border-line bg-white shadow-soft ${wrapperClass}`}>
      <div className={`border-b border-line ${compact ? "px-3 py-2.5 sm:px-4" : "px-4 py-3 sm:px-5"}`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className={`${compact ? "text-sm sm:text-[15px]" : "text-base sm:text-lg"} font-semibold tracking-tight text-ink`}>
              {title}
            </h3>
            <p className={`mt-1 leading-relaxed text-muted ${compact ? "text-xs" : "text-sm"}`}>{description}</p>
          </div>
          <a
            href={SITE.contact.maps.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 font-medium text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-100 ${
              compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
            }`}
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      <iframe
        src={SITE.contact.maps.embedUrl}
        width="600"
        height={iframeHeight}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={SITE.contact.maps.placeLabel}
        className="block w-full"
      />
    </div>
  );
}
