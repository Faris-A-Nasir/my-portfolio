import { useState } from "react";
import { personal } from "../../data/portfolio";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">// contact</span>
          <h2>Let's Build Together</h2>
          <p>Have a project or opportunity? I'd love to hear about it.</p>
        </div>

        <div className="contact-layout">
          {/* Left — info */}
          <div className="contact-info reveal">
            <p className="contact-intro">
              I'm currently open to freelance projects, remote contracts, and
              collaborations — especially in AI automation and full stack development.
            </p>

            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link glass-card">
                <span className="contact-link-icon">✉️</span>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">{personal.email}</div>
                </div>
              </a>

              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link glass-card">
                <span className="contact-link-icon">💼</span>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/faris-nasir</div>
                </div>
              </a>

              <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link glass-card">
                <span className="contact-link-icon">🐙</span>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/Faris-A-Nasir</div>
                </div>
              </a>

              <div className="contact-link glass-card">
                <span className="contact-link-icon">📍</span>
                <div>
                  <div className="contact-link-label">Location</div>
                  <div className="contact-link-value">Islamabad, Pakistan · Remote OK</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap glass-card reveal reveal-delay-2">
            {sent ? (
              <div className="contact-success">
                <span>🎉</span>
                <h3>Message ready!</h3>
                <p>Your mail client opened with the message pre-filled. Just hit send!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary contact-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}