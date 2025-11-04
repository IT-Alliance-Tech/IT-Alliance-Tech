"use client";

import React, { useEffect, useRef } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import healthcareImg from "../assets/images/m1.png";
import ecommerceImg from "../assets/images/m2.png";
import educationImg from "../assets/images/m3.png";
import financeImg from "../assets/images/m4.png";
import realEstateImg from "../assets/images/m5.png";
import manufacturingImg from "../assets/images/m6.png";
import retailImg from "../assets/images/m7.png";
import hospitalityImg from "../assets/images/m8.png";
import "../styles/industriesSection.css";

const IndustriesSection = () => {
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  const industries = [
    { name: "Healthcare", image: healthcareImg },
    { name: "E-commerce", image: ecommerceImg },
    { name: "Education", image: educationImg },
    { name: "Finance", image: financeImg },
    { name: "Real Estate", image: realEstateImg },
    { name: "Manufacturing", image: manufacturingImg },
    { name: "Retail", image: retailImg },
    { name: "Hospitality", image: hospitalityImg },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Card reveal animation
  useEffect(() => {
    const cards = document.querySelectorAll(".industry-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("active"), index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  // ✅ Light background floating circles animation (same as Why Choose Us)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const section = sectionRef.current;

    const resizeCanvas = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const circles = [];
    const CIRCLE_COUNT = 60;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 3 + Math.random() * 8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        hue: 210 + Math.random() * 40, // light blue hues
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines (subtle like Why Choose Us)
      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(135,206,250,${0.1 - dist / 1200})`; // very light lines
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(circles[i].x, circles[i].y);
            ctx.lineTo(circles[j].x, circles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing light circles
      circles.forEach((c) => {
        const gradient = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.size * 2);
        gradient.addColorStop(0, `hsla(${c.hue}, 90%, 75%, 0.8)`);
        gradient.addColorStop(1, `hsla(${c.hue}, 90%, 75%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fill();

        // Movement
        c.x += c.vx;
        c.y += c.vy;
        c.hue += 0.05;

        // Boundary reset
        if (c.x < 0) c.x = canvas.width;
        if (c.x > canvas.width) c.x = 0;
        if (c.y < 0) c.y = canvas.height;
        if (c.y > canvas.height) c.y = 0;
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section className="industriesSection relative py-20 overflow-hidden bg-white" ref={sectionRef}>
      <canvas ref={canvasRef} className="industries-bg-canvas absolute inset-0 w-full h-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Industries We Serve</h2>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="scroll-btn left-btn"
            style={{ backgroundColor: "#001a33" }}
          >
            <RiArrowLeftLine size={24} className="text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="scroll-btn right-btn"
            style={{ backgroundColor: "#001a33" }}
          >
            <RiArrowRightLine size={24} className="text-white" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide mx-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card flex-none w-64 bg-white rounded-lg shadow-lg opacity-0 transform scale-95"
              >
                <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
