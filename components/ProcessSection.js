"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Layout,
  CalendarDays,
  Package,
  Wrench,
  Handshake,
} from "lucide-react";
import "../styles/processSection.css";

const steps = [
  { id: 1, title: "DISCOVERY & CONSULTATION", desc: "We start by understanding your vision, audience, and challenges — setting a clear success path.", icon: <Users className="w-6 h-6 text-white" /> },
  { id: 2, title: "STRATEGY & PLANNING", desc: "Our experts craft a custom roadmap combining technology, creativity, and timelines that deliver.", icon: <Layout className="w-6 h-6 text-white" /> },
  { id: 3, title: "DESIGN & DEVELOPMENT", desc: "Our design and tech teams collaborate to create stunning visuals and high-performing systems.", icon: <CalendarDays className="w-6 h-6 text-white" /> },
  { id: 4, title: "TESTING & REFINEMENT", desc: "We test everything — speed, responsiveness, UI/UX — ensuring a flawless user experience.", icon: <Package className="w-6 h-6 text-white" /> },
  { id: 5, title: "LAUNCH & INTEGRATION", desc: "Your project goes live with full transparency, documentation, and technical handover.", icon: <Wrench className="w-6 h-6 text-white" /> },
  { id: 6, title: "ONGOING SUPPORT & GROWTH", desc: "We stay with you beyond launch — optimizing, scaling, and adapting as your business grows.", icon: <Handshake className="w-6 h-6 text-white" /> },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const diamondRefs = useRef([]);
  const rafRef = useRef(null);
  const roRef = useRef(null);
  const pathRef = useRef(null);
  const canvasRef = useRef(null);
  const [svgProps, setSvgProps] = useState({ w: 0, h: 0, d: "" });

  // ===== Animated blue-gray glowing circles background =====
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = containerRef.current.offsetWidth);
    let height = (canvas.height = containerRef.current.offsetHeight);

    const circles = [];
    const CIRCLE_COUNT = 50;

    for (let i = 0; i < CIRCLE_COUNT; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 4 + Math.random() * 12,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        hue: 200 + Math.random() * 40, // blue-gray
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
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

      // Draw glowing circles
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
        c.hue += 0.1;

        if (c.x < 0) c.x = width;
        if (c.x > width) c.x = 0;
        if (c.y < 0) c.y = height;
        if (c.y > height) c.y = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = containerRef.current.offsetWidth;
      height = canvas.height = containerRef.current.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ===== SVG path connecting diamonds =====
  const computePath = () => {
    const container = containerRef.current;
    if (!container) return;
    const bbox = container.getBoundingClientRect();
    const points = [];
    for (let i = 0; i < steps.length; i++) {
      const el = diamondRefs.current[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      points.push({
        x: r.left + r.width / 2 - bbox.left,
        y: r.top + r.height / 2 - bbox.top,
      });
    }
    const w = Math.max(0, Math.round(bbox.width));
    const h = Math.max(0, Math.round(bbox.height));
    if (points.length < 2) return setSvgProps({ w, h, d: "" });

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const midX = (p0.x + p1.x) / 2;
      d += ` C ${midX} ${p0.y} ${midX} ${p1.y} ${p1.x} ${p1.y}`;
    }
    setSvgProps({ w, h, d });
  };

  useEffect(() => {
    const schedule = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => computePath());
    };
    schedule();
    try {
      roRef.current = new ResizeObserver(() => schedule());
      if (containerRef.current) roRef.current.observe(containerRef.current);
    } catch (e) {
      window.addEventListener("resize", schedule);
    }
    window.addEventListener("resize", schedule);
    const t = setTimeout(schedule, 120);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (roRef.current && containerRef.current) roRef.current.disconnect();
      window.removeEventListener("resize", schedule);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = pathLength;
      pathRef.current.style.strokeDashoffset = pathLength;
      pathRef.current.style.transition = "stroke-dashoffset 1.2s ease-out 0.5s";
      requestAnimationFrame(() => {
        pathRef.current.style.strokeDashoffset = "0";
      });
    }
  }, [svgProps.d]);

  return (
    <section className="process-section py-12 px-4 md:px-8 relative">
      <canvas ref={canvasRef} className="process-canvas" />

      <div className="max-w-6xl mx-auto relative" ref={containerRef}>
        {svgProps.d && (
          <svg
            width={svgProps.w}
            height={svgProps.h}
            viewBox={`0 0 ${svgProps.w} ${svgProps.h}`}
            className="absolute inset-0 -z-0 pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d={svgProps.d}
              stroke="#1a1a1a"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.3"
              className="path-draw"
            />
          </svg>
        )}

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            OUR PROCESS
          </h2>
          <p className="text-gray-600 mt-2">
            We follow a 6-step structured approach that ensures every project delivers measurable results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 flex-col items-center relative z-10">
          {steps.map((s, i) => (
            <div
              key={s.id}
              className="flex flex-col items-center text-center md:text-left opacity-0 animate-fadeUp"
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative">
                <div
                  ref={(el) => (diamondRefs.current[i] = el)}
                  className="w-16 h-16 md:w-20 md:h-20 rotate-45 bg-gray-800 rounded-md shadow-xl flex items-center justify-center"
                >
                  <div className="-rotate-45">{s.icon}</div>
                </div>
                <div className="absolute -top-3 -left-3 bg-white rounded-full w-7 h-7 flex items-center justify-center text-gray-900 font-semibold text-sm shadow-sm">
                  {s.id}
                </div>
              </div>
              <div className="mt-4 max-w-md bg-white" style={{ maxWidth: "320px" }}>
                <h3 className="font-semibold text-gray-900 uppercase text-sm md:text-base tracking-wide">{s.title}</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
