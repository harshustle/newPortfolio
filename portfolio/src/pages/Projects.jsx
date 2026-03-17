import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    { 
      title: "AI VIDEO ENGINE", 
      desc: "An autonomous pipeline using n8n and AI avatar APIs to generate property walkthroughs.", 
      tags: ["n8n", "AI", "Python"], 
      img: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=1000", 
      cls: "large" 
    },
    { 
      title: "LEADGEN PORTAL", 
      desc: "Premium real estate lead management system.", 
      tags: ["React", "PostgreSQL"], 
      img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1000", 
      cls: "" 
    },
    { 
      title: "AD SCHEDULER", 
      desc: "Automated distribution for UGC assets.", 
      tags: ["Zapier", "Meta API"], 
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000", 
      cls: "wide" 
    },
    { 
      title: "AGENCY UI", 
      desc: "Minimalist high-converting agency template.", 
      tags: ["Next.js"], 
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000", 
      cls: "" 
    }
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
          SELECTED<br/>ARCHITECTURES.
        </h1>
        
        <div className="bento-grid">
          {projectsData.map((p, i) => (
            <motion.div 
              key={i} 
              className={`bento-card ${p.cls}`}
              whileHover={{ y: -5 }}
            >
              <img src={p.img} alt={p.title} className="project-thumb" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                 <div>
                   <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem' }}>{p.title}</h3>
                   <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{p.desc}</p>
                 </div>
                 <ArrowUpRight size={24} style={{ opacity: 0.3 }} />
              </div>
              <div className="project-tags">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="project-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
