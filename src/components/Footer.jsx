import { useEffect, useState } from "react";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back To Top */}
      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <footer className="footer">
        <div className="section-container">

          <div className="footer-top">

            {/* Brand */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                S<span>.</span>
              </a>

              <p>
                Computer Engineering student building practical
                projects and continuously learning modern
                technologies.
              </p>
            </div>

            {/* Navigation */}
            <div className="footer-navigation">
              <span className="footer-title">
                NAVIGATION
              </span>

              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Connect */}
            <div className="footer-connect">
              <span className="footer-title">
                CONNECT
              </span>

              <a
                href="https://github.com/srushtigaikwad241"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:your-email@example.com">
                Email ↗
              </a>
            </div>

          </div>

          <div className="footer-line"></div>

          <div className="footer-bottom">

            <span>
              © {new Date().getFullYear()} Srushti Gaikwad
            </span>

            <span>
              Designed & Built with React
            </span>

          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;