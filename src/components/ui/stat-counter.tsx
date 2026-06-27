"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";
import { compact } from "@/lib/utils";

/** Counts up from 0 to `value` when scrolled into view. */
export function StatCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => compact(Math.round(v)));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{text}</motion.span>
      {suffix}
    </span>
  );
}
