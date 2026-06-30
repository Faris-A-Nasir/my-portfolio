import { useEffect, useState } from "react";
import { personal } from "../../data/portfolio";
import "./Navbar.css";

const navLinks = [
  { label: "About",     href: "#about"     },
  { label: "Projects",  href: "#projects"  },
  { label: "Skills",    href: "#skills"    },
  { label: "Services",  href: "#services"  },
  { label: "AI Chat",   href: "#ai"        },
  { label: "Contact",   href: "#contact"   },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Faris Ahmad Nasir</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop links */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? "nav-link--active" : ""}`}
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="navbar-ctas">
          <a
            href="/CV/Resume_CV.pdf"
            download="Faris_Ahmad_Nasir_CV.pdf"
            className="btn-outline navbar-cv"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="btn-primary navbar-cta"
            onClick={(e) => handleNav(e, "#contact")}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/CV/Resume_CV.pdf"
            download="Faris_Ahmad_Nasir_CV.pdf"
            className="btn-outline"
            style={{ marginTop: "1rem", justifyContent: "center" }}
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: "0.75rem", justifyContent: "center" }}
            onClick={(e) => handleNav(e, "#contact")}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}