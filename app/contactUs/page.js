"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import aboutImg from "../../assets/images/contactUs.png";
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

  const [animate, setAnimate] = useState(false);

  // Trigger animations when component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for your query! We will get back to you soon.");
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
      <section
        className={`relative pt-20 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white transition-opacity duration-1000 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold transform transition-transform duration-1000 ease-out ${
              animate ? "translate-y-0" : "-translate-y-10 opacity-0"
            }`}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Form */}
            <div
              className={`bg-gray-50 p-8 rounded-2xl shadow-lg transform transition-all duration-1000 ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "phone", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)} *
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}

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
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: "#001a33" }}
                >
                  Send Query
                  <RiSendPlaneLine className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Right Side - Image */}
            <div
              className={`transform transition-all duration-1000 ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <Image
                src={aboutImg}
                alt="Contact Us"
                className="rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span style={{ color: "#001a33" }}>Get In Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with IT Alliance Tech for cutting-edge web & mobile
              development, digital marketing, SEO, staffing, cybersecurity, and
              training solutions. Need more details? Reach out to us today!
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: RiMapPinLine,
                title: "Address",
                desc: "Whitefield, Bengaluru-66",
              },
              {
                icon: RiPhoneLine,
                title: "Phone Numbers",
                desc: ["9663265984", "7996385985"],
              },
              { icon: RiMailLine, title: "Email", desc: "hr@italliance.tech" },
              {
                icon: RiTimeLine,
                title: "Timings",
                desc: ["Monday - Friday", "9:30am - 6:30pm"],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-1000 delay-${
                  idx * 150
                } ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <item.icon size={32} style={{ color: "#001a33" }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {Array.isArray(item.desc) ? (
                  item.desc.map((d, i) => (
                    <p key={i} className="text-gray-600">
                      {d}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
