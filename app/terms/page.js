import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            <span style={{ color: '#001a33' }}>Terms & Conditions</span>
          </h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using our website, you agree to comply with and be bound by the following Terms & Conditions. 
                  Please read them carefully before using our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, 
                  restrict, or inhibit the use of this website by any third party.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content, design, images, and materials on this website are the property of IT Alliance Tech unless otherwise stated. 
                  You may not copy, distribute, or reproduce any content without prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  We aim to provide accurate and up-to-date information regarding our services. However, we do not guarantee that 
                  descriptions, pricing, or other content on the website is always error-free.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  We are not liable for any direct, indirect, or incidental damages arising from the use of this website or our services. 
                  Use of the website is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the content, security, 
                  or practices of these external websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to update or modify these Terms & Conditions at any time without prior notice. 
                  Continued use of our website after changes indicates your acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive 
                  jurisdiction of the courts in Bengaluru, Karnataka.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;