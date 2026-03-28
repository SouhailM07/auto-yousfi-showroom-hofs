export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  mileage: number;
  engine: string;
  hp: number;
  description: string;
  features: string[];
  images: string[];
  isFeatured?: boolean;
}

export const BRANDS = [
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Porsche",
  "Land Rover",
  "Skoda",
];

export const MOCK_CARS: Car[] = [
  {
    id: "1",
    name: "Volkswagen Golf 8 R",
    brand: "Volkswagen",
    model: "Golf 8 R",
    year: 2024,
    price: 12500000,
    image: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=2070",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: 0,
    engine: "2.0 TSI",
    hp: 320,
    description: "The ultimate performance hatchback, imported directly from Germany.",
    features: ["AWD", "Sunroof", "Harman Kardon", "IQ.Light"],
    images: ["https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=2070"],
    isFeatured: true,
  },
  {
    id: "2",
    name: "BMW M4 Competition",
    brand: "BMW",
    model: "M4",
    year: 2023,
    price: 24000000,
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=2070",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: 5500,
    engine: "3.0 M TwinPower Turbo",
    hp: 510,
    description: "A masterpiece of engineering and performance.",
    features: ["Carbon Seats", "M Drift Analyzer", "Laser Lights"],
    images: ["https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=2070"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "Mercedes-Benz G63 AMG",
    brand: "Mercedes-Benz",
    model: "G-Class",
    year: 2024,
    price: 58000000,
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=2070",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: 0,
    engine: "4.0 V8 Biturbo",
    hp: 585,
    description: "The legendary G-Wagon in its most powerful form.",
    features: ["Night Package", "Burmester 3D", "Massaging Seats"],
    images: ["https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=2070"],
    isFeatured: true,
  },
  {
    id: "4",
    name: "Audi RS6 Avant",
    brand: "Audi",
    model: "RS6",
    year: 2024,
    price: 32000000,
    image: "https://images.unsplash.com/photo-1606148644561-9983b115bc0d?auto=format&fit=crop&q=80&w=2070",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: 1200,
    engine: "4.0 V8 TFSI",
    hp: 600,
    description: "The perfect blend of family station wagon and supercar performance.",
    features: ["Quattro", "Ceramic Brakes", "Matrix LED"],
    images: ["https://images.unsplash.com/photo-1606148644561-9983b115bc0d?auto=format&fit=crop&q=80&w=2070"],
    isFeatured: true,
  }
];
