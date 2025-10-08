"use client";
import React, { useEffect, useState } from "react";
import "../styles/serviceSection.css"; // Import custom CSS
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
  const [serviceShow, setServiceShow] = useState({
    name: "",
    desc: "",
    display: false,
  });

  return (
    <section id="services" className="services-section py-20 ">
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
        <div className="relative min-h-screen flex justify-center items-center bg-gray-100 rounded-2xl px-6 py-10 overflow-hidden">
          {serviceShow?.display === false ? (
            <div
              key="services"
              className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl animate-fadeIn"
            >
              {services?.map((service, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setServiceShow({
                      name: service.title,
                      desc: service.description,
                      display: true,
                    })
                  }
                  className="service-card flex-col bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-transform duration-300"
                >
                  <div className="icon-circle w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    {/* You can add an icon here later */}
                  </div>
                  <h3 className="service-title text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <div
              key="card"
              className="opacity-0 animate-slideUp w-full flex justify-center transition-all duration-500"
            >
              <div className="max-w-[750px] w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-200 animate-fadeIn">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {serviceShow.name}
                  </h2>
                  <button
                    onClick={() =>
                      setServiceShow({ ...serviceShow, display: false })
                    }
                    className="text-sm font-medium text-gray-900 hover:text-red-500 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {serviceShow.desc}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

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
