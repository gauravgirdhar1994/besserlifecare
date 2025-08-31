import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState('contact');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us a message anytime",
      value: "info@besserlifecare.com",
      action: "mailto:info@besserlifecare.com",
      color: "pink"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "coral"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help",
      value: "Available 24/7",
      action: "#",
      color: "sage"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Our headquarters",
      value: "Bangalore, India",
      action: "#",
      color: "cream"
    }
  ];

  const faqItems = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within India and 7-14 days internationally. Express shipping is available for faster delivery."
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer: "Yes! All our products are formulated with natural ingredients and are suitable for sensitive skin. We recommend doing a patch test before full use."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Absolutely! We ship to over 25 countries worldwide. International shipping rates and delivery times vary by location."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, you can return unused products for a full refund."
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-12 bg-gradient-to-br from-white via-green-50 to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 md:w-32 h-24 md:h-32 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 md:w-40 h-32 md:h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-teal-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-green-900 mb-4 md:mb-6">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Have questions about our products or need support? We're here to help you on your wellness journey. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
                             className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer touch-manipulation"
              onClick={() => method.action !== '#' && window.open(method.action)}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
                               <h3 className="text-base md:text-lg font-display font-semibold text-green-800 mb-2">
                   {method.title}
                 </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-3">
                {method.description}
              </p>
                             <div className="text-sm md:text-base text-green-600 font-medium break-words">
                 {method.value}
               </div>
            </div>
          ))}
        </div>

        {/* Main Content Tabs */}
                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
           {/* Tab Navigation */}
           <div className="border-b border-green-100">
            <nav className="flex space-x-4 md:space-x-8 px-4 md:px-8 overflow-x-auto">
              {[
                { id: 'contact', label: 'Send Message', icon: '✉️' },
                { id: 'faq', label: 'FAQ', icon: '❓' },
                // { id: 'support', label: 'Support', icon: '🆘' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                                     className={`py-3 md:py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 whitespace-nowrap ${
                     activeTab === tab.id
                       ? 'border-green-500 text-green-600'
                       : 'border-transparent text-slate-500 hover:text-slate-700'
                   }`}
                >
                  <span className="text-base md:text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-4 md:p-8 lg:p-12">
            {/* Contact Form Tab */}
            {activeTab === 'contact' && (
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6 md:mb-8">
                                     <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-3 md:mb-4">
                     Send Us a Message
                   </h3>
                  <p className="text-sm md:text-base text-slate-600 px-2">
                    We'd love to hear from you! Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-300 focus:border-green-300 outline-none transition-all duration-300 text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 md:px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-300 focus:border-green-300 outline-none transition-all duration-300 text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 md:px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-300 focus:border-green-300 outline-none transition-all duration-300 text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-support">Order Support</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-3 md:px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-300 focus:border-green-300 outline-none transition-all duration-300 resize-none text-base"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 touch-manipulation"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-3 md:mb-4">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 px-2">
                    Find quick answers to common questions about our products and services.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
                      <h4 className="text-base md:text-lg font-display font-semibold text-green-800 mb-2 md:mb-3">
                        {item.question}
                      </h4>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="mt-12 md:mt-16 text-center">
                     <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-green-100">
             <h3 className="text-xl md:text-2xl font-display font-bold text-green-800 mb-4 md:mb-6">
               Connect With Us
             </h3>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Follow us on social media for wellness tips, product updates, and community stories.
            </p>
            
            <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
              {[
                { name: 'LinkedIn', icon: '💼', color: 'pink' },
                { name: 'Twitter', icon: '🐦', color: 'coral' },
                { name: 'Instagram', icon: '📸', color: 'sage' },
                { name: 'Facebook', icon: '👥', color: 'cream' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-12 h-12 md:w-16 md:h-16 bg-${social.color}-100 rounded-full flex items-center justify-center text-xl md:text-2xl hover:bg-${social.color}-200 transition-all duration-300 hover:scale-110 touch-manipulation`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-xs md:text-sm text-slate-500 space-y-1 md:space-y-2">
              <p>
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
              </p>
              <p>
                <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 