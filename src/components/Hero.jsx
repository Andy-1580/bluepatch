import React from 'react';
import starlinkDish from '../assets/starlink-dish.jpg';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Kenya's Premium ISP
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 glow-text">
              Connecting Kenya Through Advanced{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Satellite &amp; Wireless
              </span>{' '}
              Internet Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Experience the future of connectivity with our cutting-edge Starlink deployments,
              WiMAX, and dedicated enterprise solutions. Fast, reliable, and available across
              all 47 counties.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="bp-btn-primary text-center"
              >
                Get Connected
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bp-btn-ghost text-center"
              >
                View Plans
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10 rounded-2xl" />
            <img
              src={starlinkDish}
              alt="BluePatch Starlink satellite dish installation"
              className="rounded-2xl border border-slate-800 shadow-[0_0_50px_rgba(37,99,235,0.15)] object-cover w-full h-64 sm:h-80 lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
