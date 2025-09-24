import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();

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
      discount: "31% OFF"
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
      discount: "31% OFF"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <section id="products" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-slate-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
                 <div className="absolute top-20 right-10 w-32 h-32 bg-green-100/20 rounded-full blur-3xl"></div>
                 <div className="absolute bottom-20 left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-800">Premium Ayurvedic Formulations</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-green-900 mb-6 md:mb-8">
            Our Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Wellness Solutions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            Experience the power of traditional Ayurvedic wisdom combined with modern wellness needs. 
            Our scientifically crafted formulations are processed using time-honored methods for maximum efficacy.
          </p>
        </div>

        {/* Products Grid - Redesigned for 2 products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 -z-10 opacity-5 ${
                index === 0 
                  ? 'bg-gradient-to-br from-green-400 to-emerald-600' 
                  : 'bg-gradient-to-br from-purple-400 to-pink-600'
              }`}></div>

              {/* Discount Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-gradient-to-r from-green-800 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {product.discount}
                </span>
              </div>

              {/* Product Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Product Image */}
                <div className="relative order-2 md:order-1">
                  <div className="aspect-square bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden p-4 shadow-inner">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Quick View Overlay */}
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl backdrop-blur-sm">
                      <Link
                        to={`/product/${product.id}`}
                        className="bg-white text-green-800 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition-colors shadow-lg transform hover:scale-105"
                      >
                        View Details
                      </Link>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-4 md:space-y-6 order-1 md:order-2">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-800 bg-green-100 px-4 py-2 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
                      <span className="text-xs text-slate-500">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <Link 
                    to={`/product/${product.id}`}
                    className="block text-2xl md:text-3xl font-display font-bold text-green-800 leading-tight hover:text-green-600 transition-colors"
                  >
                    {product.name}
                  </Link>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base line-clamp-3">
                    {product.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="grid grid-cols-2 gap-2">
                    {product.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs md:text-sm text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl md:text-4xl font-bold text-green-800">{product.price}</span>
                    <span className="text-lg text-slate-400 line-through">{product.originalPrice}</span>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      Save ₹400
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-gradient-to-r from-green-800 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-14 h-14 bg-white border-2 border-green-200 text-green-800 rounded-xl hover:bg-green-100 hover:border-green-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-green-100 max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-green-800 mb-6 md:mb-8">
              Choose Your Wellness Journey
            </h3>
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto px-4">
              Whether you're looking to support liver health with Livomrit or manage PCOD symptoms with Ovasiddhi, 
              our Ayurvedic formulations are crafted to provide holistic wellness solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-green-800 mb-3">Liver Health Support</h4>
                <p className="text-slate-600 mb-4">Detoxify and regenerate with traditional Vasaguluchyadi Kashyam processing</p>
                <Link
                  to="/product/1"
                  className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Livomrit
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              <div className="bg-white/80 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-green-800 mb-3">PCOD Management</h4>
                <p className="text-slate-600 mb-4">Balance hormones naturally with Dashmool Kwath processed formulation</p>
                <Link
                  to="/product/2"
                  className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Ovasiddhi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 