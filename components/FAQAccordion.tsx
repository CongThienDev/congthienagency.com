export function FAQAccordion({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group p-5 sm:p-6">
          <summary className="flex items-start justify-between gap-4 text-base font-medium text-ink">
            <span>{f.q}</span>
            <span
              aria-hidden
              className="faq-icon mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-blue-600 transition-transform duration-200"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
