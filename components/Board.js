"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile, about, interests, experience, projects, stack, education, photos } from "@/content/site";
import { layout as defaultLayout, charms } from "@/content/layout";
import { GinghamBow, SatinBow, Pearl, Teddy, Clothespin, Stamp, Sparkle } from "./Decor";
import GlassModal from "./GlassModal";
import MapleLeaf from "./MapleLeaf";
import FeltPennant from "./FeltPennant";
import Dock from "./Dock";
import * as CHARMS from "./Charms";

const W = 1320; // board units
const H = 840;
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (href) => (href?.startsWith("/") ? base + href : href);
const u = (n) => `calc(var(--u) * ${n})`;

const POINTS = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, S: 1, T: 1, R: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10 };

function Photo({ src, alt, ratio = "1 / 1", hint }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={withBase(src)} alt={alt} className="photo" style={{ aspectRatio: ratio }} draggable={false} />;
  }
  return (
    <div className="photo ph" style={{ aspectRatio: ratio }} role="img" aria-label={`${alt} (placeholder)`}>
      <span>{hint || alt}</span>
    </div>
  );
}

function Tiles({ word, size = 50 }) {
  return (
    <div className="tile-row" style={{ "--ts": size }}>
      {word.split("").map((ch, j) =>
        ch === " " ? <span key={j} className="tile-gap" /> : (
          <span key={j} className="tile" style={{ "--k": j }}>{ch}<sub>{POINTS[ch.toUpperCase()] ?? ""}</sub></span>
        )
      )}
    </div>
  );
}

/* ───────── Pin: positions + drags any item ───────── */
function Pin({ id, pos, w, z, i = 0, onMove, onFront, onOpen, label, tip, className = "", children }) {
  const ref = useRef(null);
  const drag = useRef(null);

  const down = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    const board = ref.current.closest(".board");
    const scale = board.getBoundingClientRect().width / W;
    drag.current = { sx: e.clientX, sy: e.clientY, x: pos.x, y: pos.y, scale, moved: false, active: window.matchMedia("(min-width: 761px)").matches };
    ref.current.setPointerCapture?.(e.pointerId);
    onFront(id);
  };
  const move = (e) => {
    const d = drag.current;
    if (!d || !d.active) return;
    const dx = (e.clientX - d.sx) / d.scale;
    const dy = (e.clientY - d.sy) / d.scale;
    if (!d.moved && Math.hypot(dx, dy) < 5) return;
    d.moved = true;
    ref.current.classList.add("dragging");
    d.nx = Math.max(-40, Math.min(W - 40, d.x + dx));
    d.ny = Math.max(-40, Math.min(H - 40, d.y + dy));
    ref.current.style.left = `${(d.nx / W) * 100}%`;
    ref.current.style.top = `${(d.ny / H) * 100}%`;
  };
  const up = () => {
    const d = drag.current;
    drag.current = null;
    ref.current?.classList.remove("dragging");
    if (!d) return;
    if (d.moved) onMove(id, { ...pos, x: Math.round(d.nx), y: Math.round(d.ny) });
    else onOpen?.();
  };
  const key = (e) => {
    if (onOpen && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onOpen(); }
  };

  return (
    <div
      ref={ref}
      className={`pin ${onOpen ? "clickable" : ""} ${className}`}
      style={{ left: `${(pos.x / W) * 100}%`, top: `${(pos.y / H) * 100}%`, width: u(w), "--r": `${pos.r || 0}deg`, "--d": `${i * 70}ms`, zIndex: z }}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      onKeyDown={key}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      aria-label={label}
      data-tip={tip}
    >
      {children}
    </div>
  );
}

/* ───────── Board ───────── */
export default function Board() {
  const [pos, setPos] = useState(defaultLayout);
  const [zs, setZs] = useState({});
  const [modal, setModal] = useState(null);
  const [shot, setShot] = useState(0);
  const [edit, setEdit] = useState(false);
  const [copied, setCopied] = useState(false);
  const top = useRef(10);
  const order = useRef(0);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("board-layout-v2") || "null");
      if (saved) setPos((p) => ({ ...p, ...saved }));
    } catch {}
    setEdit(new URLSearchParams(window.location.search).has("edit"));
  }, []);

  const onMove = useCallback((id, p) => {
    setPos((prev) => {
      const next = { ...prev, [id]: p };
      try { localStorage.setItem("board-layout-v2", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);
  const onFront = useCallback((id) => setZs((z) => ({ ...z, [id]: ++top.current })), []);
  const tidy = () => {
    setPos(defaultLayout);
    setZs({});
    try { localStorage.removeItem("board-layout-v2"); } catch {}
  };
  const copyLayout = async () => {
    try {
      await navigator.clipboard.writeText(`export const layout = ${JSON.stringify(pos, null, 2)};\n`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  order.current = 0;
  const pin = (id, w, fallback) => ({
    id, w, pos: pos[id] || fallback, z: zs[id], i: order.current++, onMove, onFront,
  });

  return (
    <>
      <div className="stage" id="board">
        <div className="frame">
          <div className="board">
            <div className="fabric" aria-hidden="true" />
            <div className="lace" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="trim" aria-hidden="true" />
            <div className="zone-stitch z1" aria-hidden="true" />
            <div className="zone-stitch z2" aria-hidden="true" />

            <svg className="ribbon-line" viewBox="0 0 440 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 16 Q220 58 440 12" />
            </svg>

            {/* ═════ ABOUT ME ═════ */}
            <Pin {...pin("pennant", 380, { x: 30, y: 26 })} className="m-wide" label={`${profile.name} pennant`}>
              <div className="pennant">
                <FeltPennant id="name" text={profile.first.toUpperCase()} fill="#6f9fcf" band="#f4d77a" letter="#fbf6ea" fsMax={84} />
              </div>
            </Pin>

            <Pin {...pin("photo", 262, { x: 70, y: 196 })} className="m-photo" onOpen={() => setShot((n) => (n + 1) % Math.max(photos.length, 1))} label="Photos of Kayla — click for the next one" tip="click for the next photo ✿">
              <div className="photo-stack">
                {(photos.length ? photos : [{ src: "", caption: profile.photoCaption, alt: "Kayla" }]).map((ph, k, all) => {
                  const depth = (k - shot + all.length) % all.length; // 0 = top of the stack
                  return (
                    <figure key={ph.src || k} className="polaroid big stacked" style={{ "--depth": depth, zIndex: all.length - depth }} aria-hidden={depth !== 0}>
                      <Photo src={ph.src} alt={ph.alt || "Kayla"} hint="your photo goes here ♡" />
                      <figcaption>{ph.caption}</figcaption>
                      {depth === 0 && <span className="tape tape-top" />}
                    </figure>
                  );
                })}
              </div>
            </Pin>

            <Pin {...pin("about", 330, { x: 52, y: 528 })} className="m-wide" onOpen={() => setModal({ type: "about" })} label="About me — open" tip="read my note">
              <div className="note">
                <Pearl size={20} className="pin-top" />
                <p className="note-hello">{about.greeting}</p>
                <p className="note-body">{about.short}</p>
                <p className="note-sign">— {profile.first.toLowerCase()} ♡ <em>(click me)</em></p>
              </div>
            </Pin>

            {/* ═════ WORK ═════ */}
            <Pin {...pin("label-work", 230, { x: 575, y: 34 })} className="m-label" label="Work experience">
              <Tiles word="WORK" />
            </Pin>

            {experience.slice(0, 3).map((e, i) => (
              <Pin key={i} {...pin(`exp-${i}`, 140, { x: 470 + i * 148, y: 136 })} className="m-half" onOpen={() => setModal({ type: "exp", item: e })} label={`${e.role} at ${e.org} — open`} tip={`${e.org} · view role`}>
                <div className="index-card">
                  <Clothespin />
                  <p className="ic-when">{e.when}</p>
                  <p className="ic-org">{e.org}</p>
                  <p className="ic-role">{e.role}</p>
                </div>
              </Pin>
            ))}

            <Pin {...pin("interests", 272, { x: 478, y: 380 })} className="m-wide" onOpen={() => setModal({ type: "about" })} label="Things I love — open" tip="off the clock">
              <div className="interests-card">
                <span className="tape tape-top" />
                <p className="ix-title">off the clock</p>
                <ul>{interests.map((x) => <li key={x.label}><span>{x.emoji}</span>{x.label}</li>)}</ul>
              </div>
            </Pin>

            <Pin {...pin("ace", 118, { x: 772, y: 410 })} className="m-third" onOpen={() => setModal({ type: "stack" })} label="Tech stack — open" tip="my tech stack">
              <div className="ace">
                <div className="ace-front">
                  <span className="ace-corner">A<br />♥</span>
                  <span className="ace-heart">♥</span>
                  <span className="ace-corner flip">A<br />♥</span>
                </div>
                <div className="ace-back">
                  <p>my stack</p>
                  <ul>{stack.slice(0, 8).map((s) => <li key={s}>{s}</li>)}</ul>
                </div>
              </div>
            </Pin>

            <Pin {...pin("edu", 340, { x: 520, y: 668 })} className="m-wide" onOpen={() => setModal({ type: "edu" })} label="Education — open" tip="education">
              <div className="mini-pennant">
                <FeltPennant id="western" text="WESTERN '28" fill="#5b2b86" band="#e8e1f2" letter="#fbf6ea" fsMax={60} pad={10} taper={0.035} />
              </div>
            </Pin>

            {/* ═════ PROJECTS ═════ */}
            <Pin {...pin("label-projects", 376, { x: 930, y: 38 })} className="m-label" label="Projects">
              <Tiles word="PROJECTS" size={42} />
            </Pin>

            {projects.slice(0, 2).map((p, i) => (
              <Pin key={i} {...pin(`project-${i}`, 320, { x: 950, y: 140 + i * 228 })} className="m-wide" onOpen={() => setModal({ type: "project", item: p })} label={`${p.title} — open`} tip="open project">
                <div className="postcard">
                  <div className="pc-left">
                    <p className="pc-greet">greetings from</p>
                    <p className="pc-title">{p.title}</p>
                    <p className="pc-tags">{p.tags.join(" · ")}</p>
                  </div>
                  <div className="pc-right">
                    <Stamp label={<MapleLeaf />} />
                    <span className="postmark">{p.from}<br />{p.year}</span>
                    <span className="pc-line" /><span className="pc-line" /><span className="pc-line" />
                  </div>
                </div>
              </Pin>
            ))}

            <Pin {...pin("resume", 124, { x: 1070, y: 616 })} className="m-third" onOpen={() => window.open(withBase(profile.resumePdf), "_blank")} label="Résumé PDF — open" tip="résumé PDF ↗">
              <div className="resume-paper">
                <span className="clip" />
                <p>résumé</p>
                <span className="rl" /><span className="rl" /><span className="rl short" /><span className="rl" /><span className="rl short" />
              </div>
            </Pin>

            {/* ═════ a few decorations ═════ */}
            <div className="decor-layer" aria-hidden="true">
              <GinghamBow size={112} color="#6f9fcf" className="dc" style={{ left: "-0.8%", top: "-2.2%", transform: "rotate(-18deg)" }} />
              <SatinBow size={84} color="#e9c552" className="dc" style={{ left: "20%", top: "20%", transform: "rotate(16deg)" }} />
              <Teddy size={58} tip="hi! ♡" className="dc toy" style={{ left: "28.5%", top: "60%", transform: "rotate(10deg)" }} />
              <Sparkle size={26} color="#6f9fcf" className="dc twinkle" style={{ left: "40.5%", top: "5.5%" }} />
              <Sparkle size={22} color="#e0b83e" className="dc twinkle" style={{ left: "67%", top: "5%" }} />
              <Pearl size={24} className="dc" style={{ left: "1.4%", top: "93.5%" }} />
              <Pearl size={24} className="dc" style={{ left: "97%", top: "1.8%" }} />
              <Pearl size={24} className="dc" style={{ left: "97%", top: "93.5%" }} />

              {/* tiny charms (components/Charms.js) — positions live in content/layout.js → charms */}
              {charms.map((c, k) => {
                const C = CHARMS[c.type];
                if (!C) return null;
                return (
                  <C key={k} size={c.size} color={c.color} tip={c.tip} className="dc"
                    style={{ left: `${(c.x / W) * 100}%`, top: `${(c.y / H) * 100}%`, transform: `rotate(${c.r || 0}deg)${c.flip ? " scaleX(-1)" : ""}` }} />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="hint glass-chip">drag things around · click to open · scroll for the details ↓</p>

      {/* ── glass menu at the bottom (components/Dock.js) ── */}
      <Dock resumeHref={withBase(profile.resumePdf)} onTidy={tidy} edit={edit} onCopy={copyLayout} copied={copied} />

      <GlassModal open={!!modal} onClose={() => setModal(null)}>
        {modal && <ModalBody modal={modal} setModal={setModal} goTo={goTo} />}
      </GlassModal>
    </>
  );
}

function ModalBody({ modal, setModal, goTo }) {
  const { type, item } = modal;
  const jump = (id) => { setModal(null); setTimeout(() => goTo(id), 50); };

  if (type === "about")
    return (
      <>
        <p className="m-eyebrow">about me</p>
        <h2>{about.greeting}</h2>
        {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <ul className="m-chips">{interests.map((x) => <li key={x.label}>{x.emoji} {x.label}</li>)}</ul>
      </>
    );
  if (type === "exp")
    return (
      <>
        <p className="m-eyebrow">{item.when} · {item.where}</p>
        <h2>{item.role}</h2>
        <p className="m-org">{item.org} · {item.team}</p>
        <ul className="m-points">{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <ul className="m-chips">{item.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <button className="m-btn" onClick={() => jump("experience")}>see all experience ↓</button>
      </>
    );
  if (type === "project")
    return (
      <>
        <p className="m-eyebrow">postcard from {item.from} · {item.year}</p>
        <h2>{item.title}</h2>
        <p>{item.blurb}</p>
        <ul className="m-chips">{item.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="m-actions">
          {item.github && <a className="m-btn" href={item.github} target="_blank" rel="noreferrer">code ↗</a>}
          {item.demo && <a className="m-btn primary" href={item.demo} target="_blank" rel="noreferrer">live demo ↗</a>}
          <button className="m-btn" onClick={() => jump("projects")}>all projects ↓</button>
        </div>
      </>
    );
  if (type === "edu")
    return (
      <>
        <p className="m-eyebrow">{education.when} · {education.where}</p>
        <h2>{education.school}</h2>
        <p>{education.degree}</p>
        <p className="m-label">relevant coursework</p>
        <ul className="m-chips">{education.coursework.map((c) => <li key={c}>{c}</li>)}</ul>
      </>
    );
  if (type === "stack")
    return (
      <>
        <p className="m-eyebrow">my ace up the sleeve</p>
        <h2>Tech stack</h2>
        <ul className="m-chips">{stack.map((s) => <li key={s}>{s}</li>)}</ul>
        <button className="m-btn" onClick={() => jump("skills")}>all skills ↓</button>
      </>
    );
  if (type === "contact")
    return (
      <>
        <p className="m-eyebrow">say hi ♡</p>
        <h2>Let&apos;s work together</h2>
        <p>I&apos;d love to hear about internships, projects, or just chat about tech (and snowboarding).</p>
        <div className="m-actions">
          <a className="m-btn primary" href={`mailto:${profile.email}`}>email me</a>
          <a className="m-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="m-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="m-btn" href={withBase(profile.resumePdf)} target="_blank" rel="noreferrer">résumé ↗</a>
        </div>
      </>
    );
  return null;
}
