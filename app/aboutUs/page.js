"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import aboutImg from "../../assets/images/aboutUs2.png";

const AboutPage = () => {
  // 👇 IntersectionObserver directly in this file
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .scale-in, .slide-left, .slide-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // replay when scrolling back
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className={`relative pt-20 pb-16 text-white overflow-hidden`}
        style={{ backgroundColor: "#001a33" }} // same color as contact
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Increased Image Width */}
          <div className="w-full lg:w-[95%] mx-auto scale-in">
            <Image
              src={aboutImg}
              alt="IT Alliance Team"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover mb-8"
              priority
            />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8 slide-right">
            <span style={{ color: "#001a33" }}>About Us</span>
            <div className="text-xl font-normal mt-6 text-gray-700 leading-relaxed">
              Established in 2021, <strong>IT Alliance Tech</strong> was born
              from a belief that every idea — big or small — deserves a digital
              foundation strong enough to last. <br />
              <br />
              We’ve spent years helping startups, small businesses, and
              enterprises set up their entire ecosystem — from registration to
              growth — ensuring they have the right technology, digital
              presence, and brand identity. <br />
              <br />
              Our focus goes beyond project delivery — we build long-term
              partnerships that grow with our clients’ success. Because
              technology evolves fast, and we make sure your business evolves
              faster.
            </div>
          </h2>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-gray-900">
              <span style={{ color: "#001a33" }}>What Drives Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg slide-left">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#001a33" }}
              >
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that are
                reliable, scalable, and user-friendly. By combining creativity,
                technology, and strategy, we simplify processes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg slide-right">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#001a33" }}
              >
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create a world where technology and business strategy work
                hand in hand, helping organizations operate smarter, scale
                faster, and connect globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 👇 Inline styles for animations */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s ease-in-out;
        }
        .scale-in.active {
          opacity: 1;
          transform: scale(1);
        }

        .slide-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease-in-out;
        }
        .slide-left.active {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease-in-out;
        }
        .slide-right.active {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
