import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import _CountUp from 'react-countup';

const CountUp = _CountUp.default || _CountUp;

const projects = [
  {
    id: 1,
    category: "AI UGC",
    title: "AI Video Production",
    stat: "900+",
    statLabel: "Assets Delivered",
    tagColor: "#2e6347",
    desc: "Industrial-scale AI UGC production for global real estate and e-commerce brands. Scripted, voiced, and edited using HeyGen, D-ID, ElevenLabs, and Runway ML.",
    tools: ["HeyGen", "D-ID", "ElevenLabs", "Runway ML", "Midjourney"],
    clients: ["Dambe Properties", "eSanad", "EuroDigital"],
    img: "https://images.unsplash.com/photo-1633539408181-43285090e547?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    category: "IRL Production",
    title: "Cinematic Shoots",
    stat: "40+",
    statLabel: "On-Location Shoots",
    tagColor: "#151a17",
    desc: "On-location cinematic property tours, brand films, and commercial UGC for luxury real estate developers. Optimized for Meta, TikTok, and YouTube.",
    tools: ["Cinematic 4K", "Color Grading", "Instagram Reels", "TikTok Ads"],
    clients: ["Luxury Villas", "Penthouses", "Developer Projects"],
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    category: "Web Engineering",
    title: "Landing Page Architecture",
    stat: "80+",
    statLabel: "Pages Deployed",
    tagColor: "#2e6347",
    desc: "High-converting landing pages and full-stack web platforms built on React, Next.js, and custom stacks. Integrated with CRMs, WhatsApp API, and lead capture systems.",
    tools: ["React", "Next.js", "WhatsApp API", "HubSpot", "Framer Motion"],
    clients: ["Real Estate Agencies", "Service Brands", "Startups"],
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    category: "Intelligent Systems",
    title: "Autonomous Lead Gen",
    stat: "20+",
    statLabel: "Live 24/7 Systems",
    tagColor: "#151a17",
    desc: "End-to-end automation pipelines using Make, n8n, and AI logic. Handles content publishing, instant qualification, and CRM routing around the clock.",
    tools: ["Make.com", "n8n", "Google Sheets API", "ChatGPT API"],
    clients: ["Real Estate Firms", "Marketing Agencies", "Founders"],
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  }
];

const barData = [
  { label: "AI UGC Assets", value: "900+", pct: 95, color: "#2e6347" },
  { label: "IRL Cinematic Shoots", value: "40+", pct: 88, color: "#151a17" },
  { label: "Landing Pages", value: "80+", pct: 82, color: "#3d7a5b" },
  { label: "Automation Systems", value: "20+", pct: 75, color: "#525954" },
];

/* ── Animated Bar ── */
const AnimatedBar = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.6 }}>{item.label}</span>
        <span style={{ fontSize: '1.4rem', fontWeight: 950, letterSpacing: '-0.04em', color: item.color }}>{item.value}</span>
      </div>
      <div style={{ height: '8px', background: 'rgba(0,0,0,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${item.pct}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '100%', background: item.color, borderRadius: '99px' }}
        />
      </div>
    </motion.div>
  );
};

/* ── Project Card ── */
const ProjectCard = ({ p, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderRadius: '28px',
        overflow: 'hidden',
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: hovered ? '0 30px 70px rgba(0,0,0,0.08)' : '0 4px 24px rgba(0,0,0,0.03)',
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Image Banner */}
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
        <motion.img
          src={p.img}
          alt={p.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', scale: hovered ? 1.05 : 1, transition: 'scale 0.6s ease' }}
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }} />

        {/* Category badge */}
        <div style={{ position: 'absolute', top: '1.4rem', left: '1.4rem', background: p.tagColor, color: '#fff', padding: '0.35rem 0.9rem', borderRadius: '99px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {p.category}
        </div>

        {/* Stat overlay */}
        <div style={{ position: 'absolute', bottom: '1.4rem', left: '1.4rem' }}>
          <div style={{ fontSize: '3.2rem', fontWeight: 950, color: '#fff', lineHeight: 1, letterSpacing: '-0.05em' }}>{p.stat}</div>
          <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{p.statLabel}</p>
        </div>

        {/* Arrow */}
        <div style={{ position: 'absolute', top: '1.4rem', right: '1.4rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowUpRight size={17} color="#fff" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '2.5rem' }}>
        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>{p.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '2rem' }}>{p.desc}</p>

        {/* Clients */}
        <div style={{ marginBottom: '1.4rem' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.35, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>Key Partners</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {p.clients.map((c, j) => (
              <span key={j} style={{ fontSize: '0.75rem', fontWeight: 600, background: 'rgba(46, 99, 71, 0.08)', color: '#2e6347', padding: '0.3rem 0.8rem', borderRadius: '99px' }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <p style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.35, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>Technology</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {p.tools.map((t, j) => (
              <span key={j} style={{ fontSize: '0.72rem', fontWeight: 700, border: '1px solid rgba(0,0,0,0.1)', color: 'var(--text-primary)', padding: '0.25rem 0.7rem', borderRadius: '99px' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Page ── */
const Projects = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
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

  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      className="page-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ background: 'transparent', color: 'var(--text-primary)' }}
    >
      {/* ── EDITORIAL HERO HEADER ── */}
      <section className="hero-ref-container" style={{ paddingBottom: '3rem' }}>
        <div className="hero-ref-content">
          <motion.div
            initial="initial"
            animate="animate"
            variants={pillAnim}
            className="hero-ref-pill"
          >
            <span className="hero-ref-dot" />
            <span className="hero-ref-pill-text">Curated Portfolio • 1,040+ High-Conversion Deliverables</span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={titleAnim}
            className="hero-ref-title"
          >
            Curated work <br />
            <span className="hero-ref-title-accent">in motion.</span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={subtitleAnim}
            className="hero-ref-subtitle"
          >
            Four core capabilities designed to turn viewers into qualified appointments and build digital assets that scale effortlessly.
          </motion.p>
        </div>
      </section>

      {/* ── BAR CHART STATS ── */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div
          ref={chartRef}
          style={{ background: '#ffffff', borderRadius: '32px', padding: '4rem', border: '1px solid rgba(0,0,0,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
        >
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={chartInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '1.2rem' }}>
              — Scale at a Glance
            </p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              1,040+ <br />
              <span className="serif-italic" style={{ color: '#2e6347' }}>deliverables</span><br />
              shipped.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
              From high-fidelity AI avatars and luxury real estate shoots to full-stack applications and automated lead flows.
            </p>

            {/* Mini legend */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '2.5rem' }}>
              {barData.map((b) => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: b.color, flexShrink: 0 }} />
                  {b.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {barData.map((item, i) => (
              <AnimatedBar key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '2.5rem' }}>
          — Detailed Capability Breakdown
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ background: '#0e1411', borderRadius: '36px', padding: '6rem 4rem', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#4ade80', marginBottom: '1.5rem' }}>
            — Available for Select Engagements
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '2.5rem', color: '#fff', lineHeight: 1.05 }}>
            Let's build something <br />
            <span className="serif-italic" style={{ color: '#4ade80' }}>that drives revenue.</span>
          </h2>
          <Link
            to="/contact"
            className="hero-ref-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: '#2e6347',
              color: '#ffffff',
              border: 'none',
              padding: '1.1rem 2.8rem',
              fontSize: '1rem',
              fontWeight: 800,
              textDecoration: 'none',
              borderRadius: '99px',
              boxShadow: '0 10px 30px rgba(46, 99, 71, 0.4)'
            }}
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </motion.div>
  );
};

export default Projects;
