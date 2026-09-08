import { motion } from "motion/react";

const journey = [
  {
    year: "2024",
    title: "Started Computer Engineering",
    description:
      "Began my journey in Computer Engineering and developed a strong interest in programming, databases, and software development.",
    tags: ["C", "C++", "Java", "DBMS"],
  },
  {
    year: "2025",
    title: "Exploring Development",
    description:
      "Started building practical projects and explored frontend development, Python, databases, and application development.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
  },
  {
    year: "2025 — 2026",
    title: "AI & Data Mining",
    description:
      "Explored machine learning concepts and data mining techniques through practical projects and experiments.",
    tags: ["WEKA", "KNN", "Naive Bayes", "Data Mining"],
  },
  {
    year: "2026",
    title: "Cybersecurity & Full-Stack",
    description:
      "Working on security-focused systems while improving my full-stack development skills and understanding of modern web technologies.",
    tags: ["React", "Node.js", "Flask", "Cybersecurity"],
  },
  {
    year: "Now",
    title: "Building & Learning",
    description:
      "Currently focused on building real-world projects, improving problem-solving skills, and preparing for the next stage of my technical career.",
    tags: ["React", "AI", "Cloud", "Security"],
  },
];

function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">04 — JOURNEY</span>

          <h2>
            My learning{" "}
            <span className="gradient-text">journey.</span>
          </h2>

          <p>
            A timeline of the technologies, projects, and experiences that
            have shaped my development journey.
          </p>
        </motion.div>

        <div className="journey-timeline">

          <div className="timeline-line"></div>

          {journey.map((item, index) => (
            <motion.div
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
              key={`${item.year}-${item.title}`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;