export default function Home() {
  const firmName = "Triwisepartners"; // Change this to your exact firm name if different
  
  // COMPANY CONTACT INFORMATION
  const companyPhone = "+91 (987) 654-3210";
  const companyEmail = "legal@triwisepartners.com";
  const companyAddress = "Gurgaon";

  const coreServices = [
    {
      number: "01",
      title: "Business Structuring & Registration",
      details: [
        "Incorporation of Companies, LLPs, Partnerships, Trusts, and Societies in India",
        "Advisory on entity structuring, regulatory approvals, and FEMA compliance"
      ],
      icon: "🏢"
    },
    {
      number: "02",
      title: "Corporate Secretarial & Legal Support",
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
      title: "Corporate Restructuring — Mergers, Demergers & Amalgamations",
      details: [
        "Structuring and execution of mergers, demergers, and amalgamations under Sections 230–232 of the Companies Act, 2013",
        "Coordination of NCLT scheme approvals, creditor/shareholder meetings, and regulatory filings"
      ],
      icon: "🔄"
    },
    {
      number: "04",
      title: "Oppression & Mismanagement (O&M)",
      details: [
        "Representation in petitions under Sections 241–242 of the Companies Act, 2013 for relief against oppression and mismanagement before the NCLT",
        "Advisory and strategic support in shareholder disputes and minority-shareholder protection matters"
      ],
      icon: "🛡️"
    },
    {
      number: "05",
      title: "Tax Advisory & Compliance",
      details: [
        "Income Tax and GST advisory, planning, and filings",
        "Representation before tax and appellate authorities"
      ],
      icon: "📊"
    },
    {
      number: "06",
      title: "Labour & Employment Law Compliance",
      details: [
        "PF, ESI, Shops & Establishment Act compliance",
        "Advisory on employee benefits and HR documentation"
      ],
      icon: "👥"
    },
    {
      number: "07",
      title: "Intellectual Property Rights (IPR)",
      details: [
        "Filing and protection of trademarks, copyrights, patents, and designs",
        "IP portfolio management in India and internationally"
      ],
      icon: "💡"
    },
    {
      number: "08",
      title: "FEMA & RBI Advisory",
      details: [
        "FDI structuring, foreign remittance compliance, RBI filings",
        "Advisory under FEMA and allied regulations"
      ],
      icon: "🌐"
    },
    {
      number: "09",
      title: "SEBI (LODR) Regulations — Listing Compliance",
      details: [
        "Continuous compliance for listed entities: financial disclosures, corporate governance report, and regulatory filings with stock exchanges",
        "Board & committee composition advisory (Audit Committee, NRC, Stakeholders' Relationship Committee)",
        "Related Party Transaction disclosures, policy drafting, and Secretarial Audit / Annual Secretarial Compliance Report support"
      ],
      icon: "📈"
    },
    {
      number: "10",
      title: "SEBI (ICDR) Regulations — Capital Issuances",
      details: [
        "Advisory support for IPOs, rights issues, preferential allotments, and QIPs",
        "Compliance under SEBI (Share Based Employee Benefits & Sweat Equity) Regulations for ESOP/ESPS schemes"
      ],
      icon: "💼"
    },
    {
      number: "11",
      title: "SEBI (SAST) Regulations — Takeover Advisory",
      details: [
        "Advisory on open offers, creeping acquisition limits, and takeover code compliance",
        "Shareholding disclosures under Regulations 29/30/31 and other substantial-acquisition filings"
      ],
      icon: "🤝"
    },
    {
      number: "12",
      title: "SEBI (PIT) Regulations — Insider Trading Compliance",
      details: [
        "Code of Conduct implementation, trading window management, and Structured Digital Database (SDD) compliance",
        "Advisory on disclosure obligations for designated persons and connected entities"
      ],
      icon: "🔒"
    },
    {
      number: "13",
      title: "Other SEBI & Capital Market Matters",
      details: [
        "Delisting Regulations advisory and Depositories & Participants compliance",
        "Investor grievance redressal support, including SCORES platform coordination"
      ],
      icon: "📋"
    },
    {
      number: "14",
      title: "Adjudication & Compounding",
      details: [
        "Representation in adjudication proceedings for procedural defaults under the Companies Act, FEMA, and SEBI regulations",
        "Compounding of offences before the Regional Director, NCLT, RBI, and other competent authorities"
      ],
      icon: "⚖️"
    },
    {
      number: "15",
      title: "Liaisoning Services",
      details: [
        "Liaisoning with ROC, RD, MCA, SEBI, Stock Exchanges, RBI and other regulatory bodies",
        "End-to-end follow-up for approvals, registrations, and regulatory correspondence"
      ],
      icon: "📞"
    },
    {
      number: "16",
      title: "Due Diligence & Governance Audits",
      details: [
        "Legal due diligence and documentation audits",
        "Corporate governance health checks for investors and regulators"
      ],
      icon: "🔍"
    },
    {
      number: "17",
      title: "Collaborative Professional Solutions",
      details: [
        "Strategic tie-ups with legal, tax, and financial professionals",
        "Scalable solutions for evolving business needs"
      ],
      icon: "🤝"
    }
  ];

  const milestones = [
    {
      year: "Foundation",
      title: "Establishment of Practice",
      desc: "Founded with a vision to deliver meticulous corporate governance, company law compliance, and strategic taxation advisory."
    },
    {
      year: "Expansion",
      title: "Scaling Capital Markets & SEBI Advisory",
      desc: "Expanded specialized practice tiers to cover listed entity regulations, LODR compliance, and complex corporate restructuring."
    },
    {
      year: "Today",
      title: "Trusted Multi-Disciplinary Counsel",
      desc: "Representing diverse corporate entities, startups, and institutions across NCLT, ROC, RBI, and tax appellate authorities."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Utility Bar with Phone & Official Email */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-8 flex flex-col sm:flex-row justify-between items-center border-b border-slate-800">
        <div className="flex flex-wrap items-center gap-4 mb-1 sm:mb-0">
          <span>📞 Call: <a href={`tel:${companyPhone}`} className="text-blue-400 hover:underline">{companyPhone}</a></span>
          <span>|</span>
          <span>📧 Mail: <a href={`mailto:${companyEmail}`} className="text-blue-400 hover:underline">{companyEmail}</a></span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">🔒 Confidentiality Guaranteed</span>
        </div>
        <div className="text-slate-400">
          Mon - Fri (9:00 AM - 7:00 PM IST)
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <div className="font-bold text-xl text-slate-900 flex items-center gap-2">
          <span className="bg-blue-600 text-white p-1.5 rounded-lg text-sm">⚖️</span>
          {firmName} <span className="text-blue-600">Advisors</span>
        </div>
        <div className="space-x-6 text-sm font-medium text-slate-600 hidden md:flex items-center">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="/services" className="hover:text-blue-600">Practice Domains</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="#journey" className="hover:text-blue-600">Our Journey</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book Consultation</a>
        </div>
      </nav>

      {/* Hero Section with Visual Image */}
      <section className="py-20 px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="text-left">
            <span className="bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 inline-block mb-6">
              Legal • Secretarial • Taxation • SEBI & FEMA Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Strategic Counsel & Uncompromising Regulatory Compliance
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Empowering businesses, corporate boards, and investors with precision-driven legal frameworks, meticulous governance, and expert tax advisory under {firmName}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 text-center transition"
              >
                Schedule a Consultation
              </a>
              <a 
                href="#services" 
                className="bg-white text-slate-700 font-semibold px-8 py-4 rounded-xl border border-slate-300 shadow-sm hover:bg-slate-50 text-center transition"
              >
                Explore 17+ Practice Areas ↓
              </a>
            </div>
          </div>

          {/* Right Column: Professional Legal Image Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-25"></div>
            <div className="relative bg-white p-4 rounded-3xl border border-slate-200 shadow-xl overflow-hidden group">
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Legal and Corporate Advisory Workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">Premier Corporate Practice</span>
                  <h3 className="text-xl font-bold">Uncompromising Ethics & Precision</h3>
                  <p className="text-slate-300 text-xs mt-1">Safeguarding corporate governance across NCLT, ROC, SEBI, and Tax frameworks.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Key Trust Points Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-16 border-t border-slate-200 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-blue-600 font-bold text-xl mb-1">17+ Pillars</div>
            <div className="text-slate-900 font-semibold text-sm">Comprehensive Expertise</div>
            <p className="text-slate-500 text-xs mt-1">From company incorporation to NCLT petitions and SEBI LODR compliance.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-blue-600 font-bold text-xl mb-1">100% Secure</div>
            <div className="text-slate-900 font-semibold text-sm">Encrypted Inquiries</div>
            <p className="text-slate-500 text-xs mt-1">Strict adherence to professional confidentiality and data handling standards.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-blue-600 font-bold text-xl mb-1">Regulatory Sync</div>
            <div className="text-slate-900 font-semibold text-sm">Proactive Advisory</div>
            <p className="text-slate-500 text-xs mt-1">Staying ahead of legislative shifts across MCA, RBI, SEBI, and Tax authorities.</p>
          </div>
        </div>
      </section>

      {/* Organization Journey / History Section */}
      <section id="journey" className="py-20 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">The Journey of {firmName}</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Built on a foundation of professional rigor, ethical practice, and deep regulatory insight.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {milestones.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:border-blue-300 transition-colors">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                Milestone 0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 max-w-7xl mx-auto bg-slate-100/50 rounded-3xl my-10 border border-slate-200">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Core Offerings</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Our Comprehensive Practice Areas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Hover over any service card below to view detailed corporate and regulatory compliance solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-blue-600">{service.number}</span>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[600px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <ul className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-slate-600 text-sm flex items-start">
                        <span className="text-blue-500 mr-2">▪</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>Hover for details</span>
                <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Consultation Section with Company Address & Phone Details */}
      <section id="contact" className="py-20 px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Schedule a Confidential Consultation</h2>
            <p className="text-slate-600">Connect with our advisors via phone, visit our office, or submit an inquiry below.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Address Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl mb-2">📍</div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Office Address</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{companyAddress}</p>
            </div>
            {/* Phone Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Direct Line</h4>
              <p className="text-slate-600 text-xs"><a href={`tel:${companyPhone}`} className="text-blue-600 hover:underline">{companyPhone}</a></p>
            </div>
            {/* Email Box */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <div className="text-2xl mb-2">✉️</div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Official Email</h4>
              <p className="text-slate-600 text-xs"><a href={`mailto:${companyEmail}`} className="text-blue-600 hover:underline">{companyEmail}</a></p>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <input type="hidden" name="apikey" value="51e34f82-a396-4171-893f-67f7d1cc32b4" />

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name / Company Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="you@example.com" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                >
                  {coreServices.map((s, idx) => (
                    <option key={idx} value={`${s.number} - ${s.title}`}>{s.number} - {s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message / Details</label>
                <textarea 
                  name="message"
                  rows={4} 
                  placeholder="Briefly describe what assistance you need..." 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Submit Confidential Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-8 text-center text-sm border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-semibold text-slate-300">{firmName} Advisors — Legal, Secretarial, & Taxation Practice</p>
          <p className="text-xs">{companyAddress} | Phone: {companyPhone}</p>
          <p>© {new Date().getFullYear()} All rights reserved. Professional Confidentiality & Ethics Guaranteed.</p>
        </div>
      </footer>
    </main>
  );
}