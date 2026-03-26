import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Play, ArrowRight, MonitorPlay, Bot, Video, Globe, Instagram, Facebook, Twitter, Ghost, Workflow, MessageSquare } from 'lucide-react';
import _CountUp from 'react-countup';

const CountUp = _CountUp.default || _CountUp;

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
           <div className="editorial-social-strip">
              <a href="https://instagram.com/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://facebook.com/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://twitter.com/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="https://snapchat.com/add/harshustle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Snapchat"><Ghost size={18} /></a>
           </div>
           <h1 className="editorial-headline" style={{ position: 'relative', cursor: 'default' }} onMouseEnter={runSequence}>
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
                             <stop offset="0%" stopColor="#00ff78" />
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
               done <span className="serif-italic">right.</span>
           </h1>
           <p className="editorial-subtext">
              We combine technical engineering, creative management, and 
              specialized media to help brands grow and convert on the 
              platforms that matter most to your audience.
           </p>
           <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <a href="#contact" className="btn btn-primary pill-cta">
                 Get in touch
              </a>
           </div>
        </div>

        <div className="editorial-right">
           <div className="editorial-image-container">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=Video1_czrsxw&player[showLogo]=false&player[autoplay]=true&player[loop]=true&player[muted]=true"
                className="editorial-img"
                style={{ border: 'none' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <div className="status-badge">
                 <div className="status-dot"></div>
                 live now
              </div>
           </div>
        </div>
      </section>

      {/* Services Overview Section (Bento Grid) */}
      <section className="section container" style={{ textAlign: 'center' }}>
         <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '4rem', fontWeight: 800 }}>
            How we can <br /> help you <span className="serif-italic">grow.</span>
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
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 900 }}>Cinematic <br/><span className="serif-italic">Storytelling.</span></h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.5 }}>High-end property tours designed for HNW conversion. Property focused architectures.</p>
                  <a href="#real-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2rem', display: 'block' }}>Explore Capability →</a>
               </div>
            </div>

            {/* AI UGC - SQUARE BENTO */}
            <div className="bento-card mobile-center" style={{ padding: '2.5rem', background: '#f9f6f4', textAlign: 'left' }}>
               <div style={{ fontSize: '3rem', fontWeight: 950, marginBottom: '1rem' }}><CountUp end={900} duration={3} />+</div>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI UGC <br/><span className="serif-italic">Assets.</span></h3>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '2rem' }}>Automated video pipelines with hyper-realistic avatars.</p>
               <a href="#ai-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Infrastructure →</a>
            </div>

            {/* Architecture - SQUARE BENTO */}
            <div className="bento-card mobile-center" style={{ padding: '2.5rem', background: '#f2efed', textAlign: 'left' }}>
               <div style={{ fontSize: '3rem', fontWeight: 950, marginBottom: '1rem' }}><CountUp end={80} duration={3} />+</div>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Landing <br/><span className="serif-italic">Pages.</span></h3>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '2rem' }}>High-converting pages built on premium technical stacks.</p>
               <a href="#real-video" className="nav-link" style={{ opacity: 1, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Portfolio →</a>
            </div>

            {/* Automation - WIDE BENTO */}
            <div className="bento-card wide mobile-center-parent" style={{ padding: '2.5rem', background: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', display: 'flex', textAlign: 'left' }}>
               <div style={{ maxWidth: '450px' }} className="mobile-center">
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Autonomous <br/><span className="serif-italic">Lead Gen.</span></h3>
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
             40+ <span className="serif-italic">IRL</span> <br/>PRODUCTIONS.
          </h1>
          <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '450px', lineHeight: 1.5 }}>Property storytelling for the world's most <br className="hide-on-mobile" />sophisticated real estate developments.</p>
        </div>

        <div className="video-grid" style={{ maxWidth: '1000px', margin: '0 auto 6rem' }}>
           {[
             { videoEmbed: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=Video1_czrsxw&player[showLogo]=false" },
             { title: "Modern Loft Walkthrough", cat: "ARCHITECTURAL", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" },
             { title: "Penthouse Showcase", cat: "CINEMATIC", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800" }
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
           <a href="#contact" className="big-rect-btn" style={{ maxWidth: '800px', margin: '0 auto', background: '#00ff78', color: '#000', border: 'none' }}>
              RESERVE YOUR PRODUCTION <ArrowRight size={20} />
           </a>
        </div>
      </section>

      {/* Detailed AI Video Section - HIGH IMPACT */}
      <section className="section container" id="ai-video" style={{ margin: '6rem auto', position: 'relative' }}>
        <div className="bg-watermark hide-on-mobile" style={{ position: 'absolute', top: '0', left: '-2rem', fontSize: '12rem', fontWeight: 950, opacity: 0.02, pointerEvents: 'none' }}>900+</div>
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0.4 }} className="mobile-pretitle">Synthetic Human Capital</h2>
          <h1 style={{ fontSize: 'clamp(2rem, 9vw, 5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.9 }}>
             900+ <span className="serif-italic">AI UGC</span><br />DEPLOYED.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', margin: '2rem auto 0' }}>Industrial scale influencer content without the <br className="hide-on-mobile" />logistical complexity of human talent.</p>
        </div>

        <div className="video-grid" style={{ maxWidth: '900px', margin: '0 auto 6rem' }}>
           {[
             { title: "Avatar Ecosystem", cat: "INFRASTRUCTURE", img: "https://images.unsplash.com/photo-1633539408181-43285090e547?auto=format&fit=crop&q=80&w=800" },
             { title: "Global Localization", cat: "EXPANSION", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
             { title: "Synthetic Influencer", cat: "BRAND ASSET", img: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=800" }
           ].map((v, idx) => (
             <motion.div key={idx} className="video-thumb-container" whileHover={{ y: -10 }} style={{ height: '420px', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
                <img src={v.img} alt={v.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                <div style={{ position: 'absolute', inset: 0, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                   <p style={{ fontSize: '0.6rem', color: '#fff', opacity: 0.7, textTransform: 'uppercase', fontWeight: 800 }}>{v.cat}</p>
                   <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.2rem', fontWeight: 700 }}>{v.title}</h4>
                </div>
                <div className="play-button" style={{ background: '#fff', position: 'absolute', top: '1.5rem', right: '1.5rem', transform: 'scale(0.8)' }}>
                   <Play size={18} fill="#000" color="#000" />
                </div>
             </motion.div>
           ))}
        </div>
        <div style={{ textAlign: 'center' }}>
           <a href="#contact" className="big-rect-btn" style={{ maxWidth: '800px', margin: '0 auto', background: '#000', color: '#fff', border: 'none' }}>
              SCALE YOUR CONTENT NOW <ArrowRight size={20} />
           </a>
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
             20+ <span className="serif-italic">LIVE</span> <br/>SOLUTIONS.
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
           <a href="#contact" className="big-rect-btn" style={{ maxWidth: '800px', margin: '0 auto', background: '#00ff78', color: '#000', border: 'none' }}>
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

      {/* Performance Package Section */}
      <section className="section container" style={{ background: '#0b0b0b', color: 'white', padding: '6rem 20px', textAlign: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', borderRadius: '40px', margin: '4rem auto' }}>
        <p style={{ color: '#777', letterSpacing: '2px', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase' }}>— PERFORMANCE PACKAGE</p>

        <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 8vw, 64px)', fontWeight: 700, margin: '20px 0', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Let's scale content <br />
          <span style={{ color: '#00ff9c', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 400 }}>that converts.</span>
        </h1>

        <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'left', fontSize: '1.2rem', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1.5rem' }}>
          <p>• 6 high-performing videos every 2 weeks</p>
          <p>• Hook optimization for better retention</p>
          <p>• Fast-paced editing + clean captions</p>
          <p>• Content improvement suggestions</p>
          <p>• Optimized for Reels / Shorts</p>

          <h2 style={{ color: 'white', marginTop: '30px', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800 }}>₹18,000 / 2 weeks</h2>
          <p style={{ color: '#777', fontSize: '1.1rem', marginTop: '-0.5rem', fontWeight: 600 }}>(₹36,000/month)</p>
        </div>

        <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', marginTop: '30px', background: '#00ff9c', color: 'black', padding: '16px 40px', borderRadius: '99px', fontWeight: 800, textDecoration: 'none', transition: 'transform 0.2s', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
           START YOUR PROJECT <ArrowRight size={18} />
        </a>
      </section>

      {/* Contact Section */}
      <section className="section container" id="contact">
         <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900 }}>Meet your <br /> <span className="serif-italic">success.</span></h2>
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
                    <span className="form-label">TELL US ABOUT YOUR PROJECT</span>
                    <textarea name="message" required placeholder="How can we help you grow?" rows="4" className="form-input textarea" style={{ width: '100%', padding: '1rem 0' }}></textarea>
                 </div>
                 <button type="submit" disabled={isSubmitting} className="btn btn-primary pill-cta" style={{ marginTop: '4rem', padding: '1.5rem 4rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE NOW"}
                 </button>
              </form>
            )}
         </div>
      </section>
    </motion.div>
  );
};

export default Home;
