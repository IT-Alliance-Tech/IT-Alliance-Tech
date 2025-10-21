"use client";
import React, { useEffect, useRef } from "react";
import {
  Public,
  AccountTree,
  Campaign,
  Code,
  Settings,
  RocketLaunch,
  TrendingUp,
  BusinessCenter,
} from "@mui/icons-material";

const WhyUsPage = () => {
  const services = [
    { title: "Website & E-commerce", purpose: "Digital Identity", help: "Builds trust and captures leads", icon: <Public fontSize="large" /> },
    { title: "CRM & WhatsApp Automation", purpose: "Process Efficiency", help: "Manages leads, customers & communication", icon: <AccountTree fontSize="large" /> },
    { title: "Digital Marketing", purpose: "Brand Growth", help: "Creates visibility and brings inquiries", icon: <Campaign fontSize="large" /> },
    { title: "Custom Software / ERP", purpose: "Business Control", help: "Centralizes data and operations", icon: <Code fontSize="large" /> },
    { title: "MSP & IT Management", purpose: "Long-Term Reliability", help: "Keeps your system secure, stable, and scalable", icon: <Settings fontSize="large" /> },
  ];

  const stages = [
    { stage: "Early-Stage", step: "Website + Brand", icon: <BusinessCenter fontSize="large" /> },
    { stage: "Startup", step: "CRM + Ads", icon: <TrendingUp fontSize="large" /> },
    { stage: "SMB", step: "Automation", icon: <RocketLaunch fontSize="large" /> },
    { stage: "Mid-Enterprise", step: "Global Scale", icon: <Public fontSize="large" /> },
    { stage: "Enterprise", step: "Full Digital Ecosystem", icon: <AccountTree fontSize="large" /> },
  ];

  const processSteps = [
    { number: "1", title: "Discover & Consult", desc: "Understanding your business DNA." },
    { number: "2", title: "Plan & Strategize", desc: "Setting up the digital blueprint." },
    { number: "3", title: "Design & Develop", desc: "Building your brand’s digital core." },
    { number: "4", title: "Test & Launch", desc: "Ensuring perfection and stability." },
    { number: "5", title: "Support & Scale", desc: "Long-term partnership for growth." },
  ];

  const serviceRefs = useRef([]);
  const stageRefs = useRef([]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .scale-in, .slide-left, .slide-right, .slide-up"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
          else entry.target.classList.remove("active");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleMouseMoveCard = (e, idx) => {
    const card = serviceRefs.current[idx];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 15;
    const rotateY = (x / rect.width) * 15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };
  const handleMouseLeaveCard = (idx) => {
    const card = serviceRefs.current[idx];
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handleMouseEnterStage = (idx) => {
    const stage = stageRefs.current[idx];
    stage.style.transform = "scale(1.15) translateY(-10px)";
    stage.style.backgroundColor = "#4b5563";
    stage.style.color = "#fff";
  };
  const handleMouseLeaveStage = (idx) => {
    const stage = stageRefs.current[idx];
    stage.style.transform = "scale(1) translateY(0)";
    stage.style.backgroundColor = "#1f2937";
    stage.style.color = "#fff";
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">

      {/* Hero Section */}
      <section className="relative pt-28 pb-32 text-white overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300 rounded-full top-12 left-20 opacity-50 blur-3xl animate-glow-pulse"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-tr from-blue-400 via-cyan-300 to-teal-300 rounded-full top-40 right-28 opacity-50 blur-3xl animate-glow-pulse-delayed"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center reveal">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            We Grow Your Business Digitally
          </h1>
          <p className="text-lg sm:text-xl text-white/80 drop-shadow-md">
            From idea to enterprise, we partner with you at every stage to scale your growth.
          </p>
        </div>
      </section>

      {/* Growth Stages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center mb-16 reveal">
          <h2 className="text-4xl font-bold text-gray-900">Growth Stages</h2>
          <p className="text-gray-700 mt-4 text-lg">From startup to enterprise, we guide you at every stage.</p>
        </div>
        <div className="relative max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-400 z-0 rounded-full"></div>
          {stages.map((stage, idx) => (
            <div
              key={idx}
              ref={(el) => (stageRefs.current[idx] = el)}
              className="relative flex flex-col items-center z-10 cursor-pointer transition-transform duration-300 px-6 py-6 rounded-2xl shadow-lg bg-gray-800 text-white w-40 sm:w-44 md:w-auto"
              onMouseEnter={() => handleMouseEnterStage(idx)}
              onMouseLeave={() => handleMouseLeaveStage(idx)}
            >
              <div className="mb-2">{stage.icon}</div>
              <h3 className="font-semibold text-lg text-center">{stage.stage}</h3>
              <p className="text-sm mt-1 text-center">{stage.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute w-60 h-60 bg-purple-400 rounded-full opacity-30 blur-3xl animate-glow-pulse" style={{ top: "10%", left: "5%" }}></div>
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-2xl animate-glow-pulse-delayed" style={{ top: "30%", right: "10%" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 opacity-20 animate-gradient-background"></div>

        <div className="relative max-w-6xl mx-auto text-center mb-16 reveal">
          <h2 className="text-4xl font-bold text-gray-900">Core Services</h2>
          <p className="text-gray-700 mt-4 text-lg">Interactive, dynamic, and modern services showcase.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto px-4 relative z-10">
          {services.map((service, idx) => (
            <div key={idx} className="relative reveal">
              <div
                ref={(el) => (serviceRefs.current[idx] = el)}
                className="w-full h-64 bg-gradient-to-tr from-gray-100 to-gray-200 shadow-2xl cursor-pointer transition-all duration-300 rounded-3xl"
                onMouseMove={(e) => handleMouseMoveCard(e, idx)}
                onMouseLeave={() => handleMouseLeaveCard(idx)}
              ></div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
                <div className="text-gray-700 mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl mb-1">{service.title}</h3>
                <p className="text-gray-800/80 text-base">{service.purpose}</p>
                <p className="text-gray-600 text-sm mt-1">{service.help}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12 reveal">
          <h2 className="text-4xl font-bold text-gray-900">Our Process</h2>
          <p className="text-gray-700 mt-3 text-lg">Step by step from vision to value.</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full z-0 rounded-full"></div>
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-start mb-12 reveal">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 z-10 flex items-center justify-center text-white font-bold">{step.number}</div>
              <div className={`bg-white rounded-3xl shadow-lg p-6 w-full md:w-1/2 ${idx % 2 === 0 ? "md:mr-auto md:ml-0 text-left mt-6 md:mt-0 slide-left" : "md:ml-auto md:mr-0 text-right mt-6 md:mt-0 slide-right"}`}>
                <h3 className="font-semibold text-xl">{step.title}</h3>
                <p className="text-gray-600 text-base mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose IT Alliance */}
      <section className="py-20 bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12 reveal">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose IT Alliance Tech</h2>
          <p className="text-gray-700 mt-3 text-lg">Excellence, growth, and reliability at every step.</p>
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div className="bg-white p-8 rounded-3xl text-center reveal slide-left shadow-2xl hover:scale-105 hover:rotate-1 transition-transform duration-300">
            <Public className="mx-auto mb-3 text-gray-800" fontSize="large" />
            <h3 className="font-semibold text-xl mb-1">Trusted Relationships</h3>
            <p className="text-gray-700 text-base">We build lasting partnerships, not just websites.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-center reveal slide-up shadow-2xl hover:scale-105 hover:-rotate-1 transition-transform duration-300">
            <RocketLaunch className="mx-auto mb-3 text-gray-800" fontSize="large" />
            <h3 className="font-semibold text-xl mb-1">Global Reach</h3>
            <p className="text-gray-700 text-base">Serving clients worldwide since 2021 with excellence.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-center reveal slide-right shadow-2xl hover:scale-105 hover:rotate-2 transition-transform duration-300">
            <AccountTree className="mx-auto mb-3 text-gray-800" fontSize="large" />
            <h3 className="font-semibold text-xl mb-1">End-to-End Support</h3>
            <p className="text-gray-700 text-base">From startup to enterprise, we guide every step of your journey.</p>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .slide-left { opacity: 0; transform: translateX(-50px); transition: all 0.8s ease-in-out; }
        .slide-left.active { opacity: 1; transform: translateX(0); }
        .slide-right { opacity: 0; transform: translateX(50px); transition: all 0.8s ease-in-out; }
        .slide-right.active { opacity: 1; transform: translateX(0); }
        .slide-up { opacity: 0; transform: translateY(50px); transition: all 0.8s ease-in-out; }
        .slide-up.active { opacity: 1; transform: translateY(0); }

        @keyframes glow-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1.1) blur(60px);}
          50% { transform: scale(1.15); filter: brightness(1.6) blur(90px);}
        }
        .animate-glow-pulse { animation: glow-pulse 6s ease-in-out infinite; }
        .animate-glow-pulse-delayed { animation: glow-pulse 8s ease-in-out infinite 2s; }

        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-background { background-size: 200% 200%; animation: gradientBackground 15s ease infinite; }
      `}</style>
    </div>
  );
};

export default WhyUsPage;
