// components/hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container relative z-10 mx-auto px-6 py-32 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Premium Websites for General Contractors
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted">
          Launch a conversion-optimized, professional website in 48 hours.
          Built for contractors who want more calls — not complexity.
        </p>

        {/* Added sm:flex-row so buttons stack on mobile and sit side-by-side on desktop */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#pricing"
            className="rounded-xl bg-accent px-8 py-4 font-medium text-white hover:opacity-90 transition"
          >
            View Pricing
          </Link>

          <Link
            href="/intake"
            className="rounded-xl border border-slate-300 px-8 py-4 font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900 transition"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </section>
  );
}