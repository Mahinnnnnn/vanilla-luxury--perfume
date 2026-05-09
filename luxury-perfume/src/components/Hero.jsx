import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Perfume" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-6 drop-shadow-lg">
          THE ESSENCE OF <span className="text-gold font-normal">LUXURY</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-light tracking-wide mb-10 max-w-2xl mx-auto drop-shadow-md">
          Discover our exclusive collection of handcrafted fragrances, designed to leave an unforgettable impression.
        </p>
        <button className="px-8 py-3 bg-gold text-slate-950 uppercase tracking-widest text-sm font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_0_15px_rgba(214,158,46,0.3)]">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
