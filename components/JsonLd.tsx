export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // schema content is internally generated, not user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
