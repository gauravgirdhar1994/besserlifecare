import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6">
              About Besser Life Care
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At Besser Life Care, we believe true wellness begins with nature’s
              wisdom. Our mission is to bring you safe, effective, and
              scientifically backed herbal formulations that support your health
              naturally. Every product we create is rooted in Ayurveda,
              validated by modern research, and crafted with care to help you
              live healthier, longer, and better.
            </p>

            <p className="text-xl text-slate-600 mt-2 font-bold max-w-3xl mx-auto">
              ✨ Pure Ingredients. Trusted Science. Proven Care.
            </p>
            <p className="text-xl text-slate-600 mt-2 max-w-3xl mx-auto">
              Because your health deserves nothing less.
            </p>
            <p className="text-xl text-slate-600 mt-2 max-w-3xl mx-auto">
              With Besser Life Care, you’re not just choosing a product—you’re
              choosing a promise of better living through nature’s healing
              power.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-2xl font-display font-semibold text-slate-800 mb-3">
                  Our Mission
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                At Besser Life Care, our mission is to empower healthier lives
                through safe, effective, and science-backed herbal formulations.
                We are committed to blending the ancient wisdom of Ayurveda with
                modern research to create natural solutions that support
                holistic well-being.
                <p className="text-slate-700 leading-relaxed text-center mt-2">
                  We strive to deliver quality, purity, and trust in every
                  product, ensuring that consumers can experience the true
                  healing power of nature. Guided by innovation, integrity, and
                  compassion, we aim to make herbal healthcare accessible,
                  reliable, and sustainable for everyone.
                </p>
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h2 className="text-2xl font-display font-semibold text-slate-800 mb-3">
                  Our Vision
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-center">
                At Besser Life Care, our vision is to be the pioneer in herbal
                healthcare innovation, where science meets tradition to create
                exceptional products that redefine wellness. We aim to empower
                individuals with high-quality, safe, and effective herbal
                solutions that not only enhance their health but also restore
                harmony with nature.
                <p className="text-slate-700 leading-relaxed text-center">
                  Through research, collaboration, and a commitment to
                  sustainability, we strive to be a leading herbal healthcare
                  provider globally. Delivering trusted, innovative, and
                  sustainable solutions that help people live healthier,
                  happier, and longer lives—naturally.
                </p>
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-semibold text-slate-800 mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Founded with a passion for natural wellness and a commitment
                  to quality, Besser Life Care emerged from the belief that
                  nature provides the best solutions for our health and
                  well-being.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our journey began when our founders discovered the incredible
                  benefits of traditional herbal remedies and modern scientific
                  research. We realized that combining ancient wisdom with
                  contemporary knowledge could create products that truly make a
                  difference in people's lives.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Today, we continue to research, develop, and provide premium
                  herbal products that meet the highest standards of quality,
                  safety, and effectiveness.
                </p>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto">
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
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔬",
                  title: "Quality & Safety",
                  description:
                    "Every product undergoes rigorous testing and quality control to ensure the highest standards.",
                },
                {
                  icon: "🌱",
                  title: "Natural & Sustainable",
                  description:
                    "We prioritize natural ingredients and sustainable practices in all our operations.",
                },
                {
                  icon: "💚",
                  title: "Customer First",
                  description:
                    "Your health and satisfaction are our top priorities in everything we do.",
                },
                {
                  icon: "🔍",
                  title: "Transparency",
                  description:
                    "We believe in complete transparency about our ingredients, processes, and practices.",
                },
                {
                  icon: "🚀",
                  title: "Innovation",
                  description:
                    "Continuously researching and developing new solutions for better wellness outcomes.",
                },
                {
                  icon: "🤝",
                  title: "Integrity",
                  description:
                    "Operating with honesty, ethics, and responsibility in all our business practices.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">{value.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-800 to-emerald-500 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Discover our range of premium herbal products designed to
                enhance your well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-all duration-300"
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
