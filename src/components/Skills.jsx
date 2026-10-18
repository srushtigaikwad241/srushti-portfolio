
import { motion } from "motion/react";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Writing code and solving programming problems.",
    skills: ["Python", "C", "C++"],
    icon: "⌘",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Building and styling responsive web interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    icon: "⌘",
  },
  {
    number: "03",
    title: "Database",
    description: "Working with structured data and database concepts.",
    skills: ["MySQL", "SQL"],
    icon: "▤",
  },
  {
    number: "04",
    title: "Cloud Computing",
    description: "Learning cloud platforms and cloud service concepts.",
    skills: ["Cloud Fundamentals", "Firebase"],
    icon: "☁",
  },
  {
    number: "05",
    title: "Cybersecurity",
    description: "Exploring security concepts through practical projects.",
    skills: ["Security Fundamentals", "Threat Detection"],
    icon: "⌑",
  },
  {
    number: "06",
    title: "Tools & Learning",
    description: "Practising development workflows and data analysis tools.",
    skills: ["Git", "GitHub", "Weka"],
    icon: "⚙",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-eyebrow">02 — MY TOOLKIT</span>
          <h2>Skills I'm <span>building.</span></h2>
          <p>
            Technologies and concepts I practise through coursework,
            self-learning, and project development.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="skill-card-top">
                <span className="skill-icon">{group.icon}</span>
                <span className="skill-number">{group.number}</span>
              </div>

              <h3>{group.title}</h3>
              <p className="skill-description">{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
