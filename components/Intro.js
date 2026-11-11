import { about } from "@/content/site";

// Short "about me" right below the board — edit the text in content/site.js → about.paragraphs
export default function Intro() {
  return (
    <section id="about-me" className="intro reveal">
      <article className="d-card glass">
        <p className="d-eyebrow">about me</p>
        {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </article>
    </section>
  );
}
