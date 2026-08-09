'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Layers, ShoppingCart } from 'lucide-react';
import { FaGithub, FaDatabase } from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiPostgresql, SiSupabase, SiNodedotjs, 
  SiTailwindcss, SiDotnet, SiRazorpay, SiBrevo, SiGoogleappsscript, SiPostman
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import styles from './Projects.module.css';

const projects = [
  {
    title: "SMTP MANAGER",
    description: "An enterprise-grade bulk mail engine featuring real-time tracking, automatic bounce detection, high-concurrency dispatching, and Brevo SMTP integration. Verified with Postman.",
    icon: Mail,
    gradient: "linear-gradient(135deg, #0055ff 0%, #8b5cf6 100%)",
    image: "/projects/smtp_master.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Brevo SMTP", "Postman", "REST APIs"],
    demo: "https://smtp-manager.vercel.app/",
    backend: "https://smtp-backend-api.onrender.com/",
    github: "https://github.com/shyamaS7shree/Smtp-manager"
  },
  {
    title: "WORKBOARD",
    description: "A secure, real-time enterprise management portal for automating ticketing, purchase orders, and team workflow. Built with an ASP.NET Core C# API backend and a Next.js frontend.",
    icon: Layers,
    gradient: "linear-gradient(135deg, #00e5ff 0%, #0055ff 100%)",
    image: "/projects/workboard.png",
    tech: ["Next.js", "Tailwind CSS", "ASP.NET Core", "SQL Server", "REST APIs"],
    demo: "https://rsklive.com/workboard/dashboard/",
    github: "https://github.com/RS-ConsultancyKolkata/workboard"
  },
  {
    title: "SHOPORE STORE",
    description: "A premium e-commerce storefront with instant checkout, real-time stock sync, and automated email notifications. Powered by a Next.js frontend, an ASP.NET Core C# backend, and Supabase.",
    icon: ShoppingCart,
    gradient: "linear-gradient(135deg, #ff0055 0%, #ff5f00 100%)",
    image: "/projects/shopore_store.jpg",
    tech: ["Next.js", "ASP.NET Core", "Supabase", "Razorpay", "Resend", "REST APIs"],
    demo: "https://shoporestore.vercel.app/",
    github: "https://github.com/shyamaS7shree/Shoporestore"
  }
];

const getTechIconDetails = (techName: string) => {
  switch (techName.toLowerCase()) {
    case 'next.js':
      return { icon: SiNextdotjs, color: '#ffffff' };
    case 'typescript':
      return { icon: SiTypescript, color: '#3178c6' };
    case 'postgresql':
      return { icon: SiPostgresql, color: '#4169e1' };
    case 'supabase':
      return { icon: SiSupabase, color: '#3ecf8e' };
    case 'node.js':
      return { icon: SiNodedotjs, color: '#339933' };
    case 'tailwind css':
      return { icon: SiTailwindcss, color: '#06b6d4' };
    case 'asp.net core':
      return { icon: SiDotnet, color: '#512bd4' };
    case 'sql server':
      return { icon: FaDatabase, color: '#e44f32' };
    case 'razorpay':
      return { icon: SiRazorpay, color: '#00e5ff' };
    case 'rest apis':
      return { icon: TbApi, color: '#10b981' };
    case 'brevo smtp':
      return { icon: SiBrevo, color: '#00b887' };
    case 'resend':
      return { icon: Mail, color: '#ff5f00' };
    case 'google apps script':
      return { icon: SiGoogleappsscript, color: '#1a73e8' };
    case 'postman':
      return { icon: SiPostman, color: '#ff6c37' };
    default:
      return null;
  }
};

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="portfolio">
      <div className={styles.sectionHeader}>
        <motion.span 
          className={styles.subTitle}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CREATIVE PORTFOLIO
        </motion.span>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          FEATURED PROJECTS
        </motion.h2>
        <div className={styles.titleDivider}></div>
      </div>
      
      <div className={styles.grid}>
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div 
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.imageContainer}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage} 
                  />
                ) : (
                  <div className={styles.projectGradientBg} style={{ background: project.gradient }}>
                    <IconComponent className={styles.projectIcon} size={44} />
                  </div>
                )}
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => {
                    const iconDetails = getTechIconDetails(t);
                    return (
                      <span key={i} className={styles.techBadge}>
                        {iconDetails && (
                          <iconDetails.icon 
                            size={12} 
                            className={styles.techIcon} 
                            style={{ color: iconDetails.color }} 
                          />
                        )}
                        {t.toUpperCase()}
                      </span>
                    );
                  })}
                </div>
                
                <div className={styles.projectLinks}>
                  <a href={project.github} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={16} /> GITHUB
                  </a>
                  {project.backend && (
                    <a href={project.backend} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> BACKEND
                    </a>
                  )}
                  <a href={project.demo} className={styles.linkBtnPrimary} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> LIVE DEMO
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
