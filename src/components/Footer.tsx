import styles from './Footer.module.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          Shyamashree<span className={styles.dot}>.</span>
        </div>
        <p className={styles.tagline}>
          A passionate Software Engineer specializing in building premium full-stack web applications, secure REST APIs, and automated enterprise workflows. Committed to clean code, performance optimization, and robust cloud deployments.
        </p>
        
        <div className={styles.socials}>
          <a href="https://www.instagram.com/shyamashree4/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram size={16} /></a>
          <a href="https://www.linkedin.com/in/shyamashreedas1/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedinIn size={16} /></a>
          <a href="https://github.com/shyamaS7shree" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaGithub size={16} /></a>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <div className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} <span className={styles.brandName}>Shyamashree</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
