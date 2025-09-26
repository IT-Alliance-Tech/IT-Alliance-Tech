"use client";

import React, { useRef } from 'react';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import Image from 'next/image';

// ✅ Import local images
import healthcareImg from "../assets/images/m1.png";
import ecommerceImg from "../assets/images/m2.png";
import educationImg from "../assets/images/m3.png";
import financeImg from "../assets/images/m4.png";
import realEstateImg from "../assets/images/m5.png";
import manufacturingImg from "../assets/images/m6.png";
import retailImg from "../assets/images/m7.png";
import hospitalityImg from "../assets/images/m8.png";

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
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries <span style={{ color: '#004aad' }}>We Serve</span>
          </h2>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            style={{ backgroundColor: '#004aad' }}
          >
            <RiArrowLeftLine size={24} className="text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            style={{ backgroundColor: '#004aad' }}
          >
            <RiArrowRightLine size={24} className="text-white" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex-none w-64 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
