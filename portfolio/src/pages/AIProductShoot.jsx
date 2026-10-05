import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const AIProductShoot = () => {
  const [country, setCountry] = useState('India');
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="page-container"
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
      style={{ background: 'transparent', color: 'var(--text-primary)', minHeight: '100vh', paddingBottom: '4rem' }}
    >
      {/* ── EDITORIAL HERO ── */}
      <section className="hero-ref-container" style={{ paddingBottom: '3rem' }}>
        <div className="hero-ref-content">
          <div className="hero-ref-pill">
            <span className="hero-ref-dot" />
            <span className="hero-ref-pill-text">Next-Gen Visuals • Photorealistic AI Production</span>
          </div>

          <h1 className="hero-ref-title">
            AI Product <br />
            <span className="hero-ref-title-accent">shoots.</span>
          </h1>

          <p className="hero-ref-subtitle">
            Stunning, high-conversion product videography powered by AI. We create photorealistic physics, dynamic lighting, and cinematic sequences without stepping into a studio.
          </p>

          <div className="hero-ref-cta-group" style={{ marginBottom: '2rem' }}>
            <a href="#pricing" className="hero-ref-btn">
              <span>View Packages & Pricing</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

         <div style={{ position: 'relative', maxWidth: '900px', margin: '4rem auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { title: "PRODUCT CINEMATICS", cat: "AI PRODUCT", publicId: "IMG_5939_erscc8", so: "2" },
                { title: "BRAND SHOWCASE", cat: "AI PRODUCT", publicId: "IMG_5906_ic8t1k", so: "2" },
                { title: "DYNAMIC VISUALS", cat: "AI PRODUCT", publicId: "download_cmsezt", so: "2" },
                { title: "CREATIVE RENDERS", cat: "AI PRODUCT", publicId: "IMG_5920_hs89uq", so: "2" },
              ].map((v, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: 'relative', paddingTop: '177.78%', borderRadius: '24px', overflow: 'hidden', background: '#0d120f', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
                >
                  <video
                    src={`https://res.cloudinary.com/dobulag2p/video/upload/q_auto:eco,vc_h264,w_480/${v.publicId}.mp4`}
                    poster={`https://res.cloudinary.com/dobulag2p/video/upload/so_${v.so || '2'},w_480,h_854,c_fill,q_auto,f_auto/${v.publicId}.jpg`}
                    playsInline
                    loop
                    muted
                    autoPlay
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              ))}
            </div>
         </div>

         {/* Real Shoot Section */}
         <div style={{ maxWidth: '900px', margin: '0 auto 2rem', textAlign: 'center' }}>
           <h2 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', color: '#2e6347' }}>— On-Location</h2>
           <h3 className="editorial-section-title" style={{ marginBottom: '1rem' }}>
             Real <span className="editorial-title-accent">Shoots.</span>
           </h3>
           <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
             Premium on-location videography that captures your property's true essence — cinematic, compelling, and conversion-ready.
           </p>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
             {[
               { title: 'PREMIUM REAL SHOOT 1', cat: 'REAL SHOOT', publicId: '7_lpgoxu', so: '2' },
               { title: 'PREMIUM REAL SHOOT 2', cat: 'REAL SHOOT', publicId: '8_l0wsbr', so: '2' },
               { title: 'INTERIOR SHOWCASE', cat: 'REAL SHOOT', publicId: 'prakhar_properties_1778305436_3892698647800481401_73535257018_ybkmvq', so: '2' },
               { title: 'CINEMATIC WALKTHROUGH', cat: 'REAL SHOOT', publicId: 'prakhar_properties_1778047823_3890849699595157209_73535257018_yo65rr', so: '2' },
             ].map((v, idx) => (
               <motion.div
                 key={idx}
                 whileHover={{ y: -8 }}
                 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                 style={{ position: 'relative', paddingTop: '177.78%', borderRadius: '24px', overflow: 'hidden', background: '#0d120f', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
               >
                 <video
                   src={`https://res.cloudinary.com/dobulag2p/video/upload/q_auto:eco,vc_h264,w_480/${v.publicId}.mp4`}
                   poster={`https://res.cloudinary.com/dobulag2p/video/upload/so_${v.so || '2'},w_480,h_854,c_fill,q_auto,f_auto/${v.publicId}.jpg`}
                   playsInline
                   loop
                   muted
                   autoPlay
                   style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                 />
               </motion.div>
             ))}
           </div>
         </div>

        {/* Pricing Section */}
        <div id="pricing" style={{ marginTop: '8rem', marginBottom: '6rem', textAlign: 'left', background: '#ffffff', color: '#111', padding: '3.5rem 1.5rem', borderRadius: '28px', border: '1px solid rgba(0,0,0,0.06)', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="editorial-section-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>Transparent <span className="editorial-title-accent">Pricing.</span></h2>
         
          <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
            <label style={{ fontSize: '1.2rem', fontWeight: 600 }}>Select Region:</label>
            <select 
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
              style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', borderRadius: '12px', border: '2px solid #ccc', outline: 'none', cursor: 'pointer', background: '#fff', color: '#000', fontWeight: '600' }}
            >
              <option value="India">India</option>
              <option value="Global">Global (USA/UK/etc.)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
           
             <PricingCard 
                 title="Real Shoot"
                 subtitle="Premium on-location videography"
                 price={country === 'India' ? "₹24,000" : "-"}
                 disabled={country === 'Global'}
                 volume="3 videos minimum"
                 buttonText="GET STARTED"
                 features={[
                    "Strategy & Planning",
                    "Scriptwriting",
                    "On-Location Shoot",
                    "Cinematic Editing"
                 ]}
             />

             <PricingCard 
                 title="Real Estate UGC"
                 subtitle="High-conversion AI/UGC content"
                 price={country === 'India' ? "₹12,000" : "$150"}
                 volume="3 videos minimum"
                 buttonText="GET STARTED"
                 special={true}
                 features={[
                    "Strategy & Planning",
                    "Scriptwriting",
                    "UGC / AI Generation",
                    "Dynamic Editing"
                 ]}
             />

             <PricingCard 
                 title="3 Minute Package"
                 subtitle="Extended cinematic narrative"
                 price={country === 'India' ? "₹18,000" : "$220"}
                 volume="1 video (3 min)"
                 buttonText="GET STARTED"
                 features={[
                    "Advanced Storyboarding",
                    "Extended Shoot Time",
                    "Premium Editing & Grade",
                    "Full Narrative Arc"
                 ]}
             />
         </div>
        </div>

        <div style={{ marginTop: '2rem', background: '#151a17', padding: '4rem 2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.08)', color: '#fff' }}>
          <h3 className="editorial-section-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>Ready to elevate your <span className="editorial-title-accent" style={{ color: '#7bc79f' }}>product?</span></h3>
          <a href="/#contact" className="btn btn-primary pill-cta" style={{ padding: '1.2rem 3rem', fontSize: '1rem', fontWeight: 900, background: '#2e6347', color: '#fff', border: 'none', boxShadow: '0 10px 30px rgba(46, 99, 71, 0.35)', letterSpacing: '0.05em', borderRadius: '99px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            BOOK YOUR SHOOT NOW <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </a>
        </div>
    </motion.div>
  );
};

export default AIProductShoot;
