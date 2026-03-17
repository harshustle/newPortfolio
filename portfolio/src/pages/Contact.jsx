import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="page-container"
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
    >
      <section className="section container" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <h1 className="hero-title">INITIATE<br/>CONNECT.</h1>
        <p className="hero-subtitle">
          Ready to architect the next era of your brand? Let's discuss your requirements.
        </p>

        <form className="contact-form" style={{ maxWidth: '800px', textAlign: 'left', marginTop: '4rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="form-group">
              <span style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Your Name</span>
              <input type="text" placeholder="John Doe" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', borderRadius: 0, padding: '1rem 0', marginTop: '0.5rem' }} required />
            </div>
            <div className="form-group">
              <span style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Email Address</span>
              <input type="email" placeholder="john@example.com" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', borderRadius: 0, padding: '1rem 0', marginTop: '0.5rem' }} required />
            </div>
          </div>
          <div className="form-group" style={{ marginTop: '3rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Project Description</span>
            <textarea placeholder="Tell us about your brand goals..." rows="4" style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', borderRadius: 0, padding: '1rem 0', marginTop: '0.5rem', resize: 'none' }} required></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ marginTop: '4rem', padding: '1.5rem 3rem', width: '100%', borderRadius: '12px', fontSize: '1.2rem' }}>
            SUBMIT PROJECT INQUIRY
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
