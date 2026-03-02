// components/AnimatedHeroText.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedHeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center space-y-4 max-w-3xl relative z-10"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Building Dreams With Precision & Trust
      </h1>
      <p className="text-lg text-gray-700">
        Expert general contracting services — from foundation to finish.
      </p>
      <a
        href="#contact"
        className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg"
      >
        Get A Free Quote
      </a>
    </motion.div>
  );
}