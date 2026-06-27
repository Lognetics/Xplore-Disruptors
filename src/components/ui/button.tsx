"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg" | "icon";

const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_10px_30px_-10px_var(--brand-600)] bg-[linear-gradient(110deg,var(--brand-500),var(--brand-700))] hover:brightness-110",
  accent:
    "text-white shadow-[0_10px_30px_-10px_var(--accent-600)] bg-[linear-gradient(110deg,var(--accent-500),var(--accent-600))] hover:brightness-110",
  glass: "glass text-foreground hover:bg-white/10",
  outline: "border border-border text-foreground hover:bg-foreground/5",
  ghost: "text-foreground hover:bg-foreground/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-xl",
  md: "h-11 px-5 text-sm rounded-2xl",
  lg: "h-13 px-7 text-base rounded-2xl",
  icon: "h-11 w-11 rounded-full",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-[filter,background-color] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  const motionProps = { whileTap: { scale: 0.96 }, transition: { type: "spring" as const, stiffness: 400, damping: 25 } };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} className={classes} {...(props as object)}>
      {children}
    </motion.button>
  );
}
