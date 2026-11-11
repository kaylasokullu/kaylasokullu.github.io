// A felt pennant: fuzzy felt triangle, contrasting felt band with four felt strips,
// and chunky cut-out felt letters that shrink toward the tip so they always fit.
// Original drawing — colours/text come from props.

const W = 440;   // viewBox width
const H = 170;   // viewBox height
const TOP = 8, BOT = 162, CY = (TOP + BOT) / 2;
const BAND_X = 52, BAND_W = 30;
const BASE_X = BAND_X + BAND_W; // where the triangle starts
const TIP_X = 436;
const HALF = (BOT - TOP) / 2;
const LEN = TIP_X - BASE_X;

// advance widths (× font size) measured from Bowlby One; CAP = cap height
const GW = {"0":.71,"1":.77,"2":.71,"3":.71,"4":.7,"5":.72,"6":.71,"7":.71,"8":.71,"9":.71,A:.8,B:.77,C:.76,D:.8,E:.64,F:.62,G:.82,H:.81,I:.41,J:.68,K:.8,L:.62,M:1.07,N:.84,O:.8,P:.75,Q:.8,R:.76,S:.72,T:.64,U:.79,V:.76,W:1.04,X:.78,Y:.74,Z:.68,"'":.39," ":.35};
const CAP = 0.75;
const glyphW = (c) => GW[c] ?? 0.78;
const halfAt = (x) => (HALF * (TIP_X - x)) / LEN;

// Biggest word that fits: letters taper gently toward the tip (like real felt pennants),
// and every letter's cap height stays inside the triangle at its right edge.
function layout(text, fsMax, pad, taper = 0.07, fill = 0.72) {
  const chars = [...text];
  const place = (fs0) => {
    const out = [];
    let x = BASE_X + pad;
    for (let i = 0; i < chars.length; i++) {
      const fs = fs0 * (1 - taper * i);
      const w = glyphW(chars[i]) * fs;
      if (chars[i] !== " " && CAP * fs > 2 * halfAt(x + w) * fill) return null;
      out.push({ ch: chars[i], x, fs });
      x += w * 0.98;
    }
    return out;
  };
  for (let fs0 = fsMax; fs0 > 8; fs0 -= 0.5) {
    const l = place(fs0);
    if (l) return l;
  }
  return place(8) || [];
}

export default function FeltPennant({ id, text, fill, band, letter, fsMax = 74, pad = 14, taper = 0.07 }) {
  const letters = layout(text, fsMax, pad, taper);
  const felt = `felt-${id}`, feltSoft = `feltsoft-${id}`;
  const strips = [
    { y: 40, a: -9 }, { y: 66, a: -3 }, { y: 94, a: 4 }, { y: 120, a: 10 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="felt-pennant" aria-hidden="true">
      <defs>
        {/* felt: fuzzy edges + fibre speckle */}
        <filter id={felt} x="-5%" y="-10%" width="110%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.2" xChannelSelector="R" yChannelSelector="G" result="fuzzy" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 -1.3 0.72" result="specksRaw" />
          <feGaussianBlur in="specksRaw" stdDeviation="0.35" result="specks" />
          <feComposite in="specks" in2="fuzzy" operator="in" result="specksIn" />
          <feTurbulence type="fractalNoise" baseFrequency="2.2" numOctaves="2" seed="9" result="noise2" />
          <feColorMatrix in="noise2" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 0.62" result="darkRaw" />
          <feGaussianBlur in="darkRaw" stdDeviation="0.3" result="dark" />
          <feComposite in="dark" in2="fuzzy" operator="in" result="darkIn" />
          <feMerge><feMergeNode in="fuzzy" /><feMergeNode in="specksIn" /><feMergeNode in="darkIn" /></feMerge>
        </filter>
        {/* letters: same felt, plus a soft shadow so they look stitched on top */}
        <filter id={feltSoft} x="-10%" y="-20%" width="120%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" result="fuzzy" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 0.6" result="dark" />
          <feComposite in="dark" in2="fuzzy" operator="in" result="darkIn" />
          <feDropShadow in="fuzzy" dx="0.8" dy="1.4" stdDeviation="0.9" floodColor="#1d2733" floodOpacity="0.35" result="shadow" />
          <feMerge><feMergeNode in="shadow" /><feMergeNode in="darkIn" /></feMerge>
        </filter>
      </defs>

      {/* felt strips (tassels) behind the band */}
      <g filter={`url(#${felt})`}>
        {strips.map((s, i) => (
          <rect key={i} x="2" y={s.y - 6} width="66" height="12" fill={band}
            transform={`rotate(${s.a} 66 ${s.y})`} />
        ))}
      </g>

      {/* triangle */}
      <path d={`M${BASE_X - 2} ${TOP} L${TIP_X} ${CY} L${BASE_X - 2} ${BOT} Z`} fill={fill} filter={`url(#${felt})`} />

      {/* band */}
      <rect x={BAND_X} y={TOP - 2} width={BAND_W} height={BOT - TOP + 4} fill={band} filter={`url(#${felt})`} />
      <path d={`M${BAND_X + BAND_W - 1} ${TOP + 2} V${BOT - 2}`} stroke="rgba(0,0,0,.12)" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* cut-felt letters */}
      <g filter={`url(#${feltSoft})`} fill={letter} className="felt-letters">
        {letters.map((l, i) => (
          <text key={i} x={l.x} y={CY + l.fs * CAP / 2} fontSize={l.fs}
            transform={`rotate(${i % 2 ? 1.5 : -1.5} ${l.x + l.fs * 0.35} ${CY})`}>
            {l.ch}
          </text>
        ))}
      </g>
    </svg>
  );
}
