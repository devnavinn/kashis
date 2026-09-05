export function PaisleyMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 20c-30 0-45 22-45 46 0 30 24 40 24 62 0 14-10 20-22 20-16 0-28-12-28-12s6 32 34 32c26 0 42-20 42-44 0-28-24-38-24-60 0-16 10-26 22-26 14 0 24 10 24 24 0 10-6 16-14 16-6 0-10-4-10-10 0-4 2-6 4-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="100" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="63" cy="168" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M100 34c-22 0-33 16-33 34 0 22 18 30 18 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function MandalaMotif({ className }: { className?: string }) {
  const petals = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="1.5" />
      {petals.map((_, i) => {
        const angle = (360 / petals.length) * i;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path
              d="M100 30c10 14 10 26 0 40-10-14-10-26 0-40Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle cx="100" cy="24" r="2.5" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

export function VineDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 40"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 20c20-14 40 14 60 0s40-14 60 0 40 14 60 0 40-14 60 0 40 14 60 0 40-14 60 0 40 14 60 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
