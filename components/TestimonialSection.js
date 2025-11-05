"use client";

import { useState, useEffect } from "react";
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

  const prevClient = () =>
    setCurrent((prev) => (prev === 0 ? happyClients.length - 1 : prev - 1));
  const nextClient = () =>
    setCurrent((prev) => (prev === happyClients.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextClient, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
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
