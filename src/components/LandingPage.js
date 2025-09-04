import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef(null);
  const whyChooseRef = useRef(null);
  const featuresRef = useRef(null);

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

  // Lazy load image
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="bg-green-100 min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        data-section="hero"
        className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 -z-10">
          {/* Floating geometric shapes with staggered animations */}
          <div className={`absolute top-20 left-10 w-32 h-32 bg-green-100/30 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-full h-full bg-green-100/20 rounded-full animate-pulse"></div>
          </div>
          <div className={`absolute top-40 right-20 w-24 h-24 bg-emerald-200/40 rounded-full blur-2xl transition-all duration-1000 delay-500 ${
            isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-full h-full bg-emerald-200/20 rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className={`absolute bottom-40 left-20 w-40 h-40 bg-teal-200/30 rounded-full blur-3xl transition-all duration-1000 delay-700 ${
            isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-full h-full bg-teal-200/20 rounded-full animate-pulse delay-2000"></div>
          </div>
          
        </div>
        
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Text */}
            <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 delay-300 ${
              isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              {/* Badge with staggered animation */}
              <div className={`inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-green-100 transition-all duration-700 delay-500 ${
                isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">100% Natural & Organic</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
              </div>
              
              {/* Main Heading with staggered animation */}
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight transition-all duration-1000 delay-700 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="block text-green-800">Besser Life Care</span>
                <span className="block text-green-800">Your Partner in</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-slate-700 mt-2">Natural Healing</span>
              </h1>
              
              {/* Description with staggered animation */}
              <p className={`text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-900 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Discover the transformative power of nature with our carefully crafted products .Each product we create is rooted in Ayurveda, validated by modern research, and crafted with care to help you live healthier, longer, and better.
                With Besser Life Care, you’re not just choosing a product—you’re choosing a promise of better living through nature’s healing power.
              </p>
              
              {/* CTA Buttons with staggered animation */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1100 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <a
                  href="#products"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-800 hover:bg-green-600 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <span>Shop Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </a>
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-700 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl border-2 border-green-200 hover:border-green-300 transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Learn More</span>
                  </span>
                </button>
              </div>
              
              {/* Trust Indicators with staggered animation */}
              <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-4 transition-all duration-1000 delay-1300 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className="flex text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-600">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600">2,000+ Happy Customers</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Product Showcase with lazy loading */}
            <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
              isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                {/* Main Product Image with lazy loading */}
                <div className="relative group">
                  <div className={`absolute inset-0 bg-green-100/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Loading placeholder */}
                  {!imageLoaded && (
                    <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl animate-pulse flex items-center justify-center">
                      <div className="text-green-400 text-4xl">🌿</div>
                    </div>
                  )}
                  
                  {/* Lazy loaded image */}
                  <img
                    src="/bhealth-cream.png"
                    alt="B-Health Herbal Body Massage Cream"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    className={`relative z-10 w-80 h-80 md:w-96 md:h-96 object-contain rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  />
                  
                  {/* Floating Elements with staggered animations */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-1000 ${
                    isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="w-full h-full bg-emerald-400 rounded-full animate-bounce"></div>
                    <svg className="absolute w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  
                  <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-1200 ${
                    isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                    <svg className="absolute w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator with animation */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-slate-500 font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage; 