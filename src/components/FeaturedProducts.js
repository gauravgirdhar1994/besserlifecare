import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "B-Health Herbal Body Massage Cream",
      category: "Body Care",
      price: "₹299",
      originalPrice: "₹399",
      rating: 4.8,
      reviews: 1247,
      image: "/bhealth-cream.png",
      benefits: ["Natural Ingredients", "Deep Moisturizing", "Anti-inflammatory"],
      colors: ["Pink", "Green", "Blue"],
      discount: "25% OFF"
    },
    {
      id: 2,
      name: "Herbal Face Serum",
      category: "Skincare",
      price: "₹199",
      originalPrice: "₹299",
      rating: 4.9,
      reviews: 892,
      image: "/bhealth-cream.png",
      benefits: ["Anti-aging", "Brightening", "Hydrating"],
      colors: ["Pink", "Green", "Blue"],
      discount: "33% OFF"
    },
    {
      id: 3,
      name: "Natural Hair Oil",
      category: "Hair Care",
      price: "₹149",
      originalPrice: "₹249",
      rating: 4.7,
      reviews: 567,
      image: "/bhealth-cream.png",
      benefits: ["Hair Growth", "Scalp Health", "Shine"],
      colors: ["Pink", "Green", "Blue"],
      discount: "40% OFF"
    },
    {
      id: 4,
      name: "Wellness Tea Blend",
      category: "Beverages",
      price: "₹99",
      originalPrice: "₹149",
      rating: 4.6,
      reviews: 423,
      image: "/bhealth-cream.png",
      benefits: ["Immunity Boost", "Digestive Health", "Relaxation"],
      colors: ["Pink", "Green", "Blue"],
      discount: "34% OFF"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <section id="products" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-slate-50 to-sky-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-sky-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-blue-900 mb-4 md:mb-6">
            Featured Products
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our most popular natural wellness products, carefully crafted to enhance your daily routine 
            and support your journey to better health.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.discount}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative mb-4 md:mb-6">
                                 <div className="aspect-square bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Quick View Overlay */}
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                                         <Link
                       to={`/product/${product.id}`}
                       className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors touch-manipulation"
                     >
                       View Details
                     </Link>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3 md:space-y-4">
                {/* Category */}
                <div className="flex items-center justify-between">
                                     <span className="text-xs md:text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                     {product.category}
                   </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-500">({product.reviews})</span>
                  </div>
                </div>

                {/* Product Name */}
                                 <Link 
                   to={`/product/${product.id}`}
                   className="block text-base md:text-lg font-display font-semibold text-blue-800 leading-tight line-clamp-2 hover:text-blue-600 transition-colors"
                 >
                   {product.name}
                 </Link>

                {/* Benefits Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {product.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>


                {/* Price */}
                <div className="flex items-center space-x-2">
                                     <span className="text-lg md:text-xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                                     <button 
                     onClick={() => handleAddToCart(product)}
                     className="flex-1 bg-blue-500 text-white py-2 md:py-3 px-3 md:px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm touch-manipulation"
                   >
                     Add to Cart
                   </button>
                                     <Link
                     to={`/product/${product.id}`}
                     className="w-10 h-10 md:w-12 md:h-12 bg-white border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center touch-manipulation"
                   >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
                     <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-blue-100 max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-display font-bold text-blue-800 mb-4 md:mb-6">
               Ready to Transform Your Wellness?
             </h3>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of satisfied customers who have already discovered the power of natural wellness products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                             <Link
                 to="/#products"
                 className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-sky-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 touch-manipulation"
               >
                 Shop All Products
               </Link>
               <Link
                 to="/about"
                 className="w-full sm:w-auto bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 touch-manipulation"
               >
                 Learn More
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 