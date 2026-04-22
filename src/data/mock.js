// Mock data for Pavithra's scrapbook portfolio

export const personalInfo = {
  name: "Pavithra",
  fullName: "Pavithra S",
  tagline: "AI Developer • App Builder • Systems Thinker",
  location: "Chennai, Tamil Nadu, India",
  email: "pavithrasugumar28@gmail.com",
  phone: "+91 7010973849",
  linkedin: "https://linkedin.com/in/pavithrasugumar",
  github: "https://github.com/pavithrasugumar-28",
  cgpa: "8.52 / 10.0",
  degree: "B.E. Computer Science",
  college: "R.M.K. Engineering College",
  duration: "2024 — 2028"
};

export const aboutNarrative = {
  greeting: "A little about me…",
  paragraph: "I’m a Computer Science undergraduate who loves turning half-formed ideas into working prototypes. My playground sits somewhere between artificial intelligence, full-stack web and a notebook full of sketches. I’ve built Tamil-language chatbots, emergency medical platforms, and bioinformatics models — each one starting as a scribble before becoming a system.",
  highlights: ["curious", "builder", "systems thinker", "tinkerer"],
  funFacts: [
    "I think in flowcharts before I think in code.",
    "Every project starts on paper — even the AI ones.",
    "I collect problems worth solving."
  ]
};

export const projects = [
  {
    id: 1,
    title: "Vinavi",
    subtitle: "Tamil-Language AI Chatbot",
    description:
      "An end-to-end conversational AI for Tamil speakers — it understands Thanglish, regional dialects and culturally-rich inputs. Built to close a real gap in South Indian vernacular NLP.",
    tech: ["Python", "NLP", "Full-Stack Web"],
    link: "https://github.com/pavithrasugumar-28/vinavi",
    accent: "teal",
    tilt: -3,
    tapeColor: "coral",
    year: "2025",
    annotation: "my favourite one ❤"
  },
  {
    id: 2,
    title: "SafePock",
    subtitle: "Emergency Medical QR Platform",
    description:
      "A privacy-first platform that turns a QR code into a life-saver. Responders scan, access encrypted medical history, and act — no app install required.",
    tech: ["Python", "QR Gen", "Database", "Full-Stack"],
    link: "https://github.com/pavithrasugumar-28/SafePock",
    accent: "coral",
    tilt: 2.5,
    tapeColor: "mustard",
    year: "2025",
    annotation: "built in a week, still iterating"
  },
  {
    id: 3,
    title: "DeepSeq",
    subtitle: "eDNA Aquatic Biodiversity Classifier",
    description:
      "A deep-learning classifier that reads environmental DNA from water samples to detect aquatic species — no nets, no harm. A quiet contribution to conservation.",
    tech: ["Python", "TensorFlow", "Deep Learning", "Bioinformatics"],
    link: "https://github.com/pavithrasugumar-28/deepseq",
    accent: "lavender",
    tilt: -2,
    tapeColor: "teal",
    year: "2025",
    annotation: "research baby"
  },
  {
    id: 4,
    title: "WealthWise",
    subtitle: "Personal Finance Management",
    description:
      "A full-stack finance platform with interactive dashboards — spending trends, budgets, goals — all backed by a clean relational schema.",
    tech: ["JavaScript", "SQL", "Data Viz", "Full-Stack"],
    link: "https://github.com/pavithrasugumar-28/WealthWise",
    accent: "mustard",
    tilt: 3,
    tapeColor: "lavender",
    year: "2024",
    annotation: "shipped ✔"
  },
  {
    id: 5,
    title: "EcoCalc",
    subtitle: "Sustainability Impact Calculator",
    description:
      "A tiny interactive calculator that turns lifestyle inputs into carbon footprint insights — with real-time ‘what-if’ behaviour simulations.",
    tech: ["HTML5", "CSS3", "JavaScript", "UX"],
    link: "https://github.com/pavithrasugumar-28/EcoCalc",
    accent: "teal",
    tilt: -2.5,
    tapeColor: "coral",
    year: "2024",
    annotation: "small but mighty"
  }
];

export const skillGroups = [
  {
    label: "Languages",
    color: "teal",
    items: ["Python", "Java", "C++", "SQL", "JavaScript"]
  },
  {
    label: "Web & Frameworks",
    color: "coral",
    items: ["React.js", "HTML5", "CSS3", "REST APIs"]
  },
  {
    label: "AI / ML",
    color: "lavender",
    items: ["NLP", "Deep Learning", "TensorFlow", "Keras", "scikit-learn"]
  },
  {
    label: "Data & Viz",
    color: "mustard",
    items: ["Power BI", "Data Analytics", "Decision Making"]
  },
  {
    label: "Databases",
    color: "teal",
    items: ["MySQL", "SQLite", "Firebase"]
  },
  {
    label: "Tools",
    color: "coral",
    items: ["Git", "GitHub", "VS Code", "Google Colab", "CAD"]
  }
];

export const timeline = [
  {
    id: 1,
    date: "Jun 2025 — Jul 2025",
    title: "AI Intern",
    org: "AICTE × Microsoft",
    note: "National internship — built ML workflows & explored Azure AI pipelines end-to-end.",
    marker: "star",
    side: "left"
  },
  {
    id: 2,
    date: "Jun 2025 — Jul 2025",
    title: "Web Development Intern",
    org: "ShadowFox",
    note: "Shipped responsive, accessible interfaces — learned the rhythm of real review cycles.",
    marker: "leaf",
    side: "right"
  },
  {
    id: 3,
    date: "Feb 2025 — Jun 2025",
    title: "Idea Lab Intern",
    org: "R.M.K. Engineering College",
    note: "Prototyped interdisciplinary R&D projects from problem→paper→prototype.",
    marker: "bulb",
    side: "left"
  },
  {
    id: 4,
    date: "2024 — present",
    title: "Began B.E. Computer Science",
    org: "R.M.K. Engineering College",
    note: "Maintaining 8.52 CGPA while building side-projects in parallel.",
    marker: "book",
    side: "right"
  }
];

export const ideas = [
  {
    id: 1,
    title: "Digital Twin… for Daily Life",
    description:
      "What if every home had a lightweight digital twin — energy, appliances, routines — whispering small nudges to save and simplify?",
    status: "sketching",
    color: "teal"
  },
  {
    id: 2,
    title: "AI Recipe Generator (Pantry-first)",
    description:
      "Start with what’s already in the fridge. Generate recipes that waste nothing, remember taste preferences, and learn over time.",
    status: "prototyping",
    color: "coral"
  },
  {
    id: 3,
    title: "Emergency App for First Responders",
    description:
      "An extension of SafePock — a mesh-based alert network that works when the internet doesn’t.",
    status: "researching",
    color: "lavender"
  },
  {
    id: 4,
    title: "A notebook for ML experiments",
    description:
      "Not a tool — a ritual. Sketch the hypothesis, then the code, then the loss curve. Train the mind before the model.",
    status: "daydream",
    color: "mustard"
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Ideas", href: "#ideas" },
  { label: "Contact", href: "#contact" }
];
