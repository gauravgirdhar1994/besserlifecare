import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ReturnRefundPolicy = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gradient-to-br from-pink-50 via-white to-coral-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">
            Return & Refund Policy
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
              At Besser Life Care, we strive to provide you with high-quality herbal products. Due to the nature of healthcare and wellness items, 
              we follow strict hygiene and safety standards. Please read our Return & Refund Policy carefully.
            </p>
          </div>

          {/* Eligibility for Returns */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              1. Eligibility for Returns
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-slate-700 mb-3">
                  We accept returns only under the following conditions:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                  <li>You received a wrong product (different from what you ordered)</li>
                  <li>The product was delivered in a damaged or defective condition</li>
                  <li>There are missing items in your order</li>
                </ul>
              </div>
              <div>
                <p className="text-slate-700 mb-3 font-semibold">
                  ⚠️ We do not accept returns if:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                  <li>The product seal is broken, opened, or used (for hygiene and safety reasons)</li>
                  <li>The return request is raised beyond 7 days from the date of delivery</li>
                  <li>The damage is due to misuse, negligence, or improper storage by the customer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Return Process */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              2. Return Process
            </h2>
            <p className="text-slate-700 mb-4">
              If you meet the eligibility criteria:
            </p>
            <ol className="list-decimal list-inside text-slate-600 space-y-2 ml-4">
              <li>Contact us within 48 hours of delivery at support@besserlifecare.com with your order details and photos/videos as proof</li>
              <li>Our support team will verify your claim</li>
              <li>Once approved, we will arrange for pickup through our courier partners (where available) or request you to ship the product back to us</li>
              <li>Returned items must be in unused, unopened condition with original packaging and invoice</li>
            </ol>
          </div>

          {/* Refunds */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              3. Refunds
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>After inspection and approval of the returned product, we will issue a refund</li>
              <li>Refunds will be processed to your original mode of payment within 7–10 business days</li>
              <li>In case of COD (Cash on Delivery) orders, refunds will be issued via bank transfer or store credit</li>
              <li>Shipping charges (if applicable) are non-refundable, except when the error is on our part (wrong/damaged product)</li>
            </ul>
          </div>

          {/* Replacements */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              4. Replacements
            </h2>
            <p className="text-slate-700">
              Instead of a refund, you may choose to receive a replacement product (subject to availability). 
              Replacement requests will be processed at no extra cost in cases of wrong/damaged delivery.
            </p>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              5. Cancellation Policy
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Orders can be cancelled within 6 hours of placing the order or before dispatch, whichever is earlier</li>
              <li>Once shipped, orders cannot be cancelled. You may instead raise a return request if eligible under this policy</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              6. Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              For any return, refund, or cancellation queries, please reach out to:
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

export default ReturnRefundPolicy; 