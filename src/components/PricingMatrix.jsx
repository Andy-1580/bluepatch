import React, { useState } from 'react';

const PLANS = {
  fiber: [
    { name: 'Haraka Fiber',  speed: 'Up to 10 Mbps', price: '1,500',  features: ['Unlimited Data', 'No Hidden Fees', 'No Contracts', 'Basic Browsing'],        recommended: false },
    { name: 'Pamoja Fiber',  speed: 'Up to 15 Mbps', price: '2,000',  features: ['Unlimited Data', 'No Hidden Fees', 'No Contracts', 'Smooth Streaming'],       recommended: false },
    { name: 'Kasi Fiber',    speed: 'Up to 20 Mbps', price: '2,500',  features: ['Unlimited Data', 'No Hidden Fees', 'No Contracts', 'Great for Families'],     recommended: true  },
    { name: 'Moto Fiber',    speed: 'Up to 25 Mbps', price: '3,000',  features: ['Unlimited Data', 'No Hidden Fees', 'No Contracts', 'Heavy Streaming'],        recommended: false },
    { name: 'Kilele Fiber',  speed: 'Up to 30 Mbps', price: '3,500',  features: ['Unlimited Data', 'No Hidden Fees', 'No Contracts', 'Ultimate Performance'],  recommended: false },
  ],
  satellite: [
    { name: 'Mwanzo Satellite',  speed: '50GB Data Limit',  price: '1,800',  features: ['Starlink Connectivity', 'Best for Backup',         'High Speed',             'Managed Support'],        recommended: false },
    { name: 'Nyumbani Satellite', speed: 'Unlimited',        price: '7,000',  features: ['Starlink Connectivity', 'Standard Router',         'Best for Households',    'Self Installation Option'], recommended: true  },
    { name: 'Biashara Satellite', speed: '40GB Priority',    price: '8,500',  features: ['Starlink Connectivity', 'Priority Support',        'High Performance Router','Static IP Available'],    recommended: false },
    { name: 'Ushindi Satellite',  speed: '1TB Priority',     price: '14,072', features: ['Starlink Connectivity', 'Priority Support',        'Uninterrupted Ops',      'Enterprise Grade'],       recommended: false },
  ],
};

const TABS = [
  { key: 'fiber',     label: 'Fiber Internet'     },
  { key: 'satellite', label: 'Satellite Internet'  },
];

/* Checkmark icon used inside plan cards */
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PlanCard = ({ plan }) => (
  <div
    className={`relative flex flex-col rounded-2xl border p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 bg-[#111827] ${
      plan.recommended
        ? 'border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] md:-translate-y-4'
        : 'border-slate-800'
    }`}
  >
    {plan.recommended && (
      <span className="absolute top-0 right-4 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
        Most Popular
      </span>
    )}

    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1">{plan.name}</h3>
    <p className="text-blue-400 font-medium mb-6 text-sm sm:text-base">{plan.speed}</p>

    <div className="mb-8">
      <span className="text-xs sm:text-sm text-slate-400">KES </span>
      <span className="text-3xl sm:text-4xl font-bold text-white mx-1">{plan.price}</span>
      <span className="text-xs sm:text-sm text-slate-400">/ Month</span>
    </div>

    <ul className="space-y-3 mb-8 flex-1">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-center text-sm sm:text-base text-slate-300">
          <CheckIcon />
          {feature}
        </li>
      ))}
    </ul>

    <button
      className={`w-full py-3 rounded-xl font-semibold transition-colors mt-auto ${
        plan.recommended
          ? 'bg-blue-600 hover:bg-blue-500 text-white'
          : 'bg-slate-800 hover:bg-slate-700 text-white'
      }`}
    >
      Get Connected
    </button>
  </div>
);

const PricingMatrix = () => {
  const [activeTab, setActiveTab] = useState('fiber');

  return (
    <section id="services" className="py-20 sm:py-24 relative">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Connectivity Plans Designed for You</h2>
          <p className="section-subtext">
            From high-speed fiber browsing to dedicated satellite enterprise solutions, our
            networks deliver unmatched reliability.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="bg-[#111827] p-1 rounded-xl border border-slate-800 inline-flex w-full max-w-xs sm:max-w-none sm:w-auto">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 sm:flex-none px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {PLANS[activeTab].map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingMatrix;
