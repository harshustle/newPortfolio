import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const aiVideos = [
  {
    title: "AI AVATAR — REALTOR",
    type: "AI UGC",
    cloudName: "dobulag2p",
    publicId: "Edited_wlnmjv",
  },
  {
    title: "AI AVATAR — PROMO",
    type: "AI UGC",
    cloudName: "dobulag2p",
    publicId: "0404_itrkrs",
  },
];

const irlVideos = [
  { title: "LUXURY CONDO TOUR", type: "IRL", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" },
  { title: "NEIGHBORHOOD GUIDE", type: "IRL", img: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=800" },
];

const CloudinaryPlayer = ({ cloudName, publicId, title }) => {
  const src = `https://player.cloudinary.com/embed/?cloud_name=${cloudName}&public_id=${publicId}&controls=true&autoplay=false&loop=false&muted=false`;
  return (
    <iframe
      src={src}
      title={title}
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '32px',
      }}
    />
  );
};

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const UGCVideos = () => {
  return (
    <motion.div
      className="page-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <section className="section container" style={{ paddingTop: '10rem' }}>
        <h1 className="hero-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
          CONTENT<br />LABORATORY.
        </h1>

        {/* AI UGC Videos */}
        <div style={{ marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', opacity: 0.5, marginBottom: '2rem' }}>
            ── AI UGC
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2.5rem',
              maxWidth: '900px',
            }}
          >
            {aiVideos.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  paddingTop: '177.78%', /* 9:16 */
                  borderRadius: '32px',
                  overflow: 'hidden',
                  background: '#111',
                  boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
                }}
              >
                <CloudinaryPlayer
                  cloudName={v.cloudName}
                  publicId={v.publicId}
                  title={v.title}
                />
                {/* Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem 1.8rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }}
                >
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', opacity: 0.6 }}>
                    {v.type}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginTop: '0.3rem' }}>{v.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IRL Videos */}
        <div>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', opacity: 0.5, marginBottom: '2rem' }}>
            ── IRL
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '2.5rem',
              maxWidth: '900px',
            }}
          >
            {irlVideos.map((v, i) => (
              <motion.div
                key={i}
                className="ugc-card"
                style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative', borderRadius: '32px' }}
                whileHover={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={v.img}
                  alt={v.title}
                  className="ugc-thumb"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="ugc-overlay" style={{ padding: '2.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', opacity: 0.6 }}>
                    {v.type}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Play size={16} fill="#000" color="#000" />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{v.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default UGCVideos;
