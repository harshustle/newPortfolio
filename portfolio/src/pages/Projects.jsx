import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, X, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import _CountUp from 'react-countup';

const CountUp = _CountUp.default || _CountUp;

/* ── 1. WEB PLATFORMS & SOFTWARE (6 PROJECTS) ── */
const webPlatforms = [
  {
    id: 'tarz-hms',
    title: 'Tarz HMS',
    domain: 'hms.tarztech.com',
    liveUrl: 'http://hms.tarztech.com/',
    category: 'Healthcare System',
    badge: 'Live Platform',
    stat: '12+',
    statLabel: 'Clinics & Centers',
    tagColor: '#2e6347',
    desc: 'NABH-compliant hospital software managing OPD token queues, digital prescriptions, patient EMR records, and GST billing.',
    tags: ['Doctor EMR', 'OPD Queues', 'GST Billing', 'Patient Portal'],
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'hmride',
    title: 'hmRide',
    domain: 'hmride.com',
    liveUrl: 'https://www.hmride.com/',
    category: 'Mobility & Carpooling',
    badge: 'Production App',
    stat: '10K+',
    statLabel: 'Verified Commuters',
    tagColor: '#151a17',
    desc: 'Community-powered daily carpooling app featuring Aadhaar identity verification, Women-Only mode, and real-time GPS tracking.',
    tags: ['Aadhaar Auth', 'Women-Only Mode', 'Live GPS', 'Route Matching'],
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tarztech',
    title: 'Tarz Technologies',
    domain: 'tarztech.com',
    liveUrl: 'https://www.tarztech.com/',
    category: 'Engineering Agency',
    badge: 'Agency Platform',
    stat: '50+',
    statLabel: 'Digital Builds',
    tagColor: '#2e6347',
    desc: 'Digital engineering platform building scalable custom web applications, mobile platforms, and business automations.',
    tags: ['Full-Stack Web', 'Next.js', 'Mobile Apps', 'Cloud APIs'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'coastal-realty',
    title: 'Coastal Luxury Estates',
    domain: 'coastalrealty.design',
    liveUrl: null,
    category: 'Real Estate Funnel',
    badge: 'Acquisition Portal',
    stat: '3.4x',
    statLabel: 'Conversion Lift',
    tagColor: '#151a17',
    desc: 'High-converting interactive project landing page with 3D master plans, floor plan selectors, and instant WhatsApp booking.',
    tags: ['Interactive Floorplans', 'Brochure Download', 'Virtual Tours', 'WhatsApp API'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'brightsmile',
    title: 'BrightSmile Health Network',
    domain: 'brightsmile.clinic',
    liveUrl: null,
    category: 'Clinical Network',
    badge: 'Booking Portal',
    stat: '450+',
    statLabel: 'Monthly Appointments',
    tagColor: '#2e6347',
    desc: 'Multi-branch clinic patient scheduling platform with automated SMS reminders, doctor calendars, and treatment history.',
    tags: ['Doctor Scheduling', 'WhatsApp Alerts', 'EMR Integration', 'Online Booking'],
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'eurodigital',
    title: 'EuroDigital Commerce Hub',
    domain: 'eurodigital.io',
    liveUrl: null,
    category: 'Digital Commerce',
    badge: 'Global Platform',
    stat: '$1.2M+',
    statLabel: 'GMV Processed',
    tagColor: '#151a17',
    desc: 'Scalable commerce and lead distribution architecture with multi-currency checkout, inventory management, and CRM sync.',
    tags: ['Next.js App', 'Stripe Billing', 'Inventory Sync', 'Global CDN'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  }
];

/* ── 2. REAL SHOOT LUXURY PROPERTY FILMS (4 VIDEOS) ── */
const realShoots = [
  {
    id: 'shoot-1',
    tag: 'Real Shoot',
    title: 'Prakhar Properties Luxury Villa 1',
    subtitle: 'On-location 4K walkthrough & interior cinematic reel',
    publicId: '7_lpgoxu',
    so: '2'
  },
  {
    id: 'shoot-2',
    tag: 'Real Shoot',
    title: 'Prakhar Properties Luxury Villa 2',
    subtitle: 'Exterior estate showcase & drone cinematography',
    publicId: '8_l0wsbr',
    so: '2'
  },
  {
    id: 'shoot-3',
    tag: 'Real Shoot',
    title: 'Luxury Penthouse Walkthrough',
    subtitle: 'Architectural walkthrough tailored for high-intent Meta ad traffic',
    publicId: 'prakhar_properties_1778384102_3893172810243885227_73535257018_zi9osj',
    so: '1'
  },
  {
    id: 'shoot-4',
    tag: 'Real Shoot',
    title: 'Commercial Estate Showcase',
    subtitle: 'High-pacing property walkthrough with subtitles and sound design',
    publicId: 'prakhar_properties_1778305436_3892698647800481401_73535257018_ybkmvq',
    so: '1'
  }
];

/* ── 3. SHORT-FORM VIDEO ADS & UGC (4 VIDEOS) ── */
const ugcVideos = [
  {
    id: 'ugc-1',
    tag: 'AI UGC',
    title: 'Realtor Storytelling Ad',
    subtitle: 'Scroll-stopping commercial hook scripted for property buyers',
    publicId: 'Edited_wlnmjv',
    so: '3'
  },
  {
    id: 'ugc-2',
    tag: 'AI UGC',
    title: 'Luxury Property Concept Reel',
    subtitle: 'Dynamic typography, voiceover, and pacing for Meta Ads',
    publicId: 'Ai_ugc_10_ygvpdh',
    so: '2'
  },
  {
    id: 'ugc-3',
    tag: 'AI UGC',
    title: 'Investor Avatar Pitch',
    subtitle: 'Ultra-realistic presenter avatar explaining real estate ROI',
    publicId: '0404_itrkrs',
    so: '1'
  },
  {
    id: 'ugc-4',
    tag: 'AI UGC',
    title: 'Property Automation Ad',
    subtitle: 'Targeted ad creative testing hooks across Reels and Shorts',
    publicId: 'ai_ugc_9_ovpev5',
    so: '2'
  }
];

/* ── 4. AUTOMATED SYSTEMS & INFRASTRUCTURE (4 SYSTEMS) ── */
const systemsList = [
  {
    id: 'sys-calling',
    title: 'Conversational AI Voice Calling',
    category: 'Voice Infrastructure',
    badge: '24/7 Voice Agent',
    stat: '3s',
    statLabel: 'Lead Callback Speed',
    tagColor: '#2e6347',
    desc: 'Autonomous inbound and outbound calling agents that verify buyer budget, screening timeline, and route warm leads directly to human closers.',
    tags: ['Instant Callback', 'Budget Screening', 'Live Human Transfer', 'CRM Webhooks'],
    img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sys-whatsapp',
    title: 'WhatsApp Lead Nurturing Pipeline',
    category: 'Funnel Automation',
    badge: 'Live Auto-Reply',
    stat: '100%',
    statLabel: 'Automated Routing',
    tagColor: '#151a17',
    desc: 'Instant lead response within 3 seconds, automated delivery of PDF brochures and floor plans, pre-qualification survey, and site visit booking.',
    tags: ['Instant Greeting', 'PDF Delivery', 'Brochures', 'Site Visit Booking'],
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sys-crm',
    title: 'Automated CRM & Webhook Engine',
    category: 'Data Pipeline',
    badge: 'Multi-Tenant Sync',
    stat: '20+',
    statLabel: 'Live Sync Pipelines',
    tagColor: '#2e6347',
    desc: 'End-to-end webhook architecture connecting Meta ad leads, landing page submissions, and WhatsApp inquiries into centralized CRM dashboards.',
    tags: ['HubSpot Sync', 'Google Sheets API', 'LeadSquared', 'Make.com & n8n'],
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sys-tracking',
    title: 'Omnichannel Conversion Tracking',
    category: 'Attribution & Ads',
    badge: 'Server-Side API',
    stat: '99.4%',
    statLabel: 'Attribution Match',
    tagColor: '#151a17',
    desc: 'Server-side Meta Conversions API (CAPI), Google Tag Manager Server, and offline event upload for accurate lead attribution and lower CPA.',
    tags: ['Meta CAPI', 'Server GTM', 'Pixel Tracking', 'Event Attribution'],
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200'
  }
];

/* ── STATS SUMMARY ── */
const barData = [
  { label: 'AI UGC Assets', value: '900+', pct: 95, color: '#2e6347' },
  { label: 'IRL Cinematic Shoots', value: '40+', pct: 88, color: '#151a17' },
  { label: 'Landing Pages & Apps', value: '80+', pct: 82, color: '#3d7a5b' },
  { label: 'Lead Automation Pipelines', value: '20+', pct: 75, color: '#525954' },
];

/* ── Animated Bar Component ── */
const AnimatedBar = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

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

/* ── Main Projects Page Component ── */
const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [playingVideoId, setPlayingVideoId] = useState(null);

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
  const chartInView = useInView(chartRef, { once: true, margin: '-80px' });

  const getThumbnail = (publicId, so = '2') => {
    return `https://res.cloudinary.com/dobulag2p/video/upload/so_${so},w_540,h_960,c_fill,q_auto,f_auto/${publicId}.jpg`;
  };

  const showWeb = activeTab === 'all' || activeTab === 'web';
  const showShoots = activeTab === 'all' || activeTab === 'shoots';
  const showUgc = activeTab === 'all' || activeTab === 'ugc';
  const showSystems = activeTab === 'all' || activeTab === 'systems';

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
      <section className="hero-ref-container" style={{ paddingBottom: '2.5rem' }}>
        <div className="hero-ref-content">
          <motion.div
            initial="initial"
            animate="animate"
            variants={pillAnim}
            className="hero-ref-pill"
          >
            <span className="hero-ref-dot" />
            <span className="hero-ref-pill-text">wstatemedia • 18 Selected Works &amp; Deliverables</span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={titleAnim}
            className="hero-ref-title"
          >
            Featured work <br />
            <span className="hero-ref-title-accent">&amp; platforms.</span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={subtitleAnim}
            className="hero-ref-subtitle"
          >
            A comprehensive portfolio of live software systems, on-location property films, short-form video ads, and automated lead pipelines produced for clients worldwide.
          </motion.p>
        </div>
      </section>

      {/* ── MINIMAL HUMAN FILTER TABS ── */}
      <section className="container" style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={`projects-filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Work <span className="projects-filter-count">18</span>
          </button>
          <button
            type="button"
            className={`projects-filter-btn ${activeTab === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTab('web')}
          >
            Web Systems &amp; Software <span className="projects-filter-count">6</span>
          </button>
          <button
            type="button"
            className={`projects-filter-btn ${activeTab === 'shoots' ? 'active' : ''}`}
            onClick={() => setActiveTab('shoots')}
          >
            Real Property Shoots <span className="projects-filter-count">4</span>
          </button>
          <button
            type="button"
            className={`projects-filter-btn ${activeTab === 'ugc' ? 'active' : ''}`}
            onClick={() => setActiveTab('ugc')}
          >
            Short-Form Video Ads <span className="projects-filter-count">4</span>
          </button>
          <button
            type="button"
            className={`projects-filter-btn ${activeTab === 'systems' ? 'active' : ''}`}
            onClick={() => setActiveTab('systems')}
          >
            Lead Automation Pipelines <span className="projects-filter-count">4</span>
          </button>
        </div>
      </section>

      {/* ── 1. WEB SYSTEMS & SOFTWARE (6 CARDS) ── */}
      {showWeb && (
        <section className="container" style={{ marginBottom: '5.5rem' }}>
          <div style={{ marginBottom: '2.2rem' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#2e6347', marginBottom: '0.4rem' }}>
              — Production Systems
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>
              Web Platforms &amp; Software
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {webPlatforms.map((p) => (
              <div
                key={p.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.07)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Banner Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />

                  <div style={{ position: 'absolute', top: '1.2rem', left: '1.2rem', background: p.tagColor, color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {p.category}
                  </div>

                  <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem' }}>
                    <div style={{ fontSize: '2.4rem', fontWeight: 950, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>
                      {p.stat}
                    </div>
                    <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.85)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0.2rem 0 0' }}>
                      {p.statLabel}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0, color: '#111827' }}>
                        {p.title}
                      </h3>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'monospace', color: '#6b7280', fontWeight: 600 }}>
                        {p.domain}
                      </span>
                    </div>

                    <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                      {p.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
                      {p.tags.map((t, idx) => (
                        <span key={idx} style={{ fontSize: '0.72rem', fontWeight: 600, background: '#f3f4f6', color: '#374151', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(0,0,0,0.06)',
                        color: '#111827',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        textDecoration: 'none'
                      }}
                    >
                      <span>Visit Live Platform</span>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#111827', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ArrowUpRight size={16} />
                      </div>
                    </a>
                  ) : (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(0,0,0,0.06)',
                        color: '#6b7280',
                        fontSize: '0.86rem',
                        fontWeight: 600
                      }}
                    >
                      <span>{p.badge}</span>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f3f4f6', color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShieldCheck size={16} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 2. REAL ON-LOCATION LUXURY PROPERTY FILMS (4 VIDEOS) ── */}
      {showShoots && (
        <section className="container" style={{ marginBottom: '5.5rem' }}>
          <div style={{ marginBottom: '2.2rem' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#2e6347', marginBottom: '0.4rem' }}>
              — Cinematic Media
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>
              On-Location Property Shoots &amp; Walkthroughs
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem' }}>
            {realShoots.map((v) => {
              const isPlaying = playingVideoId === v.id;
              const videoEmbedUrl = `https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=${v.publicId}&autoplay=true&muted=false&controls=true`;

              return (
                <div
                  key={v.id}
                  style={{
                    position: 'relative',
                    aspectRatio: '9 / 16',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#0f1411',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.08)'
                  }}
                >
                  {isPlaying ? (
                    <>
                      <iframe
                        src={videoEmbedUrl}
                        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={v.title}
                      />
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(null)}
                        style={{
                          position: 'absolute',
                          top: '0.8rem',
                          right: '0.8rem',
                          background: 'rgba(0,0,0,0.7)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: '#fff',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          zIndex: 5
                        }}
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src={getThumbnail(v.publicId, v.so)}
                        alt={v.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '1.4rem',
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.75) 100%)',
                          color: '#fff'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '0.3rem 0.75rem', borderRadius: '99px' }}>
                            {v.tag}
                          </span>
                        </div>

                        <div
                          onClick={() => setPlayingVideoId(v.id)}
                          style={{
                            alignSelf: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            color: '#111827',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          <Play size={22} fill="#111827" style={{ marginLeft: '3px' }} />
                        </div>

                        <div>
                          <h4 style={{ fontSize: '0.98rem', fontWeight: 800, margin: '0 0 0.25rem', color: '#fff' }}>
                            {v.title}
                          </h4>
                          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                            {v.subtitle}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── 3. SHORT-FORM VIDEO ADS & UGC (4 VIDEOS) ── */}
      {showUgc && (
        <section className="container" style={{ marginBottom: '5.5rem' }}>
          <div style={{ marginBottom: '2.2rem' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#2e6347', marginBottom: '0.4rem' }}>
              — High Hook Advertising
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>
              Short-Form Storytelling Ads &amp; UGC
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.8rem' }}>
            {ugcVideos.map((v) => {
              const isPlaying = playingVideoId === v.id;
              const videoEmbedUrl = `https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=${v.publicId}&autoplay=true&muted=false&controls=true`;

              return (
                <div
                  key={v.id}
                  style={{
                    position: 'relative',
                    aspectRatio: '9 / 16',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#0f1411',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.08)'
                  }}
                >
                  {isPlaying ? (
                    <>
                      <iframe
                        src={videoEmbedUrl}
                        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={v.title}
                      />
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(null)}
                        style={{
                          position: 'absolute',
                          top: '0.8rem',
                          right: '0.8rem',
                          background: 'rgba(0,0,0,0.7)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: '#fff',
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          zIndex: 5
                        }}
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src={getThumbnail(v.publicId, v.so)}
                        alt={v.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '1.4rem',
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.75) 100%)',
                          color: '#fff'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(46, 99, 71, 0.85)', padding: '0.3rem 0.75rem', borderRadius: '99px' }}>
                            {v.tag}
                          </span>
                        </div>

                        <div
                          onClick={() => setPlayingVideoId(v.id)}
                          style={{
                            alignSelf: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            color: '#111827',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          <Play size={22} fill="#111827" style={{ marginLeft: '3px' }} />
                        </div>

                        <div>
                          <h4 style={{ fontSize: '0.98rem', fontWeight: 800, margin: '0 0 0.25rem', color: '#fff' }}>
                            {v.title}
                          </h4>
                          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                            {v.subtitle}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── 4. LEAD AUTOMATION PIPELINES (4 CARDS) ── */}
      {showSystems && (
        <section className="container" style={{ marginBottom: '6rem' }}>
          <div style={{ marginBottom: '2.2rem' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#2e6347', marginBottom: '0.4rem' }}>
              — Lead Systems &amp; Routing
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0 }}>
              Autonomous Lead Qualification &amp; Routing
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {systemsList.map((s) => (
              <div
                key={s.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.07)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Banner Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />

                  <div style={{ position: 'absolute', top: '1.2rem', left: '1.2rem', background: s.tagColor, color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {s.category}
                  </div>

                  <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem' }}>
                    <div style={{ fontSize: '2.2rem', fontWeight: 950, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>
                      {s.stat}
                    </div>
                    <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.85)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0.2rem 0 0' }}>
                      {s.statLabel}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 0.6rem', color: '#111827' }}>
                      {s.title}
                    </h3>

                    <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                      {s.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
                      {s.tags.map((t, idx) => (
                        <span key={idx} style={{ fontSize: '0.72rem', fontWeight: 600, background: '#f3f4f6', color: '#374151', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(0,0,0,0.06)',
                      color: '#2e6347',
                      fontSize: '0.86rem',
                      fontWeight: 700
                    }}
                  >
                    <span>{s.badge}</span>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(46, 99, 71, 0.1)', color: '#2e6347', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Zap size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

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
              From live enterprise healthcare platforms and mobility apps to luxury real estate shoots and high-converting ad creative.
            </p>

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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://cal.com/wstate/30min"
              target="_blank"
              rel="noopener noreferrer"
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
              <span>BOOK STRATEGY CALL</span>
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '1.1rem 2.2rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                borderRadius: '99px'
              }}
            >
              <span>Direct Inquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
