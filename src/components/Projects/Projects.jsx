import { useState } from "react";
import { projects } from "../../data/portfolio";
import "./Projects.css";

export default function Projects() {
  const [active, setActive] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category.split(" / ")[0]))];
  const filtered = active === "All" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">// projects</span>
          <h2>Featured Work</h2>
          <p>Real projects solving real problems — from AI research to production apps.</p>
        </div>

        {/* Filter */}
        <div className="stack-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`stack-filter ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`project-card glass-card reveal ${project.highlight ? "project-card--featured" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Header */}
              <div className="project-header">
                <div>
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                {project.highlight && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Impact */}
              {project.impact && (
                <div className="project-impact">
                  <span>⚡</span> {project.impact}
                </div>
              )}

              {/* Award */}
              {project.award && (
                <div className="project-award">{project.award}</div>
              )}

              {/* Publication */}
              {project.publication && (
                <div className="project-publication">
                  <span>📄</span> {project.publication}
                </div>
              )}

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="project-links">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline project-btn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}