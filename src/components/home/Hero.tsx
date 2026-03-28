"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh">
      {/* Animated Car Background (Optional: can use an image or video) */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none overflow-hidden">
        <motion.div
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 0.4, x: 0 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="relative h-full w-full"
        >
           <Image 
             src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
             alt="Porsche Hero" 
             fill 
             className="object-cover lg:object-right"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              <Zap className="w-3 h-3 fill-primary" />
              Trusted Car Importer
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              ELEVATE YOUR <br />
              <span className="text-primary italic">DRIVING EXPERIENCE</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
              Premium imported cars from Europe directly to your doorstep in Algeria. 
              We handle everything from inspection to delivery.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="h-16 px-10 group">
              View Inventory
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10">
              <Play className="w-5 h-5 mr-2 fill-white" />
              Our Services
            </Button>
          </motion.div>

          {/* Stats/Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5"
          >
            {[
              { icon: ShieldCheck, label: "Verified Quality", sub: "100+ Points Check" },
              { icon: Globe, label: "Europe Import", sub: "Direct Sourcing" },
              { icon: Zap, label: "Fast Delivery", sub: "To your doorstep" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <stat.icon className="w-6 h-6 text-primary mb-2" />
                <div className="text-white font-bold text-sm">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
