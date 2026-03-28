"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { BRANDS } from "@/types/car";
import { useInventoryStore } from "@/store/useInventoryStore";
import { cn } from "@/lib/utils";

export const FilterBar = () => {
  const { filters, setFilter, resetFilters } = useInventoryStore();

  const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
  const years = [2024, 2023, 2022, 2021, 2020];

  return (
    <div className="glass-dark p-6 rounded-3xl border border-white/10 space-y-8 sticky top-24">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold text-lg">Filters</h3>
        <button 
          onClick={resetFilters}
          className="text-primary text-xs font-bold uppercase tracking-widest hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        <input 
          type="text" 
          placeholder="Search cars..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Brand */}
      <div className="space-y-4">
        <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Brand</label>
        <div className="flex flex-wrap gap-2">
          {["All", ...BRANDS].map((brand) => (
            <button
              key={brand}
              onClick={() => setFilter("brand", brand)}
              className={cn(
                "px-4 py-2 rounded-lg text-xs font-medium transition-all border",
                (filters.brand === brand || (brand === "All" && !filters.brand))
                  ? "bg-primary border-primary text-white neon-glow-primary"
                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
              )}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div className="space-y-4">
        <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Fuel Type</label>
        <div className="grid grid-cols-2 gap-2">
          {fuelTypes.map((fuel) => (
            <button
              key={fuel}
              onClick={() => setFilter("fuel", fuel)}
              className={cn(
                "px-4 py-3 rounded-xl text-xs font-medium transition-all border text-left",
                filters.fuel === fuel
                  ? "bg-primary border-primary text-white"
                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
              )}
            >
              {fuel}
            </button>
          ))}
        </div>
      </div>

      {/* Year */}
      <div className="space-y-4">
        <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Year</label>
        <select 
          onChange={(e) => setFilter("year", parseInt(e.target.value))}
          value={filters.year || ""}
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">Any Year</option>
          {years.map(y => (
            <option key={y} value={y} className="bg-secondary">{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
