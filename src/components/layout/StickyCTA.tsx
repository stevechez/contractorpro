// components/layout/StickyCTA.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 400px (past the hero)
      setIsVisible(window.scrollY > 400);
    };
    
    // Add passive: true for better scrolling performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          // Hide on medium screens and up, since the Navbar handles desktop CTAs
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden pointer-events-none"
        >
          {/* Pointer-events-auto re-enables clicking on the card itself, 
            so the invisible container doesn't block the rest of the page 
          */}
          <div className="pointer-events-auto mx-auto max-w-md rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-3 shadow-2xl flex items-center justify-between gap-4">
            
            <div className="flex flex-col pl-2">
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                Ready to build?
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Fast 48h turnaround.
              </span>
            </div>

            <Link
              href="/intake"
              className="whitespace-nowrap rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:bg-blue-700 active:scale-95"
            >
              Get Started
            </Link>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}