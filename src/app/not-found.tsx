import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/60">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Page not found
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
          That guide is not available.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          Head back to the directory to choose a device, operating system, or app
          page.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-900 hover:border-slate-400 dark:border-slate-700 dark:text-white dark:hover:border-slate-500"
        >
          Return to the directory
        </Link>
      </div>
    </div>
  );
}
