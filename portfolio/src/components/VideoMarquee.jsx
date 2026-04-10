import React from 'react';

const VideoMarquee = () => {
  const videos = [
    { publicId: "Edited_wlnmjv" },
    { publicId: "0404_itrkrs" },
    { publicId: "IMG_5939_erscc8" },
    { publicId: "IMG_5906_ic8t1k" },
    { publicId: "download_cmsezt" },
    { publicId: "IMG_5920_hs89uq" }
  ];

  // Tile twice for the 6 videos
  const marqueeContent = [...videos, ...videos];

  return (
    <div className="video-marquee-container">
      <div className="marquee-track">
        {marqueeContent.map((v, idx) => (
          <div key={idx} className="marquee-item">
            <iframe
              src={`https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=${v.publicId}&player[showLogo]=false&player[autoplay]=true&player[loop]=true&player[muted]=true&player[controls]=false`}
              title="UGC Video"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoMarquee;
