import "./TechStack.css";

const stack = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Dart"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "FastAPI", "Flutter", "LangChain"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Firebase", "Supabase", "MySQL"],
  },
  {
    category: "AI / ML",
    items: ["LLaMA 3", "Hugging Face", "Flan-T5", "RAG", "FAISS", "OpenAI", "LLM Fine-Tuning"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "Docker", "AWS", "Azure", "n8n", "REST APIs", "Linux"],
  },
];

export default function TechStack() {
  return (
    <section className="techstack" id="skills">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">// tech stack</span>
          <h2>Skills & Technologies</h2>
          <p>Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="stack-table reveal">
          {stack.map((group, i) => (
            <div key={group.category} className="stack-row-item">
              <div className="stack-cat-label">{group.category}</div>
              <div className="stack-items">
                {group.items.map((item, j) => (
                  <span key={item} className="stack-item">
                    {item}
                    {j < group.items.length - 1 && (
                      <span className="stack-dot"> · </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}