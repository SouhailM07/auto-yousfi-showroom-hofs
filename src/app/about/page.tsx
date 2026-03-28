"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ShieldCheck, Heart } from "lucide-react";


export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-mesh">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="text-primary font-bold text-sm uppercase tracking-widest">
                Who We Are
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                LEGACY OF <br />
                <span className="text-gradient">EXCELLENCE</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed max-w-xl">
                 Auto Yousfi Showroom is your premier destination for high-end European vehicles in Algeria. 
                 With years of experience in the international automotive market, we bridge the gap between European quality and Algerian passion for driving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg">Trust First</h3>
                <p className="text-white/40 text-sm">Every car is inspected by experts in Europe before being shipped to our showroom.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg">Passion Driven</h3>
                <p className="text-white/40 text-sm">We don't just sell cars, we deliver dreams. Our selection focuses on performance and luxury.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5"
          >
            <Image 
              src="https://images.unsplash.com/photo-1562141961-b5d185676774?auto=format&fit=crop&q=80&w=2070" 
              alt="Showroom" 
              fill 
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8 right-8 p-8 glass rounded-3xl space-y-2">
              <div className="text-white font-bold text-2xl uppercase tracking-tighter">Algeria Showroom</div>
              <div className="text-white/60 text-sm">Visit our physical showroom to experience luxury in person.</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-secondary/10 py-32">
        <div className="text-center max-w-3xl mx-auto space-y-12">
           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
             OUR <span className="text-gradient">MISSION</span>
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="space-y-4">
                <div className="text-5xl font-black text-primary/20 italic">01</div>
                <h4 className="text-white font-bold text-xl uppercase tracking-widest">Sourcing</h4>
                <p className="text-white/40 text-sm">Finding the best vehicles from official European dealerships with full history.</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-black text-primary/20 italic">02</div>
                <h4 className="text-white font-bold text-xl uppercase tracking-widest">Process</h4>
                <p className="text-white/40 text-sm">Transparent customs and logistics management for a worry-free experience.</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-black text-primary/20 italic">03</div>
                <h4 className="text-white font-bold text-xl uppercase tracking-widest">Support</h4>
                <p className="text-white/40 text-sm">End-to-end support even after the keys are handed over to the new owner.</p>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
}
