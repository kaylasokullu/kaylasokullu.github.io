"use client";

import { useEffect, useRef } from "react";

// A small liquid-glass lens that trails the custom cursor.
// It grows + turns butter yellow over anything clickable, squishes when you click,
// and shows a glass label (from data-tip) when you hover an item on the board.
// Only on devices with a real mouse (hidden on phones/tablets via CSS).
const CLICKABLE = "a, button, summary, [role='button'], .pin";

export default function Cursor() {
  const ring = useRef(null);
  const tip = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ring.current;
    let x = -100, y = -100, tx = -100, ty = -100, raf = 0;

    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      tip.current.style.transform = `translate3d(${x + 22}px, ${y + 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e) => {
      tx = e.clientX; ty = e.clientY;
      el.classList.add("on");
      el.classList.toggle("hover", !!e.target.closest?.(CLICKABLE));
      const t = e.target.closest?.("[data-tip]")?.dataset.tip;
      if (t) { if (tip.current.textContent !== t) tip.current.textContent = t; tip.current.classList.add("on"); }
      else tip.current.classList.remove("on");
    };
    const down = () => { el.classList.add("down"); tip.current.classList.remove("on"); };
    const up = () => el.classList.remove("down");
    const leave = () => { el.classList.remove("on"); tip.current.classList.remove("on"); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true"><span /></div>
      <div ref={tip} className="cursor-tip glass" aria-hidden="true" />
    </>
  );
}
