/**
 * Hand-drawn-style botanical sprig — the site's recurring signature mark.
 * Used as a section divider, watermark, and decorative accent throughout.
 */
export default function Sprig({ className = 'w-10 h-10', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 58C32 58 30 40 32 26C34 12 32 4 32 4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M32 22C32 22 24 18 20 10C24 9 32 10 32 22Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M32 22C32 22 40 18 44 10C40 9 32 10 32 22Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M32 34C32 34 22 31 17 24C21 22 32 22 32 34Z"
        fill={color}
        opacity="0.7"
      />
      <path
        d="M32 34C32 34 42 31 47 24C43 22 32 22 32 34Z"
        fill={color}
        opacity="0.7"
      />
      <path
        d="M32 46C32 46 24 44 20 38C24 36 32 37 32 46Z"
        fill={color}
        opacity="0.55"
      />
      <path
        d="M32 46C32 46 40 44 44 38C40 36 32 37 32 46Z"
        fill={color}
        opacity="0.55"
      />
    </svg>
  );
}
