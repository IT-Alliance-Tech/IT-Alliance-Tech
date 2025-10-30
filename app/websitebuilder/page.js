"use client";

import { useState, useEffect, useRef } from "react";

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
];

export default function Websitebuilder() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const circles = [];
    const CIRCLE_COUNT = 50;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 3 + Math.random() * 5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        hue: 200 + Math.random() * 40,
      });
    }

    function draw() {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < CIRCLE_COUNT; i++) {
        for (let j = i + 1; j < CIRCLE_COUNT; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(30,90,200,${0.25 - dist / 600})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(circles[i].x, circles[i].y);
            ctx.lineTo(circles[j].x, circles[j].y);
            ctx.stroke();
          }
        }
      }

      circles.forEach((c) => {
        const gradient = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.size);
        gradient.addColorStop(0, `hsla(${c.hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(1, `hsla(${c.hue}, 60%, 80%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fill();

        c.x += c.vx;
        c.y += c.vy;
        c.hue += 0.05;

        if (c.x < 0) c.x = width;
        if (c.x > width) c.x = 0;
        if (c.y < 0) c.y = height;
        if (c.y > height) c.y = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredTemplates = templates.filter(
    (t) =>
      (filter === "all" || t.category === filter) &&
      t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden bg-white"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Reduced margin below heading */}
      <div className="relative z-10 text-center mb-8 px-6">
        <h2 className="text-5xl font-extrabold mb-4 text-[#0B1A2E]">
          Explore Our{" "}
          <span className="text-[#0077B6]">Website Templates</span>
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Choose from 14 modern, responsive templates — designed with elegance
          and powered for performance.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mb-12 relative z-10">
        {[
          { label: "E-COMMERCE", value: "ecommerce", color: "from-[#00B4D8] to-[#0096C7]" },
          { label: "BUSINESS", value: "business", color: "from-[#0077B6] to-[#023E8A]" },
          { label: "ALL", value: "all", color: "from-[#90E0EF] to-[#00B4D8]" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-7 py-2 rounded-full font-semibold text-white text-sm shadow-lg transition-all duration-300 transform hover:scale-110 ${
              filter === btn.value
                ? `bg-gradient-to-r ${btn.color} shadow-blue-400/40`
                : `bg-gradient-to-r ${btn.color} opacity-80`
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-md mb-12 z-10">
        <input
          type="text"
          placeholder="Search templates..."
          className="w-full px-5 py-3 rounded-full border border-[#0077B640] bg-[#E8F6FF] text-[#0B1A2E] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-6 top-3 text-[#0077B6] text-lg">🔍</span>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 max-w-[100rem]">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-gradient-to-br from-[#ffffff40] to-[#00B4D820] backdrop-blur-xl rounded-3xl shadow-2xl p-5 flex flex-col justify-between items-center text-center transition-all duration-700 hover:-translate-y-3 hover:shadow-[#00B4D8]/40 border border-[#00B4D830]"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0077B6] mb-2 mt-1">
                {template.title}
              </h3>

              <div className="relative w-full rounded-2xl overflow-hidden border border-[#00B4D840] shadow-inner mb-3">
                <iframe
                  src={template.previewLink}
                  className="rounded-lg w-full"
                  style={{
                    height: "180px",
                    border: "none",
                    pointerEvents: "none",
                  }}
                  title={template.title}
                />
              </div>
            </div>

            <div className="flex space-x-4 mt-1 mb-1">
              <button
                onClick={() => window.open(template.previewLink, "_blank")}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white font-semibold hover:scale-105 transition-transform shadow-md text-sm"
              >
                Preview
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFB800] text-[#0b1a2e] font-semibold hover:scale-105 transition-transform shadow-md text-sm"
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
