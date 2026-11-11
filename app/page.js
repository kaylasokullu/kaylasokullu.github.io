import Doodle from "@/components/Doodles";
import { profile, about, projects, experience, achievements } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (href) => (href?.startsWith("/") ? base + href : href);

function Section({ id, eyebrow, title, doodle, children }) {
  return (
    <section id={id} className="section">
      <header className="section-head">
        <span className="eyebrow">
          <Doodle name={doodle} size={16} /> {eyebrow}
        </span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* soft background blobs — the glass needs something colorful behind it */}
      <div className="backdrop" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <span className="blob b4" />
      </div>

      <nav className="nav glass">
        <a href="#top" className="logo">
          {profile.name.split(" ")[0].toLowerCase()}
          <Doodle name="heart" size={14} className="logo-heart" />
        </a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <Doodle name="sparkle" size={34} className="float d1" />
          <Doodle name="star" size={26} className="float d2" />
          <Doodle name="bow" size={40} className="float d3" />
          {profile.openToWork && (
            <span className="pill glass">
              <span className="dot" /> open to new-grad &amp; internship roles
            </span>
          )}
          <h1>
            Hi, I&apos;m <em>{profile.name.split(" ")[0]}</em>
            <svg className="underline" viewBox="0 0 120 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9c10-8 18-8 24 0s16 8 24 0 16-8 24 0 16 8 24 0 14-8 20-2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </h1>
          <p className="lede">{profile.tagline}</p>
          <p className="sub">{profile.intro}</p>
          <div className="cta">
            <a className="btn primary" href="#projects">see my work</a>
            <a className="btn glass" href={withBase(profile.resume)} target="_blank" rel="noreferrer">
              résumé ↗
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="about me" title="Beyond the code" doodle="flower">
          <div className="about-grid">
            <div className="card glass">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="muted">📍 {profile.location}</p>
            </div>
            <div className="card glass">
              <h3>Things I love</h3>
              <ul className="hobbies">
                {about.hobbies.map((h) => (
                  <li key={h.label} className="chip">
                    <span>{h.emoji}</span> {h.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="selected work" title="Projects" doodle="star">
          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.title} className="card glass project">
                <Doodle name={p.doodle} size={28} className="corner" />
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="links">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer">code ↗</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">live ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE + ACHIEVEMENTS */}
        <Section id="experience" eyebrow="the journey so far" title="Experience & achievements" doodle="sparkle">
          <div className="exp-grid">
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.org} className="card glass">
                  <div className="row">
                    <h3>{e.role}</h3>
                    <span className="muted small">{e.when}</span>
                  </div>
                  <p className="org">{e.org}</p>
                  <ul>
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="card glass awards">
              <h3>
                <Doodle name="star" size={18} /> Highlights
              </h3>
              <ul>
                {achievements.map((a) => (
                  <li key={a.title}>
                    <strong>{a.title}</strong>
                    <span className="muted small">{a.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="say hi" title="Let's work together" doodle="heart">
          <div className="card glass contact">
            <p>I&apos;d love to hear about roles, projects, or just chat about tech (and cafés).</p>
            <div className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}>email me</a>
              <a className="btn glass" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn glass" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn glass" href={withBase(profile.resume)} target="_blank" rel="noreferrer">résumé ↗</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        made with <Doodle name="heart" size={12} /> by {profile.name} · {new Date().getFullYear()}
      </footer>
    </>
  );
}
