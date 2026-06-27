"use client";

import { useEffect, useRef } from "react";

type City = { name: string; x: number; y: number; major?: boolean };

// Approximate normalized positions tracing the continent (0..1 within the canvas box).
const CITIES: City[] = [
  { name: "Tunis", x: 0.45, y: 0.08 },
  { name: "Casablanca", x: 0.2, y: 0.14 },
  { name: "Cairo", x: 0.56, y: 0.16, major: true },
  { name: "Dakar", x: 0.08, y: 0.4 },
  { name: "Accra", x: 0.24, y: 0.52 },
  { name: "Lagos", x: 0.33, y: 0.54, major: true },
  { name: "Abuja", x: 0.38, y: 0.47, major: true },
  { name: "Addis Ababa", x: 0.65, y: 0.46, major: true },
  { name: "Kinshasa", x: 0.46, y: 0.66 },
  { name: "Kampala", x: 0.6, y: 0.6 },
  { name: "Kigali", x: 0.57, y: 0.64 },
  { name: "Nairobi", x: 0.67, y: 0.62, major: true },
  { name: "Johannesburg", x: 0.55, y: 0.86, major: true },
  { name: "Cape Town", x: 0.5, y: 0.96 },
];

// Edges connecting hubs (indices into CITIES).
const EDGES: [number, number][] = [
  [2, 6], [5, 6], [4, 5], [3, 4], [1, 2], [0, 2], [6, 7], [6, 11],
  [7, 8], [7, 11], [9, 10], [10, 11], [11, 12], [8, 12], [12, 13], [6, 9], [5, 8],
];

export function AfricaNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, pad = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pad = Math.min(w, h) * 0.08;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const px = (c: City) => pad + c.x * (w - pad * 2);
    const py = (c: City) => pad + c.y * (h - pad * 2);

    const start = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      // edges
      for (const [a, b] of EDGES) {
        const A = CITIES[a], B = CITIES[b];
        const ax = px(A), ay = py(A), bx = px(B), by = py(B);
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = "rgba(46,123,255,0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // traveling pulse
        const prog = reduce ? 0.5 : (t * 0.35 + (a + b) * 0.13) % 1;
        const cx = ax + (bx - ax) * prog;
        const cy = ay + (by - ay) * prog;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 6);
        g.addColorStop(0, "rgba(34,211,238,0.9)");
        g.addColorStop(1, "rgba(34,211,238,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // nodes
      CITIES.forEach((c, i) => {
        const x = px(c), y = py(c);
        const pulse = reduce ? 0.5 : (Math.sin(t * 2 + i) + 1) / 2;
        const r = c.major ? 4 : 2.6;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 16 + pulse * 8);
        glow.addColorStop(0, c.major ? "rgba(139,92,246,0.55)" : "rgba(46,123,255,0.4)");
        glow.addColorStop(1, "rgba(46,123,255,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 16 + pulse * 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = c.major ? "#a5b4fc" : "#7fb0ff";
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        if (c.major) {
          ctx.fillStyle = "rgba(238,242,255,0.75)";
          ctx.font = "600 11px ui-sans-serif, system-ui";
          ctx.fillText(c.name, x + 8, y + 3);
        }
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
