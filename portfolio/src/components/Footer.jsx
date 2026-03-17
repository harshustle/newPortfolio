import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
           <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Socials</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                 <a href="https://linkedin.com/in/harshustle" target="_blank" rel="noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>LinkedIn <ArrowUpRight size={14}/></a>
                 <a href="https://instagram.com/harshustler" target="_blank" rel="noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Instagram <ArrowUpRight size={14}/></a>
                 <a href="https://twitter.com/harshustle" target="_blank" rel="noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Twitter <ArrowUpRight size={14}/></a>
                 <a href="https://github.com/harshustle" target="_blank" rel="noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>GitHub <ArrowUpRight size={14}/></a>
              </div>
           </div>
           <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Contact</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                 <a href="mailto:harshustle@gmail.com" className="nav-link">harshustle@gmail.com</a>
                 <a href="tel:+917839661372" className="nav-link">+91 78396 61372</a>
              </div>
           </div>
           <div style={{ gridColumn: 'span 2' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Inquiry</span>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginTop: '1rem', letterSpacing: '-0.06em' }}>LET'S ARCHITECT YOUR BRAND.</h2>
           </div>
        </div>

        <div className="footer-content" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
          <div className="footer-logo">
            HARSHUSTLE
          </div>
          <div style={{ display: 'flex', gap: '2rem', opacity: 0.4, fontSize: '0.8rem' }}>
            <span>© 2026</span>
            <span>Based in India</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
