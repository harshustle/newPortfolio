import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const BackgroundWrapper = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div 
        className="scroll-progress" 
        style={{ 
          scaleX, 
          height: '2px', 
          background: '#fff', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 2000, 
          transformOrigin: '0%' 
        }} 
      />
      <div className="bg-wrapper">
        <motion.div 
          className="bg-shape bg-shape-1"
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
          style={{ 
            position: 'absolute', 
            width: '600px', 
            height: '600px', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)', 
            filter: 'blur(100px)',
            top: '-200px',
            left: '-200px'
          }}
        />
        <motion.div 
          className="bg-shape bg-shape-2"
          animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
          transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
          style={{ 
            position: 'absolute', 
            width: '500px', 
            height: '500px', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)', 
            filter: 'blur(100px)',
            bottom: '-100px',
            right: '-100px'
          }}
        />
      </div>
    </>
  );
};

export default BackgroundWrapper;
