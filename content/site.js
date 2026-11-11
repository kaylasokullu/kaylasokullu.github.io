// ✿ Edit this file to update your website. ✿
// Everything on the page reads from here — no need to touch the components.
// Each change you commit + push redeploys the site automatically.

export const profile = {
  name: "Kayla Sokullu",
  tagline: "Software engineer who loves building soft, thoughtful things.",
  intro:
    "I'm a developer who cares about clean code and good design in equal measure. I'm currently looking for new-grad / internship roles.",
  location: "Toronto, ON",
  email: "you@example.com", // TODO: your public contact email
  github: "https://github.com/your-username", // TODO
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO
  resume: "/resume.pdf", // drop your resume into /public/resume.pdf
  openToWork: true,
};

export const about = {
  paragraphs: [
    "Outside of code, I'm usually somewhere with a coffee and a sketchbook. I like things that are made with care — a well-designed app, a good playlist, a perfectly organized notes doc.",
    "Write a second paragraph here about what drives you, what you're learning right now, or the kind of team you want to join.",
  ],
  hobbies: [
    { emoji: "☕", label: "Café hopping" },
    { emoji: "🎨", label: "Sketching" },
    { emoji: "📚", label: "Reading" },
    { emoji: "🎧", label: "Playlists" },
    { emoji: "🧁", label: "Baking" },
    { emoji: "✈️", label: "Travel" },
  ],
};

export const projects = [
  {
    title: "Project One",
    blurb: "One or two sentences on what it does and why it matters. Lead with the outcome.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    github: "https://github.com/your-username/project-one",
    demo: "",
    doodle: "star",
  },
  {
    title: "Project Two",
    blurb: "What problem did you solve? What was the hardest part? Any numbers (users, speed-up, accuracy)?",
    tags: ["Python", "FastAPI", "ML"],
    github: "https://github.com/your-username/project-two",
    demo: "https://example.com",
    doodle: "heart",
  },
  {
    title: "Project Three",
    blurb: "Hackathon builds, class projects and side projects all count — show range.",
    tags: ["React", "Firebase"],
    github: "https://github.com/your-username/project-three",
    demo: "",
    doodle: "flower",
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    org: "Company Name",
    when: "May – Aug 2026",
    points: [
      "Shipped X, which improved Y by Z%.",
      "Built A using B for C users.",
    ],
  },
  {
    role: "B.Sc. Computer Science",
    org: "Your University",
    when: "2023 – 2027",
    points: ["Relevant coursework, GPA or clubs here."],
  },
];

export const achievements = [
  { title: "Hackathon winner", detail: "Event name · 2026" },
  { title: "Scholarship / award", detail: "Organization · 2025" },
  { title: "Certification", detail: "Issuer · 2025" },
];
