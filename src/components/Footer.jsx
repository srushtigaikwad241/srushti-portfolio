
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <a href="#home" className="footer-brand">
            <span className="footer-logo">SG</span>
            <span className="footer-brand-text">
              <strong>Srushti Gaikwad</strong>
              <small>Computer Engineering Student</small>
            </span>
          </a>

          <p className="footer-message">
            Learning, building, and growing through technology.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/srushtigaikwad241"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
            >
              GitHub <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/srushti-gaikwad-a54761422/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn <span>↗</span>
            </a>

            <a
              href="mailto:gaikwadsrushti241@gmail.com"
              aria-label="Send email"
            >
              Email <span>↗</span>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Srushti Gaikwad. All rights reserved.
          </p>

          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#home" className="footer-back-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
