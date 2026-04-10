import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const AIProductShoot = () => {
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

        {/* Pricing Section */}
        <div id="pricing" style={{ marginTop: '8rem', marginBottom: '6rem', textAlign: 'left' }}>
           <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '3rem', textAlign: 'center' }}>Transparent <span className="serif-italic highlight-purple">Pricing.</span></h2>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
             
             <PricingCard 
                title="Starter"
                subtitle="Perfect for A/B Testing"
                price="$130"
                volume="3 videos"
                buttonText="GET STARTED"
                features={[
                  "Strategy & Planning",
                  "Scriptwriting",
                  "Comprehensive Editing",
                  "Hook Variations"
                ]}
             />

             <PricingCard 
                title="Growth"
                subtitle="Scale with more variations"
                price="$250"
                volume="6 videos"
                buttonText="GET STARTED"
                special={true}
                features={[
                  "Strategy & Planning",
                  "Scriptwriting",
                  "Comprehensive Editing",
                  "Hook Variations"
                ]}
             />

             <PricingCard 
                title="Pro Domination"
                subtitle="Full content domination"
                price="$400"
                volume="10 videos"
                buttonText="GET STARTED"
                features={[
                  "Strategy & Planning",
                  "Scriptwriting",
                  "Comprehensive Editing",
                  "Hook Variations"
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
