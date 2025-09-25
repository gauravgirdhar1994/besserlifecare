import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { trackProductView } from '../utils/analytics';
import Header from './Header';
import Footer from './Footer';

const ProductPage = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  // Product data array
  const products = [
    {
      id: 1,
      name: "Besser Livomrit",
      category: "Liver Health",
      price: "₹440",
      originalPrice: "₹440",
      rating: 4.9,
      reviews: 2156,
      image: "/products/livomrit/1.jpg",
      images: [
        "/products/livomrit/1.jpg",
        "/products/livomrit/2.jpg", 
        "/products/livomrit/4.jpg",
        "/products/livomrit/6.jpg",
        "/products/livomrit/8.jpg",
        "/products/livomrit/7s.jpg",
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
      price: "₹440",
      originalPrice: "₹440",
    rating: 4.8,
      reviews: 1834,
      image: "/products/ovasidhi/1.jpg",
    images: [
        "/products/ovasidhi/1.jpg",
        "/products/ovasidhi/2.jpg", 
        "/products/ovasidhi/4.jpg",
        "/products/ovasidhi/5.jpg",
        "/products/ovasidhi/7.jpg",
        "/products/ovasidhi/6.jpg",
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
  // Convert URL-friendly product name back to original name
  const getProductFromUrl = (urlName) => {
    const nameMap = {
      'besser-livomrit': 'Besser Livomrit',
      'besser-ovasiddhi': 'Besser Ovasiddhi'
    };
    return nameMap[urlName] || 'Besser Livomrit';
  };

  const product = products.find(p => p.name === getProductFromUrl(productName)) || products[0];


  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Track product view
    if (product) {
      trackProductView(
        product.id.toString(),
        product.name,
        product.category,
        parseFloat(product.price.replace('₹', '').replace(',', ''))
      );
    }
  }, [productName, product]);

  // Convert product images to react-image-gallery format
  const galleryImages = product.images.map(image => ({
    original: image,
    thumbnail: image,
    originalAlt: product.name,
    thumbnailAlt: product.name
  }));



  return (
    <>
      <Helmet>
        <title>{product.name} - {product.category} | Besser Life Care</title>
        <meta name="description" content={`${product.description} ${product.detailedDescription}. Buy ${product.name} online - Premium Ayurvedic supplement for ${product.category.toLowerCase()}. ${product.packSize} at ₹${product.price.replace('₹', '')}`} />
        <meta name="keywords" content={`${product.name}, ${product.category}, Ayurvedic supplements, ${product.ingredients.join(', ')}, natural wellness, liver health, PCOD management`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${product.name} - ${product.category} | Besser Life Care`} />
        <meta property="og:description" content={`${product.description} Buy ${product.name} online - Premium Ayurvedic supplement. ${product.packSize} at ₹${product.price.replace('₹', '')}`} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://besserlifecare.in/product/${productName}`} />
        <meta property="og:image" content={`https://besserlifecare.in${product.image}`} />
        
        {/* Product-specific Open Graph */}
        <meta property="product:price:amount" content={product.price.replace('₹', '')} />
        <meta property="product:price:currency" content="INR" />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:brand" content="Besser Life Care" />
        <meta property="product:category" content={product.category} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} - ${product.category} | Besser Life Care`} />
        <meta name="twitter:description" content={`${product.description} Buy ${product.name} online - Premium Ayurvedic supplement.`} />
        <meta name="twitter:image" content={`https://besserlifecare.in${product.image}`} />
        
        {/* Structured Data for Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": product.images.map(img => `https://besserlifecare.in${img}`),
            "brand": {
              "@type": "Brand",
              "name": "Besser Life Care"
            },
            "offers": {
              "@type": "Offer",
              "price": product.price.replace('₹', ''),
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Besser Life Care"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.rating,
              "reviewCount": product.reviews
            },
            "category": product.category,
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Pack Size",
                "value": product.packSize
              },
              {
                "@type": "PropertyValue",
                "name": "Dosage",
                "value": product.dosage
              },
              {
                "@type": "PropertyValue",
                "name": "Shelf Life",
                "value": product.shelfLife
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-50 to-emerald-50">
        <Header />
      
      <div className="pt-20 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
            <button 
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }} 
              type="button"
              className="hover:text-green-800 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                navigate('/#products');
              }} 
              type="button"
              className="hover:text-green-800 transition-colors"
            >
              Products
            </button>
            <span>/</span>
            <span className="text-green-800">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-green-100">
                <ImageGallery
                  items={galleryImages}
                  showThumbnails={true}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showBullets={true}
                  showNav={true}
                  autoPlay={true}
                  slideInterval={10000}
                  slideDuration={500}
                  thumbnailPosition="bottom"
                  useBrowserFullscreen={true}
                  showIndex={true}
                  indexSeparator=" / "
                  lazyLoad={true}
                  additionalClass="custom-image-gallery"
                />
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
                    {/* <span className="text-xs text-slate-500">({product.reviews} reviews)</span> */}
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold text-green-900 mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-green-800">{product.price}</span>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quantity */}
              {/* <div>
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
              </div> */}

              {/* Buy on Amazon Button */}
              <div className="space-y-4">
                <a
                  href="https://www.amazon.in/s?k=besser+life+care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span className="text-2xl">🛒</span>
                  <span>Buy on Amazon</span>
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-2">Available on Amazon India</p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-slate-500">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>Prime Delivery</span>
                    </span>
                    {/* <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>Easy Returns</span>
                    </span> */}
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-green-100">
                <div className="grid grid-cols-1 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    {/* <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">30-Day Returns</span> */}
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
          <div className="mt-20 product-tabs-container">
            <Tabs className="custom-tabs">
              <TabList className="custom-tab-list">
                <Tab className="custom-tab">Description</Tab>
                <Tab className="custom-tab">How It Works</Tab>
                <Tab className="custom-tab">Ingredients</Tab>
                <Tab className="custom-tab">Specifications</Tab>
              </TabList>

              <TabPanel>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 mt-8">
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
                      <h4 className="text-xl font-semibold text-green-800 mb-3">Why Choose {product.name}?</h4>
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
                </div>
              </TabPanel>

              <TabPanel>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 mt-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold text-green-800 mb-4">
                      How {product.name} Works
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
                </div>
              </TabPanel>

              <TabPanel>
                <div className="mt-8">
                  {/* Header Section */}
                  <div className="text-center mb-12">
                    <div className="inline-block">
                      <h3 className="text-4xl font-bold text-green-900 mb-4">Powerful Ayurvedic Ingredients</h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                      {product.name} combines {product.ingredients.length} carefully selected herbs, each with centuries of Ayurvedic wisdom and modern scientific validation.
                    </p>
                  </div>
                  
                  {/* Livomrit Ingredients */}
                  {product.name === "Besser Livomrit" && (
                    <div className="space-y-8">
                      <div className="text-center mb-10">
                        <h4 className="text-2xl font-bold text-green-800 mb-2">Liver Health Formulation</h4>
                        <p className="text-green-600">Traditional herbs for modern liver wellness</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {[
                          {
                            name: "Makoy",
                            benefits: "Potent Hepatoprotective & Anti-Inflammatory",
                            effects: "Reduces liver enlargement, jaundice, and hepatocellular damage"
                          },
                          {
                            name: "Sharpunkha",
                            benefits: "Known as Yakrituttejak (Liver Stimulant) in Ayurveda",
                            effects: "Effective in Hepatomegaly & Spleenomegaly"
                          },
                          {
                            name: "Punarnava",
                            benefits: "Potent Anti-inflammatory & Diuretic",
                            effects: "Reduces edema & ascites in cirrhosis"
                          },
                          {
                            name: "Madhuyashti (Yashtimadhu)",
                            benefits: "Hepatoprotective & Anti-viral property",
                            effects: "Protects gastric-liver axis, Beneficial in Hepatitis B & C"
                          },
                          {
                            name: "Kutki",
                            benefits: "Potent Yakrit Rasayana (liver tonic) improves liver enzymes",
                            effects: "Improves Appetite & Digestion"
                          },
                          {
                            name: "Bhringraj",
                            benefits: "Potent Hepatoprotective",
                            effects: "Regenerates liver cells, supports metabolism"
                          },
                          {
                            name: "Bhumyamalaki",
                            benefits: "Potent antiviral",
                            effects: "HBsAg suppression, Improves bilirubin clearance & reduce jaundice"
                          },
                          {
                            name: "Kalmegh",
                            benefits: "Potent anti-inflammatory, immunomodulatory",
                            effects: "Enhances bile secretion"
                          },
                          {
                            name: "Kasani",
                            benefits: "Natural cholagogue and detoxifier",
                            effects: "Useful in fatty liver & sluggish hepatic metabolism"
                          },
                          {
                            name: "Trikatu",
                            benefits: "Enhances bioavailability",
                            effects: "Improves fat metabolism & Digestive process"
                          }
                        ].map((ingredient, index) => (
                          <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <h5 className="text-lg font-bold text-gray-900">{ingredient.name}</h5>
                            </div>
                            
                            <div className="mb-4">
                              <div className="text-sm font-semibold text-green-700 mb-2 bg-green-50 px-3 py-2 rounded-lg border-l-4 border-green-400">
                                {ingredient.benefits}
                              </div>
                            </div>
                            
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {ingredient.effects}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ovasiddhi Ingredients */}
                  {product.name === "Besser Ovasiddhi" && (
                    <div className="space-y-8">
                      <div className="text-center mb-10">
                        <h4 className="text-2xl font-bold text-purple-800 mb-2">PCOD Care Formulation</h4>
                        <p className="text-purple-600">Holistic herbs for hormonal balance and reproductive health</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {[
                          {
                            name: "Lata Karcanj",
                            scientific: "Caesalpinia bonducella",
                            benefits: [
                              "Regulates menstrual cycles, reduces ovarian cyst formation",
                              "Supports healthy ovulation and uterine function"
                            ]
                          },
                          {
                            name: "Kanchnar",
                            scientific: "Bauhinia variegata",
                            benefits: [
                              "Kanchanar Guggulu is classically indicated in granthi (cystic swellings)",
                              "Helps shrink ovarian cysts and regulates thyroid balance"
                            ]
                          },
                          {
                            name: "Shatavari",
                            scientific: "Asparagus racemosus",
                            benefits: [
                              "Rasayana for female reproductive system",
                              "Supports follicular development, improves ovulation",
                              "Balances hormones & reduces menstrual irregularities"
                            ]
                          },
                          {
                            name: "Shunthi",
                            scientific: "Zingiber officinale",
                            benefits: [
                              "Improves digestion & metabolism (deepana–pachana)",
                              "Reduces insulin resistance and systemic inflammation"
                            ]
                          },
                          {
                            name: "Shatpushpa",
                            scientific: "Anethum sowa / Dill seeds",
                            benefits: [
                              "Uterine stimulant, helps regulate delayed/irregular menses",
                              "Carminative – reduces bloating associated with PCOD"
                            ]
                          },
                          {
                            name: "Giloy",
                            scientific: "Tinospora cordifolia",
                            benefits: [
                              "Immunomodulator & anti-inflammatory",
                              "Reduces chronic low-grade inflammation in PCOD",
                              "Supports metabolic balance and improves insulin sensitivity"
                            ]
                          },
                          {
                            name: "Gokshur",
                            scientific: "Tribulus terrestris",
                            benefits: [
                              "Acts as mutral (diuretic), reduces water retention",
                              "Restores reproductive vitality and balances hormones"
                            ]
                          },
                          {
                            name: "Cinnamon",
                            scientific: "Cinnamomum zeylanicum",
                            benefits: [
                              "Clinically proven to improve insulin sensitivity in PCOS",
                              "Supports weight management & glucose metabolism"
                            ]
                          },
                          {
                            name: "Jatamansi",
                            scientific: "Nardostachys jatamansi",
                            benefits: [
                              "Nervine tonic, reduces stress & anxiety",
                              "Corrects hypothalamic-pituitary-ovarian (HPO) axis imbalance caused by stress",
                              "Helps regulate sleep & hormonal rhythm"
                            ]
                          },
                          {
                            name: "Hingu",
                            scientific: "Ferula asafoetida",
                            benefits: [
                              "Vata–Kapha hara, carminative, anti-spasmodic",
                              "Reduces bloating & abdominal cramps"
                            ]
                          }
                        ].map((ingredient, index) => (
                          <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <div>
                                <h5 className="text-lg font-bold text-gray-900">{ingredient.name}</h5>
                                <p className="text-sm text-gray-500 italic">{ingredient.scientific}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              {ingredient.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-gray-600 text-sm leading-relaxed">{benefit}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 mt-8">
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
                </div>
              </TabPanel>
            </Tabs>
          </div>


        </div>
      </div>

      </div>
      
      <Footer />
    </>
  );
};

export default ProductPage; 