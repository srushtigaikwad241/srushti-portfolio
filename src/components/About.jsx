
import { motion } from "motion/react";
import profileImage from "../assets/pittu.jpeg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-eyebrow">01 — ABOUT ME</span>

          <h2>
            A little about <span>me.</span>
          </h2>

          <p>
            My background, interests, and the skills I'm developing
            as I work toward my career in technology.
          </p>
        </motion.div>

        <div className="about-layout">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-frame">
              <img
                src={profileImage}
                alt="Srushti Gaikwad"
                className="about-image"
              />
            </div>

            <div className="about-image-caption">
              <span className="about-caption-dot"></span>
              <span>Learning by building</span>
            </div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>
              Hi, I'm Srushti — a Computer Engineering student.
            </h3>

            <p>
              I'm pursuing a Diploma in Computer Engineering at
              Government Polytechnic Pune. I enjoy exploring how
              software works and applying what I learn through
              practical projects.
            </p>

            <p>
              My interests include Python programming, web
              development, cloud computing, and cybersecurity.
              I'm continuously improving my technical knowledge
              and communication skills through hands-on learning.
            </p>

            <div className="about-focus">
              <span className="about-focus-label">CURRENT INTERESTS</span>

              <div className="about-focus-tags">
                <span>Python</span>
                <span>Web Development</span>
                <span>Cloud Computing</span>
                <span>Cybersecurity</span>
              </div>
            </div>

            <a href="#contact" className="about-contact-link">
              Let's connect <span>↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
