export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <a href="/" className="font-bold text-xl text-slate-900">
          YourFirmName <span className="text-blue-600">Advisors</span>
        </a>
        <div className="space-x-6 text-sm font-medium text-slate-600 flex items-center">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/#services" className="hover:text-blue-600">Services</a>
          <a href="/#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book Consultation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 text-center bg-gradient-to-b from-white to-slate-100 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            About Our Practice
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Delivering precision, uncompromising confidentiality, and strategic foresight in corporate law, secretarial governance, and taxation.
          </p>
        </div>
      </section>

      {/* Firm Overview / Philosophy */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Trusted Counsel for Complex Regulatory Landscapes</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In an evolving corporate and regulatory environment, businesses require more than just compliance—they require strategic advisory that safeguards operations and fuels growth. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our firm brings together multi-disciplinary expertise across company law, SEBI regulations, direct-indirect taxation, and cross-border FEMA frameworks to deliver holistic solutions tailored to startups, enterprises, and listed entities.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-slate-900 text-lg">Rigorous Compliance</h3>
              <p className="text-slate-600 text-sm mt-1">Proactive identification of regulatory shifts under the Companies Act, SEBI, and tax authorities.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-slate-900 text-lg">Absolute Confidentiality</h3>
              <p className="text-slate-600 text-sm mt-1">Strict data privacy protocols and professional ethics protecting sensitive corporate data.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-slate-900 text-lg">Strategic Execution</h3>
              <p className="text-slate-600 text-sm mt-1">End-to-end liaisoning and coordination with regulatory bodies including MCA, NCLT, and RBI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-8 bg-white border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Precision & Accuracy</h3>
              <p className="text-slate-600 text-sm">Meticulous drafting, review, and filing to eliminate procedural defaults and legal vulnerabilities.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Agility & Timeliness</h3>
              <p className="text-slate-600 text-sm">Strict adherence to statutory timelines and responsive communication for time-sensitive corporate events.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Client-Centric Partnership</h3>
              <p className="text-slate-600 text-sm">Building long-term professional relationships rooted in trust, transparency, and deep industry insight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 text-center bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Corporate Compliance?</h2>
          <p className="text-slate-400 mb-8">Consult with our professionals for expert guidance on your legal, tax, and secretarial requirements.</p>
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