import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-green-50 backdrop-blur-md shadow-lg border-b border-green-200' 
          : 'bg-green-50 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2 md:space-x-3 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white text-lg md:text-xl font-bold">🌿</span>
              </div>
              <span className="text-lg md:text-xl font-display font-bold text-green-800 group-hover:text-green-600 transition-colors">
                Besser Life Care
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link 
                to="/" 
                onClick={scrollToTop}
                className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                onClick={scrollToTop}
                className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                to="/about" 
                onClick={scrollToTop}
                className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side - Cart and CTA */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Cart */}
              <Cart />
              
              {/* CTA Button */}
              <div className="hidden md:block">
                <Link 
                  to="/products" 
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Shop Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-green-100 transition-colors touch-manipulation"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className="w-6 h-6 text-slate-700" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-green-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">🌿</span>
              </div>
              <span className="text-lg font-display font-bold text-green-800">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6">
            {/* Navigation Links */}
            <nav className="space-y-2 mb-8">
              {[
                { name: "Home", href: "/", icon: "🏠" },
                { name: "Products", href: "/products", icon: "🛍️" },
                { name: "About", href: "/about", icon: "ℹ️" },
                { name: "Contact", href: "/contact", icon: "📞" }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-200 group"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  <span className="text-lg font-medium text-slate-700 group-hover:text-green-600 transition-colors">
                    {link.name}
                  </span>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-green-500 ml-auto transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Ready to Shop?
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                Discover our premium herbal wellness products
              </p>
              <Link
                to="/products"
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
              >
                Start Shopping
              </Link>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@besserlifecare.com"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <span className="text-xl">📧</span>
                  <span className="text-slate-600">info@besserlifecare.com</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <span className="text-xl">📞</span>
                  <span className="text-slate-600">+91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 