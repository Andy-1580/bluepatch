import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Kenya's Premium ISP
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 glow-text">
              Connecting Kenya Through Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Satellite & Wireless</span> Internet Infrastructure
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Experience the future of connectivity with our cutting-edge Starlink deployments, WiMAX, and dedicated enterprise solutions. Fast, reliable, and available across all 47 counties.
            </p>
            
            {/* Quick Lead Bar */}
            <form className="bg-[#111827]/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/50 flex flex-col sm:flex-row gap-2 max-w-xl shadow-2xl">
              <input type="text" placeholder="Location (e.g. Nairobi)" className="bg-transparent border-none focus:ring-0 text-white placeholder-slate-400 px-4 py-3 flex-1" />
              <input type="tel" placeholder="Phone Number" className="bg-transparent border-none focus:ring-0 text-white placeholder-slate-400 px-4 py-3 flex-1 border-t sm:border-t-0 sm:border-l border-slate-700/50" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition-colors shrink-0">
                Check Coverage
              </button>
            </form>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10"></div>
            <img src="https://images.unsplash.com/photo-1620286828945-8f5539ab4ea0?auto=format&fit=crop&q=80" alt="Satellite Dish" className="rounded-2xl border border-slate-800 shadow-[0_0_50px_rgba(37,99,235,0.15)] relative z-0 object-cover w-full h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
