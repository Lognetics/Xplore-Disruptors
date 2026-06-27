"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  interactive?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "children">;

/** Floating frosted card with optional hover-lift + brand glow. */
export function GlassCard({
  interactive = false,
  glow = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4 } : undefined}
      whileTap={interactive ? { scale: 0.99 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "glass-card rounded-3xl",
        interactive && "cursor-pointer hover:shadow-[0_24px_60px_-20px_var(--brand-700)]",
        glow && "ring-gradient",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
