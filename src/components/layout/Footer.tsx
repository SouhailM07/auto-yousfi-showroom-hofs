import React from "react";
import Link from "next/link";
import { Car, Globe, Share2, Mail, MapPin, Phone, MessageCircle } from "lucide-react";


const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Inventory", href: "/inventory" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Brands",
    links: [
      { name: "Volkswagen", href: "/inventory?brand=Volkswagen" },
      { name: "BMW", href: "/inventory?brand=BMW" },
      { name: "Mercedes-Benz", href: "/inventory?brand=Mercedes-Benz" },
      { name: "Audi", href: "/inventory?brand=Audi" },
      { name: "Porsche", href: "/inventory?brand=Porsche" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative mt-20 bg-secondary/30 border-t border-white/5 pt-16 pb-8 px-6 text-white/70 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center neon-glow-primary transition-transform group-hover:scale-110">
              <Car className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              AUTO <span className="text-primary">YOUSFI</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Premium imported cars from Europe to Algeria. We provide trust, quality, and luxury delivery services.
          </p>
          <div className="flex gap-4">
            {[Globe, Share2, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-white font-bold text-lg">{section.title}</h4>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-lg">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm">
              <MapPin className="text-primary w-5 h-5 shrink-0" />
              <span>Algeria, Tipaza - Bousmail Showroom</span>
            </li>
            <li className="flex gap-3 text-sm">
              <Phone className="text-primary w-5 h-5 shrink-0" />
              <span>+213 550 00 00 00</span>
            </li>
            <li className="flex gap-3 text-sm">
              <Mail className="text-primary w-5 h-5 shrink-0" />
              <span>contact@autoyousfi.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-white/40">
        <p suppressHydrationWarning>© {new Date().getFullYear()} AUTO YOUSFI - ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
