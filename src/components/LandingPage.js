import React from 'react';
import Header from './Header';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-coral-200/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-sage-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          {/* Wavy SVG Background */}
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-full opacity-20">
            <path d="M0,600 C400,500 800,700 1440,600 L1440,800 L0,800 Z" fill="#ec4899"/>
            <path d="M0,650 C500,550 900,750 1440,650 L1440,800 L0,800 Z" fill="#f97316"/>
            <path d="M0,700 C600,600 1000,800 1440,700 L1440,800 L0,800 Z" fill="#5c6b5c"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-pink-100">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-pink-700">100% Natural & Organic</span>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
              </div>
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="block text-pink-800">Empowering</span>
                <span className="block text-pink-600">
                  Women's Wellness
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-slate-700 mt-2">
                  with Herbal Care
                </span>
              </h1>
              {/* Description */}
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover the transformative power of nature with our carefully crafted herbal products,
                designed specifically for women's unique wellness journey.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#products"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <span>Shop Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </a>
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-700 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl border-2 border-pink-200 hover:border-pink-300 transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Learn More</span>
                  </span>
                </button>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-coral-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-600">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-600">2,000+ Happy Customers</span>
                </div>
              </div>
            </div>
            {/* Right Content - Product Showcase */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Product Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-pink-200/50 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <img
                    src="/bhealth-cream.png"
                    alt="B-Health Herbal Body Massage Cream"
                    className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-contain rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm transform rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-coral-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-slate-500 font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section id="why" className="py-16 px-4 md:px-12 bg-white border-b border-coral-100">
        <h2 className="text-4xl font-display font-bold text-pink-900 mb-12">Why Choose Besser Life Care?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-pink-800 mb-2">Natural Ingredients</h3>
            <p className="text-slate-600">100% natural and organic ingredients sourced from the finest herbs and plants.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-pink-800 mb-2">Made with Love</h3>
            <p className="text-slate-600">Every product is crafted with care and attention to detail, just for you.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-pink-800 mb-2">Proven Results</h3>
            <p className="text-slate-600">Thousands of satisfied customers have experienced the benefits of our products.</p>
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <Testimonials />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage; 