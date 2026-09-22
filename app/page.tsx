<form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm"
          >
            {/* Replace YOUR_ACCESS_KEY_HERE with the key you received in your email */}
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
              Submit Inquiry
            </button>
          </form>