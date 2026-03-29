import React from 'react';
import { motion } from 'framer-motion';

const Harsh = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { duration: 1 } }} 
      exit={{ opacity: 0 }}
      style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#0a0a0c', // Deep dark grey/black
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: '#fff',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
      </style>
      
      {/* Red Radial Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle, rgba(230, 20, 20, 0.45) 0%, rgba(200, 10, 10, 0) 65%)',
          filter: 'blur(60px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      ></div>

      {/* Bottom Red Glow */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '40vh',
          background: 'radial-gradient(ellipse at bottom, rgba(230, 20, 20, 0.45) 0%, rgba(200, 10, 10, 0) 70%)',
          filter: 'blur(80px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      ></div>

      {/* Massive Background Text - Lowercase like reference 'singer' */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: '100%',
          textAlign: 'center'
        }}
      >
        <h1 
          className="harsh-bg-text hide-on-mobile"
          style={{
            fontSize: 'clamp(8rem, 25vw, 25rem)',
            fontWeight: 800,
            margin: 0,
            lineHeight: 0.8,
            letterSpacing: '-0.07em',
            background: 'linear-gradient(to bottom, #ffffff 0%, #ffaaaa 40%, #cc0000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            whiteSpace: 'nowrap',
            opacity: 0.95
          }}
        >
          harsh
        </h1>
        {/* Mobile version of text spanning rows just in case */}
        <h1 
          style={{
            display: 'none',
            fontSize: 'clamp(4rem, 20vw, 8rem)',
            fontWeight: 800,
            lineHeight: 0.85,
            letterSpacing: '-0.07em',
            background: 'linear-gradient(to bottom, #ffffff 0%, #ffaaaa 40%, #cc0000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.95,
            margin: 0
          }}
          className="show-on-mobile-block"
        >
          harsh
        </h1>
      </div>

      {/* Script Text Overlay (like "New Album") */}
      <div 
        style={{
          position: 'absolute',
          zIndex: 4,
          top: '65%',
          right: 'clamp(5%, 15%, 25%)',
          transform: 'rotate(-7deg)'
        }}
      >
        <p style={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(3.5rem, 6vw, 6rem)',
          color: '#fff',
          margin: 0,
          textShadow: '0 4px 20px rgba(0,0,0,0.8)'
        }}>
          Automation
        </p>
      </div>

      {/* Layout Corners (Hidden on tiny mobile) */}
      <div className="hide-on-mobile" style={{ position: 'absolute', zIndex: 5, top: '4rem', left: '4rem', opacity: 0.8, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        2026 SERIES
      </div>
      <div className="hide-on-mobile" style={{ position: 'absolute', zIndex: 5, top: '4rem', right: '4rem', opacity: 0.8, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        LUCKNOW, IN
      </div>
      <div className="hide-on-mobile" style={{ position: 'absolute', zIndex: 5, bottom: '4rem', left: '4rem', opacity: 0.8, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
        Harsh Srivastav
      </div>
      
      {/* Needed for CSS toggles inside styled components without relying heavily on index.css */}
      <style>{`
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          .show-on-mobile-block { display: block !important; }
        }
      `}</style>
    </motion.div>
  );
};

export default Harsh;
