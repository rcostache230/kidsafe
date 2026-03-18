import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 dark:text-white">{item.label}</span>
            )}
            {index < items.length - 1 ? <span aria-hidden="true">→</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
