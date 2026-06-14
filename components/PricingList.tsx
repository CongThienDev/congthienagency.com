import { IconArrowRight } from "./Icons";
import { ContactTriggerButton } from "./ContactModal";
import { SERVICE_BRAND, type ServiceBrand } from "./serviceBrand";
import type { PricingGroup } from "@/content/pricing.vi";

type Cluster = "website" | "naver" | "maps" | "social";

const CLUSTER_BRAND: Record<Cluster, ServiceBrand> = {
  website: "website",
  naver: "naver",
  maps: "maps",
  social: "facebook",
};

const CLUSTER_DOT: Record<Cluster, string> = {
  website: "bg-blue-600",
  naver: "bg-[#03c75a]",
  maps: "bg-[#4285f4]",
  social: "bg-[#1877f2]",
};

export function PricingList({ groups }: { groups: PricingGroup[] }) {
  return (
    <div className="space-y-10 sm:space-y-12">
      {groups.map((group) => {
        const cluster = group.id as Cluster;
        const brand = SERVICE_BRAND[CLUSTER_BRAND[cluster]];
        const dot = CLUSTER_DOT[cluster];

        return (
          <section
            key={group.id}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft"
          >
            {/* Category header */}
            <div className="flex items-center gap-2.5 border-b border-line bg-paper/60 px-6 py-4 sm:px-8">
              <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
              <h2 className="text-sm font-semibold tracking-tight text-ink">
                {group.title}
              </h2>
            </div>

            {/* Service rows */}
            <div className="divide-y divide-line">
              {group.packages.map((pkg) => {
                const hasTuPrefix = pkg.priceLabel.startsWith("Từ ");
                const isQuote = pkg.priceLabel.startsWith("Báo giá");
                const priceDisplay = hasTuPrefix
                  ? pkg.priceLabel.slice(3)
                  : pkg.priceLabel;

                return (
                  <div
                    key={pkg.id}
                    className="group flex flex-col gap-5 px-6 py-6 transition-colors duration-200 hover:bg-blue-50/40 sm:flex-row sm:items-center sm:gap-6 sm:px-8"
                  >
                    {/* Name + description */}
                    <div className="flex min-w-0 flex-1 items-start gap-3.5">
                      <span
                        className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl ${brand.badge}`}
                      >
                        {brand.icon}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-ink">
                          {pkg.name}
                        </h3>
                        {pkg.tagline && (
                          <p className="mt-1 text-[13px] leading-relaxed text-muted">
                            {pkg.tagline}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="shrink-0 pl-[54px] sm:w-44 sm:pl-0 sm:text-right">
                      {isQuote ? (
                        <p className="text-base font-semibold text-ink-soft">
                          Báo giá riêng
                        </p>
                      ) : (
                        <>
                          {hasTuPrefix && (
                            <span className="mr-1 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
                              Từ
                            </span>
                          )}
                          <span className="text-[1.5rem] font-bold leading-none tracking-tight text-ink [font-variant-numeric:tabular-nums]">
                            {priceDisplay}
                          </span>
                          {pkg.priceUnit && (
                            <p className="mt-1 text-[12px] text-muted">
                              {pkg.priceUnit}
                            </p>
                          )}
                        </>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="shrink-0 pl-[54px] sm:w-auto sm:pl-0">
                      <ContactTriggerButton className="w-full sm:w-auto">
                        {pkg.ctaLabel}
                        <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </ContactTriggerButton>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
