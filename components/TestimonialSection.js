"use client";

import { useState, useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "../styles/testimonialSection.css";

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

  const prevClient = () =>
    setCurrent((prev) => (prev === 0 ? happyClients.length - 1 : prev - 1));
  const nextClient = () =>
    setCurrent((prev) => (prev === happyClients.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextClient, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Same background animation as WhyChooseSection (only circles lighter)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 6 + 2,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,180,255,${p.alpha})`; // 💡 lighter soft lavender color
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      {/* ✅ Background Canvas Animation */}
      <canvas ref={canvasRef} className="testimonials-canvas"></canvas>

      <h2 className="title">What Our Clients Say</h2>

      <div className="testimonial-content fade">
        <div className="quote-icon">
          <FaQuoteLeft />
        </div>
        <p className="review">"{happyClients[current].review}"</p>
        <div className="client-info">
          <h3 className="name">{happyClients[current].name}</h3>
          <p className="role">{happyClients[current].role}</p>
        </div>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#fbbf24" />
          ))}
        </div>
      </div>

      <button className="arrow left" onClick={prevClient}>
        ←
      </button>
      <button className="arrow right" onClick={nextClient}>
        →
      </button>

      <div className="dots">
        {happyClients.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
