import { Hero } from "@/components/home/Hero";
import { Brands } from "@/components/home/Brands";
import { FeaturedCars } from "@/components/home/FeaturedCars";
import { Services } from "@/components/home/Services";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <FeaturedCars />
      <Services />
      <CtaBanner />
    </>
  );
}
