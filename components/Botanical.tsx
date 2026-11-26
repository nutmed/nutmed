// Ramos de ervas em traço fino, usados como elementos que "vazam" das margens.
// Puramente decorativos (aria-hidden) e animados de leve com CSS (balanço).
// Com theme="clinical" (LPs de clínica/hospital) cada ramo vira um objeto de saúde no mesmo traço:
// sprig → estetoscópio, leaf → coração com batimento, rosemary → soro.

// Com theme="sport" (Nutrição Esportiva): sprig → cronômetro, leaf → tênis de corrida, rosemary → squeeze.
// Com theme="maternal" (Nutrição Materno-Infantil): sprig → mamadeira, leaf → chupeta, rosemary → chocalho.
// Com theme="onco" (Nutrição em Oncologia): sprig → laço da conscientização com um broto, leaf → mãos acolhendo
// um coração, rosemary → hélice de DNA.

type Props = { className?: string; variant?: "sprig" | "leaf" | "rosemary"; theme?: "herbs" | "clinical" | "sport" | "maternal" | "onco" };

export default function Botanical({ className = "", variant = "sprig", theme = "herbs" }: Props) {
  if (theme === "onco") {
    if (variant === "leaf") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 200 260" fill="none" aria-hidden="true">
          <path d="M100 136c-30-20-44-38-44-56a22 22 0 0 1 44-8 22 22 0 0 1 44 8c0 18-14 36-44 56Z" />
          <path d="M18 128c4 50 38 86 82 92M182 128c-4 50-38 86-82 92" />
          <path d="M18 128c0-10 12-14 18-4l18 34M182 128c0-10-12-14-18-4l-18 34" />
          <path d="M46 206l-14 46M154 206l14 46" />
          <path d="M100 36v-20M74 44 64 28M126 44l10-16" />
        </svg>
      );
    }
    if (variant === "rosemary") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 120 320" fill="none" aria-hidden="true">
          <path d="M24 10C24 40 96 40 96 70S24 100 24 130s72 30 72 60-72 30-72 60 72 30 72 60" />
          <path d="M96 10C96 40 24 40 24 70s72 30 72 60-72 30-72 60 72 30 72 60-72 30-72 60" />
          <path d="M34 70h52M44 56h32M44 84h32M34 130h52M44 116h32M44 144h32M34 190h52M44 176h32M44 204h32M34 250h52M44 236h32M44 264h32" />
        </svg>
      );
    }
    return (
      <svg className={`botanical ${className}`} viewBox="0 0 260 340" fill="none" aria-hidden="true">
        <path d="M130 196c-36-40-52-68-52-94a52 52 0 0 1 104 0c0 26-16 54-52 94Z" />
        <path d="M130 170c-22-26-30-44-30-62a30 30 0 0 1 60 0c0 18-8 36-30 62Z" />
        <path d="M156 156 64 318l22-8 10 24 86-150M104 156l92 162-22-8-10 24-86-150" />
        <path d="M130 50V22M130 34c-10-10-24-12-32-8 6 10 20 14 32 8ZM130 28c8-12 22-16 32-12-6 12-20 16-32 12Z" />
      </svg>
    );
  }
  if (theme === "maternal") {
    if (variant === "leaf") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 200 260" fill="none" aria-hidden="true">
          <path d="M100 30c-22 0-36 18-36 40 0 16 8 30 22 38v10h28v-10c14-8 22-22 22-38 0-22-14-40-36-40Z" />
          <path d="M40 118h120c10 0 16 8 14 18l-6 26c-2 8-10 14-18 14H50c-8 0-16-6-18-14l-6-26c-2-10 4-18 14-18Z" />
          <circle cx="100" cy="196" r="38" />
          <circle cx="100" cy="196" r="20" />
          <path d="M70 147h60" />
        </svg>
      );
    }
    if (variant === "rosemary") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 120 320" fill="none" aria-hidden="true">
          <circle cx="60" cy="58" r="46" />
          <circle cx="60" cy="58" r="30" />
          <circle cx="44" cy="44" r="4" />
          <circle cx="76" cy="50" r="4" />
          <circle cx="58" cy="76" r="4" />
          <path d="M52 104v8h16v-8" />
          <rect x="48" y="112" width="24" height="18" rx="8" />
          <path d="M54 130v150M66 130v150" />
          <rect x="40" y="280" width="40" height="30" rx="14" />
        </svg>
      );
    }
    return (
      <svg className={`botanical ${className}`} viewBox="0 0 260 340" fill="none" aria-hidden="true">
        <path d="M130 8c-12 0-18 10-18 22v22h36V30c0-12-6-22-18-22Z" />
        <rect x="92" y="52" width="76" height="26" rx="10" />
        <path d="M98 78h64c10 0 18 8 18 18v204c0 16-12 28-28 28h-44c-16 0-28-12-28-28V96c0-10 8-18 18-18Z" />
        <path d="M80 140h20M80 180h28M80 220h20M80 260h28" />
        <path d="M120 236c18 0 32-10 40-24" />
      </svg>
    );
  }
  if (theme === "sport") {
    if (variant === "leaf") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 200 260" fill="none" aria-hidden="true">
          <path d="M24 196h146c14 0 22-10 18-22l-5-12c-4-9-13-14-25-16l-38-8-24-32c-5-6-13-8-20-4l-30 17c-12 7-20 19-22 33Z" />
          <path d="M22 180h166M60 196v-16M100 196v-16M140 196v-16" />
          <path d="M92 118l14 9M101 107l14 9M110 97l13 9" />
          <path d="M8 114h40M0 136h30M14 92h28" />
        </svg>
      );
    }
    if (variant === "rosemary") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 120 320" fill="none" aria-hidden="true">
          <path d="M66 4c-4 10-6 18-6 28" />
          <rect x="42" y="32" width="36" height="22" rx="6" />
          <path d="M32 62h56c7 0 12 5 12 12v214c0 12-9 22-21 22H41c-12 0-21-10-21-22V74c0-7 5-12 12-12Z" />
          <path d="M20 132c28 10 52 10 80 0M20 214c28 10 52 10 80 0" />
          <path d="M60 160c-8 12-12 20-12 26a12 12 0 0 0 24 0c0-6-4-14-12-26Z" />
        </svg>
      );
    }
    return (
      <svg className={`botanical ${className}`} viewBox="0 0 260 340" fill="none" aria-hidden="true">
        <circle cx="130" cy="200" r="100" />
        <circle cx="130" cy="200" r="82" />
        <rect x="112" y="62" width="36" height="22" rx="6" />
        <path d="M130 84v16M204 118l16-16M212 94l16 16" />
        <path d="M130 200v-62M130 200l40 26" />
        <path d="M130 126v10M130 264v10M56 200h10M194 200h10" />
        <circle cx="130" cy="200" r="6" />
      </svg>
    );
  }
  if (theme === "clinical") {
    if (variant === "leaf") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 200 260" fill="none" aria-hidden="true">
          <path d="M100 220C40 170 20 130 20 95 20 60 45 40 72 40c16 0 26 10 28 20 2-10 12-20 28-20 27 0 52 20 52 55 0 35-20 75-80 125Z" />
          <path d="M8 132h52l14-30 18 62 18-86 14 54h68" />
        </svg>
      );
    }
    if (variant === "rosemary") {
      return (
        <svg className={`botanical ${className}`} viewBox="0 0 120 320" fill="none" aria-hidden="true">
          <path d="M60 4v10" />
          <rect x="28" y="14" width="64" height="92" rx="16" />
          <path d="M40 46h40M40 64h28" />
          <path d="M60 106v20" />
          <rect x="50" y="126" width="20" height="36" rx="6" />
          <path d="M60 162c0 50-36 80-8 150" />
        </svg>
      );
    }
    return (
      <svg className={`botanical ${className}`} viewBox="0 0 260 340" fill="none" aria-hidden="true">
        <circle cx="70" cy="18" r="7" />
        <circle cx="150" cy="18" r="7" />
        <path d="M70 25c-8 60 0 110 40 128M150 25c8 60 0 110-40 128" />
        <path d="M110 153c0 70 40 90 80 112" />
        <circle cx="200" cy="292" r="34" />
        <circle cx="200" cy="292" r="16" />
      </svg>
    );
  }
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
