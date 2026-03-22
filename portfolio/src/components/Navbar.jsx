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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <NavLink to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
           <div className="serif-italic" style={{ textTransform: 'none', fontSize: '1.8rem', color: '#000', fontWeight: 500 }}>Harshustle</div>
        </NavLink>
        
        <div className="nav-links">
          {navLinks.map((link, idx) => (
            <NavLink 
              key={idx} 
              to={link.path} 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
           <a href="#contact" className="btn btn-primary nav-pill">Book a call</a>
           <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
             <Menu size={20} />
           </button>
        </div>
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
