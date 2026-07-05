import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Play, ArrowRight, MonitorPlay, Bot, Video, Globe, Instagram, Facebook, Twitter, Ghost, Workflow, MessageSquare, Heart, MessageCircle, Send, Bookmark, Music } from 'lucide-react';
import _CountUp from 'react-countup';
import VideoMarquee from '../components/VideoMarquee';
import PricingCard from '../components/PricingCard';

const CountUp = _CountUp.default || _CountUp;

const InstagramReelCard = ({ v, idx }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(v.likes) || 1200);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const formatLikes = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <motion.div
      key={idx}
      whileHover={{ y: -10 }}
      style={{ position: 'relative', paddingTop: '177.78%', borderRadius: '24px', overflow: 'hidden', background: '#111', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
    >
      <iframe
        src={v.reelId 
          ? `https://www.instagram.com/reel/${v.reelId}/embed/` 
          : `https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=${v.publicId}&player[showLogo]=false&player[controls]=false`
        }
        title={v.title}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        scrolling="no"
        style={v.reelId ? {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'scale(1.45)',
          transformOrigin: 'center center',
          border: 'none',
          background: '#000',
        } : {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
      
      {/* Instagram Reels UI Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.2rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.3) 100%)'
      }}>
        {/* Top: Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{
            background: 'rgba(0, 0, 0, 0.4)',
            color: '#fff',
            fontSize: '0.65rem',
            fontWeight: 700,
            padding: '0.25rem 0.6rem',
            borderRadius: '6px',
            backdropFilter: 'blur(4px)',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}>
            <Instagram size={10} color="#fff" /> Reels
          </span>
        </div>

        {/* Bottom / Right Section */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', marginTop: 'auto' }}>
          {/* Left Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '75%', color: '#fff', textAlign: 'left' }}>
            {/* User */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <img 
                src="https://res.cloudinary.com/dobulag2p/image/upload/v1774819007/HarshPng_fynfd0.png" 
                alt="harshustler" 
                style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #fff' }} 
              />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>harshustler</span>
              <span style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                border: '1px solid #fff',
                borderRadius: '4px',
                padding: '0.1rem 0.3rem',
                lineHeight: 1,
                cursor: 'pointer',
                pointerEvents: 'auto',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)'
              }}>Follow</span>
            </div>
            
            {/* Title / Caption */}
            <p style={{ fontSize: '0.72rem', lineHeight: 1.3, fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.6)', margin: 0 }}>
              {v.title}
            </p>
            
            {/* Audio */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', opacity: 0.85 }}>
              <Music size={9} color="#fff" />
              <span style={{ fontSize: '0.6rem', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>Original Audio - @harshustler</span>
            </div>
          </div>

          {/* Right Actions */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.8rem',
            pointerEvents: 'auto',
            color: '#fff',
            marginBottom: '0.2rem'
          }}>
            {/* Heart / Like */}
            <button 
              onClick={handleLike}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem', padding: 0, outline: 'none' }}
            >
              <motion.div 
                whileTap={{ scale: 0.8 }}
                style={{
                  background: liked ? 'rgba(237, 28, 36, 0.9)' : 'rgba(0, 0, 0, 0.4)',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.3s'
                }}
              >
                <Heart size={16} fill={liked ? '#fff' : 'none'} color={liked ? '#fff' : '#fff'} />
              </motion.div>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{formatLikes(likeCount)}</span>
            </button>

            {/* Comment */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)',
              }}>
                <MessageSquare size={16} />
              </div>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{v.comments}</span>
            </div>

            {/* Send / Share */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)',
              }}>
                <Send size={14} style={{ transform: 'rotate(-20deg) translate(1px, -1px)' }} />
              </div>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>Share</span>
            </div>

            {/* Bookmark */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(4px)',
              }}>
                <Bookmark size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState('India');
  const [isMuted, setIsMuted] = useState(true);
  const [reelsCount, setReelsCount] = useState(12);
  const [avgViews, setAvgViews] = useState(8000);
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

  const armControls = useAnimation();
  const textControls = useAnimation();
  const topClawControls = useAnimation();
  const bottomClawControls = useAnimation();
  const isAnimating = useRef(false);

  const runSequence = useCallback(async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    try {
      // 1. Reset text and put arm securely off-screen
      textControls.set({ x: 0, opacity: 1 });
      armControls.set({ x: '-100vw' });
      topClawControls.set({ rotate: -25 });
      bottomClawControls.set({ rotate: 25 });

      // 2. Creep in slowly towards the text
      await armControls.start({ x: 0, transition: { duration: 2.5, ease: 'easeOut' } });
      
      // 3. Claws snap shut
      topClawControls.start({ rotate: 0, transition: { duration: 0.2, type: 'spring' } });
      await bottomClawControls.start({ rotate: 0, transition: { duration: 0.2, type: 'spring' } });
      
      // Dramatic pause before snatching
      await new Promise(r => setTimeout(r, 400));
      
      // 4. Jerk the text and arm away together
      await textControls.start({ x: '-100vw', transition: { duration: 1.2, ease: [0.5, 0, 0.1, 1] } });
      
      // 5. Instantly reset layout positions while hidden
      armControls.set({ x: '-100vw' });
      topClawControls.set({ rotate: -25 });
      bottomClawControls.set({ rotate: 25 });
      textControls.set({ x: 0, opacity: 0 });
      
      // 6. Smoothly fade the text back into the headline
      await textControls.start({ opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } });
    } catch (err) {
      console.log('Animation interrupted');
    } finally {
      isAnimating.current = false;
    }
  }, [armControls, textControls, topClawControls, bottomClawControls]);

  useEffect(() => {
    // Start animation on mount only
    const timer = setTimeout(() => {
       runSequence();
    }, 500); // slight delay to let the page load
    
    return () => clearTimeout(timer);
  }, [runSequence]);

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbxABRNpYSU6BJHLRJY1vE0ohMlCGNLjq6OuyECJEEZplZ4KfGebKe54_Ljrg-kJZRZy2w/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    const payload = new URLSearchParams({
      name:     data.name     || '',
      email:    data.email    || '',
      service:  'Not specified',
      budget:   '',
      timeline: '',
      message:  data.message  || '',
    });

    try {
      await fetch(SHEET_URL, {
        method:  "POST",
        mode:    "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body:    payload.toString(),
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

  const previewProjects = [
    { title: "AI Automation Engine", type: "Automation", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "Real Estate Portal", type: "Website", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800" },
    { title: "Lead Generation CRM", type: "SaaS", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <motion.div 
      className="page-container"
    initial="initial" animate="animate" exit="exit" variants={pageVariants}
      style={{ background: 'var(--bg-color)', color: 'var(--text-primary)' }}
    >
      {/* Editorial Hero Section */}
      <section className="hero-editorial container">
        <div className="editorial-left">
            <div className="editorial-social-strip" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
               <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href="https://instagram.com/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram"><Instagram size={18} /></a>
                  <a href="https://facebook.com/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook"><Facebook size={18} /></a>
                  <a href="https://twitter.com/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter"><Twitter size={18} /></a>
                  <a href="https://snapchat.com/add/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Snapchat"><Ghost size={18} /></a>
               </div>
               
               {/* Prominent Floating Alert Ticker Banner */}
               <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: 'rgba(123, 77, 255, 0.08)', 
                  border: '1px solid rgba(123, 77, 255, 0.15)',
                  padding: '0.4rem 1rem', 
                  borderRadius: '99px',
                  boxShadow: '0 4px 15px rgba(123, 77, 255, 0.05)',
               }}>
                  <div className="status-dot animate-pulse" style={{ width: '6px', height: '6px', background: '#00b354', borderRadius: '50%', boxShadow: '0 0 8px #00b354', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7b4dff', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                     {tickerItems[tickerIndex]}
                  </span>
               </div>
            </div>
            <h1 className="editorial-headline" style={{ position: 'relative', cursor: 'default', marginTop: '1rem' }} onMouseEnter={runSequence}>
              <motion.span 
                 animate={textControls}
                 style={{ display: 'inline-block', position: 'relative' }}
              >
                 <motion.div
                    animate={armControls}
                    style={{
                       position: 'absolute',
                       right: '100%',
                       top: '50%',
                       marginTop: '-60px',
                       marginRight: '-15px',
                       zIndex: 10,
                       pointerEvents: 'none',
                    }}
                 >
                    <svg width="260" height="120" viewBox="0 0 260 120" fill="none" style={{ overflow: 'visible', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}>
                       <defs>
                          <linearGradient id="armWhite" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
                             <stop offset="0%" stopColor="#ffffff" />
                             <stop offset="100%" stopColor="#e2e2e2" />
                          </linearGradient>
                          <linearGradient id="armDark" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
                             <stop offset="0%" stopColor="#222" />
                             <stop offset="100%" stopColor="#0a0a0a" />
                          </linearGradient>
                          <linearGradient id="neonGlow" x1="0" y1="0" x2="1" y2="1">
                             <stop offset="0%" stopColor="#c084fc" />
                             <stop offset="100%" stopColor="#00b354" />
                          </linearGradient>
                       </defs>

                       <rect x="-800" y="50" width="940" height="20" rx="4" fill="url(#armWhite)" />
                       <rect x="-800" y="56" width="940" height="8" fill="url(#armDark)" />
                       <rect x="-800" y="58" width="940" height="4" fill="url(#neonGlow)" opacity="0.8" />
                       <rect x="100" y="47" width="10" height="26" rx="2" fill="url(#armDark)" />
                       <rect x="70" y="47" width="10" height="26" rx="2" fill="url(#armDark)" />

                       <rect x="120" y="38" width="46" height="44" rx="12" fill="url(#armWhite)" />
                       <circle cx="143" cy="60" r="18" fill="url(#armDark)" />

                       <motion.g 
                          animate={topClawControls}
                          style={{ transformOrigin: "143px 60px" }}
                       >
                          <path d="M 143 50 C 180 15, 220 15, 260 35 L 253 44 C 215 28, 180 28, 143 60 Z" fill="url(#armWhite)" />
                          <path d="M 235 32 L 260 35 L 253 44 L 227 40 Z" fill="url(#armDark)" />
                          <circle cx="245" cy="38" r="3" fill="url(#neonGlow)" />
                       </motion.g>

                       <motion.g 
                          animate={bottomClawControls}
                          style={{ transformOrigin: "143px 60px" }}
                       >
                          <path d="M 143 70 C 180 105, 220 105, 260 85 L 253 76 C 215 92, 180 92, 143 60 Z" fill="url(#armWhite)" />
                          <path d="M 235 88 L 260 85 L 253 76 L 227 80 Z" fill="url(#armDark)" />
                          <circle cx="245" cy="82" r="3" fill="url(#neonGlow)" />
                       </motion.g>

                       <circle cx="143" cy="60" r="10" fill="url(#armWhite)" />
                       <circle cx="143" cy="60" r="4" fill="url(#neonGlow)" />
                       <circle cx="143" cy="60" r="2" fill="#fff" />
                    </svg>
                 </motion.div>
                 Short
              </motion.span>
               {' '}form <br />
               done <span className="serif-italic highlight-purple">right.</span>
           </h1>
           
           <p className="editorial-subtext" style={{ fontSize: '1.02rem', lineHeight: 1.5, marginTop: '1rem' }}>
              Stop leaving money on the table. We build <strong style={{ color: '#fff' }}>high-converting video assets</strong> and automated sales funnels that turn views into qualified appointments.
           </p>
           
           {/* ── INTERACTIVE REACH & LEAD ESTIMATOR ── */}
           <div style={{
              background: 'rgba(255, 255, 255, 0.45)',
              border: '1.5px solid rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '1.2rem',
              marginTop: '1.5rem',
              boxShadow: '0 8px 32px rgba(123, 77, 255, 0.04)',
              maxWidth: '480px',
              textAlign: 'left'
           }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>
                 📈 Revenue & Attention Estimator
              </p>
              
              {/* Slider 1: Reels count */}
              <div style={{ marginBottom: '1.2rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 700 }}>
                    <span>Reels Published Per Month</span>
                    <span style={{ color: '#7b4dff' }}>{reelsCount} videos</span>
                 </div>
                 <input 
                    type="range" min="4" max="30" value={reelsCount} 
                    onChange={e => setReelsCount(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: '#7b4dff', cursor: 'pointer' }}
                 />
              </div>

              {/* Slider 2: Average Views */}
              <div style={{ marginBottom: '1.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 700 }}>
                    <span>Target Average Views Per Reel</span>
                    <span style={{ color: '#7b4dff' }}>{(avgViews / 1000).toFixed(0)}K views</span>
                 </div>
                 <input 
                    type="range" min="2000" max="50000" step="1000" value={avgViews} 
                    onChange={e => setAvgViews(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: '#7b4dff', cursor: 'pointer' }}
                 />
              </div>

              {/* Estimator outputs row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.2rem' }}>
                 <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.5, margin: 0 }}>Total Reach</p>
                    <p style={{ fontSize: '1.3rem', fontWeight: 950, color: '#000', margin: '0.2rem 0 0 0' }}>
                       {((reelsCount * avgViews) / 1000).toFixed(0)}K
                    </p>
                 </div>
                 <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.5, margin: 0 }}>Est. Leads (0.6%)</p>
                    <p style={{ fontSize: '1.3rem', fontWeight: 950, color: '#00aa55', margin: '0.2rem 0 0 0' }}>
                       {Math.round(reelsCount * avgViews * 0.006)}
                    </p>
                 </div>
                 <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.5, margin: 0 }}>Est. Pipeline</p>
                    <p style={{ fontSize: '1.3rem', fontWeight: 950, color: '#7b4dff', margin: '0.2rem 0 0 0' }}>
                       ${(Math.round(reelsCount * avgViews * 0.006) * 1200 / 1000).toFixed(1)}K
                    </p>
                 </div>
              </div>
           </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
               <a href="#contact" className="btn btn-primary pill-cta" style={{ padding: '1.2rem 2.5rem', fontSize: '1rem', fontWeight: 800, background: '#7b4dff', color: '#fff', border: 'none', boxShadow: '0 8px 30px rgba(123, 77, 255, 0.3)', letterSpacing: '0.05em' }}>
                  BOOK A STRATEGY CALL <ArrowRight size={18} style={{ marginLeft: '8px' }} />
               </a>
               <a href="#pricing" className="btn btn-primary pill-cta" style={{ padding: '1.1rem 2rem', fontSize: '0.9rem', fontWeight: 800, background: 'transparent', color: '#000', border: '1.5px solid #000', textDecoration: 'none', letterSpacing: '0.05em', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}>
                  VIEW PRICING
               </a>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="status-dot animate-pulse" style={{ position: 'static', width: '8px', height: '8px', background: '#00b354', borderRadius: '50%', boxShadow: '0 0 10px #00b354' }}></div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.85, color: '#000' }}>Taking 3 new clients</span>
               </div>
            </div>
        </div>

        <div className="editorial-right">
           <div style={{
             position: 'relative',
             width: '320px',
             height: '570px',
             border: '10px solid #1a1a1a',
             borderRadius: '36px',
             boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
             overflow: 'hidden',
             background: '#000',
             margin: '0 auto',
           }}>
              <iframe
                 src={`https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=7_lpgoxu&player[showLogo]=false&player[autoplay]=true&player[loop]=true&player[muted]=${isMuted}`}
                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                 allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                 allowFullScreen
              />
              
              <div style={{
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 pointerEvents: 'none',
                 zIndex: 3,
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'space-between',
                 padding: '1.2rem',
                 background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.3) 100%)'
              }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span style={{
                       background: 'rgba(0, 0, 0, 0.4)',
                       color: '#fff',
                       fontSize: '0.65rem',
                       fontWeight: 700,
                       padding: '0.25rem 0.6rem',
                       borderRadius: '6px',
                       backdropFilter: 'blur(4px)',
                       letterSpacing: '0.05em',
                       display: 'flex',
                       alignItems: 'center',
                       gap: '0.25rem'
                    }}>
                       <Instagram size={10} color="#fff" /> Reels
                    </span>
                    
                    <div style={{
                       background: 'rgba(237, 28, 36, 0.9)',
                       color: '#fff',
                       fontSize: '0.62rem',
                       fontWeight: 800,
                       padding: '0.25rem 0.6rem',
                       borderRadius: '6px',
                       textTransform: 'uppercase',
                       letterSpacing: '0.05em'
                    }}>
                       LIVE NOW
                    </div>
                 </div>

                 <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'auto',
                    zIndex: 4
                 }}>
                    <button 
                       onClick={() => setIsMuted(!isMuted)}
                       style={{
                          background: 'rgba(0,0,0,0.6)',
                          border: '1.5px solid rgba(255,255,255,0.4)',
                          color: '#fff',
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                          outline: 'none',
                          transition: 'transform 0.2s',
                          pointerEvents: 'auto'
                       }}
                       onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                       onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                       {isMuted ? (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                             <Play size={20} fill="#fff" style={{ marginLeft: '4px' }} />
                             <span style={{ fontSize: '0.5rem', fontWeight: 800, marginTop: '2px', textTransform: 'uppercase' }}>UNMUTE</span>
                          </div>
                       ) : (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                             <span style={{ fontSize: '0.5rem', fontWeight: 800, marginTop: '2px', textTransform: 'uppercase' }}>MUTED</span>
                          </div>
                       )}
                    </button>
                 </div>

                 <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxWidth: '75%', color: '#fff', textAlign: 'left' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <img 
                            src="https://res.cloudinary.com/dobulag2p/image/upload/v1774819007/HarshPng_fynfd0.png" 
                            alt="harshustler" 
                            style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #fff' }} 
                          />
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>harshustler</span>
                          <span style={{
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            border: '1px solid #fff',
                            borderRadius: '4px',
                            padding: '0.1rem 0.3rem',
                            lineHeight: 1,
                            textShadow: '0 1px 4px rgba(0,0,0,0.6)'
                          }}>Follow</span>
                       </div>
                       <p style={{ fontSize: '0.72rem', lineHeight: 1.3, fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.6)', margin: 0 }}>
                          Premium Real Estate Walkthrough tour demo video.
                       </p>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', opacity: 0.85 }}>
                          <Music size={9} color="#fff" />
                          <span style={{ fontSize: '0.6rem', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>Original Audio - @harshustler</span>
                       </div>
                    </div>

                    <div style={{
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center',
                       gap: '0.8rem',
                       color: '#fff',
                       marginBottom: '0.2rem'
                    }}>
                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
                          <div style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(4px)',
                          }}>
                            <Heart size={15} fill="#fff" color="#fff" />
                          </div>
                          <span style={{ fontSize: '0.6rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>4.8K</span>
                       </div>
                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
                          <div style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(4px)',
                          }}>
                            <MessageSquare size={15} />
                          </div>
                          <span style={{ fontSize: '0.6rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>112</span>
                       </div>
                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
                          <div style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(4px)',
                          }}>
                            <Send size={13} style={{ transform: 'rotate(-20deg) translate(1px, -1px)' }} />
                          </div>
                          <span style={{ fontSize: '0.6rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>Share</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <div className="hero-marquee-wrapper" style={{ position: 'relative', width: '100%', marginBottom: '6rem', marginTop: '3rem' }}>
         <VideoMarquee />
      </div>

      {/* Services Overview Section (Bento Grid) */}
      <section className="section container" style={{ textAlign: 'center' }}>
         <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '4rem', fontWeight: 800 }}>
            How we can <br /> help you <span className="serif-italic highlight-purple">grow.</span>
         </h2>
         
         <div className="bento-grid" style={{ maxWidth: '1200px', margin: '0 auto', gap: '1.5rem' }}>
            {/* Real Video - LARGE BENTO */}
            <div className="bento-card large" style={{ padding: '3rem', background: '#fff' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }} className="mobile-center-parent">
                  <div style={{ background: '#f7f7f7', padding: '1rem', borderRadius: '15px' }}><MonitorPlay size={28} /></div>
                  <div style={{ textAlign: 'right' }} className="mobile-center">
                     <div style={{ fontSize: '4rem', fontWeight: 950, letterSpacing: '-0.05em' }}><CountUp end={40} duration={3} />+</div>
                     <p style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.4, textTransform: 'uppercase' }}>IRL Shoots</p>
                  </div>
               </div>
               <div style={{ marginTop: 'auto', textAlign: 'left' }} className="mobile-center">
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 900 }}>Cinematic <br/><span className="serif-italic highlight-purple">Storytelling.</span></h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.5 }}>High-end property tours designed for HNW conversion. Property focused architectures.</p>
                  <a href="#real-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2rem', display: 'block' }}>Explore Capability →</a>
               </div>
            </div>

            {/* AI UGC - SQUARE BENTO */}
            <div className="bento-card mobile-center" style={{ padding: '2.5rem', background: '#f9f6f4', textAlign: 'left' }}>
               <div style={{ fontSize: '3rem', fontWeight: 950, marginBottom: '1rem' }}><CountUp end={900} duration={3} />+</div>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI UGC <br/><span className="serif-italic highlight-purple">Assets.</span></h3>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '2rem' }}>Automated video pipelines with hyper-realistic avatars.</p>
               <a href="#ai-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Infrastructure →</a>
            </div>

            {/* Architecture - SQUARE BENTO */}
            <div className="bento-card mobile-center" style={{ padding: '2.5rem', background: '#f2efed', textAlign: 'left' }}>
               <div style={{ fontSize: '3rem', fontWeight: 950, marginBottom: '1rem' }}><CountUp end={80} duration={3} />+</div>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Landing <br/><span className="serif-italic highlight-purple">Pages.</span></h3>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '2rem' }}>High-converting pages built on premium technical stacks.</p>
               <a href="#real-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Portfolio →</a>
            </div>

            {/* Automation - WIDE BENTO */}
            <div className="bento-card wide mobile-center-parent" style={{ padding: '2.5rem', background: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', display: 'flex', textAlign: 'left' }}>
               <div style={{ maxWidth: '450px' }} className="mobile-center">
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Autonomous <br/><span className="serif-italic highlight-purple">Lead Gen.</span></h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Lead qualification and CRM routing systems that work while you sleep. 20+ Systems Deployed.</p>
               </div>
               <div style={{ textAlign: 'right' }} className="mobile-center">
                  <div style={{ fontSize: '3.5rem', fontWeight: 950 }}><CountUp end={20} duration={3} />+</div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.4, textTransform: 'uppercase' }}>Live Systems</p>
               </div>
            </div>
         </div>
      </section>

      {/* Detailed Real Video Section - HIGH IMPACT */}
      <section className="section container" id="real-video" style={{ background: '#f9f6f4', borderRadius: '40px', margin: '4rem auto', position: 'relative', overflow: 'hidden', padding: '6rem 3rem' }}>
        <div className="bg-watermark hide-on-mobile" style={{ position: 'absolute', top: '2rem', right: '-5rem', fontSize: '15rem', fontWeight: 950, opacity: 0.03, pointerEvents: 'none' }}>REAL</div>
        <div style={{ marginBottom: '5rem', position: 'relative', zIndex: 1, textAlign: 'left' }} className="mobile-center">
          <h2 style={{ fontSize: '0.85rem', fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-center mobile-pretitle">
             <span style={{ width: '40px', height: '1px', background: '#000' }} className="hide-on-mobile"></span>
             Property Boutique
          </h2>
          <h1 style={{ fontSize: 'clamp(2.1rem, 10vw, 6rem)', lineHeight: 0.85, fontWeight: 900, letterSpacing: '-0.04em' }}>
             40+ <span className="serif-italic highlight-purple">IRL</span> <br/>PRODUCTIONS.
          </h1>
          <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '450px', lineHeight: 1.5 }}>Property storytelling for the world's most <br className="hide-on-mobile" />sophisticated real estate developments.</p>
        </div>

        <div className="video-grid" style={{ maxWidth: '1000px', margin: '0 auto 6rem' }}>
                {[
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=7_lpgoxu&player[showLogo]=false" },
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=8_l0wsbr&player[showLogo]=false" },
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=prakhar_properties_1778384102_3893172810243885227_73535257018_zi9osj" },
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=prakhar_properties_1778305436_3892698647800481401_73535257018_ybkmvq" },
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=prakhar_properties_1778047823_3890849699595157209_73535257018_yo65rr" },
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=Video1_czrsxw&player[showLogo]=false" },
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=SanjeevniEnclavePhase2_isj6lw.mp4&player[showLogo]=false" },
                   { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=__%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80_%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BE_%E0%A4%95%E0%A5%81%E0%A4%82%E0%A4%9C_%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A4%BE_%E0%A4%AC%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%A1_%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%87%E0%A4%B5%E0%A5%87%E0%A4%9F_%E0%A4%B2%E0%A4%BF%E0%A4%AE%E0%A4%BF%E0%A4%9F%E0%A5%87%E0%A4%A1_%E0%A4%95%E0%A5%80_%E0%A4%A4%E0%A4%B0%E0%A4%AB%E0%A4%BC_%E0%A4%B8%E0%A5%87_%E0%A4%9C%E0%A4%BC%E0%A4%AC%E0%A4%B0%E0%A4%A6%E0%A4%B8%E0%A5%8D%E0%A4%A4_%E0%A4%85%E0%A4%A8%E0%A4%BE%E0%A4%89%E0%A4%82%E0%A4%B8%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%9F__%E0%A4%B2%E0%A4%96%E0%A4%A8%E0%A4%8A_SCR_%E0%A4%AE%E0%A5%87%E0%A4%82_xkttqd&player[showLogo]=false" }
                ].map((v, idx) => (
             <motion.div key={idx} className="video-thumb-container" whileHover={{ y: -10 }} style={{ height: '520px', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
                {v.videoEmbed ? (
                  <iframe
                    src={v.videoEmbed}
                    style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img src={v.img} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                    <div style={{ position: 'absolute', inset: 0, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
                       <p style={{ fontSize: '0.65rem', color: '#fff', opacity: 0.7, textTransform: 'uppercase', fontWeight: 800 }}>{v.cat}</p>
                       <h4 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '0.4rem', fontWeight: 700 }}>{v.title}</h4>
                    </div>
                    <div className="play-button" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', position: 'absolute', top: '2rem', right: '2rem' }}>
                       <Play size={20} fill="#fff" color="#fff" />
                    </div>
                  </>
                )}
             </motion.div>
           ))}
        </div>
        <div style={{ textAlign: 'center' }}>
           <a href="#contact" className="big-rect-btn" style={{ maxWidth: '800px', margin: '0 auto', background: '#c084fc', color: '#000', border: 'none', boxShadow: '0 10px 40px rgba(192, 132, 252, 0.3)' }}>
              BOOK YOUR STRATEGY CALL <ArrowRight size={20} />
           </a>
        </div>
      </section>

      {/* Detailed AI Video Section - HIGH IMPACT */}
      <section className="section container" id="ai-video" style={{ margin: '6rem auto', position: 'relative' }}>
        <div className="bg-watermark hide-on-mobile" style={{ position: 'absolute', top: '0', left: '-2rem', fontSize: '12rem', fontWeight: 950, opacity: 0.02, pointerEvents: 'none' }}>900+</div>
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0.4 }} className="mobile-pretitle">Synthetic Human Capital</h2>
          <h1 style={{ fontSize: 'clamp(2rem, 9vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.9 }}>
             900+ <span className="serif-italic highlight-purple">AI UGC</span><br />DEPLOYED.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '2rem auto 0' }}>Industrial scale influencer content without the <br className="hide-on-mobile" />logistical complexity of human talent.</p>
        </div>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto 6rem' }}>
           <style>
             {`
               @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
               .my-clone-annotation {
                 position: absolute; top: -100px; left: -170px;
                 z-index: 10; pointer-events: none; display: flex; flex-direction: column; align-items: center;
               }
               @media (max-width: 768px) {
                 .my-clone-annotation {
                   top: -75px; left: -15px; transform: scale(0.6); transform-origin: left bottom;
                 }
               }
             `}
           </style>
           {/* Decorative hand-drawn arrow */}
           <div className="my-clone-annotation">
              <div style={{ fontFamily: '"Dancing Script", cursive', fontSize: '3.5rem', color: '#000', transform: 'rotate(-15deg)', textShadow: '0 2px 10px rgba(0,0,0,0.05)', whiteSpace: 'nowrap', marginBottom: '-5px', marginLeft: '30px' }}>
                 My clone
              </div>
              <svg width="140" height="150" viewBox="0 0 140 150" fill="none" style={{ overflow: 'visible', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))', transform: 'translateY(10px) rotate(-10deg)' }}>
                 {/* Main sweeping spine */}
                 <path d="M 20 10 Q 30 90 120 115" stroke="#ed1c24" strokeWidth="5" strokeLinecap="round" fill="none" />
                 {/* Top arrow stroke */}
                 <path d="M 70 50 L 125 120" stroke="#ed1c24" strokeWidth="5" strokeLinecap="round" fill="none" />
                 {/* Bottom arrow stroke */}
                 <path d="M 55 135 Q 90 130 125 120" stroke="#ed1c24" strokeWidth="5" strokeLinecap="round" fill="none" />
              </svg>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
             {[
               { title: "AI AVATAR — REALTOR", cat: "AI UGC", publicId: "Edited_wlnmjv", likes: "2400", comments: "182" },
               { title: "REAL ESTATE AD — HOUSING", cat: "INSTAGRAM REEL", reelId: "DZgzkzuPDbj", likes: "5100", comments: "482" },
               { title: "AI UGC — 1", cat: "AI UGC", publicId: "Ai_ugc_10_ygvpdh", likes: "1850", comments: "94" },
               { title: "AI UGC — 2", cat: "AI UGC", publicId: "ai_ugc_9_ovpev5", likes: "3200", comments: "210" },
               { title: "LUXURY TOUR — CLIENT", cat: "INSTAGRAM REEL", reelId: "DZ0q20kT9Yo", likes: "8900", comments: "614" },
               { title: "AI AVATAR — PROMO", cat: "AI UGC", publicId: "0404_itrkrs", likes: "1500", comments: "72" },
             ].map((v, idx) => (
               <InstagramReelCard key={idx} v={v} idx={idx} />
             ))}
           </div>
        </div>
        <div style={{ textAlign: 'center', position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
           <a href="#contact" className="big-rect-btn" style={{ width: '100%', background: '#000', color: '#fff', border: 'none' }}>
              SCALE YOUR CONTENT NOW <ArrowRight size={20} />
           </a>
           
           {/* Responsive Styling for Annotations */}
           <style>
             {`
               .robot-annotation {
                 position: absolute; right: -180px; bottom: 15px;
                 z-index: 10; pointer-events: none; display: flex; flex-direction: column; alignItems: center;
               }
               @media (max-width: 768px) {
                 .robot-annotation {
                   right: -10px; bottom: 65px; transform: scale(0.55); transform-origin: center bottom;
                 }
               }
             `}
           </style>

           {/* Custom Floating Robot Guide */}
           <motion.div 
             className="robot-annotation"
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
           >
              <div style={{ fontFamily: '"Dancing Script", cursive', fontSize: '2.5rem', color: '#000', transform: 'rotate(10deg)', textShadow: '0 2px 10px rgba(0,0,0,0.05)', whiteSpace: 'nowrap', marginBottom: '5px', marginLeft: '50px' }}>
                 Click here!
              </div>

              <div style={{ position: 'relative' }}>
                 {/* Complete Black Robot Silhouette */}
                 <svg width="90" height="120" viewBox="0 0 90 120" fill="none" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))', position: 'relative', zIndex: 2 }}>
                    {/* Antenna */}
                    <line x1="45" y1="20" x2="45" y2="0" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="45" cy="0" r="5" fill="#000"/>
                    {/* Head */}
                    <rect x="25" y="20" width="40" height="30" rx="10" fill="#000" />
                    {/* Eyes */}
                    <ellipse cx="35" cy="35" rx="3" ry="5" fill="#fff" />
                    <ellipse cx="55" cy="35" rx="3" ry="5" fill="#fff" />
                    {/* Body */}
                    <path d="M 20 55 C 20 55, 70 55, 70 55 C 80 90, 65 115, 45 115 C 25 115, 10 90, 20 55 Z" fill="#000" />
                    {/* Holding point for arrow */}
                    <circle cx="20" cy="75" r="6" fill="#000" />
                 </svg>

                 {/* The Guiding Arrow (pointing left-down toward the button) */}
                 <svg width="140" height="80" viewBox="0 0 140 80" fill="none" style={{ position: 'absolute', right: '70px', bottom: '0px', zIndex: 1 }}>
                    <path d="M 140 25 Q 70 40 10 60" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" fill="none" />
                    <path d="M 10 60 L 25 50 M 10 60 L 20 70" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                 </svg>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Detailed AI Product Shoot Section - HIGH IMPACT */}
      <section className="section container" id="ai-product-shoot" style={{ margin: '6rem auto', position: 'relative' }}>
        <div className="bg-watermark hide-on-mobile" style={{ position: 'absolute', top: '0', left: '-2rem', fontSize: '12rem', fontWeight: 950, opacity: 0.02, pointerEvents: 'none' }}>SHOOT</div>
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0.4 }} className="mobile-pretitle">Next-Gen Visuals</h2>
          <h1 style={{ fontSize: 'clamp(2rem, 9vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.9 }}>
             AI PRODUCT <br /><span className="serif-italic highlight-purple">SHOOTS.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '2rem auto 0' }}>Stunning, high-conversion product videography powered by AI. No studios, no limits.</p>
        </div>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto 6rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
             {[
               { title: "PRODUCT CINEMATICS", cat: "AI PRODUCT", publicId: "IMG_5939_erscc8" },
               { title: "BRAND SHOWCASE", cat: "AI PRODUCT", publicId: "IMG_5906_ic8t1k" },
               { title: "DYNAMIC VISUALS", cat: "AI PRODUCT", publicId: "download_cmsezt" },
               { title: "CREATIVE RENDERS", cat: "AI PRODUCT", publicId: "IMG_5920_hs89uq" },
             ].map((v, idx) => (
               <motion.div
                 key={idx}
                 whileHover={{ y: -10 }}
                 style={{ position: 'relative', paddingTop: '177.78%', borderRadius: '24px', overflow: 'hidden', background: '#111', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
               >
                 <iframe
                   src={`https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=${v.publicId}&player[showLogo]=false&player[controls]=true`}
                   title={v.title}
                   allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                   allowFullScreen
                   style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                 />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', pointerEvents: 'none', zIndex: 2 }}>
                   <p style={{ fontSize: '0.6rem', color: '#fff', opacity: 0.7, textTransform: 'uppercase', fontWeight: 800 }}>{v.cat}</p>
                   <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.2rem', fontWeight: 700 }}>{v.title}</h4>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Detailed Automation Section - HIGH IMPACT */}
      <section className="section container" id="chatbot" style={{ background: '#f9f6f4', borderRadius: '40px', margin: '4rem auto', position: 'relative', overflow: 'hidden', padding: '6rem 3rem' }}>
        <div className="bg-watermark hide-on-mobile" style={{ position: 'absolute', bottom: '2rem', left: '-5rem', fontSize: '15rem', fontWeight: 950, opacity: 0.03, pointerEvents: 'none', transform: 'rotate(-5deg)' }}>SYSTEM</div>
        <div style={{ marginBottom: '5rem', position: 'relative', zIndex: 1, textAlign: 'right' }} className="mobile-center">
          <h2 style={{ fontSize: '0.85rem', fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }} className="mobile-center mobile-pretitle">
             Lead Management Architecture
             <span style={{ width: '40px', height: '1px', background: '#000' }} className="hide-on-mobile"></span>
          </h2>
          <h1 style={{ fontSize: 'clamp(2.1rem, 10vw, 6rem)', lineHeight: 0.85, fontWeight: 900, letterSpacing: '-0.04em' }}>
             20+ <span className="serif-italic highlight-purple">LIVE</span> <br/>SOLUTIONS.
          </h1>
          <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '450px', lineHeight: 1.5, marginLeft: 'auto', marginRight: 'auto' }} className="mobile-center">Systems that work while you sleep, ensuring no lead <br/>goes unqualified and no opportunity is missed.</p>
        </div>

        <div className="video-grid" style={{ maxWidth: '1100px', margin: '0 auto 6rem' }}>
            <motion.div className="chatbot-card mobile-center" whileHover={{ y: -5 }} style={{ background: '#fff', border: 'none', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', padding: '3rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }} className="mobile-center-parent">
                 <div style={{ background: '#f7f7f7', padding: '1.2rem', borderRadius: '20px' }}><Workflow size={28} color="#000" /></div>
                 <span style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '0.05em' }}>01 / ARCHITECTURE</span>
              </div>
              <h3>Qualification</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '1rem' }}>Sophisticated logic flows that filter noise and prioritize high-value intent.</p>
            </motion.div>

            <motion.div className="chatbot-card mobile-center" whileHover={{ y: -5 }} style={{ background: '#fff', border: 'none', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', padding: '3rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }} className="mobile-center-parent">
                 <div style={{ background: '#f7f7f7', padding: '1.2rem', borderRadius: '20px' }}><MessageSquare size={28} color="#000" /></div>
                 <span style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '0.05em' }}>02 / ENGAGEMENT</span>
              </div>
              <h3>Live Sync</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '1rem' }}>Instant, hyper-personalized engagement across all customer touchpoints.</p>
            </motion.div>

            <motion.div className="chatbot-card mobile-center" whileHover={{ y: -5 }} style={{ background: '#fff', border: 'none', boxShadow: '0 25px 60px rgba(0,0,0,0.04)', padding: '3rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }} className="mobile-center-parent">
                 <div style={{ background: '#f7f7f7', padding: '1.2rem', borderRadius: '20px' }}><Globe size={28} color="#000" /></div>
                 <span style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '0.05em' }}>03 / SCALING</span>
              </div>
              <h3>CRM Global</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '1rem' }}>Seamless integration with your existing global marketing technology stack.</p>
            </motion.div>
        </div>

        <div style={{ textAlign: 'center' }}>
           <a href="#contact" className="big-rect-btn" style={{ maxWidth: '800px', margin: '0 auto', background: '#c084fc', color: '#000', border: 'none' }}>
              DEPLOY YOUR ARCHITECTURE <ArrowRight size={20} />
           </a>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="section container" style={{ borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
         <div style={{ textAlign: 'left', marginBottom: '4rem' }} className="mobile-center">
            <h2 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4 }} className="mobile-pretitle">Track Record of Execution</h2>
         </div>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }} className="mobile-center">
            <div>
               <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>80+</div>
               <p style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Landing <br/>Pages</p>
            </div>
            <div>
               <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>900+</div>
               <p style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI UGC <br/>Assets</p>
            </div>
            <div>
               <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>40+</div>
               <p style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>IRL <br/>Shoots</p>
            </div>
            <div>
               <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>20+</div>
               <p style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Custom <br/>Automations</p>
            </div>
         </div>
         <div style={{ marginTop: '5rem', background: '#e9e5e2', height: '250px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="serif-italic" style={{ fontSize: '2rem', opacity: 0.2 }}>Reliable delivery on an industrial scale.</p>
         </div>
      </section>

      {/* Performance Package Section / Conversion Details */}
      <section id="pricing" className="section container performance-section" style={{ background: '#f8f7f5', color: '#111', padding: '6rem 20px', textAlign: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', borderRadius: '40px', margin: '4rem auto' }}>
        <p style={{ color: '#777', letterSpacing: '2px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase' }}>— PERFORMANCE CONTENT SYSTEMS</p>
            <h1 style={{ color: '#111', fontSize: 'clamp(2.5rem, 8vw, 54px)', fontWeight: 700, margin: '20px auto 40px', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '800px' }}>
          Video Content That <br className="hide-on-mobile" /><span className="serif-italic highlight-purple">Drives Results.</span>
        </h1>
            <p style={{ color: '#333', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
               We don’t just create videos — we build a <strong style={{color: '#111'}}>content system designed to attract, engage, and convert your audience.</strong>
            </p>

        <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <label style={{ fontSize: '1.2rem', fontWeight: 600 }}>Select Region:</label>
          <select 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
            style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', borderRadius: '12px', border: '2px solid #ccc', outline: 'none', cursor: 'pointer', background: '#fff', color: '#000', fontWeight: '600' }}
          >
            <option value="India">India</option>
            <option value="Global">Global (USA/UK/etc.)</option>
          </select>
        </div>

        {/* Bento Grid layout for Pricing */}
        <div className="pricing-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          
               <PricingCard 
                   title="Real Shoot"
                   subtitle="Premium on-location videography"
                   price={country === 'India' ? "₹24,000" : "-"}
                   disabled={country === 'Global'}
                   volume="3 videos minimum"
                   buttonText="GET STARTED"
                   features={[
                      "Strategy & Planning",
                      "Scriptwriting",
                      "On-Location Shoot",
                      "Cinematic Editing"
                   ]}
               />

               <PricingCard 
                   title="Real Estate UGC"
                   subtitle="High-conversion AI/UGC content"
                   price={country === 'India' ? "₹12,000" : "$150"}
                   volume="3 videos minimum"
                   buttonText="GET STARTED"
                   special={true}
                   features={[
                      "Strategy & Planning",
                      "Scriptwriting",
                      "UGC / AI Generation",
                      "Dynamic Editing"
                   ]}
               />

               <PricingCard 
                   title="3 Minute Package"
                   subtitle="Extended cinematic narrative"
                   price={country === 'India' ? "₹18,000" : "$220"}
                   volume="1 video (3 min)"
                   buttonText="GET STARTED"
                   features={[
                      "Advanced Storyboarding",
                      "Extended Shoot Time",
                      "Premium Editing & Grade",
                      "Full Narrative Arc"
                   ]}
               />
        </div>

        {/* Visual 5-Step Process Flow */}
        <div className="flow-container" style={{ maxWidth: '1000px', margin: '4rem auto', textAlign: 'left', background: '#111', borderRadius: '32px', padding: '4rem 3rem', border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '3.5rem', color: '#fff', textAlign: 'center' }}>The Custom Flow</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Step 1 */}
            <div className="flow-step" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
               <div style={{ background: 'rgba(192, 132, 252, 0.08)', color: '#c084fc', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 900, flexShrink: 0 }}>01</div>
               <div style={{ flex: 1, paddingTop: '0.2rem' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.8rem' }}>Strategy Call</h4>
                  <p style={{ color: '#ddd', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Before we create, we align. <br/>
                    <span style={{ opacity: 0.6, fontSize: '0.9rem', fontStyle: 'italic' }}>Banane se pehle, hum clarity ensure karte hain.</span>
                  </p>
                  
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem' }}>On this call, we understand <br/><span style={{ fontWeight: 400, opacity: 0.5, fontStyle: 'italic', fontSize: '0.85rem' }}>Is call mein hum samajhte hain:</span></p>
                    <div className="flow-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
                      <div>
                        <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}><span style={{color: '#c084fc', marginRight: '6px'}}>•</span> Type of videos needed</div>
                        <div style={{ color: '#777', fontSize: '0.8rem', fontStyle: 'italic', paddingLeft: '18px' }}>Aap kis type ke videos chahte ho</div>
                      </div>
                      <div>
                        <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}><span style={{color: '#c084fc', marginRight: '6px'}}>•</span> Number of videos & timeline</div>
                        <div style={{ color: '#777', fontSize: '0.8rem', fontStyle: 'italic', paddingLeft: '18px' }}>Kitne videos chahiye aur kab</div>
                      </div>
                      <div>
                        <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}><span style={{color: '#c084fc', marginRight: '6px'}}>•</span> Target audience</div>
                        <div style={{ color: '#777', fontSize: '0.8rem', fontStyle: 'italic', paddingLeft: '18px' }}>Aapka target audience kaun hai</div>
                      </div>
                      <div>
                        <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}><span style={{color: '#c084fc', marginRight: '6px'}}>•</span> Goal of the content</div>
                        <div style={{ color: '#777', fontSize: '0.8rem', fontStyle: 'italic', paddingLeft: '18px' }}>Sales / branding / engagement</div>
                      </div>
                      <div>
                        <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}><span style={{color: '#c084fc', marginRight: '6px'}}>•</span> Style & references</div>
                        <div style={{ color: '#777', fontSize: '0.8rem', fontStyle: 'italic', paddingLeft: '18px' }}>Kis type ka content chahiye</div>
                      </div>
                      <div>
                        <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}><span style={{color: '#c084fc', marginRight: '6px'}}>•</span> Current content performance</div>
                        <div style={{ color: '#777', fontSize: '0.8rem', fontStyle: 'italic', paddingLeft: '18px' }}>Abhi kya perform kar raha hai</div>
                      </div>
                      <div>
                        <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}><span style={{color: '#c084fc', marginRight: '6px'}}>•</span> Best approach</div>
                        <div style={{ color: '#777', fontSize: '0.8rem', fontStyle: 'italic', paddingLeft: '18px' }}>AI UGC ya real shoot better rahega</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #c084fc, transparent)', marginLeft: '29px', marginTop: '-1rem', marginBottom: '-1rem', opacity: 0.5 }} className="hide-on-mobile"></div>

            {/* Step 2 */}
            <div className="flow-step" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
               <div style={{ background: 'rgba(255, 255, 255, 0.04)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 900, flexShrink: 0 }}>02</div>
               <div style={{ flex: 1, paddingTop: '0.8rem' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Trial Video</h4>
                  <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>We start with 1 paid trial video. This allows you to evaluate:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    <span style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem 1.2rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 700, color: '#ddd' }}><span style={{color: '#c084fc', marginRight: '8px'}}>✔</span> Content quality</span>
                    <span style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem 1.2rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 700, color: '#ddd' }}><span style={{color: '#c084fc', marginRight: '8px'}}>✔</span> Editing style</span>
                    <span style={{ background: 'rgba(255,255,255,0.03)', padding: '0.6rem 1.2rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 700, color: '#ddd' }}><span style={{color: '#c084fc', marginRight: '8px'}}>✔</span> Overall direction</span>
                  </div>
               </div>
            </div>

            <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #fff, transparent)', marginLeft: '29px', marginTop: '-1rem', marginBottom: '-1rem', opacity: 0.15 }} className="hide-on-mobile"></div>

            {/* Step 3 */}
            <div className="flow-step" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
               <div style={{ background: 'rgba(255, 255, 255, 0.04)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 900, flexShrink: 0 }}>03</div>
               <div style={{ flex: 1, paddingTop: '0.8rem' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>First Delivery</h4>
                  <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.6 }}>The trial video is delivered based on the agreed strategy. Feedback (if any) is incorporated to refine the approach.</p>
               </div>
            </div>

            <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #fff, transparent)', marginLeft: '29px', marginTop: '-1rem', marginBottom: '-1rem', opacity: 0.15 }} className="hide-on-mobile"></div>

            {/* Step 4 */}
            <div className="flow-step" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
               <div style={{ background: 'rgba(255, 255, 255, 0.04)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 900, flexShrink: 0 }}>04</div>
               <div style={{ flex: 1, paddingTop: '0.8rem' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Scale or Exit</h4>
                  <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>If you’re satisfied with the results:</p>
                  <ul style={{ listStyle: 'none', padding: 0, color: '#ddd', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                    <li style={{display: 'flex', gap: '0.6rem'}}><span style={{color: '#c084fc'}}>•</span> We move forward with a 6-video package (2-week cycle)</li>
                    <li style={{display: 'flex', gap: '0.6rem'}}><span style={{color: '#c084fc'}}>•</span> A formal agreement is signed</li>
                  </ul>
                  <p style={{ color: '#777', fontStyle: 'italic', fontSize: '0.95rem' }}>If not, no obligation — we part ways professionally.</p>
               </div>
            </div>

            <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, #fff, transparent)', marginLeft: '29px', marginTop: '-1rem', marginBottom: '-1rem', opacity: 0.15 }} className="hide-on-mobile"></div>

            {/* Step 5 */}
            <div className="flow-step" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
               <div style={{ background: 'rgba(255, 255, 255, 0.04)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 900, flexShrink: 0 }}>05</div>
               <div style={{ flex: 1, paddingTop: '0.8rem' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Ongoing Growth</h4>
                  <p style={{ color: '#aaa', fontSize: '1.05rem', lineHeight: 1.6 }}>Once validated, we scale into a consistent content system for long-term results.</p>
               </div>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #e6e2de', margin: '4rem auto 0', maxWidth: '900px', paddingTop: '4rem', paddingBottom: '1rem' }}>
           <h3 style={{ color: '#111', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              <span className="serif-italic highlight-purple">You only commit</span> <br/> after seeing real results.
           </h3>

           <a href="#contact" className="btn pill-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', marginTop: '30px', background: '#c084fc', color: 'black', fontWeight: 900, textDecoration: 'none', transition: 'transform 0.2s', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.95rem' }}>
              RESERVE YOUR TRIAL <ArrowRight size={18} />
           </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section container" id="contact" style={{ padding: '8rem 20px', background: '#050505', borderRadius: '40px', margin: '4rem auto', color: '#fff' }}>
         <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(192, 132, 252, 0.1)', color: '#c084fc', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Limited Availability</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>Ready to <span className="serif-italic highlight-purple">Scale?</span></h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Book a free discovery call. We'll map out a custom content and conversion strategy for your brand, completely free of charge.</p>
         </div>
         <div className="contact-form-container">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div className="form-group">
                       <span className="form-label">FULL NAME</span>
                       <input type="text" name="name" required placeholder="John Doe" className="form-input" style={{ width: '100%', padding: '1rem 0' }} />
                    </div>
                    <div className="form-group">
                       <span className="form-label">EMAIL ADDRESS</span>
                       <input type="email" name="email" required placeholder="john@example.com" className="form-input" style={{ width: '100%', padding: '1rem 0' }} />
                    </div>
                 </div>
                 <div className="form-group" style={{ marginTop: '3rem' }}>
                    <span className="form-label" style={{ color: '#bbb' }}>TELL US ABOUT YOUR CURRENT ROADBLOCKS</span>
                    <textarea name="message" required placeholder="What's your main bottleneck right now? (e.g. need more leads, better video content...)" rows="4" className="form-input textarea" style={{ width: '100%', padding: '1rem 0', background: 'transparent', color: '#fff', borderColor: '#333' }}></textarea>
                 </div>
                 <button type="submit" disabled={isSubmitting} className="btn btn-primary pill-cta" style={{ marginTop: '3rem', padding: '1.5rem 4rem', width: '100%', opacity: isSubmitting ? 0.7 : 1, background: '#c084fc', color: '#000', fontWeight: 900, border: 'none', fontSize: '1.1rem', boxShadow: '0 0 30px rgba(192, 132, 252, 0.3)' }}>
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
