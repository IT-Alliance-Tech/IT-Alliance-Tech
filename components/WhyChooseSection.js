"use client";
import React, { useEffect } from "react";
import { Public, RocketLaunch, AccountTree } from "@mui/icons-material";
import "../styles/whyChooseSection.css"; // keep your CSS for reveal animation

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
    <section className="why-choose-section py-24 px-5 relative text-white">
      <div className="content-wrapper max-w-6xl mx-auto text-center">
        <h2 className="title reveal text-3xl md:text-4xl font-bold mb-4">
          Why Choose IT Alliance Tech
        </h2>
        <p className="subtitle reveal text-lg md:text-xl mb-12">
          Excellence, innovation, and growth at every stage.
        </p>

        {/* Features container */}
        <div className="features flex flex-wrap justify-center gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="feature reveal bg-white/10 rounded-xl p-8 text-center 
                         flex-none sm:flex-1 sm:min-w-[250px] sm:max-w-xs"
            >
              <div className="icon mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
