'client'; // Ensures client-side state and audio functionality work seamlessly in Next.js
import { useState } from 'react';

export default function Home() {
  const firmName = "triwisepartners"; 
  const companyPhone = "+91 (987) 654-3210";
  const companyEmail = "contact@lexcorp.com";
  const companyAddress = "Gurgaon, Hryana";

  // State for active category filter and selected service modal
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState<any | null>(null);

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
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2.5 px-6 lg:px-16 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-6">
          <a href={`tel:${companyPhone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <span className="text-blue-500">📞</span> {companyPhone}
          </a>
          <a href={`mailto:${companyEmail}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <span className="text-blue-500">✉️</span> {companyEmail}
          </a>
          <span className="hidden xl:flex items-center gap-2 text-slate-400">
            <span className="text-emerald-500">●</span> Strict Client Data Privacy & NDAs Guaranteed
          </span>
        </div>
        <div className="text-slate-400 font-medium">
          Mon – Fri: 9:00 AM – 7:00 PM IST
        </div>
      </div>

      {/* Sticky Glassmorphism Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 px-6 lg:px-16 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-900/30 text-white font-black text-lg border border-blue-400/30">
            {firmName.charAt(0)}
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white">{firmName}</span>
            <span className="text-blue-500 font-semibold text-xs block tracking-widest uppercase">Advisors & Counsel</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" onClick={playClickSound} className="hover:text-blue-400 transition-colors">Practice Domains</a>
          <a href="#journey" onClick={playClickSound} className="hover:text-blue-400 transition-colors">Our Heritage</a>
          <a href="#credentials" onClick={playClickSound} className="hover:text-blue-400 transition-colors">Why Us</a>
          <a href="#contact" onClick={playClickSound} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition-all">
            Schedule Consultation
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Corporate Law • Secretarial • SEBI • Taxation
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Uncompromising Regulatory Precision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">Strategic Counsel</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl">
              Empowering corporate boards, financial institutions, and emerging enterprises with airtight governance, complex NCLT frameworks, and expert multi-disciplinary compliance under {firmName}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                onClick={playClickSound}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 text-center transition-all"
              >
                Request Confidential Consultation
              </a>
              <a 
                href="#services" 
                onClick={playClickSound}
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-xl border border-slate-700 text-center transition-all"
              >
                Explore 17+ Practice Pillars ↓
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-40"></div>
              <div className="relative bg-slate-900/90 border border-slate-800 p-6 rounded-3xl shadow-2xl backdrop-blur-xl">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Elite Legal Workspace" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Institutional Practice</span>
                    <h3 className="text-xl font-bold text-white">Excellence in Statutory Frameworks</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                    <div className="text-blue-400 text-2xl font-black mb-1">17+</div>
                    <div className="text-slate-300 text-xs font-medium">Specialized Practice Verticals</div>
                  </div>
                  <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                    <div className="text-blue-400 text-2xl font-black mb-1">100%</div>
                    <div className="text-slate-300 text-xs font-medium">Confidential & Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Navigation Filterable Services Section */}
      <section id="services" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-slate-900/40 rounded-3xl border border-slate-800/80 my-10">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Practice Domains</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">Explore Our 17 Practice Pillars</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm mb-8">Click any category tab to filter domains, or click any service card to open its interactive regulatory scope.</p>

          {/* Interactive Navigation Filtering Bar */}
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
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40' 
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat} {cat === 'All' ? `(${coreServices.length})` : `(${coreServices.filter(s => s.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Click Feedback */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              onClick={() => {
                playClickSound();
                setSelectedService(service);
              }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-black text-blue-400">{service.number}</span>
                  <span className="text-2xl p-2 bg-slate-950 rounded-xl border border-slate-800">{service.icon}</span>
                </div>
                
                <span className="inline-block text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-md mb-2 border border-blue-500/20">
                  {service.category}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-4">{service.subtitle}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">
                <span>Click to view full scope →</span>
                <span className="bg-blue-600/20 text-blue-400 p-1.5 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Service Detail Modal Popup */}
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
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{selectedService.category} • Pillar {selectedService.number}</span>
                <h3 className="text-2xl font-black text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium mb-6 pb-4 border-b border-slate-800">
              {selectedService.subtitle}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">Comprehensive Compliance & Advisory Scope:</h4>
            <ul className="space-y-3 mb-8">
              {selectedService.details.map((detail: string, idx: number) => (
                <li key={idx} className="text-slate-300 text-xs sm:text-sm flex items-start bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-blue-400 mr-3 font-bold mt-0.5">▪</span>
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
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-center text-sm shadow-lg shadow-blue-600/30 transition-all"
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

      {/* Organization Heritage / Journey */}
      <section id="journey" className="py-24 px-6 lg:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Our Heritage</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">The Evolution of {firmName}</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Founded on the bedrock of ethical practice, deep regulatory insight, and unwavering client advocacy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl relative group hover:border-blue-500/50 transition-all duration-300">
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-white mt-6 mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section id="contact" className="py-24 px-6 lg:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-3">Schedule a Confidential Consultation</h2>
          <p className="text-slate-400 text-sm">Connect directly via office, phone, or submit your requirement securely below.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
            <div className="text-2xl mb-2">📍</div>
            <h4 className="font-bold text-white text-sm mb-1">Head Office</h4>
            <p className="text-slate-400 text-xs leading-relaxed">{companyAddress}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
            <div className="text-2xl mb-2">📞</div>
            <h4 className="font-bold text-white text-sm mb-1">Direct Line</h4>
            <p className="text-slate-400 text-xs"><a href={`tel:${companyPhone}`} onClick={playClickSound} className="text-blue-400 hover:underline">{companyPhone}</a></p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center">
            <div className="text-2xl mb-2">✉️</div>
            <h4 className="font-bold text-white text-sm mb-1">Official Email</h4>
            <p className="text-slate-400 text-xs"><a href={`mailto:${companyEmail}`} onClick={playClickSound} className="text-blue-400 hover:underline">{companyEmail}</a></p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl">
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="space-y-6 max-w-xl mx-auto"
          >
            <input type="hidden" name="apikey" value="b5d8ed86-5013-4854-9fe4-29efbc0e7343" />

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Full Name / Corporate Entity</label>
              <input 
                type="text" 
                name="name"
                placeholder="Enter your name or organization" 
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Official Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="you@company.com" 
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Practice Domain Required</label>
              <select 
                name="service"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                {coreServices.map((s, idx) => (
                  <option key={idx} value={`${s.number} - ${s.title}`} className="bg-slate-900 text-white">
                    {s.number} - {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">Inquiry Details / Scope</label>
              <textarea 
                name="message"
                rows={4} 
                placeholder="Briefly describe your requirements or consultation needs..." 
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              ></textarea>
            </div>

            <button 
              type="submit" 
              onClick={playClickSound}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl shadow-xl shadow-blue-600/35 transition-all"
            >
              Submit Confidential Inquiry Securely
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12 px-6 lg:px-16 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-bold text-slate-300 text-sm">{firmName} Advisors — Corporate Law, Secretarial, & Taxation Counsel</p>
          <p>{companyAddress} | Direct Line: {companyPhone}</p>
          <p className="pt-4 border-t border-slate-900">© {new Date().getFullYear()} {firmName} Advisors. All rights reserved. Professional Confidentiality & Ethical Standards Maintained.</p>
        </div>
      </footer>
    </main>
  );
}