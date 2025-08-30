import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ShippingPolicy = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gradient-to-br from-pink-50 via-white to-coral-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">
            Shipping Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last Updated: January 1, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <div>
            <p className="text-slate-700 leading-relaxed">
              At Besser Life Care, we are committed to delivering your herbal products in a safe, timely, and reliable manner. 
              Please read our Shipping Policy carefully to understand how we process and ship orders.
            </p>
          </div>

          {/* Order Processing */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              1. Order Processing
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Orders are processed within 1-2 business days after payment confirmation</li>
              <li>Orders placed on weekends or public holidays will be processed on the next business day</li>
              <li>You will receive an order confirmation email/SMS once your order is successfully placed</li>
            </ul>
          </div>

          {/* Shipping & Delivery Timelines */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              2. Shipping & Delivery Timelines
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>We ship orders across India through trusted courier and logistics partners</li>
              <li>Estimated delivery time is 3-7 business days, depending on your location</li>
              <li>In remote or rural areas, delivery may take longer than the standard timelines</li>
              <li>Once shipped, you will receive a tracking ID to monitor your order</li>
            </ul>
          </div>

          {/* Shipping Charges */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              3. Shipping Charges
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Free Shipping is available on orders above ₹999</li>
              <li>For orders below this amount, a standard shipping fee of ₹99 will apply</li>
              <li>Any promotional free shipping offers will be displayed at checkout</li>
            </ul>
          </div>

          {/* Delivery Restrictions */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              4. Delivery Restrictions
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>We currently ship only within India</li>
              <li>Orders cannot be delivered to P.O. boxes or restricted areas where courier access is not available</li>
              <li>For bulk orders or customized delivery requests, please contact us at support@besserlifecare.com</li>
            </ul>
          </div>

          {/* Delayed or Failed Deliveries */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              5. Delayed or Failed Deliveries
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Delays may occur due to circumstances beyond our control (e.g., natural calamities, strikes, courier delays, government restrictions). We will notify you in such cases</li>
              <li>If delivery fails due to incorrect address, unavailability of recipient, or repeated failed attempts, the order may be returned to us. Reshipping charges will apply</li>
            </ul>
          </div>

          {/* Damaged or Missing Products */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              6. Damaged or Missing Products
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>If your order is delivered in a damaged condition or with missing items, please contact us within 48 hours of receiving the package at support@besserlifecare.com with photos and order details</li>
              <li>We will investigate and provide a replacement or refund as per our Return & Refund Policy</li>
            </ul>
          </div>

          {/* International Shipping */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              7. International Shipping
            </h2>
            <p className="text-slate-700">
              Currently, we do not offer international shipping. Updates on global delivery options will be shared on our website.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              8. Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              For shipping-related queries, please reach out to us:
            </p>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="space-y-2 text-slate-700">
                <p><strong>Besser Life Care</strong></p>
                <p>Email: support@besserlifecare.com</p>
                <p>Phone: +91 [Insert Phone Number]</p>
                <p>Address: [Insert Business Address]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-coral-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPolicy; 