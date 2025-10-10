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
      title: "MSP Solutions",
      description:
        "Comprehensive Managed Service Provider solutions that streamline your IT operations. We provide 24/7 monitoring, maintenance, and support for your entire IT infrastructure, ensuring maximum uptime and optimal performance. Our proactive approach prevents issues before they impact your business, allowing you to focus on growth while we handle the technology.",
      image: mspImg,
    },
    {
      title: "AI Chatbot Marketing",
      description:
        "Revolutionary AI-powered chatbot solutions that transform customer engagement and drive sales. Our intelligent chatbots provide instant customer support, qualify leads, and guide prospects through your sales funnel 24/7. Increase conversion rates, reduce response times, and deliver personalized experiences that keep customers coming back.",
      image: aiChatbotImg,
    },
    {
      title: "Digital Growth Packages",
      description:
        "Complete digital transformation packages designed to accelerate your business growth. Our comprehensive approach includes website optimization, social media management, content marketing, and performance analytics. We create integrated strategies that build brand awareness, generate quality leads, and maximize your return on investment.",
      image: digitalGrowthImg,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns that amplify your brand presence and drive measurable results. From SEO and PPC advertising to social media marketing and email campaigns, we create data-driven strategies that reach your target audience at the right time with the right message, maximizing engagement and conversions.",
      image: digitalMarketingImg,
    },
    {
      title: "Graphics & Media Pricing",
      description:
        "Professional graphic design and multimedia services that bring your brand vision to life. Our creative team delivers stunning visuals, engaging videos, and compelling content that captures attention and communicates your message effectively. From logos and branding to marketing materials and digital assets, we create designs that make an impact.",
      image: graphicsImg,
    },
    {
      title: "Hosting & Cloud",
      description:
        "Reliable, secure, and scalable hosting and cloud solutions that keep your business running smoothly. Our infrastructure services include web hosting, cloud migration, data backup, and disaster recovery. We ensure your applications and data are always accessible, protected, and performing at peak efficiency with 99.9% uptime guarantee.",
      image: hostingImg,
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
      title: "Website and Web App Pricing",
      description:
        "Custom website and web application development services that deliver exceptional user experiences. From responsive websites to complex web applications, we build scalable, secure, and user-friendly solutions. Our development process includes modern frameworks, mobile optimization, and ongoing maintenance to ensure your digital platform evolves with your business.",
      image: websiteWebAppImg,
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
            Powering businesses with technology, growth, and creativity 🚀
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
