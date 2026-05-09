import React from 'react';

const LuxuryBanner = () => {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury ingredients" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto glass p-12 rounded-2xl border-gold/30">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-6 text-gold">
          CRAFTED WITH EXCELLENCE
        </h2>
        <p className="text-lg text-slate-300 font-light tracking-wide mb-8">
          Only the rarest ingredients are selected to create our signature scents. Experience the pinnacle of olfactory art.
        </p>
        <button className="px-8 py-3 border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-slate-950 transition-colors duration-300 cursor-pointer">
          Discover The Process
        </button>
      </div>
    </section>
  );
};

export default LuxuryBanner;
