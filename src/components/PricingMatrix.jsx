import React, { useState } from 'react';

const plans = {
  home: [
    { name: 'Starlink Standard', speed: 'Up to 100 Mbps', price: '6,500', features: ['Unlimited Data', 'Standard Router', 'Best for Households', 'Self Installation Option'], recommended: true },
    { name: 'Mawingu Max', speed: 'Up to 30 Mbps', price: '3,000', features: ['Unlimited Data', 'Free Installation', 'Best for 4 Devices', '24/7 Support'], recommended: false },
  ],
  business: [
    { name: 'Starlink Business', speed: 'Up to 220 Mbps', price: '14,000', features: ['Priority Support', 'High Performance Router', 'Static IP Available', 'Uninterrupted Operations'], recommended: true },
    { name: 'Enterprise Fixed Site', speed: 'Custom', price: 'Custom', features: ['SLA Guaranteed', 'Managed Firewall', 'Dedicated Bandwidth', 'Bespoke Solution'], recommended: false },
  ]
};

const PricingMatrix = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Connectivity Plans Designed for You</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">From high-speed home browsing to dedicated enterprise solutions, our Starlink and wireless networks deliver unmatched reliability.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-[#111827] p-1 rounded-xl border border-slate-800 inline-flex">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${activeTab === 'home' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'text-slate-400 hover:text-white'}`}
            >
              Home Internet
            </button>
            <button 
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${activeTab === 'business' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'text-slate-400 hover:text-white'}`}
            >
              Business Solutions
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans[activeTab].map((plan, idx) => (
            <div key={idx} className={`relative bg-[#111827] rounded-2xl border ${plan.recommended ? 'border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'border-slate-800'} p-8 hover:-translate-y-1 transition-transform duration-300`}>
              {plan.recommended && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">Most Popular</span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold font-heading text-white mb-2">{plan.name}</h3>
              <p className="text-blue-400 font-medium mb-6">{plan.speed}</p>
              
              <div className="mb-8">
                <span className="text-sm text-slate-400">KES</span>
                <span className="text-4xl font-bold text-white mx-2">{plan.price}</span>
                <span className="text-sm text-slate-400">/ Month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-medium transition-colors ${plan.recommended ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                Get Connected
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingMatrix;
