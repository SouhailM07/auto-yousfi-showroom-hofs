"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const CtaBanner = () => {
  return (
    <Section className="py-0 px-0">
      <div className="bg-primary/10 border-y border-primary/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">
              LOOKING FOR A <span className="text-primary NOT-italic">SPECIFIC CAR?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              We can help you find and import any vehicle from Europe. Contact our specialists today for a custom quote.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="h-16 px-10 gap-3">
              <MessageCircle className="w-5 h-5 fill-white" />
              Request a Car
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 gap-3 border-white/20 hover:bg-white/5">
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
