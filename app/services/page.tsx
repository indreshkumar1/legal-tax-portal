export default function ServicesPage() {
  const detailedServices = [
    {
      number: "01",
      title: "Business Structuring & Registration",
      category: "Corporate Setup",
      description: "End-to-end assistance in establishing legal entities with strict adherence to Indian corporate laws and regulatory frameworks.",
      scope: [
        "Incorporation of Private Limited Companies, Public Limited Companies, LLPs, Partnerships, Trusts, and Societies in India",
        "Advisory on optimal entity structuring, co-founder agreements, and cap table management",
        "Initial regulatory approvals, name reservations, and digital signature (DSC) procurement",
        "FEMA compliance advisory for foreign investments and cross-border setups"
      ],
      icon: "🏢"
    },
    {
      number: "02",
      title: "Corporate Secretarial & Legal Support",
      category: "Governance & Compliance",
      description: "Comprehensive day-to-day secretarial governance and robust legal contract drafting to safeguard corporate operations.",
      scope: [
        "Secretarial support for Board Meetings, Committee Meetings, and General Meetings (AGM/EGM)",
        "Preparation, drafting, and vetting of shareholder agreements, employment contracts, and commercial vendor agreements",
        "Maintenance of statutory registers, minutes books, and statutory records under the Companies Act, 2013",
        "Filing of annual returns, financial statements, and event-based forms (MGT-7, AOC-4, DIR-12, etc.) with the MCA / ROC",
        "Corporate Social Responsibility (CSR) compliance and reporting under Section 135"
      ],
      icon: "⚖️"
    },
    {
      number: "03",
      title: "Corporate Restructuring — Mergers, Demergers & Amalgamations",
      category: "Strategic Growth",
      description: "Sophisticated legal structuring and NCLT coordination for corporate consolidation, business transfers, and capital reorganizations.",
      scope: [
        "Structuring and end-to-end execution of schemes of arrangement, mergers, demergers, and amalgamations (Sec. 230–232)",
        "Coordination of NCLT scheme approvals, convening creditor/shareholder meetings, and statutory notices",
        "Reduction of share capital, buyback advisory, and fast-track corporate restructuring for group entities"
      ],
      icon: "🔄"
    },
    {
      number: "04",
      title: "Oppression & Mismanagement (O&M) & Dispute Resolution",
      category: "Litigation & Advisory",
      description: "Strategic defense and representation in shareholder disputes, minority protection matters, and corporate tribunal proceedings.",
      scope: [
        "Representation and drafting in petitions under Sections 241–242 of the Companies Act, 2013 before the NCLT",
        "Strategic advisory in boardroom deadlocks, minority shareholder grievances, and prevention of asset diversion",
        "Pre-litigation negotiation, settlement structuring, and arbitration support"
      ],
      icon: "🛡️"
    },
    {
      number: "05",
      title: "SEBI (LODR & ICDR) Regulations — Capital Markets",
      category: "Securities Law",
      description: "Specialized compliance and advisory for listed entities, stock exchange disclosures, and public capital issuances.",
      scope: [
        "Continuous compliance for listed entities under SEBI (LODR) Regulations: financial disclosures, governance reports, and stock exchange filings",
        "Advisory on public offerings (IPOs, rights issues, preferential allotments, and QIPs) under SEBI (ICDR) Regulations",
        "Takeover code advisory (SEBI SAST Regulations), open offers, and substantial acquisition disclosures",
        "Insider trading compliance (SEBI PIT Regulations), code of conduct, and Structured Digital Database (SDD) maintenance"
      ],
      icon: "📈"
    },
    {
      number: "06",
      title: "FEMA, RBI & Cross-Border Compliance",
      category: "Foreign Exchange",
      description: "Navigating foreign direct investments, overseas direct investments, and Reserve Bank of India regulatory filings.",
      scope: [
        "FDI structuring, inbound/outbound investment advisory, and foreign remittance compliance",
        "RBI filings, FIRMS portal reporting, and FC-GPR / FC-TRS filings",
        "External Commercial Borrowings (ECB) advisory and compounding of contraventions under FEMA"
      ],
      icon: "🌐"
    },
    {
      number: "07",
      title: "Tax Advisory & Labour Law Compliance",
      category: "Taxation & Workforce",
      description: "Integrated direct/indirect tax planning and full-spectrum employment law compliance for corporate workforces.",
      scope: [
        "Income Tax and GST advisory, tax planning, and corporate return filings",
        "Representation before tax authorities, appellate tribunals, and scrutiny support",
        "PF, ESI, Shops & Establishment Act compliance, and comprehensive HR documentation audits"
      ],
      icon: "📊"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <a href="/" className="font-bold text-xl text-slate-900">
          YourFirmName <span className="text-blue-600">Advisors</span>
        </a>
        <div className="space-x-6 text-sm font-medium text-slate-600 hidden md:flex items-center">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/services" className="text-blue-600 font-semibold">Services</a>
          <a href="/#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book Consultation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 text-center bg-gradient-to-b from-white to-slate-100 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Practice Domains</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-2 mb-6">
            Comprehensive Corporate & Legal Solutions
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Detailed breakdown of our core practice areas designed to navigate complex regulatory frameworks, mitigate risk, and drive business growth.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto space-y-12">
        {detailedServices.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-extrabold text-blue-600">{service.number}</span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-2">{service.title}</h2>
                </div>
              </div>
              <span className="text-4xl">{service.icon}</span>
            </div>

            <p className="text-slate-600 my-6 text-base leading-relaxed">
              {service.description}
            </p>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Key Scope of Services:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {service.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-blue-600 font-bold mr-3">▪</span>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <a 
                href="/#contact" 
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group"
              >
                Inquire about this service 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-8 text-center bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need Custom Advisory for Your Enterprise?</h2>
          <p className="text-slate-400 mb-8">Speak directly with our practice leads to discuss your company's specific compliance or restructuring requirements.</p>
          <a 
            href="/#contact" 
            className="bg-blue-600 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} YourFirmName Advisors. All rights reserved. Professional Confidentiality Guaranteed.</p>
      </footer>
    </main>
  );
}