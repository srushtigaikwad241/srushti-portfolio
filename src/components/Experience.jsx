
import { motion } from "motion/react";

const experiences = [
  {
    number: "01",
    type: "PROJECT EXPERIENCE",
    title: "Cybersecurity Project Development",
    organization: "TrustWatch — Academic Project",
    description:
      "Working on a project focused on internal threat detection, user activity monitoring, and identifying suspicious behaviour.",
    skills: ["Python", "MySQL", "Security Concepts"],
  },
  {
    number: "02",
    type: "PRACTICAL LEARNING",
    title: "Web Development",
    organization: "Personal Portfolio & Practice Projects",
    description:
      "Practising frontend development by building website sections, improving responsive layouts, and organizing reusable React components.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "03",
    type: "CAREER GOAL",
    title: "Seeking an Internship",
    organization: "Ready to learn and contribute",
    description:
      "Looking for an opportunity to apply my computer engineering knowledge, learn from industry professionals, and gain hands-on experience.",
    skills: ["Teamwork", "Problem Solving", "Continuous Learning"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="experience-eyebrow">05 — EXPERIENCE</span>
          <h2>Turning knowledge into <span>practice.</span></h2>
          <p>
            My practical learning, project work, and next career goals.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <motion.article
              className="experience-card"
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-number">{item.number}</div>

              <div className="experience-content">
                <span className="experience-type">{item.type}</span>
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>

                <div className="experience-tags">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <span className="experience-arrow" aria-hidden="true">
                ↗
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
