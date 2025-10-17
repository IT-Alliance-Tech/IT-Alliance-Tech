"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import aboutImg from "../assets/images/aboutUs.png";
import Image from "next/image";
import "../styles/aboutUs.css";
import useScrollAnimation from "./useScrollAnimation";

const AboutSection = () => {
  useScrollAnimation(".about-animate", "animate");

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
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 aboutSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image (slide in from right) */}
          <div className="order-2 lg:order-1 reveal slide-right about-image">
            <Image
              src={aboutImg}
              alt="IT Alliance Team"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Right - Text (flip animation) */}
          <div className="order-1 lg:order-2 reveal flip about-text">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span style={{ color: "#001a33" }}>Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Established in 2021, IT Alliance Tech was born from a belief that
              every idea — big or small — deserves a digital foundation strong
              enough to last.We’ve spent years helping startups, small businesses, and
              enterprises set up their entire ecosystem — from registration to growth — ensuring they have the right technology, digital
              presence, and brand identity .Our focus goes beyond project delivery — we build long-term
              partnerships that grow with our clients’ success.Because technology evolves fast, and we make sure your business
              evolves faster.
            </p>
            <Link
              href="/aboutUs"
              className="px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{ backgroundColor: "#001a33" }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
