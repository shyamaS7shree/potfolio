'use client';

import { motion } from 'framer-motion';
import { FiLayers, FiZap, FiCpu, FiDatabase } from 'react-icons/fi';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <motion.div 
        className={styles.aboutCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.bioCardContent}>
          <h3 className={styles.greeting}>Hi, I'm <span className={styles.nameHighlight}>Shyamashree Das</span> 👋</h3>
          <p>
            Software Engineer with experience building scalable full-stack applications using Next.js, ASP.NET Core, Node.js, PostgreSQL, and SQL Server. Skilled in designing secure REST APIs, workflow automation, and database-driven systems for enterprise applications.
          </p>
          <p>
            Proficient in containerizing and orchestrating services with Docker and Kubernetes, and building robust modern deployment pipelines on Microsoft Azure. Committed to writing clean, maintainable code and continuously improving software performance and reliability.
          </p>

          {/* High-impact Core Pillars Grid */}
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarItem}>
              <div className={`${styles.pillarIcon} ${styles.iconCreative}`}>
                <FiLayers />
              </div>
              <div className={styles.pillarText}>
                <h4>Frontend Architecture</h4>
                <p>High-fidelity responsive UI & fluid user interactions</p>
              </div>
            </div>
            
            <div className={styles.pillarItem}>
              <div className={`${styles.pillarIcon} ${styles.iconHardworking}`}>
                <FiZap />
              </div>
              <div className={styles.pillarText}>
                <h4>Backend Engineering</h4>
                <p>Secure, high-throughput REST APIs & automated workflows</p>
              </div>
            </div>

            <div className={styles.pillarItem}>
              <div className={`${styles.pillarIcon} ${styles.iconLearning}`}>
                <FiCpu />
              </div>
              <div className={styles.pillarText}>
                <h4>Infrastructure & DevOps</h4>
                <p>Containerization, orchestration, and Azure cloud integration</p>
              </div>
            </div>

            <div className={styles.pillarItem}>
              <div className={`${styles.pillarIcon} ${styles.iconSolver}`}>
                <FiDatabase />
              </div>
              <div className={styles.pillarText}>
                <h4>Database & Systems</h4>
                <p>Optimized data models in PostgreSQL & SQL Server</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
