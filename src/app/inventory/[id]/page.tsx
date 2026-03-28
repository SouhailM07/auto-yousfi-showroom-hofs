"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  Calendar, 
  Fuel, 
  Gauge, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Phone,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { MOCK_CARS } from "@/types/car";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const car = MOCK_CARS.find((c) => c.id === resolvedParams.id);

  if (!car) {
    return (
      <div className="pt-32 min-h-screen text-center flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-white">Car Not Found</h1>
        <Link href="/inventory">
          <Button>Back to Inventory</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-mesh">
      <Section>
        {/* Back Link */}
        <Link 
          href="/inventory" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Side */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5"
            >
              <Image 
                src={car.image} 
                alt={car.name} 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
            
            <div className="grid grid-cols-3 gap-6">
              {car.images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 cursor-pointer hover:border-primary transition-all">
                  <Image src={img} alt={`${car.name} ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                <span className="w-8 h-[1px] bg-primary" />
                {car.brand} {car.year}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                {car.name}
              </h1>
              <div className="text-4xl font-bold text-primary neon-glow-primary inline-block">
                {car.price.toLocaleString()} DZD
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="space-y-1">
                <Calendar className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Year</div>
                <div className="text-white font-bold">{car.year}</div>
              </div>
              <div className="space-y-1">
                <Gauge className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Mileage</div>
                <div className="text-white font-bold">{car.mileage.toLocaleString()} KM</div>
              </div>
              <div className="space-y-1">
                <Fuel className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Fuel</div>
                <div className="text-white font-bold">{car.fuel}</div>
              </div>
              <div className="space-y-1">
                <Zap className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Power</div>
                <div className="text-white font-bold">{car.hp} HP</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Vehicle Description</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                {car.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Key Features</h3>
              <div className="grid grid-cols-2 gap-y-3">
                {car.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 h-16 gap-3 group">
                <MessageCircle className="w-5 h-5 fill-white" />
                WhatsApp Inquiry
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="flex-1 h-16 gap-3 border-white/20 hover:bg-white/5">
                <Phone className="w-5 h-5" />
                Call Showroom
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-accent/10 border border-accent/20">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <div className="text-sm">
                <span className="text-white font-bold block">Verified Car Import</span>
                <span className="text-white/50">This vehicle has passed all European and local inspections.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
