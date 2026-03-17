import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, MonitorPlay, Code2, Bot, Video, Globe } from 'lucide-react';
import _CountUp from 'react-countup';

const CountUp = _CountUp.default || _CountUp;

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const previewProjects = [
    { title: "AI Automation Engine", type: "Automation", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "Real Estate Portal", type: "Website", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800" },
    { title: "Lead Generation CRM", type: "SaaS", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <motion.div 
      className="page-container"
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
    >
      {/* Massive Hero Section */}
      <section className="hero container">
        <motion.div className="hero-content" variants={stagger}>
          <motion.div variants={item} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
             <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>
               Available for Freelance
             </span>
          </motion.div>
          <motion.h1 className="hero-title" variants={item}>
            HARSHUSTLE<br/>
            <span className="text-secondary" style={{ opacity: 0.3 }}>DECODING</span> THE FUTURE<br/>
            OF <span className="text-gradient">
              <Typewriter
                words={['AI VIDEO', 'FULLSTACK', 'AUTOMATION']}
                loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1500}
              />
            </span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={item}>
            Harsh Srivastav. Engineer & Content Strategist building premium 
            digital experiences for the next generation of real estate agencies.
          </motion.p>
          <motion.div className="hero-buttons" variants={item} style={{ justifyContent: 'center' }}>
            <a href="/projects" className="btn btn-primary">
              View Architecture
            </a>
            <a href="/contact" className="btn btn-outline">
              Initiate Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Disciplines */}
      <section className="section container">
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>DISCIPLINES</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Where technical engineering meets creative execution.</p>
        </div>
        
        <div className="bento-grid">
          <div className="bento-card large">
            <div className="card-icon"><MonitorPlay size={24} /></div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>AI VIDEO PRODUCTION</h3>
            <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '500px' }}>
              We leverage hyper-realistic AI avatars and automated scripting pipelines to deliver thousands of personalized video touchpoints for real estate brokers.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
               <span className="project-tag">n8n</span>
               <span className="project-tag">Synthesia</span>
               <span className="project-tag">Python</span>
            </div>
          </div>
          
          <div className="bento-card">
            <div className="card-icon"><Code2 size={24} /></div>
            <h3>WEB ARCHITECTURE</h3>
            <p style={{ opacity: 0.7 }}>
              High-performance React/Next.js systems designed for maximum retention and conversion.
            </p>
          </div>
          
          <div className="bento-card">
            <div className="card-icon"><Bot size={24} /></div>
            <h3>SYSTEM DESIGN</h3>
            <p style={{ opacity: 0.7 }}>
              Building autonomous backend workflows that eliminate manual lead management.
            </p>
          </div>
          
          <div className="bento-card wide">
            <div className="card-icon"><Globe size={24} /></div>
            <h3>SCALABLE MARKETS</h3>
            <p style={{ opacity: 0.7 }}>
              Deploying infrastructure that grows as your agency expands into new territories.
            </p>
          </div>
        </div>
      </section>

      {/* High Contrast Preview */}
      <section className="section container">
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>SELECTED WORKS</h2>
              <p style={{ color: 'var(--text-secondary)' }}>A collection of production-ready systems.</p>
            </div>
            <a href="/projects" className="btn btn-outline" style={{ borderRadius: '12px' }}>Explore All</a>
         </div>
         <div className="ugc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {previewProjects.map((p, i) => (
              <motion.div 
                key={i} 
                className="bento-card" 
                style={{ height: '400px', padding: 0 }}
                whileHover={{ y: -10 }}
              >
                <img src={p.img} alt={p.title} className="project-thumb" style={{ height: '70%', margin: 0, width: '100%' }} />
                <div style={{ padding: '2rem' }}>
                   <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.4 }}>{p.type}</span>
                   <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{p.title}</h3>
                </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Extreme Stats */}
      <section className="container">
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-value"><CountUp end={14} suffix="+" duration={3} /></div>
            <div className="stat-label">Architected</div>
          </div>
          <div className="stat-item">
            <div className="stat-value"><CountUp end={900} suffix="+" duration={3} /></div>
            <div className="stat-label">Deployments</div>
          </div>
          <div className="stat-item">
            <div className="stat-value"><CountUp end={85} suffix="+" duration={3} /></div>
            <div className="stat-label">Global Partners</div>
          </div>
        </div>
      </section>
      
    </motion.div>
  );
};

export default Home;
