'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Shyamashree's ability to design clean, high-performance API structures in ASP.NET Core while seamlessly connecting them to a fluid Next.js frontend was instrumental to our project's success. A highly skilled engineer who pays deep attention to architectural details.",
    author: "Rajesh Sen",
    role: "Senior Project Manager",
    company: "RS Consultancy",
    rating: 5,
    initials: "RS"
  },
  {
    quote: "Extremely reliable when it comes to automated workflows, backend database design, and cloud deployments. The bulk email engine was delivered with excellent optimization, handling high concurrency dispatching and bounce monitoring flawlessly.",
    author: "Amit Verma",
    role: "Technical Lead",
    company: "DevFlow Solutions",
    rating: 5,
    initials: "AV"
  },
  {
    quote: "A talented full-stack engineer who is passionate about code quality and performance. Shyamashree did an outstanding job setting up our enterprise dashboard, bringing clean C# API practices and robust Postgres optimizations.",
    author: "Priya Sharma",
    role: "Product Owner",
    company: "Shopore Store Enterprise",
    rating: 5,
    initials: "PS"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.sectionHeader}>
        <motion.span 
          className={styles.subTitle}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          WHAT THEY SAY
        </motion.span>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          TESTIMONIALS
        </motion.h2>
        <div className={styles.titleDivider}></div>
      </div>

      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.rating}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-color)" color="var(--accent-color)" />
                ))}
              </div>
              <Quote className={styles.quoteIcon} size={28} />
            </div>

            <p className={styles.quoteText}>"{item.quote}"</p>

            <div className={styles.authorInfo}>
              <div className={styles.avatar}>
                {item.initials}
              </div>
              <div className={styles.details}>
                <h4 className={styles.authorName}>{item.author}</h4>
                <p className={styles.authorRole}>
                  {item.role} <span className={styles.company}>@ {item.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
