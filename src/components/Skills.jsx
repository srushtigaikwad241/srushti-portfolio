import { motion } from "motion/react";

const skillCategories = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, modern, and interactive web interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building server-side applications, APIs, and application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Designing, managing, and working with structured and NoSQL databases.",
    skills: [
      "MySQL",
      "MongoDB",
      "Oracle",
      "SQL",
    ],
  },
  {
  number: "04",
  title: "Data Mining & Analytics",
  description:
    "Working with data mining techniques and practical machine learning experiments using WEKA.",
  skills: [
    "Data Mining",
    "WEKA",
    "KNN",
    "Naive Bayes",
    "Decision Tree",
    "Data Preprocessing",
  ],
},
  {
    number: "05",
    title: "Cybersecurity",
    description:
      "Learning security concepts and developing systems for threat detection.",
    skills: [
      "Network Security",
      "Threat Detection",
      "Authentication",
      "Security Monitoring",
      "Wireshark",
      "Packet Tracer",
    ],
  },
  {
    number: "06",
    title: "Cloud Computing",
    description:
      "Learning cloud infrastructure, deployment, virtualization, and cloud security.",
    skills: [
      "Cloud Fundamentals",
      "GCP",
      "AWS",
      "Linux",
      "Cloud Security",
      "Deployment",
    ],
  },
  {
    number: "07",
    title: "Programming",
    description:
      "Developing problem-solving and programming fundamentals.",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "DSA",
    ],
  },
  {
    number: "08",
    title: "Development Tools",
    description:
      "Tools and platforms used for development, collaboration, and testing.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Wireshark",
      "Cisco Packet Tracer",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        <motion.div
          className="section-heading skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">02 — SKILLS</span>

          <h2>
            My technical{" "}
            <span className="gradient-text">toolkit.</span>
          </h2>

          <p>
            Technologies and tools I use while building projects,
            exploring new ideas, and developing my skills in software,
            AI, cybersecurity, and cloud computing.
          </p>
        </motion.div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card"
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="skill-card-top">
                <span className="skill-number">
                  {category.number}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;