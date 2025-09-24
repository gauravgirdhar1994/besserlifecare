import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from './Header';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Product data array
  const products = [
    {
      id: 1,
      name: "Besser Livomrit",
      category: "Liver Health",
      price: "₹899",
      originalPrice: "₹1299",
      rating: 4.9,
      reviews: 2156,
      image: "/products/livomrit/1.jpg",
      images: [
        "/products/livomrit/1.jpg",
        "/products/livomrit/2.jpg", 
        "/products/livomrit/3.jpg",
        "/products/livomrit/4.jpg",
        "/products/livomrit/6.jpg",
        "/products/livomrit/7s.jpg",
        "/products/livomrit/8.jpg"
      ],
      benefits: ["Liver Detoxification", "Cell Regeneration", "Metabolism Boost", "Natural Defence"],
      discount: "31% OFF",
      description: "Besser Livomrit is formulated with time-tested Ayurvedic herbs, helps in detoxification, promotes liver cell regeneration, improves metabolism, and strengthens natural defence mechanisms. Its holistic action not only protects the liver but also supports vitality and long-term wellbeing.",
      detailedDescription: "Besser Livomrit is a scientifically crafted herbal formulation, processed in the traditional Vasaguluchyadi Kashyam to enhance its potency and bioavailability. This unique process ensures that the synergistic benefits of the herbs are preserved, supporting healthy liver function and overall digestive wellness.",
      howItWorks: [
        "Liver Protection & Detoxification: The Vasaguluchyadi Kashyam base strengthens the liver's natural detox pathways, helping the body flush out toxins, alcohol residues, and harmful metabolites.",
        "Cellular Regeneration: Herbs in Livomrit promote repair and regeneration of liver cells, improving overall liver function.",
        "Metabolic Balance: By improving bile flow and digestion, it supports better fat metabolism and prevents accumulation of harmful substances in the liver.",
        "Anti-inflammatory & Antioxidant Support: The herbal blend reduces oxidative stress, combats free radicals, and protects liver tissues against damage."
      ],
      whyChoose: [
        "Crafted with time-tested Ayurvedic herbal extracts",
        "Processed in Vasaguluchyadi Kashyam for maximum efficacy", 
        "Combines traditional Ayurvedic wisdom with modern wellness needs",
        "Plant based, No-known side-effects & safe for long-term use"
      ],
      keyBenefits: [
        "Promotes healthy liver function and enzyme balance",
        "Enhances digestion and metabolism", 
        "Aids in natural detoxification and toxin clearance",
        "Supports liver cell repair and protection",
        "Strengthens overall vitality and immunity"
      ],
      dosage: "1-2 Capsule twice a day",
      packSize: "60 Veg. Capsules",
      shelfLife: "36 months from date of manufacturing",
      indications: ["Fatty Liver", "Hepatitis", "Jaundice", "Loss of Appetite"],
      ingredients: ["Makoy", "Sharpunkha", "Punarnava", "Yashtimadhu", "Kutki", "Bhringraj", "Bhumyamalaki", "Kalmegh", "Kasani", "Trikatu"],
      specifications: {
        packSize: "60 Veg. Capsules",
        dosage: "1-2 Capsule twice a day",
        shelfLife: "36 months from date of manufacturing",
        indications: "Fatty Liver, Hepatitis, Jaundice, Loss of Appetite",
        processing: "Vasaguluchyadi Kashyam",
        type: "Herbal Supplement"
      }
    },
    {
      id: 2,
      name: "Besser Ovasiddhi",
      category: "PCOD Care",
      price: "₹899",
      originalPrice: "₹1299",
    rating: 4.8,
      reviews: 1834,
      image: "/products/ovasidhi/1.jpg",
    images: [
        "/products/ovasidhi/1.jpg",
        "/products/ovasidhi/2.jpg", 
        "/products/ovasidhi/3.jpg",
        "/products/ovasidhi/4.jpg",
        "/products/ovasidhi/5.jpg",
        "/products/ovasidhi/6.jpg",
        "/products/ovasidhi/7.jpg"
      ],
      benefits: ["Hormonal Balance", "Ovarian Health", "Cycle Regulation", "Fibroid Management"],
      discount: "31% OFF",
      description: "Besser Ovasiddhi is a thoughtfully developed Ayurvedic formulation designed to address the root concerns of PCOD (Polycystic Ovarian Disorder). It is processed in the time-honoured Dashmool Kwath, a powerful decoction of ten medicinal roots known for their ability to restore hormonal balance, reduce inflammation, and improve reproductive health.",
      detailedDescription: "The Dashmool base enhances absorption and ensures that every herb in Besser Ovasiddhi works in synergy for maximum benefit. Its unique blend helps regulate menstrual cycles, supports healthy ovarian function, and relieves symptoms like irregular periods, bloating, and mood fluctuations often associated with PCOD.",
      howItWorks: [
        "Hormonal Balance: Helps regulate estrogen and progesterone levels naturally.",
        "Anti-inflammatory & Anti- oxidant Action: Dashmool reduces oxidative stress and inflammation in the reproductive system.",
        "Ovarian Health: Supports normal ovulation and improves follicular health.",
        "Cycle Regulation: Promotes timely and healthier menstrual cycles.",
        "Fibroid Management: Suppresses the progression of Fibroids & supports healthy endometrial tissue",
        "Overall Wellbeing: Reduces fatigue, supports metabolism, and enhances vitality."
      ],
      whyChoose: [
        "Crafted with time-tested Ayurvedic herbal extracts",
        "Processed in Dashmool Kwath for superior efficacy",
        "A holistic, non-hormonal approach to PCOD management",
        "Plant based, No-known side-effects & safe for long-term use"
      ],
      keyBenefits: [
        "Restores hormonal balance (LH/FSH regulation)",
        "Promotes follicular growth & ovulation",
        "Reduces ovarian cyst size & menstrual irregularities",
        "Improves insulin sensitivity & metabolic health",
        "Provides stress relief & better reproductive wellness"
      ],
      dosage: "1-2 Capsule twice a day",
      packSize: "60 Veg. Capsules",
      shelfLife: "36 months from date of manufacturing",
      indications: ["PCOD", "Irregular Periods", "Hormonal Imbalance", "Ovarian Cysts"],
      ingredients: ["Latakaranja", "Kachnar", "Shatavari", "Shunthi", "Shatpushpa", "Giloy", "Gokshur", "Cinnamon", "Jatamasi", "Hingu"],
    specifications: {
        packSize: "60 Veg. Capsules",
        dosage: "1-2 Capsule twice a day",
        shelfLife: "36 months from date of manufacturing",
        indications: "PCOD, Irregular Periods, Hormonal Imbalance, Ovarian Cysts",
        processing: "Dashmool Kwath",
        type: "Herbal Supplement"
      }
    }
  ];

  // Get the current product based on ID
  const product = products.find(p => p.id === parseInt(productId)) || products[0];

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


  const calculateDiscount = () => {
    const original = parseFloat(product.originalPrice.replace('₹', ''));
    const current = parseFloat(product.price.replace('₹', ''));
    return Math.round(((original - current) / original) * 100);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Reset image index when product changes
    setCurrentImageIndex(0);
  }, [productId]);

  // Auto-rotate images every 10 seconds
  useEffect(() => {
    if (product.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % product.images.length
        );
      }, 10000); // Change image every 10 seconds

      return () => clearInterval(interval);
    }
  }, [product.images]);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle modal open/close
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!isModalOpen) return;
      
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
      } else if (event.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % product.images.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, product.images.length]);

  return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-emerald-50">
      <Header />
      
      <div className="pt-20 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
            <button onClick={() => navigate('/')} className="hover:text-green-800 transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate('/#products')} className="hover:text-green-800 transition-colors">
              Products
            </button>
            <span>/</span>
            <span className="text-green-800">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="absolute top-4 left-4">
                  <span className="bg-green-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
                </div>
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  onClick={openModal}
                  className="w-full h-96 object-contain transition-opacity duration-500 cursor-pointer hover:opacity-90"
                />
                
                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                  {currentImageIndex + 1} / {product.images.length}
                </div>
                
                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prevIndex) => 
                        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
                      )}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-800 p-2 rounded-full shadow-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prevIndex) => 
                        (prevIndex + 1) % product.images.length
                      )}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-800 p-2 rounded-full shadow-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleThumbnailClick(index)}
                    className={`bg-white rounded-xl p-4 shadow-md border-2 cursor-pointer hover:shadow-lg transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'border-green-500 shadow-lg' 
                        : 'border-green-100 hover:border-green-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className={`w-full h-20 object-contain transition-opacity duration-300 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-70'
                      }`}
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
                  <span className="text-sm text-green-800 font-medium bg-green-100 px-3 py-1 rounded-full">
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
                  <span className="text-3xl font-bold text-green-800">{product.price}</span>
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
                    className="w-10 h-10 bg-white border border-green-200 rounded-lg flex items-center justify-center text-green-800 hover:bg-green-100 transition-colors"
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
                    className="w-10 h-10 bg-white border border-green-200 rounded-lg flex items-center justify-center text-green-800 hover:bg-green-100 transition-colors"
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
                  className="w-full bg-green-800 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className="w-full bg-gradient-to-r from-green-800 to-emerald-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Buy Now
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">30-Day Returns</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
                  { id: 'how-it-works', label: 'How It Works' },
                  { id: 'ingredients', label: 'Ingredients' },
                  { id: 'specifications', label: 'Specifications' },
                  { id: 'reviews', label: 'Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-800'
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
                  
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {product.detailedDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.keyBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-3">Why Choose Besser Livomrit?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.whyChoose.map((reason, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-slate-600">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* How It Works Tab */}
              {activeTab === 'how-it-works' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                    How Besser Livomrit Works
                  </h3>
                  <div className="space-y-4">
                    {product.howItWorks.map((mechanism, index) => (
                      <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <h4 className="text-lg font-semibold text-green-800 mb-2">
                          {mechanism.split(':')[0]}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {mechanism.split(':')[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients Tab */}
              {activeTab === 'ingredients' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                    Ayurvedic Ingredients
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Besser Livomrit contains carefully selected time-tested Ayurvedic herbs, each chosen for their specific liver health benefits and synergistic properties.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="bg-green-100 rounded-xl p-4 border border-green-100">
                        <h4 className="font-semibold text-green-800 mb-2">{ingredient}</h4>
                        <p className="text-sm text-slate-600">
                          Traditional Ayurvedic herb known for its liver protective and detoxifying properties
                        </p>
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
                    <div className="bg-green-100 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">Dosage</h4>
                      <p className="text-slate-600">{product.dosage}</p>
                    </div>
                    <div className="bg-green-100 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">Pack Size</h4>
                      <p className="text-slate-600">{product.packSize}</p>
                    </div>
                    <div className="bg-green-100 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">Shelf Life</h4>
                      <p className="text-slate-600">{product.shelfLife}</p>
                    </div>
                    <div className="bg-green-100 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-2">Processing</h4>
                      <p className="text-slate-600">{product.specifications.processing}</p>
                    </div>
                    <div className="bg-green-100 rounded-xl p-4 border border-green-100 md:col-span-2">
                      <h4 className="font-semibold text-green-800 mb-2">Indications</h4>
                      <p className="text-slate-600">{product.indications.join(', ')}</p>
                      </div>
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
                    <button className="bg-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
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
                   <button className="w-full bg-green-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                     View Product
                   </button>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Main image */}
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="max-w-full max-h-[90vh] object-contain"
            />

            {/* Navigation arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prevIndex) => 
                    prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prevIndex) => 
                    (prevIndex + 1) % product.images.length
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white text-lg px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {product.images.length}
            </div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-white opacity-100' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ProductPage; 