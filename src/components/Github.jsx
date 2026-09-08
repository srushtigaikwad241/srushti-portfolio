import { motion } from "motion/react";

function Github() {
  return (
    <section id="github" className="github-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            08 — GITHUB
          </span>

          <h2>
            Code, projects &{" "}
            <span className="gradient-text">
              continuous learning.
            </span>
          </h2>

          <p>
            My GitHub is where I share projects, experiments, and
            development work while continuously improving my technical
            skills.
          </p>
        </motion.div>

        <div className="github-grid">

          {/* Main GitHub Card */}
          <motion.div
            className="github-main-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <div className="github-card-top">
              <span className="github-symbol">
                {"</>"}
              </span>

              <span className="github-label">
                GITHUB PROFILE
              </span>
            </div>

            <h3>
              Explore my code
            </h3>

            <p>
              Explore my repositories, academic projects, and
              development experiments.
            </p>

            <a
              href="https://github.com/srushtigaikwad241"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              Visit GitHub
              <span>↗</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="github-stats-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="github-stat">
              <span className="github-stat-number">
                Projects
              </span>

              <span className="github-stat-text">
                Academic & personal work
              </span>
            </div>

            <div className="github-divider"></div>

            <div className="github-stat">
              <span className="github-stat-number">
                Learning
              </span>

              <span className="github-stat-text">
                Consistent technical growth
              </span>
            </div>

            <div className="github-divider"></div>

            <div className="github-stat">
              <span className="github-stat-number">
                Open
              </span>

              <span className="github-stat-text">
                Building & exploring
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Github;