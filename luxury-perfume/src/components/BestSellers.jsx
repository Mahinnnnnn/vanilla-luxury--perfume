import React from 'react';
import ProductCard from './ProductCard';

const BestSellers = ({ products, onOpenModal, onAddToCart }) => {
  return (
    <section id="bestsellers" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-widest mb-4">BEST <span className="text-gold">SELLERS</span></h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(3, 7).map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenModal={onOpenModal} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
