
import { motion } from "motion/react";

function Hero() {
  return (
    <section id="home" className="home-page">
      <div className="home-photo-background">
        <img src="/srushti-avatar.png" alt="Portrait of Srushti Gaikwad" />
      </div>

      <div className="home-photo-overlay"></div>

      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-eyebrow">
          COMPUTER ENGINEERING STUDENT
        </p>

        <h1 className="home-name">
          Hi, I'm <span>Srushti Gaikwad.</span>
        </h1>

        <h2 className="hero-role">
          Python · Web Development · Cloud Computing
        </h2>

        <p className="hero-description">
          I'm a Diploma Computer Engineering student interested in
          cybersecurity and software development. I enjoy learning
          new technologies and applying my knowledge through
          practical projects.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button hero-button-primary">
            View My Projects <span>↗</span>
          </a>

          <a
            href="/Srushti_Gaikwad_Resume.pdf"
            className="hero-button hero-button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume <span>↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
