'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.grid}>

        {/* Left Column: Text and Stats */}
        <motion.div
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.greeting}>Hi I am</p>
          <h2 className={styles.name}>Shyamashree Das</h2>
          <h1 className={styles.role}>
            <TypeAnimation
              sequence={[
                'Software Developer',
                1000,
                'Full Stack Engineer',
                1000,
                'Creative Problem Solver',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className={styles.socials}>
            <a href="https://www.instagram.com/shyamashree4/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram size={18} /></a>
            <a href="https://www.linkedin.com/in/shyamashreedas1/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedinIn size={18} /></a>
            <a href="https://github.com/shyamaS7shree" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaGithub size={18} /></a>
          </div>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryBtn}>Hire Me</a>
            <a href="/Shyamashree_Das_Resume.pdf" download="Shyamashree_Das_Resume.pdf" className={styles.secondaryBtn}>Download CV</a>
          </div>

          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <h3>1.8+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <h3>15+</h3>
              <p>Projects Done</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Portrait */}
        <motion.div
          className={styles.rightColumn}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageContainer}>
            <img
              src="/own.png"
              alt="Portrait"
              className={styles.portrait}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
