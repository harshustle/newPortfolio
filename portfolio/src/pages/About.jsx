import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Code2, Instagram, Download } from 'lucide-react';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  const skills = {
    "Languages": "Java, JavaScript, SQL, HTML5, CSS3",
    "Frontend": "React.js, Next.js, Tailwind CSS, shadcn/ui, Redux, HTML, CSS",
    "Backend": "Node.js, Express.js, REST APIs, JWT Authentication, MVC",
    "Databases": "MongoDB, MySQL",
    "Tools": "Git, GitHub, VS Code, Postman, Cursor",
    "Cloud/APIs": "REST APIs, JSON, Webhooks, Google Sheets API, Cloudinary API, JWT",
    "AI & Automation": "OpenAI API, Gemini API, Make.com, n8n, ChatGPT, Runway ML, Pika Labs, Midjourney, HeyGen, D-ID, ElevenLabs, PlayHT",
    "Computer Science": "OOP, DBMS, Operating Systems, Computer Networks",
    "Operating Systems": "Windows, macOS",
    "Soft Skills": "Communication, Leadership, Teamwork, Problem Solving",
    "Content": "AI UGC Videos, Script Writing, Short-form Video Editing",
  };

  const experience = [
    {
      role: "Frontend Developer",
      company: "Ravan.ai",
      period: "Mar 2026 – Present",
      bullets: [
        "Developed responsive and scalable web applications using React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, and shadcn/ui.",
        "Integrated REST APIs and collaborated with backend developers to build dynamic, data-driven user interfaces.",
        "Worked with Git, GitHub, Postman, and Agile workflows to develop, review, test, and deploy production-ready features.",
        "Collaborated closely with UI/UX designers to deliver pixel-perfect, responsive, and user-friendly interfaces."
      ]
    },
    {
      role: "AI UGC Creator & Automation Specialist",
      company: "Ravan.ai",
      period: "Jun 2025 – Present",
      bullets: [
        "Produced 500+ AI-generated UGC videos for global marketing campaigns and paid social advertisements.",
        "Created AI video ads for international brands including Dambe Properties, eSanad, EuroDigital, and other global clients.",
        "Generated scripts, AI avatars, voiceovers, and video visuals using generative AI tools.",
        "Optimized short-form video creatives for Instagram Reels, TikTok Ads, and YouTube Shorts.",
        "Automated content workflows using Make (Integromat) and API integrations."
      ]
    },
    {
      role: "AI Automation Engineer",
      company: "Ravan.ai",
      period: "Jun 2025 – Mar 2026",
      bullets: [
        "Designed and deployed AI-powered automation workflows using Make.com, REST APIs, Webhooks, OpenAI API, and Gemini API.",
        "Built automation solutions for lead qualification, CRM synchronization, WhatsApp automation, and social media publishing.",
        "Integrated Google Sheets, Cloudinary, and third-party APIs to streamline business operations.",
        "Reduced manual operational effort by over 80% through scalable automation workflows."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Internship",
      period: "Mar 2024 – May 2024",
      bullets: [
        "Developed responsive web applications using HTML, CSS, JavaScript, and React under the mentorship of Mr. Shivanshi Dwivedi.",
        "Integrated real-time drone telemetry dashboards into web interfaces, improving user engagement by 20%.",
        "Collaborated with the development team to build reusable UI components and improve application performance."
      ]
    }
  ];

  const projects = [
    {
      name: "Uber Clone (MERN)",
      tag: "MERN Stack",
      tagColor: "#7b4dff",
      link: "https://github.com/harshustle/Uber-Website",
      bullets: [
        "Built a full-stack ride-booking platform using MongoDB, Express.js, React.js, and Node.js.",
        "Implemented JWT authentication, protected routes, role-based access control, and profile management.",
        "Developed RESTful APIs for ride booking, authentication, and user management.",
        "Integrated Socket.io for real-time ride updates between riders and captains.",
      ]
    },
    {
      name: "User Registration System (MERN)",
      tag: "MERN Stack",
      tagColor: "#4361ee",
      link: "https://github.com/harshustle/RegForm",
      bullets: [
        "Developed a secure authentication system using React.js, Express.js, MongoDB, JWT, and bcrypt.",
        "Implemented login, signup, password encryption, protected routes, and authentication middleware.",
        "Built responsive forms with real-time validation and error handling.",
      ]
    },
    {
      name: "Property Rental Platform (MVC)",
      tag: "MVC Arch",
      tagColor: "#2a9d8f",
      link: "https://wanderlust-3ie7.onrender.com/listings",
      bullets: [
        "Developed a property rental platform using MVC architecture with CRUD operations and secure authentication.",
        "Implemented property listings, booking workflow, image uploads, and responsive interfaces.",
        "Improved engagement by approximately 60% through optimized user experience.",
      ]
    },
    {
      name: "AI Social Media Automation",
      tag: "AI Workflows",
      tagColor: "#f77f00",
      bullets: [
        "Built AI-powered automation workflows using Make.com, OpenAI API, Google Sheets API, and REST APIs.",
        "Automated content generation, scheduling, and publishing across multiple social media platforms.",
        "Integrated Webhooks and third-party APIs to reduce manual work by over 90%.",
        "Designed reusable automation pipelines capable of handling high-volume business workflows.",
      ]
    },
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
            <a href="tel:9161955178" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Phone size={14} /> 9161955178
            </a>
            
            <a href="mailto:harshustle@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Mail size={14} /> harshustle@gmail.com
            </a>
            <a href="https://linkedin.com/in/harshustle" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Linkedin size={14} /> linkedin.com/in/harshustle
            </a>
            <a href="https://leetcode.com/harshustle" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Code2 size={14} /> leetcode.com/harshustle
            </a>
            <a href="https://github.com/harshustler" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Github size={14} /> github.com/harshustler
            </a>
            <a href="https://instagram.com/harshustler" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', color: 'inherit', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6 }}>
              <Instagram size={14} /> instagram.com/harshustler
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end', fontSize: '0.8rem', opacity: 0.6 }}>
              <MapPin size={14} /> Tilak Nagar, Delhi
            </span>
            <a 
              href="/Harsh_Srivastav_Resume.pdf" 
              download="Harsh_Srivastav_Resume.pdf" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'flex-end',
                color: '#fff',
                background: '#7b4dff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 750,
                marginTop: '0.6rem',
                transition: 'opacity 0.2s',
                width: 'fit-content',
                marginLeft: 'auto'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >
              <Download size={14} /> Download Resume
            </a>
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
          <div className="bento-card" style={{ padding: '2.5rem', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
            <div key={i} style={{ background: i === 0 ? '#fff' : 'var(--bg-secondary)', borderRadius: '24px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '0.7rem', fontWeight: 900, opacity: 0.25, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{exp.period}</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: '#e5dfff', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 900, flexShrink: 0 }}>
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

      {/* ACHIEVEMENTS */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.35, marginBottom: '2rem' }}>— Achievements</p>
        <div style={{ background: '#fff', borderRadius: '24px', padding: '3rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              "Built 10+ full-stack web applications using the MERN stack.",
              "Automated business workflows using AI and REST APIs, reducing manual effort by 80%+.",
              "Developed production-ready frontend applications using React.js, Next.js, Tailwind CSS, and shadcn/ui.",
              "Integrated OpenAI API, Gemini API, Webhooks, Cloudinary API, and Google Sheets API into automation solutions.",
              "Continuously improving problem-solving skills through regular practice of Data Structures and Algorithms."
            ].map((ach, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', opacity: 0.75, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--accent-color, #7b4dff)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.35, marginBottom: '2rem' }}>— Projects</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '1.5rem' }}>
          {projects.map((proj, i) => {
            const CardElement = proj.link ? 'a' : 'div';
            const cardProps = proj.link ? {
              href: proj.link,
              target: "_blank",
              rel: "noreferrer",
              style: {
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                background: i % 2 === 0 ? 'var(--bg-secondary)' : '#fff',
                borderRadius: '24px',
                padding: '2.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              },
              onMouseEnter: e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
              },
              onMouseLeave: e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            } : {
              style: {
                background: i % 2 === 0 ? 'var(--bg-secondary)' : '#fff',
                borderRadius: '24px',
                padding: '2.5rem',
              }
            };

            return (
              <CardElement key={i} {...cardProps}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.8rem' }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 900, 
                    maxWidth: '65%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}>
                    {proj.name} {proj.link && <ExternalLink size={14} style={{ opacity: 0.6 }} />}
                  </h3>
                  <div style={{ background: proj.tagColor, color: '#fff', padding: '0.35rem 0.9rem', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 900, flexShrink: 0 }}>
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
              </CardElement>
            );
          })}
        </div>
      </section>

    </motion.div>
  );
};

export default About;
