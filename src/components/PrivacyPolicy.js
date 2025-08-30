import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gradient-to-br from-pink-50 via-white to-coral-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Effective Date: January 1, 2024 | Last Updated: January 1, 2024
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-slate-700 leading-relaxed">
                Besser Life Care ("Company", "we", "our", or "us") is committed to protecting the privacy of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with applicable 
                Indian laws, including the Information Technology Act, 2000, the SPDI Rules, 2011, and the Digital Personal Data Protection Act, 2023.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-slate-700 mb-4">
                We may collect the following categories of information:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    1.1 Personal Information:
                  </h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                    <li>Name, email address, phone number, billing/shipping address</li>
                    <li>Payment details (processed securely by third-party payment gateways; we do not store card details)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    1.2 Sensitive Personal Data/Information (SPDI):
                  </h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                    <li>Health-related information (if you choose to share it for product recommendations)</li>
                    <li>Any information relating to physical, physiological, or mental health condition</li>
                    <li>Such data is collected only with your explicit consent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    1.3 Non-Personal Information:
                  </h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                    <li>IP address, browser type, device details, operating system, browsing patterns, and other analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Purpose of Collection */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                2. Purpose of Collection and Use
              </h2>
              <p className="text-slate-700 mb-4">
                Your information is used for the following lawful purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>To process, ship, and deliver your orders</li>
                <li>To provide customer support and respond to queries</li>
                <li>To send order updates, product information, and promotional offers (with your consent)</li>
                <li>To improve our website, services, and user experience</li>
                <li>To comply with legal and regulatory requirements under Indian law</li>
              </ul>
            </div>

            {/* Consent */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                3. Consent
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  By using our website, you consent to the collection and use of your information in accordance with this Privacy Policy.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For sensitive personal data (such as health-related details), we obtain explicit consent before collection and use</li>
                  <li>You may withdraw your consent at any time by writing to us at privacy@besserlifecare.com, though this may limit our ability to provide services</li>
                </ul>
              </div>
            </div>

            {/* Disclosure */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                4. Disclosure of Information
              </h2>
              <p className="text-slate-700 mb-4">
                We do not sell, rent, or trade your personal information. Data may be disclosed only to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Payment processors, logistics partners, IT support, marketing partners, solely for service fulfillment</li>
                <li><strong>Regulatory or Legal Authorities:</strong> When required under applicable laws, legal proceedings, or to protect our rights</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                5. Data Retention
              </h2>
              <p className="text-slate-700">
                We retain personal data only for as long as it is required for the purposes stated in this Policy, or as mandated by Indian law. 
                Once the purpose is fulfilled, the data is securely deleted or anonymized.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                6. Security Practices
              </h2>
              <p className="text-slate-700 mb-4">
                In compliance with the IT Act, 2000 and SPDI Rules, 2011, we adopt reasonable security practices and procedures, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Encryption and secure servers</li>
                <li>Restricted access to personal data</li>
                <li>Regular monitoring of IT systems</li>
              </ul>
              <p className="text-slate-700 mt-4">
                However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute protection.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                7. Your Rights (under DPDP Act, 2023)
              </h2>
              <p className="text-slate-700 mb-4">
                As a Data Principal, you have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct or update inaccurate or incomplete data</li>
                <li>Withdraw consent for processing of sensitive personal data</li>
                <li>Request erasure of your personal information, subject to legal requirements</li>
                <li>Nominate another individual to exercise your rights in case of incapacity or death</li>
              </ul>
              <p className="text-slate-700 mt-4">
                To exercise these rights, please contact us at privacy@besserlifecare.com.
              </p>
            </div>

            {/* Third Party Links */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-slate-700">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices. 
                Please review their policies before sharing personal data.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-slate-700">
                We may update this Privacy Policy to reflect changes in law or business practices. Updates will be posted on this page 
                with the revised "Effective Date."
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-slate-800 mb-4">
                10. Contact Information
              </h2>
              <p className="text-slate-700 mb-4">
                If you have questions, concerns, or complaints regarding this Privacy Policy or the handling of your personal data, please contact:
              </p>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="space-y-2 text-slate-700">
                  <p><strong>Besser Life Care</strong></p>
                  <p>Data Protection Officer (DPO): [Insert Name]</p>
                  <p>Email: privacy@besserlifecare.com</p>
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

export default PrivacyPolicy; 