"use client";

import { useState } from "react";
import { Layers, ShoppingBag } from "lucide-react";

const templates = [
  { id: 1, title: "Interior Design", previewLink: "https://your-demo-link1.com", category: "business" },
  { id: 2, title: "Grocery Shop", previewLink: "https://your-demo-link2.com", category: "ecommerce" },
  { id: 3, title: "Laundry Service", previewLink: "https://your-demo-link3.com", category: "business" },
  { id: 4, title: "Restaurant Website", previewLink: "https://your-demo-link4.com", category: "business" },
  { id: 5, title: "Fashion Store", previewLink: "https://your-demo-link5.com", category: "ecommerce" },
  { id: 6, title: "Digital Agency", previewLink: "https://your-demo-link6.com", category: "business" },
  { id: 7, title: "Travel Booking", previewLink: "https://your-demo-link7.com", category: "business" },
  { id: 8, title: "Furniture Store", previewLink: "https://your-demo-link8.com", category: "ecommerce" },
  { id: 9, title: "Education Portal", previewLink: "https://your-demo-link9.com", category: "business" },
  { id: 10, title: "Fitness Gym", previewLink: "https://your-demo-link10.com", category: "business" },
  { id: 11, title: "Electronics Store", previewLink: "https://your-demo-link11.com", category: "ecommerce" },
  { id: 12, title: "Pet Care", previewLink: "https://your-demo-link12.com", category: "business" },
  { id: 13, title: "Portfolio Website", previewLink: "https://your-demo-link13.com", category: "business" },
  { id: 14, title: "Real Estate", previewLink: "https://your-demo-link14.com", category: "business" },
  { id: 15, title: "Jewellery Shop", previewLink: "https://your-demo-link15.com", category: "ecommerce" },
];

export default function TemplatesPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTemplates = templates.filter(
    (t) =>
      (filter === "all" || t.category === filter) &&
      t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 flex flex-col items-center py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#cce5ff_0%,_transparent_40%),_radial-gradient(circle_at_bottom_right,_#ffecd2_0%,_transparent_40%)] animate-gradientMove opacity-70"></div>

      {/* Header */}
      <div className="text-center mb-14 px-4 relative z-10 animate-fadeIn">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Professionally Designed{" "}
          <span className="text-sky-600">Website Templates</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from{" "}
          <span className="font-semibold text-sky-600">15+ customizable</span>{" "}
          website templates built to meet your business needs.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 relative z-10">
        {[
          { label: "E-COMMERCE", value: "ecommerce", gradient: "from-pink-500 to-red-500" },
          { label: "BUSINESS", value: "business", gradient: "from-amber-500 to-orange-500" },
          { label: "ALL", value: "all", gradient: "from-sky-500 to-blue-600" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-8 py-2 rounded-full font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-transparent ${
              filter === btn.value
                ? `bg-gradient-to-r ${btn.gradient}`
                : `bg-gradient-to-r ${btn.gradient} opacity-80 hover:opacity-100`
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div className="relative mb-12 w-full max-w-md z-10 animate-slideUp">
        <input
          type="text"
          placeholder="Search templates..."
          className="w-full border border-gray-300 rounded-full px-5 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 hover:shadow-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-5 top-3 text-gray-400">🔍</span>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl z-10">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center hover:-translate-y-2 relative overflow-hidden group animate-fadeUp"
          >
            {/* Accent Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Icon */}
            <div className="mb-5 p-3 bg-sky-100 rounded-full group-hover:bg-sky-200 transition-all duration-300">
              {template.category === "ecommerce" ? (
                <ShoppingBag className="text-sky-600 w-6 h-6" />
              ) : (
                <Layers className="text-amber-600 w-6 h-6" />
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 relative z-10 group-hover:text-sky-700 transition-colors duration-300">
              {template.title}
            </h3>

            {/* Buttons */}
            <div className="flex space-x-4 relative z-10">
              <button
                onClick={() => window.open(template.previewLink, "_blank")}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg animate-bounce-slow"
              >
                Preview
              </button>
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg animate-pulse-slow">
                Get Started
              </button>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
