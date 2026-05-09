import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products, onOpenModal, onAddToCart }) => {
  return (
    <section id="featured" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-widest mb-4">SIGNATURE <span className="text-gold">COLLECTION</span></h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.slice(0, 3).map(product => (
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

export default FeaturedProducts;
