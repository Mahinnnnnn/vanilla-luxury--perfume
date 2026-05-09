import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import BestSellers from './components/BestSellers';
import LuxuryBanner from './components/LuxuryBanner';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ProductDetailsModal from './components/ProductDetailsModal';

const PRODUCTS = [
  {
    id: 1,
    name: "Midnight Oud",
    price: 245,
    notes: "Agarwood, Black Rose, Saffron, Amber",
    image: "https://images.unsplash.com/photo-1590156546946-cb554ea52d15?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "Golden Velvet",
    price: 195,
    notes: "Vanilla Absolute, Tonka Bean, Sandalwood",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Noir Elixir",
    price: 280,
    notes: "Patchouli, Leather, Cardamom, Vetiver",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    name: "Imperial Iris",
    price: 310,
    notes: "Tuscan Iris, Bergamot, White Musk",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    name: "Luminous Rose",
    price: 215,
    notes: "Damask Rose, Peony, White Woods",
    image: "https://images.unsplash.com/photo-1595425970377-c9703c5bc0ce?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    name: "Sovereign Spice",
    price: 260,
    notes: "Cinnamon, Clove, Tobacco, Cedar",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 7,
    name: "Amber Resonance",
    price: 295,
    notes: "Rich Amber, Labdanum, Benzoin",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.notes.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cart.length} onSearch={setSearchQuery} />
      
      <main>
        {searchQuery ? (
          <section className="py-32 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-light tracking-widest mb-12">
                SEARCH RESULTS FOR "<span className="text-gold">{searchQuery}</span>"
              </h2>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="p-4 glass-card rounded-xl">
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4 opacity-80" />
                      <h3 className="text-lg font-light">{product.name}</h3>
                      <p className="text-gold text-sm">${product.price}</p>
                      <button 
                        onClick={() => handleOpenModal(product)}
                        className="mt-4 w-full py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-slate-950 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 font-light text-xl">No products found matching your search.</p>
              )}
            </div>
          </section>
        ) : (
          <>
            <Hero />
            <FeaturedProducts 
              products={PRODUCTS} 
              onOpenModal={handleOpenModal} 
              onAddToCart={handleAddToCart} 
            />
            <LuxuryBanner />
            <BestSellers 
              products={PRODUCTS} 
              onOpenModal={handleOpenModal} 
              onAddToCart={handleAddToCart} 
            />
            <Reviews />
          </>
        )}
      </main>

      <Footer />

      <ProductDetailsModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
