import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Wellness Coach",
      location: "Mumbai, India",
      rating: 5,
      comment: "Besser Life Care products have transformed my daily wellness routine. The herbal body cream is absolutely amazing - it's natural, effective, and leaves my skin feeling incredible. I recommend it to all my clients!",
      product: "B-Health Herbal Body Massage Cream",
      verified: true,
      image: "👩‍💼"
    },
    {
      id: 2,
      name: "Dr. Meera Patel",
      role: "Dermatologist",
      location: "Delhi, India",
      rating: 5,
      comment: "As a dermatologist, I'm very particular about the products I recommend. Besser Life Care's natural formulations are exceptional. They're gentle yet effective, perfect for sensitive skin.",
      product: "Herbal Face Serum",
      verified: true,
      image: "👩‍⚕️"
    },
    {
      id: 3,
      name: "Anjali Reddy",
      role: "Yoga Instructor",
      location: "Bangalore, India",
      rating: 5,
      comment: "I've been using their wellness tea blend for months now. It's become an essential part of my evening routine. The quality and natural ingredients are exactly what I was looking for.",
      product: "Wellness Tea Blend",
      verified: true,
      image: "🧘‍♀️"
    },
    {
      id: 4,
      name: "Sneha Verma",
      role: "Fitness Trainer",
      location: "Chennai, India",
      rating: 5,
      comment: "The natural hair oil has done wonders for my hair health. It's lightweight, doesn't make my hair greasy, and I can see the difference in just a few weeks. Highly recommended!",
      product: "Natural Hair Oil",
      verified: true,
      image: "💪"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-40 md:h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-green-900 mb-4 md:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Don't just take our word for it. Here's what real customers are saying about their experience 
            with Besser Life Care products.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-12 md:mb-16">
                     <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-green-100 relative overflow-hidden">
             {/* Quote Icon */}
             <div className="absolute top-4 md:top-6 right-4 md:right-6 text-6xl md:text-8xl text-green-200/50">
               "
             </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl mr-3 md:mr-4">
                  {testimonials[currentIndex].image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                                         <h3 className="text-lg md:text-xl font-display font-semibold text-green-800">
                       {testimonials[currentIndex].name}
                     </h3>
                     {testimonials[currentIndex].verified && (
                       <span className="text-green-500 text-sm">✓ Verified</span>
                     )}
                  </div>
                  <p className="text-sm md:text-base text-slate-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 md:mb-6">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-lg md:text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm md:text-base text-slate-600 font-medium">
                  {testimonials[currentIndex].rating}/5
                </span>
              </div>

              {/* Comment */}
              <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 md:mb-6 italic">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              {/* Product Used */}
                             <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-green-100">
                <p className="text-sm md:text-base text-slate-600">
                  <span className="font-medium">Product used:</span> {testimonials[currentIndex].product}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
                     <button
             onClick={prevSlide}
             className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-green-200 text-green-800 hover:bg-green-200 transition-all duration-300 flex items-center justify-center touch-manipulation"
           >
             <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
             </svg>
           </button>

           <button
             onClick={nextSlide}
             className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-green-200 text-green-800 hover:bg-green-200 transition-all duration-300 flex items-center justify-center touch-manipulation"
           >
             <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
             </svg>
           </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-2 mb-8 md:mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
                             className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                 index === currentIndex ? 'bg-green-800 w-4 md:w-6' : 'bg-green-200'
               }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
                 <div className="w-full bg-green-100 rounded-full h-1 md:h-2 mb-8 md:mb-12">
           <div
             className="bg-gradient-to-r from-green-800 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`
            }}
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
                               <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-green-800 mb-1 md:mb-2">
                   {stat.number}
                 </div>
              <div className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
                     <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-green-100 max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-display font-bold text-green-800 mb-4 md:mb-6">
               Join Our Happy Customers
             </h3>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Experience the difference that natural wellness products can make in your life. 
              Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                             <button className="w-full sm:w-auto bg-gradient-to-r from-green-800 to-emerald-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 touch-manipulation">
                 Shop Now
               </button>
               <button className="w-full sm:w-auto bg-white text-green-800 px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-lg border-2 border-green-200 hover:border-green-300 hover:bg-green-200 transition-all duration-300 touch-manipulation">
                 Read More Reviews
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 