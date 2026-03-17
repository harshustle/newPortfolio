import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const UGCVideos = () => {
  const videosData = [
    { title: "AI BROKER AVATAR", type: "AI", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "LUXURY CONDO TOUR", type: "IRL", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" },
    { title: "MARKET REVIEW", type: "AI", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800" },
    { title: "NEIGHBORHOOD GUIDE", type: "IRL", img: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=800" }
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
          CONTENT<br/>LABORATORY.
        </h1>
        
        <div className="ugc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
          {videosData.map((v, i) => (
            <motion.div 
                key={i} 
                className="ugc-card" 
                style={{ aspect_ratio: '9/16', overflow: 'hidden', position: 'relative', borderRadius: '32px' }}
                whileHover={{ scale: 0.98 }}
            >
              <img src={v.img} alt={v.title} className="ugc-thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="ugc-overlay" style={{ padding: '2.5rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.6 }}>{v.type}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={16} fill="#000" color="#000" />
                   </div>
                   <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{v.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default UGCVideos;
