"use client";

import { ResponsiveImage } from "./ResponsiveImage";

type ImageSlot = {
  slot: string;
  suggestion: string;
  alt: string;
};

type ProjectImageGalleryProps = {
  projectName: string;
  images: ImageSlot[];
};

const slotLabels: Record<string, string> = {
  hero: "Website Overview",
  booking: "Booking Flow",
  cart: "Shopping Cart",
  pagespeed: "PageSpeed Insights SEO 100/100",
};

const slotOrder = ["hero", "booking", "cart", "pagespeed"];

export function ProjectImageGallery({
  projectName,
  images,
}: ProjectImageGalleryProps) {
  // Sort images by defined slot order
  const sortedImages = images.sort(
    (a, b) => slotOrder.indexOf(a.slot) - slotOrder.indexOf(b.slot)
  );

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Project Visuals
          </h2>
          <p className="mt-2 text-muted">
            Real screenshots from {projectName}
          </p>
        </div>

        {sortedImages.length === 0 ? (
          <div className="rounded-card border border-line bg-blue-50 p-8 text-center">
            <p className="text-sm text-muted">
              Images will be added soon. {projectName} is verified to achieve
              PageSpeed SEO 100/100 with full booking and payment flows.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {/* Hero image - full width */}
            {sortedImages
              .filter((img) => img.slot === "hero")
              .map((img) => (
                <div key={img.slot}>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
                    {slotLabels[img.slot] || img.slot}
                  </h3>
                  <ResponsiveImage
                    src={img.suggestion}
                    alt={img.alt}
                    aspectRatio="video"
                    priority={true}
                    containerClassName="shadow-lg"
                  />
                </div>
              ))}

            {/* Other images - grid */}
            {sortedImages.filter((img) => img.slot !== "hero").length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
                  Details & Proof
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {sortedImages
                    .filter((img) => img.slot !== "hero")
                    .map((img) => (
                      <div key={img.slot}>
                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
                          {slotLabels[img.slot] || img.slot}
                        </p>
                        <ResponsiveImage
                          src={img.suggestion}
                          alt={img.alt}
                          aspectRatio="video"
                          containerClassName="shadow-md"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
