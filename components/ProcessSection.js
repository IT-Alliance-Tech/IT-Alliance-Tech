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
  {
    id: 1,
    title: "DISCOVERY & CONSULTATION",
    desc: "We start by understanding your vision, audience, and challenges — setting a clear success path.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "STRATEGY & PLANNING",
    desc: "Our experts craft a custom roadmap combining technology, creativity, and timelines that deliver.",
    icon: <Layout className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "DESIGN & DEVELOPMENT",
    desc: "Our design and tech teams collaborate to create stunning visuals and high-performing systems.",
    icon: <CalendarDays className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "TESTING & REFINEMENT",
    desc: "We test everything — speed, responsiveness, UI/UX — ensuring a flawless user experience.",
    icon: <Package className="w-6 h-6 text-white" />,
  },
  {
    id: 5,
    title: "LAUNCH & INTEGRATION",
    desc: "Your project goes live with full transparency, documentation, and technical handover.",
    icon: <Wrench className="w-6 h-6 text-white" />,
  },
  {
    id: 6,
    title: "ONGOING SUPPORT & GROWTH",
    desc: "We stay with you beyond launch — optimizing, scaling, and adapting as your business grows.",
    icon: <Handshake className="w-6 h-6 text-white" />,
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const diamondRefs = useRef([]);
  const rafRef = useRef(null);
  const roRef = useRef(null);
  const pathRef = useRef(null);

  const [svgProps, setSvgProps] = useState({ w: 0, h: 0, d: "" });

  const computePath = () => {
    const container = containerRef.current;
    if (!container) return;

    const bbox = container.getBoundingClientRect();
    const points = [];

    for (let i = 0; i < steps.length; i++) {
      const el = diamondRefs.current[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      points.push({
        x: r.left + r.width / 2 - bbox.left,
        y: r.top + r.height / 2 - bbox.top,
      });
    }

    const w = Math.max(0, Math.round(bbox.width));
    const h = Math.max(0, Math.round(bbox.height));

    if (points.length < 2) {
      setSvgProps({ w, h, d: "" });
      return;
    }

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;

      let midX = p0.x + dx * 0.5;
      let offset = Math.min(Math.abs(dx) * 0.4, 140);
      if (Math.abs(dx) < 40) {
        const direction = dx >= 0 ? 1 : -1;
        const cp1x = p0.x + direction * offset;
        const cp2x = p1.x - direction * offset;
        const cp1y = p0.y + dy * 0.15;
        const cp2y = p1.y - dy * 0.15;
        d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p1.x} ${p1.y}`;
      } else {
        const cp1x = midX;
        const cp1y = p0.y;
        const cp2x = midX;
        const cp2y = p1.y;
        d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p1.x} ${p1.y}`;
      }
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
    <section className="bg-white py-12 px-4 md:px-8">
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
              stroke="#8fc6b7"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.95"
              className="path-draw"
            />
          </svg>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
            OUR PROCESS
          </h2>
          <p className="text-gray-600 mt-2">
            We follow a 6-step structured approach that ensures every project delivers measurable results.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 flex-col items-center"
          style={{ zIndex: 999 }}
        >
          {steps.map((s, i) => (
            <div
              key={s.id}
              className={`flex flex-col items-center text-center md:text-left opacity-0 animate-fadeUp`}
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative">
                <div
                  ref={(el) => (diamondRefs.current[i] = el)}
                  className="w-16 h-16 md:w-20 md:h-20 rotate-45 bg-gradient-to-b from-[#001a33] to-[#001a33]/80 rounded-md shadow-xl flex items-center justify-center"
                >
                  <div className="-rotate-45">{s.icon}</div>
                </div>

                <div className="absolute -top-3 -left-3 bg-white rounded-full w-7 h-7 flex items-center justify-center text-emerald-800 font-semibold text-sm shadow-sm">
                  {s.id}
                </div>
              </div>

              <div
                className="mt-4 max-w-md bg-white"
                style={{ maxWidth: "320px", zIndex: 999 }}
              >
                <h3 className="font-semibold text-emerald-900 uppercase text-sm md:text-base tracking-wide">
                  {s.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden" style={{ zIndex: 99 }}>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[220px] bottom-8 w-[2px] bg-emerald-100 pointer-events-none"
          style={{ zIndex: 99 }}
        />
      </div>
    </section>
  );
}
