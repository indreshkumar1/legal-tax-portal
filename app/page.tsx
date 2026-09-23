'use client'; 
import { useState, useEffect } from 'react';

export default function Home() {
  const firmName = "TriWise Partners"; 
  const firmTagline = "Govern | Grow | Lead";
  const companyPhone = "+91 9808414803";
  const companyEmail = "legal@triwisepartners.com";
  const companyAddress = "Plot No. 803, Sector 38, Gurgaon – 122002, Haryana, India";
  const companyMapsUrl = "https://maps.google.com/?q=Plot+No.+803,+Sector+38,+Gurgaon+122002,+Haryana,+India";

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Corporate Law & NCLT Litigation",
      subtitle: "Strategic structuring, mergers, amalgamations, and minority shareholder protection.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      tag: "Pillars 01 – 04"
    },
    {
      title: "SEBI & Capital Market Compliance",
      subtitle: "Continuous LODR compliance, ICDR capital issuances, takeover codes, and insider trading frameworks.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      tag: "Pillars 09 – 13"
    },
    {
      title: "Taxation & FEMA Advisory",
      subtitle: "Direct/indirect tax architecture, representation, foreign remittances, and RBI/FDI structuring.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      tag: "Pillars 05 & 08"
    },
    {
      title: "Secretarial Audits & Due Diligence",
      subtitle: "Comprehensive corporate governance health checks, statutory register upkeep, and risk mitigation.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      tag: "Pillars 14 – 17"
    }
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  // High-end subtle UI click sound using Web Audio API
  const playClickSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.05);
      
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Ignore if audio context is blocked by browser policy prior to interaction
    }
  };

  const coreServices = [
    {
      number: "01",
      title: "Business Structuring & Registration",
      category: "Law & Legal",
      subtitle: "Corporate Foundation & Entity Setup",
      details: [
        "Incorporation of Companies, LLPs, Partnerships, Trusts, and Societies in India",
        "Advisory on entity structuring, regulatory approvals, and FEMA compliance"
      ],
      icon: "🏢"
    },
    {
      number: "02",
      title: "Corporate Secretarial & Legal Support",
      category: "Law & Legal",
      subtitle: "Governance, Board Advisory & Compliance",
      details: [
        "Support for M&A, buybacks, and restructuring events",
        "Compliance for group entities, JVs, subsidiaries, and governance advisory",
        "Secretarial support for Board and General Meetings",
        "Legal review of shareholder, employment & commercial contracts",
        "Drafting and vetting of board/shareholder resolutions, agreements, notices & policies",
        "Preparation and filing of forms / returns with MCA, ROC & other authorities",
        "Changes in directors, capital structure, registered office, etc.",
        "Maintenance of statutory registers, records, and minutes",
        "CSR compliance and reporting under Section 135 of the Companies Act, 2013",
        "Buyback of shares and reduction of share capital advisory"
      ],
      icon: "⚖️"
    },
    {
      number: "03",
      title: "Corporate Restructuring",
      category: "Law & Legal",
      subtitle: "Mergers, Demergers & Amalgamations",
      details: [
        "Structuring and execution of mergers, demergers, and amalgamations under Sections 230–232 of the Companies Act, 2013",
        "Coordination of NCLT scheme approvals, creditor/shareholder meetings, and regulatory filings"
      ],
      icon: "🔄"
    },
    {
      number: "04",
      title: "Oppression & Mismanagement (O&M)",
      category: "Law & Legal",
      subtitle: "Dispute Resolution & NCLT Representation",
      details: [
        "Representation in petitions under Sections 241–242 of the Companies Act, 2013 for relief against oppression and mismanagement before the NCLT",
        "Advisory and strategic support in shareholder disputes and minority-shareholder protection matters"
      ],
      icon: "🛡️"
    },
    {
      number: "05",
      title: "Tax Advisory & Compliance",
      category: "Taxation",
      subtitle: "Direct & Indirect Tax Architecture",
      details: [
        "Income Tax and GST advisory, planning, and filings",
        "Representation before tax and appellate authorities"
      ],
      icon: "📊"
    },
    {
      number: "06",
      title: "Labour & Employment Law Compliance",
      category: "Law & Legal",
      subtitle: "Workforce Regulations & HR Audits",
      details: [
        "PF, ESI, Shops & Establishment Act compliance",
        "Advisory on employee benefits and HR documentation"
      ],
      icon: "👥"
    },
    {
      number: "07",
      title: "Intellectual Property Rights (IPR)",
      category: "Law & Legal",
      subtitle: "Trademarks, Copyrights & Patents",
      details: [
        "Filing and protection of trademarks, copyrights, patents, and designs",
        "IP portfolio management in India and internationally"
      ],
      icon: "💡"
    },
    {
      number: "08",
      title: "FEMA & RBI Advisory",
      category: "Advisory",
      subtitle: "Cross-Border Remittances & FDI",
      details: [
        "FDI structuring, foreign remittance compliance, RBI filings",
        "Advisory under FEMA and allied regulations"
      ],
      icon: "🌐"
    },
    {
      number: "09",
      title: "SEBI (LODR) Regulations",
      category: "SEBI & Capital Markets",
      subtitle: "Continuous Listing Compliance",
      details: [
        "Continuous compliance for listed entities: financial disclosures, corporate governance report, and regulatory filings with stock exchanges",
        "Board & committee composition advisory (Audit Committee, NRC, Stakeholders' Relationship Committee)",
        "Related Party Transaction disclosures, policy drafting, and Secretarial Audit / Annual Secretarial Compliance Report support"
      ],
      icon: "📈"
    },
    {
      number: "10",
      title: "SEBI (ICDR) Regulations",
      category: "SEBI & Capital Markets",
      subtitle: "Capital Issuances, IPOs & ESOPs",
      details: [
        "Advisory support for IPOs, rights issues, preferential allotments, and QIPs",
        "Compliance under SEBI (Share Based Employee Benefits & Sweat Equity) Regulations for ESOP/ESPS schemes"
      ],
      icon: "💼"
    },
    {
      number: "11",
      title: "SEBI (SAST) Regulations",
      category: "SEBI & Capital Markets",
      subtitle: "Takeover Code & Open Offers",
      details: [
        "Advisory on open offers, creeping acquisition limits, and takeover code compliance",
        "Shareholding disclosures under Regulations 29/30/31 and other substantial-acquisition filings"
      ],
      icon: "🤝"
    },
    {
      number: "12",
      title: "SEBI (PIT) Regulations",
      category: "SEBI & Capital Markets",
      subtitle: "Insider Trading & SDD Compliance",
      details: [
        "Code of Conduct implementation, trading window management, and Structured Digital Database (SDD) compliance",
        "Advisory on disclosure obligations for designated persons and connected entities"
      ],
      icon: "🔒"
    },
    {
      number: "13",
      title: "Capital Market Services",
      category: "SEBI & Capital Markets",
      subtitle: "Delisting & Investor Grievances",
      details: [
        "Delisting Regulations advisory and Depositories & Participants compliance",
        "Investor grievance redressal support, including SCORES platform coordination"
      ],
      icon: "📋"
    },
    {
      number: "14",
      title: "Adjudication & Compounding",
      category: "Law & Legal",
      subtitle: "Regulatory Offence Settlement",
      details: [
        "Representation in adjudication proceedings for procedural defaults under the Companies Act, FEMA, and SEBI regulations",
        "Compounding of offences before the Regional Director, NCLT, RBI, and other competent authorities"
      ],
      icon: "⚖️"
    },
    {
      number: "15",
      title: "Liaisoning Services",
      category: "Advisory",
      subtitle: "Regulatory Body Coordination",
      details: [
        "Liaisoning with ROC, RD, MCA, SEBI, Stock Exchanges, RBI and other regulatory bodies",
        "End-to-end follow-up for approvals, registrations, and regulatory correspondence"
      ],
      icon: "📞"
    },
    {
      number: "16",
      title: "Due Diligence & Governance Audits",
      category: "Advisory",
      subtitle: "Investor & Regulatory Health Checks",
      details: [
        "Legal due diligence and documentation audits",
        "Corporate governance health checks for investors and regulators"
      ],
      icon: "🔍"
    },
    {
      number: "17",
      title: "Collaborative Solutions",
      category: "Advisory",
      subtitle: "Multi-Disciplinary Professional Tie-ups",
      details: [
        "Strategic tie-ups with legal, tax, and financial professionals",
        "Scalable solutions for evolving business needs"
      ],
      icon: "🤝"
    }
  ];

  const categories = ["All", "Law & Legal", "SEBI & Capital Markets", "Taxation", "Advisory"];

  const filteredServices = activeCategory === "All" 
    ? coreServices 
    : coreServices.filter(s => s.category === activeCategory);

  const milestones = [
    { year: "Phase I", title: "Foundation of Rigor", desc: "Established with an uncompromising focus on meticulous corporate governance and company law compliance." },
    { year: "Phase II", title: "Scaling Capital Markets", desc: "Expanded specialized practice tiers to cover listed entity regulations, NCLT restructuring, and SEBI frameworks." },
    { year: "Present", title: "Multi-Disciplinary Counsel", desc: "Trusted institutional counsel representing diverse enterprises and boards before regulatory appellate authorities." }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans scroll-smooth">
      
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2.5 px-6 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-6">
          <a href={`tel:${companyPhone}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">📞</span> {companyPhone}
          </a>
          <a href={`mailto:${companyEmail}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">✉️</span> {companyEmail}
          </a>
          <span className="hidden xl:flex items-center gap-2 text-slate-400">
            <span className="text-emerald-400">●</span> Strict Client Data Privacy & NDAs Guaranteed
          </span>
        </div>
        <div className="text-slate-400 font-medium">
          Mon – Fri: 9:00 AM – 7:00 PM IST
        </div>
      </div>

      {/* Sticky Glassmorphism Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800 py-3.5 px-6 lg:px-16 flex justify-between items-center transition-all">
        <a href="#home" onClick={playClickSound} className="flex items-center gap-3.5 group">
          <div className="bg-white px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
            <img 
              src="/logo.png" 
              alt="TriWise Partners Logo" 
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block border-l border-slate-800 pl-3.5">
            <span className="font-extrabold text-sm tracking-wide text-white block">{firmName}</span>
            <span className="text-cyan-400 font-semibold text-[10px] tracking-widest uppercase block">{firmTagline}</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#home" onClick={playClickSound} className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" onClick={playClickSound} className="hover:text-cyan-400 transition-colors">About Us</a>
          <a href="#services" onClick={playClickSound} className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#journey" onClick={playClickSound} className="hover:text-cyan-400 transition-colors">Our Heritage</a>
          <a href="#credentials" onClick={playClickSound} className="hover:text-cyan-400 transition-colors">Why Us</a>
          
          <a 
            href="#contact" 
            onClick={playClickSound}
            className="relative group overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-cyan-600/30 border border-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-1.5">
              <span>✉️</span> Contact Us
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-24 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {firmTagline}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Uncompromising Regulatory Precision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Strategic Counsel</span>
            </h1>
            
            <p className="text-base text-slate-300 mb-8 leading-relaxed font-normal">
              Empowering corporate boards, financial institutions, and emerging enterprises with airtight governance, complex NCLT frameworks, and expert multi-disciplinary compliance under {firmName}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                onClick={playClickSound}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl shadow-cyan-600/30 text-center transition-all text-sm border border-cyan-400/30 active:scale-95"
              >
                Contact Us
              </a>
              <a 
                href="#services" 
                onClick={playClickSound}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-3.5 rounded-xl border border-slate-700 text-center transition-all text-sm active:scale-95"
              >
                Explore 17+ Practice Pillars ↓
              </a>
            </div>
          </div>

          {/* Interactive Front Service Carousel */}
          <div className="lg:col-span-6">
            <div className="relative bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-2xl backdrop-blur-xl">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                {carouselSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-end p-6 sm:p-8">
                      <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2 bg-cyan-500/20 px-3 py-1 rounded-full w-fit border border-cyan-500/30">
                        {slide.tag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{slide.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Buttons & Dots */}
              <div className="flex justify-between items-center mt-4 px-2">
                <div className="flex gap-2">
                  {carouselSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        playClickSound();
                        setCurrentSlide(idx);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      playClickSound();
                      setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
                    }}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center font-bold text-sm transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      playClickSound();
                      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
                    }}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center font-bold text-sm transition-all"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6 lg:px-16 max-w-6xl mx-auto scroll-mt-24 border-t border-slate-800/80">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-6">Pioneering Excellence in Corporate Counsel</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {firmName} is a premier multi-disciplinary legal, secretarial, and taxation advisory firm dedicated to guiding enterprises through complex regulatory landscapes. Our practice combines meticulous statutory compliance with aggressive, strategic advocacy.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether navigating NCLT proceedings, SEBI listing requirements, cross-border FEMA structures, or routine board governance, our seasoned professionals deliver precision-driven solutions tailored to institutional and high-growth objectives.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold text-white mb-4">Core Philosophy</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "We believe that robust corporate governance is not merely a compliance burden, but a formidable strategic asset that shields enterprises and unlocks long-term valuation."
            </p>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Practice Leadership</span>
              <span className="text-cyan-400 font-semibold">{firmName} Advisors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-slate-900/40 rounded-3xl border border-slate-800/80 my-10 scroll-mt-24">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Services</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">Explore Our 17 Practice Pillars</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm mb-8">Click any category navigation button below to filter specific legal & financial domains instantly.</p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  playClickSound();
                  setActiveCategory(cat);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat 
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400/40' 
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat} {cat === 'All' ? `(${coreServices.length})` : `(${coreServices.filter(s => s.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              onClick={() => {
                playClickSound();
                setSelectedService(service);
              }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-black text-cyan-400">{service.number}</span>
                  <span className="text-2xl p-2 bg-slate-950 rounded-xl border border-slate-800">{service.icon}</span>
                </div>
                
                <span className="inline-block text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md mb-2 border border-cyan-500/20">
                  {service.category}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-4">{service.subtitle}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                <span>Click to view full scope →</span>
                <span className="bg-cyan-600/20 text-cyan-400 p-1.5 rounded-lg group-hover:bg-cyan-600 group-hover:text-white transition-all">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 max-w-2xl w-full p-8 rounded-3xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => {
                playClickSound();
                setSelectedService(null);
              }}
              className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-slate-700"
            >
              ✕
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl p-3 bg-slate-950 rounded-2xl border border-slate-800">{selectedService.icon}</span>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{selectedService.category} • Pillar {selectedService.number}</span>
                <h3 className="text-2xl font-black text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium mb-6 pb-4 border-b border-slate-800">
              {selectedService.subtitle}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Comprehensive Compliance & Advisory Scope:</h4>
            <ul className="space-y-3 mb-8">
              {selectedService.details.map((detail: string, idx: number) => (
                <li key={idx} className="text-slate-300 text-xs sm:text-sm flex items-start bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 mr-3 font-bold mt-0.5">▪</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a 
                href="#contact" 
                onClick={() => {
                  playClickSound();
                  setSelectedService(null);
                }}
                className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3.5 rounded-xl text-center text-sm shadow-lg shadow-cyan-600/30 transition-all"
              >
                Inquire About This Service
              </a>
              <button 
                onClick={() => {
                  playClickSound();
                  setSelectedService(null);
                }}
                className="px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3.5 rounded-xl text-sm transition-all border border-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Heritage & Why Us Sections */}
      <section id="journey" className="py-24 px-6 lg:px-16 max-w-6xl mx-auto scroll-mt-24">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Our Heritage</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">The Evolution of {firmName}</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Founded on the bedrock of ethical practice, deep regulatory insight, and unwavering client advocacy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl relative group hover:border-cyan-500/50 transition-all duration-300">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full uppercase">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-white mt-6 mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-xs uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-3">Contact Us</h2>
          <p className="text-slate-400 text-sm">Connect directly via our head office, phone line, or submit your requirement securely below.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="text-2xl p-3 bg-slate-950 rounded-xl border border-slate-800">📍</div>
             <div>
                <h4 className="font-bold text-white text-sm mb-1">Head Office</h4>
                <a 
                  href={companyMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={playClickSound}
                  className="text-slate-400 text-xs leading-relaxed hover:text-cyan-400 transition-colors block underline decoration-slate-700 hover:decoration-cyan-400"
                >
                  {companyAddress} (View on Google Maps ↗)
                </a>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="text-2xl p-3 bg-slate-950 rounded-xl border border-slate-800">📞</div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Direct Line</h4>
                <p className="text-slate-400 text-xs">
                  <a href={`tel:${companyPhone}`} onClick={playClickSound} className="text-cyan-400 hover:underline">{companyPhone}</a>
                </p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex items-start gap-4">
              <div className="text-2xl p-3 bg-slate-950 rounded-xl border border-slate-800">✉️</div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Official Email</h4>
                <p className="text-slate-400 text-xs">
                  <a href={`mailto:${companyEmail}`} onClick={playClickSound} className="text-cyan-400 hover:underline">{companyEmail}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Secure Inquiry</h3>
            <p className="text-slate-400 text-xs mb-6">Our advisory team will review your requirements and respond within 24 hours.</p>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
              <input type="hidden" name="apikey" value="b5d8ed86-5013-4854-9fe4-29efbc0e7343" />

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Full Name / Corporate Entity</label>
                <input type="text" name="name" placeholder="Enter your name or organization" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Official Email Address</label>
                <input type="email" name="email" placeholder="you@company.com" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Practice Domain Required</label>
                <select name="service" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm">
                  {coreServices.map((s, idx) => (
                    <option key={idx} value={`${s.number} - ${s.title}`} className="bg-slate-900 text-white">
                      {s.number} - {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Inquiry Details / Scope</label>
                <textarea name="message" rows={4} placeholder="Briefly describe your requirements or consultation needs..." className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"></textarea>
              </div>

              <button type="submit" onClick={playClickSound} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-4 rounded-xl shadow-xl shadow-cyan-600/35 transition-all text-sm">
                Submit Confidential Inquiry Securely
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 px-6 lg:px-16 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-bold text-slate-300 text-sm">{firmName} ({firmTagline}) — Corporate Law, Secretarial, & Taxation Counsel</p>
          <p>{companyAddress} | Direct Line: {companyPhone}</p>
          <p className="pt-4 border-t border-slate-900">© {new Date().getFullYear()} {firmName}. All rights reserved. Professional Confidentiality & Ethical Standards Maintained.</p>
        </div>
      </footer>
    </main>
  );
}