'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe, and Postgres.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Chatbot Interface",
    description: "Modern chat UI with streaming responses and markdown support.",
    tech: ["React", "Framer Motion", "OpenAI API"],
    demo: "#",
    github: "#"
  },
  {
    title: "Portfolio Template",
    description: "The very site you are looking at right now, built with glassmorphism.",
    tech: ["Next.js", "Framer Motion", "CSS Modules"],
    demo: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="portfolio">
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.links}>
                <a href={project.github} className={styles.iconLink}><FaGithub size={20} /></a>
                <a href={project.demo} className={styles.iconLink}><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <p className={styles.projectDescription}>{project.description}</p>
            
            <div className={styles.techStack}>
              {project.tech.map((t, i) => (
                <span key={i} className={styles.techBadge}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
