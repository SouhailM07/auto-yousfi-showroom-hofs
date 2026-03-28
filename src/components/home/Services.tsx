"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ship, ClipboardCheck, Truck, ShieldCheck, Search } from "lucide-react";
import { Section } from "@/components/ui/Section";

const services = [
  {
    icon: Ship,
    title: "Car Import from Europe",
    desc: "We handle the entire import process from Germany, France, and beyond.",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: Search,
    title: "Custom Orders",
    desc: "Tell us what you need, and we'll find your dream car in the European market.",
    color: "from-primary/20 to-transparent",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Verification",
    desc: "Rigorous 100+ point checks to ensure the car is in perfect condition.",
    color: "from-green-500/20 to-transparent",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Safe and secure transport from Europe to your doorstep in Algeria.",
    color: "from-purple-500/20 to-transparent",
  },
];

export const Services = () => {
  return (
    <Section id="services" className="bg-secondary/5">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="text-primary font-bold text-sm uppercase tracking-widest">
          Why Choose Us
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          PREMIUM SERVICES FOR <span className="text-gradient">PREMIUM CARS</span>
        </h2>
        <p className="text-white/50 text-lg leading-relaxed">
          We bridge the gap between European quality and the Algerian market with a focus on trust and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-3xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 group-hover:text-white/70 transition-colors text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
