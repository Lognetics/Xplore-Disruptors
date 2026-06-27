"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function useCountdown(targetISO: string) {
  const [p, setP] = useState<{ d: number; h: number; m: number; s: number } | null>(null);
  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setP({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);
  return p;
}

export function Countdown({ targetISO, className }: { targetISO: string; className?: string }) {
  const cd = useCountdown(targetISO);
  const cells = [
    ["Days", cd?.d],
    ["Hours", cd?.h],
    ["Minutes", cd?.m],
    ["Seconds", cd?.s],
  ] as const;

  return (
    <div className={cn("flex items-stretch gap-2 sm:gap-3", className)}>
      {cells.map(([label, v]) => (
        <div
          key={label}
          className="glass-card min-w-[4.2rem] flex-1 rounded-2xl px-3 py-2.5 text-center sm:min-w-[5rem]"
        >
          <div className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
            {v === undefined ? "––" : String(v).padStart(2, "0")}
          </div>
          <div className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
