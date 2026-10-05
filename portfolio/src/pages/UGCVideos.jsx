import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const aiVideos = [
  {
    title: "AI UGC — Creative 01",
    cat: "AI UGC",
    cloudName: "dobulag2p",
    publicId: "Ai_ugc_10_ygvpdh",
  },
  {
    title: "AI UGC — Creative 02",
    cat: "AI UGC",
    cloudName: "dobulag2p",
    publicId: "ai_ugc_9_ovpev5",
  },
  {
    title: "AI Avatar — Realtor Campaign",
    cat: "AI AVATAR",
    cloudName: "dobulag2p",
    publicId: "Edited_wlnmjv",
  },
  {
    title: "AI Avatar — Promo Asset",
    cat: "AI PROMO",
    cloudName: "dobulag2p",
    publicId: "0404_itrkrs",
  },
];

const irlVideos = [
  {
    title: "Luxury Estate Walkthrough 01",
    cat: "IRL SHOOT",
    cloudName: "dobulag2p",
    publicId: "7_lpgoxu",
  },
  {
    title: "Luxury Estate Walkthrough 02",
    cat: "IRL SHOOT",
    cloudName: "dobulag2p",
    publicId: "8_l0wsbr",
  },
  {
    title: "Luxury Condo Tour",
    cat: "IRL SHOOT",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Neighborhood Editorial Guide",
    cat: "IRL SHOOT",
    img: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=800"
  },
];

const MinimalPlayerCard = ({ v, idx }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const posterUrl = v.publicId
    ? `https://res.cloudinary.com/dobulag2p/video/upload/so_2,w_600,c_fill,ar_9:16/${v.publicId}.jpg`
    : (v.img || 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800');

  const videoUrl = v.publicId
    ? `https://res.cloudinary.com/dobulag2p/video/upload/q_auto:eco,vc_h264,w_480/${v.publicId}.mp4`
    : null;

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <motion.div
      key={idx}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onClick={toggleSound}
      onMouseEnter={() => {
        if (videoRef.current && videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
        }
      }}
      style={{
        position: 'relative',
        paddingTop: '177.78%',
        borderRadius: '18px',
        overflow: 'hidden',
        background: '#151a1e',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
        cursor: 'pointer',
        border: '1px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          playsInline
          loop
          muted
          autoPlay
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <img
          src={posterUrl}
          alt={v.title}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      {/* Bottom Blue Audio / Controller Pill - ZERO PLAY ICONS */}
      <div style={{
        position: 'absolute',
        bottom: '0.65rem',
        left: '0.65rem',
        right: '0.65rem',
        background: '#2b59ff',
        borderRadius: '10px',
        padding: '0.42rem 0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ffffff',
        boxShadow: '0 4px 16px rgba(43, 89, 255, 0.35)',
        zIndex: 4,
        pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 800, fontFamily: 'monospace' }}>
          <span>{v.duration || '0:34'}</span>
        </div>

        {/* Waveform / Scrubber dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', opacity: 0.9 }}>
          <span style={{ width: '10px', height: '2px', background: '#ffffff', borderRadius: '1px' }}></span>
          <span style={{ width: '4px', height: '4px', background: '#ffffff', borderRadius: '50%' }}></span>
          <span style={{ width: '14px', height: '2px', background: '#ffffff', borderRadius: '1px' }}></span>
          <span style={{ width: '4px', height: '4px', background: '#ffffff', borderRadius: '50%' }}></span>
          <span style={{ width: '8px', height: '2px', background: '#ffffff', borderRadius: '1px' }}></span>
        </div>

        {/* Options dots */}
        <div style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em', opacity: 0.9 }}>
          •••
        </div>
      </div>
    </motion.div>
  );
};

const UGCVideos = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const easeTransition = [0.16, 1, 0.3, 1];

  const pillAnim = {
    initial: { opacity: 0, y: 15, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, ease: easeTransition, delay: 0.1 } }
  };

  const titleAnim = {
    initial: { opacity: 0, y: 25, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: easeTransition, delay: 0.22 } }
  };

  const subtitleAnim = {
    initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: easeTransition, delay: 0.38 } }
  };

  return (
    <motion.div
      className="page-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ background: 'transparent', color: 'var(--text-primary)' }}
    >
      {/* ── EDITORIAL HERO ── */}
      <section className="hero-ref-container" style={{ paddingBottom: '3rem' }}>
        <div className="hero-ref-content">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={pillAnim}
            className="hero-ref-pill"
          >
            <span className="hero-ref-dot" />
            <span className="hero-ref-pill-text">Video Asset Library • AI UGC & On-Location Production</span>
          </motion.div>

          <motion.h1 
            initial="initial"
            animate="animate"
            variants={titleAnim}
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(2.8rem, 6.8vw, 5.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              textAlign: 'center',
              margin: '0 auto 1.5rem auto',
            }}
          >
            Content in <br />
            <span className="serif-italic highlight-purple">high gear.</span>
          </motion.h1>

          <motion.p 
            initial="initial"
            animate="animate"
            variants={subtitleAnim}
            className="hero-ref-subtitle"
          >
            Minimal, distraction-free video catalog designed for high conversion across social ad channels.
          </motion.p>
        </div>
      </section>

      {/* ── AI UGC VIDEOS ── */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '0.5rem' }}>
            — Autonomous Human Capital
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            AI Generated <span className="serif-italic" style={{ color: '#2e6347' }}>UGC Assets.</span>
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {aiVideos.map((v, i) => (
            <MinimalPlayerCard key={i} v={v} idx={i} />
          ))}
        </div>
      </section>

      {/* ── IRL REAL PRODUCTION ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '0.5rem' }}>
            — On-Location Direction
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Cinematic <span className="serif-italic" style={{ color: '#2e6347' }}>IRL Shoots.</span>
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {irlVideos.map((v, i) => (
            <MinimalPlayerCard key={i} v={v} idx={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Link
            to="/contact"
            className="hero-ref-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#2e6347',
              color: '#ffffff',
              padding: '1.1rem 2.8rem',
              borderRadius: '99px',
              textDecoration: 'none',
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(46, 99, 71, 0.35)',
            }}
          >
            <span>BOOK A CONTENT PRODUCTION</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default UGCVideos;
