// ✿ Edit this file to update your board + the details section below it. ✿
// Commit + push → the live site updates.
//
// PHOTOS: drop pictures into /public/board/ and list them in `photos` below (first one shows on top).

export const profile = {
  name: "Kayla Sokullu",
  first: "Kayla",
  role: "Software Engineering @ Western",
  status: "open to summer 2027 internships", // TODO: adjust to what you're recruiting for
  location: "Toronto, ON",
  email: "kayla.sokullu@gmail.com",
  github: "https://github.com/kaylasokullu",
  linkedin: "https://www.linkedin.com/in/kayla-sk",
  resumePdf: "/resume.pdf",
  photoCaption: "hi, that's me!",
};

// Photo stack on the board — hover to fan out, click to flip to the next one.
export const photos = [
  { src: "/board/kayla-desert.jpg", caption: "monument valley", alt: "Kayla at Monument Valley" },
  { src: "/board/kayla-redwoods.jpg", caption: "muir woods park", alt: "Kayla hugging a giant redwood tree" },
  { src: "/board/kayla-snowboard.jpg", caption: "sunshine, banff", alt: "Kayla snowboarding in the Rockies" },
];

export const about = {
  greeting: "hi, i'm kayla!",
  short:
    "software engineering student at western. i like coming up with design solutions to complex problems, automating tasks and designing sites ♡",
  // shown in the "about me" card right below the board (write your intro here!)
  paragraphs: [
    "I'm a Software Engineering student at Western University (co-op, graduating 2028).",
    "I enjoy being a developer, designer and a problem solver. ",
    "Off the clock you can find me baking, working out or hiking the next biggest mountain. ",
  ],
};

export const interests = [
  { emoji: "🏂", label: "snowboarding" },
  { emoji: "🎹", label: "piano · RCM 9" },
  { emoji: "⛵", label: "sailing" },
  { emoji: "🏓", label: "pickleball" },
  { emoji: "⛳", label: "golf" },
  { emoji: "🧘‍♀️", label: "pilates" },
  { emoji: "🏛️", label: "architecture" },
  { emoji: "🔍", label: "crime docs" },
  { emoji: "✈️", label: "travel" },
  { emoji: "⛰️", label: "hiking"}
];

export const experience = [
  {
    role: "Automation Analyst Intern",
    org: "RBC",
    team: "Client Systems Engineering",
    when: "Fall 2026 – Present",
    where: "Toronto, ON",
    highlight: "80% faster data-integrity checks",
    points: [
      "Automated data-integrity checks with a full-stack Spring Boot dashboard, adopted team-wide, that uses Selenium on a daily job to verify host database tables against upstream FiBRS data — cutting check time by 80%.",
      "Enabled BDD testing of tax rules by designing a complete boundary test data set across 3 flows (API → Kafka → MongoDB) without source code, and presented coverage and defect findings to team leads.",
      "Reduced runtime and flaky failures across 8 client-profile REST and GraphQL APIs by optimizing retry logic and replacing static waits with dynamic polling.",
    ],
    tags: ["Spring Boot", "Selenium", "Kafka", "MongoDB", "GraphQL"],
  },
  {
    role: "Software Engineering Intern",
    org: "Ingram Micro",
    team: "Business Systems Development",
    when: "Summer 2026",
    where: "Toronto, ON",
    highlight: "45% faster support resolution",
    points: [
      "Developed an AI agent connected to Document360's knowledge base via an MCP server, deployed in Microsoft Teams and Copilot — improving support resolution time by 45%.",
      "Improved MTTR by 70% across 3 LLM-powered support pilots by automating an API-driven testing pipeline that generates and evaluates tickets at scale.",
      "Prototyped 4 knowledge-base solutions (HTML UI, widget, API-driven interface, AI/MCP integration) for real-time, personalized article access.",
    ],
    tags: ["AI agents", "MCP", "LLMs", "Copilot", "APIs"],
  },
  {
    role: "Software Engineering Intern",
    org: "Ingram Micro",
    team: "Business Systems Development",
    when: "Summer 2025",
    where: "Toronto, ON",
    highlight: "5+ hrs/week saved",
    points: [
      "Deployed an AI-powered search integration using LLM tooling to reduce ticket volume and improve self-service.",
      "Engineered a full-stack feature analyzing Zendesk ticket and user data, integrated into the team's unified frontend and deployed to production.",
      "Saved 5+ hours of manual work per week with an end-to-end automated backup workflow powered by REST APIs.",
      "Upskilled 18 team members in API scripting through weekly internal training sessions.",
    ],
    tags: ["LLMs", "Full-stack", "Zendesk API", "REST"],
  },
];

export const projects = [
  {
    title: "AI Swing Trading System",
    short: "4-agent AI pipeline · 13s latency",
    from: "Toronto",
    year: "2026",
    blurb:
      "An end-to-end automated trading system: RSI(2) signals from TradingView trigger a 4-agent AI pipeline with 13s end-to-end latency, with a React dashboard and live paper trading.",
    tags: ["Python", "FastAPI", "React", "Pine Script"],
    github: "https://github.com/kaylasokullu/TradeCortex",
    demo: "",
  },
  {
    title: "Course Management App",
    short: "full-stack · deployed on AWS",
    from: "Western",
    year: "2025",
    blurb:
      "A secure full-stack course management system built with a team and deployed on AWS EC2 — workflows for students, teachers, and admins to manage course content and access permissions.",
    tags: ["Node.js", "JavaScript", "REST APIs", "AWS", "JWT"],
    github: "", // add the repo link here if it's public
    demo: "",
  },
];

export const leadership = [
  {
    role: "Mentor",
    org: "Western Women in Engineering",
    points: ["Mentored 2 students through academic and personal challenges, campus engagement and recruiting."],
  },
  {
    role: "Tutor",
    org: "Learning Disabilities Association London Region",
    points: ["Weekly tutoring for students with learning disabilities using tailored lesson plans, progress tracking and close collaboration with parents."],
  },
];

export const education = {
  school: "Western University",
  degree: "Bachelor of Engineering Science, Software Engineering with Co-op",
  when: "Expected April 2028",
  where: "London, ON",
  coursework: [
    "Data Structures & Algorithms I & II", "Web Technologies", "Computer Networks",
    "Database Management Systems", "Software Project Management", "Operating Systems",
  ],
};

export const skills = [
  { group: "Languages & frameworks", items: ["Java", "Python", "JavaScript", "React", "Node.js", "Spring", "GraphQL", "REST APIs", "SQL", "OOP", "BDD"] },
  { group: "Cloud & DevOps", items: ["AWS (EC2)", "GCP", "Vercel", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Datadog", "Atlassian", "Figma"] },
  { group: "Methods", items: ["Agile", "Scrum", "Prototyping", "QA", "UAT", "ServiceNow"] },
];

// Shown on the back of the ace-of-hearts card
export const stack = ["Java", "Python", "React", "Node.js", "Spring", "GraphQL", "AWS", "Docker"];
