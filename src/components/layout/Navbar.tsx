"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Inventory", href: "/inventory" },
  { name: "Brands", href: "/#brands" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass-dark py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow-primary transition-transform group-hover:scale-110">
            <Car className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            AUTO <span className="text-primary">YOUSFI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="/inventory"
            className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full neon-glow-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Browse Cars
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-4 rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-primary px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <Link
                href="/inventory"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-primary text-white text-center font-bold rounded-xl"
              >
                Browse Cars
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
