import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🌿' },
    { id: 'body-care', name: 'Body Care', icon: '🧴' },
    { id: 'skincare', name: 'Skincare', icon: '✨' },
    { id: 'hair-care', name: 'Hair Care', icon: '💇‍♀️' },
    { id: 'wellness-teas', name: 'Wellness Teas', icon: '🍵' },
    { id: 'essential-oils', name: 'Essential Oils', icon: '🫗' }
  ];

  const products = [
    {
      id: 1,
      name: "Natural Glow Face Cream",
      category: "skincare",
      price: 899,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 127,
      image: "🌿",
      description: "Revitalizing face cream with natural ingredients for radiant, healthy skin.",
      features: ["Natural ingredients", "Suitable for all skin types", "Dermatologically tested"]
    },
    {
      id: 2,
      name: "Herbal Hair Growth Oil",
      category: "hair-care",
      price: 699,
      originalPrice: 899,
      rating: 4.6,
      reviews: 89,
      image: "🌿",
      description: "Promotes healthy hair growth with traditional herbal extracts.",
      features: ["Promotes hair growth", "Reduces hair fall", "Natural shine"]
    },
    {
      id: 3,
      name: "Relaxing Lavender Body Wash",
      category: "body-care",
      price: 499,
      originalPrice: 649,
      rating: 4.7,
      reviews: 156,
      image: "🌿",
      description: "Soothing body wash with lavender essential oil for relaxation.",
      features: ["Lavender essential oil", "Moisturizing", "Relaxing fragrance"]
    },
    {
      id: 4,
      name: "Immunity Boost Tea Blend",
      category: "wellness-teas",
      price: 399,
      originalPrice: 549,
      rating: 4.9,
      reviews: 203,
      image: "🌿",
      description: "Natural tea blend to strengthen immunity and overall wellness.",
      features: ["Immunity boosting", "Natural herbs", "Daily wellness"]
    },
    {
      id: 5,
      name: "Tea Tree Essential Oil",
      category: "essential-oils",
      price: 299,
      originalPrice: 399,
      rating: 4.5,
      reviews: 78,
      image: "🌿",
      description: "Pure tea tree oil for skin care and natural healing properties.",
      features: ["100% pure", "Antibacterial", "Skin healing"]
    },
    {
      id: 6,
      name: "Moisturizing Hand Cream",
      category: "body-care",
      price: 349,
      originalPrice: 449,
      rating: 4.4,
      reviews: 92,
      image: "🌿",
      description: "Deeply moisturizing hand cream with shea butter and natural oils.",
      features: ["Shea butter", "Long-lasting moisture", "Non-greasy"]
    },
    {
      id: 7,
      name: "Anti-Aging Night Serum",
      category: "skincare",
      price: 1299,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 67,
      image: "🌿",
      description: "Advanced night serum with natural anti-aging properties.",
      features: ["Anti-aging", "Night repair", "Natural peptides"]
    },
    {
      id: 8,
      name: "Scalp Care Shampoo",
      category: "hair-care",
      price: 599,
      originalPrice: 749,
      rating: 4.6,
      reviews: 134,
      image: "🌿",
      description: "Gentle shampoo for sensitive scalp with natural cleansing agents.",
      features: ["Scalp care", "Gentle cleansing", "Natural ingredients"]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <>
      <Helmet>
        <title>Products - Besser Life Care Ayurvedic Wellness Supplements</title>
        <meta name="description" content="Browse our complete range of premium Ayurvedic wellness products. Besser Livomrit for liver health and Besser Ovasiddhi for PCOD management. Natural herbal supplements processed with traditional methods." />
        <meta name="keywords" content="Ayurvedic products, wellness supplements, liver health, PCOD management, Besser Livomrit, Besser Ovasiddhi, herbal supplements, natural wellness" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Products - Besser Life Care Ayurvedic Wellness Supplements" />
        <meta property="og:description" content="Browse our complete range of premium Ayurvedic wellness products. Natural herbal supplements for liver health and PCOD management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://besserlifecare.in/products" />
        
        {/* Structured Data for Product Collection */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Besser Life Care Products",
            "description": "Premium Ayurvedic wellness products for liver health and PCOD management",
            "url": "https://besserlifecare.in/products",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Ayurvedic Wellness Products",
              "itemListElement": products.map((product, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Product",
                  "name": product.name,
                  "description": product.description,
                  "image": `https://besserlifecare.in${product.image}`,
                  "url": `https://besserlifecare.in/product/${product.id}`
                }
              }))
            }
          })}
        </script>
      </Helmet>
      
      <div className="bg-green-100 min-h-screen flex flex-col">
        <Header />
      <div className="flex-1 bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our premium collection of natural wellness products, carefully crafted to enhance your health and beauty.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-800 to-emerald-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-slate-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              {/* Product Image */}
                              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <span className="text-6xl">{product.image}</span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-slate-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-slate-800">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-slate-400 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 bg-gradient-to-r from-green-800 to-emerald-500 text-white py-2 px-4 rounded-lg font-medium text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View Details
                  </Link>
                  <button className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center hover:bg-green-100 hover:text-green-800 transition-all duration-300">
                    <span className="text-lg">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No products found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your filters or browse all products.</p>
            <button
              onClick={() => setSelectedCategory('all')}
                              className="bg-gradient-to-r from-green-800 to-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View All Products
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-800 to-emerald-500 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-display font-semibold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our wellness experts are here to guide you to the perfect products for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Expert Advice
              </Link>
              <a
                href="mailto:support@besserlifecare.in"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage; 