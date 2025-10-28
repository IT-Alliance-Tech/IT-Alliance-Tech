"use client";

import { useState } from "react";

const templates = [
  { id: 1, title: "Car Rental", previewLink: "https://car-rental-two-xi.vercel.app/", category: "business" },
  { id: 2, title: "Education Website", previewLink: "https://education-website-eta-ten.vercel.app/", category: "ecommerce" },
  { id: 3, title: "Business Website", previewLink: "https://business-three-woad.vercel.app/", category: "business" },
  { id: 4, title: "Travels Website", previewLink: "https://travels-henna.vercel.app/", category: "business" },
  { id: 5, title: "Events Template", previewLink: "https://events-templete.vercel.app/", category: "ecommerce" },
  { id: 6, title: "Ecommerce Website", previewLink: "https://ecommerce-mocha-pi.vercel.app/", category: "ecommerce" },
  { id: 7, title: "Construction Website", previewLink: "https://construction-puce-alpha.vercel.app/", category: "business" },
  { id: 8, title: "Fashion Ecommerce", previewLink: "https://fashion-ecommerce-sandy.vercel.app/", category: "ecommerce" },
  { id: 9, title: "Medical Website", previewLink: "https://medical-website-indol.vercel.app/", category: "business" },
  { id: 10, title: "Event Mania", previewLink: "https://event-maina.vercel.app/", category: "business" },
  { id: 11, title: "Hospital Website", previewLink: "https://hospital-templete-wine.vercel.app/", category: "ecommerce" },
  { id: 12, title: "Travel-001", previewLink: "https://travels-001.vercel.app/", category: "business" },
  { id: 13, title: "Business-001", previewLink: "https://business001.vercel.app/", category: "business" },
  { id: 14, title: "Business-002", previewLink: "https://business002.vercel.app/", category: "business" },
  { id: 15, title: "Jewellery Shop", previewLink: "https://your-demo-link15.com", category: "ecommerce" },
];

export default function TemplatesPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // ✅ Filtering logic
  const filteredTemplates = templates.filter(
    (t) =>
      (filter === "all" || t.category === filter) &&
      t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 flex flex-col items-center py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#cce5ff_0%,_transparent_40%),_radial-gradient(circle_at_bottom_right,#ffecd2_0%,_transparent_40%)] animate-gradientMove opacity-70"></div>

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
            onClick={() => setFilter(btn.value)} // ✅ Works fine
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

      {/* Templates Grid (3 per row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-[95rem] z-10">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center text-center hover:-translate-y-2 relative overflow-hidden group animate-fadeUp w-full h-[380px]" // ⬇️ Decreased height
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 relative z-10 group-hover:text-sky-700 transition-colors duration-300">
              {template.title}
            </h3>

            {/* Hero Section Preview - increased width */}
            <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-inner mb-6 transition-transform duration-500 group-hover:scale-[1.02] flex justify-center">
              <iframe
                src={template.previewLink}
                className="rounded-lg"
                style={{
                  width: "300%", 
                  height: "250px",
                  border: "none",
                  pointerEvents: "none",
                  overflow: "hidden",
                  transform: "scale(1)",
                  transformOrigin: "top center",
                }}
                title={template.title}
              />
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 relative z-10 mt-auto">
              <button
                onClick={() => window.open(template.previewLink, "_blank")}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg"
              >
                Preview
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-medium hover:scale-105 transition-transform shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
