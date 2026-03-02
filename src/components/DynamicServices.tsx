// components/sections/DynamicServices.tsx
"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import manifest from "@/config/project-manifest.json";

export default function DynamicServices() {
  // 1. Filter only the active services from your Master Manifest
  const activeServices = manifest.services.filter((s) => s.active);

  return (
    <section id="services" className="py-24 bg-slate-950 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-white mb-4">
            Our <span className="text-accent">Expertise.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl font-light">
            Precision-engineered solutions tailored to your specific trade and project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service, index) => {
            // Dynamically resolve the icon component from Lucide
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:border-accent/50 transition-all"
              >
                <div className="bg-accent/10 border border-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Visual "Engineered" flourish */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icons.ArrowUpRight className="w-4 h-4 text-accent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}