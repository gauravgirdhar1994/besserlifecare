import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const TermsConditions = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-sky-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">
            Terms & Conditions
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
              Welcome to Besser Life Care ("Company", "we", "our", "us"). These Terms & Conditions ("Terms") govern your use of our website, 
              purchase of herbal products, and interaction with our services. By accessing or using our website, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              1. Eligibility
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>You must be 18 years or older to use this website or purchase our products</li>
              <li>By using our services, you represent that you are legally competent to enter into a binding agreement under Indian law</li>
            </ul>
          </div>

          {/* Product Information & Medical Disclaimer */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              2. Product Information & Medical Disclaimer
            </h2>
            <div className="space-y-4 text-slate-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our products are herbal formulations and dietary supplements, not intended to diagnose, treat, cure, or prevent any disease</li>
                <li>Information provided on the website (blogs, descriptions, articles, etc.) is for educational purposes only and should not be considered medical advice</li>
                <li>Customers should consult a qualified healthcare professional before starting any new supplement, especially if pregnant, nursing, or having pre-existing medical conditions</li>
              </ul>
            </div>
          </div>

          {/* Orders & Payments */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              3. Orders & Payments
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>All orders placed are subject to acceptance and availability</li>
              <li>Prices displayed are in Indian Rupees (₹) and inclusive of applicable taxes (unless stated otherwise)</li>
              <li>Payment can be made via secure online gateways (credit/debit cards, UPI, net banking, wallets, etc.). We do not store payment details</li>
              <li>Cash on Delivery (COD) may be available for select locations</li>
            </ul>
          </div>

          {/* Shipping & Delivery */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              4. Shipping & Delivery
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Orders are shipped as per our Shipping Policy</li>
              <li>Delivery timelines are estimates and may vary due to factors beyond our control (courier delays, natural events, government restrictions)</li>
              <li>Risk of loss and title for products pass to you upon delivery</li>
            </ul>
          </div>

          {/* Returns, Refunds & Cancellations */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              5. Returns, Refunds & Cancellations
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Returns, refunds, and cancellations are governed by our Return & Refund Policy</li>
              <li>Due to hygiene and safety reasons, opened or used products cannot be returned</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              6. User Responsibilities
            </h2>
            <p className="text-slate-700 mb-4">
              By using our website, you agree that you will not:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Use the site for any unlawful purpose</li>
              <li>Upload, post, or transmit viruses, harmful code, or offensive content</li>
              <li>Copy, modify, or distribute our content without prior written consent</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-slate-700">
              All content on this website, including text, images, logos, graphics, product descriptions, and designs, are the property of 
              Besser Life Care and protected under Indian copyright and trademark laws. You may not use, reproduce, or distribute our content 
              without prior written approval.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-slate-700 mb-4">
              To the maximum extent permitted by law, we are not liable for any:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Health issues arising from misuse, overuse, or unsupervised consumption of products</li>
              <li>Our total liability for any claim shall not exceed the amount paid by you for the specific product</li>
            </ul>
          </div>

          {/* Indemnity */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              9. Indemnity
            </h2>
            <p className="text-slate-700">
              You agree to indemnify and hold harmless Besser Life Care, its employees, and affiliates from any claims, damages, or expenses 
              arising from your misuse of our website or products.
            </p>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              10. Privacy
            </h2>
            <p className="text-slate-700">
              Your personal data is collected and processed as per our Privacy Policy, in line with the Information Technology Act, 2000 and 
              Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
          </div>

          {/* Governing Law & Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              11. Governing Law & Dispute Resolution
            </h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
              <li>These Terms are governed by the laws of India</li>
              <li>In case of disputes, the matter shall be subject to the jurisdiction of the courts at [Insert City/State]</li>
            </ul>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-slate-700">
              We reserve the right to update or modify these Terms at any time. Updated terms will be posted on this page with the "Last Updated" date. 
              Continued use of the website constitutes acceptance of changes.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
              13. Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              For queries regarding these Terms & Conditions, please contact:
            </p>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="space-y-2 text-slate-700">
                <p><strong>Besser Life Care</strong></p>
                <p>Email: legal@besserlifecare.com</p>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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

export default TermsConditions; 