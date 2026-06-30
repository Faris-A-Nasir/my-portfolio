import { personal, education, awards } from "../../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        {/* Section label */}
        <div className="section-heading reveal">
          <span className="section-label">// about me</span>
          <h2>Who Am I?</h2>
          <p>A CS graduate turning complex AI problems into clean, working systems.</p>
        </div>

        <div className="about-grid">

          {/* Left — story */}
          <div className="about-story reveal">
            <div className="about-text-block">
              <p className="about-intro">
                I'm <span className="highlight">Faris Ahmad Nasir</span> — a Software Engineer
                from Islamabad focused on <span className="highlight">AI Automation</span>,
                Voice AI Agents, and Full Stack Development.
              </p>
              <p>
                I love building systems that replace repetitive work with intelligent automation.
                My final year project DigitAI Notes — an AI that converts handwritten notes and
                lecture audio into smart study material — is currently under review at an
                international research journal.
              </p>
              <p>
                Beyond code, I've won university competitions, contributed to open source, and
                published a dataset on Kaggle. I'm now focused on taking my AI work to
                international clients.
              </p>
            </div>

            {/* Education card */}
            <div className="education-card glass-card reveal reveal-delay-2">
              <div className="edu-icon">🎓</div>
              <div className="edu-info">
                <h4>{education.degree}</h4>
                <p>{education.institution}</p>
                <span className="tag">{education.period}</span>
              </div>
            </div>

            {/* Courses */}
            <div className="courses reveal reveal-delay-3">
              <p className="courses-label">Relevant Coursework</p>
              <div className="courses-grid">
                {education.courses.map((c) => (
                  <span key={c} className="course-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — awards & highlights */}
          <div className="about-right">
            <div className="awards-list">
              {awards.map((award, i) => (
                <div
                  key={award.title}
                  className="award-card glass-card reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="award-icon">{award.icon}</span>
                  <div className="award-info">
                    <h4>{award.title}</h4>
                    <p>{award.org} · {award.year}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="quick-facts glass-card reveal reveal-delay-2">
              <h4 className="facts-title">Quick Facts</h4>
              <ul className="facts-list">
                <li><span>📍</span> Islamabad, Pakistan</li>
                <li><span>🎓</span> BS Computer Science, 2026</li>
                <li><span>💼</span> Open to freelance & remote work</li>
                <li><span>🌐</span> Targeting international clients</li>
                <li><span>📄</span> Research paper under review</li>
                <li><span>📊</span> Kaggle dataset published</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}