"use client";

import dynamic from "next/dynamic";

// WebGL canvas is client-only; lazy-loaded so it never blocks first paint or SSR.
const ParticleGlobe = dynamic(() => import("./particle-globe"), {
  ssr: false,
  loading: () => null,
});

export function Globe({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ParticleGlobe />
    </div>
  );
}
