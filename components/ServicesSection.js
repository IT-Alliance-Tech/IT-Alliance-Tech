import React from 'react';

const ServicesSection = () => {
  const services = [
    'MSP Solutions',
    'AI Chatbot Marketing',
    'Digital Growth Packages',
    'Digital Marketing',
    'Graphics & Media Pricing',
    'Hosting & Cloud',
    'Payment Gateway',
    'Small Combo Growth Packages',
    'Website and Web App Pricing',
    'Youtube Marketing'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span style={{ color: '#004aad' }}>Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#004aad' }}
              ></div>
              <span className="text-lg text-gray-800 font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;