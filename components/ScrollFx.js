"use client";

import { useEffect } from "react";

// Scroll interactions:
//  1. the board gently tilts back + shrinks as you scroll past it
//  2. sections fade/slide in as they enter the screen (.reveal → .in)
//  3. the ribbon thread in the experience timeline "sews" itself down as you scroll
export default function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stage = document.querySelector(".stage");
    const timeline = document.querySelector(".timeline");
    const fill = document.querySelector(".thread-fill");

    // 2. reveal on enter
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => (reduce ? el.classList.add("in") : io.observe(el)));

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;

        // 1. board recedes
        if (stage && !reduce) {
          const r = stage.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, -r.top / (r.height * 0.9)));
          stage.style.setProperty("--p", p.toFixed(3));
        }

        // 3. thread draws
        if (timeline && fill) {
          const r = timeline.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height));
          fill.style.transform = `scaleY(${p})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
