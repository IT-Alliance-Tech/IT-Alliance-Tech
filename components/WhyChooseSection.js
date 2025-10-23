"use client";
import React, { useEffect } from "react";
import { Public, RocketLaunch, AccountTree } from "@mui/icons-material";
import "../styles/whyChooseSection.css";

export default function WhyChooseSection() {

  useEffect(() => {
    // Intersection observer for reveal animation
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) entry.target.classList.add('active');
          else entry.target.classList.remove('active');
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Particle background animation
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = Array.from({length: 50}, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 6 + 2,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      alpha: Math.random() * 0.5 + 0.3
    }));

    function animate() {
      ctx.clearRect(0,0,width,height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if(p.x < 0 || p.x > width) p.dx *= -1;
        if(p.y < 0 || p.y > height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  const features = [
    {
      icon: <Public fontSize="large" />,
      title: "Trusted Partnerships",
      desc: "We build lasting relationships based on trust, reliability, and mutual growth."
    },
    {
      icon: <RocketLaunch fontSize="large" />,
      title: "Global Reach",
      desc: "Serving businesses worldwide with international standards and local expertise."
    },
    {
      icon: <AccountTree fontSize="large" />,
      title: "Complete Digital Solutions",
      desc: "From strategy to execution, we manage your digital transformation end-to-end."
    }
  ];

  return (
    <section className="why-choose-section">
      <canvas className="animated-bg" id="bg-canvas"></canvas>

      <div className="content-wrapper">
        <h2 className="title reveal">Why Choose IT Alliance Tech</h2>
        <p className="subtitle reveal">
          Excellence, innovation, and growth at every stage.
        </p>

        <div className="features">
          {features.map((feature, idx) => (
            <div className="feature reveal" key={idx}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
