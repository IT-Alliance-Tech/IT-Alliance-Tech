"use client";

import { useState, useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import '../styles/testimonialSection.css';

const happyClients = [
  { name: "Ganesh", role: "Startup Founder", review: "IT Alliance Tech helped us build a solid digital foundation for our startup. Their guidance from registration to growth was exceptional." },
  { name: "Santosh", role: "Small Business Owner", review: "Thanks to IT Alliance, our business now has the right technology and digital presence. They truly focus on long-term success, not just project delivery." },
  { name: "Vikram", role: "Enterprise Manager", review: "Working with IT Alliance Tech ensured that our systems and processes scaled seamlessly. Their expertise helped our enterprise evolve faster than expected." },
  { name: "Kavya", role: "Digital Entrepreneur", review: "The team at IT Alliance is highly professional and proactive. They helped us grow our brand identity and set up the entire ecosystem efficiently." },
  { name: "Pranav", role: "Tech Consultant", review: "IT Alliance Tech provided us with innovative solutions that improved our workflow and digital strategy significantly." },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const canvasRef = useRef(null);

  const prevClient = () => setCurrent(prev => (prev === 0 ? happyClients.length - 1 : prev - 1));
  const nextClient = () => setCurrent(prev => (prev === happyClients.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextClient, 5000);
    return () => clearInterval(interval);
  }, []);

  // ===== Only add background animation =====
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const circles = [];
    const CIRCLE_COUNT = 40;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 4 + Math.random() * 10,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        hue: 200 + Math.random() * 40,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // draw connecting lines
      for (let i = 0; i < CIRCLE_COUNT; i++) {
        for (let j = i + 1; j < CIRCLE_COUNT; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(30,90,200,${1 - dist / 120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(circles[i].x, circles[i].y);
            ctx.lineTo(circles[j].x, circles[j].y);
            ctx.stroke();
          }
        }
      }

      // draw circles
      circles.forEach(c => {
        const gradient = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.size);
        gradient.addColorStop(0, `hsla(${c.hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(1, `hsla(${c.hue}, 60%, 80%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fill();

        c.x += c.vx;
        c.y += c.vy;
        c.hue += 0.1;

        if (c.x < 0) c.x = width;
        if (c.x > width) c.x = 0;
        if (c.y < 0) c.y = height;
        if (c.y > height) c.y = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <canvas ref={canvasRef} className="testimonials-canvas"></canvas>

      {/* Keep all existing design intact */}
      <h2 className="title">What Our Clients Say</h2>

      <div className="testimonial-content fade">
        <div className="quote-icon"><FaQuoteLeft /></div>
        <p className="review">"{happyClients[current].review}"</p>
        <div className="client-info">
          <h3 className="name">{happyClients[current].name}</h3>
          <p className="role">{happyClients[current].role}</p>
        </div>
        <div className="stars">{[...Array(5)].map((_, i) => (<FaStar key={i} color="#fbbf24" />))}</div>
      </div>

      <button className="arrow left" onClick={prevClient}>←</button>
      <button className="arrow right" onClick={nextClient}>→</button>

      <div className="dots">
        {happyClients.map((_, index) => (
          <span key={index} className={`dot ${index === current ? "active" : ""}`} onClick={() => setCurrent(index)}></span>
        ))}
      </div>
    </section>
  );
}
