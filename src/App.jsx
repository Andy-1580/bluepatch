import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import PricingMatrix from './components/PricingMatrix';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <StatsGrid />

        <PricingMatrix />
        <section className="py-12 bg-[#0a0f1c] relative z-20">
          <div className="container mx-auto px-6 flex justify-center">
            <form className="bg-[#111827]/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/50 flex flex-col sm:flex-row gap-2 w-full max-w-4xl shadow-2xl">
              <input type="text" placeholder="Location (e.g. Nairobi)" className="bg-transparent border-none focus:ring-0 text-white placeholder-slate-400 px-4 py-3 flex-1" />
              <input type="tel" placeholder="Phone Number" className="bg-transparent border-none focus:ring-0 text-white placeholder-slate-400 px-4 py-3 flex-1 border-t sm:border-t-0 sm:border-l border-slate-700/50" />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-xl transition-colors shrink-0">
                Check Coverage
              </button>
            </form>
          </div>
        </section>
        <LeadForm />
      </main>
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} BluePatch Ventures Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
