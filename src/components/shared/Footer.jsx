import { personal } from "../../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span>Faris Ahmad Nasir</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <p className="footer-copy">
          © {year} Faris Ahmad Nasir. Designed & built with care.
        </p>

        <div className="footer-links">
          <a href={personal.github}   target="_blank" rel="noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}