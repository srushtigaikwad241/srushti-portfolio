
import { motion } from "motion/react";

const contactLinks = [
  {
    label: "Email",
    value: "gaikwadsrushti241@gmail.com",
    href: "mailto:gaikwadsrushti241@gmail.com",
    symbol: "@",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/srushti-gaikwad-a54761422/",
    symbol: "in",
  },
  {
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/srushtigaikwad241",
    symbol: "<>",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">07 — GET IN TOUCH</span>

          <h2>Let's build something <span>meaningful.</span></h2>

          <p>
            I'm interested in internship opportunities where I can learn,
            contribute to projects, and grow as a computer engineering student.
            Feel free to connect with me.
          </p>
        </motion.div>

        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-panel-copy">
            <span className="contact-panel-label">HAVE AN OPPORTUNITY?</span>
            <h3>I'd be happy to hear from you.</h3>
            <p>
              Reach out by email or connect with me on my professional
              profiles.
            </p>

            <a
              className="contact-email-button"
              href="mailto:gaikwadsrushti241@gmail.com"
            >
              Send me an email <span>↗</span>
            </a>
          </div>

          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                className="contact-link-card"
                href={link.href}
                key={link.label}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
              >
                <span className="contact-link-symbol">{link.symbol}</span>

                <span className="contact-link-text">
                  <strong>{link.label}</strong>
                  <small>{link.value}</small>
                </span>

                <span className="contact-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
