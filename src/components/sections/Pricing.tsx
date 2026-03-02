// components/sections/Pricing.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Premium, Custom-Tailored Design",
  "Mobile-First & Fully Responsive",
  "On-Page SEO Optimization",
  "High-Converting Lead Capture Form",
  "Fast 48-Hour Delivery",
  "Zero Monthly Maintenance Fees",
  "1-on-1 Strategy Call Included",
];

// Staggered animation for the feature list
const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 py-32 overflow-hidden">
      
      {/* Background Decor: Massive radial glow to draw the eye center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6"
          >
            Simple, Transparent Pricing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-400 font-light leading-relaxed"
          >
            Stop paying endless monthly retainers. Get a high-converting digital asset that you actually own, delivered in days.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mx-auto relative group"
        >
          {/* Animated Gradient Glow behind the card */}
          <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-b from-blue-500 via-accent to-slate-800 opacity-50 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* The Pricing Card */}
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl flex flex-col shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6 shadow-inner">
                The Pro Package
              </span>
              <div className="flex items-start justify-center gap-1">
                <span className="text-3xl font-semibold text-slate-400 mt-2">$</span>
                <span className="text-7xl font-extrabold text-white tracking-tighter">2,499</span>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-400">
                One-time payment. <span className="text-slate-200">Zero subscriptions.</span>
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

            <motion.ul 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-10 flex-grow"
            >
              {features.map((feature, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-center gap-4">
                  <div className="flex-shrink-0 text-accent">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 font-medium">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Glowing CTA Button */}
            <div className="relative mt-auto">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-accent opacity-50 blur transition duration-500 group-hover:opacity-100" />
              <Link
                href="/intake"
                className="relative flex w-full items-center justify-center rounded-xl bg-slate-950 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-900 ring-1 ring-white/20"
              >
                Apply for your Build
              </Link>
            </div>
            
            <p className="text-center text-xs text-slate-500 mt-6 uppercase tracking-wider font-semibold">
              Secure checkout via Lemon Squeezy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}