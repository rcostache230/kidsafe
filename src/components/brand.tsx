import Link from "next/link";

export function BrandLogo({
  className,
  href = "/"
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link href={href} aria-label="Digital Parents" className={`brand-lockup ${className ?? ""}`}>
      <img
        src="/brand/digitalparents-wordmark.png"
        alt=""
        width={1120}
        height={107}
        className="brand-logo-image"
        draggable={false}
      />
    </Link>
  );
}
