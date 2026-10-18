
import { motion } from "motion/react";

const repositories = [
  {
    number: "01",
    name: "TrustWatch",
    description:
      "An internal threat detection and prevention project focused on cybersecurity and user activity monitoring.",
    technologies: ["Python", "MySQL", "JavaScript"],
    url: "https://github.com/srushtigaikwad241/TrustWatch-Internal-Threat-Detection-System",
  },
];

function Github() {
  return (
    <section id="github" className="github-section">
      <div className="github-container">
        <motion.div
          className="github-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="github-eyebrow">06 — GITHUB & CODE</span>
          <h2>Code, projects & <span>continuous learning.</span></h2>
          <p>
            Explore my project work and follow my journey as I continue
            learning and building with technology.
          </p>
        </motion.div>

        <motion.div
          className="github-profile-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="github-profile-info">
            <div className="github-avatar">SG</div>
            <div>
              <h3>Srushti Gaikwad</h3>
              <p>@srushtigaikwad241</p>
            </div>
          </div>

          <a
            className="github-profile-link"
            href="https://github.com/srushtigaikwad241"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub Profile <span>↗</span>
          </a>
        </motion.div>

        <div className="github-repositories">
          {repositories.map((repo, index) => (
            <motion.article
              className="github-repo-card"
              key={repo.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="github-repo-top">
                <span className="github-repo-icon">⌘</span>
                <span className="github-repo-number">{repo.number}</span>
              </div>

              <h3>{repo.name}</h3>
              <p>{repo.description}</p>

              <div className="github-repo-tags">
                {repo.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                className="github-repo-link"
                href={repo.url}
                target="_blank"
                rel="noreferrer"
              >
                Explore Repository <span>↗</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Github;
