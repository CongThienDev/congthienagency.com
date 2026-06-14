import { Button } from "./Button";
import { SERVICE_BRAND, type ServiceBrand } from "./serviceBrand";
import type { PricingGroup } from "@/content/pricing.vi";

type Cluster = "website" | "naver" | "maps" | "social";

const CLUSTER_BRAND: Record<Cluster, ServiceBrand> = {
  website: "website",
  naver: "naver",
  maps: "maps",
  social: "facebook",
};

const CLUSTER_ACCENT: Record<Cluster, string> = {
  website: "from-blue-600 to-indigo-500",
  naver: "from-[#03cf5d] to-emerald-500",
  maps: "from-blue-500 to-cyan-400",
  social: "from-[#1877F2] to-blue-400",
};

export function PricingTable({ groups }: { groups: PricingGroup[] }) {
  return (
    <div className="space-y-14">
      {groups.map((group) => {
        const brand = CLUSTER_BRAND[group.id as Cluster];
        const accent = CLUSTER_ACCENT[group.id as Cluster];

        return (
          <section key={group.id}>
            {/* Section header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {group.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {group.intro}
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <th className="px-8 py-5 text-left text-base font-semibold text-slate-900">
                      Dịch vụ
                    </th>
                    <th className="px-8 py-5 text-left text-base font-semibold text-slate-900">
                      Giá
                    </th>
                    <th className="px-8 py-5 text-left text-base font-semibold text-slate-900">
                      Bao gồm
                    </th>
                    <th className="px-8 py-5 text-right text-base font-semibold text-slate-900">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.packages.map((pkg, idx) => {
                    const hasTuPrefix = pkg.priceLabel.startsWith("Từ ");
                    const priceDisplay = hasTuPrefix
                      ? pkg.priceLabel.slice(3)
                      : pkg.priceLabel;
                    const coreFeatures = pkg.features.slice(0, 2);

                    return (
                      <tr
                        key={pkg.id}
                        className={idx !== group.packages.length - 1 ? "border-b border-slate-100" : ""}
                      >
                        {/* Name */}
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            {brand && (
                              <span
                                className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${brand.badge}`}
                              >
                                {brand.icon}
                              </span>
                            )}
                            <div>
                              <p className="text-base font-semibold text-slate-900">
                                {pkg.name}
                              </p>
                              {pkg.tagline && (
                                <p className="mt-1 text-sm text-slate-500">
                                  {pkg.tagline}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="px-8 py-6 whitespace-nowrap">
                          <div>
                            <p className="text-2xl font-bold text-slate-900">
                              {priceDisplay}
                            </p>
                            {pkg.priceUnit && (
                              <p className="mt-1 text-sm text-slate-400">
                                {pkg.priceUnit}
                              </p>
                            )}
                          </div>
                        </td>

                        {/* Core benefits */}
                        <td className="px-8 py-6">
                          <ul className="space-y-2">
                            {coreFeatures.map((f) => (
                              <li
                                key={f}
                                className="flex items-start gap-2.5 text-sm text-slate-600"
                              >
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r"
                                  style={{backgroundImage: `linear-gradient(to right, ${
                                    group.id === "website" ? "rgb(37, 99, 235)" :
                                    group.id === "naver" ? "rgb(3, 207, 93)" :
                                    group.id === "maps" ? "rgb(59, 130, 246)" :
                                    "rgb(24, 119, 242)"
                                  }, ${
                                    group.id === "website" ? "rgb(99, 102, 241)" :
                                    group.id === "naver" ? "rgb(16, 185, 129)" :
                                    group.id === "maps" ? "rgb(34, 197, 94)" :
                                    "rgb(96, 165, 250)"
                                  })`}}
                                />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </td>

                        {/* CTA */}
                        <td className="px-8 py-6 text-right">
                          <Button
                            href={pkg.ctaHref}
                            variant="secondary"
                            className="whitespace-nowrap text-sm"
                          >
                            {pkg.ctaLabel}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}
