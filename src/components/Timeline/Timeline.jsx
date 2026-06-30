import { timeline, experience } from "../../data/portfolio";
import "./Timeline.css";

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">// journey</span>
          <h2>My Journey</h2>
          <p>From first line of code to AI systems — the story so far.</p>
        </div>

        <div className="timeline-layout">
          {/* Left — career timeline */}
          <div className="timeline-col reveal">
            <h3 className="timeline-col-title">
              <span>📅</span> Timeline
            </h3>
            <div className="timeline-track">
              {timeline.map((item, i) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content glass-card">
                    <span className="timeline-year">{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — experience */}
          <div className="experience-col reveal reveal-delay-2">
            <h3 className="timeline-col-title">
              <span>💼</span> Experience
            </h3>
            <div className="experience-list">
              {experience.map((exp, i) => (
                <div key={exp.company} className="exp-card glass-card">
                  <div className="exp-header">
                    <div>
                      <h4 className="exp-role">{exp.role}</h4>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-type">{exp.type}</span>
                      <span className="exp-period">{exp.period}</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}