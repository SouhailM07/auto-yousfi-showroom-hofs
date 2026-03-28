"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useInventoryStore } from "@/store/useInventoryStore";
import { Section } from "@/components/ui/Section";
import { CarCard } from "@/components/ui/CarCard";
import { Button } from "@/components/ui/Button";

export const FeaturedCars = () => {
  const allCars = useInventoryStore((state) => state.cars);
  const cars = React.useMemo(() => allCars.filter(c => c.isFeatured), [allCars]);


  return (
    <Section id="inventory">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
            <span className="w-8 h-[1px] bg-primary" />
            Featured Inventory
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            DISCOVER THE <span className="text-gradient">NEWEST ARRIVALS</span>
          </h2>
        </div>
        
        <Link href="/inventory">
          <Button variant="outline" className="group">
            View All Inventory
            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, i) => (
          <CarCard key={car.id} car={car} index={i} />
        ))}
      </div>
    </Section>
  );
};
