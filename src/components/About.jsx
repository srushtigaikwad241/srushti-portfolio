import { motion } from "motion/react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">01 — ABOUT ME</span>

          <h2>
            Turning ideas into{" "}
            <span className="gradient-text">digital experiences.</span>
          </h2>

          <p>
            I'm a Computer Engineering student passionate about building
            practical software solutions and exploring modern technologies.
          </p>
        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-card about-main-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-number">01</div>

            <h3>Who I Am</h3>

<p>
  I’m a Computer Engineering student with a strong interest in
  software development and practical technology solutions. I enjoy
  building web applications, working with databases, exploring
  cybersecurity concepts, and applying data mining techniques to
  real-world problems.
</p>

<p>
  I believe the best way to grow as a developer is through hands-on
  experience. I continuously challenge myself with academic and
  personal projects, learn new technologies, and improve my
  problem-solving skills with every project I build.
</p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="about-number">02</div>

           <h3>What I Build</h3>

  <div className="about-list">
    <span>▹ Web Applications</span>
    <span>▹ Backend & Database Systems</span>
    <span>▹ Cybersecurity Projects</span>
    <span>▹ Data Mining Projects</span>
  </div>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="about-number">03</div>

            <h3>Currently Learning</h3>

  <div className="about-list">
    <span>▹ Advanced React</span>
    <span>▹ Node.js & Backend Development</span>
    <span>▹ Cloud Computing</span>
    <span>▹ Software Development Practices</span>
  </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
  
}


export default About;