import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorPlay, Globe, Instagram, Workflow, MessageSquare, Heart, Send, Bookmark, Music, Check, Play, Pause, Volume2, VolumeX, Maximize, Maximize2, Minimize2 } from 'lucide-react';
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

const HERO_UGC_VIDEOS = [
  { title: "AI UGC — 1", duration: "0:26", publicId: "Ai_ugc_10_ygvpdh", so: "2" },
  { title: "AI UGC — 2", duration: "0:36", publicId: "ai_ugc_9_ovpev5", so: "2" },
  { title: "AI AVATAR — REALTOR", duration: "0:34", publicId: "0404_itrkrs", so: "1" },
  { title: "STOCK AUTOMATION", duration: "0:44", publicId: "7_lpgoxu", so: "2" },
  { title: "REAL ESTATE AD", duration: "0:55", publicId: "8_l0wsbr", so: "2" },
  { title: "LUXURY TOUR", duration: "0:26", publicId: "Edited_wlnmjv", so: "3" },
];

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      return (tz.includes('Calcutta') || tz.includes('Kolkata')) ? 'India' : 'Global';
    } catch {
      return 'India';
    }
  });
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isPlayingVsl, setIsPlayingVsl] = useState(false);
  const [isVslPaused, setIsVslPaused] = useState(false);
  const [isVslMuted, setIsVslMuted] = useState(false);
  const [vslProgress, setVslProgress] = useState(0);
  const [videoLang, setVideoLang] = useState('en');
  const [vslStage, setVslStage] = useState('full'); // 'full' | 'ugc' | 'whatsapp' | 'crm' | 'cta'
  const [activeScreenTab, setActiveScreenTab] = useState('auto'); // 'auto' | 'ugc' | 'arch'
  const [isPipActive, setIsPipActive] = useState(false);
  const [manualPipOverride, setManualPipOverride] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const vslVideoRef = useRef(null);

  const switchVideoLang = (newLang, e) => {
    if (e) e.stopPropagation();
    if (newLang === videoLang) return;
    setVideoLang(newLang);
    if (isPlayingVsl) {
      setTimeout(() => {
        if (vslVideoRef.current) {
          vslVideoRef.current.play().catch(() => {});
          setIsVslPaused(false);
        }
      }, 60);
    }
  };

  const startVsl = () => {
    setIsPlayingVsl(true);
    setIsVslPaused(false);
    setTimeout(() => {
      if (vslVideoRef.current) {
        vslVideoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const toggleVslPlay = (e) => {
    if (e) e.stopPropagation();
    if (vslVideoRef.current) {
      if (vslVideoRef.current.paused) {
        vslVideoRef.current.play().catch(() => {});
        setIsVslPaused(false);
      } else {
        vslVideoRef.current.pause();
        setIsVslPaused(true);
      }
    }
  };

  const toggleVslMute = (e) => {
    if (e) e.stopPropagation();
    if (vslVideoRef.current) {
      vslVideoRef.current.muted = !vslVideoRef.current.muted;
      setIsVslMuted(vslVideoRef.current.muted);
    }
  };

  const handleVslTimeUpdate = () => {
    if (vslVideoRef.current && vslVideoRef.current.duration) {
      const t = vslVideoRef.current.currentTime;
      const p = (t / vslVideoRef.current.duration) * 100;
      setVslProgress(p);

      // Automated Transition to Picture-in-Picture when AI UGC is introduced (~3.8s)
      if (t >= 3.8) {
        if (!manualPipOverride && !isPipActive) {
          setIsPipActive(true);
        }
      } else {
        if (!manualPipOverride && isPipActive) {
          setIsPipActive(false);
        }
      }

      // Sync active dialogue milestone with screen content:
      // 0s - 3.8s: Full video presenter talking about real location shoots
      // 3.8s - 10.8s: Speaker says "UGC ads engineered to stop the scroll" -> SHOW UGC VIDEOS SCREEN!
      // 10.8s - 19.5s: Speaker says "A high-converting sales funnel... WhatsApp connect & automated AI chatbot" -> SHOW LEAD ARCHITECTURE with WHATSAPP HIGHLIGHT!
      // 19.5s - 23.5s: Speaker says "Targeted ads, right audience, right time" -> CRM Global highlight
      // 23.5s+: Action CTA pulse
      if (t < 3.8) {
        setVslStage('full');
      } else if (t < 10.8) {
        setVslStage('ugc');
      } else if (t < 19.5) {
        setVslStage('whatsapp');
      } else if (t < 23.5) {
        setVslStage('crm');
      } else {
        setVslStage('cta');
      }
    }
  };

  const currentScreen = activeScreenTab !== 'auto'
    ? activeScreenTab
    : (vslStage === 'ugc' ? 'ugc' : 'arch');

  const handleVslSeek = (e) => {
    if (e) e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    if (vslVideoRef.current && vslVideoRef.current.duration) {
      vslVideoRef.current.currentTime = pct * vslVideoRef.current.duration;
      setVslProgress(pct * 100);
    }
  };

  const toggleVslFullscreen = (e) => {
    if (e) e.stopPropagation();
    if (vslVideoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else if (vslVideoRef.current.requestFullscreen) {
        vslVideoRef.current.requestFullscreen().catch(() => {});
      }
    }
  };

  useEffect(() => {
    // Silent automatic location detection (does not display anything to the visitor)
    let resolved = false;

    fetch('https://api.country.is')
      .then(res => res.json())
      .then(data => {
        if (!resolved && data && data.country) {
          resolved = true;
          setCountry(data.country.toUpperCase() === 'IN' ? 'India' : 'Global');
        }
      })
      .catch(() => {
        if (!resolved) {
          fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
              if (!resolved && data && data.country_code) {
                resolved = true;
                setCountry(data.country_code.toUpperCase() === 'IN' ? 'India' : 'Global');
              }
            })
            .catch(() => {});
        }
      });
  }, []);

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

          {/* VSL Video Section (Starting at 13.8s, No Time Display) */}
          <div className="hero-video-wrapper">
            <div 
              className={`hero-video-frame ${isVslPaused ? 'is-paused' : ''}`}
            >
              {/* Language Selector Switch (English / Hindi) */}
              {/* Top View Mode Switcher Pills */}
              <div className="hero-vsl-screen-switcher" onClick={e => e.stopPropagation()}>
                <button
                  type="button"
                  className={`hero-switcher-btn ${currentScreen === 'ugc' ? 'active' : ''}`}
                  onClick={() => setActiveScreenTab('ugc')}
                  aria-label="Show AI UGC Styles"
                >
                  📱 AI UGC Styles
                </button>
                <button
                  type="button"
                  className={`hero-switcher-btn ${currentScreen === 'arch' ? 'active' : ''}`}
                  onClick={() => setActiveScreenTab('arch')}
                  aria-label="Show Lead Management Architecture"
                >
                  ⚡ Lead Architecture & WhatsApp
                </button>
              </div>

              {/* Language Selector Switch (English / Hindi) */}
              <div className="hero-video-lang-pill" onClick={e => e.stopPropagation()}>
                <button
                  type="button"
                  className={`hero-lang-btn ${videoLang === 'en' ? 'active' : ''}`}
                  onClick={(e) => switchVideoLang('en', e)}
                  aria-label="Play in English"
                >
                  🇺🇸 English
                </button>
                <button
                  type="button"
                  className={`hero-lang-btn ${videoLang === 'hi' ? 'active' : ''}`}
                  onClick={(e) => switchVideoLang('hi', e)}
                  aria-label="Play in Hindi"
                >
                  🇮🇳 Hindi
                </button>
              </div>

              {/* Screen 1: AI UGC Video Cards Screen ("ENGINEERED FOR CONTENT GROWTH") */}
              {currentScreen === 'ugc' && (
                <div className="hero-vsl-ugc-screen">
                  <div className="hero-ugc-screen-header">
                    <p className="hero-ugc-subtitle">ENGINEERED FOR CONTENT GROWTH</p>
                    <h3 className="hero-ugc-title">Short Form <span className="arch-title-serif">Styles.</span></h3>
                  </div>

                  <div className="hero-ugc-cards-row">
                    {HERO_UGC_VIDEOS.map((v, idx) => (
                      <div 
                        key={idx} 
                        className="hero-ugc-mini-card"
                        onClick={(e) => {
                          e.stopPropagation();
                          const el = document.getElementById('short-form-styles');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        title={v.title}
                      >
                        <img 
                          src={`https://res.cloudinary.com/dobulag2p/video/upload/so_${v.so || '2'},w_360,h_640,c_fill,q_auto,f_auto/${v.publicId}.jpg`}
                          alt={v.title}
                          className="hero-ugc-card-img"
                        />
                        {/* Bottom Royal Blue Audio Pill matching user's reference image */}
                        <div className="hero-ugc-card-pill">
                          <span className="hero-ugc-pill-time">{v.duration}</span>
                          <div className="hero-ugc-pill-wave">
                            <span style={{ width: '8px', height: '2px', background: '#fff', borderRadius: '1px' }}></span>
                            <span style={{ width: '3px', height: '3px', background: '#fff', borderRadius: '50%' }}></span>
                            <span style={{ width: '12px', height: '2px', background: '#fff', borderRadius: '1px' }}></span>
                            <span style={{ width: '3px', height: '3px', background: '#fff', borderRadius: '50%' }}></span>
                            <span style={{ width: '6px', height: '2px', background: '#fff', borderRadius: '1px' }}></span>
                          </div>
                          <span className="hero-ugc-pill-dots">•••</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hero-ugc-screen-bottom">
                    <a 
                      href="#short-form-styles" 
                      className="hero-ugc-action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        const el = document.getElementById('short-form-styles');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>EXPLORE ALL UGC VIDEOS</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              )}

              {/* Screen 2: Lead Management Architecture Screen */}
              {currentScreen === 'arch' && (
                <div className="hero-vsl-architecture-screen">
                  <div className="arch-screen-header">
                    <div className="arch-screen-badge">
                      <span className="arch-badge-dash">—</span>
                      <span>LEAD MANAGEMENT ARCHITECTURE</span>
                      <span className="arch-badge-dash">—</span>
                    </div>
                    <h3 className="arch-screen-title">
                      20+ <span className="arch-title-serif">Live Solutions.</span>
                    </h3>
                    <p className="arch-screen-desc">
                      Systems that work while you sleep, ensuring no lead goes unqualified and no opportunity is missed.
                    </p>
                  </div>

                  <div className="arch-cards-grid">
                    {/* Card 1: 01 / ARCHITECTURE */}
                    <div 
                      className={`arch-card ${vslStage === 'ugc' || vslStage === 'funnel' || hoveredCard === 'qualification' ? 'highlighted' : ''}`}
                      onMouseEnter={() => setHoveredCard('qualification')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="arch-card-top">
                        <div className="arch-card-icon-wrap">
                          <Workflow size={20} className="arch-card-icon" />
                        </div>
                        <span className="arch-card-num">01 / ARCHITECTURE</span>
                      </div>
                      <h4 className="arch-card-heading">Qualification</h4>
                      <p className="arch-card-text">
                        Sophisticated logic flows that filter noise and prioritize high-value intent.
                      </p>
                      {(vslStage === 'ugc' || vslStage === 'funnel' || hoveredCard === 'qualification') && (
                        <div className="arch-card-live-pill">
                          <span className="pulse-dot" />
                          <span>High-Intent Funnel</span>
                        </div>
                      )}
                    </div>

                    {/* Card 2: 02 / ENGAGEMENT (WhatsApp Connect & AI Chatbot) - STRONGLY HIGHLIGHTED */}
                    <div 
                      className={`arch-card arch-card-whatsapp ${vslStage === 'whatsapp' || hoveredCard === 'whatsapp' ? 'highlighted whatsapp-active' : ''}`}
                      onMouseEnter={() => setHoveredCard('whatsapp')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="arch-card-top">
                        <div className="arch-card-icon-wrap whatsapp-icon-bg">
                          <MessageSquare size={20} className="arch-card-icon" />
                        </div>
                        <span className="arch-card-num">02 / ENGAGEMENT</span>
                      </div>
                      <h4 className="arch-card-heading">Live Sync</h4>
                      <p className="arch-card-text">
                        Instant WhatsApp connect & automated AI chatbot responding even at 2:00 AM.
                      </p>

                      {(vslStage === 'whatsapp' || hoveredCard === 'whatsapp') ? (
                        <div className="arch-whatsapp-live-callout">
                          <div className="arch-whatsapp-pill">
                            <span className="whatsapp-radar-dot" />
                            <span>WhatsApp Connect: Active (2:00 AM)</span>
                          </div>
                          <div className="arch-whatsapp-bubble">
                            <span className="arch-bubble-sender">AI Chatbot</span>
                            <span className="arch-bubble-msg">Instant reply sent to lead in 3s</span>
                          </div>
                        </div>
                      ) : (
                        <div className="arch-card-tag">Instant WhatsApp Connect</div>
                      )}
                    </div>

                    {/* Card 3: 03 / SCALING */}
                    <div 
                      className={`arch-card ${vslStage === 'crm' || hoveredCard === 'crm' ? 'highlighted' : ''}`}
                      onMouseEnter={() => setHoveredCard('crm')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="arch-card-top">
                        <div className="arch-card-icon-wrap">
                          <Globe size={20} className="arch-card-icon" />
                        </div>
                        <span className="arch-card-num">03 / SCALING</span>
                      </div>
                      <h4 className="arch-card-heading">CRM Global</h4>
                      <p className="arch-card-text">
                        Seamless integration with your existing global marketing technology stack.
                      </p>
                      {(vslStage === 'crm' || hoveredCard === 'crm') && (
                        <div className="arch-card-live-pill">
                          <span className="pulse-dot" />
                          <span>Right Ad • Right Person • Right Time</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="arch-screen-bottom">
                    <a
                      href="#contact"
                      className={`arch-deploy-btn ${vslStage === 'cta' ? 'pulse-cta' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        const c = document.getElementById('contact');
                        if (c) c.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>DEPLOY YOUR ARCHITECTURE</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              )}

              {/* Video Player Box (Smoothly transitions between Fullscreen & PiP in bottom right) */}
              {isPlayingVsl ? (
                <div 
                  className={`hero-vsl-video-box ${isPipActive ? 'is-pip' : 'is-full'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isPipActive) {
                      toggleVslPlay();
                    }
                  }}
                >
                  <video
                    ref={vslVideoRef}
                    key={videoLang}
                    src={videoLang === 'en' ? "/vsl_english.mp4?v=2" : "https://res.cloudinary.com/dobulag2p/video/upload/so_13.8,q_auto:eco,vc_h264/Compiled_bboouj.mp4"}
                    playsInline
                    autoPlay
                    onTimeUpdate={handleVslTimeUpdate}
                    onEnded={() => setIsVslPaused(true)}
                    className="hero-video-element"
                  />

                  {/* PiP Header Badge with Live Indicator & Expand/Minimize */}
                  {isPipActive && (
                    <div className="hero-pip-badge-bar" onClick={e => e.stopPropagation()}>
                      <div className="hero-pip-live-indicator">
                        <span className="pip-live-dot" />
                        <span>SPEAKER</span>
                      </div>
                      <button
                        type="button"
                        className="hero-pip-toggle-btn"
                        onClick={() => {
                          setIsPipActive(false);
                          setManualPipOverride(true);
                        }}
                        title="Maximize video"
                      >
                        <Maximize2 size={12} />
                      </button>
                    </div>
                  )}

                  {/* Center Play Button Overlay when paused */}
                  {isVslPaused && (
                    <div className="hero-video-overlay" onClick={toggleVslPlay}>
                      <div className="hero-video-play-btn" aria-label="Play">
                        <div className="hero-video-play-triangle" />
                      </div>
                    </div>
                  )}

                  {/* Minimal Control Bar */}
                  <div className="hero-video-controls" onClick={e => e.stopPropagation()}>
                    <div className="hero-video-scrubber" onClick={handleVslSeek}>
                      <div className="hero-video-progress" style={{ width: `${vslProgress}%` }} />
                    </div>

                    <div className="hero-video-controls-bottom">
                      <div className="hero-video-controls-left">
                        <button
                          type="button"
                          className="hero-video-ctrl-btn"
                          onClick={toggleVslPlay}
                          aria-label={isVslPaused ? "Play" : "Pause"}
                        >
                          {isVslPaused ? <Play size={16} fill="#ffffff" /> : <Pause size={16} fill="#ffffff" />}
                        </button>

                        <button
                          type="button"
                          className="hero-video-ctrl-btn"
                          onClick={toggleVslMute}
                          aria-label={isVslMuted ? "Unmute" : "Mute"}
                        >
                          {isVslMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                      </div>

                      <div className="hero-video-controls-right">
                        {isPipActive ? (
                          <button
                            type="button"
                            className="hero-video-ctrl-btn"
                            onClick={() => {
                              setIsPipActive(false);
                              setManualPipOverride(true);
                            }}
                            title="Expand video"
                          >
                            <Maximize2 size={14} />
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="hero-video-ctrl-btn"
                            onClick={() => {
                              setIsPipActive(true);
                              setManualPipOverride(true);
                            }}
                            title="Mini player"
                          >
                            <Minimize2 size={14} />
                          </button>
                        )}
                        <button
                          type="button"
                          className="hero-video-ctrl-btn"
                          onClick={toggleVslFullscreen}
                          aria-label="Fullscreen"
                        >
                          <Maximize size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src="https://res.cloudinary.com/dobulag2p/image/upload/v1778540902/__I_know_Your_Problem_202605120355_srntis.jpg"
                    alt="Watch Client Acquisition Strategy"
                    className="hero-video-poster"
                    onClick={startVsl}
                  />
                  <div className="hero-video-overlay" onClick={startVsl}>
                    <div className="hero-video-play-btn" aria-label="Play Video">
                      <div className="hero-video-play-triangle" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 3 Value Proposition Checkmarks */}
          <div className="hero-checkmarks-row">
            <div className="hero-checkmark-item">
              <Check className="hero-checkmark-icon" size={18} strokeWidth={3} />
              <span>Automated Hook Testing</span>
            </div>
            <div className="hero-checkmark-item">
              <Check className="hero-checkmark-icon" size={18} strokeWidth={3} />
              <span>20+ Hooks Daily</span>
            </div>
            <div className="hero-checkmark-item">
              <Check className="hero-checkmark-icon" size={18} strokeWidth={3} />
              <span>No Extra Editing Or Filming</span>
            </div>
          </div>

          {/* Primary CTA Button & Trust Proof */}
          <div className="hero-vsl-cta-wrap">
            <a href="#contact" className="hero-vsl-btn">
              <span>Book a Strategy Call</span>
              <ArrowRight size={18} />
            </a>

            <div className="hero-vsl-trust">
              <div className="hero-avatar-stack">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80"
                  alt="Client"
                  className="hero-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
                  alt="Client"
                  className="hero-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80"
                  alt="Client"
                  className="hero-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80"
                  alt="Client"
                  className="hero-avatar-img"
                />
              </div>
              <span>97+ creators &amp; brands trust us</span>
            </div>
          </div>

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

          <motion.div className="chatbot-card mobile-center" whileHover={{ y: -5, boxShadow: '0 25px 60px rgba(37, 211, 102, 0.15)' }} style={{ background: '#fff', border: '1px solid rgba(37, 211, 102, 0.25)', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', padding: '3rem', textAlign: 'left', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }} className="mobile-center-parent">
              <div style={{ background: '#f0fdf4', color: '#16a34a', padding: '1.2rem', borderRadius: '20px' }}><MessageSquare size={28} /></div>
              <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#16a34a', letterSpacing: '0.05em' }}>02 / ENGAGEMENT</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400 }}>WhatsApp & AI Bot</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.8rem', lineHeight: 1.6 }}>Instant WhatsApp connect & automated AI chatbot responding 24/7 even at 2:00 AM.</p>
            <div style={{ marginTop: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '0.35rem 0.75rem', borderRadius: '999px', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }}></span>
              <span>Instant 2:00 AM Auto-Reply</span>
            </div>
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
        <div style={{ marginBottom: '1.5rem' }}></div>



        {/* Bento Grid layout for Pricing */}
        <div className="pricing-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: '1020px', margin: '0 auto' }}>

          <PricingCard
            title="Starter Pack"
            subtitle="Quick launch & high-impact test"
            price={country === 'India' ? "₹4,000" : "$99"}
            volume="3 videos"
            buttonText="Book now"
            whatsappMessage={country === 'India' ? "Hi, I want to book the Starter Pack (3 Videos - ₹4,000)" : "Hi, I want to book the Starter Pack (3 Videos - $99)"}
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
            price={country === 'India' ? "₹9,999" : "$199"}
            volume="8 videos"
            buttonText="Book now"
            whatsappMessage={country === 'India' ? "Hi, I want to book the Growth Pack (8 Videos - ₹9,999)" : "Hi, I want to book the Growth Pack (8 Videos - $199)"}
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
            buttonText="Book now"
            whatsappMessage="Hi, I want to book a Custom / IRL Shoot consultation"
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
