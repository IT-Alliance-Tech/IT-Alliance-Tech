"use client";

import React from "react";
import Image from "next/image";
import "../styles/homePage.css";

// ✅ Import your hero image
import heroImage from "../assets/images/herosection.png";

const HeroSection = () => {
  const handleGetStarted = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 bg-white">
      {/* ✅ Left Side - Content */}
      <div className="text-left md:w-1/2 hero-text-section">
        {/* ✅ Add mt-4 on mobile to move heading down slightly */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-5 mt-4 md:mt-0">
          We Build <span className="highlight-blue">Digital Success</span>
        </h1>

        {/* ✅ Added margin-top for extra spacing below heading */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Helping startups grow faster, reach their audience, and stand out with
          powerful online presence.
        </p>

        {/* ✅ Button spaced a little more below paragraph */}
        <button
          className="hero-btn-primary move-down mt-2"
          onClick={handleGetStarted}
        >
          Book a Free Consultation →
        </button>
      </div>

      {/* ✅ Right Side - Image */}
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <div className="floating-image">
          <Image
            src={heroImage}
            alt="Hero section illustration"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
