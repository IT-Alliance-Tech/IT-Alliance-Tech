"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image"; // ✅ Next.js Image
import aboutImg from "../../assets/images/contactUs.png"; // ✅ local image import
import {
  RiSendPlaneLine,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
} from "@remixicon/react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone number validation - only allow 10 digits
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, ""); // Remove non-digits
      if (phoneValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: phoneValue }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.subject
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you for your query! We will get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Enter 10-digit phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: "#004aad" }}
                >
                  Send Query
                  <RiSendPlaneLine className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Right Side - Image */}
            <div>
              <Image
                src={aboutImg} // ✅ imported image
                alt="Contact Us"
                className="rounded-2xl shadow-lg object-cover"      
                priority          // loads fast
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span style={{ color: "#004aad" }}>Get In Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with IT Alliance Tech for cutting-edge web & mobile
              development, digital marketing, SEO, staffing, cybersecurity, and
              training solutions. Need more details? Reach out to us today!
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <RiMapPinLine size={32} style={{ color: "#004aad" }} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Address
              </h3>
              <p className="text-gray-600">Whitefield, Bengaluru-66</p>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <RiPhoneLine size={32} style={{ color: "#004aad" }} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone Numbers
              </h3>
              <div className="space-y-1">
                <p className="text-gray-600">9663265984</p>
                <p className="text-gray-600">7996385985</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <RiMailLine size={32} style={{ color: "#004aad" }} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">hr@italliance.tech</p>
            </div>

            {/* Timings */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <RiTimeLine size={32} style={{ color: "#004aad" }} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Timings
              </h3>
              <div className="space-y-1">
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">9:30am - 6:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
