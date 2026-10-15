import React from 'react';

const MinimalCheck = () => (
  <svg 
    width="15" 
    height="15" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#111827" 
    strokeWidth="2.3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={{ flexShrink: 0, marginTop: '3px' }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PricingCard = ({
  title,
  subtitle,
  price,
  volume,
  features = [],
  special = false,
  disabled = false,
  buttonText = "Book now",
  whatsappMessage,
  whatsappNumber = "919161955178",
  variant
}) => {
  const defaultMessage = `Hi, I want to book the ${title} (${volume} - ${price})`;
  const finalMessage = whatsappMessage || defaultMessage;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

  // Determine top gradient style based on variant or special
  const cardVariant = variant || (special ? 'sunset' : 'purple');

  const getGradient = () => {
    if (cardVariant === 'sunset' || special) {
      return 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #ffffff 100%), radial-gradient(circle at 92% 14%, #c4b5fd 0%, transparent 50%), radial-gradient(circle at 8% 85%, #fed7aa 0%, transparent 55%), radial-gradient(circle at 35% 25%, #fbcfe8 0%, transparent 50%), #ffffff';
    }
    if (cardVariant === 'blue') {
      return 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #ffffff 100%), radial-gradient(circle at 95% 15%, #dbeafe 0%, transparent 55%), radial-gradient(circle at 20% 75%, #e0e7ff 0%, transparent 50%), #ffffff';
    }
    // Default soft lavender (matches the Basic card in reference image)
    return 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #ffffff 100%), radial-gradient(circle at 95% 15%, #e9d5ff 0%, transparent 60%), radial-gradient(circle at 20% 65%, #f3e8ff 0%, transparent 55%), #ffffff';
  };

  return (
    <div
      className={`ref-pricing-card ${special ? 'special' : ''}`}
      style={{
        background: '#ffffff',
        borderRadius: '28px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: special 
          ? '0 24px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)' 
          : '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ...(disabled ? { opacity: 0.5, pointerEvents: 'none' } : {})
      }}
    >
      {/* Top Gradient Hero Area */}
      <div
        style={{
          background: getGradient(),
          padding: '2rem 1.8rem 1.6rem',
          position: 'relative',
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            margin: '0 0 1.2rem',
            color: '#111827',
            letterSpacing: '-0.01em',
            fontFamily: 'inherit'
          }}
        >
          {title}
        </h3>

        {/* Starts at label */}
        <div
          style={{
            fontSize: '0.82rem',
            fontWeight: 500,
            color: '#6b7280',
            marginBottom: '0.25rem'
          }}
        >
          Starts at
        </div>

        {/* Price & Volume inline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.45rem',
            marginBottom: '0.8rem',
            flexWrap: 'wrap'
          }}
        >
          <span
            style={{
              fontSize: '2.6rem',
              fontWeight: 500,
              color: '#111827',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              fontFamily: 'inherit'
            }}
          >
            {price}
          </span>
          {volume && (
            <span
              style={{
                fontSize: '0.88rem',
                color: '#4b5563',
                fontWeight: 400
              }}
            >
              {volume.startsWith('/') ? volume : `per ${volume}`}
            </span>
          )}
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '0.86rem',
            color: '#4b5563',
            margin: '0 0 1.4rem',
            lineHeight: 1.45,
            minHeight: '2.5rem'
          }}
        >
          {subtitle}
        </p>

        {/* Action Button */}
        {disabled ? (
          <div
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: '#f3f4f6',
              color: '#9ca3af',
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: '0.92rem',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            Not Available
          </div>
        ) : (
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              padding: '0.78rem 1rem',
              background: special ? '#18181b' : '#ffffff',
              color: special ? '#ffffff' : '#111827',
              border: special ? 'none' : '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '14px',
              fontWeight: 600,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              boxShadow: special
                ? '0 8px 24px -4px rgba(0, 0, 0, 0.25)'
                : '0 4px 14px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              if (special) {
                e.currentTarget.style.background = '#000000';
                e.currentTarget.style.transform = 'translateY(-1px)';
              } else {
                e.currentTarget.style.background = '#f9fafb';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.16)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (special) {
                e.currentTarget.style.background = '#18181b';
                e.currentTarget.style.transform = 'translateY(0)';
              } else {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {buttonText}
          </a>
        )}
      </div>

      {/* Bottom Features List */}
      <div style={{ padding: '0.5rem 1.8rem 2rem' }}>
        <p
          style={{
            fontSize: '0.86rem',
            fontWeight: 600,
            color: '#111827',
            margin: '0.8rem 0 1rem'
          }}
        >
          What's included:
        </p>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem'
          }}
        >
          {features.map((feature, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                gap: '0.65rem',
                alignItems: 'flex-start',
                color: '#374151',
                fontSize: '0.85rem',
                fontWeight: 400,
                lineHeight: 1.45
              }}
            >
              <MinimalCheck />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
