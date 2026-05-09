import React from 'react';

const Navbar = ({ cartCount, onSearch }) => {
  return (
    <nav className="fixed w-full z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-widest text-gold">AURA</span>
          <span className="text-sm tracking-widest uppercase text-slate-300">Parfums</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">Home</a>
          <a href="#featured" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">Featured</a>
          <a href="#bestsellers" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">Best Sellers</a>
          <a href="#reviews" className="text-sm uppercase tracking-wider hover:text-gold transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search..." 
              onChange={(e) => onSearch(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm focus:outline-none focus:border-gold transition-colors w-48 text-white"
            />
          </div>
          <button className="relative group cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:text-gold transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
