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
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-[#6A4DFF] to-indigo-900 text-white overflow-hidden">
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
          <div className="max-w-4xl mx-auto scale-in">
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
              At IT Alliance Tech, we believe technology should empower
              businesses to grow smarter, faster, and stronger. Our mission is
              simple to deliver reliable, customized IT and digital solutions
              that help companies stand out in today’s competitive world. From
              web development and applications to digital marketing and
              consulting, we combine creativity with technical expertise to
              build solutions that drive measurable results. <br />
              <br />
              What makes us different is our people-first approach. We don’t
              just deliver projects — we build partnerships. By understanding
              your goals and challenges, we craft strategies tailored to your
              business needs, ensuring long-term growth and success. With a team
              that values innovation, trust, and collaboration, IT Alliance Tech
              is your partner in turning digital opportunities into real
              business impact.
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
                technology, and strategy, we simplify processes, enhance
                visibility, and deliver measurable results while building
                lasting partnerships that drive meaningful growth and success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg slide-right">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#001a33" }}
              >
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted global technology partner, recognized for
                transforming ideas into impactful digital solutions. We strive
                to create a future where businesses of all sizes harness
                technology to achieve sustainable growth, long-term success, and
                meaningful connections with their customers.
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
