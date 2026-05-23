import React from 'react';

const STATS = [
  {
    value: '30,000+',
    label: 'Happy Clients',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    value: '47',
    label: 'Counties Covered',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    value: '100+',
    label: 'Active Projects',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    value: '24/7',
    label: 'Technical Support',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
];

const StatCard = ({ value, label, icon }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center mb-4 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:border-blue-400/50 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]">
      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
      </svg>
    </div>
    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-1">{value}</h3>
    <p className="text-slate-400 text-sm sm:text-base font-medium">{label}</p>
  </div>
);

const StatsGrid = () => (
  <section className="py-16 sm:py-20 border-y border-slate-800/50 bg-[#0d1324]">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsGrid;
