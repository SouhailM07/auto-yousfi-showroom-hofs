import React from "react";
import { MessageCircle } from "lucide-react";

export const StickyContact = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <a
        href="https://wa.me/213550000000"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        
        {/* Tooltip */}
        <span className="absolute right-20 px-4 py-2 bg-secondary text-white text-sm font-bold rounded-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/10">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
