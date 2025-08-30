import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-40 md:h-40 bg-coral-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-pink-400 to-coral-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg md:text-xl font-bold">🌿</span>
              </div>
              <span className="text-lg md:text-xl font-display font-bold text-white">
                Besser Life Care
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4 md:mb-6">
              Empowering your wellness journey with premium natural products crafted with care and backed by science.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {[
                { icon: "📧", href: "mailto:info@besserlifecare.com", label: "Email" },
                { icon: "📞", href: "tel:+15551234567", label: "Phone" },
                { icon: "📍", href: "#", label: "Location" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-lg md:text-xl hover:bg-pink-500/20 transition-all duration-300 hover:scale-110 touch-manipulation"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-4 md:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
                             {[
                 { name: "Home", href: "/" },
                 { name: "About Us", href: "/about" },
                 { name: "Our Products", href: "/products" },
                 { name: "Contact", href: "/contact" },
                 { name: "Blog", href: "/blog" }
               ].map((link, index) => (
                 <li key={index}>
                   <Link
                     to={link.href}
                     onClick={scrollToTop}
                     className="text-sm md:text-base text-slate-300 hover:text-pink-400 transition-colors duration-200 touch-manipulation"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-4 md:mb-6">
              Products
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Body Care",
                "Skincare",
                "Hair Care",
                "Wellness Teas",
                "Essential Oils"
              ].map((product, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm md:text-base text-slate-300 hover:text-pink-400 transition-colors duration-200 touch-manipulation"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-4 md:mb-6">
              Stay Updated
            </h3>
            <p className="text-sm md:text-base text-slate-300 mb-4 md:mb-6">
              Subscribe to our newsletter for wellness tips, product updates, and exclusive offers.
            </p>
            <form className="space-y-3 md:space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-coral-500 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 touch-manipulation text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base text-slate-400">
                © 2024 Besser Life Care. All rights reserved.
              </p>
            </div>

                         {/* Additional Links */}
             <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-sm md:text-base">
               <Link
                 to="/privacy-policy"
                 onClick={scrollToTop}
                 className="text-slate-400 hover:text-pink-400 transition-colors duration-200 touch-manipulation"
               >
                 Privacy Policy
               </Link>
               <Link
                 to="/terms-conditions"
                 onClick={scrollToTop}
                 className="text-slate-400 hover:text-pink-400 transition-colors duration-200 touch-manipulation"
               >
                 Terms of Service
               </Link>
               <Link
                 to="/shipping-policy"
                 onClick={scrollToTop}
                 className="text-slate-400 hover:text-pink-400 transition-colors duration-200 touch-manipulation"
               >
                 Shipping Policy
               </Link>
               <Link
                 to="/return-refund-policy"
                 onClick={scrollToTop}
                 className="text-slate-400 hover:text-pink-400 transition-colors duration-200 touch-manipulation"
               >
                 Return Policy
               </Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 