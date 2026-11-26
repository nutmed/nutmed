// Folha "de vidro" em 3D, inspirada nos símbolos de % em vidro dos posts da NutMed.
// Decorativa (aria-hidden); flutua devagar com CSS. Cada instância precisa de um id próprio para o degradê.

// shape="cross" e shape="heart" são as versões de saúde (cruz e coração com batimento) para LPs clínicas.

export default function GlassLeaf({ id, className = "", shape = "leaf" }: { id: string; className?: string; shape?: "leaf" | "cross" | "heart" }) {
  return (
    <svg className={`glass-leaf ${className}`} viewBox="0 0 120 160" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9c3f2" stopOpacity=".95" />
          <stop offset=".55" stopColor="#8d7fe0" stopOpacity=".75" />
          <stop offset="1" stopColor="#5a3fc2" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset="1" stopColor="#fff" stopOpacity=".15" />
        </linearGradient>
      </defs>
      {shape === "cross" && (
        <>
          <path
            d="M44 30h32a8 8 0 0 1 8 8v26h26a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8H84v26a8 8 0 0 1-8 8H44a8 8 0 0 1-8-8v-26H10a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h26V38a8 8 0 0 1 8-8Z"
            fill={`url(#${id}-f)`}
            stroke={`url(#${id}-s)`}
            strokeWidth="2.5"
          />
          <ellipse cx="52" cy="52" rx="6" ry="14" fill="#fff" opacity=".35" transform="rotate(20 52 52)" />
        </>
      )}
      {shape === "heart" && (
        <>
          <path
            d="M60 140C20 110 6 85 6 62 6 40 22 28 40 28c10 0 17 6 20 14 3-8 10-14 20-14 18 0 34 12 34 34 0 23-14 48-54 78Z"
            fill={`url(#${id}-f)`}
            stroke={`url(#${id}-s)`}
            strokeWidth="2.5"
          />
          <path d="M16 80h24l8-16 10 36 10-44 8 24h28" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="32" cy="50" rx="6" ry="12" fill="#fff" opacity=".35" transform="rotate(-30 32 50)" />
        </>
      )}
      {shape === "leaf" && (
        <>
          <path d="M60 6C104 30 118 82 92 124c-10 16-22 26-32 30C40 146 6 118 6 76 6 44 26 20 60 6Z" fill={`url(#${id}-f)`} stroke={`url(#${id}-s)`} strokeWidth="2.5" />
          <path d="M60 150C56 110 54 64 60 14" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M58 112c-12-6-22-16-28-30M58 80c12-6 20-16 26-28M57 54c-9-5-15-12-19-21" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="36" cy="50" rx="8" ry="18" fill="#fff" opacity=".35" transform="rotate(28 36 50)" />
        </>
      )}
    </svg>
  );
}
