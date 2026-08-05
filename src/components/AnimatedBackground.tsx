'use client';
import { motion } from 'framer-motion';
import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.orb1}
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0], 
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className={styles.orb2}
        animate={{ 
          x: [0, -100, 0], 
          y: [0, 100, 0], 
          scale: [1, 1.5, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
