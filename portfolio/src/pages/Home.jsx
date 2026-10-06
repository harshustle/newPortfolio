import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorPlay, Globe, Instagram, Workflow, MessageSquare, Heart, Send, Bookmark, Music } from 'lucide-react';
import _CountUp from 'react-countup';
import PricingCard from '../components/PricingCard';

const CountUp = _CountUp.default || _CountUp;

const ShortFormStyleCard = ({ v, idx }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const posterUrl = v.publicId
    ? `https://res.cloudinary.com/dobulag2p/video/upload/so_${v.so || '2'},w_480,h_854,c_fill,q_auto,f_auto/${v.publicId}.jpg`
    : (v.poster || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600');

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
          alt={v.title || "Video thumbnail"}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}

      {/* Bottom Blue Audio / Controller Pill - WITHOUT ANY PLAY ICON */}
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

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState('India');
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerItems = [
    "🔥 28 qualified leads routed in 48 hours for Real Estate partner",
    "📈 Property Reel crossed 1.2M organic views in 14 days",
    "⚡ Outbound funnel automated 100% of lead routing",
    "💰 $14.5K in new pipeline value generated last week"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbxABRNpYSU6BJHLRJY1vE0ohMlCGNLjq6OuyECJEEZplZ4KfGebKe54_Ljrg-kJZRZy2w/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    const payload = new URLSearchParams({
      name: data.name || '',
      email: data.email || '',
      service: 'Not specified',
      budget: '',
      timeline: '',
      message: data.message || '',
    });

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const ctaAnim = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: easeTransition, delay: 0.52 } }
  };

  const statsAnim = {
    initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: easeTransition, delay: 0.68 } }
  };

  const previewProjects = [
    { title: "AI Automation Engine", type: "Automation", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "Real Estate Portal", type: "Website", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800" },
    { title: "Lead Generation CRM", type: "SaaS", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <motion.div
      className="page-container"
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
      style={{ background: 'transparent', color: 'var(--text-primary)' }}
    >
      {/* Editorial Reference Hero Section */}
      <section className="hero-ref-container">
        <div className="hero-ref-content">
          {/* Pill Badge */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={pillAnim}
            className="hero-ref-pill"
          >
            <span className="hero-ref-dot" />
            <span className="hero-ref-pill-text">{tickerItems[tickerIndex]}</span>
          </motion.div>

          {/* High-Contrast Editorial Serif Headline */}
          <motion.h1
            initial="initial"
            animate="animate"
            variants={titleAnim}
            className="hero-ref-title"
          >
            Short form <br />
            <span className="hero-ref-title-accent">done right.</span>
          </motion.h1>

          {/* Centered Subtitle */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={subtitleAnim}
            className="hero-ref-subtitle"
          >
            Stop leaving money on the table. We build high-converting video assets and automated sales funnels that turn views into qualified appointments.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={ctaAnim}
            className="hero-ref-cta-group"
          >
            <a href="#contact" className="hero-ref-btn">
              <span>Book a Strategy Call</span>
              <ArrowRight size={17} />
            </a>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={statsAnim}
            className="hero-ref-stats"
          >
            <div className="hero-ref-stat-item">
              <span className="hero-ref-stat-number"><CountUp end={900} duration={2.5} />+</span>
              <span className="hero-ref-stat-label">Assets Created</span>
            </div>
            <div className="hero-ref-stat-divider" />
            <div className="hero-ref-stat-item">
              <span className="hero-ref-stat-number"><CountUp end={40} duration={2.5} />+</span>
              <span className="hero-ref-stat-label">IRL Productions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section (Bento Grid) */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <h2 className="editorial-section-title" style={{ marginBottom: '4rem' }}>
          How we can <br /> help you <span className="editorial-title-accent">grow.</span>
        </h2>

        <div className="bento-grid" style={{ maxWidth: '1200px', margin: '0 auto', gap: '1.5rem' }}>
          {/* Real Video - LARGE BENTO */}
          <div className="bento-card large" style={{ padding: '3rem', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }} className="mobile-center-parent">
              <div style={{ background: '#f7f7f7', padding: '1rem', borderRadius: '15px' }}><MonitorPlay size={28} /></div>
              <div style={{ textAlign: 'right' }} className="mobile-center">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '4.2rem', fontWeight: 400, color: '#111827', lineHeight: 1 }}><CountUp end={40} duration={3} />+</div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase', marginTop: '0.4rem' }}>IRL Shoots</p>
              </div>
            </div>
            <div style={{ marginTop: 'auto', textAlign: 'left' }} className="mobile-center">
              <h3 style={{ fontSize: '2.4rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Cinematic <br /><span className="editorial-title-accent">Storytelling.</span></h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '400px', lineHeight: 1.6 }}>High-end property tours designed for HNW conversion. Property focused architectures.</p>
              <a href="#real-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2rem', display: 'block', color: '#2e6347' }}>Explore Capability →</a>
            </div>
          </div>

          {/* AI UGC - SQUARE BENTO */}
          <div className="bento-card mobile-center" style={{ padding: '2.5rem', background: '#ffffff', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.4rem', fontWeight: 400, color: '#111827', lineHeight: 1, marginBottom: '0.8rem' }}><CountUp end={900} duration={3} />+</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>AI UGC <br /><span className="editorial-title-accent">Assets.</span></h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>Automated video pipelines with hyper-realistic avatars.</p>
            <a href="#ai-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2e6347' }}>View Infrastructure →</a>
          </div>

          {/* Architecture - SQUARE BENTO */}
          <div className="bento-card mobile-center" style={{ padding: '2.5rem', background: '#ffffff', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.4rem', fontWeight: 400, color: '#111827', lineHeight: 1, marginBottom: '0.8rem' }}><CountUp end={80} duration={3} />+</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Landing <br /><span className="editorial-title-accent">Pages.</span></h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>High-converting pages built on premium technical stacks.</p>
            <a href="#real-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2e6347' }}>View Portfolio →</a>
          </div>

          {/* Automation - WIDE BENTO */}
          <div className="bento-card wide mobile-center-parent" style={{ padding: '2.5rem', background: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', display: 'flex', textAlign: 'left' }}>
            <div style={{ maxWidth: '450px' }} className="mobile-center">
              <h3 style={{ fontSize: '2rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>Autonomous <br /><span className="editorial-title-accent">Lead Gen.</span></h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>Lead qualification and CRM routing systems that work while you sleep. 20+ Systems Deployed.</p>
            </div>
            <div style={{ textAlign: 'right' }} className="mobile-center">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.8rem', fontWeight: 400, color: '#111827', lineHeight: 1 }}><CountUp end={20} duration={3} />+</div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase', marginTop: '0.4rem' }}>Live Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Real Video Section - HIGH IMPACT */}
      <section className="section container" id="real-video" style={{ background: 'rgba(255, 255, 255, 0.75)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '32px', margin: '4rem auto', position: 'relative', overflow: 'hidden', padding: '6rem 3rem' }}>
        <div style={{ marginBottom: '4.5rem', position: 'relative', zIndex: 1, textAlign: 'left' }} className="mobile-center">
          <h2 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', color: '#2e6347' }} className="mobile-center mobile-pretitle">
            — Property Boutique
          </h2>
          <h1 className="editorial-section-title">
            40+ <span className="editorial-title-accent">IRL Productions.</span>
          </h1>
          <p style={{ marginTop: '1.2rem', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', lineHeight: 1.6 }}>Property storytelling for the world's most sophisticated real estate developments.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1.2rem',
          maxWidth: '1200px',
          margin: '0 auto 4.5rem auto',
          justifyContent: 'center'
        }}>
          {[
            { publicId: "7_lpgoxu", so: "2" },
            { publicId: "8_l0wsbr", so: "2" },
            { publicId: "prakhar_properties_1778384102_3893172810243885227_73535257018_zi9osj", so: "2" },
            { publicId: "prakhar_properties_1778305436_3892698647800481401_73535257018_ybkmvq", so: "2" },
            { publicId: "prakhar_properties_1778047823_3890849699595157209_73535257018_yo65rr", so: "2" },
          ].map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                paddingTop: '177.78%',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#0e1217',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              }}
            >
              <video
                src={`https://res.cloudinary.com/dobulag2p/video/upload/q_auto:eco,vc_h264,w_480/${v.publicId}.mp4`}
                poster={`https://res.cloudinary.com/dobulag2p/video/upload/so_${v.so || '2'},w_480,h_854,c_fill,q_auto,f_auto/${v.publicId}.jpg`}
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
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="big-rect-btn" style={{ maxWidth: '800px', margin: '0 auto', background: '#2e6347', color: '#fff', border: 'none', boxShadow: '0 10px 40px rgba(46, 99, 71, 0.25)' }}>
            BOOK YOUR STRATEGY CALL <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Short Form Styles Video Section - MATCHING USER SCREENSHOT UX */}
      <section className="section" id="ai-video" style={{ maxWidth: '1240px', width: '100%', margin: '5.5rem auto', padding: '0 1.5rem', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 950,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#111827',
            lineHeight: 1,
            margin: 0
          }}>
            SHORT FORM <span style={{ color: '#5b8296' }}>STYLES</span>
          </h2>
          <p style={{
            fontStyle: 'italic',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#6b7280',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginTop: '0.8rem'
          }}>
            ENGINEERED FOR CONTENT GROWTH
          </p>
        </div>

        <div style={{ position: 'relative', width: '100%', margin: '0 auto 4.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.2rem', justifyContent: 'center' }}>
            {[
              { title: "AI UGC — 1", duration: "0:26", publicId: "Ai_ugc_10_ygvpdh", so: "2" },
              { title: "AI UGC — 2", duration: "0:36", publicId: "ai_ugc_9_ovpev5", so: "2" },
              { title: "AI AVATAR — REALTOR", duration: "0:34", publicId: "0404_itrkrs", so: "1" },
              { title: "STOCK AUTOMATION", duration: "0:44", publicId: "7_lpgoxu", so: "2" },
              { title: "REAL ESTATE AD", duration: "0:55", publicId: "8_l0wsbr", so: "2" },
              { title: "LUXURY TOUR", duration: "0:26", publicId: "Edited_wlnmjv", so: "3" },
            ].map((v, idx) => (
              <ShortFormStyleCard key={idx} v={v} idx={idx} />
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <a href="#contact" className="big-rect-btn" style={{ width: '100%', background: '#151a17', color: '#fff', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
            SCALE YOUR CONTENT NOW <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Detailed AI Product Shoot Section - MATCHING SHORT FORM STYLES FORMAT */}
      <section className="section" id="ai-product-shoot" style={{ maxWidth: '1240px', width: '100%', margin: '5.5rem auto', padding: '0 1.5rem', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 950,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#111827',
            lineHeight: 1,
            margin: 0
          }}>
            AI PRODUCT <span style={{ color: '#5b8296' }}>SHOOTS</span>
          </h2>
          <p style={{
            fontStyle: 'italic',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#6b7280',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginTop: '0.8rem'
          }}>
            ENGINEERED FOR HIGH CONVERSION
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto 4.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.2rem', justifyContent: 'center' }}>
            {[
              { title: "PRODUCT CINEMATICS", duration: "0:28", publicId: "IMG_5939_erscc8", so: "2" },
              { title: "BRAND SHOWCASE", duration: "0:32", publicId: "IMG_5906_ic8t1k", so: "2" },
              { title: "DYNAMIC VISUALS", duration: "0:30", publicId: "download_cmsezt", so: "2" },
              { title: "CREATIVE RENDERS", duration: "0:25", publicId: "IMG_5920_hs89uq", so: "2" },
            ].map((v, idx) => (
              <ShortFormStyleCard key={idx} v={v} idx={idx} />
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <a href="#contact" className="big-rect-btn" style={{ width: '100%', background: '#151a17', color: '#fff', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
            SCALE YOUR PRODUCT SHOOTS <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Detailed Automation Section - HIGH IMPACT */}
      <section className="section container" id="chatbot" style={{ background: 'rgba(255, 255, 255, 0.75)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '32px', margin: '4rem auto', position: 'relative', overflow: 'hidden', padding: '6rem 3rem' }}>
        <div style={{ marginBottom: '4.5rem', position: 'relative', zIndex: 1, textAlign: 'right' }} className="mobile-center">
          <h2 style={{ fontSize: '0.78rem', fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', color: '#2e6347', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }} className="mobile-center mobile-pretitle">
            — Lead Management Architecture
            <span style={{ width: '40px', height: '1px', background: '#2e6347' }} className="hide-on-mobile"></span>
          </h2>
          <h1 className="editorial-section-title">
            20+ <span className="editorial-title-accent">Live Solutions.</span>
          </h1>
          <p style={{ marginTop: '1.2rem', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '480px', lineHeight: 1.6, marginLeft: 'auto', marginRight: 0 }} className="mobile-center">Systems that work while you sleep, ensuring no lead goes unqualified and no opportunity is missed.</p>
        </div>

        <div className="video-grid" style={{ maxWidth: '1100px', margin: '0 auto 6rem' }}>
          <motion.div className="chatbot-card mobile-center" whileHover={{ y: -5 }} style={{ background: '#fff', border: 'none', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', padding: '3rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }} className="mobile-center-parent">
              <div style={{ background: '#f7f7f7', padding: '1.2rem', borderRadius: '20px' }}><Workflow size={28} color="#000" /></div>
              <span style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '0.05em' }}>01 / ARCHITECTURE</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400 }}>Qualification</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.8rem', lineHeight: 1.6 }}>Sophisticated logic flows that filter noise and prioritize high-value intent.</p>
          </motion.div>

          <motion.div className="chatbot-card mobile-center" whileHover={{ y: -5 }} style={{ background: '#fff', border: 'none', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', padding: '3rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }} className="mobile-center-parent">
              <div style={{ background: '#f7f7f7', padding: '1.2rem', borderRadius: '20px' }}><MessageSquare size={28} color="#000" /></div>
              <span style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '0.05em' }}>02 / ENGAGEMENT</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400 }}>Live Sync</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.8rem', lineHeight: 1.6 }}>Instant, hyper-personalized engagement across all customer touchpoints.</p>
          </motion.div>

          <motion.div className="chatbot-card mobile-center" whileHover={{ y: -5 }} style={{ background: '#fff', border: 'none', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', padding: '3rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }} className="mobile-center-parent">
              <div style={{ background: '#f7f7f7', padding: '1.2rem', borderRadius: '20px' }}><Globe size={28} color="#000" /></div>
              <span style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '0.05em' }}>03 / SCALING</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400 }}>CRM Global</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.8rem', lineHeight: 1.6 }}>Seamless integration with your existing global marketing technology stack.</p>
          </motion.div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="big-rect-btn" style={{ maxWidth: '800px', margin: '0 auto', background: '#2e6347', color: '#fff', border: 'none', boxShadow: '0 10px 40px rgba(46, 99, 71, 0.25)' }}>
            DEPLOY YOUR ARCHITECTURE <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="section container" style={{ borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '4rem' }} className="mobile-center">
          <h2 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#2e6347' }} className="mobile-pretitle">— Track Record of Execution</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }} className="mobile-center">
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.8rem', fontWeight: 400, color: '#111827', marginBottom: '0.4rem', lineHeight: 1 }}>80+</div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase' }}>Landing Pages</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.8rem', fontWeight: 400, color: '#111827', marginBottom: '0.4rem', lineHeight: 1 }}>900+</div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase' }}>AI UGC Assets</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.8rem', fontWeight: 400, color: '#111827', marginBottom: '0.4rem', lineHeight: 1 }}>40+</div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase' }}>IRL Shoots</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.8rem', fontWeight: 400, color: '#111827', marginBottom: '0.4rem', lineHeight: 1 }}>20+</div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', color: '#6b7280', textTransform: 'uppercase' }}>Custom Automations</p>
          </div>
        </div>
        <div style={{ marginTop: '5rem', background: '#f5efe8', height: '200px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p className="serif-italic" style={{ fontSize: '2rem', opacity: 0.35, color: '#111' }}>Reliable delivery on an industrial scale.</p>
        </div>
      </section>

      {/* Performance Package Section / Conversion Details */}
      <section id="pricing" className="section container performance-section" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', color: '#111', padding: '2.5rem 1.5rem', textAlign: 'center', borderRadius: '28px', margin: '2rem auto' }}>
        <p style={{ color: '#2e6347', letterSpacing: '2px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>— PERFORMANCE CONTENT SYSTEMS</p>
        <h2 className="editorial-section-title" style={{ margin: '6px auto 10px', fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', lineHeight: 1.15 }}>
          Video Content That <span className="editorial-title-accent">Drives Results.</span>
        </h2>
        <p style={{ color: '#4b5563', fontSize: '0.92rem', maxWidth: '640px', margin: '0 auto 1.2rem', lineHeight: 1.45 }}>
          We don’t just create videos — we build a <strong style={{ color: '#111' }}>content system designed to attract, engage, and convert your audience.</strong>
        </p>

        <div style={{ marginBottom: '1.2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Select Region:</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ padding: '0.35rem 1rem', fontSize: '0.85rem', borderRadius: '10px', border: '1.5px solid #ccc', outline: 'none', cursor: 'pointer', background: '#fff', color: '#000', fontWeight: '600' }}
          >
            <option value="India">India</option>
            <option value="Global">Global (USA/UK/etc.)</option>
          </select>
        </div>

        {/* Bento Grid layout for Pricing */}
        <div className="pricing-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: '1020px', margin: '0 auto' }}>

          <PricingCard
            title="Starter Pack"
            subtitle="Quick launch & high-impact test"
            price={country === 'India' ? "₹4,000" : "$55"}
            volume="3 videos"
            buttonText="GET STARTED"
            features={[
              "3 High-Retention Videos",
              "Scriptwriting & Hook Optimization",
              "Dynamic AI / UGC Production",
              "Captions & Sound Design",
              "48-Hour Fast Delivery"
            ]}
          />

          <PricingCard
            title="Growth Pack"
            subtitle="Consistent content & viral scale"
            price={country === 'India' ? "₹9,999" : "$130"}
            volume="8 videos"
            buttonText="GET STARTED"
            special={true}
            features={[
              "8 High-Retention Videos",
              "Comprehensive Content Strategy",
              "Viral Hooks & Angle Testing",
              "Dynamic AI / UGC Production",
              "Sound Design & Motion Captions",
              "Priority Support & Revisions"
            ]}
          />

          <PricingCard
            title="Custom / IRL Shoot"
            subtitle="On-location luxury storytelling"
            price={country === 'India' ? "Custom" : "Custom"}
            volume="Tailored deliverables"
            buttonText="BOOK STRATEGY CALL"
            features={[
              "On-Location Shoot & Directing",
              "High-End Production Gear",
              "Cinematic Color Grading",
              "Full Commercial Narrative",
              "Dedicated Producer Support"
            ]}
          />
        </div>

        <div style={{ borderTop: '1px solid #eee', margin: '1.5rem auto 0', maxWidth: '850px', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          <span style={{ color: '#111', fontSize: '0.92rem', fontWeight: 700 }}>
            ✦ <span className="serif-italic" style={{ color: '#2e6347' }}>You only commit</span> after seeing real results.
          </span>

          <a href="#contact" className="btn pill-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1.2rem', background: '#2e6347', color: '#fff', fontWeight: 800, textDecoration: 'none', borderRadius: '99px', transition: 'transform 0.2s', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.78rem', boxShadow: '0 6px 18px rgba(46, 99, 71, 0.2)' }}>
            RESERVE YOUR TRIAL <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section container" id="contact" style={{ padding: '2.5rem 1.5rem', background: '#050505', borderRadius: '28px', margin: '2rem auto', color: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: 'rgba(46, 99, 71, 0.25)', color: '#4ade80', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem', border: '1px solid rgba(74, 222, 128, 0.2)' }}>Limited Availability</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '0.5rem' }}>Ready to <span className="serif-italic" style={{ color: '#4ade80' }}>Scale?</span></h2>
          <p style={{ color: '#aaa', fontSize: '0.92rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.5 }}>Book a free discovery call. We'll map out a custom content and conversion strategy for your brand, completely free of charge.</p>
        </div>
        <div className="contact-form-container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                <div className="form-group">
                  <span className="form-label">FULL NAME</span>
                  <input type="text" name="name" required placeholder="John Doe" className="form-input" style={{ width: '100%', padding: '0.5rem 0', fontSize: '1rem' }} />
                </div>
                <div className="form-group">
                  <span className="form-label">EMAIL ADDRESS</span>
                  <input type="email" name="email" required placeholder="john@example.com" className="form-input" style={{ width: '100%', padding: '0.5rem 0', fontSize: '1rem' }} />
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <span className="form-label">TELL US ABOUT YOUR CURRENT ROADBLOCKS</span>
                <textarea name="message" required placeholder="What's your main bottleneck right now? (e.g. need more leads, better video content...)" rows="2" className="form-input textarea" style={{ width: '100%', padding: '0.5rem 0', background: 'transparent', color: '#fff', borderColor: '#333', fontSize: '0.95rem' }}></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-primary pill-cta" style={{ marginTop: '1.5rem', padding: '0.95rem 2.5rem', width: '100%', opacity: isSubmitting ? 0.7 : 1, background: '#2e6347', color: '#fff', fontWeight: 900, border: 'none', fontSize: '0.95rem', letterSpacing: '0.05em', boxShadow: '0 0 25px rgba(46, 99, 71, 0.35)' }}>
                {isSubmitting ? "BOOKING..." : "CLAIM YOUR FREE STRATEGY CALL"}
              </button>
            </form>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
