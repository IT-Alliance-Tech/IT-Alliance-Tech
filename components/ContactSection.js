"use client";

import React, { useEffect } from "react";
import "../styles/Contact.css";

const ContactSection = () => {
  // You can keep your existing useState, handleChange, validateForm, handleSubmit code

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

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

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="contact-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left half - Title and Description */}
          <div className="animate-on-scroll fade-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Business Into The{" "}
              <span style={{ color: "#001a33" }}>Best</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's Create Business Empire
            </p>
          </div>

          {/* Right half - Form */}
          <div className="animate-on-scroll fade-right bg-gray-50 p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact-input"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="contact-input"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-input"
                />
              </div>

              {/* Service Selection */}
              <div>
                <select name="service" className="contact-input">
                  <option value="">Select Service</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message here"
                  rows="4"
                  className="contact-input resize-vertical"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" style={{backgroundColor: "#001a33"}} className="contact-button">
                Send Query
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
