import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    id: 1,
    title: "THE\nVISION",
    subtitle: "HARSHUSTLE FOUNDER",
    text: "Building the future of Full-Stack Ecosystems & AI Infrastructure.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 2,
    title: "AI\nAVATARS",
    subtitle: "HYPER-REALISTIC",
    text: "Infinite scalability for real estate and brands using AI clones.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 3,
    title: "UGC\nCREATIVES",
    subtitle: "DIRECT RESPONSE",
    text: "High-converting short-form content designed purely to print cash.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 4,
    title: "WORKFLOW\nAUTO",
    subtitle: "MANUAL-FREE",
    text: "Backend AI systems that run your agency while you sleep.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 5,
    title: "PROVEN\nSYSTEMS",
    subtitle: "THE ARCHITECTURE",
    text: "React, Next.js, and complex workflow pipelines engineered for speed.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 6,
    title: "CLIENT\nRESULTS",
    subtitle: "PERFORMANCE",
    text: "We scaled a $50k/mo agency's backend using zero-touch automations.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 7,
    title: "SOCIAL\nPROOF",
    subtitle: "WHAT THEY SAY",
    text: "\"Harshustle completely replaced our manual outreach... 10/10 execution.\"",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 8,
    title: "OUR\nPROCESS",
    subtitle: "HOW IT WORKS",
    text: "1. Audit Architecture\n2. Integrate Workflows\n3. Deploy Lead Gen",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 9,
    title: "AGENCY\nF.A.Q.",
    subtitle: "COMMON QUESTIONS",
    text: "Do you need coding skills to use our systems? No. We handle everything.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fefdff 60%, #f0e6ff 100%)"
  },
  {
    id: 10,
    title: "INITIATE\nUPGRADE",
    subtitle: "LET'S BUILD",
    text: "Ready to scale your systems? DM me the word 'SYSTEM' to start.",
    accent: "#9f5aff",
    bg: "linear-gradient(160deg, #ffffff 0%, #fdfcff 20%, #ebe2ff 80%, #a476ff 100%)"
  }
];

const Edit = () => {
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#f8f7f5', 
      padding: '6rem 2rem',
      color: '#111',
      fontFamily: '"Inter", sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.04em', color: '#162e54' }}>INSTAGRAM <span style={{ color: '#9f5aff', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>HIGHLIGHTS</span></h1>
        <p style={{ color: 'rgba(0,0,0,0.5)', marginTop: '0.5rem' }}>Screenshot these 9:16 story cards to post and generate inbound leads.</p>
      </div>

      <div style={{
        display: 'flex',
        gap: '2rem',
        overflowX: 'auto',
        paddingBottom: '4rem',
        paddingInline: '2rem',
        snapType: 'x mandatory'
      }}>
        {highlights.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -10 }}
            style={{
              flex: '0 0 auto',
              width: '380px', // Standard mobile width
              aspectRatio: '9/16',
              background: item.bg,
              borderRadius: '32px',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              padding: '3rem 2.5rem',
              snapAlign: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Minimalist Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '1rem', marginBottom: 'auto' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', opacity: 0.5, color: '#162e54' }}>
                {String(item.id).padStart(2, '0')} / {String(highlights.length).padStart(2, '0')}
              </span>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.accent, boxShadow: '0 0 10px ' + item.accent }}></div>
            </div>

            {/* Core Typography */}
            <div style={{ margin: 'auto 0' }}>
              <p style={{ color: '#162e54', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>
                {item.subtitle}
              </p>
              <h2 style={{ 
                color: item.accent,
                fontSize: 'clamp(3rem, 10vw, 4rem)', 
                fontWeight: 900, 
                lineHeight: 0.9, 
                letterSpacing: '-0.05em',
                whiteSpace: 'pre-line',
                textTransform: 'uppercase'
              }}>
                {item.title}
              </h2>
            </div>

            {/* Bottom Copy */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.5, color: 'rgba(0,0,0,0.6)' }}>
                {item.text}
              </p>
              {item.id === highlights.length && (
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: item.accent,
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 800,
                  borderRadius: '12px',
                  letterSpacing: '0.05em'
                }}>
                  SEND ME A MESSAGE
                </div>
              )}
            </div>
            
            {/* Subtle glow orb */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              background: item.accent,
              filter: 'blur(120px)',
              opacity: 0.15,
              pointerEvents: 'none'
            }}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Edit;
