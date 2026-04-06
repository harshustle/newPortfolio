import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Fixed full-width container for proper centering */}
      <div style={{
        position: 'fixed',
        top: '1.5rem',
        left: 0,
        right: 0,
        zIndex: 900,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        padding: '0 1.5rem',
      }}>
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            width: '100%',
            maxWidth: '900px',
            pointerEvents: 'all',
          }}
        >
        <div
          className="nav-pill-inner"
          style={{
            alignItems: 'center',
            borderRadius: '99px',
            position: 'relative',
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.12)'
              : '0 4px 24px rgba(0,0,0,0.07)',
            border: '1px solid rgba(255,255,255,0.8)',
            transition: 'background 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <span className="serif-italic" style={{ fontSize: '1.3rem', fontWeight: 500, color: '#000' }}>
              Harshustle
            </span>
          </NavLink>

          {/* Column 2 — Nav Links (true center) */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  padding: '0.42rem 1rem',
                  borderRadius: '99px',
                  color: isActive ? '#fff' : '#555',
                  background: isActive ? '#000' : 'transparent',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                })}
                onMouseEnter={e => {
                  if (e.currentTarget.style.color !== 'rgb(255, 255, 255)') {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.07)';
                    e.currentTarget.style.color = '#000';
                  }
                }}
                onMouseLeave={e => {
                  if (e.currentTarget.style.color !== 'rgb(255, 255, 255)') {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#555';
                  }
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Column 3 — CTA (desktop) + Hamburger (mobile) */}
          <div className="nav-actions">
            {/* Book a Call — hidden on mobile */}
            <NavLink
              to="/contact"
              className="nav-cta-desktop"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#c084fc',
                color: '#000',
                padding: '0.45rem 1.1rem',
                borderRadius: '99px',
                fontSize: '0.8rem',
                fontWeight: 900,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 12px rgba(192, 132, 252, 0.4)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Book a Call <ArrowUpRight size={13} />
            </NavLink>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="hamburger-btn"
              aria-label="Open menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
        </motion.nav>
      </div>

      {/* ── Full-Screen Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 3rem) 3rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0,
              background: '#000',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              padding: '2.5rem',
            }}
          >
            {/* Close */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <span className="serif-italic" style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 500 }}>Harshustle</span>
              <button
                onClick={() => setMenuOpen(false)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={20} color="#fff" />
              </button>
            </div>

            {/* Links */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    style={({ isActive }) => ({
                      display: 'block',
                      color: isActive ? '#c084fc' : '#fff',
                      textDecoration: 'none',
                      fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                      padding: '0.5rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    })}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Bottom contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}
            >
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>Get in touch</p>
              <a href="mailto:harshustle@gmail.com" style={{ color: '#fff', fontSize: '0.95rem', textDecoration: 'none', opacity: 0.7 }}>harshustle@gmail.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
