"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/logosection.css";

// 🖼️ Import all 14 logo images
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";
import logo8 from "../assets/images/logo8.png";
import logo9 from "../assets/images/logo9.png";
import logo10 from "../assets/images/logo10.png";
import logo11 from "../assets/images/logo11.png";
import logo12 from "../assets/images/logo12.png";
import logo13 from "../assets/images/logo13.png";
import logo14 from "../assets/images/logo14.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7,
  logo8, logo9, logo10, logo11, logo12, logo13, logo14,
];

export default function LogoSection() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ Background Animation (Same as Why Choose Us)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = sectionRef.current.offsetWidth);
    let height = (canvas.height = sectionRef.current.offsetHeight);

    const CIRCLE_COUNT = 55;
    const circles = Array.from({ length: CIRCLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 3 + Math.random() * 8,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      hue: 210 + Math.random() * 40, // light blue tones
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines (subtle)
      for (let i = 0; i < CIRCLE_COUNT; i++) {
        for (let j = i + 1; j < CIRCLE_COUNT; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(150,200,255,${0.15 - dist / 800})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(circles[i].x, circles[i].y);
            ctx.lineTo(circles[j].x, circles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw softly glowing circles
      circles.forEach((c) => {
        const gradient = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.size * 2.2);
        gradient.addColorStop(0, `hsla(${c.hue}, 90%, 75%, 0.8)`);
        gradient.addColorStop(1, `hsla(${c.hue}, 90%, 75%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fill();

        // Movement logic
        c.x += c.vx;
        c.y += c.vy;

        if (c.x < 0) c.x = width;
        if (c.x > width) c.x = 0;
        if (c.y < 0) c.y = height;
        if (c.y > height) c.y = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = sectionRef.current.offsetWidth;
      height = canvas.height = sectionRef.current.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="logoSection relative overflow-hidden" ref={sectionRef}>
      {/* Background animation canvas */}
      <canvas ref={canvasRef} className="logoCanvas absolute inset-0 w-full h-full" />

      {/* Foreground content */}
      <div className="logoContainer relative z-10">
        <h2 className="logoTitle">Our Trusted Partners</h2>
        <p className="logoSubtitle">
          Collaborating with leading brands to deliver innovation and excellence
        </p>

        <div className="logoGrid">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logoCard floatingLogo"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="logoImage"
                width={140}
                height={80}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
