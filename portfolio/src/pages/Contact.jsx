import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, ArrowUpRight, Send, CheckCircle } from 'lucide-react';

/* ── FAQ Accordion Item ── */
const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        background: open ? '#fff' : 'rgba(0,0,0,0.04)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'background 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(!open)}
    >
      {/* Question Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.4rem 2rem' }}>
        <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1, flexShrink: 0, marginLeft: '1rem', color: open ? '#7b4dff' : 'inherit' }}
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
            <p style={{ padding: '0 2rem 1.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
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

  const services = ["AI UGC Videos", "IRL Shoots", "Landing Pages", "Automation Systems"];
  const [selectedService, setSelectedService] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    try {
      // 🚀 Sending silently to your new Vercel backend
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedService || 'Not specified',
          ...data
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Server Error: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please check your Netlify dashboard for errors.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { icon: <Mail size={18} />, label: "Email", value: "harshustle@gmail.com", href: "mailto:harshustle@gmail.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+91 7839661372", href: "tel:7839661372" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/harshustle", href: "https://linkedin.com/in/harshustle" },
    { icon: <Instagram size={18} />, label: "Instagram", value: "@harshustler", href: "https://instagram.com/harshustler" },
  ];

  const inputStyle = (name) => ({
    background: focused === name ? 'rgba(123,77,255,0.04)' : 'transparent',
    border: 'none',
    borderBottom: `2px solid ${focused === name ? '#7b4dff' : 'rgba(0,0,0,0.1)'}`,
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
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
    >
      {/* ── HERO ── */}
      <section className="container" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.4, marginBottom: '1.5rem' }}>— Let's Work Together</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
            START A<br /><span className="serif-italic">Project.</span>
          </h1>
          <p style={{ maxWidth: '350px', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.65 }}>
            Whether you need AI videos, cinematic shoots, a landing page, or an automation system — let's build it.
          </p>
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>

          {/* ── LEFT: FORM ── */}
          <div style={{ background: '#fff', borderRadius: '32px', padding: '4rem' }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '4rem 0' }}
              >
                <CheckCircle size={60} color="#00aa55" strokeWidth={1.5} style={{ marginBottom: '2rem' }} />
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Message Sent!</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.02em' }}>Tell me about your project</h3>

                {/* Service Selector */}
                <div style={{ marginBottom: '3rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}>What do you need?</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        style={{
                          padding: '0.5rem 1.2rem',
                          borderRadius: '99px',
                          border: `1.5px solid ${selectedService === s ? '#7b4dff' : 'rgba(0,0,0,0.12)'}`,
                          background: selectedService === s ? '#7b4dff' : 'transparent',
                          color: selectedService === s ? '#fff' : 'var(--text-primary)',
                          fontSize: '0.8rem',
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
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Full Name</span>
                    <input
                      name="name"
                      type="text"
                      placeholder="Harsh Srivastav"
                      required
                      style={inputStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Email</span>
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
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Budget Range</span>
                    <select
                      name="budget"
                      style={{ ...inputStyle('budget'), cursor: 'pointer' }}
                      onFocus={() => setFocused('budget')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select range</option>
                      <option>Under ₹10,000</option>
                      <option>₹10,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000+</option>
                    </select>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Timeline</span>
                    <select
                      name="timeline"
                      style={{ ...inputStyle('timeline'), cursor: 'pointer' }}
                      onFocus={() => setFocused('timeline')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select timeline</option>
                      <option>ASAP (less than 1 week)</option>
                      <option>1–2 weeks</option>
                      <option>1 month</option>
                      <option>Ongoing / Monthly</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '3rem' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Project Details</span>
                  <textarea
                    name="message"
                    placeholder="Tell me what you're building, what results you need, and any specific requirements..."
                    rows="4"
                    required
                    style={{ ...inputStyle('msg'), resize: 'none' }}
                    onFocus={() => setFocused('msg')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1.2rem 2rem',
                    background: isSubmitting ? '#555' : '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '16px',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    fontFamily: 'inherit',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.7rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'transform 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={e => !isSubmitting && (e.currentTarget.style.background = '#7b4dff')}
                  onMouseLeave={e => !isSubmitting && (e.currentTarget.style.background = '#000')}
                >
                  {isSubmitting ? 'SENDING...' : <><Send size={16} /> SEND MESSAGE</>}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: CONTACT INFO ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Availability Card */}
            <div style={{ background: '#00ff78', borderRadius: '24px', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#000', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Available for work</span>
              </div>
              <p style={{ fontSize: '1.2rem', fontWeight: 900, lineHeight: 1.3, marginBottom: '0.8rem' }}>
                Taking on new clients<br />in <span className="serif-italic">March 2026.</span>
              </p>
              <p style={{ fontSize: '0.8rem', opacity: 0.65, lineHeight: 1.5 }}>Typical response time: under 24 hours.</p>
            </div>

            {/* Contact Links */}
            <div style={{ background: '#fff', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.35, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>— Direct Contact</p>
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
                    borderBottom: i < contactLinks.length - 1 ? '1px solid var(--border-color)' : 'none',
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ opacity: 0.45 }}>{link.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.4 }}>{link.label}</p>
                      <p style={{ fontSize: '0.82rem', fontWeight: 600, marginTop: '0.1rem' }}>{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} style={{ opacity: 0.25 }} />
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div style={{ background: '#f9f6f4', borderRadius: '24px', padding: '2.5rem' }}>
              <p style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.35, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>— Why Work With Me</p>
              {[
                { n: "900+", l: "AI Assets Delivered" },
                { n: "24h", l: "Average Response Time" },
                { n: "100%", l: "Client Satisfaction Goal" },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7rem 0', borderBottom: i < 2 ? '1px solid var(--border-color)' : 'none' }}>
                  <span style={{ fontSize: '0.82rem', opacity: 0.55 }}>{s.l}</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#7b4dff' }}>{s.n}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.4, marginBottom: '1.2rem' }}>Questions</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Frequently asked <span className="serif-italic">questions.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {[
            {
              q: "How quickly can you deliver AI UGC videos?",
              a: "Most AI UGC videos are delivered within 24–72 hours depending on the complexity. For bulk orders (50+ assets), I work on a structured weekly delivery pipeline so you always have fresh content."
            },
            {
              q: "What platforms are the videos optimized for?",
              a: "All videos are natively cut for Instagram Reels (9:16), TikTok Ads, YouTube Shorts, and Meta/Facebook Ad creatives. I can also deliver in 1:1 or 16:9 formats on request."
            },
            {
              q: "Do you work with international brands?",
              a: "Yes. I've worked with brands across UAE, Europe, and Southeast Asia including Dambe Properties, eSanad, and EuroDigital. Remote collaboration works seamlessly — all briefs are handled via Notion or Google Docs."
            },
            {
              q: "What does an IRL shoot include?",
              a: "A full on-location shoot includes pre-production planning, on-site filming (property walkthroughs, cinematic reveals), professional editing, color grading, subtitle overlays, and ready-to-post exports — all delivered within 3–5 days."
            },
            {
              q: "How long does a landing page take to build?",
              a: "A single high-converting landing page typically takes 3–7 days from brief to delivery. The timeline includes design, development, form integration, WhatsApp/CRM setup, and speed optimization."
            },
            {
              q: "What automations can you build?",
              a: "I build lead qualification bots, content-to-publish pipelines, CRM routing (Airtable, HubSpot, Google Sheets), AI chatbots for WhatsApp/Instagram DMs, and scheduled social media posting workflows using Make (Integromat) and n8n."
            },
            {
              q: "Do you offer monthly retainers?",
              a: "Yes — monthly retainers are available for ongoing AI UGC production, social media automation, and landing page management. Retainer clients get priority delivery and dedicated support."
            },
            {
              q: "How do I get started?",
              a: "Just fill out the form above or drop me a message on Instagram @harshustler or email harshustle@gmail.com. I'll respond within 24 hours with a proposal tailored to your goals."
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
