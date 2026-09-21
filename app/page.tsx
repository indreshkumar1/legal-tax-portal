export default function Home() {
  const coreServices = [
    {
      title: "Taxation Services",
      description: "Expert income tax filing, GST compliance, and strategic tax planning for businesses and individuals.",
      icon: "📊"
    },
    {
      title: "Secretarial Services",
      description: "Seamless company incorporation, ROC filings, board meeting documentation, and annual compliances.",
      icon: "🏢"
    },
    {
      title: "Legal Advisory",
      description: "Comprehensive contract drafting, compliance reviews, and corporate legal consultation.",
      icon: "⚖️"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="font-bold text-xl text-slate-900">
          YourFirmName <span className="text-blue-600">Advisors</span>
        </div>
        <div className="space-x-6 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About Us</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book Consultation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-8 text-center bg-gradient-to-b from-white to-slate-100 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Reliable Legal, Secretarial, & Taxation Solutions
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Empowering your business with precise compliance, strategic tax planning, and trusted legal guidance.
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Practice Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section id="contact" className="py-20 px-8 bg-white border-t border-slate-200">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Schedule a Consultation</h2>
            <p className="text-slate-600">Get expert advice on your tax filings, corporate secretarial work, or legal needs.</p>
          </div>

          <form className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name / Company Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                <option>Taxation & GST Compliance</option>
                <option>Company Secretarial / ROC Filing</option>
                <option>Legal Advisory & Contracts</option>
                <option>Other Services</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message / Details</label>
              <textarea 
                rows="4" 
                placeholder="Briefly describe what assistance you need..." 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} YourFirmName Advisors. All rights reserved. Professional Confidentiality Guaranteed.</p>
      </footer>
    </main>
  );
}