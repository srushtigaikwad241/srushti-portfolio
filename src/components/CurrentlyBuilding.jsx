
import { motion } from "motion/react";

const currentWork = [
  {
    number: "01",
    label: "MAIN PROJECT",
    title: "TrustWatch",
    subtitle: "Internal Threat Detection & Prevention System",
    description:
      "Developing a cybersecurity project focused on monitoring user activities and identifying potentially suspicious behaviour.",
    tags: ["Python", "MySQL", "Web Development"],
    symbol: "⌁",
  },
  {
    number: "02",
    label: "LEARNING",
    title: "Cloud Computing",
    subtitle: "Cloud Platforms & Services",
    description:
      "Building my understanding of cloud service models, cloud platforms, data management, and cloud security concepts.",
    tags: ["Cloud Fundamentals", "Cloud Security"],
    symbol: "☁",
  },
  {
    number: "03",
    label: "PRACTICE",
    title: "Portfolio Development",
    subtitle: "Personal Website",
    description:
      "Improving my portfolio by building responsive layouts, organizing React components, and refining the user experience.",
    tags: ["React", "CSS", "JavaScript"],
    symbol: "⌘",
  },
];

function CurrentlyBuilding() {
  return (
    <section className="building-section">
      <div className="building-container">
        <motion.div
          className="building-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="building-eyebrow">WHAT I'M UP TO</span>
          <h2>Learning by <span>doing.</span></h2>
          <p>
            A look at the projects and topics I'm exploring as I grow
            my technical knowledge.
          </p>
        </motion.div>

        <div className="building-grid">
          {currentWork.map((item, index) => (
            <motion.article
              className="building-card"
              key={item.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="building-card-top">
                <span className="building-symbol">{item.symbol}</span>
                <span className="building-number">{item.number}</span>
              </div>

              <span className="building-label">{item.label}</span>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p className="building-description">{item.description}</p>

              <div className="building-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyBuilding;
