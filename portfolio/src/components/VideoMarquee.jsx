import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoCard = ({ v }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // High-performance Cloudinary poster (10KB WebP/JPG) and eco-encoded MP4
  const posterUrl = `https://res.cloudinary.com/dobulag2p/video/upload/so_${v.so || '2'},w_360,h_640,c_fill,q_auto,f_auto/${v.publicId}.jpg`;
  const videoUrl = `https://res.cloudinary.com/dobulag2p/video/upload/q_auto:eco,vc_h264,w_360/${v.publicId}.mp4`;

  return (
    <div
      className="marquee-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsMuted(true);
      }}
      style={{
        position: 'relative',
        cursor: 'pointer',
        background: '#0d0d0d',
        borderRadius: '20px',
        overflow: 'hidden'
      }}
    >
      {isHovered ? (
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      ) : (
        <img
          src={posterUrl}
          alt={v.title || "Video Reel"}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      )}

      {/* Elegant Ambient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isHovered 
          ? 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 45%, rgba(0,0,0,0.2) 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 40%, rgba(0,0,0,0.15) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
        pointerEvents: isHovered ? 'auto' : 'none',
        transition: 'background 0.3s ease'
      }}>
        {/* Top: Category Tag & Sound Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: 'rgba(0, 0, 0, 0.55)',
            color: '#fff',
            padding: '0.25rem 0.6rem',
            borderRadius: '6px',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            {v.tag || 'SHORT FORM'}
          </span>

          {isHovered && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)'
              }}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          )}
        </div>

        {/* Bottom: Status Indicator & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: isHovered ? '#2e6347' : 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0,
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255,255,255,0.25)'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: isHovered ? '#fff' : 'rgba(255,255,255,0.8)',
              boxShadow: isHovered ? '0 0 8px #fff' : 'none'
            }} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <p style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#fff',
              textShadow: '0 2px 6px rgba(0,0,0,0.8)',
              margin: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {v.title}
            </p>
            <p style={{
              fontSize: '0.62rem',
              color: 'rgba(255,255,255,0.7)',
              margin: '2px 0 0 0',
              fontWeight: 500
            }}>
              {isHovered ? (isMuted ? "Hovering • Tap sound" : "Playing with sound") : "Hover to preview"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoMarquee = () => {
  const videos = [
    { publicId: "Edited_wlnmjv", title: "Luxury Diamond Choker", tag: "COMMERCIAL", so: "2" },
    { publicId: "0404_itrkrs", title: "AI Avatar Speaker", tag: "AI UGC", so: "1" },
    { publicId: "IMG_5939_erscc8", title: "Gold Floral Ring Macro", tag: "JEWELRY", so: "2" },
    { publicId: "IMG_5906_ic8t1k", title: "Heritage Emerald Earrings", tag: "SHOWCASE", so: "2" },
    { publicId: "download_cmsezt", title: "Creator Storytelling", tag: "VIRAL REEL", so: "2" },
    { publicId: "IMG_5920_hs89uq", title: "Royal Polki Necklace", tag: "CINEMATIC", so: "2" }
  ];

  // Tile twice for continuous loop
  const marqueeContent = [...videos, ...videos];

  return (
    <div className="video-marquee-container">
      <div className="marquee-track">
        {marqueeContent.map((v, idx) => (
          <VideoCard key={idx} v={v} />
        ))}
      </div>
    </div>
  );
};

export default VideoMarquee;
