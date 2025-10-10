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

/*
  Two-column responsive process with exact SVG connectors.
  - Grid: md => 2 columns, mobile => 1 column
  - Diamond centers are measured and an SVG path is built connecting them in sequence.
  - Use Tailwind CSS classes.
*/

const steps = [
  {
    id: 1,
    title: "DISCOVERY & CONSULTATION",
    desc: "We begin by understanding your needs, budget, and vision through meetings and site visits.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "DESIGN & PROPOSAL",
    desc: "Our design team creates concepts, layouts, and material selections tailored to your requirements.",
    icon: <Layout className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "APPROVAL & PLANNING",
    desc: "Once the design is finalized, we prepare detailed drawings, timelines, and costings for your approval.",
    icon: <CalendarDays className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "MANUFACTURING & PROCUREMENT",
    desc: "Using our in-house facilities and trusted partners, we produce high-quality furniture and source materials.",
    icon: <Package className="w-6 h-6 text-white" />,
  },
  {
    id: 5,
    title: "EXECUTION & INSTALLATION",
    desc: "Our skilled team manages the entire fit-out process — from construction to installation — ensuring quality and timely delivery.",
    icon: <Wrench className="w-6 h-6 text-white" />,
  },
  {
    id: 6,
    title: "HANDOVER & AFTERCARE",
    desc: "We hand over your completed space, provide warranties, and remain available for ongoing maintenance and support.",
    icon: <Handshake className="w-6 h-6 text-white" />,
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const diamondRefs = useRef([]); // element refs for diamonds
  const rafRef = useRef(null);
  const roRef = useRef(null);
  const pathRef = useRef(null);

  const [svgProps, setSvgProps] = useState({ w: 0, h: 0, d: "" });

  // compute path from diamond centers
  const computePath = () => {
    const container = containerRef.current;
    if (!container) return;

    const bbox = container.getBoundingClientRect();
    const points = [];

    // gather center points (only for existing elements)
    for (let i = 0; i < steps.length; i++) {
      const el = diamondRefs.current[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      // Ignore elements with 0 size (not rendered)
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

    // Build smooth path: for each pair p0->p1 use cubic bezier with horizontal control midpoints
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;

      // Default midpoint horizontally
      let midX = p0.x + dx * 0.5;

      // Choose control points. If horizontal distance is small, push controls horizontally outward
      // to create a smooth vertical S-like curve instead of a tiny squiggle.
      let offset = Math.min(Math.abs(dx) * 0.4, 140); // cap offset
      if (Math.abs(dx) < 40) {
        // small horizontal difference -> make a wider horizontal control so curve looks nice
        // If next element is mostly below, offset direction depends on column (left/right)
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
    // throttle compute with rAF
    const schedule = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => computePath());
    };

    // initial
    schedule();

    // ResizeObserver on container to detect layout changes (e.g., text wrapping)
    try {
      roRef.current = new ResizeObserver(() => schedule());
      if (containerRef.current) roRef.current.observe(containerRef.current);
    } catch (e) {
      // Ignore if not supported
      window.addEventListener("resize", schedule);
    }

    // also recalc on window resize (fallback)
    window.addEventListener("resize", schedule);

    // small timeout after fonts load
    const t = setTimeout(schedule, 120);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (roRef.current && containerRef.current) roRef.current.disconnect();
      window.removeEventListener("resize", schedule);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = pathLength;
      pathRef.current.style.strokeDashoffset = pathLength;
      pathRef.current.style.transition = "stroke-dashoffset 1.2s ease-out 0.5s";
      // trigger draw
      requestAnimationFrame(() => {
        pathRef.current.style.strokeDashoffset = "0";
      });
    }
  }, [svgProps.d]);

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto relative" ref={containerRef}>
        {/* SVG behind content */}
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
            A clear and seamless journey from idea to completion.
          </p>
        </div>

        {/* 2-column grid on md+, 1-column on mobile */}
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
              {/* Diamond & number */}
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

              {/* Text */}
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

      {/* mobile vertical connector (fallback) */}
      <div className="md:hidden" style={{ zIndex: 99 }}>
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[220px] bottom-8 w-[2px] bg-emerald-100 pointer-events-none"
          style={{ zIndex: 99 }}
        />
      </div>
    </section>
  );
}
