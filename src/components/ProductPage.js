import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from './Header';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, getCartItemCount } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(productId) || 1,
    name: "B-Health Herbal Body Massage Cream",
    category: "Body Care",
    price: "₹299",
    originalPrice: "₹399",
    rating: 4.8,
    reviews: 1247,
    image: "/bhealth-cream.png",
    images: [
      "/bhealth-cream.png",
      "/bhealth-cream.png",
      "/bhealth-cream.png",
      "/bhealth-cream.png"
    ],
    benefits: [
      "Natural Ingredients",
      "Deep Moisturizing", 
      "Anti-inflammatory",
      "Skin Firming",
      "Improved Elasticity",
      "Natural Enhancement"
    ],
    discount: "25% OFF",
    description: "Transform your wellness journey with our premium B-Health Herbal Body Massage Cream. This carefully crafted formula combines the power of natural herbs with modern science to provide deep nourishment and visible results. Perfect for daily use, it helps improve skin texture, firmness, and overall appearance while promoting natural wellness.",
    ingredients: [
      "Aloe Vera Extract",
      "Almond Oil",
      "Fennel Seed Oil",
      "Fenugreek Extract",
      "Jojoba Oil",
      "Vitamin E",
      "Natural Glycerin",
      "Essential Oils Blend"
    ],
    howToUse: [
      "Apply a small amount to clean, dry skin",
      "Massage gently in circular motions",
      "Focus on areas that need attention",
      "Use 2-3 times daily for best results",
      "Allow to absorb completely before dressing"
    ],
    specifications: {
      weight: "100g",
      dimensions: "6cm x 6cm x 3cm",
      shelfLife: "24 months",
      skinType: "All skin types",
      fragrance: "Natural herbal",
      packaging: "Airless pump bottle"
    }
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    const productWithOptions = {
      ...product,
      quantity
    };
    
    setTimeout(() => {
      addToCart(productWithOptions);
      setIsAddingToCart(false);
      // You could add a toast notification here
    }, 1000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => {
      navigate('/checkout');
    }, 1200);
  };

  const formatPrice = (price) => {
    return `₹${price}`;
  };

  const calculateDiscount = () => {
    const original = parseFloat(product.originalPrice.replace('₹', ''));
    const current = parseFloat(product.price.replace('₹', ''));
    return Math.round(((original - current) / original) * 100);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [productId]);

  return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-emerald-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
            <button onClick={() => navigate('/')} className="hover:text-green-600 transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate('/#products')} className="hover:text-green-600 transition-colors">
              Products
            </button>
            <span>/</span>
            <span className="text-green-600">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-green-100 cursor-pointer hover:shadow-lg transition-shadow">
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Basic Info */}
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-500">({product.reviews} reviews)</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-green-600">{product.price}</span>
                  <span className="text-xl text-slate-400 line-through">{product.originalPrice}</span>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full">
                    Save {calculateDiscount()}%
                  </span>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-white border border-green-200 rounded-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H12"/>
                    </svg>
                  </button>
                  
                  <span className="w-16 text-center text-lg font-medium text-slate-700">
                    {quantity}
                  </span>
                  
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-white border border-green-200 rounded-lg flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="w-full bg-green-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAddingToCart ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Adding to Cart...</span>
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                
                <button
                  onClick={handleBuyNow}
                  disabled={isAddingToCart}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Buy Now
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">30-Day Returns</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">Free Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-20">
            <div className="border-b border-green-200 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'ingredients', label: 'Ingredients' },
                  { id: 'how-to-use', label: 'How to Use' },
                  { id: 'specifications', label: 'Specifications' },
                  { id: 'reviews', label: 'Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                    Product Description
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Ingredients Tab */}
              {activeTab === 'ingredients' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                    Natural Ingredients
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our formula contains only the finest natural ingredients, carefully selected for their proven benefits and safety.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="bg-green-50 rounded-xl p-4 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-2">{ingredient}</h4>
                        <p className="text-sm text-slate-600">
                          Natural extract known for its beneficial properties
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How to Use Tab */}
              {activeTab === 'how-to-use' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                    How to Use
                  </h3>
                  <div className="space-y-4">
                    {product.howToUse.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-slate-600 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Tab */}
              {activeTab === 'specifications' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                    Product Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="bg-green-50 rounded-xl p-4 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-2 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-slate-600">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                    Customer Reviews
                  </h3>
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">⭐</div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      {product.rating}/5 Rating
                    </h4>
                    <p className="text-slate-600 mb-4">
                      Based on {product.reviews} customer reviews
                    </p>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                      Write a Review
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20">
                         <h2 className="text-3xl font-display font-bold text-green-900 mb-8 text-center">
               You Might Also Like
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[1, 2, 3].map((id) => (
                 <div key={id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                   <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mb-4">
                     <img
                       src="/bhealth-cream.png"
                       alt="Related Product"
                       className="w-full h-32 object-contain"
                     />
                   </div>
                   <h3 className="font-display font-semibold text-green-800 mb-2">
                     Related Product {id}
                   </h3>
                   <p className="text-slate-600 text-sm mb-3">
                     Discover more wellness products
                   </p>
                   <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                     View Product
                   </button>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 