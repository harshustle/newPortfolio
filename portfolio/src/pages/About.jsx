import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  const skills = {
    "Languages": "JavaScript, Java, SQL",
    "Frontend": "HTML, CSS, JavaScript, React",
    "Backend": "Express.js, MVC",
    "Databases": "MongoDB, MySQL",
    "Tools": "Git, GitHub, Postman, VS Code",
    "APIs": "REST APIs, JSON, JWT",
    "AI Tools": "Runway ML, Pika Labs, Midjourney, HeyGen, D-ID",
    "AI Voice": "ElevenLabs, PlayHT",
    "AI Writing": "ChatGPT, Gemini",
    "Automation": "Make (Integromat), Google Sheets",
    "Content": "AI UGC Videos, Script Writing, Short-form Video Editing",
  };

  const experience = [
    {
      role: "AI UGC Creator & Automation Specialist",
      company: "Ravan.ai",
      period: "Jun 2025 – Present",
      bullets: [
        "Produced 500+ AI-generated UGC videos for global marketing campaigns and paid social advertisements.",
        "Created AI video ads for international brands including Dambe Properties, eSanad, EuroDigital, and other global clients.",
        "Generated scripts, AI avatars, voiceovers, and video visuals using generative AI tools.",
        "Optimized short-form video creatives for Instagram Reels, TikTok Ads, and YouTube Shorts.",
        "Automated content workflows using Make (Integromat) and API integrations.",
      ]
    },
    {
      role: "Web Development Intern",
      company: "Internship",
      period: "Mar 2024 – May 2024",
      bullets: [
        "Developed a functional web application under the mentorship of Mr. Shivanshi Dwivedi.",
        "Integrated real-time drone data visualizations into a web dashboard.",
      ]
    }
  ];

  const projects = [
    {
      name: "AI UGC Video Production",
      tag: "900+ Assets",
      tagColor: "#7b4dff",
      bullets: [
        "Produced 900+ AI-generated UGC videos for global real estate and e-commerce brands.",
        "Used HeyGen, D-ID, ElevenLabs & Runway ML to create hyper-realistic avatar-led creatives.",
        "Deployed ads for brands like Dambe Properties, eSanad, EuroDigital across Meta & YouTube.",
        "Scripted, voiced, and edited all content end-to-end using generative AI pipelines.",
      ]
    },
    {
      name: "IRL UGC & Cinematic Shoots",
      tag: "40+ Shoots",
      tagColor: "#000",
      bullets: [
        "Directed and produced 40+ on-location shoots for luxury real estate properties.",
        "Created high-converting property tours, walkthroughs, and cinematic brand films.",
        "Delivered ready-to-run creatives optimized for Instagram Reels, TikTok Ads, and YouTube Shorts.",
      ]
    },
    {
      name: "Website & Landing Page Dev",
      tag: "80+ Deployed",
      tagColor: "#00aa55",
      bullets: [
        "Designed and developed 80+ high-converting landing pages for real estate and service brands.",
        "Built using React, Next.js, and custom stacks optimized for speed and lead capture.",
        "Integrated HubSpot, WhatsApp API, and CRM forms for direct lead routing.",
      ]
    },
    {
      name: "Automation & AI Systems",
      tag: "20+ Systems",
      tagColor: "#e85d04",
      bullets: [
        "Built 20+ automation pipelines using Make (Integromat), n8n, and Google Sheets APIs.",
        "Automated content creation, publishing, lead qualification, and CRM routing flows.",
        "Created AI chatbot systems for 24/7 lead engagement and funnel management.",
      ]
    }
  ];

  return (
    <motion.div
      className="page-container"
      initial="initial" animate="animate" exit="exit" variants={pageVariants}
    >
      {/* Hero Header */}
      <section className="container" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.4, marginBottom: '1rem' }}>— Meet the Builder</p>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
              HARSH<br /><span className="serif-italic">Srivastav.</span>
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', textAlign: 'right' }}>
            <a href="tel:7839661372" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Phone size={14} /> 7839661372
            </a>
            <a href="mailto:harshustle@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Mail size={14} /> harshustle@gmail.com
            </a>
            <a href="https://linkedin.com/in/harshustle" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Linkedin size={14} /> linkedin.com/in/harshustle
            </a>
            <a href="https://github.com/com/u/harshustle" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Github size={14} /> github.com/u/harshustle
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', fontSize: '0.8rem', opacity: 0.6 }}>
              <MapPin size={14} /> Tilak Nagar, Delhi
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '3rem', marginTop: '1rem' }}></div>
      </section>

      {/* EDUCATION + BIO (Bento Row) */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <div className="bento-grid" style={{ gap: '1.5rem' }}>
          {/* Bio Card - Large */}
          <div className="bento-card large" style={{ padding: '3rem', background: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-1rem', right: '-2rem', fontSize: '9rem', fontWeight: 950, opacity: 0.03, pointerEvents: 'none' }}>BIO</div>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.35, marginBottom: '2rem' }}>— Background</p>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.65, opacity: 0.75 }}>
              AI UGC Creator & Automation Specialist with a passion for building systems that generate results at scale. Combining technical engineering with generative AI to build powerful content pipelines and digital infrastructure.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.65, opacity: 0.75, marginTop: '1.5rem' }}>
              Currently perfecting the "Lead Generation Machine" for real estate agencies and global brands through 900+ AI-generated assets and 20+ custom automation systems.
            </p>
          </div>

          {/* Education Card */}
          <div className="bento-card" style={{ padding: '2.5rem', background: '#f9f6f4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.35, marginBottom: '2rem' }}>— Education</p>
            <div>
              <div style={{ fontSize: '3.5rem', fontWeight: 950, lineHeight: 1, letterSpacing: '-0.05em', opacity: 0.08, marginBottom: '-1.5rem' }}>IT</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900 }}>B.Tech in<br /><span className="serif-italic">Information Technology</span></h3>
              <p style={{ opacity: 0.55, marginTop: '0.8rem', fontSize: '0.85rem' }}>APJ Abdul Kalam Technical University, Lucknow</p>
              <p style={{ opacity: 0.55, marginTop: '0.4rem', fontSize: '0.85rem' }}>Sep 2021 – May 2025</p>
              <div style={{ marginTop: '1.5rem', display: 'inline-block', background: '#000', color: '#fff', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 800 }}>
                CGPA: 7.6 / 10
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.35, marginBottom: '2rem' }}>— Experience</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((exp, i) => (
            <div key={i} style={{ background: i === 0 ? '#fff' : '#f9f6f4', borderRadius: '24px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '0.7rem', fontWeight: 900, opacity: 0.25, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{exp.period}</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: '#f2efed', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 900, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 900 }}>{exp.role}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.3rem' }}>{exp.company}</p>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', opacity: 0.65, lineHeight: 1.5 }}>
                    <span style={{ opacity: 0.4, flexShrink: 0 }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.35, marginBottom: '2rem' }}>— Technical Skills</p>
        <div style={{ background: '#fff', borderRadius: '24px', padding: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
            {Object.entries(skills).map(([category, value]) => (
              <div key={category} style={{ display: 'flex', gap: '0.8rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.4, flexShrink: 0, paddingTop: '0.1rem', minWidth: '80px' }}>{category}</span>
                <span style={{ fontSize: '0.85rem', opacity: 0.75, lineHeight: 1.4 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.35, marginBottom: '2rem' }}>— Projects</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '1.5rem' }}>
          {projects.map((proj, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? '#f9f6f4' : '#fff', borderRadius: '24px', padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.8rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 900, maxWidth: '65%' }}>{proj.name}</h3>
                <div style={{ background: proj.tagColor, color: proj.tagColor === '#000' ? '#fff' : (proj.tagColor === '#7b4dff' ? '#fff' : '#fff'), padding: '0.35rem 0.9rem', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 900, flexShrink: 0 }}>
                  {proj.tag}
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {proj.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.85rem', opacity: 0.65, lineHeight: 1.5 }}>
                    <span style={{ opacity: 0.4, flexShrink: 0 }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default About;
