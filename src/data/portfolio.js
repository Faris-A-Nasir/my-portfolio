// ============================================================
// data/portfolio.js  —  All content derived from Faris's CV
// ============================================================

export const personal = {
  name: "Faris Ahmad Nasir",
  title: "AI Engineer & Full Stack Developer",
  tagline: "Building AI Systems That Save Businesses Hours Every Day.",
  location: "Islamabad, Pakistan",
  email: "farisahmadnasir7@gmail.com",
  phone: "+92 312 0175471",
  linkedin: "https://linkedin.com/in/faris-nasir",
  github: "https://github.com/Faris-A-Nasir",
  summary:
    "CS graduate from Bahria University specializing in AI automation, voice agents, and full-stack development. I build intelligent systems that replace repetitive work with scalable automation.",
  stats: [
    { value: "5+", label: "AI Projects Built" },
    { value: "2", label: "Competition Wins" },
    { value: "1", label: "Research Publication" },
    { value: "2", label: "Industry Internships" },
  ],
};

export const services = [
  {
    icon: "🤖",
    title: "AI Automation",
    description:
      "End-to-end automation pipelines that eliminate repetitive workflows using LLMs, RAG, and n8n.",
    tags: ["LangChain", "n8n", "Python", "OpenAI"],
  },
  {
    icon: "🎙️",
    title: "Voice AI Agents",
    description:
      "Conversational voice agents for customer support, onboarding, and internal tooling.",
    tags: ["LLM", "Speech-to-Text", "NLP"],
  },
  {
    icon: "🌐",
    title: "Full Stack Development",
    description:
      "Production-ready web applications with React, Node.js, and modern databases.",
    tags: ["React", "Node.js", "MongoDB", "SQL"],
  },
  {
    icon: "⚡",
    title: "Workflow Optimization",
    description:
      "Audit and rebuild business workflows with intelligent integrations and API connections.",
    tags: ["REST APIs", "Supabase", "Firebase"],
  },
];

export const projects = [
  {
    id: 1,
    title: "DigitAI Notes",
    subtitle: "AI-Powered Notes Digitizer (Final Year Project)",
    description:
      "A multi-modal system that converts handwritten notes, scanned PDFs, and lecture audio into organized digital study material. Features OCR, speech-to-text, LLM summarization, auto-generated quizzes and flashcards, and a chatbot interface.",
    impact: "Reduces manual note-taking time by ~80% for students.",
    tags: ["React", "Node.js", "FastAPI", "Python", "MongoDB", "LLaMA 3", "FAISS"],
    category: "AI / Full Stack",
    highlight: true,
    publication: "Submitted to Acta Polytechnica Hungarica — Under Review",
    links: { github: "https://github.com/Faris-A-Nasir" },
  },
  {
    id: 2,
    title: "AI Resume Builder",
    subtitle: "Intelligent Resume Generation Platform",
    description:
      "An AI-powered resume builder with a built-in AI assistant that helps users craft tailored resumes. Features live preview, PDF export, and conversational guidance for content improvement.",
    impact: "Generates targeted resumes in under 5 minutes.",
    tags: ["Python", "MongoDB", "Express.js", "React", "Node.js"],
    category: "Full Stack / AI",
    highlight: true,
    links: { github: "https://github.com/Faris-A-Nasir" },
  },
  {
    id: 3,
    title: "AI Chat with PDF",
    subtitle: "Document Intelligence System",
    description:
      "Upload any PDF and interact with it through an AI interface. Extracts and retrieves relevant information, generates variable-length summaries, and answers contextual questions about the document.",
    tags: ["Python", "Hugging Face", "Transformers"],
    category: "AI",
    links: { github: "https://github.com/Faris-A-Nasir" },
  },
  {
    id: 4,
    title: "Car Recommendation Chatbot",
    subtitle: "NLP-Powered Purchase Assistant",
    description:
      "An intelligent chatbot trained on Flan-T5 that recommends cars based on user preferences — budget, brand, fuel type, and features. Uses NLP to understand natural language and improves recommendations conversationally.",
    tags: ["Python", "Hugging Face", "Flan-T5", "NLP"],
    category: "AI / NLP",
    links: { github: "https://github.com/Faris-A-Nasir" },
  },
  {
    id: 5,
    title: "Algorithm Visualizer",
    subtitle: "DSA Learning Tool — 1st Place Competition",
    description:
      "A graphical tool built in C++ with Raylib providing step-by-step visual representations of Data Structures and Algorithms. Won 1st place in the DSA Project Competition at Bahria University.",
    tags: ["C++", "Raylib"],
    category: "Systems",
    award: "🏆 1st Place — Bahria University DSA Competition",
    links: { github: "https://github.com/Faris-A-Nasir" },
  },
];

export const techStack = [
  { name: "Python",     category: "AI / Backend",    level: 90 },
  { name: "React",      category: "Frontend",         level: 88 },
  { name: "Node.js",    category: "Backend",          level: 85 },
  { name: "LLaMA",      category: "Generative AI",    level: 82 },
  { name: "LangChain",  category: "Generative AI",    level: 78 },
  { name: "MongoDB",    category: "Database",         level: 80 },
  { name: "FastAPI",    category: "Backend",          level: 75 },
  { name: "TypeScript", category: "Frontend",         level: 72 },
  { name: "Flutter",    category: "App Dev",          level: 68 },
  { name: "AWS",        category: "Cloud",            level: 65 },
  { name: "SQL",        category: "Database",         level: 80 },
  { name: "Docker",     category: "DevOps",           level: 62 },
];

export const experience = [
  {
    role: "Customer Relationship Management Developer",
    company: "DW IS International LLC",
    location: "Oshkosh, USA (Remote)",
    period: "Oct 2025 – Mar 2026",
    type: "Internship",
    points: [
      "Built and maintained CRM features used by internal and client users, cutting manual data-entry time by an estimated 35%.",
      "Collaborated remotely with a distributed team to ship CRM modules on a recurring sprint cycle.",
      "Translated non-technical business requirements directly into working features, closing the gap between stakeholders and code.",
    ],
  },
  {
    role: "Project-Based Web Developer",
    company: "SHARCUT",
    location: "Islamabad, Pakistan",
    period: "Nov 2024 – Feb 2025",
    type: "Contract",
    points: [
      "Built and maintained responsive web applications improving UX and performance.",
      "Collaborated with design and backend teams on scalable front-end solutions.",
      "Stack: HTML, CSS, JavaScript, React, PHP.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Smart-IS",
    location: "Rawalpindi, Pakistan",
    period: "Aug 2024 – Sep 2024",
    type: "Internship",
    points: [
      "Worked independently and in a professional team environment.",
      "Built React.js applications with Material UI and SQL backend.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Bahria University Islamabad",
  period: "Sep 2022 – Jun 2026",
  courses: [
    "Data Structures & Algorithms",
    "Generative AI",
    "Artificial Intelligence",
    "Cloud Computing",
    "Database Systems",
    "Web Programming",
    "Operating Systems",
    "Software Design & Analysis",
  ],
};

export const timeline = [
  {
    year: "2022",
    title: "Started CS at Bahria University",
    description: "Began BSc in Computer Science. Won 2nd place in DLD Competition.",
  },
  {
    year: "2023",
    title: "First Competition Win",
    description: "Won 1st place in DSA Competition. Contributed to Hacktoberfest open source.",
  },
  {
    year: "2024",
    title: "Industry Experience",
    description: "Internship at Smart-IS. Contract role at SHARCUT. Deepened React and backend skills.",
  },
  {
    year: "2025",
    title: "AI & Automation Focus",
    description: "Built FYP DigitAI Notes with LLaMA 3. Submitted research paper for publication.",
  },
  {
    year: "2026",
    title: "Graduating & Going Global",
    description: "CRM Developer at Smart IS (remote, USA). CS degree from Bahria University. Published Kaggle dataset. Launching international AI freelance.",
  },
];

export const awards = [
  {
    title: "1st Place — DSA Project Competition",
    org: "Bahria University",
    year: "2023",
    icon: "🥇",
  },
  {
    title: "2nd Place — DLD Project Competition",
    org: "Bahria University",
    year: "2023",
    icon: "🥈",
  },
  {
    title: "Hacktoberfest Contributor",
    org: "Open Source",
    year: "2023",
    icon: "🌍",
  },
  {
    title: "Research Paper — Under Review",
    org: "Acta Polytechnica Hungarica",
    year: "2026",
    icon: "📄",
  },
  {
    title: "Kaggle Dataset Published",
    org: "Kaggle",
    year: "2026",
    icon: "📊",
  },
];

// AI Playground — simulated chatbot responses
export const aiResponses = {
  default:
    "I'm Faris's AI assistant. Ask me about his projects, skills, services, or background!",
  questions: [
    { q: "What projects has Faris built?", key: "projects" },
    { q: "What technologies does he know?", key: "skills" },
    { q: "What services does he offer?", key: "services" },
    { q: "Tell me about his experience.", key: "experience" },
  ],
  answers: {
    projects:
      "Faris has built 5+ AI-powered projects. His flagship is DigitAI Notes — a multi-modal FYP that converts handwritten notes and audio into smart study material using LLaMA 3 and FAISS. He also built an AI Resume Builder, a PDF chat system, a car recommendation chatbot using Flan-T5, and an award-winning Algorithm Visualizer in C++.",
    skills:
      "Faris specializes in Generative AI (Python, LLaMA, LangChain, RAG, fine-tuning), Full Stack (React, Node.js, MongoDB, SQL), App Development (Flutter, Firebase), and Cloud (AWS, Azure). He writes clean, production-grade code across the entire stack.",
    services:
      "Faris offers four core services: AI Automation pipelines, Voice AI Agents, Full Stack Web Development, and Workflow Optimization. He's particularly strong in building systems that automate repetitive work for businesses using LLMs and modern APIs.",
    experience:
      "Faris has worked as a Project-Based Web Developer at SHARCUT (Nov 2024 – Feb 2025) and as a Web Development Intern at Smart-IS (Aug–Sep 2024). He's also a final-year CS student at Bahria University Islamabad, graduating in 2026, with a research paper under review.",
  },
};     