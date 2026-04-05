import Link from "next/link";

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
  size = 32,
  className
}: {
  size?: number;
  className?: string;
}) {
  return (
    <BrandMarkSvg
      size={size}
      className={className ?? "text-teal-700 dark:text-teal-300"}
    />
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
      className={`flex items-center gap-2.5 no-underline ${className ?? ""}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-teal-700 dark:text-teal-300"
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
      <span className="text-[17px] font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        Digital Parents
      </span>
    </Link>
  );
}
