"use client";

import React from "react";

import { Section } from "@/components/ui/Section";
import { FilterBar } from "@/components/inventory/FilterBar";
import { CarCard } from "@/components/ui/CarCard";
import { useInventoryStore } from "@/store/useInventoryStore";

export default function InventoryPage() {
  const { filteredCars } = useInventoryStore();
  const cars = filteredCars();

  return (
    <div className="pt-24 min-h-screen bg-mesh">
      <Section>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              OUR <span className="text-primary">INVENTORY</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Explore our selection of premium imported cars. Each vehicle is hand-picked and verified for quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <FilterBar />
            </aside>

            {/* Car Grid */}
            <main className="lg:col-span-3">
              {cars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cars.map((car, i) => (
                    <CarCard key={car.id} car={car} index={i} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 border border-dashed border-white/10 rounded-3xl">
                  <div className="text-4xl">🚗💨</div>
                  <h3 className="text-xl font-bold text-white">No cars found</h3>
                  <p className="text-white/40">Try adjusting your filters to find what you&apos;re looking for.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </Section>
    </div>
  );
}
