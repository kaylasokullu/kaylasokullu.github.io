// Small hand-drawn style doodles. Swap these for your own Figma exports:
// in Figma, select a doodle → Export → SVG, then paste the <path> here.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const shapes = {
  star: (
    <path d="M12 2.5c.6 3.4 1.6 6.4 3.4 8.1 1.7 1.6 4.2 1.9 6.1 1.4-3.2 1-5.3 2-6.5 3.7-1.2 1.7-2 4-3 6.3-.8-2.6-1.5-4.8-2.9-6.4C7.8 14 5.5 13.2 2.5 12.2c3-.4 5.4-1.2 6.8-2.9C10.7 7.6 11.4 5.4 12 2.5z" />
  ),
  heart: (
    <path d="M12 20.5c-4.8-3.3-8.6-6.6-8.6-10.6 0-2.6 1.9-4.6 4.3-4.6 1.8 0 3.3 1 4.3 2.7 1-1.7 2.5-2.7 4.3-2.7 2.4 0 4.3 2 4.3 4.6 0 4-3.8 7.3-8.6 10.6z" />
  ),
  flower: (
    <g>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6c-1.6-2.4-1.4-5.6 0-6.6 1.4 1 1.6 4.2 0 6.6zM12 14.4c1.6 2.4 1.4 5.6 0 6.6-1.4-1-1.6-4.2 0-6.6zM9.6 12c-2.4 1.6-5.6 1.4-6.6 0 1-1.4 4.2-1.6 6.6 0zM14.4 12c2.4-1.6 5.6-1.4 6.6 0-1 1.4-4.2 1.6-6.6 0z" />
    </g>
  ),
  sparkle: (
    <g>
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
      <path d="M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" opacity=".5" />
    </g>
  ),
  squiggle: (
    <path d="M2 14c2-4 4-4 5 0s3 4 5 0 3-4 5 0 3 4 5 0" />
  ),
  bow: (
    <g>
      <path d="M12 12c-3-3.5-7.5-5-8.5-3s1 6 8.5 3zM12 12c3-3.5 7.5-5 8.5-3s-1 6-8.5 3z" />
      <path d="M12 12l-3 7M12 12l3 7" />
      <circle cx="12" cy="12" r="1.3" />
    </g>
  ),
};

export default function Doodle({ name = "star", size = 24, className = "", style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={`doodle ${className}`}
      style={style}
      {...base}
    >
      {shapes[name] || shapes.star}
    </svg>
  );
}
