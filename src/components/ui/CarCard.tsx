"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Fuel, Gauge, ArrowRight } from "lucide-react";
import { Car } from "@/types/car";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface CarCardProps {
  car: Car;
  index: number;
}

export const CarCard = ({ car, index }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-secondary/20 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
        
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-primary px-4 py-2 rounded-full text-white font-bold text-sm neon-glow-primary">
          {car.price.toLocaleString()} DZD
        </div>

        {/* Brand Logo Watermark */}
        <div className="absolute bottom-4 left-4 text-white/20 font-black text-3xl uppercase tracking-tighter pointer-events-none">
          {car.brand}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {car.name}
          </h3>
          <p className="text-white/50 text-sm mt-1">{car.year} • {car.engine}</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-white/60 text-xs">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-xs">
            <Fuel className="w-4 h-4 text-primary" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-xs">
            <Gauge className="w-4 h-4 text-primary" />
            <span>{car.mileage.toLocaleString()} KM</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-xs">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <Link href={`/inventory/${car.id}`} className="block">
          <Button variant="outline" className="w-full mt-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
