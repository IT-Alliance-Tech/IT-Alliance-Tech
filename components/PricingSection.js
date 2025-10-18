"use client";
import React, { useEffect } from "react";
import "../styles/pricingSection.css";

const PricingSection = () => {
  const packages = [
    {
      name: "Early-Stage Startup (0–10 Members)",
      subtitle: "“Let’s build your foundation.”",
      needs: [
        "Brand & Logo",
        "Website / Landing Page",
        "Quick E-commerce Setup",
        "Basic CRM + WhatsApp",
        "Starter Digital Marketing",
        "MSP Lite Support",
      ],
      why: "Your website acts as a 24/7 salesperson, capturing leads efficiently.",
      color: "#2563eb",
    },
    {
      name: "Growing Startup (10–50 Members)",
      subtitle: "“Let’s scale your reach and processes.”",
      needs: [
        "Website / Business Portal",
        "Marketing + Lead Campaigns",
        "WhatsApp CRM Automation",
        "SEO & Keywords",
        "MSP Standard Support",
      ],
      why: "Automation and marketing work together to bring leads and track them.",
      color: "#16a34a",
    },
    {
      name: "SMB (50–2000 Members)",
      subtitle: "“Let’s digitize your operations and expand your brand.”",
      needs: [
        "Enterprise Website / Web App",
        "CRM & Sales Automation",
        "Custom ERP / Software",
        "Digital Marketing + Ads",
        "MSP Pro Support",
      ],
      why: "Efficiency increases, customers stay connected, and management gets real-time insights.",
      color: "#f59e0b",
    },
    {
      name: "Mid-Enterprise",
      subtitle: "“Let’s integrate systems and expand globally.”",
      needs: [
        "ERP + CRM Integration",
        "Data Analytics & Reporting",
        "Marketing Automation",
        "Multi-location Branding",
        "MSP Advanced Support",
      ],
      why: "Data-driven insights and consistent digital presence drive growth.",
      color: "#db2777",
    },
    {
      name: "Enterprise & Beyond",
      subtitle: "“Let’s modernize, automate, and sustain global growth.”",
      needs: [
        "Enterprise Software & Cloud",
        "AI & Predictive Analytics",
        "Global Campaigns",
        "Advanced CRM & Workflows",
        "MSP Enterprise Support",
      ],
      why: "Operate at scale globally, fully connected and automated.",
      color: "#7c3aed",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".pricing-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
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
              className="pricing-card rounded-xl shadow-lg p-6 flex flex-col bg-gray-50"
              style={{ borderTop: `6px solid ${pkg.color}` }}
            >
              <h3
                className="text-2xl font-bold mb-1"
                style={{ color: "#001a33" }}
              >
                {pkg.name}
              </h3>
              <p className="text-lg italic text-gray-700 mb-4">{pkg.subtitle}</p>

              <div className="text-left mb-4">
                <h4 className="font-semibold mb-2">What You Need:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {pkg.needs.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-left">
                <h4 className="font-semibold mb-2">Why It Matters:</h4>
                <p className="text-gray-700">{pkg.why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
