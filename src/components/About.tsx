'use client';
import { motion } from 'framer-motion';
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
        <div className={styles.content}>
          <p>
            Software Engineer with experience building scalable full-stack applications using Next.js, ASP.NET Core, Node.js, PostgreSQL, and SQL Server. Skilled in designing secure REST APIs, workflow automation, and database-driven systems for enterprise applications.
          </p>
          <p>
            Familiar with Docker, Kubernetes, Jenkins, and Microsoft Azure, with a strong interest in building cloud-native applications and modern deployment pipelines. Committed to writing clean, maintainable code and continuously improving software performance and reliability.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
