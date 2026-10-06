import React from 'react';

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}>
    <circle cx="12" cy="12" r="12" fill="#2e6347" />
    <path d="M7 12l3.5 3.5 6.5-6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const PricingCard = ({ title, subtitle, price, volume, features, special, disabled, buttonText = "GET STARTED" }) => {
  return (
    <div 
      className={`pricing-card-wrapper ${special ? 'special' : 'normal'}`}
      style={{
        padding: '1.6rem 1.5rem 1.5rem',
        ...(disabled ? { opacity: 0.5, pointerEvents: 'none' } : {})
      }}
    >
      {special && (
         <div style={{
           position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
           background: '#2e6347', color: '#fff', padding: '0.25rem 0.8rem', borderRadius: '99px',
           fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase'
         }}>
           Most Popular
         </div>
      )}
      
      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: '#111' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.82rem', margin: '0.25rem 0 0.75rem', lineHeight: 1.35 }}>{subtitle}</p>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '0.25rem' }}>
        <span className="pricing-price-text">{price}</span>
      </div>
      
      <p style={{ color: '#2e6347', fontSize: '0.85rem', fontWeight: 700, margin: '0 0 0.85rem' }}>
        {volume}
      </p>

      {disabled ? (
        <div style={{
          width: '100%', padding: '0.7rem 1rem', background: '#ccc', color: '#666', 
          borderRadius: '8px', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.05em',
          textTransform: 'uppercase', marginBottom: '1.1rem',
          display: 'flex', justifyContent: 'center'
        }}>
          NOT AVAILABLE
        </div>
      ) : (
        <a href="#contact" className="btn" style={{
          width: '100%', padding: '0.7rem 1rem', background: '#000', color: '#fff', 
          borderRadius: '8px', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.05em',
          textTransform: 'uppercase', marginBottom: '1.1rem',
          display: 'flex', justifyContent: 'center', transition: 'background 0.3s'
        }} onMouseEnter={e => e.currentTarget.style.background = '#333'} onMouseLeave={e => e.currentTarget.style.background = '#000'}>
          {buttonText}
        </a>
      )}

      <p style={{ margin: '0 0 0.45rem', fontSize: '0.78rem', fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Includes:</p>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#444', fontSize: '0.82rem', fontWeight: 500, lineHeight: 1.35 }}>
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
