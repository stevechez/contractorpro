// components/sections/TrustedBy.tsx
"use client";

import { motion } from "framer-motion";
import { Hexagon, Triangle, Box, Shield, Mountain, Zap } from "lucide-react";

interface TrustedByProps {
  label?: string;
}

// High-end placeholder logos using geometric Lucide icons
const logos = [
  { name: "Apex Builders", icon: Mountain },
  { name: "Summit Contracting", icon: Triangle },
  { name: "Vanguard Construction", icon: Shield },
  { name: "Pinnacle Developments", icon: Hexagon },
  { name: "Ironclad Roofing", icon: Box },
  { name: "Titan Hardscapes", icon: Zap },
];

export default function TrustedBy({ 
  label = "Trusted by elite contractors across North America" 
}: TrustedByProps) {
  return (
    <section className="relative bg-slate-950 py-16 overflow-hidden border-b border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        
        {/* Ultra-wide tracked typography for the label */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase text-center mb-10"
        >
          {label}
        </motion.p>

        {/* The Infinite Marquee Container */}
        <div 
          className="w-full relative flex overflow-hidden"
          // This mask creates the smooth fade out to black on the left and right edges!
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <motion.div
            className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35, // Smooth, slow crawl
              repeat: Infinity,
            }}
          >
            {/* Double the array for a seamless loop */}
            {[...logos, ...logos].map((logo, index) => {
              const Icon = logo.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group"
                >
                  <Icon className="w-7 h-7 text-slate-300 group-hover:text-accent transition-colors duration-500 drop-shadow-sm" />
                  <span className="text-xl font-bold tracking-tight text-slate-300 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}