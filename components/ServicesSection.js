"use client";
import React, { useState } from "react";
import "../styles/serviceSection.css";
import Image from "next/image";

import mspImg from "../assets/images/service1.png";
import aiChatbotImg from "../assets/images/service2.png";
import digitalGrowthImg from "../assets/images/service3.png";
import digitalMarketingImg from "../assets/images/service4.png";
import graphicsImg from "../assets/images/service5.png";
import hostingImg from "../assets/images/service6.png";
import paymentGatewayImg from "../assets/images/service7.png";
import smallComboImg from "../assets/images/service8.png";
import websiteWebAppImg from "../assets/images/service9.png";
import youtubeMarketingImg from "../assets/images/service10.png";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Website & Web Applications",
      description:
        "Modern, secure, and conversion-driven websites that define your digital presence. Custom web apps built to automate, simplify, and accelerate your business operations.",
      image: websiteWebAppImg,
    },
    {
      title: "E-commerce Solutions",
      description:
        "End-to-end e-commerce platforms designed to convert visitors into loyal buyers. Seamless checkout, smart product displays, and intuitive management dashboards.",
      image: digitalGrowthImg,
    },
    {
      title: "Business Software & CRM Solutions",
      description:
        "We build custom CRM, ERP, and workflow automation tools to streamline your internal operations and improve decision-making.",
      image: hostingImg,
    },
    {
      title: "Digital Marketing & Branding",
      description:
        "Performance-focused strategies — from social media and SEO to paid campaigns — to turn attention into action.",
      image: digitalMarketingImg,
    },
    {
      title: "WhatsApp CRM & Business Automation",
      description:
        "Build instant engagement with customers through automated responses, follow-ups, and lead tracking. Your complete sales process simplified — from inquiry to closure.",
      image: aiChatbotImg,
    },
    {
      title: "Resource Staffing & Tech Support",
      description:
        "Skilled professionals who integrate seamlessly into your workflow — on-demand, full-time, or project-based.",
      image: mspImg,
    },
    // Keep the remaining services unchanged
    {
      title: "Graphics & Media Pricing",
      description:
        "Professional graphic design and multimedia services that bring your brand vision to life. Our creative team delivers stunning visuals, engaging videos, and compelling content that captures attention and communicates your message effectively. From logos and branding to marketing materials and digital assets, we create designs that make an impact.",
      image: graphicsImg,
    },
    {
      title: "Payment Gateway",
      description:
        "Secure and seamless payment processing solutions that enhance customer experience and boost sales. Our payment gateway integration supports multiple payment methods, ensures PCI compliance, and provides real-time transaction monitoring. Accept payments globally with confidence, knowing your customers' data is protected with enterprise-grade security.",
      image: paymentGatewayImg,
    },
    {
      title: "Small Combo Growth Packages",
      description:
        "Tailored growth packages specifically designed for small businesses and startups. These cost-effective solutions combine essential digital services including basic website development, social media setup, local SEO, and lead generation tools. Perfect for businesses looking to establish their digital presence without breaking the budget.",
      image: smallComboImg,
    },
    {
      title: "YouTube Marketing",
      description:
        "Comprehensive YouTube marketing strategies that grow your channel and engage your audience. We handle everything from content creation and optimization to audience analysis and monetization strategies. Build a strong video presence, increase subscribers, and turn viewers into customers with our proven YouTube marketing techniques.",
      image: youtubeMarketingImg,
    },
  ];

  // Split cards into 4 uneven columns
  const columns = [
    [services[0], services[1]],
    [services[2], services[3], services[4]],
    [services[5], services[6]],
    [services[7], services[8], services[9]],
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001a33]">
            Services
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Every business has a story. We help you tell it — beautifully, powerfully, and digitally.
          </p>
        </div>

        {/* Grid or Detail */}
        {selectedService === null ? (
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
              gap-6 
              auto-rows-[1fr] 
              items-stretch 
              justify-items-center
            "
          >
            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col justify-between gap-6 h-full"
              >
                {col.map((service, index) => (
                  <div
                    key={index}
                    className="
                      group bg-[#001a33] text-white 
                      rounded-3xl shadow-lg 
                      p-6 flex flex-col items-center text-center justify-center
                      hover:-translate-y-2 hover:shadow-2xl 
                      transition-all duration-500 
                      h-full
                    "
                    style={{
                      minHeight:
                        colIndex % 2 === 0
                          ? index % 2 === 0
                            ? "160px"
                            : "220px"
                          : index % 2 === 0
                          ? "170px"
                          : "220px",
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-300">
                      <Image
                        src={service.image}
                        alt={service.title}
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {service.title}
                    </h3>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-orange-400 font-semibold transition-all duration-300 hover:underline"
                    >
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          // Detail View
          <div className="animate-slideUp bg-[#001a33] rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto border border-gray-200 relative text-white">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-6 text-orange-500 hover:text-red-500 text-3xl font-bold transition-all"
            >
              ×
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-gray-100 rounded-2xl p-4 flex justify-center items-center w-32 h-32 flex-shrink-0">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-20 h-20 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {selectedService.title}
                </h2>
                <p className="leading-relaxed text-justify">
                  {selectedService.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
