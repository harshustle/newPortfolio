import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code2, MonitorPlay, Video, Cpu, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const serviceList = [
    { title: "AI VIDEO", icon: <Bot size={28} />, desc: "Hyper-realistic AI avatars for real estate scale.", cls: "large" },
    { title: "UGC AD CREATIVES", icon: <Video size={24} />, desc: "Direct-response video content for social dominance.", cls: "" },
    { title: "SOFTWARE ARCHITECTURE", icon: <Code2 size={24} />, desc: "High-end React/Next.js systems.", cls: "wide" },
    { title: "AUTOMATION", icon: <Cpu size={24} />, desc: "Backend infrastructure for manual-free agencies.", cls: "" },
    { title: "MARKETING SYSTEMS", icon: <MonitorPlay size={24} />, desc: "Integrated ecosystems for closing deals.", cls: "" }
  ];

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
          CORE<br/>CAPABILITIES.
        </h1>
        
        <div className="bento-grid">
          {serviceList.map((s, i) => (
             <motion.div 
                key={i} 
                className={`bento-card ${s.cls}`}
                whileHover={{ background: 'rgba(255,255,255,0.06)' }}
             >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                   <div className="card-icon" style={{ margin: 0 }}>{s.icon}</div>
                   <ArrowUpRight size={20} style={{ opacity: 0.2 }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{s.desc}</p>
             </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '8rem', padding: '8rem 4rem', background: '#fff', color: '#000', borderRadius: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.06em' }}>READY TO UPGRADE?</h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '2rem auto' }}>
            Transform your agency with AI, UGC, and custom software.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ background: '#000', color: '#fff', padding: '1.5rem 3rem', fontSize: '1.2rem' }}>Initiate Connect</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
