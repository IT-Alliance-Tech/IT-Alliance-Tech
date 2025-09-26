import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            <span style={{ color: '#004aad' }}>Privacy Policy</span>
          </h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>Last Updated:</strong> 04-12-2023
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to IT Alliance Tech ("we," "us," or "our"). This Privacy Policy is designed to help you understand 
                  how we collect, use, disclose, and safeguard your personal information when you use our services or interact with us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1a. Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you engage with IT Alliance Tech as a partner, we may collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Name</li>
                  <li>Phone Number</li>
                  <li>Email-id: contact@italliance.tech</li>
                  <li>Address: Your address</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1b. Business Information</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are Made in India & an Indian technology company which allows businesses to build their digital presence 
                  with professional solutions. Users aren't required to have extensive technical knowledge. Our comprehensive 
                  approach lets you create powerful digital solutions for yourself or your clients. IT Alliance Tech was started 
                  in 2021 by its founder who has 15+ years of experience in technology development and digital services. 
                  The company was started with a vision of making businesses simplify their digital transformation journey.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Non-Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We may also collect non-personal information, such as aggregated and anonymized data, for statistical and analytical purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use the collected information for the following purposes: to provide and improve our services, 
                  communicate with you about your projects, process payments, and ensure the security of our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may share your information with trusted third-party service providers who assist us in operating our 
                  website and conducting our business, as long as they agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We take reasonable measures to protect your personal information from unauthorized access, disclosure, 
                  alteration, and destruction using industry-standard security practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Choices</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
                  <li><strong>Correction:</strong> Request correction of your personal information if it is inaccurate.</li>
                  <li><strong>Deletion:</strong> Request the deletion of your personal information.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be effective when posted on our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at 
                  contact@italliance.tech
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

export default PrivacyPage;