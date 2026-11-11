"use client";

import { useEffect, useRef, useState } from "react";

// The glass menu at the bottom of the page.
// - buttons follow the page order and scroll to each section
// - a glass highlight slides to whichever section you're reading
// - tucks away while you scroll down, comes back when you scroll up
// - "tidy up" only shows while the board is on screen
const ITEMS = [
  ["board", "board"],
  ["about-me", "about"],
  ["experience", "work"],
  ["projects", "projects"],
  ["skills", "skills"],
  ["contact", "contact"],
];
const SECTION_IDS = ["board", "about-me", "experience", "leadership", "projects", "skills", "contact"];
const ALIAS = { leadership: "experience" }; // leadership sits under "work"

export default function Dock({ resumeHref, onTidy, edit, onCopy, copied }) {
  const nav = useRef(null);
  const thumb = useRef(null);
  const lock = useRef(0); // don't hide while a menu click is scrolling the page
  const [active, setActive] = useState("board");
  const [onBoard, setOnBoard] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      const atBottom = y + vh >= document.documentElement.scrollHeight - 4;

      let current = "board";
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < vh * 0.45) current = id;
      });
      if (atBottom) current = "contact";
      setActive(ALIAS[current] || current);

      const board = document.getElementById("board");
      setOnBoard(board ? board.getBoundingClientRect().bottom > vh * 0.35 : false);

      const dy = y - lastY;
      if (Math.abs(dy) > 6) {
        if (Date.now() > lock.current) setHidden(dy > 0 && y > 400 && !atBottom);
        lastY = y;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // slide the glass highlight under the active button
  useEffect(() => {
    const place = () => {
      const btn = nav.current?.querySelector(`[data-sec="${active}"]`);
      const t = thumb.current;
      if (!t) return;
      if (!btn || btn.offsetParent === null) { t.style.opacity = "0"; return; } // e.g. hidden on phones
      t.style.opacity = "1";
      t.style.width = `${btn.offsetWidth}px`;
      t.style.transform = `translateX(${btn.offsetLeft}px)`;
    };
    place();
    const ro = new ResizeObserver(place);
    ro.observe(nav.current);
    return () => ro.disconnect();
  }, [active, onBoard, edit, copied]);

  const go = (id) => {
    lock.current = Date.now() + 1200;
    setHidden(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav ref={nav} className={`dock glass ${hidden ? "tucked" : ""}`} aria-label="Site navigation">
      <span ref={thumb} className="dock-thumb" aria-hidden="true" />
      {ITEMS.map(([id, label]) => (
        <button
          key={id}
          data-sec={id}
          className={active === id ? "active" : ""}
          aria-current={active === id ? "true" : undefined}
          onClick={() => go(id)}
        >
          {label}
        </button>
      ))}
      <a href={resumeHref} target="_blank" rel="noreferrer">résumé ↗</a>
      {onBoard && (
        <>
          <span className="dock-sep" />
          <button className="dock-tidy" onClick={onTidy} title="put everything back">tidy up</button>
        </>
      )}
      {edit && <button className="dock-edit" onClick={onCopy}>{copied ? "copied ✓" : "copy layout"}</button>}
    </nav>
  );
}
