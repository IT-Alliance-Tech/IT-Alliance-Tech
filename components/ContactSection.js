"use client";

import React, { useEffect, useState } from "react";
import "../styles/contact.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzXnNa1OurrJoVq6Xv8xLWvBN27l7cmud70ZJUGwDC3C2EcC-6vIy0n99BTXIUkkb-B/exec"; // Replace with your Google Apps Script URL

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

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

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    "WebCraft",
    "CodeCore",
    "ShopSphere",
    "SyncSuite",
    "BrandPulse",
    "CloudAxis",
    "Payment Gateway",
    "Small Combo Growth Packages",
    "Website and Web App Pricing",
    "Youtube Marketing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "");
      if (phoneValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: phoneValue }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setStatus("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    if (formData.phone.length !== 10) {
      setStatus("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => form.append(key, formData[key]));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: form,
        mode: "no-cors", // required for Google Apps Script
      });

      setStatus("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setStatus("Error submitting form. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section py-20">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="contact-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <select
                name="service"
                className="contact-input"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Message here"
                rows="4"
                className="contact-input resize-vertical"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                style={{ backgroundColor: "#001a33" }}
                className="contact-button"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Send Query"}
              </button>

              {status && (
                <p className="mt-2 text-center text-gray-700">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
