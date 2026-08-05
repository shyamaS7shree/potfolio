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
          Shyamashree is a professional portfolio website where you will find great examples of web design and development. Each project is carefully crafted with modern technologies and beautiful user interfaces.
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
            <a href="#contact">Contact</a>
            <a href="#portfolio">Portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
