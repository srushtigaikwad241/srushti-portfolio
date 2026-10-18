
import { motion } from "motion/react";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="education-eyebrow">04 — EDUCATION</span>
          <h2>My academic <span>foundation.</span></h2>
          <p>
            The knowledge and experience I'm building through my
            computer engineering studies.
          </p>
        </motion.div>

        <motion.article
          className="education-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-card-icon" aria-hidden="true">
            <span>ED</span>
          </div>

          <div className="education-card-content">
            <span className="education-level">DIPLOMA · THIRD YEAR</span>

            <h3>Diploma in Computer Engineering</h3>

            <p className="education-institute">
              Government Polytechnic Pune
            </p>

            <p className="education-description">
              Developing a foundation in programming, web development,
              databases, software engineering, and computer systems
              through coursework and practical projects.
            </p>

            <div className="education-subjects">
              <span>Programming</span>
              <span>Database Management</span>
              <span>Web Development</span>
              <span>Cloud Computing</span>
            </div>
          </div>

          <div className="education-side-label">
            <span>01</span>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Education;
