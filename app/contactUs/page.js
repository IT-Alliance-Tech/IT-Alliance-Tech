"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import aboutImg from "../../assets/images/contactUs.png";
import { RiSendPlaneLine } from "@remixicon/react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyKJFLtOFYYe4jMND7rqWU2ZYvDQoyNrNtmkjEGYcKhFsYrW_09lbOUl1HclFYFUBJ0/exec"; // Replace with your deployed Apps Script URL

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.service || !formData.message) {
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
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("service", formData.service);
      form.append("message", formData.message);

      // Send form data to Google Sheets via Apps Script
      await fetch("https://script.google.com/macros/s/AKfycbyKJFLtOFYYe4jMND7rqWU2ZYvDQoyNrNtmkjEGYcKhFsYrW_09lbOUl1HclFYFUBJ0/exec", {
        method: "POST",
        body: form,
        mode: "no-cors", // Important for Google Script
      });

      setStatus("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      setStatus("Error submitting form. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative pt-20 pb-16 text-white transition-opacity duration-1000 ${animate ? "opacity-100" : "opacity-0"}`} style={{ backgroundColor: "#001a33" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold transform transition-transform duration-1000 ease-out ${animate ? "translate-y-0" : "-translate-y-10 opacity-0"}`}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`animate-on-scroll fade-left bg-gray-50 p-8 rounded-2xl shadow-lg transform transition-all duration-1000 ${animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="contact-input w-full h-14 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="contact-input w-full h-14 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="contact-input w-full h-14 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
                <select name="service" value={formData.service} onChange={handleChange} required className="contact-input w-full h-14 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Service</option>
                  {services.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
                </select>

                <textarea name="message" placeholder="Message here" value={formData.message} onChange={handleChange} rows={5} required className="contact-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

                <button type="submit" className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: "#001a33" }} disabled={loading}>
                  {loading ? "Submitting..." : "Send Query"} <RiSendPlaneLine className="ml-2" size={20} />
                </button>
                {status && <p className="mt-2 text-center text-gray-700">{status}</p>}
              </form>
            </div>

            {/* Image */}
            <div className={`animate-on-scroll fade-right relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-1000 ${animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
              <Image src={aboutImg} alt="Contact Us" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
