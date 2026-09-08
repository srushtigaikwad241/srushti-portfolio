import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          S<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-contact"
            onClick={handleLinkClick}
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;