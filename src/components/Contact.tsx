'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <motion.div 
        className={styles.contactCard}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.subtitle}>Have an idea or a project in mind? Let's talk!</p>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" id="name" required placeholder=" " className={styles.input} />
            <label htmlFor="name" className={styles.label}>Your Name</label>
          </div>
          
          <div className={styles.inputGroup}>
            <input type="email" id="email" required placeholder=" " className={styles.input} />
            <label htmlFor="email" className={styles.label}>Your Email</label>
          </div>
          
          <div className={styles.inputGroup}>
            <textarea id="message" required rows={5} placeholder=" " className={styles.textarea}></textarea>
            <label htmlFor="message" className={styles.label}>Your Message</label>
          </div>
          
          <button type="button" className={styles.submitBtn}>
            Send Message <Send size={18} />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
