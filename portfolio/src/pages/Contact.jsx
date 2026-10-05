import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, ArrowUpRight, Send, CheckCircle, ArrowRight } from 'lucide-react';

/* ── FAQ Accordion Item ── */
const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        background: open ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
        borderRadius: '20px',
        border: '1px solid rgba(0,0,0,0.06)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        boxShadow: open ? '0 8px 30px rgba(0,0,0,0.04)' : 'none'
      }}
      onClick={() => setOpen(!open)}
    >
      {/* Question Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.4rem 2rem' }}>
        <span style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: '1rem', color: open ? '#2e6347' : '#888' }}
        >
          +
        </motion.span>
      </div>

      {/* Answer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ padding: '0 2rem 1.6rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
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

  const services = ["AI UGC Videos", "IRL Shoots", "Landing Pages", "Automation Systems"];
  const [selectedService, setSelectedService] = useState("AI UGC Videos");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbxABRNpYSU6BJHLRJY1vE0ohMlCGNLjq6OuyECJEEZplZ4KfGebKe54_Ljrg-kJZRZy2w/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    const payload = new URLSearchParams({
      name: data.name || '',
      email: data.email || '',
      service: selectedService || 'Not specified',
      budget: data.budget || '',
      timeline: data.timeline || '',
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

  const contactLinks = [
    { icon: <Mail size={17} />, label: "Email", value: "harshustle@gmail.com", href: "mailto:harshustle@gmail.com" },
    { icon: <Phone size={17} />, label: "Phone", value: "+91 9161955178", href: "tel:9161955178" },
    { icon: <Linkedin size={17} />, label: "LinkedIn", value: "linkedin.com/in/harshustle", href: "https://linkedin.com/in/harshustle" },
    { icon: <Instagram size={17} />, label: "Instagram", value: "@harshustler", href: "https://instagram.com/harshustler" },
  ];

  const inputStyle = (name) => ({
    background: focused === name ? 'rgba(46, 99, 71, 0.03)' : 'transparent',
    border: 'none',
    borderBottom: `2px solid ${focused === name ? '#2e6347' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: 0,
    padding: '1rem 0',
    marginTop: '0.5rem',
    width: '100%',
    outline: 'none',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    color: 'var(--text-primary)',
    transition: 'border-color 0.3s ease, background 0.3s ease',
  });

  return (
    <motion.div
      className="page-container"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ background: 'transparent', color: 'var(--text-primary)' }}
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
            <span className="hero-ref-pill-text">Direct Inquiries • Q4 Production Schedule Open</span>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={titleAnim}
            className="hero-ref-title"
          >
            Start a <br />
            <span className="hero-ref-title-accent">partnership.</span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={subtitleAnim}
            className="hero-ref-subtitle"
          >
            Whether you need high-converting AI video assets, on-location cinematic production, a custom landing page, or an autonomous lead machine.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>

          {/* ── LEFT: FORM ── */}
          <div style={{ background: '#ffffff', borderRadius: '32px', padding: '4rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.02)' }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '4rem 0' }}
              >
                <CheckCircle size={60} color="#2e6347" strokeWidth={1.5} style={{ marginBottom: '1.5rem' }} />
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.8rem' }}>Inquiry Received</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>I will review your project brief and get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>Tell me about your project</h3>

                {/* Service Selector */}
                <div style={{ marginBottom: '3rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2e6347', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>
                    What capability are you looking for?
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        style={{
                          padding: '0.55rem 1.2rem',
                          borderRadius: '99px',
                          border: `1.5px solid ${selectedService === s ? '#2e6347' : 'rgba(0,0,0,0.08)'}`,
                          background: selectedService === s ? '#2e6347' : 'transparent',
                          color: selectedService === s ? '#ffffff' : 'var(--text-primary)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          fontFamily: 'inherit',
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Full Name</span>
                    <input
                      name="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                      style={inputStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Email Address</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      style={inputStyle('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Budget + Timeline Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Budget Range</span>
                    <select
                      name="budget"
                      style={{ ...inputStyle('budget'), cursor: 'pointer' }}
                      onFocus={() => setFocused('budget')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select range</option>
                      <option>Under ₹15,000 / $200</option>
                      <option>₹15,000 – ₹50,000 / $600</option>
                      <option>₹50,000 – ₹1,50,000 / $1800</option>
                      <option>₹1,50,000+ / $2000+</option>
                    </select>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Desired Timeline</span>
                    <select
                      name="timeline"
                      style={{ ...inputStyle('timeline'), cursor: 'pointer' }}
                      onFocus={() => setFocused('timeline')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select timeline</option>
                      <option>Immediate / ASAP</option>
                      <option>1–2 weeks</option>
                      <option>1 month</option>
                      <option>Ongoing Monthly Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '3rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Project Specifics</span>
                  <textarea
                    name="message"
                    placeholder="Tell me what you're building, target audience, and current bottlenecks..."
                    rows="4"
                    required
                    style={{ ...inputStyle('msg'), resize: 'none' }}
                    onFocus={() => setFocused('msg')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="hero-ref-btn"
                  style={{
                    width: '100%',
                    padding: '1.2rem 2rem',
                    background: '#2e6347',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '99px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    fontFamily: 'inherit',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.7rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 10px 30px rgba(46, 99, 71, 0.35)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => !isSubmitting && (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={e => !isSubmitting && (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {isSubmitting ? 'TRANSMITTING...' : <><Send size={16} /> TRANSMIT PROJECT BRIEF</>}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: CONTACT INFO ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Availability Card */}
            <div style={{ background: '#151a17', borderRadius: '28px', padding: '2.5rem', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#4ade80' }}>Open for Work</span>
              </div>
              <p style={{ fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '0.8rem' }}>
                Accepting select <br />new projects <span className="serif-italic" style={{ color: '#4ade80' }}>today.</span>
              </p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>Average response turnaround: under 24 hours.</p>
            </div>

            {/* Contact Links */}
            <div style={{ background: '#ffffff', borderRadius: '28px', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '0' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#2e6347', marginBottom: '1.5rem' }}>
                — Direct Channels
              </p>
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    borderBottom: i < contactLinks.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#2e6347'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'inherit'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                    <div style={{ color: '#2e6347', opacity: 0.8 }}>{link.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.45 }}>{link.label}</p>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '0.1rem' }}>{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} style={{ opacity: 0.3 }} />
                </a>
              ))}
            </div>

            {/* Quick Guarantees */}
            <div style={{ background: '#ffffff', borderRadius: '28px', padding: '2.5rem', border: '1px solid rgba(0,0,0,0.06)' }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#2e6347', marginBottom: '1.2rem' }}>
                — Operational Commitments
              </p>
              {[
                { n: "900+", l: "AI Assets Delivered" },
                { n: "<24h", l: "Average Response Time" },
                { n: "100%", l: "Production Confidentiality" },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 0', borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{s.l}</span>
                  <span style={{ fontSize: '0.98rem', fontWeight: 900, color: '#2e6347' }}>{s.n}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#2e6347', marginBottom: '1rem' }}>
            — Transparent Answers
          </p>
          <h2 className="editorial-section-title">
            Frequently asked <span className="editorial-title-accent">questions.</span>
          </h2>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {[
            {
              q: "How quickly can you deliver AI UGC videos?",
              a: "Most AI UGC videos are delivered within 24–72 hours depending on the complexity. For ongoing packages, I deliver on a structured weekly cadence so your ad pipeline is always stocked."
            },
            {
              q: "What platforms are the videos optimized for?",
              a: "All videos are natively cut for Instagram Reels (9:16), TikTok Ads, YouTube Shorts, and Meta ad formats. Clean vertical layout with high audio and visual retention."
            },
            {
              q: "Do you work with international brands?",
              a: "Yes. I have partnered with brands across UAE, Europe, and Southeast Asia including Dambe Properties, eSanad, and EuroDigital. Remote collaboration is streamlined via Notion or Google Drive."
            },
            {
              q: "What does an IRL shoot include?",
              a: "Full on-location shoots include pre-production planning, on-site filming (cinematic property tours, reveals), editing, grading, motion subtitles, and ready-to-run exports."
            },
            {
              q: "How long does a landing page take to build?",
              a: "A single high-converting landing page takes 3–7 days from initial brief to live deployment, including CRM integration, WhatsApp API routing, and speed optimization."
            },
            {
              q: "What automations can you deploy?",
              a: "I deploy lead qualification logic, CRM sync (HubSpot, Airtable, Google Sheets), WhatsApp AI notification bots, and scheduled social media workflows using Make.com and n8n."
            },
            {
              q: "Do you offer monthly retainers?",
              a: "Yes. Retainers are available for continuous AI video production, regular landing page testing, and pipeline maintenance with priority SLA support."
            },
          ].map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
