import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
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
      style={{
        minHeight: '100vh',
        background: 'transparent',
        color: 'var(--text-primary)'
      }}
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
            <span className="hero-ref-pill-text">Specialized Offerings • End-to-End Execution</span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={titleAnim}
            className="hero-ref-title"
          >
            Core systems <br />
            <span className="hero-ref-title-accent">built for results.</span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={subtitleAnim}
            className="hero-ref-subtitle"
          >
            Five specialized capabilities architected to eliminate manual bottlenecks, capture attention, and scale conversions.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES BENTO GRID ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {[
            {
              id: '01',
              title: 'AI UGC Assets',
              sub: 'Synthetic Human Capital',
              desc: 'High-conversion avatar ads, hyper-realistic voiceovers, and automated script pipelines tailored for Instagram Reels, TikTok, and Meta Ads.',
              deliverable: '500+ assets delivered'
            },
            {
              id: '02',
              title: 'IRL Cinematic Shoots',
              sub: 'Luxury Property & Brand Films',
              desc: 'On-location 4K videography, architectural walkthroughs, and cinematic pacing designed for high-net-worth real estate conversion.',
              deliverable: '40+ shoots executed'
            },
            {
              id: '03',
              title: 'Landing Page Architecture',
              sub: 'Technical Frontend Engineering',
              desc: 'React & Next.js web applications, lightning-fast landing pages, and interactive experiences optimized for lead capture.',
              deliverable: '80+ pages deployed'
            },
            {
              id: '04',
              title: 'Intelligent Automations',
              sub: 'Hands-Free Business Workflows',
              desc: 'Custom pipelines using Make.com, n8n, OpenAI, and REST APIs. Automating lead routing, CRM synchronization, and multi-channel publishing.',
              deliverable: '20+ systems running 24/7'
            },
            {
              id: '05',
              title: 'Complete Funnel Ecosystems',
              sub: 'End-to-End Growth Architecture',
              desc: 'Full-service integration linking creative video campaigns directly with high-converting pages and automated CRM qualification.',
              deliverable: 'Custom client retainers'
            }
          ].map((s, i) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                padding: '3rem',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem' }}>
                  <span style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#2e6347', fontWeight: 600 }}>
                    {s.id}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(46, 99, 71, 0.08)', color: '#2e6347', padding: '0.35rem 0.85rem', borderRadius: '99px' }}>
                    {s.deliverable}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: '#2e6347', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '1.2rem' }}>
                  {s.sub}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#2e6347',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  <span>Inquire Capability</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
