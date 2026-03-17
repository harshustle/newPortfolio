import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="page-container"
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
    >
      <section className="section container" style={{ paddingTop: '10rem' }}>
        <h1 className="hero-title" style={{ textAlign: 'left', marginBottom: '4rem' }}>
          THE ARCHITECT.<br/>HARSH S.
        </h1>
        
        <div className="bento-grid">
          <div className="bento-card large">
            <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem' }}>BACKGROUND</h3>
            <p style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.6 }}>
              Harsh Srivastav is a 21-year-old Full-Stack Engineer and AI Content Architect based in India. 
              Specializing in the intersection of autonomous systems and high-end digital production.
            </p>
            <p style={{ fontSize: '1.25rem', opacity: 0.7, lineHeight: 1.6, marginTop: '2rem' }}>
              Currently perfecting the "Lead Generation Machine" for luxury real estate agencies globally.
            </p>
          </div>

          <div className="bento-card">
            <h3>TECH STACK</h3>
            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.6 }}>
              <li>REACT / NEXT.JS</li>
              <li>NODE.JS / N8N</li>
              <li>PYTHON / AI MODELS</li>
              <li>POSTGRESQL / ZAPIER</li>
            </ul>
          </div>

          <div className="bento-card wide">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>EDUCATION</h3>
                   <p style={{ opacity: 0.6, marginTop: '0.5rem' }}>B.Tech in Information Technology</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <span style={{ fontSize: '2.5rem', fontWeight: 900, opacity: 0.2 }}>2025</span>
                </div>
             </div>
          </div>
        </div>

        <div style={{ marginTop: '8rem', maxWidth: '800px' }}>
           <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>PHILOSOPHY</h2>
           <p style={{ fontSize: '1.5rem', opacity: 0.8, lineHeight: 1.5 }}>
             I believe that in the age of AI, the only way to stand out is through **extreme technical stability combined with authentic, human-centric design.** Every line of code I write and every video I generate is architected for one purpose: **Result-driven dominance.**
           </p>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
