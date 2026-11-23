// Ramos de ervas em traço fino, usados como elementos que "vazam" das margens.
// Puramente decorativos (aria-hidden) e animados de leve com CSS (balanço).

type Props = { className?: string; variant?: "sprig" | "leaf" | "rosemary" };

export default function Botanical({ className = "", variant = "sprig" }: Props) {
  if (variant === "leaf") {
    return (
      <svg className={`botanical ${className}`} viewBox="0 0 200 260" fill="none" aria-hidden="true">
        <path d="M100 250C96 190 88 120 104 12" />
        <path d="M104 12C164 52 186 128 150 188c-18 30-40 48-50 62C82 220 30 180 30 120 30 70 64 34 104 12Z" />
        <path d="M100 200c18-14 34-30 44-52M98 160c-14-10-30-26-40-46M101 120c14-12 26-26 34-44M102 84c-10-8-20-20-26-34" />
      </svg>
    );
  }
  if (variant === "rosemary") {
    return (
      <svg className={`botanical ${className}`} viewBox="0 0 120 320" fill="none" aria-hidden="true">
        <path d="M60 315C58 230 62 120 66 8" />
        {Array.from({ length: 12 }).map((_, i) => {
          const y = 290 - i * 23;
          return (
            <g key={i}>
              <path d={`M${61 + i * 0.4} ${y}c-14-6-26-16-34-30`} />
              <path d={`M${61 + i * 0.4} ${y - 10}c14-6 26-16 34-30`} />
            </g>
          );
        })}
      </svg>
    );
  }
  return (
    <svg className={`botanical ${className}`} viewBox="0 0 260 340" fill="none" aria-hidden="true">
      <path d="M40 330C70 250 120 170 230 20" />
      <path d="M78 262c-30-6-52-26-60-58 30 2 52 22 60 58Z" />
      <path d="M78 262c8-30 30-50 62-54-4 30-26 50-62 54Z" />
      <path d="M118 196c-32-2-56-22-66-54 32 2 56 22 66 54Z" />
      <path d="M118 196c4-32 24-56 56-64 0 32-22 56-56 64Z" />
      <path d="M160 136c-30-4-50-24-58-54 30 4 50 24 58 54Z" />
      <path d="M160 136c6-28 26-48 56-54-4 28-24 48-56 54Z" />
      <path d="M200 76c-22-4-36-20-40-42 22 4 36 20 40 42Z" />
      <circle cx="232" cy="18" r="6" />
      <circle cx="214" cy="40" r="4" />
    </svg>
  );
}
