
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <a
          href="#home"
          className="navbar-brand"
          aria-label="Srushti Gaikwad home"
          onClick={closeMenu}
        >
          <span className="navbar-logo">SG</span>

          <span className="navbar-brand-text">
            <strong>Srushti Gaikwad</strong>
            <small>Computer Engineering Student</small>
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          className="navbar-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? "toggle-line open" : "toggle-line"} />
          <span className={menuOpen ? "toggle-line open" : "toggle-line"} />
          <span className={menuOpen ? "toggle-line open" : "toggle-line"} />
        </button>

        {/* Navigation */}
        <nav
          className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Let's Talk <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
