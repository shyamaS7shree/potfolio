'use client';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
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
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>GET IN TOUCH</span>
          <h2 className={styles.sectionTitle}>Let's Connect</h2>
          <div className={styles.titleDivider}></div>
        </div>
        <p className={styles.subtitle}>Have an idea or a project in mind? Let's talk!</p>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}><User size={18} /></span>
              <input type="text" id="name" required placeholder="John Doe" className={styles.input} />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Your Email</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}><Mail size={18} /></span>
              <input type="email" id="email" required placeholder="john@example.com" className={styles.input} />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Your Message</label>
            <div className={styles.inputWrapper}>
              <span className={styles.textareaIcon}><MessageSquare size={18} /></span>
              <textarea id="message" required rows={5} placeholder="Tell me about your project..." className={styles.textarea}></textarea>
            </div>
          </div>
          
          <button type="button" className={styles.submitBtn}>
            Send Message <Send size={18} />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
