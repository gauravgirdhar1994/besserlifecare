import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    whyChoose: false,
    features: false
  });
  
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const heroRef = useRef(null);
  const whyChooseRef = useRef(null);
  const featuresRef = useRef(null);

  // Banner images array
  const bannerImages = ['/Banner.jpg', '/Banner (1).jpg'];

  // Intersection Observer for animations
  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target.dataset.section;
        setIsVisible(prev => ({ ...prev, [section]: true }));
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    if (heroRef.current) observer.observe(heroRef.current);
    if (whyChooseRef.current) observer.observe(whyChooseRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, [observerCallback]);

  // Banner rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        (prevIndex + 1) % bannerImages.length
      );
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, [bannerImages.length]);


  return (
    <>
      <Helmet>
        <title>Besser Life Care - Premium Ayurvedic Wellness Products for Liver Health & PCOD</title>
        <meta name="description" content="Discover premium Ayurvedic wellness products by Besser Life Care. Besser Livomrit for liver health and Besser Ovasiddhi for PCOD management. Natural herbal supplements processed with traditional methods." />
        <meta name="keywords" content="Ayurvedic products, liver health supplements, PCOD management, herbal wellness, natural supplements, Besser Livomrit, Besser Ovasiddhi, liver detox, hormonal balance" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Besser Life Care - Premium Ayurvedic Wellness Products" />
        <meta property="og:description" content="Premium Ayurvedic wellness products for liver health and PCOD management. Natural herbal supplements processed with traditional methods." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://besserlifecare.in" />
        <meta property="og:image" content="https://besserlifecare.in/Banner.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Besser Life Care - Premium Ayurvedic Wellness Products" />
        <meta name="twitter:description" content="Premium Ayurvedic wellness products for liver health and PCOD management. Natural herbal supplements processed with traditional methods." />
        <meta name="twitter:image" content="https://besserlifecare.in/Banner.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Besser Life Care",
            "url": "https://besserlifecare.in",
            "description": "Premium Ayurvedic wellness products for liver health and PCOD management",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://besserlifecare.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      
      <div className="md:bg-green-100 min-h-screen flex flex-col">
        <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        data-section="hero"
        className={`relative h-auto md:h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 mt-24 md:mt-0 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Banner Background Images */}
        <div className="relative w-full -z-20 bg-white md:absolute md:inset-0 md:bg-transparent">
          {bannerImages.map((banner, index) => (
            <div
              key={banner}
              className={`w-full transition-opacity duration-1000 ${
                index === currentBannerIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-auto object-contain md:h-full md:object-cover"
              />
              {/* Overlay for better text readability - reduced opacity for mobile */}
              <div className="absolute inset-0 bg-black/10 md:bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Floating geometric shapes with staggered animations */}
        <div className="absolute inset-0 -z-10 hidden md:block">
          <div className={`absolute top-10 md:top-20 left-5 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-green-100/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-full h-full bg-green-100/10 rounded-full animate-pulse"></div>
          </div>
          <div className={`absolute top-20 md:top-40 right-10 md:right-20 w-12 md:w-24 h-12 md:h-24 bg-emerald-200/30 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
            isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-full h-full bg-emerald-200/10 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className={`absolute bottom-20 md:bottom-40 left-10 md:left-20 w-20 md:w-40 h-20 md:h-40 bg-teal-200/20 rounded-full blur-3xl transition-all duration-1000 delay-700 ${
            isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-full h-full bg-teal-200/10 rounded-full animate-pulse delay-2000"></div>
          </div>
        </div>
        
        {/* Banner Navigation Indicators */}
        <div className={`absolute bottom-4 md:bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex space-x-3">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBannerIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator with animation - hidden on mobile due to limited space */}
        <div className={`hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-white/80 font-medium drop-shadow-md">Scroll to explore</span>
            <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section with staggered animations */}
      <section 
        ref={whyChooseRef}
        data-section="whyChoose"
        id="why" 
        className={`py-16 px-4 md:px-12 bg-white border-b border-emerald-100 transition-all duration-1000 ${
          isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <h2 className={`text-4xl font-display font-bold text-green-900 mb-12 text-center transition-all duration-1000 delay-300 ${
          isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Why Choose Besser Life Care?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "🌿",
              title: "Natural Ingredients",
              description: "100% natural and organic ingredients sourced from the finest herbs and plants."
            },
            {
              icon: "💚",
              title: "Made with Love",
              description: "Every product is crafted with care and attention to detail, just for you."
            },
            {
              icon: "✅",
              title: "Proven Results",
              description: "Thousands of satisfied customers have experienced the benefits of our products."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-6 transition-all duration-1000 delay-${500 + index * 200} ${
                isVisible.whyChoose ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Lazy load other sections */}
      <div ref={featuresRef} data-section="features">
        <FeaturedProducts />
        <Testimonials />
        <AboutSection />
        {/* <ContactSection /> */}
      </div>
      
        <Footer />
      </div>
    </>
  );
};

export default LandingPage; 