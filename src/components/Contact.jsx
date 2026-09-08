import { motion } from "motion/react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Left Content */}
          <div className="contact-content">

            <span className="section-label">
              09 — CONTACT
            </span>

            <h2>
              Let's build something{" "}
              <span className="gradient-text">
                meaningful.
              </span>
            </h2>

            <p>
              I'm always interested in learning, building new projects,
              and connecting with people who are working on interesting
              ideas and opportunities.
            </p>

            <div className="contact-info">

              <a
                href="mailto:gaikwadsrushti@gmail.com"
                className="contact-item"
              >
                <span className="contact-icon">@</span>

                <div>
                  <small>Email</small>
                  <strong>gaikwadsrushti@gmail.com</strong>
                </div>
              </a>

              <a
                href="https://github.com/srushtigaikwad241"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">↗</span>

                <div>
                  <small>GitHub</small>
                  <strong>View my projects</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">in</span>

                <div>
                  <small>LinkedIn</small>
                  <strong>Connect with me</strong>
                </div>
              </a>

            </div>
          </div>

          {/* Right Card */}
          <div className="contact-card">

            <div className="contact-card-glow"></div>

            <span className="contact-card-label">
              OPEN TO
            </span>

            <h3>
              New opportunities
            </h3>

            <p>
              Interested in internships, freelance projects,
              collaborative development, and opportunities to
              grow as a developer.
            </p>

            <a
              href="mailto:gaikwadsrushti@gmail.com"
              className="contact-button"
            >
              Get in touch
              <span>→</span>
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;