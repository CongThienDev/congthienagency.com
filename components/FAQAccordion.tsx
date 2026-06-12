export function FAQAccordion({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="card-gradient-border divide-y divide-line overflow-hidden rounded-card shadow-soft">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex items-center justify-between gap-4 px-5 py-5 text-[15px] font-semibold text-ink transition-colors hover:text-blue-700 sm:px-7">
            <span>{f.q}</span>
            <span
              aria-hidden
              className="faq-icon grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-base font-medium text-blue-600 ring-1 ring-blue-100 transition-transform duration-300"
            >
              +
            </span>
          </summary>
          <div className="faq-body">
            <div>
              <p className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-7 sm:text-[15px]">
                {f.a}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
