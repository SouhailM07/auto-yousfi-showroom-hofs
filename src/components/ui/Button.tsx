"use client";

import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}


export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 neon-glow-primary",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border-2 border-primary/50 text-white hover:border-primary hover:bg-primary/5",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
    neon: "bg-black border border-primary/50 text-primary hover:bg-primary hover:text-white neon-glow-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Gloss effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.button>
  );
};
