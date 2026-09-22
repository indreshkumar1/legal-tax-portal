export default function Home() {
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
      {/* Top Utility Bar with Official Contact Information */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-8 flex flex-col sm:flex-row justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-4 mb-1 sm:mb-0">
          <span>📧 Official Mail: <a href="mailto:legal@triwisepartners.com" className="text-blue-400 hover:underline">legal@triwisepartners.com</a></span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">🔒 Strict Client Confidentiality & Data Privacy Guaranteed</span>
        </div>
        <div className="text-slate-400">
          Working Hours: Mon - Fri (9:00 AM - 7:00 PM IST)
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <div className="font-bold text-xl text-slate-900 flex items-center gap-2">
          <span className="bg-blue-600 text-white p-1.5 rounded-lg text-sm">⚖️</span>
          YourFirmName <span className="text-blue-600">Advisors</span>
        </div>
        <div className="space-x-6 text-sm font-medium text-slate-600 hidden md:flex items-center">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="/services" className="hover:text-blue-600">Practice Domains</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="#journey" className="hover:text-blue-600">Our Journey</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book Consultation</a>
        </div>
      </nav>

      {/* Enhanced Hero Section with Key Trust Points */}
      <section className="py-24 px-8 text-center bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 inline-block mb-6">
            Legal • Secretarial • Taxation • SEBI & FEMA Compliance
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Strategic Counsel & Uncompromising Regulatory Compliance
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses, corporate boards, and investors with precision-driven legal frameworks, meticulous governance, and expert tax advisory.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Schedule a Consultation
            </a>
            <a 
              href="#services" 
              className="bg-white text-slate-700 font-semibold px-8 py-4 rounded-xl border border-slate-300 shadow-sm hover:bg-slate-50 transition"
            >
              Explore 17+ Practice Areas ↓
            </a>
          </div>

          {/* Key Trust Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-blue-600 font-bold text-xl mb-1">17+ Pillars</div>
              <div className="text-slate-900 font-semibold text-sm">Comprehensive Expertise</div>
              <p className="text-slate-500 text-xs mt-1">From company incorporation to NCLT petitions and SEBI LODR compliance.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-blue-600 font-bold text-xl mb-1">100% Secure</div>
              <p className="text-slate-500 text-xs mt-1">Strict adherence to professional confidentiality and data handling standards.</p>
              <div className="text-slate-900 font-semibold text-sm">Encrypted Inquiries</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-blue-600 font-bold text-xl mb-1">Regulatory Sync</div>
              <div className="text-slate-900 font-semibold text-sm">Proactive Advisory</div>
              <p className="text-slate-500 text-xs mt-1">Staying ahead of legislative shifts across MCA, RBI, SEBI, and Tax authorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Journey / History Section */}
      <section id="journey" className="py-20 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Heritage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">The Journey of Our Organization</h2>
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

      {/* Services Section with Hover Animation */}
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
                
                {/* Headline */}
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Hidden content that slides open smoothly on mouse hover */}
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

              {/* Hover prompt footer */}
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                <span>Hover for details</span>
                <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section id="contact" className="py-20 px-8 bg-white border-t border-slate-200">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Schedule a Confidential Consultation</h2>
            <p className="text-slate-600">Get expert advice on your corporate, taxation, secretarial, or legal needs.</p>
          </div>

          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm"
          >
            {/* REPLACE WITH YOUR ACTUAL WEB3FORMS KEY */}
            <input type="hidden" name="apikey" value="b5d8ed86-5013-4854-9fe4-29efbc0e7343" />

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
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-8 text-center text-sm border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-semibold text-slate-300">YourFirmName Advisors — Legal, Secretarial, & Taxation Practice</p>
          <p>© {new Date().getFullYear()} All rights reserved. Professional Confidentiality & Ethics Guaranteed.</p>
        </div>
      </footer>
    </main>
  );
}