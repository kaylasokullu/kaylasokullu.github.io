// Tiny charm icons scattered on the board — all original drawings.
// Each takes `size` (board units) + style/className, like the other decor.
// To swap one for your own Figma drawing: Export → SVG and paste the shapes in.

const INK = "#3a4452";
const wrap = (size, style) => ({ width: `calc(var(--u) * ${size})`, ...style });

/* grey cat, sitting, tail curled round */
export function GreyCat({ size = 64, style, className = "", tip }) {
  return (
    <svg viewBox="0 0 80 80" className={`decor charm pet ${className}`} style={wrap(size, style)} aria-hidden="true" data-tip={tip}>
      <g stroke={INK} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        <g className="wag">
          <path d="M58 70c10 0 16-6 13-13-2-4-7-4-8 0" fill="none" stroke="#8d96a1" strokeWidth="6" />
          <path d="M58 70c10 0 16-6 13-13-2-4-7-4-8 0" fill="none" />
        </g>
        <path d="M22 72c-4-16 2-30 18-30s22 14 18 30z" fill="#a9b1bb" />
        <path d="M23 26l-3-15 12 8M57 26l3-15-12 8" fill="#a9b1bb" />
        <ellipse cx="40" cy="31" rx="19" ry="16" fill="#a9b1bb" />
        <path d="M24 16l2 7 5-3zM56 16l-2 7-5-3z" fill="#f3c7cf" stroke="none" />
        <path d="M34 56c2 6 10 6 12 0" fill="#d8dde3" stroke="none" />
      </g>
      <path d="M31 30q2-2 4 0M45 30q2-2 4 0" stroke={INK} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M38.5 35h3l-1.5 2z" fill="#e9a2b0" />
      <path d="M40 37v1.5M40 38.5q-2 2-4 0M40 38.5q2 2 4 0" stroke={INK} strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <path d="M22 35h9M22 38l9-1M58 35h-9M58 38l-9-1" stroke="#ffffff" strokeWidth=".9" />
      <path d="M29 72v-4M35 72v-4M45 72v-4M51 72v-4" stroke={INK} strokeWidth="1.2" />
    </svg>
  );
}

/* brown Portuguese water dog — curly coat, floppy ears */
export function WaterDog({ size = 70, style, className = "", tip }) {
  const curls = [];
  for (let y = 0; y < 3; y++) for (let x = 0; x < 5; x++) curls.push([22 + x * 9 + (y % 2) * 4, 50 + y * 7]);
  return (
    <svg viewBox="0 0 90 84" className={`decor charm pet ${className}`} style={wrap(size, style)} aria-hidden="true" data-tip={tip}>
      <g stroke="#3b2618" strokeWidth="1.5" strokeLinejoin="round">
        {/* body */}
        <path d="M16 74c-3-14 2-28 18-30h22c14 2 20 14 17 30z" fill="#6b4632" />
        {curls.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4.6" fill="#7a5139" stroke="#4a2f20" strokeWidth="1" />)}
        <g className="wag">
          <path d="M72 50c8-6 12-14 9-18" fill="none" stroke="#6b4632" strokeWidth="6" strokeLinecap="round" />
          <circle cx="81" cy="31" r="4" fill="#7a5139" />
        </g>
        {/* head */}
        <circle cx="38" cy="26" r="17" fill="#6b4632" />
        {[[26, 13], [33, 10], [41, 10], [48, 13], [30, 16], [44, 16], [37, 14]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4.3" fill="#7a5139" stroke="#4a2f20" strokeWidth="1" />
        ))}
        <path d="M22 20c-7 3-9 14-4 20 3 3 6 0 7-4" fill="#5a3a28" />
        <path d="M54 20c7 3 9 14 4 20-3 3-6 0-7-4" fill="#5a3a28" />
        <ellipse cx="38" cy="34" rx="9" ry="7" fill="#7a5139" />
      </g>
      <circle cx="32" cy="26" r="2.2" fill="#1f130c" />
      <circle cx="44" cy="26" r="2.2" fill="#1f130c" />
      <circle cx="32.8" cy="25.2" r=".7" fill="#fff" />
      <circle cx="44.8" cy="25.2" r=".7" fill="#fff" />
      <ellipse cx="38" cy="32" rx="3.2" ry="2.4" fill="#1f130c" />
      <path d="M38 34.5v2.5M38 37q-2.5 2-4.5 0M38 37q2.5 2 4.5 0" stroke="#1f130c" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M36 39.5q2 3 4 0" fill="#e98fa0" />
      {/* little blue collar + yellow tag */}
      <path d="M26 42q12 6 24 0" stroke="#6f9fcf" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="46.5" r="2.6" fill="#f4d77a" stroke="#c99a1e" strokeWidth=".8" />
    </svg>
  );
}

/* small ribbon bow (two loops + tails) */
export function RibbonBow({ size = 46, color = "#8fbbe3", style, className = "" }) {
  return (
    <svg viewBox="0 0 60 50" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g fill={color} stroke={INK} strokeWidth="1.3" strokeLinejoin="round">
        <path d="M30 20C22 6 6 4 5 13s14 13 25 9z" />
        <path d="M30 20C38 6 54 4 55 13s-14 13-25 9z" />
        <path d="M28 23l-9 23 6-3 3 5 4-24zM32 23l9 23-6-3-3 5-4-24z" />
        <ellipse cx="30" cy="21" rx="5" ry="4.5" />
      </g>
      <path d="M11 11q5-2 12 5M49 11q-5-2-12 5" stroke="#fff" strokeWidth="1.4" fill="none" opacity=".7" strokeLinecap="round" />
    </svg>
  );
}

/* cupcake with baby-blue frosting + cherry */
export function Cupcake({ size = 50, style, className = "" }) {
  return (
    <svg viewBox="0 0 60 64" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke={INK} strokeWidth="1.4" strokeLinejoin="round">
        <path d="M14 34h32l-4 26H18z" fill="#f4d77a" />
        <path d="M22 35l2 24M30 35v24M38 35l-2 24" stroke="#c99a1e" strokeWidth="1.1" />
        <path d="M10 35c-3-9 6-12 9-9 0-8 9-11 13-6 3-6 13-4 13 3 6-2 10 6 5 12z" fill="#bcd8f1" />
        <circle cx="31" cy="12" r="5.5" fill="#d52b1e" />
        <path d="M31 7q2-5 7-5" fill="none" />
      </g>
      <circle cx="29.5" cy="10.5" r="1.4" fill="#fff" opacity=".8" />
      {[[17, 30, "#f4d77a"], [26, 26, "#ffffff"], [38, 28, "#f4d77a"], [44, 32, "#ffffff"], [32, 31, "#6f9fcf"]].map(([x, y, c], i) => (
        <rect key={i} x={x} y={y} width="3.5" height="1.6" rx=".8" fill={c} transform={`rotate(${i * 37} ${x} ${y})`} />
      ))}
    </svg>
  );
}

/* perfume bottle — pale blue glass, gold cap, tiny bow */
export function Perfume({ size = 44, style, className = "" }) {
  return (
    <svg viewBox="0 0 50 64" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke={INK} strokeWidth="1.4" strokeLinejoin="round">
        <rect x="19" y="4" width="12" height="10" rx="3" fill="#f4d77a" />
        <rect x="21" y="13" width="8" height="6" fill="#e3c25c" />
        <path d="M8 30c0-8 6-11 17-11s17 3 17 11v22c0 6-4 9-9 9H17c-5 0-9-3-9-9z" fill="#d6e8f7" />
        <path d="M12 38h26v14c0 4-3 6-6 6H18c-3 0-6-2-6-6z" fill="#a9cdeb" stroke="none" />
      </g>
      <path d="M13 26q2-4 8-4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="15" y="40" width="20" height="9" rx="2" fill="#fff" opacity=".85" />
      <path d="M25 22c-4-4-9-3-8 0s5 2 8 0c4-4 9-3 8 0s-5 2-8 0" fill="#f4d77a" stroke="#c99a1e" strokeWidth=".9" />
    </svg>
  );
}

/* daisy */
export function Daisy({ size = 40, style, className = "" }) {
  const petals = Array.from({ length: 10 }, (_, i) => i * 36);
  return (
    <svg viewBox="0 0 50 50" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke="#9aa3ae" strokeWidth="1">
        {petals.map((a) => <ellipse key={a} cx="25" cy="12" rx="4.6" ry="10" fill="#ffffff" transform={`rotate(${a} 25 25)`} />)}
      </g>
      <circle cx="25" cy="25" r="7" fill="#f4d77a" stroke="#c99a1e" strokeWidth="1.2" />
      <circle cx="23" cy="23" r="1.3" fill="#fff" opacity=".7" />
    </svg>
  );
}

/* pair of cherries */
export function Cherries({ size = 40, style, className = "" }) {
  return (
    <svg viewBox="0 0 50 54" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <path d="M17 36C20 22 26 12 34 6M33 36c0-12 0-22 1-30" stroke="#5a7a48" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M34 6c6-3 12-1 14 3-5 3-11 2-14-3z" fill="#8fb37a" stroke="#5a7a48" strokeWidth="1.2" />
      <g stroke={INK} strokeWidth="1.3">
        <circle cx="16" cy="41" r="9" fill="#d52b1e" />
        <circle cx="34" cy="42" r="9" fill="#c4241a" />
      </g>
      <circle cx="13" cy="38" r="2.2" fill="#fff" opacity=".75" />
      <circle cx="31" cy="39" r="2.2" fill="#fff" opacity=".75" />
    </svg>
  );
}

/* hand mirror with a scalloped frame */
export function HandMirror({ size = 42, style, className = "" }) {
  return (
    <svg viewBox="0 0 50 70" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke={INK} strokeWidth="1.4" strokeLinejoin="round">
        <rect x="21" y="40" width="8" height="26" rx="4" fill="#f4d77a" />
        <circle cx="25" cy="23" r="20" fill="#f4d77a" />
        <circle cx="25" cy="23" r="15" fill="#e3f0fa" />
      </g>
      {Array.from({ length: 12 }, (_, i) => i * 30).map((a) => (
        <circle key={a} cx="25" cy="4.2" r="1.4" fill="#fff" transform={`rotate(${a} 25 23)`} />
      ))}
      <path d="M16 18q3-6 9-7M15 25q0-2 1-4" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M25 66v-3" stroke="#c99a1e" strokeWidth="1.2" />
    </svg>
  );
}

/* tiny paw print */
export function Paw({ size = 26, color = "#8d96a1", style, className = "" }) {
  return (
    <svg viewBox="0 0 30 30" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g fill={color}>
        <ellipse cx="15" cy="20" rx="7" ry="6" />
        <ellipse cx="7" cy="12" rx="2.8" ry="3.6" />
        <ellipse cx="12" cy="7" rx="2.8" ry="3.6" />
        <ellipse cx="18" cy="7" rx="2.8" ry="3.6" />
        <ellipse cx="23" cy="12" rx="2.8" ry="3.6" />
      </g>
    </svg>
  );
}

/* lipstick */
export function Lipstick({ size = 26, style, className = "" }) {
  return (
    <svg viewBox="0 0 30 64" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke={INK} strokeWidth="1.3" strokeLinejoin="round">
        <path d="M9 22V12l12-8v18z" fill="#d84a5c" />
        <rect x="7" y="22" width="16" height="10" rx="1.5" fill="#f4d77a" />
        <rect x="5" y="32" width="20" height="28" rx="3" fill="#bcd8f1" />
      </g>
      <path d="M12 12l5-3" stroke="#fff" strokeWidth="1.6" opacity=".7" strokeLinecap="round" />
      <path d="M9 36v20" stroke="#fff" strokeWidth="2" opacity=".6" strokeLinecap="round" />
    </svg>
  );
}

/* nail polish bottle */
export function NailPolish({ size = 30, style, className = "" }) {
  return (
    <svg viewBox="0 0 40 60" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke={INK} strokeWidth="1.3" strokeLinejoin="round">
        <rect x="14" y="3" width="12" height="20" rx="3" fill="#3a4452" />
        <path d="M6 30c0-6 4-8 14-8s14 2 14 8v20c0 5-3 7-7 7H13c-4 0-7-2-7-7z" fill="#8fbbe3" />
      </g>
      <path d="M11 30q2-4 7-4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M17 6v14" stroke="#6b7685" strokeWidth="1.4" />
      <circle cx="28" cy="46" r="1.6" fill="#fff" opacity=".7" />
    </svg>
  );
}

/* tulip */
export function Tulip({ size = 30, color = "#f4d77a", style, className = "" }) {
  return (
    <svg viewBox="0 0 40 64" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <path d="M20 30v30" stroke="#5a7a48" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 52c-8-2-12-9-12-15 7 1 11 6 12 15zM20 46c7-2 10-8 10-13-6 1-9 5-10 13z" fill="#8fb37a" stroke="#5a7a48" strokeWidth="1.1" />
      <g stroke={INK} strokeWidth="1.3" strokeLinejoin="round">
        <path d="M8 12c0 12 5 19 12 19s12-7 12-19l-6 6-6-12-6 12z" fill={color} />
      </g>
      <path d="M12 16q1 8 5 11" stroke="#fff" strokeWidth="1.6" fill="none" opacity=".7" strokeLinecap="round" />
    </svg>
  );
}

/* latte with heart art */
export function Latte({ size = 42, style, className = "" }) {
  return (
    <svg viewBox="0 0 60 50" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke={INK} strokeWidth="1.4" strokeLinejoin="round">
        <ellipse cx="28" cy="44" rx="24" ry="5" fill="#fbf8f1" />
        <path d="M44 18c9-1 11 12 0 13" fill="none" strokeWidth="3" stroke="#bcd8f1" />
        <path d="M44 18c9-1 11 12 0 13" fill="none" />
        <path d="M8 14h40l-4 24c-1 4-4 6-8 6H20c-4 0-7-2-8-6z" fill="#bcd8f1" />
        <ellipse cx="28" cy="14" rx="20" ry="5" fill="#c49a6c" />
      </g>
      <path d="M28 17c-4-3-6-1-5 1s5 3 5 3 4-1 5-3-1-4-5-1z" fill="#fbf1de" />
      <path d="M22 6q2-3 0-5M30 6q2-3 0-5" stroke="#9aa3ae" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* strawberry */
export function Strawberry({ size = 30, style, className = "" }) {
  const seeds = [[15, 20], [22, 18], [29, 20], [18, 27], [26, 27], [22, 34], [14, 30], [30, 30]];
  return (
    <svg viewBox="0 0 44 48" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <path d="M6 18c0-6 7-8 16-8s16 2 16 8c0 12-9 26-16 26S6 30 6 18z" fill="#d84a5c" stroke={INK} strokeWidth="1.3" />
      <path d="M12 12l-4-5 8 2 6-6 6 6 8-2-4 5-10 3z" fill="#8fb37a" stroke="#5a7a48" strokeWidth="1.1" strokeLinejoin="round" />
      {seeds.map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="1" ry="1.6" fill="#f4d77a" />)}
      <path d="M11 20q0-4 4-6" stroke="#fff" strokeWidth="1.8" fill="none" opacity=".6" strokeLinecap="round" />
    </svg>
  );
}

/* butterfly */
export function Butterfly({ size = 40, style, className = "" }) {
  return (
    <svg viewBox="0 0 60 48" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <g stroke={INK} strokeWidth="1.3" strokeLinejoin="round">
        <path d="M29 22C22 4 4 0 4 12c0 8 10 12 25 11z" fill="#bcd8f1" />
        <path d="M31 22C38 4 56 0 56 12c0 8-10 12-25 11z" fill="#bcd8f1" />
        <path d="M29 25C18 26 9 34 13 41s14-1 16-14z" fill="#f4d77a" />
        <path d="M31 25c11 1 20 9 16 16s-14-1-16-14z" fill="#f4d77a" />
        <rect x="28" y="12" width="4" height="28" rx="2" fill={INK} />
      </g>
      <path d="M28 12q-3-8-8-9M32 12q3-8 8-9" stroke={INK} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="14" cy="12" r="3" fill="#fff" opacity=".7" />
      <circle cx="46" cy="12" r="3" fill="#fff" opacity=".7" />
    </svg>
  );
}

/* grey cat curled up asleep */
export function SleepyCat({ size = 58, style, className = "", tip }) {
  return (
    <svg viewBox="0 0 80 50" className={`decor charm pet ${className}`} style={wrap(size, style)} aria-hidden="true" data-tip={tip}>
      <g stroke={INK} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M8 44c-4-14 8-28 30-28s34 10 32 24c-1 4-4 5-8 5H14c-3 0-5-0-6-1z" fill="#a9b1bb" />
        <g className="wag">
          <path d="M62 44c8 0 12-4 11-9" fill="none" stroke="#8d96a1" strokeWidth="6" />
          <path d="M62 44c8 0 12-4 11-9" fill="none" />
        </g>
        <ellipse cx="22" cy="34" rx="15" ry="12" fill="#b6bdc6" />
        <path d="M11 26l-1-10 8 6M30 23l5-8 1 10" fill="#b6bdc6" />
      </g>
      <path d="M16 34q3 2 6 0M25 34q3 2 6 0" stroke={INK} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M22.5 38h2l-1 1.5z" fill="#e9a2b0" />
      <g className="zz">
        <text x="40" y="14" fontFamily="Caveat, cursive" fontSize="12" fill="#6f9fcf">z</text>
        <text x="47" y="8" fontFamily="Caveat, cursive" fontSize="9" fill="#6f9fcf">z</text>
      </g>
    </svg>
  );
}

/* dog bone */
export function Bone({ size = 34, style, className = "" }) {
  return (
    <svg viewBox="0 0 56 26" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <path d="M14 8a6 6 0 1 0-6 9 6 6 0 1 0 6 3h28a6 6 0 1 0 6-3 6 6 0 1 0-6-9z" fill="#fbf1de" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M16 11h22" stroke="#e6d3b3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* puffy heart */
export function PuffyHeart({ size = 26, color = "#bcd8f1", style, className = "" }) {
  return (
    <svg viewBox="0 0 40 36" className={`decor charm ${className}`} style={wrap(size, style)} aria-hidden="true">
      <path d="M20 33C9 25 3 19 3 11 3 6 7 3 12 3c4 0 6 2 8 5 2-3 4-5 8-5 5 0 9 3 9 8 0 8-6 14-17 22z" fill={color} stroke={INK} strokeWidth="1.4" />
      <path d="M9 10q1-4 5-4" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity=".8" />
    </svg>
  );
}

/* brown Portuguese water dog lying down, chin on paws, with a tennis ball */
export function WaterDogLying({ size = 84, style, className = "", tip }) {
  const curls = [];
  for (let y = 0; y < 2; y++) for (let x = 0; x < 6; x++) curls.push([44 + x * 9 + (y % 2) * 4, 30 + y * 8]);
  return (
    <svg viewBox="0 0 112 62" className={`decor charm pet ${className}`} style={wrap(size, style)} aria-hidden="true" data-tip={tip}>
      {/* tail */}
      <g className="wag">
        <path d="M96 38c9-4 12-12 9-17" fill="none" stroke="#6b4632" strokeWidth="6" strokeLinecap="round" />
        <circle cx="104" cy="20" r="4" fill="#7a5139" stroke="#3b2618" strokeWidth="1.2" />
      </g>
      <g stroke="#3b2618" strokeWidth="1.5" strokeLinejoin="round">
        {/* body */}
        <path d="M36 52c-2-20 10-30 32-30s32 8 32 22c0 7-4 10-10 10H42c-4 0-6-1-6-2z" fill="#6b4632" />
        {curls.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4.4" fill="#7a5139" stroke="#4a2f20" strokeWidth="1" />)}
        {/* front paws */}
        <path d="M8 54c0-4 4-6 12-6h16v8H12c-3 0-4-1-4-2z" fill="#7a5139" />
        <path d="M20 54c0-3 3-5 9-5h12v7H23c-2 0-3-1-3-2z" fill="#6b4632" />
        {/* head */}
        <circle cx="30" cy="34" r="15" fill="#6b4632" />
        {[[20, 22], [27, 19], [34, 19], [41, 22], [24, 25], [37, 25], [30, 22]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#7a5139" stroke="#4a2f20" strokeWidth="1" />
        ))}
        <path d="M16 29c-6 3-7 12-3 17 3 2 5 0 6-3" fill="#5a3a28" />
        <path d="M44 29c6 3 7 12 3 17-3 2-5 0-6-3" fill="#5a3a28" />
        <ellipse cx="30" cy="42" rx="8" ry="6" fill="#7a5139" />
      </g>
      {/* sleepy-happy eyes, nose, mouth */}
      <path d="M23 34q2.5 2 5 0M32 34q2.5 2 5 0" stroke="#1f130c" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="30" cy="40" rx="2.9" ry="2.2" fill="#1f130c" />
      <path d="M30 42v2M30 44q-2.2 1.8-4 0M30 44q2.2 1.8 4 0" stroke="#1f130c" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      {/* yellow collar */}
      <path d="M19 47q11 5 22 0" stroke="#f4d77a" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* tennis ball */}
      <circle cx="7" cy="46" r="6" fill="#d9e86a" stroke="#3a4452" strokeWidth="1.2" />
      <path d="M2.5 43q4.5 3 9 0M2.5 49.5q4.5-3 9 0" stroke="#fff" strokeWidth="1.1" fill="none" />
    </svg>
  );
}
