"use client";

import React, { useEffect, useRef } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import healthcareImg from "../assets/images/m1.png";
import ecommerceImg from "../assets/images/m2.png";
import educationImg from "../assets/images/m3.png";
import financeImg from "../assets/images/m4.png";
import realEstateImg from "../assets/images/m5.png";
import manufacturingImg from "../assets/images/m6.png";
import retailImg from "../assets/images/m7.png";
import hospitalityImg from "../assets/images/m8.png";
import "../styles/industriesSection.css"; // ✅ new CSS file

const IndustriesSection = () => {
  const scrollRef = useRef(null);

  const industries = [
    { name: "Healthcare", image: healthcareImg },
    { name: "E-commerce", image: ecommerceImg },
    { name: "Education", image: educationImg },
    { name: "Finance", image: financeImg },
    { name: "Real Estate", image: realEstateImg },
    { name: "Manufacturing", image: manufacturingImg },
    { name: "Retail", image: retailImg },
    { name: "Hospitality", image: hospitalityImg },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // IntersectionObserver for reveal animation
  useEffect(() => {
    const cards = document.querySelectorAll(".industry-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 150); // stagger effect
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="py-20 bg-gray-50 industriesSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries <span style={{ color: "#001a33" }}>We Serve</span>
          </h2>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="scroll-btn left-btn"
            style={{ backgroundColor: "#001a33" }}
          >
            <RiArrowLeftLine size={24} className="text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="scroll-btn right-btn"
            style={{ backgroundColor: "#001a33" }}
          >
            <RiArrowRightLine size={24} className="text-white" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide mx-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card flex-none w-64 bg-white rounded-lg shadow-lg"
              >
                <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
