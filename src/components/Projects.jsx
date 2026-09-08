import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    category: "Cybersecurity",
    title: "Internal Threat Detection & Prevention System",
    description:
      "A security-focused system designed to monitor user activities, detect suspicious behavior, generate security alerts, and help prevent unauthorized actions.",
    technologies: [
      "Python",
      "Flask",
      "MySQL",
      "User Behavior Analysis",
    ],
    featured: true,
  },
  {
    number: "02",
    category: "Data Mining",
    title: "Home Price Prediction",
    description:
      "A data mining project that analyzes housing datasets and applies machine learning techniques to predict property prices.",
    technologies: [
      "WEKA",
      "Data Mining",
      "KNN",
      "Naive Bayes",
      "Decision Tree",
    ],
    featured: false,
  },
  {
    number: "03",
    category: "Cloud Computing",
    title: "Cloud-Based Secure File Storage",
    description:
      "A cloud computing project focused on secure file storage, organization, and controlled access to stored files.",
    technologies: [
      "Cloud Computing",
      "Python",
      "Database",
      "Security",
    ],
    featured: false,
  },
  {
    number: "04",
    category: "Python",
    title: "Smart To-Do List Manager",
    description:
      "A desktop productivity application for creating, managing, updating, and organizing daily tasks.",
    technologies: [
      "Python",
      "Tkinter",
      "Database",
    ],
    featured: false,
  },
  {
    number: "05",
    category: "Web Development",
    title: "Book Store Website",
    description:
      "A responsive web project created to practice frontend development, website structure, styling, and user interaction.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">03 — PROJECTS</span>

          <h2>
            Things I've{" "}
            <span className="gradient-text">built.</span>
          </h2>

          <p>
            A collection of academic and personal projects where I apply
            programming, databases, data mining, cybersecurity, cloud
            computing, and web development concepts.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-bottom">
                <a
                  href="#contact"
                  className="project-link"
                >
                  View Project <span>↗</span>
                </a>

                <div className="project-line"></div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;