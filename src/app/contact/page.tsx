"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Share2, MessageCircle, Send } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-mesh">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="text-primary font-bold text-sm uppercase tracking-widest">
                Get in Touch
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
                CONTACT <br />
                <span className="text-gradient">OUR TEAM</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                Have questions about a vehicle or the import process? We&apos;re here to help.

              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary neon-glow-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-white font-bold text-xl capitalize">Showroom Location</div>
                  <p className="text-white/50">Cité 120 Logements, Bousmail, Tipaza, Algeria</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary neon-glow-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-white font-bold text-xl capitalize">Phone Numbers</div>
                  <p className="text-white/50">+213 (0) 550 00 00 00</p>
                  <p className="text-white/50">+213 (0) 770 00 00 00</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary neon-glow-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-white font-bold text-xl capitalize">Email Inquiry</div>
                  <p className="text-white/50">sales@autoyousfi.com</p>
                  <p className="text-white/50">info@autoyousfi.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
               {[Globe, Share2, MessageCircle].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                   <Icon className="w-6 h-6 text-white" />
                 </a>
               ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-dark p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-2">
                 <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                 <input 
                   type="text" 
                   placeholder="John Doe" 
                   className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Phone Number</label>
                 <input 
                   type="tel" 
                   placeholder="+213 --- -- -- --" 
                   className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                 <textarea 
                   rows={5}
                   placeholder="I am interested in the Volkswagen Golf 8 R..." 
                   className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all resize-none"
                 />
               </div>

               <Button size="lg" className="w-full h-16 text-lg gap-2">
                 <Send className="w-5 h-5" />
                 Send Message
               </Button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Map Section Placeholder */}
      <Section className="py-0 px-0 mt-20">
        <div className="w-full h-96 bg-secondary/30 relative overflow-hidden grayscale contrast-125 border-y border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="p-8 glass rounded-3xl text-center space-y-4">
                <MapPin className="w-10 h-10 text-primary mx-auto neon-glow-primary" />
                <h4 className="text-white font-bold text-xl uppercase tracking-tighter">Google Maps Integration</h4>
                <p className="text-white/40 text-sm">Interactive map would be loaded here with API key.</p>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
