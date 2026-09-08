import { motion } from "motion/react";

function Hero() {
  return (
    <section id="home" className="hero-section">
      
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="status-dot"></span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">
            Srushti Gaikwad
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Computer Engineering Student
          <span className="role-dot"> • </span>
          Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          I build modern web applications and explore
          <span> AI, cybersecurity, and emerging technologies.</span>
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="primary-button">
            View My Projects →
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me ✉
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://github.com/srushtigaikwad241"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a
           href="mailto:gaikwadsrushti@gmail.com"
            aria-label="Email"
          >
            Email
          </a>
        </motion.div>

      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
      >
        <span>Scroll to explore</span>
        <span>↓</span>
      </motion.a>

    </section>
  );
}

export default Hero;