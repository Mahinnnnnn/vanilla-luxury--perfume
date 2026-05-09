import React from 'react';

const ProductDetailsModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl shadow-2xl flex flex-col md:flex-row">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-gold bg-slate-900/50 rounded-full transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-2">{product.name}</h2>
          <p className="text-2xl text-gold mb-8">${product.price}</p>
          
          <div className="mb-8">
            <h4 className="text-gold uppercase tracking-widest text-sm mb-3">Fragrance Notes</h4>
            <p className="text-slate-300 font-light leading-relaxed">
              {product.notes}
            </p>
          </div>
          
          <div className="mb-8">
            <h4 className="text-gold uppercase tracking-widest text-sm mb-3">Description</h4>
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              A masterfully crafted blend designed for the discerning individual. 
              This fragrance evolves on the skin, revealing complex layers over time.
              Packaged in our signature heavy glass flacon with a magnetic gold cap.
            </p>
          </div>
          
          <button 
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full py-4 bg-gold text-slate-950 uppercase tracking-widest text-sm font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-[0_0_15px_rgba(214,158,46,0.3)] cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
