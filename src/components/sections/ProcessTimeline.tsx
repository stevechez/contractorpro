// components/sections/ProcessTimeline.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardEdit, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Apply & Align",
    description: "Fill out our streamlined 2-minute intake form. We review your project to ensure we are a perfect fit, then send over a secure checkout link. No endless discovery calls or aggressive sales pitches.",
    icon: ClipboardEdit,
  },
  {
    id: "02",
    title: "The 48-Hour Build",
    description: "Once the flat fee is processed, our engineering team gets to work. We craft your custom digital asset, write the high-converting copy, and optimize the UI for your specific trade.",
    icon: Code2,
  },
  {
    id: "03",
    title: "Launch & Handover",
    description: "Your site goes live on a lightning-fast global edge network. We configure your local SEO, verify your lead-capture database, and hand over the keys to your new revenue engine.",
    icon: Rocket,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map the scroll progress (0 to 1) to a CSS percentage string (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-slate-950 py-32 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6"
          >
            How it works.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-slate-400 font-light max-w-2xl mx-auto"
          >
            A frictionless, transparent process designed to get your business online and generating leads in days, not months.
          </motion.p>
        </div>

        <div className="relative" ref={containerRef}>
          
          {/* The Static Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {/* The Animated Glowing Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 to-accent -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              // Alternate sides on desktop, keep left on mobile
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="relative flex items-center md:justify-between flex-col md:flex-row gap-8 md:gap-0 group">
                  
                  {/* Left spacer for odd rows (Desktop) */}
                  {!isEven && <div className="hidden md:block md:w-5/12" />}

                  {/* The Center Icon Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center relative z-20 group-hover:border-accent transition-colors duration-500 shadow-xl"
                    >
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="w-6 h-6 text-slate-400 group-hover:text-white relative z-10 transition-colors duration-500" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-5/12 pl-24 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
                  >
                    <span className="text-accent font-mono text-sm font-bold tracking-widest mb-3 block">
                      STEP {step.id}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light text-lg">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Right spacer for even rows (Desktop) */}
                  {isEven && <div className="hidden md:block md:w-5/12" />}
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}