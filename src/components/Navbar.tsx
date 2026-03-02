// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="relative z-10 text-2xl font-extrabold tracking-tighter text-white transition-transform hover:scale-105"
        >
          Contractor<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Pro</span>
        </Link>

        {/* Desktop Navigation with Animated Pill */}
        <nav className="hidden md:flex items-center gap-2 relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.name)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.name}
              {/* The Sliding Hover Pill */}
              {hoveredPath === link.name && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10 border border-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          
          {/* Glowing CTA Button (Desktop) */}
          <div className="relative hidden md:block group">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-accent opacity-0 blur transition duration-500 group-hover:opacity-70" />
            <Link
              href="/intake"
              className="relative flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-950 transition-all hover:bg-slate-100 active:scale-95"
            >
              Start Your Build
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Staggered Reveal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold tracking-tight text-slate-300 hover:text-white transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="pt-6 mt-4 border-t border-white/10"
              >
                <Link
                  href="/intake"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-accent px-6 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                  Start Your Build
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}