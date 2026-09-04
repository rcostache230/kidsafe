import type { Entry } from "@/data/entries";
import type { Locale } from "@/lib/locale";

const labels = {
  en: {
    heading: "Sources and availability",
    checked: "Sources checked",
    method: "Checked against published guidance. Settings have not been tested in a child account; menus and availability can vary.",
    scope: "Availability"
  },
  ro: {
    heading: "Surse și disponibilitate",
    checked: "Surse verificate",
    method: "Verificat pe baza ghidurilor publicate. Setările nu au fost testate într-un cont de copil; meniurile și disponibilitatea pot varia.",
    scope: "Disponibilitate"
  }
} as const;

export function EntryReviewDate({
  review,
  locale
}: {
  review: NonNullable<Entry["editorialReview"]>;
  locale: Locale;
}) {
  const date = new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${review.checkedAt}T00:00:00Z`));

  return (
    <a href="#guide-sources" className="text-sm text-brand-700 underline underline-offset-4">
      {labels[locale].checked}: <time dateTime={review.checkedAt}>{date}</time>
    </a>
  );
}

export function EntrySources({
  review,
  locale
}: {
  review: NonNullable<Entry["editorialReview"]>;
  locale: Locale;
}) {
  const copy = labels[locale];

  return (
    <section id="guide-sources" aria-labelledby="guide-sources-title" className="card scroll-mt-24 space-y-4 p-6">
      <h2 id="guide-sources-title" className="font-display text-2xl font-semibold text-paper-ink">
        {copy.heading}
      </h2>
      <p className="text-sm leading-6 text-paper-ink/80">{copy.method}</p>
      <p className="text-sm leading-6 text-paper-ink/80">
        <span className="font-semibold">{copy.scope}: </span>{review.availability}
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
        {review.sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} className="break-words text-brand-700 underline underline-offset-4">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
