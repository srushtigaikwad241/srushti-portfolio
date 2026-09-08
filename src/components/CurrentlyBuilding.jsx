import { motion } from "motion/react";

const buildingItems = [
  {
    number: "01",
    title: "Internal Threat Detection & Prevention System",
    category: "Final Year Project",
    description:
      "Developing a security system to monitor user activities, identify suspicious behavior, generate alerts, and help prevent unauthorized actions.",
    technologies: ["Python", "Flask", "MySQL", "Cybersecurity"],
  },
  {
    number: "02",
    title: "Full-Stack Development",
    category: "Learning",
    description:
      "Improving my skills in frontend and backend development by building practical web applications and working with APIs and databases.",
    technologies: ["React", "Node.js", "Express.js", "MySQL"],
  },
  {
    number: "03",
    title: "Cloud Computing",
    category: "Learning",
    description:
      "Building my understanding of cloud platforms, deployment, Linux, cloud infrastructure, and cloud security fundamentals.",
    technologies: ["Cloud", "Linux", "Deployment", "Security"],
  },
];

function CurrentlyBuilding() {
  return (
    <section
      id="building"
      className="building-section"
    >
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            04 — CURRENTLY BUILDING
          </span>

          <h2>
            What I'm{" "}
            <span className="gradient-text">
              working on.
            </span>
          </h2>

          <p>
            Projects and technologies I'm currently exploring
            while developing my technical skills.
          </p>
        </motion.div>

        <div className="building-grid">

          {buildingItems.map((item, index) => (
            <motion.article
              className="building-card"
              key={item.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >

              <div className="building-top">
                <span className="building-number">
                  {item.number}
                </span>

                <span className="building-status">
                  {item.category}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="building-tags">
                {item.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="building-progress">
                <span></span>
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CurrentlyBuilding;