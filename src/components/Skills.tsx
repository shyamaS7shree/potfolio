'use client';

import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiSharp, 
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, 
  SiDotnet, SiNodedotjs, SiExpress, SiJsonwebtokens, 
  SiPostgresql, SiMysql, SiSupabase, 
  SiDocker, SiKubernetes, 
  SiGit, SiGithub, SiSwagger 
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa6';
import { TbApi, TbBrandAzure } from 'react-icons/tb';
import styles from './Skills.module.css';

// 1. Full list of skills from resume with branding colors and logos
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C#", icon: SiSharp, color: "#854cc7", glow: "rgba(133, 76, 199, 0.4)" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", glow: "rgba(247, 223, 30, 0.3)" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6", glow: "rgba(49, 120, 198, 0.4)" },
      { name: "Java", icon: FaJava, color: "#e76f51", glow: "rgba(231, 111, 81, 0.4)" },
      { name: "SQL", icon: FaDatabase, color: "#00599c", glow: "rgba(0, 89, 156, 0.4)" },
      { name: "HTML", icon: SiHtml5, color: "#e34f26", glow: "rgba(227, 79, 38, 0.4)" },
      { name: "CSS", icon: SiCss, color: "#1572b6", glow: "rgba(21, 114, 182, 0.4)" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", glow: "rgba(255, 255, 255, 0.3)" },
      { name: "React.js", icon: SiReact, color: "#61dafb", glow: "rgba(97, 218, 251, 0.4)" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", glow: "rgba(6, 182, 212, 0.4)" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3", glow: "rgba(121, 82, 179, 0.4)" }
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "ASP.NET Core", icon: SiDotnet, color: "#512bd4", glow: "rgba(81, 43, 212, 0.4)" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", glow: "rgba(51, 153, 51, 0.4)" },
      { name: "Express", icon: SiExpress, color: "#e2e8f0", glow: "rgba(226, 232, 240, 0.3)" },
      { name: "REST APIs", icon: TbApi, color: "#10b981", glow: "rgba(16, 185, 129, 0.4)" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff", glow: "rgba(214, 58, 255, 0.4)" }
    ]
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "SQL Server", icon: FaDatabase, color: "#cc292b", glow: "rgba(204, 41, 43, 0.4)" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", glow: "rgba(65, 105, 225, 0.4)" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1", glow: "rgba(68, 121, 161, 0.4)" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e", glow: "rgba(62, 207, 142, 0.4)" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure", icon: TbBrandAzure, color: "#0089d6", glow: "rgba(0, 137, 214, 0.4)" },
      { name: "Docker", icon: SiDocker, color: "#2496ed", glow: "rgba(36, 150, 237, 0.4)" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5", glow: "rgba(50, 108, 229, 0.4)" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032", glow: "rgba(240, 80, 50, 0.4)" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff", glow: "rgba(255, 255, 255, 0.3)" },
      { name: "Swagger", icon: SiSwagger, color: "#85ea2d", glow: "rgba(133, 234, 45, 0.4)" }
    ]
  }
];

export default function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.sectionHeader}>
        <motion.span 
          className={styles.subTitle}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          EXPERTISE & TOOLS
        </motion.span>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My Skills
        </motion.h2>
        <div className={styles.titleDivider}></div>
      </div>

      {/* Grid wrapper spanning full width */}
      <motion.div 
        className={styles.skillsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex} 
            className={styles.skillCategoryCard}
            variants={itemVariants}
          >
            <h3 className={styles.categoryHeader}>
              <span>{category.title}</span>
              <span className={styles.categoryCount}>({category.skills.length})</span>
            </h3>
            
            <div className={styles.badgesContainer}>
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div 
                    key={skillIndex} 
                    className={styles.skillBadge}
                    whileHover={{ 
                      scale: 1.06,
                      y: -3,
                      boxShadow: `0 8px 24px -4px ${skill.glow}`,
                      borderColor: skill.color
                    }}
                    style={{
                      '--hover-color': skill.color
                    } as React.CSSProperties}
                  >
                    <IconComponent 
                      className={styles.badgeIcon} 
                      style={{ color: skill.color }}
                    />
                    <span className={styles.badgeName}>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
