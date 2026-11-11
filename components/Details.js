import { profile, experience, projects, leadership, skills } from "@/content/site";
import CopyEmail from "./CopyEmail";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Kayla's logo: a round stitched badge with "ks" + curved name, original design.
function LogoBadge() {
  return (
    <svg className="logo-badge" viewBox="0 0 240 240">
      <defs>
        <path id="ring" d="M120 120 m-86 0 a86 86 0 1 1 172 0 a86 86 0 1 1 -172 0" />
      </defs>
      <circle cx="120" cy="120" r="116" fill="#fbefc6" />
      <circle cx="120" cy="120" r="108" fill="none" stroke="#6f9fcf" strokeWidth="3" strokeDasharray="7 6" />
      <circle cx="120" cy="120" r="66" fill="#ffffff" stroke="#8fbbe3" strokeWidth="2.5" />
      <text className="logo-ring-text"><textPath href="#ring" startOffset="0" textLength="532" lengthAdjust="spacing">kayla sokullu ✦ software engineer ✦</textPath></text>
      <text x="120" y="138" textAnchor="middle" className="logo-ks">ks</text>
      <path d="M163 82l2.2 5 5 2.2-5 2.2-2.2 5-2.2-5-5-2.2 5-2.2z" fill="#e9c552" stroke="#c99a1e" strokeWidth="1" />
    </svg>
  );
}

// A card that shows just the headline (role · company · dates) and opens on click.
function Expandable({ title, org, when, children }) {
  return (
    <details className="d-card glass d-acc">
      <summary>
        <div className="acc-main">
          <h4>{title}</h4>
          <p className="d-org">{org}</p>
        </div>
        <div className="acc-side">
          {when && <p className="d-when">{when}</p>}
          <span className="acc-cue">
            <span className="cue-open">view details</span>
            <span className="cue-close">hide details</span>
            <i aria-hidden="true">+</i>
          </span>
        </div>
      </summary>
      <div className="acc-body">{children}</div>
    </details>
  );
}

// Everything from the board, neatly filed — for anyone who wants the plain version.
export default function Details() {
  return (
    <div className="details">
      <header className="d-intro reveal">
        <p className="d-eyebrow">the details ✿</p>
        <h2>Everything from the board, neatly filed.</h2>
      </header>

      {/* ── Experience timeline (the ribbon draws as you scroll) ──
           Each card shows role · company · dates; click to open the full details. */}
      <section id="experience" className="d-section">
        <h3 className="d-title reveal">work experience</h3>
        <ol className="timeline">
          <span className="thread" aria-hidden="true"><span className="thread-fill" /></span>
          {experience.map((e, i) => (
            <li key={e.org + e.when} className={`t-item reveal ${i % 2 ? "from-right" : "from-left"}`}>
              <span className="t-pearl" aria-hidden="true" />
              <Expandable title={e.role} org={e.org} when={e.when}>
                <p className="d-team">{e.team} · {e.where}</p>
                <ul className="d-points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <ul className="d-tags">{e.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </Expandable>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Leadership (same click-to-open cards) ── */}
      <section id="leadership" className="d-section">
        <h3 className="d-title reveal">leadership</h3>
        <div className="d-stack">
          {leadership.map((l, i) => (
            <div key={l.org} className="reveal" style={{ "--rd": `${i * 120}ms` }}>
              <Expandable title={l.role} org={l.org} when={l.when}>
                <ul className="d-points">{l.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </Expandable>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="d-section">
        <h3 className="d-title reveal">projects</h3>
        <div className="d-stack">
          {projects.map((p, i) => (
            <article key={p.title} className="d-card glass reveal d-project" style={{ "--rd": `${i * 120}ms` }}>
              <div className="d-row">
                <h4>{p.title}</h4>
                <p className="d-when">{p.from} · {p.year}</p>
              </div>
              <p>{p.blurb}</p>
              <ul className="d-tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              {(p.github || p.demo) && (
                <div className="d-links">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer">code ↗</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">live ↗</a>}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="d-section d-skills">
        <h3 className="d-title reveal">skills</h3>
        <article className="d-card glass reveal">
          {skills.map((g) => (
            <div key={g.group} className="d-skill">
              <p className="d-label">{g.group}</p>
              <ul className="d-tags">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </article>
      </section>

      {/* ── Contact: "click 4 …" links on the left, big logo + "kayla's site" watermark on the right ── */}
      <footer id="contact" className="d-footer contact reveal">
        <div className="contact-links">
          <p className="d-eyebrow">say hi ♡</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">click 4 <b>linkedin</b> <span>↗</span></a>
          <a href={profile.github} target="_blank" rel="noreferrer">click 4 <b>github</b> <span>↗</span></a>
          <a href={`${base}${profile.resumePdf}`} target="_blank" rel="noreferrer">click 4 <b>résumé</b> <span>↗</span></a>
          <CopyEmail email={profile.email} />
        </div>
        <div className="contact-mark" aria-hidden="true">
          <LogoBadge />
          <span className="watermark">kayla&apos;s site</span>
        </div>
      </footer>
      <p className="d-made">made with ♡ by {profile.name} · {new Date().getFullYear()}</p>
    </div>
  );
}
