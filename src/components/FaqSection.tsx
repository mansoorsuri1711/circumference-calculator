type FaqItem = { question: string; answer: string };

export default function FaqSection({
  id = "faq",
  title = "Frequently asked questions",
  items,
  faqs,
  includeSchema = true,
}: {
  id?: string;
  title?: string;
  items?: FaqItem[];
  /** Alias used by some pages */
  faqs?: FaqItem[];
  /** Set false when the page already embeds FAQPage JSON-LD in a parent graph. */
  includeSchema?: boolean;
}) {
  const list = items ?? faqs ?? [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id={id} className="mt-16">
      <h2 className="mb-6 font-display text-2xl font-bold text-ink md:text-3xl">{title}</h2>
      <div className="space-y-3">
        {list.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-ink/10 bg-white/80 open:border-violet/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink">
              <span>{item.question}</span>
              <span className="text-xl leading-none text-violet transition group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="px-5 pb-4 leading-relaxed text-ink/70">{item.answer}</p>
          </details>
        ))}
      </div>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </section>
  );
}
