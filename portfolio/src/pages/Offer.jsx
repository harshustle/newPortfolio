import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, Flame, Lock, Star, Zap, Clock, Shield } from 'lucide-react';

/* ─── Countdown hook ─── */
function useTimer() {
  const [s, setS] = useState(86399);
  useEffect(() => {
    const id = setInterval(() => setS(p => (p > 0 ? p - 1 : 86399)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sc = String(s % 60).padStart(2, '0');
  return { h, m, sc };
}

/* ─── Tick / Cross row ─── */
const Row = ({ ok, children }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.85rem' }}>
    {ok
      ? <Check size={18} style={{ color: '#a855f7', flexShrink: 0, marginTop: 2 }} />
      : <X size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: 2 }} />}
    <span style={{ fontSize: '0.97rem', lineHeight: 1.55, color: ok ? '#e2e8f0' : '#94a3b8' }}>{children}</span>
  </div>
);

/* ─── Digit block for timer ─── */
const Digit = ({ val, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{
      background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.4)',
      borderRadius: 12, padding: '0.6rem 1.1rem', minWidth: 64,
      fontSize: '2.4rem', fontWeight: 900, fontVariantNumeric: 'tabular-nums',
      color: '#e9d5ff', letterSpacing: '-0.02em', lineHeight: 1,
    }}>{val}</div>
    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#94a3b8', marginTop: 6 }}>{label}</div>
  </div>
);

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxABRNpYSU6BJHLRJY1vE0ohMlCGNLjq6OuyECJEEZplZ4KfGebKe54_Ljrg-kJZRZy2w/exec";

export default function Offer() {
  const { h, m, sc } = useTimer();
  const [pkg, setPkg] = useState(1);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const packages = [
    { name: 'Starter', price: '₹9,999', videos: 4, badge: null },
    { name: 'Growth', price: '₹14,999', videos: 8, badge: 'MOST POPULAR' },
    { name: 'Pro', price: '₹16,000', videos: 10, badge: 'BEST VALUE' },
  ];

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    const fd = new FormData(e.target);
    const p = new URLSearchParams({
      name: fd.get('name') || '',
      email: fd.get('email') || '',
      service: `AI Product Shoot — ${packages[pkg].name}`,
      budget: packages[pkg].price,
      timeline: 'ASAP',
      message: fd.get('msg') || 'Offer page inquiry',
    });
    try {
      await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: p.toString() });
      setDone(true);
    } catch { alert('Something went wrong — please email harshustle@gmail.com directly.'); }
    finally { setBusy(false); }
  }

  return (
    <div style={{ background: '#06060f', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'inherit', overflowX: 'hidden' }}>

      {/* ══ STICKY SCARCITY BAR ══ */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: 'linear-gradient(90deg,#4f1d96,#7c3aed,#4f1d96)',
        padding: '0.65rem 1rem', textAlign: 'center',
        fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.06em',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap',
      }}>
        <Flame size={14} style={{ color: '#fbbf24' }} />
        <span>⚡ OFFER EXPIRES IN&nbsp;
          <span style={{ fontVariantNumeric: 'tabular-nums', color: '#fde68a' }}>{h}:{m}:{sc}</span>
        </span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span style={{ color: '#fde68a' }}>Only 3 spots left this month</span>
        <Flame size={14} style={{ color: '#fbbf24' }} />
      </div>

      {/* ══ HERO ══ */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '5rem 1.5rem 3rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: 99, padding: '0.4rem 1rem', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c084fc', marginBottom: '2rem' }}>
            <Zap size={12} /> AI Product Shoot
          </div>

          <h1 style={{ fontSize: 'clamp(2.6rem,8vw,5.8rem)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 0.92, marginBottom: '1.8rem', color: '#f1f5f9' }}>
            Your Competitors Are<br />
            <span style={{ WebkitTextStroke: '2px #a855f7', WebkitTextFillColor: 'transparent' }}>Already Using This.</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem,2.5vw,1.25rem)', color: '#94a3b8', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            We produce <strong style={{ color: '#e2e8f0' }}>photorealistic AI product videos</strong> — cinematic physics, studio-grade lighting, scroll-stopping hooks — delivered in <strong style={{ color: '#e2e8f0' }}>48 hours</strong>, not 2 weeks.
          </p>

          {/* Timer */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <Digit val={h} label="Hours" />
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#a855f7', lineHeight: 1, marginBottom: 24 }}>:</span>
            <Digit val={m} label="Minutes" />
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#a855f7', lineHeight: 1, marginBottom: 24 }}>:</span>
            <Digit val={sc} label="Seconds" />
          </div>

          <a href="#claim" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
            padding: '1.1rem 2.8rem', borderRadius: 99,
            background: 'linear-gradient(135deg,#a855f7,#7c3aed)',
            color: '#fff', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.06em',
            textDecoration: 'none', boxShadow: '0 0 60px rgba(168,85,247,0.4)',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            GET MY VIDEOS NOW <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: '0.8rem', fontSize: '0.75rem', color: '#64748b' }}>No upfront payment · 100% satisfaction or redo</p>
        </motion.div>
      </section>

      {/* ══ PROBLEM vs SOLUTION ══ */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>

          {/* Problem */}
          <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 24, padding: '2.2rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#ef4444', marginBottom: '1.2rem' }}>What you're doing now</p>
            <Row ok={false}>Paying ₹30–80k for studio shoots that take 3 weeks</Row>
            <Row ok={false}>Uploading the same static image every competitor has</Row>
            <Row ok={false}>Running ads with low-quality creatives & watching ROAS tank</Row>
            <Row ok={false}>Waiting weeks for an agency to send you one revision</Row>
          </div>

          {/* Solution */}
          <div style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 24, padding: '2.2rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#a855f7', marginBottom: '1.2rem' }}>What you get with us</p>
            <Row ok={true}>Cinematic AI renders delivered in 48 hours, not 3 weeks</Row>
            <Row ok={true}>Unique physics, lighting & motion that stops the scroll</Row>
            <Row ok={true}>Hook-engineered scripts built for Meta, Reels & TikTok ads</Row>
            <Row ok={true}>Unlimited revisions until you love every single frame</Row>
          </div>
        </div>
      </section>

      {/* ══ VALUE STACK ══ */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#a855f7', marginBottom: '0.6rem' }}>Everything Included</p>
          <h2 style={{ fontSize: 'clamp(1.9rem,5vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#f1f5f9' }}>
            What You're Actually Getting
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
          {[
            { icon: <Zap size={20} />, title: 'Cinematic AI Renders', sub: 'Physics, lighting, particle FX — zero studio needed', val: '₹15,000' },
            { icon: <Star size={20} />, title: 'Hook-First Scripts', sub: 'Every video engineered to stop the scroll in 2 seconds', val: '₹5,000' },
            { icon: <Shield size={20} />, title: 'Platform Exports', sub: '9:16 Reels, TikTok, Meta Ads — all formats, ready to post', val: '₹3,000' },
            { icon: <Clock size={20} />, title: '48-Hour Delivery', sub: 'First batch in your inbox in two days. No waiting around', val: '₹8,000' },
            { icon: <Check size={20} />, title: 'Unlimited Revisions', sub: 'We iterate until you love it. No extra charge, ever', val: '₹4,000' },
            { icon: <ArrowRight size={20} />, title: 'Strategy Brief', sub: 'Competitor audit + angle positioning for your market', val: '₹6,000' },
          ].map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18, padding: '1.5rem' }}
            >
              <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7', marginBottom: '0.9rem' }}>{f.icon}</div>
              <p style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.35rem', color: '#f1f5f9' }}>{f.title}</p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '0.8rem' }}>{f.sub}</p>
              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#a855f7', background: 'rgba(168,85,247,0.1)', padding: '0.2rem 0.65rem', borderRadius: 99 }}>{f.val} value</span>
            </motion.div>
          ))}
        </div>

        {/* Value callout */}
        <div style={{ marginTop: '2rem', background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 18, padding: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>Total value</p>
            <p style={{ fontSize: '2rem', fontWeight: 900, textDecoration: 'line-through', color: '#64748b', lineHeight: 1 }}>₹41,000</p>
          </div>
          <ArrowRight size={28} style={{ color: '#a855f7', opacity: 0.6 }} />
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>You pay today</p>
            <p style={{ fontSize: '2rem', fontWeight: 900, color: '#c084fc', lineHeight: 1 }}>From ₹9,999</p>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#a855f7', marginBottom: '0.6rem' }}>Transparent Pricing</p>
          <h2 style={{ fontSize: 'clamp(1.9rem,5vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#f1f5f9' }}>Choose Your Package</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
          {packages.map((p, i) => {
            const active = pkg === i;
            return (
              <motion.div key={i} whileHover={{ y: -6 }} onClick={() => setPkg(i)}
                style={{
                  position: 'relative', borderRadius: 22, padding: '2rem', cursor: 'pointer',
                  background: active ? 'linear-gradient(160deg,rgba(168,85,247,0.2),rgba(124,58,237,0.1))' : 'rgba(255,255,255,0.03)',
                  border: `2px solid ${active ? '#a855f7' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: active ? '0 0 50px rgba(168,85,247,0.25)' : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                {p.badge && (
                  <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg,#a855f7,#7c3aed)', borderRadius: 99, padding: '0.2rem 0.85rem', fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.15em', whiteSpace: 'nowrap' }}>
                    {p.badge}
                  </div>
                )}
                <p style={{ fontSize: '0.68rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#94a3b8', marginBottom: '0.5rem' }}>{p.name}</p>
                <p style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.2rem', color: '#f1f5f9' }}>{p.price}</p>
                <p style={{ fontSize: '0.88rem', color: '#a855f7', fontWeight: 700, marginBottom: '1.5rem' }}>{p.videos} AI Videos</p>
                {['Strategy & Brief', 'Hook Scriptwriting', 'Cinematic Editing', 'Platform Exports', 'Unlimited Revisions'].map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.55rem', alignItems: 'center' }}>
                    <Check size={13} style={{ color: '#a855f7', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>{f}</span>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══ SOCIAL PROOF ══ */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.6rem)', fontWeight: 900, letterSpacing: '-0.04em', textAlign: 'center', marginBottom: '2rem', color: '#f1f5f9' }}>
          What Clients Say
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1rem' }}>
          {[
            { who: 'D2C Skincare Brand', loc: 'Dubai, UAE', q: 'The AI product videos doubled our Reels engagement in the first week. Absolute game-changer.' },
            { who: 'Real Estate Client', loc: 'Lucknow, India', q: 'Harsh delivered 8 videos in 36 hours. The quality matched agencies charging 10x more.' },
            { who: 'EuroDigital', loc: 'Europe', q: 'Professional, fast, genuinely understands performance marketing. Our Meta ROAS improved 40%.' },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '1.6rem' }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
                {Array(5).fill(0).map((_, j) => <Star key={j} size={13} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '1.1rem', fontStyle: 'italic' }}>"{t.q}"</p>
              <p style={{ fontWeight: 800, fontSize: '0.85rem', color: '#f1f5f9' }}>{t.who}</p>
              <p style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 2 }}>{t.loc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CLAIM FORM ══ */}
      <section id="claim" style={{ maxWidth: 580, margin: '0 auto', padding: '3rem 1.5rem 8rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 28, padding: 'clamp(2rem,5vw,3rem)', boxShadow: '0 0 80px rgba(168,85,247,0.12)' }}>

          {/* Selected package display */}
          <div style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: 12, padding: '0.9rem 1.2rem', marginBottom: '1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Selected Package</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#c084fc' }}>
              {packages[pkg].name} — {packages[pkg].price}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '0.4rem', lineHeight: 1.1, color: '#f1f5f9' }}>
            Claim Your Spot
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '2rem', lineHeight: 1.55 }}>
            Fill out below. I'll personally reach out within 24 hours with next steps — no sales calls, no fluff.
          </p>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Check size={28} color="#22c55e" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.6rem', color: '#f1f5f9' }}>You're In! 🎉</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.65, fontSize: '0.9rem' }}>Check your inbox within 24 hours. I'll send you a tailored creative brief and next steps.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@brand.com' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginBottom: '0.45rem' }}>{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} required
                      style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '0.9rem 1.1rem', color: '#f1f5f9', fontSize: '0.93rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', transition: 'border 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#a855f7'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#94a3b8', marginBottom: '0.45rem' }}>Tell Me About Your Product</label>
                  <textarea name="msg" placeholder="Product type, goal, any specific requirements..." rows={3}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '0.9rem 1.1rem', color: '#f1f5f9', fontSize: '0.93rem', fontFamily: 'inherit', outline: 'none', resize: 'none', boxSizing: 'border-box', transition: 'border 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#a855f7'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button type="submit" disabled={busy}
                  style={{ padding: '1.15rem', background: busy ? '#374151' : 'linear-gradient(135deg,#a855f7,#7c3aed)', border: 'none', borderRadius: 14, color: '#fff', fontWeight: 900, fontSize: '0.97rem', letterSpacing: '0.06em', fontFamily: 'inherit', cursor: busy ? 'not-allowed' : 'pointer', boxShadow: busy ? 'none' : '0 0 40px rgba(168,85,247,0.35)', transition: 'all 0.2s' }}
                  onMouseEnter={e => !busy && (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {busy ? 'SENDING...' : 'SECURE MY SPOT →'}
                </button>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '0.3rem' }}>
                  {[<><Lock size={12} /> No Payment Now</>, <><Clock size={12} /> 24hr Reply</>, <><Shield size={12} /> 100% Satisfaction</>].map((b, i) => (
                    <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>{b}</span>
                  ))}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
