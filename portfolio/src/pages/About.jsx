import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Code2, Instagram, Download, ArrowRight, Check } from 'lucide-react';
import _CountUp from 'react-countup';

const CountUp = _CountUp.default || _CountUp;

const About = () => {
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

  const linksAnim = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeTransition, delay: 0.5 } }
  };

  const statsAnim = {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: easeTransition, delay: 0.65 } }
  };

  const skills = {
    "Core Languages": ["Java", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
    "Frontend Tech": ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Redux", "Framer Motion"],
    "Backend & APIs": ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC Architecture", "Webhooks"],
    "Databases": ["MongoDB", "MySQL"],
    "Generative AI": ["OpenAI API", "Gemini API", "HeyGen", "ElevenLabs", "Runway ML", "Midjourney"],
    "Automation Tools": ["Make.com (Integromat)", "n8n", "Google Sheets API", "Cloudinary API", "Zapier"],
    "Developer Tooling": ["Git", "GitHub", "VS Code", "Postman", "Cursor"],
  };

  const experience = [
    {
      role: "Frontend Developer",
      company: "Ravan.ai",
      period: "Mar 2026 – Present",
      bullets: [
        "Architecting responsive, high-performance web applications using React.js, Next.js, and modern UI systems.",
        "Integrating REST APIs and partnering with backend engineers to deliver dynamic, high-conversion interfaces.",
        "Implementing production workflows with Git, GitHub, Postman, and CI/CD best practices.",
        "Translating complex product requirements into refined, accessible, pixel-perfect user experiences."
      ]
    },
    {
      role: "AI UGC Creator & Automation Specialist",
      company: "Ravan.ai",
      period: "Jun 2025 – Present",
      bullets: [
        "Produced 500+ AI-generated video assets for global paid social campaigns and real estate developments.",
        "Delivered international video campaigns for brands including Dambe Properties, eSanad, and EuroDigital.",
        "Engineered end-to-end generative AI pipelines combining script generation, avatar synthesis, and automated post-production.",
        "Optimized creatives for maximum retention on Instagram Reels, TikTok Ads, and YouTube Shorts."
      ]
    },
    {
      role: "AI Automation Engineer",
      company: "Ravan.ai",
      period: "Jun 2025 – Mar 2026",
      bullets: [
        "Designed and deployed enterprise automation pipelines using Make.com, REST APIs, Webhooks, OpenAI API, and Gemini API.",
        "Built automated inbound lead qualification, CRM synchronization, WhatsApp alerts, and multi-channel publishing.",
        "Reduced manual operational overhead by over 80% across internal creative teams."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Technology Internship",
      period: "Mar 2024 – May 2024",
      bullets: [
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.",
        "Integrated real-time drone telemetry visualization dashboards into web apps, increasing user engagement by 20%.",
        "Constructed modular component libraries to accelerate sprint delivery."
      ]
    }
  ];

  const projects = [
    {
      name: "Uber Platform Clone",
      tag: "MERN Stack",
      tagColor: "#2e6347",
      link: "https://github.com/harshustle/Uber-Website",
      bullets: [
        "Full-stack ride-booking platform built on MongoDB, Express.js, React.js, and Node.js.",
        "Role-based authentication, real-time rider-driver communication with Socket.io, and live status routing.",
        "Scalable RESTful API architecture with robust error boundaries."
      ]
    },
    {
      name: "Property Rental Platform",
      tag: "MVC Architecture",
      tagColor: "#1a1f1c",
      link: "https://wanderlust-3ie7.onrender.com/listings",
      bullets: [
        "Production rental portal using MVC design, Cloudinary image upload pipeline, and interactive geolocation maps.",
        "Comprehensive CRUD operations, user review loops, and responsive reservation flows.",
        "Boosted engagement by 60% with optimized mobile-first UX."
      ]
    },
    {
      name: "AI Autonomous Lead Funnel",
      tag: "Automation Engine",
      tagColor: "#2e6347",
      bullets: [
        "Intelligent lead capture engine integrating Make.com, OpenAI API, and Google Sheets.",
        "Filters high-intent prospects, triggers personalized messaging, and routes deals to CRMs 24/7.",
        "Over 20 systems deployed across global real estate partners."
      ]
    }
  ];

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
          {/* Pill Badge */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={pillAnim}
            className="hero-ref-pill"
          >
            <span className="hero-ref-dot" />
            <span className="hero-ref-pill-text">Based in Delhi, India • Full-Stack Developer & AI Specialist</span>
          </motion.div>

          {/* High-Contrast Editorial Serif Headline */}
          <motion.h1
            initial="initial"
            animate="animate"
            variants={titleAnim}
            className="hero-ref-title"
          >
            Code, Systems <br />
            <span className="hero-ref-title-accent">and visual scale.</span>
          </motion.h1>

          {/* Centered Editorial Subtitle */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={subtitleAnim}
            className="hero-ref-subtitle"
          >
            I engineer web platforms, build scalable AI content pipelines, and deploy autonomous workflows that eliminate operational bottlenecks and turn traffic into clients.
          </motion.p>

          {/* Quick Contact & Profile Pills */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={linksAnim}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              justifyContent: 'center',
              marginTop: '1.8rem',
              maxWidth: '750px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <a
              href="mailto:harshustle@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '99px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                color: '#1a1f1c',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2e6347'; e.currentTarget.style.color = '#2e6347'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#1a1f1c'; }}
            >
              <Mail size={14} /> harshustle@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/harshustle"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '99px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                color: '#1a1f1c',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2e6347'; e.currentTarget.style.color = '#2e6347'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#1a1f1c'; }}
            >
              <Linkedin size={14} /> LinkedIn
            </a>

            <a
              href="https://github.com/harshustler"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '99px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                color: '#1a1f1c',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2e6347'; e.currentTarget.style.color = '#2e6347'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#1a1f1c'; }}
            >
              <Github size={14} /> GitHub
            </a>

            <a
              href="https://leetcode.com/harshustle"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '99px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.08)',
                color: '#1a1f1c',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2e6347'; e.currentTarget.style.color = '#2e6347'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = '#1a1f1c'; }}
            >
              <Code2 size={14} /> LeetCode
            </a>

            <a
              href="/Harsh_Srivastav_Resume.pdf"
              download="Harsh_Srivastav_Resume.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 1.2rem',
                borderRadius: '99px',
                background: '#2e6347',
                border: 'none',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 700,
                boxShadow: '0 4px 14px rgba(46, 99, 71, 0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Download size={14} /> Download Resume
            </a>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={statsAnim}
            className="hero-ref-stats"
            style={{ marginTop: '3.5rem' }}
          >
            <div className="hero-ref-stat-item">
              <span className="hero-ref-stat-number"><CountUp end={10} duration={2} />+</span>
              <span className="hero-ref-stat-label">Full-Stack Apps</span>
            </div>
            <div className="hero-ref-stat-divider" />
            <div className="hero-ref-stat-item">
              <span className="hero-ref-stat-number"><CountUp end={900} duration={2.5} />+</span>
              <span className="hero-ref-stat-label">AI UGC Assets</span>
            </div>
            <div className="hero-ref-stat-divider" />
            <div className="hero-ref-stat-item">
              <span className="hero-ref-stat-number"><CountUp end={40} duration={2.5} />+</span>
              <span className="hero-ref-stat-label">IRL Shoots</span>
            </div>
            <div className="hero-ref-stat-divider" />
            <div className="hero-ref-stat-item">
              <span className="hero-ref-stat-number"><CountUp end={20} duration={2} />+</span>
              <span className="hero-ref-stat-label">Automations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BACKGROUND & EDUCATION (BENTO ROW) ── */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <div className="bento-grid" style={{ gap: '1.5rem' }}>
          {/* Bio Card - Large */}
          <div className="bento-card large" style={{ padding: '3.2rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '32px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '1.5rem' }}>
              — Philosophy & Focus
            </p>
            <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.15 }}>
              Engineered for conversion, <br />
              <span className="editorial-title-accent">refined for scale.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              I combine classical full-stack engineering with modern generative AI pipelines. Whether constructing high-traffic MERN applications or automating lead-routing workflows across global time zones, my focus is always direct commercial value and operational simplicity.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '1.2rem' }}>
              At Ravan.ai, I've delivered over 500+ AI video assets for high-growth ventures, automated 80%+ of repetitive manual processes, and built web frontends that convert visitors into revenue.
            </p>
          </div>

          {/* Education Card */}
          <div className="bento-card" style={{ padding: '3rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '2rem' }}>
                — Education
              </p>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                B.Tech in <br />
                <span className="editorial-title-accent">Information Technology</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Dr. A.P.J. Abdul Kalam Technical University, Lucknow
              </p>
              <p style={{ color: 'var(--text-secondary)', opacity: 0.7, marginTop: '0.3rem', fontSize: '0.82rem' }}>
                2021 – 2025
              </p>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(46, 99, 71, 0.1)', color: '#2e6347', padding: '0.5rem 1.2rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 800, border: '1px solid rgba(46, 99, 71, 0.2)' }}>
                <span>Academic CGPA:</span> <strong>7.6 / 10</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '1.8rem' }}>
          — Professional Journey
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '28px',
                padding: '3rem',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <div style={{ background: 'rgba(46, 99, 71, 0.1)', color: '#2e6347', width: '48px', height: '48px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 900 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>{exp.role}</h3>
                    <p style={{ color: '#2e6347', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.2rem' }}>{exp.company}</p>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#888', background: 'rgba(0,0,0,0.04)', padding: '0.35rem 0.9rem', borderRadius: '99px', textTransform: 'uppercase' }}>
                  {exp.period}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.9rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: '#2e6347', fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TECHNICAL STACK ── */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '1.8rem' }}>
          — Technical Tooling & Skills
        </p>
        <div style={{ background: '#ffffff', borderRadius: '32px', padding: '3.5rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2e6347' }}>
                  {category}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        padding: '0.35rem 0.85rem',
                        background: 'rgba(0,0,0,0.03)',
                        borderRadius: '99px',
                        border: '1px solid rgba(0,0,0,0.05)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY ACHIEVEMENTS ── */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347', marginBottom: '1.8rem' }}>
          — Proven Track Record
        </p>
        <div style={{ background: '#ffffff', borderRadius: '32px', padding: '3.5rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              "Built 10+ production-grade full-stack web applications using the MERN stack and Next.js.",
              "Automated end-to-end business workflows with generative AI and custom REST APIs, cutting manual effort by 80%+.",
              "Created 900+ high-retention AI UGC and short-form video assets deployed across Meta Ads and YouTube.",
              "Seamlessly integrated OpenAI API, Gemini API, Cloudinary API, Webhooks, and Google Sheets into client operations.",
              "Consistent problem solver with continuous daily practice in Data Structures and Algorithms."
            ].map((ach, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(46, 99, 71, 0.12)', color: '#2e6347', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 900, flexShrink: 0, marginTop: '2px' }}>
                  ✓
                </div>
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
