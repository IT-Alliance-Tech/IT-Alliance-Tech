"use client";
import React, { useEffect } from "react";
import "../styles/pricingSection.css";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter Pack",
      features: [
        "1 - 3 Pages (Home, About, Contact)",
        "Mobile Responsive Design",
        "Contact Form → Email/Sheets",
        "Google My Business Setup",
      ],
      duration: "15 - 18 Days",
      color: "#2563eb", // blue
    },
    {
      name: "Growth Pack",
      features: [
        "5 Pages (Home, About, Services, Blog, Contact)",
        "Blog Setup + Basic SEO + Sitemap",
        "GMB Optimization",
        "Google Analytics Integration",
      ],
      duration: "20 - 25 Days",
      color: "#16a34a", // green
    },
    {
      name: "Professional Pack",
      features: [
        "5 - 10 Custom Designed Pages",
        "Blog with Categories & Tags",
        "Lead Automation → Google Sheets",
        "On-Page SEO + Analytics + Tag Manager",
        "WhatsApp API Integration",
      ],
      duration: "30 - 35 Days",
      color: "#f59e0b", // amber
    },
    {
      name: "Advanced Pack",
      features: [
        "Custom Web App (CRM Lite + Attendance System)",
        "Workflow Automation (Lead → Auto Follow-up)",
        "Admin Panel + Payment Gateway",
        "Employee & Lead Management Dashboard",
      ],
      duration: "50 - 60 Days",
      color: "#db2777", // pink
    },
    {
      name: "Enterprise Pack",
      features: [
        "Fully Custom Web App",
        "Multi-Role CRM + Product Catalog + Orders",
        "ERP/API Integrations + Payment Gateway",
        "Advanced Reporting & Dashboards",
        "3 Months Support + SEO Optimization",
      ],
      duration: "90 - 110 Days",
      color: "#7c3aed", // purple
    },
  ];

  // IntersectionObserver to trigger animations
  useEffect(() => {
    const cards = document.querySelectorAll(".pricing-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // re-trigger on scroll
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="pricing-section py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span style={{ color: "#001a33" }}>WEBSITE & WEB APP PACKAGES</span>{" "}
          (2025)
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Choose the right package tailored to your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="pricing-card rounded-xl shadow-lg p-6 flex flex-col justify-between  bg-gray-50"
              style={{ borderTop: `6px solid ${pkg.color}` }}
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <ul className="text-left mb-6 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span
                      className="w-2 h-2 mt-2 rounded-full mr-3"
                      style={{ backgroundColor: pkg.color }}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-lg" style={{ color: pkg.color }}>
                Duration: {pkg.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
