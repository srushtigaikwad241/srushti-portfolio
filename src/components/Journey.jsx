
import { motion } from "motion/react";

const journeyItems = [
  {
    number: "01",
    period: "DIPLOMA STUDIES",
    title: "Computer Engineering",
    description:
      "Building a foundation in programming, databases, software development, and computer engineering concepts.",
    type: "Education",
  },
  {
    number: "02",
    period: "PROJECT EXPERIENCE",
    title: "TrustWatch",
    description:
      "Working on an internal threat detection and prevention project to explore cybersecurity and user activity monitoring.",
    type: "Project",
  },
  {
    number: "03",
    period: "TECHNICAL DEVELOPMENT",
    title: "Web & Cloud Technologies",
    description:
      "Practising web development and strengthening my understanding of Python, databases, and cloud computing.",
    type: "Learning",
  },
  {
    number: "04",
    period: "NEXT STEP",
    title: "Internship & Industry Experience",
    description:
      "Looking for opportunities to apply my knowledge, learn from experienced teams, and contribute to practical projects.",
    type: "Career Goal",
  },
];

function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="journey-eyebrow">03 — MY JOURNEY</span>
          <h2>Learning, building, <span>growing.</span></h2>
          <p>
            The experiences and goals shaping my journey in computer
            engineering and technology.
          </p>
        </motion.div>

        <div className="journey-timeline">
          {journeyItems.map((item, index) => (
            <motion.article
              className="journey-item"
              key={item.number}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="journey-marker">
                <span>{item.number}</span>
              </div>

              <div className="journey-card">
                <div className="journey-card-top">
                  <span className="journey-period">{item.period}</span>
                  <span className="journey-type">{item.type}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
