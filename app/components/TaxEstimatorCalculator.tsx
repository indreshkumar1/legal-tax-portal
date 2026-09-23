'use client';

import React, { useState } from 'react';

export default function TaxEstimatorCalculator() {
  const [serviceType, setServiceType] = useState('corporate');
  const [complexity, setComplexity] = useState('standard');
  const [urgency, setUrgency] = useState(false);

  // Simple dynamic calculation logic for demonstration
  const calculateEstimate = () => {
    let base = serviceType === 'corporate' ? 1200 : serviceType === 'tax' ? 800 : 1500;
    if (complexity === 'complex') base *= 1.75;
    if (complexity === 'enterprise') base *= 2.5;
    if (urgency) base += 500;
    return base;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-white max-w-3xl mx-auto my-12">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/50">
          Interactive Tool
        </span>
        <h3 className="text-2xl font-bold mt-3 text-slate-100">Service & Fee Estimator</h3>
        <p className="text-slate-400 text-sm mt-1">Configure your requirements for an immediate baseline estimate.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Select Practice Area</label>
          <select 
            value={serviceType} 
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
          >
            <option value="corporate">Corporate & NCLT Litigation</option>
            <option value="tax">Tax Compliance & Advisory</option>
            <option value="regulatory">Regulatory & Cross-Border Compliance</option>
          </select>
        </div>

        {/* Complexity Tier */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Structure & Complexity</label>
          <select 
            value={complexity} 
            onChange={(e) => setComplexity(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
          >
            <option value="standard">Standard / Small Enterprise</option>
            <option value="complex">Multi-Entity / Complex Audit</option>
            <option value="enterprise">Fortune / Global Enterprise Scale</option>
          </select>
        </div>
      </div>

      {/* Urgency Toggle */}
      <div className="mt-6 flex items-center justify-between bg-slate-800/50 border border-slate-700/60 p-4 rounded-xl">
        <div>
          <span className="block text-sm font-semibold text-slate-200">Expedited / Priority Timeline</span>
          <span className="text-xs text-slate-400">Requires dedicated senior counsel allocation within 24-48 hours.</span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={urgency} 
            onChange={(e) => setUrgency(e.target.checked)} 
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
        </label>
      </div>

      {/* Output & CTA */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 block">Estimated Baseline</span>
          <span className="text-3xl font-extrabold text-cyan-400">${calculateEstimate().toLocaleString()} USD</span>
          <span className="text-xs text-slate-500 block mt-0.5">*Final retainer subject to formal discovery.</span>
        </div>
        <button 
          onClick={() => alert('Consultation request initialized with your configuration settings.')}
          className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-900/30 transition-all duration-200 cursor-pointer"
        >
          Request Formal Proposal
        </button>
      </div>
    </div>
  );
}