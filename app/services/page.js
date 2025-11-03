"use client";

import React, { useEffect } from "react";
import Image from "next/image";

// ✅ Import service images
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
      id: "webcraft",
      title: "WebCraft: Building Digital Identities That Perform",
      description:
        "Your website isn’t just a link — it’s your brand’s first handshake. At IT Alliance Tech, we design and develop high-performance websites that blend creativity, speed, and scalability. Whether you’re a startup or a global brand, we craft experiences that convert visitors into loyal customers.",
      points: [
        "Bespoke & responsive design",
        "SEO + performance optimized",
        "Integrated with CRM, analytics & lead tracking",
        "Built to evolve with your business",
      ],
      image: mspImg,
    },
    {
      id: "codecore",
      title: "CodeCore: Custom Web Apps for Smarter Businesses",
      description:
        "From concept to code — we build what your business needs. Our team delivers secure, scalable web applications designed to automate processes, connect users, and unlock growth. We turn complex workflows into simple, digital-first systems.",
      points: [
        "Enterprise dashboards",
        "Client & partner portals",
        "Automation systems",
        "Business process management tools",
      ],
      image: aiChatbotImg,
    },
    {
      id: "shopsphere",
      title: "ShopSphere: E-Commerce That Converts",
      description:
        "Where technology meets buying behavior. We design beautiful and high-performing online stores that make shopping easy and rewarding. From small catalogs to multi-vendor setups — your brand deserves a global storefront.",
      points: [
        "Shopify / WooCommerce / Magento builds",
        "Payment gateway & logistics integration",
        "Smart inventory & product management",
        "Conversion-driven design",
      ],
      image: digitalGrowthImg,
    },
    {
      id: "syncsuite",
      title: "SyncSuite: CRM & Business Automation",
      description:
        "Run your business, don’t chase it. We help you take control of sales, marketing, and support — all in one place. Our CRM & automation tools eliminate manual chaos and help you focus on growth.",
      points: [
        "Lead & customer management",
        "Sales pipeline automation",
        "Integrated WhatsApp & Email CRM",
        "Real-time analytics & tracking",
      ],
      image: digitalMarketingImg,
    },
    {
      id: "brandpulse",
      title: "BrandPulse: Digital Marketing That Moves People",
      description:
        "We don’t just promote — we position you to lead. Through creativity and analytics, we build your brand’s story across platforms and audiences. From search to social, we ensure your voice reaches the right people at the right time.",
      points: [
        "SEO & SEM growth campaigns",
        "Social media strategy & ads (Meta, Google, LinkedIn)",
        "Content creation & performance tracking",
        "WhatsApp & Email automation marketing",
      ],
      image: graphicsImg,
    },
    {
      id: "cloudaxis",
      title: "CloudAxis: Managed IT & Cloud Solutions",
      description:
        "Let us handle the tech — you focus on innovation. We deliver 24×7 managed IT services and scalable cloud support that empower your business to run smoothly. Stay secure, connected, and future-ready.",
      points: [
        "Cloud setup & migration",
        "Server & network monitoring",
        "Data backup & security",
        "IT resource management",
      ],
      image: hostingImg,
    },
    {
      id: "payment-gateway",
      title: "Payment Gateway",
      description:
        "Secure and seamless payment processing solutions that enhance customer experience and boost sales. Our payment gateway integration supports multiple payment methods, ensures PCI compliance, and provides real-time transaction monitoring.",
      points: [
        "Supports multiple payment methods",
        "PCI compliance ensured",
        "Real-time transaction monitoring",
        "Easy integration with websites & apps",
      ],
      image: paymentGatewayImg,
    },
    {
      id: "small-combo",
      title: "Small Combo Growth Packages",
      description:
        "Tailored growth packages specifically designed for small businesses and startups. These cost-effective solutions combine essential digital services including basic website development, social media setup, local SEO, and lead generation tools.",
      points: [
        "Basic website development",
        "Social media setup & optimization",
        "Local SEO integration",
        "Lead generation tools",
      ],
      image: smallComboImg,
    },
    {
      id: "website-webapp",
      title: "Website and Web App Pricing",
      description:
        "Custom website and web application development services that deliver exceptional user experiences. From responsive websites to complex web applications, we build scalable, secure, and user-friendly solutions.",
      points: [
        "Responsive & mobile-first design",
        "Secure & scalable architecture",
        "Custom web applications",
        "Ongoing maintenance & updates",
      ],
      image: websiteWebAppImg,
    },
    {
      id: "youtube-marketing",
      title: "YouTube Marketing",
      description:
        "Comprehensive YouTube marketing strategies that grow your channel and engage your audience. We handle everything from content creation and optimization to audience analysis and monetization strategies.",
      points: [
        "Content creation & optimization",
        "Channel growth strategy",
        "Monetization & analytics",
        "Audience engagement campaigns",
      ],
      image: youtubeMarketingImg,
    },
  ];

  useEffect(() => {
    const revealElements = document.querySelectorAll(".animate-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.25 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative pt-20 pb-16 text-white"
        style={{ backgroundColor: "#001a33" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">Empowering Your Digital Growth</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6 rounded-2xl shadow-lg ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ backgroundColor: "#fefefe" }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div
                    className={`rounded-2xl overflow-hidden w-full shadow-xl animate-reveal ${
                      index % 4 === 0
                        ? "zoom-in"
                        : index % 4 === 1
                        ? "float-in"
                        : index % 4 === 2
                        ? "rotate-in"
                        : "fade-in"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[320px] md:h-[380px] object-contain rounded-2xl"
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`space-y-4 animate-reveal ${
                    index % 2 === 0 ? "slide-from-left" : "slide-from-right"
                  } ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <h2
                    className="text-3xl font-bold text-gray-900"
                    style={{ color: "#001a33" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  {service.points && (
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      {service.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        .animate-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .animate-reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Image Animations */
        .zoom-in {
          transform: scale(0.85);
        }
        .zoom-in.active {
          transform: scale(1);
        }

        .float-in {
          transform: translateY(50px);
        }
        .float-in.active {
          transform: translateY(0);
        }

        .rotate-in {
          transform: rotate(-5deg) scale(0.9);
        }
        .rotate-in.active {
          transform: rotate(0) scale(1);
        }

        .fade-in {
          opacity: 0;
        }
        .fade-in.active {
          opacity: 1;
        }

        /* Text Animations */
        .slide-from-left {
          transform: translateX(-60px);
        }
        .slide-from-left.active {
          transform: translateX(0);
        }

        .slide-from-right {
          transform: translateX(60px);
        }
        .slide-from-right.active {
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
