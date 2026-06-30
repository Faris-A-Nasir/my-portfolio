import { services } from "../../data/portfolio";
import "./Services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">// services</span>
          <h2>What I Build</h2>
          <p>From AI automation pipelines to full stack applications — end to end.</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card glass-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="services-cta reveal">
          <div className="services-cta-inner glass-card">
            <div className="cta-text">
              <h3>Have a project in mind?</h3>
              <p>Let's build something that saves your business real time and money.</p>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}