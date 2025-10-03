"use client";
import React from "react";
import "../styles/serviceSection.css"; // Import custom CSS

const ServicesSection = () => {
  const services = [
    "MSP Solutions",
    "AI Chatbot Marketing",
    "Digital Growth Packages",
    "Digital Marketing",
    "Graphics & Media Pricing",
    "Hosting & Cloud",
    "Payment Gateway",
    "Small Combo Growth Packages",
    "Website and Web App Pricing",
    "Youtube Marketing",
  ];

  return (
    <section id="services" className="services-section py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block section-title">
            <span style={{ color: "#001a33" }}>Services</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Powering businesses with technology, growth, and creativity 🚀
          </p>
        </div>

        {/* Services List */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll">
              <div className="icon-circle"></div>
              <h3 className="service-title">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
