'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  { category: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { category: "Frameworks", items: ["React", "Next.js", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Supabase", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code"] }
];

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      
      <div className={styles.grid}>
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index}
            className={styles.skillCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
            <div className={styles.badges}>
              {skillGroup.items.map((item, i) => (
                <span key={i} className={styles.badge}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
