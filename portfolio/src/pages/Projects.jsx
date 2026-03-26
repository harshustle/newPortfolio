import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: "AI UGC",
    title: "AI Video Production",
    stat: "900+",
    statLabel: "Assets Delivered",
    tagColor: "#7b4dff",
    desc: "Full-scale AI UGC production for global real estate and e-commerce brands. Scripted, voiced, and edited using HeyGen, D-ID, ElevenLabs, and Runway ML.",
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
    tagColor: "#111",
    desc: "On-location cinematic property tours, brand films, and UGC for luxury real estate developers. Optimized for Meta, TikTok, and YouTube.",
    tools: ["Video Editing", "Color Grading", "Instagram Reels", "TikTok Ads"],
    clients: ["Luxury Villas", "Penthouses", "Developer Projects"],
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    category: "Web Dev",
    title: "Landing Page Architecture",
    stat: "80+",
    statLabel: "Pages Deployed",
    tagColor: "#00aa55",
    desc: "Premium landing pages and full websites built on React, Next.js, and custom stacks. Integrated with CRMs, WhatsApp API, and HubSpot for direct lead capture.",
    tools: ["React", "Next.js", "WhatsApp API", "HubSpot", "Framer Motion"],
    clients: ["Real Estate Agencies", "Service Brands", "Startups"],
    img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    category: "Automation",
    title: "Autonomous Lead Systems",
    stat: "20+",
    statLabel: "Systems Running 24/7",
    tagColor: "#e85d04",
    desc: "End-to-end automation pipelines using Make, n8n, and AI chatbots. Handles content generation, publishing, lead qualification, and CRM routing around the clock.",
    tools: ["Make (Integromat)", "n8n", "Google Sheets API", "ChatGPT"],
    clients: ["Real Estate Firms", "Marketing Agencies", "Founders"],
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  }
];

const barData = [
  { label: "AI UGC Assets", value: "900+", pct: 95, color: "#7b4dff" },
  { label: "IRL Cinematic Shoots", value: "40+", pct: 88, color: "#111" },
  { label: "Landing Pages", value: "80+", pct: 82, color: "#00aa55" },
  { label: "Automation Systems", value: "20+", pct: 75, color: "#e85d04" },
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
        <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.55 }}>{item.label}</span>
        <span style={{ fontSize: '1.4rem', fontWeight: 950, letterSpacing: '-0.04em', color: item.color }}>{item.value}</span>
      </div>
      <div style={{ height: '10px', background: 'rgba(0,0,0,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
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
      style={{ borderRadius: '28px', overflow: 'hidden', background: '#fff', cursor: 'pointer', boxShadow: hovered ? '0 40px 100px rgba(0,0,0,0.1)' : '0 4px 24px rgba(0,0,0,0.04)', transition: 'box-shadow 0.4s ease', transform: hovered ? 'translateY(-6px)' : 'translateY(0)', }}
    >
      {/* Image Banner */}
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
        <motion.img
          src={p.img}
          alt={p.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', scale: hovered ? 1.06 : 1, transition: 'scale 0.6s ease' }}
        />
        {/* Gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />

        {/* Category badge */}
        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: p.tagColor, color: '#fff', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          {p.category}
        </div>

        {/* Stat overlay */}
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
          <div style={{ fontSize: '3.5rem', fontWeight: 950, color: '#fff', lineHeight: 1, letterSpacing: '-0.05em' }}>{p.stat}</div>
          <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.statLabel}</p>
        </div>

        {/* Arrow */}
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowUpRight size={18} color="#fff" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '2.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>{p.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '2rem' }}>{p.desc}</p>

        {/* Clients */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.62rem', fontWeight: 900, opacity: 0.3, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>Clients</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {p.clients.map((c, j) => (
              <span key={j} style={{ fontSize: '0.75rem', fontWeight: 600, background: '#f2efed', padding: '0.3rem 0.8rem', borderRadius: '99px', opacity: 0.8 }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <p style={{ fontSize: '0.62rem', fontWeight: 900, opacity: 0.3, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {p.tools.map((t, j) => (
              <span key={j} style={{ fontSize: '0.72rem', fontWeight: 700, border: `1.5px solid ${p.tagColor}`, color: p.tagColor, padding: '0.25rem 0.7rem', borderRadius: '99px' }}>{t}</span>
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

  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-80px" });

  return (
    <motion.div className="page-container" initial="initial" animate="animate" exit="exit" variants={pageVariants}>

      {/* ── HERO ── */}
      <section className="container" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.4, marginBottom: '1.5rem' }}>— Live Capabilities</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
            WHAT<br /><span className="serif-italic">I Build.</span>
          </h1>
          <p style={{ maxWidth: '380px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
            Four core capabilities. 1,040+ deliverables. All architected to convert, engage, and scale.
          </p>
        </div>
      </section>

      {/* ── BAR CHART ── */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div
          ref={chartRef}
          style={{ background: '#fff', borderRadius: '32px', padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}
        >
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={chartInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.35, marginBottom: '1.5rem' }}>— Scale at a Glance</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '2rem' }}>
              1,040+<br /><span className="serif-italic">deliverables</span><br />shipped.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
              Across AI video, cinematic production, engineering, and intelligent automation — every asset built with a conversion-first mindset.
            </p>

            {/* Mini legend */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2.5rem' }}>
              {barData.map((b) => (
                <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 700, opacity: 0.6 }}>
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
        <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.35, marginBottom: '3rem' }}>— Detailed Breakdown</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ background: '#000', borderRadius: '36px', padding: '6rem 4rem', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '18rem', fontWeight: 950, opacity: 0.02, pointerEvents: 'none', whiteSpace: 'nowrap' }}>BUILD</div>
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.4, marginBottom: '2rem' }}>— Ready to Start?</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '3rem', color: '#fff', lineHeight: 0.9 }}>
            Let's build something<br /><span className="serif-italic" style={{ color: '#00ff78' }}>that converts.</span>
          </h2>
          <Link to="/contact" className="big-rect-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#00ff78', color: '#000', border: 'none', maxWidth: '600px', margin: '0 auto', fontWeight: 900, textDecoration: 'none' }}>
            START YOUR PROJECT <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

    </motion.div>
  );
};

export default Projects;
