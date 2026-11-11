// Little crafty bits for the board — all original SVG drawings.
// Swap any of these for your own Figma exports (Export → SVG).

export function GinghamBow({ size = 120, color = "#3f6b4f", style, className = "" }) {
  const id = `g${color.replace("#", "")}`;
  return (
    <svg viewBox="0 0 120 90" className={`decor ${className}`} style={{ width: `calc(var(--u) * ${size})`, ...style }} aria-hidden="true">
      <defs>
        <pattern id={id} width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#f6f1e7" />
          <rect width="4" height="8" fill={color} opacity=".45" />
          <rect width="8" height="4" fill={color} opacity=".45" />
        </pattern>
      </defs>
      <path d="M58 40 C40 18 12 10 8 26 C4 42 30 52 58 44Z" fill={`url(#${id})`} stroke={color} strokeWidth="1.2" />
      <path d="M62 40 C80 18 108 10 112 26 C116 42 90 52 62 44Z" fill={`url(#${id})`} stroke={color} strokeWidth="1.2" />
      <path d="M56 46 L38 86 L48 80 L54 88 L60 48Z" fill={`url(#${id})`} stroke={color} strokeWidth="1.2" />
      <path d="M64 46 L82 86 L72 80 L66 88 L60 48Z" fill={`url(#${id})`} stroke={color} strokeWidth="1.2" />
      <rect x="51" y="34" width="18" height="16" rx="6" fill={`url(#${id})`} stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function SatinBow({ size = 110, color = "#8e1b2c", style, className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={`decor ${className}`} style={{ width: `calc(var(--u) * ${size})`, ...style }} aria-hidden="true">
      <defs>
        <linearGradient id={`sb${color.slice(1)}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset=".45" stopColor="#fff" stopOpacity=".35" />
          <stop offset=".55" stopColor={color} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
      <g fill={`url(#sb${color.slice(1)})`} stroke={color} strokeWidth="1">
        <path d="M58 44 C44 20 14 14 12 32 C10 50 38 54 58 48Z" />
        <path d="M62 44 C76 20 106 14 108 32 C110 50 82 54 62 48Z" />
        <path d="M57 50 C50 70 40 92 30 116 L40 110 L46 118 C52 96 58 72 61 52Z" />
        <path d="M63 50 C70 70 80 92 90 116 L80 110 L74 118 C68 96 62 72 59 52Z" />
      </g>
      <ellipse cx="60" cy="46" rx="9" ry="8" fill={color} />
    </svg>
  );
}

export function Pearl({ size = 22, style, className = "" }) {
  return (
    <span
      className={`pearl ${className}`}
      style={{ width: `calc(var(--u) * ${size})`, height: `calc(var(--u) * ${size})`, ...style }}
      aria-hidden="true"
    />
  );
}

export function Teddy({ size = 70, style, className = "", tip }) {
  return (
    <svg viewBox="0 0 80 80" className={`decor ${className}`} style={{ width: `calc(var(--u) * ${size})`, ...style }} aria-hidden="true" data-tip={tip}>
      <g stroke="#5a3a24" strokeWidth="1.4">
        <circle cx="20" cy="18" r="9" fill="#a8744c" />
        <circle cx="60" cy="18" r="9" fill="#a8744c" />
        <circle cx="20" cy="18" r="4" fill="#d9ab84" stroke="none" />
        <circle cx="60" cy="18" r="4" fill="#d9ab84" stroke="none" />
        <ellipse cx="40" cy="62" rx="20" ry="16" fill="#a8744c" />
        <circle cx="40" cy="34" r="20" fill="#b9825a" />
        <ellipse cx="40" cy="41" rx="9" ry="7" fill="#e6c3a0" />
      </g>
      <circle cx="33" cy="31" r="2.3" fill="#2b1a10" />
      <circle cx="47" cy="31" r="2.3" fill="#2b1a10" />
      <ellipse cx="40" cy="38" rx="3" ry="2.2" fill="#2b1a10" />
      <path d="M37 43 Q40 46 43 43" stroke="#2b1a10" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="38" r="3" fill="#f2a1b3" opacity=".7" />
      <circle cx="52" cy="38" r="3" fill="#f2a1b3" opacity=".7" />
      <path d="M40 52 l-6 -4 l0 8z M40 52 l6 -4 l0 8z" fill="#6f9fcf" />
    </svg>
  );
}

export function FeltHeart({ size = 50, color = "#efe7da", style, className = "" }) {
  return (
    <svg viewBox="0 0 40 36" className={`decor felt ${className}`} style={{ width: `calc(var(--u) * ${size})`, ...style }} aria-hidden="true">
      <path
        d="M20 34C9 26 2 19 2 11 2 6 6 2 11 2c4 0 7 2 9 6 2-4 5-6 9-6 5 0 9 4 9 9 0 8-7 15-18 23z"
        fill={color}
        stroke="#d8cdbb"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

export function Clothespin({ style, className = "" }) {
  return (
    <svg viewBox="0 0 20 60" className={`decor clothespin ${className}`} style={style} aria-hidden="true">
      <rect x="2" y="0" width="7.5" height="60" rx="3" fill="#d8b48a" stroke="#a9845c" />
      <rect x="10.5" y="0" width="7.5" height="60" rx="3" fill="#cfa77b" stroke="#a9845c" />
      <rect x="1" y="26" width="18" height="6" rx="2" fill="#9aa0a6" />
    </svg>
  );
}

export function Stamp({ label = "♡", style, className = "" }) {
  return (
    <span className={`stamp ${className}`} style={style} aria-hidden="true">
      <span>{label}</span>
    </span>
  );
}

export function Sparkle({ size = 30, color = "#6f9fcf", style, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`decor ${className}`} style={{ width: `calc(var(--u) * ${size})`, ...style }} aria-hidden="true">
      <path
        d="M12 2c.6 4 1.8 6.6 3.4 8.1 1.6 1.5 4 2 6.6 1.9-3.4.6-5.5 1.6-6.8 3.2C14 16.8 13 19.2 12 22c-.8-3-1.8-5.2-3.2-6.8C7.4 13.6 5.4 12.6 2 12c2.8-.2 5.1-.8 6.7-2.3C10.3 8.2 11.3 5.8 12 2z"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
