'use client';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navbar}>
        <div className={styles.logo}>
          Shyamashree<span className={styles.dot}>.</span>
        </div>
        
        <nav className={styles.links}>
          <a href="#home" className={styles.activeLink}>Home</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#about" className={styles.link}>About me</a>
          <a href="#portfolio" className={styles.link}>Portfolio</a>
          <a href="#contact" className={styles.link}>Contact me</a>
        </nav>
        
        <button className={styles.hireBtn}>Hire Me</button>
      </div>
    </motion.header>
  );
}
