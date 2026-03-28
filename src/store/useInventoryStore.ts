import { create } from "zustand";
import { Car, MOCK_CARS } from "@/types/car";

interface InventoryState {
  cars: Car[];
  filters: {
    brand: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    year: number | null;
    fuel: string | null;
  };
  setFilter: (key: string, value: string | number | null) => void;

  resetFilters: () => void;
  filteredCars: () => Car[];
}

export const useInventoryStore = create<InventoryState>((set, get) => ({
  cars: MOCK_CARS,
  filters: {
    brand: null,
    minPrice: null,
    maxPrice: null,
    year: null,
    fuel: null,
  },
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value === "All" ? null : value },
    })),
  resetFilters: () =>
    set({
      filters: {
        brand: null,
        minPrice: null,
        maxPrice: null,
        year: null,
        fuel: null,
      },
    }),
  filteredCars: () => {
    const { cars, filters } = get();
    return cars.filter((car) => {
      if (filters.brand && car.brand !== filters.brand) return false;
      if (filters.minPrice && car.price < filters.minPrice) return false;
      if (filters.maxPrice && car.price > filters.maxPrice) return false;
      if (filters.year && car.year !== filters.year) return false;
      if (filters.fuel && car.fuel !== filters.fuel) return false;
      return true;
    });
  },
}));
