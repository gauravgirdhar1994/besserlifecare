import React from 'react';

const AboutSection = () => {
  const companyValues = [
    {
      icon: "🌿",
      title: "Natural Excellence",
      description: "We believe in the power of nature and use only the finest natural ingredients in all our products."
    },
    {
      icon: "💚",
      title: "Ethical Practices",
      description: "Committed to cruelty-free testing, sustainable sourcing, and environmentally responsible manufacturing."
    },
    {
      icon: "🔬",
      title: "Scientific Innovation",
      description: "Combining traditional wisdom with modern research to create effective, safe wellness solutions."
    },
    {
      icon: "🤝",
      title: "Customer First",
      description: "Your wellness journey is our priority. We're here to support you every step of the way."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Besser Life Care was established with a vision to bring natural wellness to every household.",
      achievement: "Started with 3 products"
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Successfully launched our flagship B-Health Herbal Body Massage Cream.",
      achievement: "10,000+ units sold"
    },
    {
      year: "2022",
      title: "Market Expansion",
      description: "Expanded our product line and reached customers across 15+ cities in India.",
      achievement: "50+ products in portfolio"
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launched our e-commerce platform and mobile app for better customer experience.",
      achievement: "100K+ app downloads"
    },
    {
      year: "2024",
      title: "National Recognition",
      description: "Received multiple awards for excellence in natural wellness products.",
      achievement: "5 industry awards"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-slate-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-24 h-24 md:w-32 md:h-32 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-teal-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-green-900 mb-4 md:mb-6">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover the journey of Besser Life Care, from our humble beginnings to becoming a trusted name 
            in natural wellness products across India.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-green-100">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🎯</div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-3 md:mb-4">
              Our Mission
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              To empower individuals with natural, effective wellness solutions that enhance their quality of life, 
              while promoting sustainable practices and ethical business standards.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-green-100">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🌟</div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-3 md:mb-4">
              Our Vision
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              To become the leading provider of natural wellness products in India, setting industry standards 
              for quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16 md:mb-20">
                     <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 text-center mb-8 md:mb-12">
             Our Core Values
           </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                                 <h4 className="text-lg md:text-xl font-display font-semibold text-green-800 mb-2 md:mb-3">
                   {value.title}
                 </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

     
        {/* Company Achievements */}
        <div className="mb-16 md:mb-20">
                     <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 text-center mb-8 md:mb-12">
             Our Achievements
           </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "50+", label: "Products", icon: "🌿" },
              { number: "100K+", label: "Happy Customers", icon: "😊" },
              { number: "25+", label: "Cities Served", icon: "🏙️" },
              { number: "4.9/5", label: "Customer Rating", icon: "⭐" }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                                 <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-green-800 mb-1 md:mb-2">
                   {achievement.number}
                 </div>
                <div className="text-sm md:text-base text-slate-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
                     <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-green-100 max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-4 md:mb-6">
               Join Our Wellness Journey
             </h3>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Be part of our mission to bring natural wellness to every household. Discover the difference 
              that quality, care, and commitment can make in your life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                             <button className="w-full sm:w-auto bg-gradient-to-r from-green-800 to-emerald-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 touch-manipulation">
                 Explore Products
               </button>
               <button className="w-full sm:w-auto bg-white text-green-800 px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg border-2 border-green-200 hover:border-green-300 hover:bg-green-200 transition-all duration-300 touch-manipulation">
                 Learn More
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 