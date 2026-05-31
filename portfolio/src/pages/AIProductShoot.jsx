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
      style={{ background: '#0a0a0c', color: '#fff', minHeight: '100vh', paddingBottom: '4rem' }}
    >
      <section className="section container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', color: '#aaa' }}>Next-Gen Visuals</h2>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.9, marginBottom: '2rem' }}>
           AI PRODUCT <br /><span className="serif-italic highlight-purple">SHOOTS.</span>
        </h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          Stunning, high-conversion product videography powered by AI. We create photorealistic physics, dynamic lighting, and cinematic sequences without stepping into a studio.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
           <a href="#pricing" style={{ padding: '1.2rem 2.5rem', borderRadius: '99px', fontSize: '1rem', fontWeight: 800, background: '#c084fc', color: '#000', textDecoration: 'none', boxShadow: '0 0 30px rgba(192, 132, 252, 0.3)', letterSpacing: '0.05em', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              VIEW PRICING
           </a>
        </div>

        <div style={{ position: 'relative', maxWidth: '900px', margin: '4rem auto' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
             {[
               { title: "PRODUCT CINEMATICS", cat: "AI PRODUCT", publicId: "IMG_5939_erscc8" },
               { title: "BRAND SHOWCASE", cat: "AI PRODUCT", publicId: "IMG_5906_ic8t1k" },
               { title: "DYNAMIC VISUALS", cat: "AI PRODUCT", publicId: "download_cmsezt" },
               { title: "CREATIVE RENDERS", cat: "AI PRODUCT", publicId: "IMG_5920_hs89uq" },
             ].map((v, idx) => (
               <motion.div
                 key={idx}
                 whileHover={{ y: -10 }}
                 style={{ position: 'relative', paddingTop: '177.78%', borderRadius: '24px', overflow: 'hidden', background: '#111', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
               >
                 <iframe
                   src={`https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=${v.publicId}&player[showLogo]=false&player[controls]=true`}
                   title={v.title}
                   allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                   allowFullScreen
                   style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                 />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', pointerEvents: 'none', zIndex: 2 }}>
                   <p style={{ fontSize: '0.6rem', color: '#fff', opacity: 0.7, textTransform: 'uppercase', fontWeight: 800 }}>{v.cat}</p>
                   <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.2rem', fontWeight: 700 }}>{v.title}</h4>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Real Shoot Section */}
        <div style={{ maxWidth: '900px', margin: '0 auto 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', color: '#aaa' }}>On-Location</h2>
          <h3 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '1rem' }}>
            REAL <span className="serif-italic highlight-purple">SHOOTS.</span>
          </h3>
          <p style={{ color: '#aaa', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Premium on-location videography that captures your property's true essence — cinematic, compelling, and conversion-ready.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'PREMIUM REAL SHOOT 1', cat: 'REAL SHOOT', publicId: '7_lpgoxu' },
              { title: 'PREMIUM REAL SHOOT 2', cat: 'REAL SHOOT', publicId: '8_l0wsbr' },
              { title: 'INTERIOR SHOWCASE', cat: 'REAL SHOOT', publicId: 'prakhar_properties_1778305436_3892698647800481401_73535257018_ybkmvq' },
              { title: 'CINEMATIC WALKTHROUGH', cat: 'REAL SHOOT', publicId: 'prakhar_properties_1778047823_3890849699595157209_73535257018_yo65rr' },
            ].map((v, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                style={{ position: 'relative', paddingTop: '177.78%', borderRadius: '24px', overflow: 'hidden', background: '#111', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
              >
                <iframe
                  src={`https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=${v.publicId}&player[showLogo]=false&player[controls]=true`}
                  title={v.title}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', pointerEvents: 'none', zIndex: 2 }}>
                  <p style={{ fontSize: '0.6rem', color: '#c084fc', opacity: 0.9, textTransform: 'uppercase', fontWeight: 800 }}>{v.cat}</p>
                  <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.2rem', fontWeight: 700 }}>{v.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          {/* Pricing Section */}
          <div id="pricing" style={{ marginTop: '8rem', marginBottom: '6rem', textAlign: 'left', background: '#f8f7f5', color: '#111', padding: '3.5rem 1.5rem', borderRadius: '28px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '3rem', textAlign: 'center' }}>Transparent <span className="serif-italic highlight-purple">Pricing.</span></h2>
           
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

        <div style={{ marginTop: '2rem', background: '#111', padding: '4rem 2rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
           <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to elevate your product?</h3>
           <a href="/#contact" className="btn btn-primary pill-cta" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', fontWeight: 900, background: '#c084fc', color: '#000', border: 'none', boxShadow: '0 0 40px rgba(192, 132, 252, 0.3)', letterSpacing: '0.05em' }}>
              BOOK YOUR SHOOT NOW <ArrowRight size={20} style={{ marginLeft: '10px' }} />
           </a>
        </div>
      </section>
    </motion.div>
  );
};

export default AIProductShoot;
