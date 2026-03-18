type BrandMarkSvgProps = {
  className?: string;
  size?: number;
  color?: string;
};

export function BrandMarkSvg({
  className = "",
  size = 32,
  color = "currentColor"
}: BrandMarkSvgProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      <rect
        x="4.5"
        y="4.5"
        width="23"
        height="23"
        rx="6.75"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M11.5 9V23M11.5 9H16.1C20.1 9 23 11.8 23 16C23 20.2 20.1 23 16.1 23H11.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20.75" cy="11.25" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`brand-logo inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#17304b] dark:text-slate-100 ${className}`}
    >
      <BrandMarkSvg className="h-8 w-8" />
    </span>
  );
}

export function BrandLogo({
  className = "",
  compact = true
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`brand-logo inline-flex items-center gap-3 ${className}`}>
      <BrandMark className="h-10 w-10" />
      <span
        className={`font-semibold tracking-tight text-slate-950 dark:text-white ${
          compact ? "hidden text-base sm:inline" : "text-base"
        }`}
      >
        Digital Parents
      </span>
    </span>
  );
}
