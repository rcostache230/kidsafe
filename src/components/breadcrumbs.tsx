import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-paper-ink/70">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-paper-ink/70 no-underline hover:text-brand-700"
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-paper-ink">{item.label}</span>
            )}
            {index < items.length - 1 ? (
              <span aria-hidden="true" className="text-paper-ink/40">
                ›
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
