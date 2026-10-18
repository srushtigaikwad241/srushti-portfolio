
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "TrustWatch",
    category: "Cybersecurity",
    description:
      "A security project focused on monitoring user activities, identifying suspicious behavior, and supporting internal threat detection.",
    technologies: ["Python", "MySQL", "JavaScript"],
    github: "https://github.com/srushtigaikwad241/TrustWatch-Internal-Threat-Detection-System",
    demo: "",
  },
  {
    number: "02",
    title: "SecureVault",
    category: "Application Security",
    description:
      "A file security application designed around encryption, file integrity verification, and security activity logging.",
    technologies: ["Python", "Flask", "MySQL", "AES-GCM"],
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "Student Result Management",
    category: "Cloud Computing",
    description:
      "A cloud-based student result management project designed to organize student records and provide separate admin and student access.",
    technologies: ["Firebase", "JavaScript", "Cloud Hosting"],
    github: "",
    demo: "https://studentresult-8e735.web.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-eyebrow">SELECTED WORK</span>

          <h2>
            Projects I've <span>worked on.</span>
          </h2>

          <p>
            Practical projects that help me apply my knowledge
            and continue developing my technical skills.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="project-card-header">
                <span className="project-number">
                  {project.number}
                </span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code <span>↗</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
