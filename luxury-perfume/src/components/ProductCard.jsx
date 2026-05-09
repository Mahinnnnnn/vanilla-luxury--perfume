import React from 'react';

const ProductCard = ({ product, onOpenModal, onAddToCart }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
      <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => onOpenModal(product)}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-light tracking-wider">{product.name}</h3>
          <span className="text-gold font-medium">${product.price}</span>
        </div>
        <p className="text-sm text-slate-400 font-light mb-6 line-clamp-2">{product.notes}</p>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-3 border border-gold text-gold uppercase tracking-widest text-xs hover:bg-gold hover:text-slate-950 transition-colors duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
