import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Services = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="page-container"
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '6rem 1.5rem',
        background: 'var(--bg-color)'
      }}
    >
        {/* DESIGN 2: Premium Dark Mode with Original Capabilities */}
        <div 
          style={{
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '9/16',
            background: '#09090b',
            borderRadius: '32px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05) inset',
            display: 'flex',
            flexDirection: 'column',
            padding: '4rem 2.5rem',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
           {/* Ambient green glow */}
           <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '250px', height: '250px', background: '#00ff78', filter: 'blur(100px)', opacity: 0.08, borderRadius: '50%' }}></div>
           
           <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
               
               <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
                   <p style={{ color: '#00ff78', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Harshustle</p>
                   <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
                       CORE<br />SYSTEMS<span style={{ color: '#00ff78' }}>.</span>
                   </h1>
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', justifyContent: 'center', flex: 1 }}>
                   {[
                       { id: '01', title: 'AI VIDEO', sub: 'Hyper-realistic Avatars' },
                       { id: '02', title: 'UGC ADS', sub: 'Direct Response' },
                       { id: '03', title: 'SOFTWARE', sub: 'React & Next.js Systems' },
                       { id: '04', title: 'AUTOMATION', sub: 'Manual-free Workflows' },
                       { id: '05', title: 'MARKETING', sub: 'Conversion Ecosystems' }
                   ].map((s, i) => (
                       <div key={s.id} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', alignItems: 'center', gap: '1rem' }}>
                           <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: '1.2rem', fontWeight: 400, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{s.id}</div>
                           <div>
                               <h2 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.title}</h2>
                               <p style={{ color: '#00ff78', fontSize: '0.8rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginTop: '0.3rem', opacity: 0.9 }}>{s.sub}</p>
                           </div>
                       </div>
                   ))}
               </div>
               
           </div>
        </div>
    </motion.div>
  );
};

export default Services;
