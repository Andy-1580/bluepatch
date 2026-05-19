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
        <LeadForm />
      </main>
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} BluePatch Ventures Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
