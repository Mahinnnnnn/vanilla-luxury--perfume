import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold tracking-widest text-gold">AURA</span>
            <span className="text-sm tracking-widest uppercase text-slate-300">Parfums</span>
          </div>
          <p className="text-slate-400 font-light max-w-sm mb-6">
            Redefining luxury through the art of fine perfumery. Crafted with the world's most precious ingredients.
          </p>
        </div>
        
        <div>
          <h4 className="text-gold tracking-widest uppercase text-sm mb-6">Explore</h4>
          <ul className="space-y-3 font-light text-slate-400">
            <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Collections</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Boutiques</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-gold tracking-widest uppercase text-sm mb-6">Support</h4>
          <ul className="space-y-3 font-light text-slate-400">
            <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-500 font-light text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} AURA Parfums. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="text-slate-400 hover:text-gold transition-colors">Facebook</a>
          <a href="#" className="text-slate-400 hover:text-gold transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
