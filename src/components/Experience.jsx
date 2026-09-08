import { motion } from "motion/react";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">07 — EXPERIENCE</span>

          <h2>
            Learning through{" "}
            <span className="gradient-text">
              real-world work.
            </span>
          </h2>

          <p>
            Developing practical skills through personal projects,
            freelance exploration, and continuous technical learning.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="experience-number">
            01
          </div>

          <div className="experience-content">

            <div className="experience-header">
              <div>
                <span className="experience-type">
                  FREELANCE / INDEPENDENT
                </span>

                <h3>
                  Freelance Developer
                </h3>

                <h4>
                  Independent Projects
                </h4>
              </div>

              <span className="experience-status">
                EXPLORING
              </span>
            </div>

            <p>
              Exploring freelance opportunities while developing
              practical skills through web development, database
              applications, and independent software projects.
            </p>

            <div className="experience-highlights">
              <div>
                <span>01</span>
                <p>Building responsive web interfaces</p>
              </div>

              <div>
                <span>02</span>
                <p>Working with databases and application logic</p>
              </div>

              <div>
                <span>03</span>
                <p>Developing practical software projects</p>
              </div>

              <div>
                <span>04</span>
                <p>Improving problem-solving and development skills</p>
              </div>
            </div>

            <div className="experience-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>Flask</span>
              <span>MySQL</span>
              <span>GitHub</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;