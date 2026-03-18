type IconProps = {
  className?: string;
};

export function IconDevices({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.25"
        y="3.25"
        width="13.5"
        height="13.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 14.25H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconOS({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="3.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 3V5M10 15V17M17 10H15M5 10H3M14.95 5.05L13.6 6.4M6.4 13.6L5.05 14.95M14.95 14.95L13.6 13.6M6.4 6.4L5.05 5.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconApps({ className = "" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="4"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="12"
        y="4"
        width="4"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="4"
        y="12"
        width="4"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="12"
        y="12"
        width="4"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
