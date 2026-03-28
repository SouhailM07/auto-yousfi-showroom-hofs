"use client";

import React from "react";

import { motion } from "framer-motion";
import { BRANDS } from "@/types/car";
import { Section } from "@/components/ui/Section";

export const Brands = () => {
  return (
    <Section className="bg-secondary/10 py-12 overflow-hidden border-y border-white/5">
      <div className="flex flex-col items-center gap-8">
        <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">
          Available Premium Brands
        </h4>
        
        <div className="relative w-full">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-20 whitespace-nowrap"
          >
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div 
                key={i} 
                className="text-4xl md:text-5xl font-black text-white/5 hover:text-primary transition-colors cursor-default select-none uppercase tracking-tighter"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
