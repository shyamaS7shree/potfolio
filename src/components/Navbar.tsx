'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
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
          
          {/* Desktop Nav Links */}
          <nav className={styles.links}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className={link.href === '#home' ? styles.activeLink : styles.link}>
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Desktop Hire Me button */}
          <a href="#contact" className={styles.hireBtn}>Hire Me</a>

          {/* Hamburger Menu Trigger for Mobile */}
          <button className={styles.menuTrigger} onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Side Panel Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            {/* Side Panel Drawer */}
            <motion.div 
              className={styles.sidePanel}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className={styles.sidePanelHeader}>
                <div className={styles.logo}>
                  Shyamashree<span className={styles.dot}>.</span>
                </div>
                <button className={styles.closeBtn} onClick={toggleMenu} aria-label="Close Menu">
                  <X size={24} />
                </button>
              </div>

              <nav className={styles.mobileLinks}>
                {navLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    className={styles.mobileLink} 
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" className={styles.mobileHireBtn} onClick={toggleMenu}>
                  Hire Me
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
