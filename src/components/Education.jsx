import { motion } from "motion/react";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">06 — EDUCATION</span>

          <h2>
            My academic{" "}
            <span className="gradient-text">foundation.</span>
          </h2>

          <p>
            Building a strong technical foundation through academic learning,
            practical projects, and continuous exploration of modern
            technologies.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="education-left">
            <span className="education-number">01</span>

            <div className="education-line"></div>

            <span className="education-status">
              CURRENT
            </span>
          </div>

          <div className="education-content">

            <span className="education-type">
              DIPLOMA
            </span>

            <h3>
              Diploma in Computer Engineering
            </h3>

            <h4>
              Your Institute Name
            </h4>

            <p>
              Currently developing a strong foundation in programming,
              database management, computer networks, operating systems,
              web development, data mining, cloud computing, and
              cybersecurity through academic coursework and practical
              projects.
            </p>

            <div className="education-tags">
              <span>Programming</span>
              <span>DBMS</span>
              <span>Web Development</span>
              <span>Networking</span>
              <span>Data Mining</span>
              <span>Cybersecurity</span>
              <span>Cloud Computing</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;