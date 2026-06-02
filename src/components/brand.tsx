import Link from "next/link";

const logoMarkSrc = "/brand/digitalparents-logo-mark.png";

type BrandMarkSvgProps = {
  className?: string;
  size?: number;
};

export function BrandMarkSvg({ className, size = 36 }: BrandMarkSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 3L30 9V18C30 25.2 24.9 31.2 18 33C11.1 31.2 6 25.2 6 18V9L18 3Z"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M18 11L24 14V18C24 22 21.6 25.2 18 26.4C14.4 25.2 12 22 12 18V14L18 11Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function BrandMark({
  size = 40,
  className
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-visible rounded-2xl border border-paper-line bg-white/80 p-1 shadow-soft ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img
        src={logoMarkSrc}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain"
        draggable={false}
      />
    </span>
  );
}

export function BrandLogo({
  className,
  href = "/"
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="digitalparents.xyz"
      className={`group inline-flex items-center gap-2.5 no-underline ${className ?? ""}`}
      style={{ textDecoration: "none" }}
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-paper-line bg-white/80 p-1 shadow-soft transition group-hover:border-brand-200 group-hover:bg-white">
        <img
          src={logoMarkSrc}
          alt=""
          width={40}
          height={40}
          className="h-full w-full object-contain"
          draggable={false}
        />
      </span>
      <span
        className="font-display text-[20px] font-semibold leading-none tracking-normal text-brand-700"
      >
        digitalparents<span className="text-accent-500">.xyz</span>
      </span>
    </Link>
  );
}
