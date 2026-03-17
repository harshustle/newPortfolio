import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'UGC', path: '/ugc-videos' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <NavLink to="/" className="nav-logo">
          HARSHUSTLE
        </NavLink>
        
        <div className="nav-links">
          {navLinks.map((link, idx) => (
            <NavLink 
              key={idx} 
              to={link.path} 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              style={{ letterSpacing: '0.05em' }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} color="#fff" /> : <Menu size={20} color="#fff" />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          background: '#000', zIndex: 999, display: 'flex', flexDirection: 'column', 
          justifyContent: 'center', alignItems: 'center', gap: '2rem' 
        }}>
          <button style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none' }} onClick={() => setMenuOpen(false)}>
            <X size={32} color="#fff" />
          </button>
          {navLinks.map((link, idx) => (
            <NavLink 
              key={idx} 
              to={link.path} 
              onClick={() => setMenuOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.05em' }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
