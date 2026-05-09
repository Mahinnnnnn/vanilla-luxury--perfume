// Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "Midnight Oud",
    price: 245,
    notes: "Agarwood, Black Rose, Saffron, Amber",
    image: "images/product1.jpg",
  },
  {
    id: 2,
    name: "Golden Velvet",
    price: 195,
    notes: "Vanilla Absolute, Tonka Bean, Sandalwood",
    image: "images/product2.jpg",
  },
  {
    id: 3,
    name: "Noir Elixir",
    price: 280,
    notes: "Patchouli, Leather, Cardamom, Vetiver",
    image: "images/product3.jpg",
  },
  {
    id: 4,
    name: "Imperial Iris",
    price: 310,
    notes: "Tuscan Iris, Bergamot, White Musk",
    image: "images/product4.jpg",
  },
  {
    id: 5,
    name: "Luminous Rose",
    price: 215,
    notes: "Damask Rose, Peony, White Woods",
    image: "images/product5.jpg",
  },
  {
    id: 6,
    name: "Sovereign Spice",
    price: 260,
    notes: "Cinnamon, Clove, Tobacco, Cedar",
    image: "images/product6.jpg",
  },
  {
    id: 7,
    name: "Amber Resonance",
    price: 295,
    notes: "Rich Amber, Labdanum, Benzoin",
    image: "images/product7.jpg",
  }
];

const REVIEWS = [
  { id: 1, name: "Eleanor V.", text: "Absolutely mesmerizing. The scent lingers all day and I constantly get compliments.", rating: 5 },
  { id: 2, name: "James M.", text: "A truly premium experience from the packaging to the fragrance itself. Highly recommended.", rating: 5 },
  { id: 3, name: "Sophia L.", text: "The Midnight Oud is my new signature scent. It's sophisticated, dark, and perfectly balanced.", rating: 5 },
];

// State
let cart = [];

// DOM Elements
const featuredGrid = document.getElementById('featuredGrid');
const bestSellersGrid = document.getElementById('bestSellersGrid');
const reviewsGrid = document.getElementById('reviewsGrid');
const searchInput = document.getElementById('searchInput');
const productGridContainer = document.getElementById('productGridContainer');
const heroSection = document.getElementById('hero');

const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalNotes = document.getElementById('modalNotes');
const modalAddToCart = document.getElementById('modalAddToCart');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  renderProducts();
  renderReviews();
  setupSearch();
});

// Render Functions
function createProductCard(product) {
  return `
    <div class="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
      <div class="relative h-80 overflow-hidden cursor-pointer" onclick='openModal(${JSON.stringify(product).replace(/'/g, "\\'")})'>
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div class="p-6 relative">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-light tracking-wider">${product.name}</h3>
          <span class="text-[#d69e2e] font-medium">$${product.price}</span>
        </div>
        <p class="text-sm text-slate-400 font-light mb-6 line-clamp-2">${product.notes}</p>
        
        <button 
          onclick='addToCart(${JSON.stringify(product).replace(/'/g, "\\'")})'
          class="w-full py-3 border border-[#d69e2e] text-[#d69e2e] uppercase tracking-widest text-xs hover:bg-[#d69e2e] hover:text-slate-950 transition-colors duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

function renderProducts() {
  if (featuredGrid) {
    featuredGrid.innerHTML = PRODUCTS.slice(0, 3).map(createProductCard).join('');
  }
  if (bestSellersGrid) {
    bestSellersGrid.innerHTML = PRODUCTS.slice(3, 7).map(createProductCard).join('');
  }
}

function renderReviews() {
  if (reviewsGrid) {
    reviewsGrid.innerHTML = REVIEWS.map(review => {
      const stars = Array(review.rating).fill(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
      `).join('');
      
      return `
        <div class="glass-card p-8 rounded-xl text-center flex flex-col items-center">
          <div class="flex gap-1 mb-6 text-[#d69e2e]">
            ${stars}
          </div>
          <p class="text-slate-300 font-light italic mb-6">"${review.text}"</p>
          <span class="text-[#d69e2e] tracking-widest uppercase text-sm font-medium">${review.name}</span>
        </div>
      `;
    }).join('');
  }
}

// Search Logic
function setupSearch() {
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (query === '') {
      // Show original layout
      heroSection.style.display = 'flex';
      document.querySelectorAll('.section-group').forEach(el => el.style.display = 'block');
      
      // Re-render original grids
      productGridContainer.innerHTML = `
        <section id="featured" class="py-24 px-6 relative section-group">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16 section-header">
              <h2 class="text-3xl font-light tracking-widest mb-4">SIGNATURE <span class="text-[#d69e2e]">COLLECTION</span></h2>
              <div class="w-16 h-px bg-[#d69e2e] mx-auto"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" id="featuredGrid">
              ${PRODUCTS.slice(0, 3).map(createProductCard).join('')}
            </div>
          </div>
        </section>
        <section class="relative py-32 overflow-hidden flex items-center justify-center section-group">
          <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=2000" alt="Luxury ingredients" class="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
            <div class="absolute inset-0 bg-slate-950/70"></div>
          </div>
          <div class="relative z-10 text-center px-4 max-w-3xl mx-auto glass p-12 rounded-2xl border-[#d69e2e]/30">
            <h2 class="text-3xl md:text-5xl font-light tracking-widest mb-6 text-[#d69e2e]">CRAFTED WITH EXCELLENCE</h2>
            <button class="px-8 py-3 border border-[#d69e2e] text-[#d69e2e] uppercase tracking-widest text-sm hover:bg-[#d69e2e] hover:text-slate-950 transition-colors duration-300 cursor-pointer">Discover The Process</button>
          </div>
        </section>
        <section id="bestsellers" class="py-24 px-6 relative bg-slate-900/50 section-group">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16 section-header">
              <h2 class="text-3xl font-light tracking-widest mb-4">BEST <span class="text-[#d69e2e]">SELLERS</span></h2>
              <div class="w-16 h-px bg-[#d69e2e] mx-auto"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="bestSellersGrid">
              ${PRODUCTS.slice(3, 7).map(createProductCard).join('')}
            </div>
          </div>
        </section>
      `;
    } else {
      // Filter products
      const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.notes.toLowerCase().includes(query)
      );
      
      heroSection.style.display = 'none';
      document.querySelectorAll('.section-group').forEach(el => el.style.display = 'none');
      
      const resultsHtml = filtered.length > 0 
        ? `<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">${filtered.map(createProductCard).join('')}</div>`
        : `<p class="text-slate-400 font-light text-xl mt-12 text-center">No products found matching your search.</p>`;
        
      productGridContainer.innerHTML = `
        <section class="py-32 px-6 min-h-[60vh]">
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-light tracking-widest mb-4">
              SEARCH RESULTS FOR "<span class="text-[#d69e2e]">${e.target.value}</span>"
            </h2>
            ${resultsHtml}
          </div>
        </section>
      `;
    }
  });
}

// Cart Logic & SweetAlert2
function addToCart(product) {
  cart.push(product);
  
  // Update badge
  const badge = document.getElementById('cartCount');
  badge.textContent = cart.length;
  badge.classList.remove('opacity-0');
  
  // Animate badge
  badge.classList.add('scale-150');
  setTimeout(() => badge.classList.remove('scale-150'), 200);

  // Close modal if open
  closeModal();

  // "Sweet Dream" Aesthetic Notification using SweetAlert2
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    title: 'Added to Cart',
    html: `<strong>${product.name}</strong> has been delicately placed in your cart.`,
    icon: 'success',
    buttonsStyling: false // We use custom styles in style.css
  });
}

function viewCart() {
  if (cart.length === 0) {
    Swal.fire({
      title: 'Your Cart is Empty',
      text: 'Discover our exclusive collection to begin.',
      icon: 'info',
      confirmButtonText: 'Explore',
      buttonsStyling: false
    });
    return;
  }
  
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  Swal.fire({
    title: 'Your Cart',
    html: `
      <div style="text-align: left; margin-bottom: 1rem;">
        ${cart.map(item => `<div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;"><span style="color:#f8fafc">${item.name}</span> <span style="color:#d69e2e">$${item.price}</span></div>`).join('')}
      </div>
      <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(214,158,46,0.3); padding-top: 1rem; font-weight: bold; font-size: 1.25rem;">
        <span style="color:#f8fafc">Total:</span> <span style="color:#d69e2e">$${total}</span>
      </div>
    `,
    confirmButtonText: 'Proceed to Checkout',
    buttonsStyling: false
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Checkout',
        text: 'This is a demo. Checkout functionality is not implemented.',
        icon: 'success',
        confirmButtonText: 'Close',
        buttonsStyling: false
      });
    }
  });
}

// Modal Logic
function openModal(product) {
  modalImage.src = product.image;
  modalName.textContent = product.name;
  modalPrice.textContent = `$${product.price}`;
  modalNotes.textContent = product.notes;
  
  // Re-attach listener correctly to avoid stacking
  modalAddToCart.onclick = () => addToCart(product);
  
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('scale-95');
  modalContent.classList.add('scale-100');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  document.body.style.overflow = '';
}
