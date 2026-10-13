type DoodleProps = { className?: string }

export function LaptopDoodle({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 110"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="28"
        y="18"
        width="104"
        height="68"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="38" y="28" width="84" height="48" rx="2" stroke="currentColor" />
      <path
        d="M68 48h8M80 42v16M88 48h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 90h124c4 0 8 4 8 8H10c0-4 4-8 8-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function ChecklistDoodle({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 130"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="22"
        y="18"
        width="76"
        height="96"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="40" cy="42" r="6" stroke="currentColor" />
      <path
        d="M37 42l2.5 2.5 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M54 42h28" stroke="currentColor" strokeLinecap="round" />
      <circle cx="40" cy="64" r="6" stroke="currentColor" />
      <path d="M54 64h28" stroke="currentColor" strokeLinecap="round" />
      <circle cx="40" cy="86" r="6" stroke="currentColor" />
      <path d="M54 86h28" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M86 14l8 4 10-18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PlantDoodle({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 110"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 100c0-28 2-48 2-70"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M62 48c-18-4-28-18-26-32 16 2 28 14 26 32Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M62 40c16-8 32-6 38 8-18 6-32 4-38-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M62 62c-20 2-32 16-28 30 18-4 28-16 28-30Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M62 58c14 6 28 4 34-8-16-8-28-4-34 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
