// Folha "de vidro" em 3D, inspirada nos símbolos de % em vidro dos posts da NutMed.
// Decorativa (aria-hidden); flutua devagar com CSS. Cada instância precisa de um id próprio para o degradê.

export default function GlassLeaf({ id, className = "" }: { id: string; className?: string }) {
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
      <path d="M60 6C104 30 118 82 92 124c-10 16-22 26-32 30C40 146 6 118 6 76 6 44 26 20 60 6Z" fill={`url(#${id}-f)`} stroke={`url(#${id}-s)`} strokeWidth="2.5" />
      <path d="M60 150C56 110 54 64 60 14" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M58 112c-12-6-22-16-28-30M58 80c12-6 20-16 26-28M57 54c-9-5-15-12-19-21" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="36" cy="50" rx="8" ry="18" fill="#fff" opacity=".35" transform="rotate(28 36 50)" />
    </svg>
  );
}
