'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus('error');
      setStatusMessage('Web3Forms Access Key is missing! Please get a free key at web3forms.com and add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your .env.local file.');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setStatusMessage(data.message || 'Something went wrong. Please try again.');
        
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 6000);
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatus('error');
      setStatusMessage('Network error. Please check your internet connection and try again.');
      
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 6000);
    }
  };

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
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}><User size={18} /></span>
              <input 
                type="text" 
                id="name" 
                required 
                placeholder="Enter your name" 
                className={styles.input} 
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === 'sending'}
              />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Your Email</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}><Mail size={18} /></span>
              <input 
                type="email" 
                id="email" 
                required 
                placeholder="Enter your email" 
                className={styles.input} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'sending'}
              />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Your Message</label>
            <div className={styles.inputWrapper}>
              <span className={styles.textareaIcon}><MessageSquare size={18} /></span>
              <textarea 
                id="message" 
                required 
                rows={5} 
                placeholder="Tell me about your project..." 
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === 'sending'}
              ></textarea>
            </div>
          </div>
          
          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                Sending... <Loader2 size={18} className={styles.spinner} />
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>

        {statusMessage && (
          <div className={`${styles.statusAlert} ${status === 'success' ? styles.successAlert : styles.errorAlert}`}>
            {status === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span>{statusMessage}</span>
          </div>
        )}
      </motion.div>
    </section>
  );
}
