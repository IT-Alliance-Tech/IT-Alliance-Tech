"use client";

import React, { useEffect } from "react";
import "../styles/bannerSection.css";

const BannerSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      className="py-16 relative overflow-hidden bannerSection"
      style={{ backgroundColor: "#001a33" }}
    >
      {/* Decorative floating shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* ✅ Headline adjusted into three lines */}
        <h2 className="reveal fade-shimmer text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
          Transform your business with our expert digital marketing, <br /> flexible staffing services, and custom web solutions.
        </h2>

        {/* ✅ Description remains unchanged */}
        <p className="reveal fade-up mt-6 text-lg md:text-xl text-white/80">
          Take your business to the next level with our tailored solutions and creative strategies.
        </p>

        {/* ✅ Button remains unchanged */}
        <div className="reveal bounce-in mt-8 flex justify-center">
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
