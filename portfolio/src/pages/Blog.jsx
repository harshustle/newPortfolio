import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    { title: "Building the harshustle AI Agent", date: "Mar 15, 2026", preview: "The architectural decisions behind my autonomous lead generation systems." },
    { title: "Why UGC dominates Real Estate Ads", date: "Feb 22, 2026", preview: "Traditional walkthroughs are dead. How vertical video changed the game." },
    { title: "Scaling Node.js Backends", date: "Jan 10, 2026", preview: "Optimizing request loops to handle high-frequency payment webhooks securely." }
  ];

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
    >
      <section className="section container" style={{ paddingTop: '10rem' }}>
        <h1 className="section-title">Field Notes & Documentation</h1>
        <p className="section-desc">
          Insights on advanced automation, backend systems, and marketing psychology.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          {posts.map((post, i) => (
            <motion.div 
              key={i} 
              className="minimal-card"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '600', letterSpacing: '0.05em' }}>
                {post.date}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{post.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{post.preview}</p>
              <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                Read Article
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
