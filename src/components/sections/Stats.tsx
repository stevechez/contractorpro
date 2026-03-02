// components/sections/Stats.tsx
"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "48h", label: "Avg. delivery" },
  { value: "120+", label: "Sites shipped" },
  { value: "4.9★", label: "Client rating" },
  { value: "30%", label: "Avg. conversion lift" },
];

const features = [
  "Fast 48h turnaround",
  "Mobile-first & SEO-ready",
  "Optimized for high-ticket leads",
];

export default function Stats() {
  return (
    <section className="bg-slate-950 text-white">
      {/* 1. The Stats Grid */}
      <div className="border-y border-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-800">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center py-10 px-4 text-center"
              >
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Built for Contractors Header & Features */}
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-10"
        >
          Built for General Contractors
        </motion.h2>

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800 border-y md:border md:rounded-xl border-slate-800 overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="flex-1 py-6 px-4 bg-slate-900/50 hover:bg-slate-900 transition-colors"
            >
              <span className="text-base font-medium text-slate-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}