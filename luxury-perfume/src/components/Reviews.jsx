import React from 'react';

const Reviews = () => {
  const reviews = [
    { id: 1, name: "Eleanor V.", text: "Absolutely mesmerizing. The scent lingers all day and I constantly get compliments.", rating: 5 },
    { id: 2, name: "James M.", text: "A truly premium experience from the packaging to the fragrance itself. Highly recommended.", rating: 5 },
    { id: 3, name: "Sophia L.", text: "The Midnight Oud is my new signature scent. It's sophisticated, dark, and perfectly balanced.", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-widest mb-4">CLIENT <span className="text-gold">TESTIMONIALS</span></h2>
          <div className="w-16 h-px bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="glass-card p-8 rounded-xl text-center flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 font-light italic mb-6">"{review.text}"</p>
              <span className="text-gold tracking-widest uppercase text-sm font-medium">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
