import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gradient-to-br from-pink-50 via-white to-coral-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">
            About Besser Life Care
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering your wellness journey with premium natural products crafted with care and backed by science.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-coral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-3">
                Our Mission
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-center">
              To provide accessible, high-quality herbal wellness products that enhance the lives of our customers 
              through natural, sustainable, and scientifically-backed solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-coral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-3">
                Our Vision
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-center">
              To become the most trusted name in natural wellness, leading the industry in quality, innovation, 
              and customer satisfaction while promoting sustainable practices.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-semibold text-slate-800 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-coral-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Founded with a passion for natural wellness and a commitment to quality, Besser Life Care emerged 
                from the belief that nature provides the best solutions for our health and well-being.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our journey began when our founders discovered the incredible benefits of traditional herbal remedies 
                and modern scientific research. We realized that combining ancient wisdom with contemporary knowledge 
                could create products that truly make a difference in people's lives.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Today, we continue to research, develop, and provide premium herbal products that meet the highest 
                standards of quality, safety, and effectiveness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-pink-100 to-coral-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-6xl">🌿</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-semibold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-coral-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔬",
                title: "Quality & Safety",
                description: "Every product undergoes rigorous testing and quality control to ensure the highest standards."
              },
              {
                icon: "🌱",
                title: "Natural & Sustainable",
                description: "We prioritize natural ingredients and sustainable practices in all our operations."
              },
              {
                icon: "💚",
                title: "Customer First",
                description: "Your health and satisfaction are our top priorities in everything we do."
              },
              {
                icon: "🔍",
                title: "Transparency",
                description: "We believe in complete transparency about our ingredients, processes, and practices."
              },
              {
                icon: "🚀",
                title: "Innovation",
                description: "Continuously researching and developing new solutions for better wellness outcomes."
              },
              {
                icon: "🤝",
                title: "Integrity",
                description: "Operating with honesty, ethics, and responsibility in all our business practices."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-coral-50">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-coral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">{value.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-semibold text-slate-800 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-coral-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "Chief Scientific Officer",
                description: "Leading our research and development with over 15 years of experience in herbal medicine."
              },
              {
                name: "Rajesh Kumar",
                role: "Head of Operations",
                description: "Ensuring quality and efficiency in every aspect of our production and delivery processes."
              },
              {
                name: "Anjali Patel",
                role: "Customer Experience Director",
                description: "Dedicated to providing exceptional service and building lasting relationships with our customers."
              }
            ].map((member, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-coral-50">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-coral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-coral-500 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-display font-semibold mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover our range of premium herbal products designed to enhance your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage; 