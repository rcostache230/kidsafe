export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-10 dark:border-slate-800/80">
      <div className="page-shell space-y-4">
        <p className="text-[13px] text-slate-600 dark:text-slate-300">
          Settings matter most when they are paired with routines, visible screens,
          and regular conversations.
        </p>
        <div>
          <a
            className="inline-flex items-center justify-center rounded-lg bg-slate-800 px-[18px] py-[10px] text-[13px] font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-slate-300"
            href="https://www.linkedin.com/in/rcostache/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Passionate about kids&apos; digital wellbeing? Let&apos;s connect →
          </a>
        </div>
      </div>
    </footer>
  );
}
