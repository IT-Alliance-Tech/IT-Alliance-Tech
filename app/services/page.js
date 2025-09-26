import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// ✅ Import all service images
import mspImg from "../../assets/images/service1.png";
import aiChatbotImg from "../../assets/images/service2.png";
import digitalGrowthImg from "../../assets/images/service3.png";
import digitalMarketingImg from "../../assets/images/service4.png";
import graphicsImg from "../../assets/images/service5.png";
import hostingImg from "../../assets/images/service6.png";
import paymentGatewayImg from "../../assets/images/service7.png";
import smallComboImg from "../../assets/images/service8.png";
import websiteWebAppImg from "../../assets/images/service9.png";
import youtubeMarketingImg from "../../assets/images/service10.png";

const ServicesPage = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100">
            Empowering Your Digital Growth
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`shadow-lg p-6 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="rounded-2xl shadow-lg w-full aspect-w-16 aspect-h-9 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    <span style={{ color: "#004aad" }}>{service.title}</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
