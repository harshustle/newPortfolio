import React from 'react';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}>
    <circle cx="12" cy="12" r="12" fill="#4f46e5" />
    <path d="M7 12l3.5 3.5 6.5-6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const PricingCard = ({ title, subtitle, price, volume, features, special, buttonText = "GET STARTED" }) => {
  return (
    <div className={`pricing-card-wrapper ${special ? 'special' : 'normal'}`}>
      {special && (
         <div style={{
           position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
           background: '#4f46e5', color: '#fff', padding: '0.4rem 1rem', borderRadius: '99px',
           fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase'
         }}>
           Most Popular
         </div>
      )}
      
      <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0, color: '#111' }}>{title}</h3>
      <p style={{ color: '#555', fontSize: '0.95rem', margin: '0.5rem 0 1.5rem', lineHeight: 1.4 }}>{subtitle}</p>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '1rem' }}>
        <span className="pricing-price-text">{price}</span>
      </div>
      
      <p style={{ color: '#333', fontSize: '1rem', fontWeight: 600, margin: '0 0 2rem' }}>
        {volume}
      </p>

      <a href="#contact" className="btn" style={{
        width: '100%', padding: '1.1rem', background: '#000', color: '#fff', 
        borderRadius: '8px', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.05em',
        textTransform: 'uppercase', marginBottom: '2.5rem',
        display: 'flex', justifyContent: 'center', transition: 'background 0.3s'
      }} onMouseEnter={e => e.currentTarget.style.background = '#333'} onMouseLeave={e => e.currentTarget.style.background = '#000'}>
        {buttonText}
      </a>

      <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', fontWeight: 600, color: '#111' }}>Includes:</p>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', color: '#333', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.4 }}>
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
