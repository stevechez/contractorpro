// components/sections/CTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-accent text-white">
      {/* Decorative background blurs to add depth to the solid color */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Ready to build a better online presence?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Stop losing high-ticket jobs to competitors with better websites. 
            Let's launch your premium, conversion-optimized site in the next 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/intake"
              className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-lg font-bold text-accent shadow-xl hover:bg-slate-100 hover:-translate-y-1 transition-all"
            >
              Start My Website
            </Link>
            <Link
              href="#pricing"
              className="w-full sm:w-auto rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all"
            >
              Review Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}