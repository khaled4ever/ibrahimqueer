import type { SVGProps } from 'react';

export const AudiLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.8 12a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0zM16.8 12a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0z" />
      <path d="M20.4 12a3.6 3.6 0 1 1-7.2 0" />
      <path d="M13.2 12a3.6 3.6 0 1 1-7.2 0" />
    </g>
  </svg>
);

export const BmwLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      fill="currentColor"
      d="M12 3a9 9 0 0 0-9 9h9V3zM12 21a9 9 0 0 0 9-9h-9v9z"
    />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

export const MercedesLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 3v9m0 0l7.794 4.5M12 12L4.206 16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PorscheLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10h18M3 14h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 3v18H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M17 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const VwLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5 8l2 8h2.5l2-8M13 8l-2 8h2.5l2-8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
