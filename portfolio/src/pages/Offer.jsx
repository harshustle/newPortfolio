import React, { useState, useEffect } from "react";
import "./OfferPage.css";

const faqs = [
  {
    q: "Do you run Meta and Google ad campaigns for real estate & businesses?",
    a: "Yes. We launch and scale Meta & Google ad campaigns engineered specifically for high-intent lead generation, targeting active buyers, investors, and clients.",
  },
  {
    q: "Can you build custom landing pages & funnels?",
    a: "Absolutely. We build high-converting acquisition funnels with interactive sections, virtual media, clear pricing transparency, and instant booking/consultation CTAs.",
  },
  {
    q: "What is included in the Healthcare Management System?",
    a: "A full doctor and clinic appointment booking system, patient electronic records, automated WhatsApp & SMS reminder alerts, prescription/billing management, and staff access control.",
  },
  {
    q: "Do you provide AI lead qualification & calling automation?",
    a: "Yes. We configure conversational AI calling agents (inbound & outbound @ ₹7/min) and 24/7 WhatsApp chatbots that pre-qualify budget, timeline, and requirements before human handoff.",
  },
  {
    q: "Who is this for?",
    a: "Real estate developers, agencies, brokers, doctors, clinics, hospital networks, service businesses, and high-growth brands seeking automated client acquisition.",
  },
];

const calcServices = [
  {
    id: "ai_calling",
    label: "AI Calling System Setup & Agent Creation",
    unitPrice: 10000,
    unit: null,
    hasQty: false,
    note: "Setup + Agent creation (₹10,000). Usage billed separately @ ₹7 / min."
  },
  {
    id: "ai_videos",
    label: "AI Videos (UGC / Storytelling Ads)",
    unitPrice: 3000,
    unit: "video",
    hasQty: true,
    min: 2,
    max: 30,
    defaultQty: 4,
    note: "Creative concept, script, AI visuals/presenter, storytelling hooks, 9:16 vertical & captions."
  },
  {
    id: "ugc_videos",
    label: "Human Videos (UGC / Real Shoot)",
    unitPrice: 3000,
    unit: "video",
    hasQty: true,
    min: 2,
    max: 20,
    defaultQty: 2,
    note: "Real UGC creator on-ground shoot, script presentation, editing, branding & 9:16 format."
  },
  {
    id: "healthcare",
    label: "Healthcare Management System",
    unitPrice: 40000,
    unit: null,
    hasQty: false,
    note: "Clinic/hospital portal: doctor scheduling, patient records, WhatsApp/SMS alerts & billing system."
  },
  {
    id: "website_basic",
    label: "Website Setup — Basic",
    unitPrice: 40000,
    unit: null,
    hasQty: false,
    note: "Includes 3-Yr Hosting + 1-Yr Email, modern responsive design, listing/catalog & inquiry capture."
  },
  {
    id: "website_advance",
    label: "Website Setup — Advanced",
    unitPrice: 90000,
    unit: null,
    hasQty: false,
    note: "High-end custom portal, advanced filters, dynamic CMS, CRM integration & multi-tier flow."
  },
  {
    id: "landing",
    label: "Standalone Project Landing Page",
    unitPrice: 10000,
    unit: "page",
    hasQty: true,
    min: 1,
    max: 10,
    defaultQty: 1,
    note: "High-converting standalone landing page with gallery, floor plans & brochure download."
  },
  {
    id: "ads_funnel",
    label: "Ads Campaign & Acquisition Funnel Setup",
    unitPrice: 10000,
    unit: null,
    hasQty: false,
    note: "Targeted Meta & Google ads strategy, high-converting funnel mapping & conversion tracking."
  },
  {
    id: "whatsapp",
    label: "WhatsApp Lead Automation Setup",
    unitPrice: 10000,
    unit: null,
    hasQty: false,
    note: "Instant welcome reply, requirement collection, automated qualification & appointment routing."
  }
];

const fixedPlans = [
  {
    name: "Starter Package",
    desc: "For individual realtors, clinics & emerging brands getting started with digital acquisition.",
    price: "₹45,000",
    period: "one-time",
    billed: "Includes Basic Website, 4 AI Videos & WhatsApp Lead Setup",
    popular: false,
    btnText: "Choose Starter",
    features: [
      "Modern Website (Includes 3-yr hosting)",
      "4 AI UGC / Storytelling Ads (9:16 format)",
      "WhatsApp Lead Automation Setup",
      "AI Calling System Integration",
      "Lead Management & Admin Panel"
    ]
  },
  {
    name: "Growth Acquisition Package",
    desc: "Complete digital & AI acquisition system built to scale qualified leads & appointments.",
    price: "₹85,000",
    period: "one-time",
    billed: "Best value • Full connected lead pipeline",
    popular: true,
    btnText: "Book Strategy Call",
    features: [
      "Advanced Web Portal & Custom Interactive Filters",
      "8 AI Storytelling Videos + 2 Human UGC Videos",
      "Landing Page & Ads Funnel Architecture",
      "AI Calling System Setup + Agent Creation (₹7/min)",
      "WhatsApp Nurturing & Appointment Automation",
      "Dedicated Onboarding & Growth Strategy"
    ]
  },
  {
    name: "Enterprise & Healthcare Suite",
    desc: "For hospital chains, luxury developers & enterprises scaling multi-channel infrastructure.",
    price: "₹1,20,000+",
    period: "one-time / custom",
    billed: "Tailored scope for high-volume operations",
    popular: false,
    btnText: "Talk to Sales",
    features: [
      "Full Healthcare Management System / Advanced Portal",
      "Multiple Standalone Project Landing Pages",
      "12+ AI Videos & Human UGC Series",
      "Multi-Agent AI Calling & 24/7 Automated Infrastructure",
      "Custom CRM/EHR Integration & Priority Queue",
      "Retainer Growth Support & Campaign Management"
    ]
  }
];

const CALC_SHEET_URL = "https://script.google.com/macros/s/AKfycbxABRNpYSU6BJHLRJY1vE0ohMlCGNLjq6OuyECJEEZplZ4KfGebKe54_Ljrg-kJZRZy2w/exec";

function PricingCalculator() {
  const [selected, setSelected] = useState({});
  const [qty, setQty] = useState({ ai_videos: 4, ugc_videos: 2, landing: 1 });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (id) => {
    setSelected(prev => {
      const next = { ...prev, [id]: !prev[id] };
      // Keep Basic and Advanced website tiers cleanly selectable
      if (id === "website_basic" && next.website_basic) {
        next.website_advance = false;
      }
      if (id === "website_advance" && next.website_advance) {
        next.website_basic = false;
      }
      return next;
    });
  };

  const changeQty = (id, delta) => {
    setQty(prev => {
      const svc = calcServices.find(s => s.id === id);
      const minQty = svc ? (svc.min || 1) : 1;
      const currentQty = prev[id] || (svc ? svc.defaultQty : 1) || 1;
      const maxQty = svc ? (svc.max || 30) : 30;
      const next = Math.min(maxQty, Math.max(minQty, currentQty + delta));
      return { ...prev, [id]: next };
    });
  };

  const total = calcServices.reduce((sum, s) => {
    if (!selected[s.id]) return sum;
    const q = s.hasQty ? (qty[s.id] || 1) : 1;
    return sum + s.unitPrice * q;
  }, 0);

  const count = Object.values(selected).filter(Boolean).length;
  const discount = count >= 4 ? 0.20 : count >= 2 ? 0.10 : 0;
  const discounted = Math.round(total * (1 - discount));
  const saved = total - discounted;

  const fmt = (n) => "₹" + n.toLocaleString("en-IN");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (count === 0 || !name.trim() || !phone.trim()) return;
    setSubmitting(true);
    const selectedList = calcServices
      .filter(s => selected[s.id])
      .map(s => `${s.label}${s.hasQty ? ` ×${qty[s.id] || 1}` : ""}`);
    const payload = new URLSearchParams({
      name: name,
      phone: phone,
      service: selectedList.join(", "),
      budget: fmt(discounted),
      message: `Offer Page Calculator — ${count} service(s) selected`,
      source: "Offer Page Calculator",
    });
    try {
      await fetch(CALC_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
    } catch (_) { }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pricing-box">
      <div className="pricing-tag">BUILD YOUR CUSTOM PACKAGE</div>
      <h2>Custom Calculator</h2>
      <p className="pricing-sub">
        Select only the services you want — the price updates instantly.
        {count >= 2 && <span className="calc-discount-note"> Bundle discount applied</span>}
      </p>

      <div className="calc-grid">
        <div className="calc-services">
          {calcServices.map((svc) => (
            <div
              key={svc.id}
              className={`calc-row${selected[svc.id] ? " calc-row--active" : ""}`}
              onClick={() => toggle(svc.id)}
            >
              <div className="calc-check">
                {selected[svc.id] ? "✓" : ""}
              </div>
              <div className="calc-info">
                <div className="calc-label">{svc.label}</div>
                {svc.note && <div className="calc-note">{svc.note}</div>}
                <div className="calc-price-tag">
                  {fmt(svc.unitPrice)}{svc.unit ? ` / ${svc.unit}` : ""}
                </div>
              </div>
              {svc.hasQty && selected[svc.id] && (
                <div className="calc-qty" onClick={e => e.stopPropagation()}>
                  <button onClick={() => changeQty(svc.id, -1)}>−</button>
                  <span>{qty[svc.id] || 1}</span>
                  <button onClick={() => changeQty(svc.id, +1)}>+</button>
                </div>
              )}
              {!svc.hasQty && selected[svc.id] && (
                <div className="calc-subtotal">{fmt(svc.unitPrice)}</div>
              )}
              {svc.hasQty && selected[svc.id] && (
                <div className="calc-subtotal">{fmt(svc.unitPrice * (qty[svc.id] || 1))}</div>
              )}
            </div>
          ))}
        </div>

        <div className="calc-card">
          <div className="calc-card-title">YOUR ESTIMATE</div>

          {count === 0 ? (
            <div className="calc-empty">← Select services to see price</div>
          ) : (
            <>
              {discount > 0 && (
                <div className="calc-original">{fmt(total)}</div>
              )}
              <div className="calc-total">{fmt(discounted)}</div>
              {discount > 0 && (
                <div className="calc-saved">You save {fmt(saved)} ({Math.round(discount * 100)}% bundle discount)</div>
              )}
              <div className="calc-breakdown">
                {calcServices.filter(s => selected[s.id]).map(s => (
                  <div className="calc-line" key={s.id}>
                    <span>{s.label}{s.hasQty ? ` ×${qty[s.id] || 1}` : ""}</span>
                    <span>{fmt(s.unitPrice * (s.hasQty ? (qty[s.id] || 1) : 1))}</span>
                  </div>
                ))}
                {discount > 0 && (
                  <div className="calc-line calc-line--discount">
                    <span>Bundle Discount ({Math.round(discount * 100)}%)</span>
                    <span>−{fmt(saved)}</span>
                  </div>
                )}
              </div>
            </>
          )}

          {submitted ? (
            <div className="calc-success">
              ✓ Received! We'll reach out to you within 24 hours.
            </div>
          ) : (
            <form className="calc-form" onSubmit={handleSubmit}>
              <input
                className="calc-input"
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                className="calc-input"
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <button
                type="submit"
                className={`pricing-btn${(count === 0 || submitting) ? " pricing-btn--disabled" : ""}`}
                disabled={count === 0 || submitting}
              >
                {submitting ? "SENDING..." : count === 0 ? "SELECT SERVICES ABOVE" : "BOOK FREE STRATEGY CALL"}
              </button>
            </form>
          )}
          <div className="secure-line">No upfront payment • Strategy call first</div>
        </div>
      </div>

      {count >= 2 && (
        <div className="calc-bundle-banner">
          {count >= 4 ? "20% bundle discount applied!" : "10% bundle discount applied!"} Add {count < 4 ? `${4 - count} more service${4 - count > 1 ? "s" : ""} for 20% off` : "You're getting our best rate."}
        </div>
      )}
    </div>
  );
}

const proposalData = {
  brand: {
    name: "Wstatemedia",
    website: "wstatemedia.site",
    date: "August 2026"
  },
  overview: {
    heading: "Overview",
    text: "This proposal outlines a complete suite of digital and AI-powered services built for real estate developers, healthcare providers, and high-growth businesses. Each service below is modular: pick a single service to start, or combine them into an automated client acquisition engine."
  },
  pricingSummary: {
    heading: "Pricing Summary",
    columns: ["Service", "Setup / One-Time", "Monthly / Usage"],
    rows: [
      ["AI Calling System", "₹10,000 (setup + agent creation)", "₹7 / minute (usage)"],
      ["AI Videos (UGC / Storytelling Ads)", "₹3,000 / video", "—"],
      ["Human Videos (UGC / Real Shoot)", "₹3,000 / video (min. 2)", "—"],
      ["Healthcare Management System", "₹40,000 (one-time setup)", "Optional maintenance/SMS"],
      ["Website Development (Basic)", "₹40,000 (one-time)", "Incl. 3-yr hosting + 1-yr email"],
      ["Website Development (Advanced)", "₹90,000 (one-time)", "Incl. 3-yr hosting + 1-yr email"],
      ["Standalone Project Landing Page", "₹10,000 / page", "—"],
      ["Ads Campaign & Funnel Setup", "₹10,000 (setup)", "Ad spend separate"],
      ["WhatsApp Lead Automation", "₹10,000 (setup)", "+ WhatsApp API charges"]
    ],
    note: "Official transparent pricing for individual modular services or full growth packages."
  },
  services: [
    {
      number: 1,
      id: "ai-calling",
      title: "1. AI Calling System",
      pricing: [
        { label: "Setup + Agent Creation:", value: "₹10,000 (one-time)" },
        { label: "Usage:", value: "₹7 / minute" }
      ],
      sections: [
        {
          heading: "What's Included",
          features: [
            "AI inbound & outbound calling with instant automated callback on enquiry",
            "Lead qualification — budget, timeline, location, and requirement screening",
            "Information sharing, FAQ handling, and dynamic conversational answers",
            "Lead verification, appointment scheduling, and site visit booking",
            "Automated call summaries, audio transcription, and lead disposition tracking",
            "Seamless live human transfer for hot, ready-to-buy leads",
            "CRM integration and automated webhook synchronization",
            "Custom AI knowledge base trained specifically on your business & inventory"
          ]
        }
      ]
    },
    {
      number: 2,
      id: "ai-videos-ugc",
      title: "2. AI & Human UGC Videos",
      sections: [
        {
          heading: "AI Videos (UGC / Storytelling Ads)",
          pricing: [{ label: "Price:", value: "₹3,000 / video" }],
          packages: {
            columns: ["Package", "Videos", "Price"],
            rows: [
              ["Starter", "4 Videos", "₹12,000"],
              ["Growth", "8 Videos", "₹24,000"],
              ["Pro", "12 Videos", "₹36,000"]
            ]
          },
          features: [
            "Scroll-stopping storytelling hooks, creative concept & ad script",
            "AI-generated UGC visuals, avatar presenter, or property/product visual overlay",
            "Ultra-realistic AI voiceover in English, Hindi, or target regional accent",
            "Dynamic captions, cinematic sound effects (SFX), background score & branding",
            "Optimized for 9:16 vertical (Reels, Shorts, TikTok & Meta Ads)",
            "1 round of revision included per video"
          ]
        },
        {
          heading: "Human Videos (UGC / Real Shoot)",
          pricing: [{ label: "Price:", value: "₹3,000 / video (minimum order: 2 videos)" }],
          packages: {
            columns: ["Package", "Videos", "Price"],
            rows: [
              ["Starter", "2 Videos", "₹6,000"],
              ["Growth", "5 Videos", "₹15,000"],
              ["Pro", "8 Videos", "₹24,000"],
              ["Premium", "10 Videos", "₹30,000"]
            ]
          },
          features: [
            "Real on-camera UGC creator — concept, hook, script & presentation",
            "Authentic location or on-ground shoot showing product/property",
            "Professional pacing, captions, text animations, music & sound design",
            "Branding, clear call-to-action (CTA), 9:16 vertical format, 1 revision included"
          ]
        }
      ]
    },
    {
      number: 3,
      id: "healthcare",
      title: "3. Healthcare Management System",
      pricing: [
        { label: "Setup:", value: "₹40,000 (one-time complete system)" },
        { label: "Deployment:", value: "Full web portal + admin & doctor dashboards" }
      ],
      sections: [
        {
          heading: "Core System Capabilities",
          features: [
            "Doctor & Specialist Profiles with dynamic availability schedules",
            "Patient Appointment Booking System (online self-booking + reception desk)",
            "Electronic Health Records (EHR) & complete patient consultation history",
            "Automated WhatsApp & SMS appointment confirmations, reminders & follow-ups",
            "Digital Prescription & Medical Billing / Invoice Generation",
            "Role-Based Access: Admin, Receptionist, Doctor, and Patient access levels",
            "Patient Queue Management & real-time daily appointment overview",
            "Fast inquiry capture, callback requests, and hospital contact routing"
          ]
        },
        {
          heading: "Workflow Architecture",
          text: "Patient Enquiry / Booking → Instant WhatsApp Confirmation → Queue Allocation → Doctor Consultation & Digital Prescription → Billing → Automated Follow-up Reminder"
        }
      ]
    },
    {
      number: 4,
      id: "website",
      title: "4. Website Development (Basic & Advanced)",
      pricing: [
        { label: "Basic Website:", value: "₹40,000 (one-time)" },
        { label: "Advanced Website:", value: "₹90,000 (one-time)" },
        { label: "Included:", value: "3 years hosting + 1 year custom email hosting" }
      ],
      sections: [
        {
          heading: "Basic Website (₹40,000)",
          features: [
            "Modern, mobile-responsive corporate / business website (Up to 6 core pages)",
            "Home, About Us, Services / Listings, Contact Us, Testimonials & FAQ",
            "Interactive property/service showcase with photo gallery and inquiry form",
            "Click-to-WhatsApp, direct phone call button, and email notification on leads",
            "3 years premium cloud hosting + 1 year custom business email included",
            "SEO-ready structure, meta tags, Google Analytics & Meta Pixel integration"
          ]
        },
        {
          heading: "Advanced Website (₹90,000)",
          features: [
            "Full-scale custom portal architecture with advanced dynamic features",
            "Multi-category filtering: Location, budget, amenities, BHK / product specifications",
            "Interactive floor plans, virtual tours, downloadable brochures & price breakdown",
            "Custom Admin Panel with property, user, and lead pipeline management",
            "Site Visit & Calendar booking system with automated confirmation & reschedule",
            "High-speed CDN performance optimization, schema markup & CRM webhook sync",
            "Includes 3 years hosting, 1 year business email, SSL & priority technical support"
          ]
        }
      ]
    },
    {
      number: 5,
      id: "landing-ads",
      title: "5. Landing Page & Ads / Funnel",
      pricing: [
        { label: "Landing Page:", value: "₹10,000 / page" },
        { label: "Ads & Funnel Setup:", value: "₹10,000 (one-time)" }
      ],
      sections: [
        {
          heading: "Standalone Project Landing Page (₹10,000)",
          features: [
            "High-converting single-page acquisition layout engineered specifically for ad traffic",
            "Hero section with immediate value proposition, brochure download & booking CTA",
            "Interactive photo/video gallery, floor plans, amenities, and location map",
            "Sticky WhatsApp and Call CTAs with multi-step lead capture form",
            "Ultra-fast loading speed (<1.5s) optimized for high mobile conversion rates"
          ]
        },
        {
          heading: "Ads Campaign & Acquisition Funnel Setup (₹10,000)",
          features: [
            "Meta (Facebook/Instagram) & Google Ads account audit & setup",
            "Target audience research: demographic, high-intent interest & geo-fencing",
            "Funnel mapping: Ad Creative → Landing Page → Lead Qualification → CRM / WhatsApp",
            "Meta Conversion API, Pixel tracking, and Google Tag Manager event tracking",
            "A/B testing configuration for headlines, hooks, and lead forms"
          ]
        }
      ]
    },
    {
      number: 6,
      id: "whatsapp-automation",
      title: "6. WhatsApp Lead Automation",
      pricing: [
        { label: "Setup:", value: "₹10,000 (one-time)" },
        { label: "Monthly:", value: "₹3,000 – ₹10,000 + API Charges" }
      ],
      sections: [
        {
          heading: "What's Included",
          features: [
            "Instant lead response with automated greeting within 3 seconds of inquiry",
            "Automated qualification questionnaire (budget, preference, timeline)",
            "Automated delivery of property brochures, PDF pricing, and video links",
            "Smart appointment / site visit scheduling and reminder sequence",
            "Sales team alerts with instant lead summary notification",
            "CRM synchronization and seamless human handoff when lead requests agent"
          ]
        },
        {
          heading: "Automation Flow",
          text: "Lead Generated → Instant WhatsApp Greeting → Qualification Questions → Brochure Delivery → Appointment Booking → Sales Team Alert"
        }
      ]
    }
  ],
  commercialTerms: {
    heading: "Important Commercial Terms",
    items: [
      {
        icon: "📢",
        title: "Ad Spend Excluded",
        text: "Meta/Google ad spend is paid directly to advertising platforms and not included in service fees."
      },
      {
        icon: "💬",
        title: "WhatsApp API Charges",
        text: "Official WhatsApp Business API message charges are billed directly by Meta/provider."
      },
      {
        icon: "📞",
        title: "AI Calling Usage",
        text: "AI Calling usage (₹7/minute) is billed transparently based on actual completed call duration."
      },
      {
        icon: "🤖",
        title: "AI / LLM API Usage",
        text: "Third-party AI/LLM token usage is charged at actual cost or client API key."
      },
      {
        icon: "🌐",
        title: "Domain & Hosting Terms",
        text: "3-year hosting and 1-year business email are included. Domain registration or renewal is separate."
      },
      {
        icon: "✈️",
        title: "Creator Travel & Location",
        text: "Travel/accommodation outside local area for on-ground shoots is billed at actual cost."
      },
      {
        icon: "🎞️",
        title: "Premium Stock Media",
        text: "Specialty licensed stock footage or premium architectural 3D renders are quoted separately."
      },
      {
        icon: "🔄",
        title: "Video Revisions Policy",
        text: "Each video includes 1 round of revisions. Major script changes after delivery are charged separately."
      }
    ]
  },
  nextSteps: {
    heading: "Next Steps",
    text: "Choose the services that fit your current stage — start with any single service, or combine the website, AI calling, and WhatsApp automation into one connected lead pipeline. Get in touch to finalise scope and timelines."
  }
};

const shortFormVideos = [
  { type: "shoot", tag: "REAL SHOOT", url: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=7_lpgoxu" },
  { type: "shoot", tag: "REAL SHOOT", url: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=8_l0wsbr" },
  { type: "shoot", tag: "REAL SHOOT", url: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=prakhar_properties_1778384102_3893172810243885227_73535257018_zi9osj" },
  { type: "shoot", tag: "REAL SHOOT", url: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=prakhar_properties_1778305436_3892698647800481401_73535257018_ybkmvq" },
  { type: "ugc", tag: "AI UGC", url: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=Edited_wlnmjv" },
  { type: "ugc", tag: "AI UGC", url: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=Ai_ugc_10_ygvpdh" },
  { type: "ugc", tag: "AI UGC", url: "https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=0404_itrkrs" }
];

const clientWebsites = [
  {
    title: "Tarz HMS",
    domain: "hms.tarztech.com",
    liveUrl: "http://hms.tarztech.com/",
    category: "Healthcare Management System",
    badge: "Live System",
    description: "NABH-compliant hospital management software for OPD token queues, e-prescriptions, GST itemized billing, IPD bed wards, and multi-tenant clinical dashboards.",
    tags: ["NABH Compliant", "OPD & IPD", "GST Billing", "Doctor EMR"]
  },
  {
    title: "hmRide",
    domain: "hmride.com",
    liveUrl: "https://www.hmride.com/",
    category: "Mobility & Carpooling Platform",
    badge: "Production App",
    description: "India's community-powered carpooling app featuring Aadhaar-verified travel, Women Only mode, live GPS location tracking, and route deviation alerts.",
    tags: ["Aadhaar Verified", "Women-Only Mode", "Live GPS Tracking", "Corporate Circles"]
  },
  {
    title: "Tarz Technologies",
    domain: "tarztech.com",
    liveUrl: "https://www.tarztech.com/",
    category: "Tech Agency & Custom Software",
    badge: "Agency Platform",
    description: "High-performance digital engineering platform building scalable custom web applications, mobile apps, business automations, and AI growth solutions.",
    tags: ["Full-Stack Web", "Mobile Apps", "AI Automations", "Cloud Systems"]
  }
];

export default function OfferPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState("");
  const [isPlayingVsl, setIsPlayingVsl] = useState(false);
  const [creativeFilter, setCreativeFilter] = useState("all");
  const [playingIndex, setPlayingIndex] = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState("ai-calling");
  const [pricingMode, setPricingMode] = useState("calc");

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setShowVideo(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.createElement("script");
          s.src = A;
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    try {
      window.Cal("init", "30min", { origin: "https://app.cal.com" });
      window.Cal.config = window.Cal.config || {};
      window.Cal.config.forwardQueryParams = true;

      window.Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
        calLink: "wstate/30min",
      });

      window.Cal.ns["30min"]("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#167bff" },
          "dark": { "cal-brand": "#ffffff" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    } catch (_) {}
  }, []);

  const toggleFaq = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const openVideoInModal = (url) => {
    setModalVideoUrl(url + "&autoplay=true&controls=true");
    setShowVideo(true);
  };

  const getThumbnail = (url) => {
    const match = url.match(/public_id=([^&]+)/);
    if (match && match[1]) {
      const id = decodeURIComponent(match[1]);
      return `https://res.cloudinary.com/dobulag2p/video/upload/so_0,w_400,h_711,c_fill/${id}.jpg`;
    }
    return "https://res.cloudinary.com/dobulag2p/image/upload/v1778540902/__I_know_Your_Problem_202605120355_srntis.jpg";
  };

  const filteredVideos = shortFormVideos.filter(
    (v) => creativeFilter === "all" || v.type === creativeFilter
  );

  return (
    <div className="offer-page">
      {/* AMBIENT GLOWING GRID BACKGROUND ELEMENTS */}
      <div className="bg-grid-glow-container">
        <div className="grid-glow-orb orb-1"></div>
        <div className="grid-glow-orb orb-2"></div>
        <div className="grid-glow-orb orb-3"></div>
        <div className="grid-glow-orb orb-4"></div>

        {/* GLOWING GRID HIGHLIGHT BOXES AT VARIOUS SPOTS */}
        <div className="grid-highlight-box box-1"></div>
        <div className="grid-highlight-box box-2"></div>
        <div className="grid-highlight-box box-3"></div>
      </div>

      {/* VSL MODAL */}
      {showVideo && (
        <div className="vsl-modal-backdrop" onClick={() => setShowVideo(false)}>
          <div className="vsl-modal" onClick={(e) => e.stopPropagation()}>
            <button className="vsl-close" onClick={() => setShowVideo(false)}>✕</button>
            <iframe
              src={modalVideoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Proposal Demo Video"
              style={{ display: "block", border: 0 }}
            />
          </div>
        </div>
      )}

      {/* FLOATING PILL NAVBAR */}
      <header className="navbar-wrap">
        <div className="navbar-container">
          <ul className="navbar-links">
            <li><a href="#pricing-summary" className="navbar-link">Pricing Summary</a></li>
            <li><a href="#services" className="navbar-link">Services</a></li>
          </ul>
          <div className="navbar-logo">
            wstatemedia
          </div>
          <div className="navbar-actions">
            <ul className="navbar-links">
              <li><a href="#calculator" className="navbar-link">Calculator</a></li>
            </ul>
            <a href="#cta" className="navbar-btn">Contact Us</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-tag-wrap">
            <span className="hero-label">AI ACQUISITION &amp; GROWTH SYSTEMS</span>
          </div>

          <h1>
            Build your High-Growth <br />
            <span className="brand-highlight">Acquisition Machine with wstatemedia</span>
          </h1>

          <p className="subheadline">
            Generate qualified buyers, clients &amp; appointments automatically using AI UGC videos, high-converting websites &amp; funnels, and 24/7 AI calling &amp; WhatsApp systems.
          </p>

          {/* DUAL PILL BUTTONS */}
          <div className="hero-cta-group">
            <a href="#cta" className="btn-black-pill">
              Let's Explore →
            </a>
            <a href="#calculator" className="btn-outline-pill">
              Contact Us
            </a>
          </div>

          {/* TRUST BAR */}
          <div className="trust-bar">
            <span className="trust-text">Trusted by <strong>50+ High-Growth</strong> Agencies, Developers &amp; Healthcare Leaders</span>
          </div>

          {/* BROWSER WINDOW VIDEO FRAME */}
          <div className="browser-video-frame">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="browser-dot browser-dot--red"></span>
                <span className="browser-dot browser-dot--yellow"></span>
                <span className="browser-dot browser-dot--green"></span>
              </div>
              <div className="browser-url-bar">wstatemedia.com/vsl</div>
            </div>
            {isPlayingVsl ? (
              <div className="vsl-player-frame">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dobulag2p&public_id=Compiled_bboouj&autoplay=true&controls=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Proposal Demo Video"
                  style={{ display: "block", border: 0, width: "100%", height: "100%" }}
                />
              </div>
            ) : (
              <div className="vsl-thumbnail" onClick={() => setIsPlayingVsl(true)}>
                <img
                  src="https://res.cloudinary.com/dobulag2p/image/upload/v1778540902/__I_know_Your_Problem_202605120355_srntis.jpg"
                  alt="Watch VSL Video"
                  className="vsl-cover"
                />
                <div className="vsl-play-btn">
                  <div className="vsl-play-circle">
                    <div className="vsl-play-icon"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURE TO OUTCOME SECTION */}
      <section className="feature-outcome-section">
        <div className="container">
          <div className="section-title">
            <div className="hero-label">— FROM FEATURE TO OUTCOME</div>
            <h2>Every capability is built to end in one place: your phone ringing.</h2>
          </div>
          <div className="feature-outcome-grid">
            <div className="outcome-column">
              <div className="outcome-card">
                <div className="outcome-tag">FEATURE</div>
                <div className="outcome-title">10–20 AI ad variations monthly</div>
              </div>
              <div className="outcome-card">
                <div className="outcome-tag">EMOTIONAL BENEFIT</div>
                <div className="outcome-title">You stop guessing and start knowing what works</div>
              </div>
            </div>
            <div className="outcome-arrow">→</div>
            <div className="outcome-column">
              <div className="outcome-card">
                <div className="outcome-tag">ADVANTAGE</div>
                <div className="outcome-title">You test 5–10× more than a traditional agency</div>
              </div>
              <div className="outcome-card outcome-card--highlight">
                <div className="outcome-tag outcome-tag--highlight">BUSINESS RESULT</div>
                <div className="outcome-title">Lower cost per lead, more booked calls, higher ROAS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE TICKER BAR */}
      <div className="marquee-bar">
        <div className="marquee-track">
          <div className="marquee-item">COASTAL REALTY <span className="marquee-stat">CPL -41%</span> •</div>
          <div className="marquee-item">IRONGATE PROPERTIES <span className="marquee-stat">ROAS 5.6x</span> •</div>
          <div className="marquee-item">PINEHURST LUXURY <span className="marquee-stat">Bookings +212%</span> •</div>
          <div className="marquee-item">APEX HEALTHCARE <span className="marquee-stat">Patients +180%</span> •</div>
          <div className="marquee-item">BRIGHTSMILE CLINIC <span className="marquee-stat">CPA -38%</span> •</div>
          <div className="marquee-item">SUMMIT DEVELOPERS <span className="marquee-stat">CTR +156%</span> •</div>
          {/* continuous loop duplicate */}
          <div className="marquee-item">COASTAL REALTY <span className="marquee-stat">CPL -41%</span> •</div>
          <div className="marquee-item">IRONGATE PROPERTIES <span className="marquee-stat">ROAS 5.6x</span> •</div>
          <div className="marquee-item">PINEHURST LUXURY <span className="marquee-stat">Bookings +212%</span> •</div>
          <div className="marquee-item">APEX HEALTHCARE <span className="marquee-stat">Patients +180%</span> •</div>
          <div className="marquee-item">BRIGHTSMILE CLINIC <span className="marquee-stat">CPA -38%</span> •</div>
          <div className="marquee-item">SUMMIT DEVELOPERS <span className="marquee-stat">CTR +156%</span> •</div>
        </div>
      </div>



      {/* PRICING SUMMARY SECTION */}
      <section id="pricing-summary">
        <div className="container">
          <div className="section-title">
            <div className="hero-label">EXECUTIVE SUMMARY</div>
            <h2>{proposalData.pricingSummary.heading}</h2>
            <p>{proposalData.pricingSummary.note}</p>
          </div>

          <div className="table-responsive">
            <table className="summary-table">
              <thead>
                <tr>
                  {proposalData.pricingSummary.columns.map((col, idx) => (
                    <th key={idx}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {proposalData.pricingSummary.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row[0]}</strong></td>
                    <td><span className="price-tag">{row[1]}</span></td>
                    <td><span className="usage-tag">{row[2]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SERVICES DETAILED SCOPE SECTION */}
      <section id="services">
        <div className="container">
          <div className="section-title">
            <div className="hero-label">DETAILED SCOPE</div>
            <h2>Services Breakdown</h2>
            <p>Comprehensive deliverables for each of our core modular services below.</p>
          </div>

          {/* SERVICE NAVIGATION TABS */}
          <div className="service-tabs">
            {proposalData.services.map((svc) => (
              <button
                key={svc.id}
                className={activeServiceTab === svc.id ? "active" : ""}
                onClick={() => setActiveServiceTab(svc.id)}
              >
                {svc.title}
              </button>
            ))}
          </div>

          {/* SERVICE TAB CONTENT */}
          {proposalData.services.map((svc) => {
            if (activeServiceTab !== svc.id) return null;

            return (
              <div className="service-scope-card" key={svc.id}>
                <div className="scope-header">
                  <div>
                    <span className="scope-num">SERVICE 0{svc.number}</span>
                    <h3>{svc.title}</h3>
                  </div>

                  {svc.pricing && (
                    <div className="scope-pricing-badge">
                      {svc.pricing.map((p, idx) => (
                        <div key={idx} className={idx === 0 ? "p-main" : "p-sub"}>
                          <strong>{p.label}</strong> {p.value}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="service-details-container" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {svc.sections.map((sec, idx) => (
                    <div className="video-pkg-box" key={idx}>
                      <h4 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "10px", color: "var(--dark)" }}>
                        {sec.heading}
                      </h4>

                      {sec.pricing && (
                        <div style={{ marginBottom: "12px" }}>
                          {sec.pricing.map((pr, pidx) => (
                            <span key={pidx} className="price-tag" style={{ marginRight: "10px" }}>
                              {pr.label} {pr.value}
                            </span>
                          ))}
                        </div>
                      )}

                      {sec.packages && (
                        <div className="table-responsive" style={{ margin: "16px 0" }}>
                          <table className="summary-table">
                            <thead>
                              <tr>
                                {sec.packages.columns.map((c, cidx) => (
                                  <th key={cidx}>{c}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.packages.rows.map((r, ridx) => (
                                <tr key={ridx}>
                                  <td><strong>{r[0]}</strong></td>
                                  <td>{r[1]}</td>
                                  <td><span className="price-tag">{r[2]}</span></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {sec.features && (
                        <ul className="scope-list mt-12">
                          {sec.features.map((feat, fidx) => (
                            <li key={fidx}>{feat}</li>
                          ))}
                        </ul>
                      )}

                      {sec.text && (
                        <div className="flow-node flow-node--highlight" style={{ marginTop: "12px" }}>
                          {sec.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLIENT WEBSITES PORTFOLIO SHOWCASE SECTION */}
      <section id="websites">
        <div className="container">
          <div className="section-title">
            <div className="hero-label">FEATURED PLATFORMS</div>
            <h2>Websites &amp; Systems We've Built</h2>
            <p>Live, production-grade web systems, mobile platforms &amp; enterprise software.</p>
          </div>

          <div className="minimal-websites-grid">
            {clientWebsites.map((site, idx) => (
              <a
                key={idx}
                href={site.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-website-card"
              >
                <div className="minimal-card-top">
                  <span className="minimal-card-category">{site.category}</span>
                  <span className="minimal-card-badge">
                    <span className="live-dot"></span> {site.badge}
                  </span>
                </div>

                <div className="minimal-card-main">
                  <h3 className="minimal-card-title">{site.title}</h3>
                  <div className="minimal-card-domain">
                    {site.domain} <span className="arrow-icon">↗</span>
                  </div>
                  <p className="minimal-card-desc">{site.description}</p>
                </div>

                <div className="minimal-card-tags">
                  {site.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="minimal-tag">{tag}</span>
                  ))}
                </div>

                <div className="minimal-card-action">
                  <span>Visit Live Platform</span>
                  <span className="minimal-action-btn">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SHORT FORM SAMPLES SHOWCASE */}
      <section id="short-form-samples">
        <div className="container">
          <div className="section-title">
            <h2>SHORT FORM STYLES</h2>
            <p>High-converting short form UGC and storytelling content tailored to stop scrolling.</p>
          </div>

          <div className="creative-tabs">
            <button className={creativeFilter === 'all' ? 'active' : ''} onClick={() => { setCreativeFilter('all'); setPlayingIndex(null); }}>All Creatives</button>
            <button className={creativeFilter === 'shoot' ? 'active' : ''} onClick={() => { setCreativeFilter('shoot'); setPlayingIndex(null); }}>Real Shoot Ads</button>
            <button className={creativeFilter === 'ugc' ? 'active' : ''} onClick={() => { setCreativeFilter('ugc'); setPlayingIndex(null); }}>AI UGC Videos</button>
          </div>

          <div className="short-form-grid">
            {filteredVideos.map((item, idx) => (
              <div key={idx} className="phone-card">
                {playingIndex === idx ? (
                  <iframe
                    src={`${item.url}&autoplay=true&muted=false`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={`Video Sample ${idx}`}
                  />
                ) : (
                  <>
                    <img src={getThumbnail(item.url)} alt={item.tag} className="phone-card-bg" />
                    <div className="phone-card-overlay">
                      <div className="play-circle" onClick={() => setPlayingIndex(idx)}>
                        <svg viewBox="0 0 24 24">
                          <polygon points="8,5 19,12 8,19" />
                        </svg>
                      </div>
                      <span className="phone-tag">{item.tag}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL TERMS SECTION */}
      <section id="terms">
        <div className="container">
          <div className="section-title">
            <div className="hero-label">TRANSPARENCY</div>
            <h2>{proposalData.commercialTerms.heading}</h2>
            <p>Clear, upfront business terms for all digital &amp; AI services.</p>
          </div>

          <div className="terms-grid">
            {proposalData.commercialTerms.items.map((term, idx) => (
              <div className="term-card" key={idx}>
                <div className="term-icon">{term.icon}</div>
                <div className="term-title">{term.title}</div>
                <p>{term.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & PACKAGES SECTION */}
      <section className="pricing-section" id="calculator">
        <div className="container">
          <div className="section-title">
            <div className="hero-label">— PRICING &amp; PACKAGES</div>
            <h2>Simple plans. Transparent pricing.</h2>
            <p>Choose between our complete fixed acquisition plans or custom build your exact package with our live calculator.</p>
          </div>

          <div className="pricing-mode-toggle">
            <button
              className={`pricing-mode-btn${pricingMode === 'calc' ? ' active' : ''}`}
              onClick={() => setPricingMode('calc')}
            >
              Custom Calculator
            </button>
            <button
              className={`pricing-mode-btn${pricingMode === 'plans' ? ' active' : ''}`}
              onClick={() => setPricingMode('plans')}
            >
              Simple Fixed Plans
            </button>
          </div>

          {pricingMode === 'calc' && <PricingCalculator />}

          {pricingMode === 'plans' && (
            <div>
              <div className="plans-grid">
                {fixedPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`plan-card${plan.popular ? ' plan-card--popular' : ''}`}
                  >
                    {plan.popular && <div className="plan-popular-badge">MOST POPULAR</div>}
                    <div className="plan-name">{plan.name}</div>
                    <div className="plan-desc">{plan.desc}</div>
                    <div className="plan-price">
                      {plan.price} <span>{plan.period}</span>
                    </div>
                    <div className="plan-billed">{plan.billed}</div>
                    <ul className="plan-features">
                      {plan.features.map((feat) => (
                        <li key={feat}>{feat}</li>
                      ))}
                    </ul>
                    <a
                      href="#cta"
                      className={`plan-btn${plan.popular ? ' plan-btn--primary' : ''}`}
                    >
                      {plan.btnText}
                    </a>
                  </div>
                ))}
              </div>

              <div className="plan-guarantee">
                <div className="guarantee-icon">🛡️</div>
                <div>
                  <div className="guarantee-title">30-day performance guarantee</div>
                  <div className="guarantee-desc">
                    If we don't deliver tested ad variations and launch your pipeline within your first 30 days, we'll keep iterating at no extra cost. That's how confident we are in our execution.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq${activeIndex === i ? " active" : ""}`}
              onClick={() => toggleFaq(i)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <h3>{activeIndex === i ? "−" : "+"}</h3>
              </div>
              {activeIndex === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA & CALENDAR BOOKING */}
      <section className="final" id="cta">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-title">
            <h2>Stop Posting. Start Converting.</h2>
            <p>Build your high-converting client acquisition machine today.</p>
            <p style={{ marginTop: "12px", fontSize: "15px", fontWeight: "700" }}>
              Direct Contact: <a href="mailto:wstatemedia@gmail.com" style={{ color: "var(--light-blue-dark)", textDecoration: "underline" }}>wstatemedia@gmail.com</a>
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "auto", borderRadius: "16px", overflow: "hidden", background: "#fff", border: "1px solid #e2e8f0", padding: "20px" }}>
            <div style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }} id="my-cal-inline-30min"></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="offer-footer">
        <div className="container">
          <div className="offer-footer-grid">
            <div>
              <div className="offer-footer-logo">wstatemedia</div>
              <p className="offer-footer-tagline">
                AI-powered growth &amp; acquisition systems.<br />
                Creatives. Funnels. Automation. Systems.
              </p>
            </div>
            <div>
              <div className="offer-footer-heading">Services</div>
              <ul className="offer-footer-links">
                <li>AI Videos (UGC &amp; Storytelling Ads)</li>
                <li>Human Videos (UGC &amp; Real Shoot)</li>
                <li>Healthcare Management System</li>
                <li>Websites (Basic &amp; Advanced)</li>
                <li>Landing Pages &amp; Ads Funnel</li>
                <li>AI Calling &amp; WhatsApp Automation</li>
              </ul>
            </div>
            <div>
              <div className="offer-footer-heading">Contact</div>
              <ul className="offer-footer-links">
                <li><a href="mailto:wstatemedia@gmail.com">wstatemedia@gmail.com</a></li>
                <li><a href="https://cal.com/wstate/30min" target="_blank" rel="noopener noreferrer">Book Strategy Call</a></li>
              </ul>
            </div>
          </div>
          <div className="offer-footer-bottom">
            <span>© 2026 wstatemedia. All rights reserved.</span>
            <span>Built by Harsh Srivastava</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
