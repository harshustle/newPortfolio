import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.07)', padding: '4rem 0 2rem', position: 'relative', zIndex: 2 }}>
      <div className="container">

        {/* ── Main Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem', alignItems: 'start' }}>

          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '32px', height: '32px', background: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#00ff78', fontWeight: 900, fontSize: '1rem', lineHeight: 1 }}>H</span>
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#000' }}>Harshustle</span>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '200px' }}>
              AI content, cinematic shoots, landing pages, and automation. Built for brands that convert.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { icon: <Instagram size={15} />, href: "https://instagram.com/harshustler" },
                { icon: <Linkedin size={15} />, href: "https://linkedin.com/in/harshustle" },
                { icon: <Twitter size={15} />, href: "https://twitter.com/harshustle" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'background 0.2s, border-color 0.2s',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#000'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'inherit'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate Column */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#000', opacity: 0.4, marginBottom: '1.2rem' }}>Navigate</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: '0.85rem', color: '#555', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#000'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#000', opacity: 0.4, marginBottom: '1.2rem' }}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Book a Call', href: 'mailto:harshustle@gmail.com' },
                { label: 'Instagram', href: 'https://instagram.com/harshustler' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/harshustle', highlight: true },
                { label: 'Twitter', href: 'https://twitter.com/harshustle' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{ fontSize: '0.85rem', color: l.highlight ? '#7b4dff' : '#555', textDecoration: 'none', fontWeight: l.highlight ? 700 : 400 }}
                  onMouseEnter={e => { if (!l.highlight) e.currentTarget.style.color = '#000'; }}
                  onMouseLeave={e => { if (!l.highlight) e.currentTarget.style.color = '#555'; }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#000', opacity: 0.4, marginBottom: '1.2rem' }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'AI UGC Videos', href: '/#ai-video' },
                { label: 'IRL Shoots', href: '/#real-video' },
                { label: 'Landing Pages', href: '/#real-video' },
                { label: 'Automation', href: '/#chatbot' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: '0.85rem', color: '#555', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#000'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#777' }}>© 2026 Harshustle. All rights reserved.</p>
          <p style={{ fontSize: '0.75rem', color: '#777' }}>Built with care.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
