export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-10 dark:border-slate-800/80">
      <div className="page-shell space-y-4 text-sm text-slate-600 dark:text-slate-300">
        <p>
          Settings matter most when they are paired with routines, visible screens,
          and regular conversations.
        </p>
        <p>
          Passionate about kids&apos; digital wellbeing?{" "}
          <a
            className="font-medium text-sky-700 hover:underline dark:text-sky-400"
            href="https://www.linkedin.com/in/rcostache/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch →
          </a>
        </p>
      </div>
    </footer>
  );
}
