"use client";

import React, { useEffect, useRef } from "react";
import "../styles/homePage.css";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight * 0.8);

    const points = [];
    const POINTS_COUNT = 80;

    // Generate random points
    for (let i = 0; i < POINTS_COUNT; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw lines
      for (let i = 0; i < POINTS_COUNT; i++) {
        for (let j = i + 1; j < POINTS_COUNT; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255,215,0,${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach((p) => {
        ctx.fillStyle = "#ffd700";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight * 0.8;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGetStarted = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Empowering Your Business in the{" "}
          <span style={{ color: "#ffd700" }}>Digital Era</span>
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your business with cutting-edge technology solutions. We
          deliver innovative IT services, digital marketing strategies, and
          custom web applications that drive growth and success.
        </p>
        <button className="hero-btn-primary" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
